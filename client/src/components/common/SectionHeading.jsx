import DashboardLayout from "../../layouts/DashboardLayout";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatsSection from "../../components/dashboard/StatsSection";

import SkillAssessmentCard from "../../components/dashboard/SkillAssessmentCard";
import BusinessRecommendationCard from "../../components/dashboard/BusinessRecommendationCard";
import RoadmapCard from "../../components/dashboard/RoadmapCard";
import LearningProgressCard from "../../components/dashboard/LearningProgressCard";
import MentorSuggestionsCard from "../../components/dashboard/MentorSuggestionsCard";
import RecentActivityCard from "../../components/dashboard/RecentActivityCard";
import UpcomingTasksCard from "../../components/dashboard/UpcomingTasksCard";
import ProfileCompletionCard from "../../components/dashboard/ProfileCompletionCard";

function UserDashboard() {
  return (
    <DashboardLayout>
      <WelcomeBanner />

      <StatsSection />

      {/* Skill + Recommendation */}
      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <SkillAssessmentCard />
        <BusinessRecommendationCard />
      </div>

      {/* Roadmap */}
      <div className="mt-6">
        <RoadmapCard />
      </div>

      {/* Learning + Mentor */}
      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <LearningProgressCard />
        <MentorSuggestionsCard />
      </div>

      {/* Bottom Cards */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <RecentActivityCard />
        <UpcomingTasksCard />
        <ProfileCompletionCard />
      </div>
    </DashboardLayout>
  );
}

export default UserDashboard;