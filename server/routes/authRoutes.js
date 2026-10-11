const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

const publicUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  phone: user.phone || "",
  location: user.location || "",
  skill: user.skill || "",
  goal: user.goal || "",
  skillAssessment: user.skillAssessment || { score: 0, answers: {}, completedAt: null },
});

router.post("/signup", async (req, res) => {
  try {
    const name = String(req.body.name || "").trim();
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");
    if (!name || !email || !password) return res.status(400).json({ message: "Name, email and password are required." });
    if (password.length < 6) return res.status(400).json({ message: "Password must be at least 6 characters." });
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: "An account with this email already exists." });
    const user = await User.create({ name, email, password: await bcrypt.hash(password, 10) });
    return res.status(201).json({ message: "Account created successfully.", user: publicUser(user) });
  } catch (error) {
    console.error("Signup error:", error.message);
    if (error.code === 11000) return res.status(409).json({ message: "An account with this email already exists." });
    return res.status(500).json({ message: "Unable to create account right now." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");
    if (!email || !password) return res.status(400).json({ message: "Email and password are required." });
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) return res.status(401).json({ message: "Invalid email or password." });
    if (!process.env.JWT_SECRET) return res.status(500).json({ message: "Authentication is not configured on the server." });
    const token = jwt.sign({ userId: user._id.toString(), email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return res.json({ message: "Login successful.", token, user: publicUser(user) });
  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).json({ message: "Unable to log in right now." });
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found." });
    return res.json({ user: publicUser(user) });
  } catch (error) {
    console.error("Get user error:", error.message);
    return res.status(500).json({ message: "Unable to load your account." });
  }
});

router.put("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ message: "User not found." });
    const name = String(req.body.name ?? user.name).trim();
    const email = String(req.body.email ?? user.email).trim().toLowerCase();
    if (!name || !email) return res.status(400).json({ message: "Name and email are required." });
    const duplicate = await User.findOne({ email, _id: { $ne: user._id } });
    if (duplicate) return res.status(409).json({ message: "That email is already in use." });
    user.name = name;
    user.email = email;
    for (const field of ["phone", "location", "skill", "goal"]) {
      if (req.body[field] !== undefined) user[field] = String(req.body[field]).trim();
    }
    await user.save();
    return res.json({ message: "Profile updated successfully.", user: publicUser(user) });
  } catch (error) {
    console.error("Profile update error:", error.message);
    return res.status(500).json({ message: "Unable to update your profile." });
  }
});

router.put("/assessment", authMiddleware, async (req, res) => {
  try {
    const score = Number(req.body.score);
    const answers = req.body.answers;
    if (!Number.isFinite(score) || score < 0 || score > 100 || !answers || typeof answers !== "object" || Array.isArray(answers)) {
      return res.status(400).json({ message: "A valid score and assessment answers are required." });
    }
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ message: "User not found." });
    user.skillAssessment = { score: Math.round(score), answers, completedAt: new Date() };
    await user.save();
    return res.json({ message: "Assessment saved successfully.", skillAssessment: user.skillAssessment });
  } catch (error) {
    console.error("Assessment save error:", error.message);
    return res.status(500).json({ message: "Unable to save your assessment." });
  }
});

module.exports = router;
