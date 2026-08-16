import DashboardLayout from "../../layouts/DashboardLayout";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatsSection from "../../components/dashboard/StatsSection";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";

import SkillAssessmentCard from "../../components/dashboard/SkillAssessmentCard";
import BusinessRecommendationCard from "../../components/dashboard/BusinessRecommendationCard";
import RoadmapCard from "../../components/dashboard/RoadmapCard";
import LearningProgressCard from "../../components/dashboard/LearningProgressCard";
import MentorSuggestionsCard from "../../components/dashboard/MentorSuggestionsCard";
import RecentActivityCard from "../../components/dashboard/RecentActivityCard";
import UpcomingTasksCard from "../../components/dashboard/UpcomingTasksCard";
import ProfileCompletionCard from "../../components/dashboard/ProfileCompletionCard";
import ProgressOverviewCard from "../../components/dashboard/ProgressOverviewCard";
function UserDashboard() {
  return (
    <DashboardLayout>

      {/* Dashboard */}
      <section
        id="dashboard"
        className="scroll-mt-6"
      >
        <WelcomeBanner />

        <StatsSection />

        <div className="mt-8">
          <AnalyticsChart />
        </div>
      </section>


      {/* Skill Assessment + Business Ideas */}
      <section
        id="skill-assessment"
        className="mt-8 scroll-mt-6"
      >
        <div className="grid gap-6 xl:grid-cols-2">

          <SkillAssessmentCard />

          <div
            id="business-ideas"
            className="scroll-mt-6"
          >
            <BusinessRecommendationCard />
          </div>

        </div>
      </section>


      {/* Roadmaps */}
      <section
        id="roadmaps"
        className="mt-6 scroll-mt-6"
      >
        <RoadmapCard />
      </section>


      {/* Learning Hub + Mentors */}
      <section
        id="learning-hub"
        className="mt-6 scroll-mt-6"
      >
        <div className="grid gap-6 xl:grid-cols-2">

          <LearningProgressCard />

          <div
            id="mentors"
            className="scroll-mt-6"
          >
            <MentorSuggestionsCard />
          </div>

        </div>
      </section>


      {/* Progress */}
      <section
        id="progress"
        className="mt-6 scroll-mt-6"
      >
        <ProgressOverviewCard />
      </section>


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