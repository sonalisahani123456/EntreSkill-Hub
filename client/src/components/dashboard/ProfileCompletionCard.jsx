import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserRound, CheckCircle2 } from "lucide-react";

function ProfileCompletionCard() {
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    calculateProfileCompletion();
  }, []);

  const calculateProfileCompletion = () => {
    const savedProfile = localStorage.getItem("userProfile");

    if (!savedProfile) {
      setProgress(0);
      return;
    }

    const profile = JSON.parse(savedProfile);

    const fields = [
      profile.name,
      profile.email,
      profile.phone,
      profile.location,
      profile.skill,
      profile.goal,
    ];

    const completedFields = fields.filter(
      (field) =>
        field &&
        typeof field === "string" &&
        field.trim() !== ""
    ).length;

    const percentage = Math.round(
      (completedFields / fields.length) * 100
    );

    setProgress(percentage);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Profile Completion
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Complete your profile to get better AI recommendations.
          </p>
        </div>

        <div className="shrink-0 rounded-xl bg-blue-100 p-3">
          <UserRound
            size={22}
            className="text-blue-600"
          />
        </div>

      </div>

      {/* Progress */}
      <div className="mt-6">

        <div className="flex items-center justify-between">

          <span className="text-sm font-medium text-slate-600">
            Completion
          </span>

          <span className="font-bold text-blue-600">
            {progress}%
          </span>

        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Status */}
      <div className="mt-5 flex items-center gap-2 text-sm">

        {progress === 100 ? (
          <>
            <CheckCircle2
              size={17}
              className="text-green-600"
            />

            <span className="font-medium text-green-700">
              Your profile is complete!
            </span>
          </>
        ) : (
          <span className="text-slate-500">
            Add more information to improve your recommendations.
          </span>
        )}

      </div>

      {/* Button */}
      <button
        type="button"
        onClick={() => navigate("/profile")}
        className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        {progress === 100
          ? "View Profile"
          : "Complete Profile"}
      </button>

    </div>
  );
}

export default ProfileCompletionCard;