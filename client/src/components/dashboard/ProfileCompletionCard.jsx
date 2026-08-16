import { useNavigate } from "react-router-dom";

function ProfileCompletionCard() {
  const navigate = useNavigate();

  const progress = 75;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold text-slate-900">
        Profile Completion
      </h2>

      <p className="mt-2 text-slate-500">
        Complete your profile to get better AI recommendations.
      </p>

      <div className="mt-6">

        <div className="flex justify-between">
          <span>Completion</span>

          <span className="font-semibold text-blue-600">
            {progress}%
          </span>
        </div>

        <div className="mt-3 h-3 rounded-full bg-slate-200">

          <div
            className="h-3 rounded-full bg-blue-600"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      <button
        type="button"
        onClick={() => navigate("/profile")}
        className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Complete Profile
      </button>

    </div>
  );
}

export default ProfileCompletionCard;