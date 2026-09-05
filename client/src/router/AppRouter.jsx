import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/public/LandingPage";
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
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* User Dashboard */}
        <Route
          path="/dashboard"
          element={<UserDashboard />}
        />

        {/* User Profile */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* User Settings */}
        <Route
          path="/settings"
          element={<Settings />}
        />

        {/* Skill Assessment */}
        <Route
          path="/skill-assessment"
          element={<SkillAssessment />}
        />

        {/* Business Details */}
        <Route
          path="/business-details"
          element={<BusinessDetails />}
        />

        {/* Learning Hub */}
        <Route
          path="/learning-hub"
          element={<LearningHub />}
        />
          <Route
  path="/learning-hub/course/:courseId"
  element={<CourseDetails />}
/>
        {/* Mentor Details */}
        <Route
          path="/mentor-details"
          element={<MentorDetails />}
        />
         {/* Book Session */}
        <Route
  path="/book-session"
  element={<BookSession />}
/>
<Route
  path="/business-recommendation"
  element={<BusinessRecommendation />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;