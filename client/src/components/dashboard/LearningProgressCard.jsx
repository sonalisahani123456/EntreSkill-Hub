import { useNavigate } from "react-router-dom";
import learningData from "../../data/learningData";

function LearningProgressCard() {
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        Learning Progress
      </h2>

      <p className="mt-2 text-slate-500">
        Keep learning to unlock more business opportunities.
      </p>

      <div className="mt-6">
        <div className="flex justify-between text-sm font-medium">
          <span>
            {learningData.completedCourses} /{" "}
            {learningData.totalCourses} Courses
          </span>

          <span className="text-blue-600">
            {learningData.progress}%
          </span>
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600"
            style={{
              width: `${learningData.progress}%`,
            }}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={() => navigate("/learning-hub")}
        className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Continue Learning
      </button>
    </div>
  );
}

export default LearningProgressCard;