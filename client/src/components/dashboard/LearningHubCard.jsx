import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  PlayCircle,
  CheckCircle2,
} from "lucide-react";

import PremiumCard from "../common/PremiumCard";
import learningCourses from "../../data/learningCourses";

function LearningHubCard() {
  const [progress, setProgress] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const savedProgress =
      localStorage.getItem("learningProgress");

    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const startCourse = (courseId) => {
    const updatedProgress = {
      ...progress,
      [courseId]: progress[courseId] || 25,
    };

    setProgress(updatedProgress);

    localStorage.setItem(
      "learningProgress",
      JSON.stringify(updatedProgress)
    );
     navigate(`/learning-hub/course/${courseId}`);
  };

  const completeCourse = (courseId) => {
    const updatedProgress = {
      ...progress,
      [courseId]: 100,
    };

    setProgress(updatedProgress);

    localStorage.setItem(
      "learningProgress",
      JSON.stringify(updatedProgress)
    );
  };

  return (
    <PremiumCard
      title="Learning Hub"
      subtitle="Build the skills you need to grow your business."
      icon={<BookOpen size={28} />}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {learningCourses.map((course) => {
          const courseProgress = progress[course.id] || 0;
          const isCompleted = courseProgress === 100;

          return (
            <div
              key={course.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              {/* Course Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    {course.category}
                  </span>

                  <h3 className="mt-3 font-bold text-slate-900">
                    {course.title}
                  </h3>
                </div>

                {isCompleted && (
                  <CheckCircle2
                    size={22}
                    className="shrink-0 text-green-600"
                  />
                )}
              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {course.description}
              </p>

              {/* Course Info */}
              <div className="mt-4 flex items-center justify-between text-xs font-medium text-slate-500">
                <span>
                  {course.lessons.length} Lessons
                </span>

                <span>
                  {course.level}
                </span>
              </div>

              {/* Progress */}
              <div className="mt-4">
                <div className="mb-2 flex justify-between text-xs">
                  <span className="font-medium text-slate-600">
                    Progress
                  </span>

                  <span className="font-semibold text-blue-600">
                    {courseProgress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-500"
                    style={{
                      width: `${courseProgress}%`,
                    }}
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => startCourse(course.id)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <PlayCircle size={17} />

                  {courseProgress === 0
                    ? "Start Learning"
                    : "Continue"}
                </button>

                {courseProgress > 0 &&
                  !isCompleted && (
                    <button
                      onClick={() =>
                        completeCourse(course.id)
                      }
                      className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-100"
                    >
                      Complete
                    </button>
                  )}
              </div>
            </div>
          );
        })}
      </div>
    </PremiumCard>
  );
}

export default LearningHubCard;