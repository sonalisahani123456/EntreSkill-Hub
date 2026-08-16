import {
  BookOpen,
  PlayCircle,
  CheckCircle2,
} from "lucide-react";

import learningData from "../../data/learningData";

function LearningHub() {
  return (
    <div className="min-h-screen bg-slate-100 p-6 lg:p-8">

      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
        <p className="text-blue-100">
          EntreSkill Hub
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Learning Hub
        </h1>

        <p className="mt-3 max-w-2xl text-blue-100">
          Build the knowledge and skills you need to turn
          your ideas into a successful business.
        </p>
      </div>

      {/* Progress */}
      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Your Learning Progress
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Keep learning to unlock more opportunities.
            </p>
          </div>

          <div className="rounded-xl bg-blue-50 p-3">
            <BookOpen
              size={24}
              className="text-blue-600"
            />
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-sm font-medium">
            <span>
              {learningData.completedCourses} /{" "}
              {learningData.totalCourses} Courses
            </span>

            <span className="font-bold text-blue-600">
              {learningData.progress}%
            </span>
          </div>

          <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{
                width: `${learningData.progress}%`,
              }}
            />
          </div>
        </div>

      </div>

      {/* Courses */}
      <div className="mt-6">

        <h2 className="text-2xl font-bold text-slate-900">
          Recommended Courses
        </h2>

        <p className="mt-2 text-slate-500">
          Learn practical skills for your entrepreneurial journey.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {/* Course 1 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-blue-100 p-3">
                <BookOpen
                  size={24}
                  className="text-blue-600"
                />
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                Beginner
              </span>
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Entrepreneurship Basics
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Learn the fundamentals of starting and managing
              your own business.
            </p>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700">
              <PlayCircle size={18} />
              Start Learning
            </button>

          </div>


          {/* Course 2 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-purple-100 p-3">
                <BookOpen
                  size={24}
                  className="text-purple-600"
                />
              </div>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Popular
              </span>
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Digital Marketing
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Learn how to promote your products and reach
              customers online.
            </p>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700">
              <PlayCircle size={18} />
              Start Learning
            </button>

          </div>


          {/* Course 3 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-orange-100 p-3">
                <BookOpen
                  size={24}
                  className="text-orange-600"
                />
              </div>

              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                Essential
              </span>
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Financial Planning
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Understand budgeting, pricing, expenses, and
              basic business finances.
            </p>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700">
              <PlayCircle size={18} />
              Start Learning
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LearningHub;