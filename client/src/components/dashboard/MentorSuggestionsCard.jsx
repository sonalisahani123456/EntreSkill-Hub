import mentorData from "../../data/mentorData";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function MentorSuggestionsCard() {
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold text-slate-900">
        Recommended Mentors
      </h2>

      <div className="mt-6 space-y-5">

        {mentorData.map((mentor) => (
          <div
            key={mentor.id}
            className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"
          >

            <div>
              <h3 className="font-semibold text-slate-900">
                {mentor.name}
              </h3>

              <p className="text-sm text-slate-500">
                {mentor.expertise}
              </p>
            </div>

            <div className="text-right">

              <div className="flex items-center justify-end gap-1 text-yellow-500">
                <Star
                  size={16}
                  fill="currentColor"
                />

                <span>
                  {mentor.rating}
                </span>
              </div>

              <button
                onClick={() =>
                  navigate("/mentor-details", {
                    state: {
                      mentorId: mentor.id,
                    },
                  })
                }
                className="mt-2 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white transition hover:bg-blue-700"
              >
                Connect
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default MentorSuggestionsCard;