import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/public/LandingPage";
import UserDashboard from "../pages/user/UserDashboard";
import Profile from "../pages/user/Profile";
import Settings from "../pages/user/Settings";
import SkillAssessment from "../pages/user/SkillAssessment";
import BusinessDetails from "../pages/user/BusinessDetails";
import LearningHub from "../pages/user/LearningHub";
import MentorDetails from "../pages/user/MentorDetails";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/dashboard"
          element={<UserDashboard />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/settings"
           element={<Settings />}
         />
         <Route
           path="/skill-assessment"
           element={<SkillAssessment />}
          />
          <Route
            path="/business-details"
            element={<BusinessDetails />}
          />
          <Route 
            path ="/learning-hub"
            element={<LearningHub />}
            />
            <Route 
            path ="/mentor-details"
            element = {<MentorDetails />}
            />
            <Route
            path = "/profile"
            element ={<Profile />}
            />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;