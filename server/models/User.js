const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    phone: { type: String, default: "", trim: true },
    location: { type: String, default: "", trim: true },
    skill: { type: String, default: "", trim: true },
    goal: { type: String, default: "", trim: true },
    skillAssessment: {
      score: { type: Number, default: 0, min: 0, max: 100 },
      answers: { type: Map, of: Number, default: {} },
      completedAt: { type: Date, default: null },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
