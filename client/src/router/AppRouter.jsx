import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/public/LandingPage";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import UserDashboard from "../pages/user/UserDashboard";
import Profile from "../pages/user/Profile";
import Settings from "../pages/user/Settings";
import SkillAssessment from "../pages/user/SkillAssessment";
import BusinessDetails from "../pages/user/BusinessDetails";
import LearningHub from "../pages/user/LearningHub";
import MentorDetails from "../pages/user/MentorDetails";
import CourseDetails from "../pages/user/CourseDetails";
import BookSession from "../pages/user/BookSession";
import BusinessRecommendation from "../pages/user/BusinessRecommendation";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* User */}
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/skill-assessment" element={<SkillAssessment />} />
        <Route path="/business-details" element={<BusinessDetails />} />

        <Route path="/learning-hub" element={<LearningHub />} />

        <Route
          path="/learning-hub/course/:courseId"
          element={<CourseDetails />}
        />

        <Route path="/mentor-details" element={<MentorDetails />} />
        <Route path="/book-session" element={<BookSession />} />

        <Route
          path="/business-recommendation"
          element={<BusinessRecommendation />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;