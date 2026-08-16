import { useEffect, useState } from "react";
import {
  TrendingUp,
  Target,
  Route,
  BookOpen,
} from "lucide-react";

function ProgressOverviewCard() {
  const [roadmapProgress, setRoadmapProgress] = useState(0);
  const [learningProgress, setLearningProgress] = useState(0);

  useEffect(() => {
    // Roadmap progress
    const savedSteps = localStorage.getItem(
      "completedRoadmapSteps"
    );

    if (savedSteps) {
      const completedSteps = JSON.parse(savedSteps);

      const totalSteps = 6;

      const percentage = Math.round(
        (completedSteps.length / totalSteps) * 100
      );

      setRoadmapProgress(percentage);
    }

    // Learning progress
    const savedLearning = localStorage.getItem(
      "learningProgress"
    );

    if (savedLearning) {
      const progressData = JSON.parse(savedLearning);

      const values = Object.values(progressData);

      if (values.length > 0) {
        const average =
          values.reduce(
            (sum, value) => sum + value,
            0
          ) / values.length;

        setLearningProgress(Math.round(average));
      }
    }
  }, []);

  const skillProgress = 85;

  const overallProgress = Math.round(
    (skillProgress +
      roadmapProgress +
      learningProgress) /
      3
  );

  const progressItems = [
    {
      title: "Skill Assessment",
      value: skillProgress,
      icon: Target,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Roadmap",
      value: roadmapProgress,
      icon: Route,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Learning",
      value: learningProgress,
      icon: BookOpen,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Overall Progress
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Track your entrepreneurial journey.
          </p>
        </div>

        <div className="rounded-xl bg-blue-100 p-3">
          <TrendingUp
            size={24}
            className="text-blue-600"
          />
        </div>

      </div>

      {/* Overall */}
      <div className="mt-8 rounded-2xl bg-blue-50 p-5">

        <div className="flex items-end justify-between">

          <div>
            <p className="text-sm font-medium text-slate-500">
              Overall Completion
            </p>

            <p className="mt-1 text-4xl font-bold text-blue-600">
              {overallProgress}%
            </p>
          </div>

          <span className="text-sm font-semibold text-slate-600">
            Keep going!
          </span>

        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-blue-100">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-700"
            style={{
              width: `${overallProgress}%`,
            }}
          />
        </div>

      </div>

      {/* Individual Progress */}
      <div className="mt-6 space-y-5">

        {progressItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title}>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div
                    className={`rounded-xl p-2 ${item.bg}`}
                  >
                    <Icon
                      size={18}
                      className={item.color}
                    />
                  </div>

                  <span className="font-medium text-slate-700">
                    {item.title}
                  </span>

                </div>

                <span className="font-bold text-slate-900">
                  {item.value}%
                </span>

              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-700"
                  style={{
                    width: `${item.value}%`,
                  }}
                />
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default ProgressOverviewCard;