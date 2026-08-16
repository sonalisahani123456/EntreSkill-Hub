import { useEffect, useState } from "react";
import {
  Route,
  CheckCircle2,
  Circle,
} from "lucide-react";

import PremiumCard from "../common/PremiumCard";
import roadmapSteps from "../../data/roadmapSteps";

function RoadmapCard() {
  const [completedSteps, setCompletedSteps] = useState([]);

  useEffect(() => {
    const savedSteps = localStorage.getItem("completedRoadmapSteps");

    if (savedSteps) {
      setCompletedSteps(JSON.parse(savedSteps));
    }
  }, []);

  const toggleStep = (stepId) => {
    setCompletedSteps((previous) => {
      let updatedSteps;

      if (previous.includes(stepId)) {
        updatedSteps = previous.filter(
          (id) => id !== stepId
        );
      } else {
        updatedSteps = [...previous, stepId];
      }

      localStorage.setItem(
        "completedRoadmapSteps",
        JSON.stringify(updatedSteps)
      );

      return updatedSteps;
    });
  };

  const completedCount = completedSteps.length;

  const progress = Math.round(
    (completedCount / roadmapSteps.length) * 100
  );

  return (
    <PremiumCard
      title="Startup Roadmap"
      subtitle="Follow these steps to turn your skills into a sustainable business."
      icon={<Route size={28} />}
    >
      {/* Progress Header */}
      <div className="rounded-2xl bg-blue-50 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Your Progress
            </p>

            <p className="mt-1 text-2xl font-bold text-blue-600">
              {progress}%
            </p>
          </div>

          <p className="text-sm font-semibold text-slate-600">
            {completedCount}/{roadmapSteps.length} completed
          </p>
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-blue-100">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* Roadmap Steps */}
      <div className="mt-8 space-y-4">
        {roadmapSteps.map((step, index) => {
          const isCompleted = completedSteps.includes(step.id);

          return (
            <button
              key={step.id}
              onClick={() => toggleStep(step.id)}
              className={`flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition ${
                isCompleted
                  ? "border-green-200 bg-green-50"
                  : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
              }`}
            >
              {/* Status */}
              <div className="mt-1 shrink-0">
                {isCompleted ? (
                  <CheckCircle2
                    size={25}
                    className="text-green-600"
                  />
                ) : (
                  <Circle
                    size={25}
                    className="text-slate-400"
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3
                    className={`font-bold ${
                      isCompleted
                        ? "text-green-700"
                        : "text-slate-800"
                    }`}
                  >
                    Step {index + 1}: {step.title}
                  </h3>

                  {isCompleted && (
                    <span className="text-xs font-semibold text-green-600">
                      Completed
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </PremiumCard>
  );
}

export default RoadmapCard;