import { ArrowLeft, ArrowRight, BriefcaseBusiness, CheckCircle2, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import businessIdeas from "../../data/businessIdeas";
import businessRecommendationData from "../../data/BusinessRecommendationData";

function BusinessRecommendation() {
  const navigate = useNavigate();

  const handleViewDetails = (businessId) => {
    navigate("/business-details", {
      state: {
        businessId,
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Back */}
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="mb-6 inline-flex items-center gap-2 text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        {/* Header */}
        <div className="mb-8 rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
                <Sparkles size={30} />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  Business Recommendations
                </h1>

                <p className="mt-2 text-slate-500">
                  Discover business ideas that match your skills and interests.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 px-5 py-3 text-sm">
              <p className="text-slate-500">
                Your Skill Score
              </p>

              <p className="mt-1 text-2xl font-bold text-blue-600">
                {localStorage.getItem("skillScore") || "0"}%
              </p>
            </div>
          </div>
        </div>

        {/* AI Recommendation */}
        <div className="mb-8 overflow-hidden rounded-3xl bg-white shadow-sm">

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white/20 p-2">
                <Sparkles size={22} />
              </div>

              <div>
                <p className="text-sm font-medium text-blue-100">
                  AI Recommended Business
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {businessRecommendationData.title}
                </h2>
              </div>
            </div>
          </div>

          <div className="p-8">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              {/* Recommendation info */}
              <div className="max-w-2xl">

                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                  <CheckCircle2 size={17} />
                  {businessRecommendationData.match} Match
                </div>

                <p className="text-lg leading-8 text-slate-600">
                  {businessRecommendationData.description}
                </p>

                {/* Skills */}
                <div className="mt-6">
                  <p className="mb-3 font-semibold text-slate-900">
                    Your Matching Skills
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {businessRecommendationData.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* CTA */}
              <div className="shrink-0">
                <button
                  type="button"
                  onClick={() => handleViewDetails(2)}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Explore Business
                  <ArrowRight size={18} />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* All Business Ideas */}
        <div>
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-slate-900">
              Explore Business Ideas
            </h2>

            <p className="mt-1 text-slate-500">
              Choose an idea that matches your interests and capabilities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {businessIdeas.map((business) => (
              <div
                key={business.id}
                className="flex flex-col rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >

                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <BriefcaseBusiness size={24} />
                </div>

                {/* Category */}
                <span className="mb-3 w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {business.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900">
                  {business.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-1 leading-6 text-slate-500">
                  {business.description}
                </p>

                {/* Info */}
                <div className="mt-5 flex gap-2">
                  <span className="rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-700">
                    {business.difficulty}
                  </span>

                  <span className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
                    {business.investment} Investment
                  </span>
                </div>

                {/* Button */}
                <button
                  type="button"
                  onClick={() => handleViewDetails(business.id)}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-600 px-4 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                >
                  View Details
                  <ArrowRight size={17} />
                </button>

              </div>
            ))}

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-3xl bg-blue-50 p-6 text-center">
          <p className="text-slate-600">
            Want to improve your recommendations?
          </p>

          <button
            type="button"
            onClick={() => navigate("/skill-assessment")}
            className="mt-3 font-semibold text-blue-600 hover:text-blue-700"
          >
            Retake Skill Assessment →
          </button>
        </div>

      </div>
    </div>
  );
}

export default BusinessRecommendation;