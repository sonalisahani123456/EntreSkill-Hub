import { useEffect, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Circle,
  Clock,
  PlayCircle,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import learningCourses from "../../data/learningCourses";

function CourseDetails() {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const course = learningCourses.find(
    (item) => item.id === Number(courseId)
  );

  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    if (!course) return;

    const savedProgress = localStorage.getItem(
      `courseProgress-${course.id}`
    );

    if (savedProgress) {
      setCompletedLessons(JSON.parse(savedProgress));
    }
  }, [course]);

  // Course not found
  if (!course) {
    return (
      <div className="min-h-screen bg-slate-100 p-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 text-center shadow-sm">

          <h1 className="text-2xl font-bold text-slate-900">
            Course Not Found
          </h1>

          <p className="mt-2 text-slate-500">
            The course you are looking for does not exist.
          </p>

          <button
            onClick={() => navigate("/learning-hub")}
            className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Back to Learning Hub
          </button>

        </div>
      </div>
    );
  }

  // Toggle lesson
  const toggleLesson = (lessonId) => {
    setCompletedLessons((previous) => {
      let updatedLessons;

      if (previous.includes(lessonId)) {
        updatedLessons = previous.filter(
          (id) => id !== lessonId
        );
      } else {
        updatedLessons = [
          ...previous,
          lessonId,
        ];
      }

      localStorage.setItem(
        `courseProgress-${course.id}`,
        JSON.stringify(updatedLessons)
      );

      return updatedLessons;
    });
  };

  const totalLessons = course.lessons.length;

  const completedCount = completedLessons.length;

  const progress =
    totalLessons > 0
      ? Math.round(
          (completedCount / totalLessons) * 100
        )
      : 0;

  return (
    <div className="min-h-screen bg-slate-100 p-6 lg:p-8">

      <div className="mx-auto max-w-6xl">

        {/* Back Button */}
        <button
          onClick={() => navigate("/learning-hub")}
          className="mb-6 inline-flex items-center gap-2 font-medium text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to Learning Hub
        </button>


        {/* Course Header */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-sm md:p-10">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            {/* Course Info */}
            <div>

              <div className="mb-4 inline-flex rounded-xl bg-white/20 p-3">
                <BookOpen size={30} />
              </div>

              <p className="text-sm font-semibold text-blue-100">
                {course.category}
              </p>

              <h1 className="mt-2 text-3xl font-bold md:text-4xl">
                {course.title}
              </h1>

              <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                {course.description}
              </p>

            </div>


            {/* Course Stats */}
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">

              <p className="text-sm text-blue-100">
                Level
              </p>

              <p className="mt-1 text-xl font-bold">
                {course.level}
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-blue-100">
                <Clock size={17} />

                {totalLessons} Lessons
              </div>

            </div>

          </div>

        </div>


        {/* Progress */}
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Course Progress
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Complete lessons to track your learning progress.
              </p>
            </div>

            <span className="text-2xl font-bold text-blue-600">
              {progress}%
            </span>

          </div>


          {/* Progress Bar */}
          <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">

            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>


          <p className="mt-3 text-sm font-medium text-slate-500">
            {completedCount} / {totalLessons} lessons completed
          </p>

        </div>


        {/* Lessons */}
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

          {/* Lessons Header */}
          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-blue-100 p-3">
              <PlayCircle
                size={24}
                className="text-blue-600"
              />
            </div>

            <div>

              <h2 className="text-xl font-bold text-slate-900">
                Course Lessons
              </h2>

              <p className="text-sm text-slate-500">
                Complete each lesson at your own pace.
              </p>

            </div>

          </div>


          {/* Lesson List */}
          <div className="mt-6 space-y-4">

            {course.lessons.map((lesson, index) => {

              const isCompleted =
                completedLessons.includes(lesson.id);

              return (
                <div
                  key={lesson.id}
                  className={`rounded-2xl border p-5 transition ${
                    isCompleted
                      ? "border-green-200 bg-green-50"
                      : "border-slate-200 bg-white"
                  }`}
                >

                  <div className="flex items-start gap-4">

                    {/* Complete Button */}
                    <button
                      type="button"
                      onClick={() =>
                        toggleLesson(lesson.id)
                      }
                      className="mt-1 shrink-0"
                    >

                      {isCompleted ? (
                        <CheckCircle2
                          size={26}
                          className="text-green-600"
                        />
                      ) : (
                        <Circle
                          size={26}
                          className="text-slate-400 transition hover:text-blue-600"
                        />
                      )}

                    </button>


                    {/* Lesson Content */}
                    <div className="flex-1">

                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                        <h3
                          className={`text-lg font-bold ${
                            isCompleted
                              ? "text-green-700"
                              : "text-slate-900"
                          }`}
                        >
                          Lesson {index + 1}:{" "}
                          {lesson.title}
                        </h3>

                        {isCompleted && (
                          <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                            Completed
                          </span>
                        )}

                      </div>


                      {/* Lesson Content */}
                      <p className="mt-3 leading-7 text-slate-600">
                        {lesson.content}
                      </p>


                      {!isCompleted && (
                        <button
                          type="button"
                          onClick={() =>
                            toggleLesson(lesson.id)
                          }
                          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                          <CheckCircle2 size={16} />
                          Mark as Completed
                        </button>
                      )}

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>


        {/* Course Completed */}
        {progress === 100 && (
          <div className="mt-6 rounded-3xl border border-green-200 bg-green-50 p-6 text-center">

            <CheckCircle2
              size={40}
              className="mx-auto text-green-600"
            />

            <h2 className="mt-3 text-2xl font-bold text-green-700">
              Course Completed! 🎉
            </h2>

            <p className="mt-2 text-green-700">
              Great job! You have successfully completed this course.
            </p>

            <button
              onClick={() => navigate("/learning-hub")}
              className="mt-5 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Back to Learning Hub
            </button>

          </div>
        )}

      </div>

    </div>
  );
}

export default CourseDetails;