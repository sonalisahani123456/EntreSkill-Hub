import mentorData from "../../data/mentorData";
import { Star, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function MentorSuggestionsCard() {
  const navigate = useNavigate();

  const handleViewMentor = (mentorId) => {
  console.log("Clicked mentor:", mentorId);

  navigate("/mentor-details", {
    state: {
      mentorId,
    },
  });
};

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-slate-900">
          Recommended Mentors
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Connect with experienced professionals for guidance.
        </p>
      </div>

      {/* Mentors */}
      <div className="mt-6 space-y-4">

        {mentorData.map((mentor) => (
          <div
            key={mentor.id}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-white hover:shadow-sm"
          >

            <div className="flex items-center justify-between gap-4">

              {/* Mentor Info */}
              <div className="flex min-w-0 items-center gap-3">

                {/* Avatar */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                  {mentor.name.charAt(0)}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate font-semibold text-slate-900">
                    {mentor.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {mentor.expertise}
                  </p>
                </div>

              </div>

              {/* Rating */}
              <div className="shrink-0 text-right">

                <div className="flex items-center justify-end gap-1 text-yellow-500">
                  <Star
                    size={16}
                    fill="currentColor"
                  />

                  <span className="text-sm font-semibold text-slate-700">
                    {mentor.rating}
                  </span>
                </div>

              </div>

            </div>

            {/* Button */}
            <button
              type="button"
              onClick={() => handleViewMentor(mentor.id)}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View Mentor
              <ArrowRight size={16} />
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default MentorSuggestionsCard;