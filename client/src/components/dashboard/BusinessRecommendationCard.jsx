import { useEffect, useState } from "react";
import { Lightbulb, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import PremiumCard from "../common/PremiumCard";
import businessIdeas from "../../data/businessIdeas";

function BusinessRecommendationCard() {
  const [skillScore, setSkillScore] = useState(85);
  const navigate = useNavigate();

  useEffect(() => {
    const savedScore = localStorage.getItem("skillScore");

    if (savedScore) {
      setSkillScore(Number(savedScore));
    }
  }, []);

  const getRecommendedIdeas = () => {
    if (skillScore >= 80) {
      return businessIdeas.slice(0, 3);
    }

    if (skillScore >= 60) {
      return businessIdeas.slice(1, 4);
    }

    return businessIdeas.slice(2, 5);
  };

  const recommendedIdeas = getRecommendedIdeas();

  return (
    <PremiumCard
      title="Business Ideas"
      subtitle="Business opportunities recommended based on your current skill profile."
      icon={<Lightbulb size={28} />}
      className="h-full"
    >
      {/* Score information */}
      <div className="mb-6 rounded-2xl bg-blue-50 p-4">
        <p className="text-sm text-slate-600">
          Your current skill score
        </p>

        <p className="mt-1 text-2xl font-bold text-blue-600">
          {skillScore}%
        </p>
      </div>

      {/* Recommendations */}
      <div className="space-y-4">
        {recommendedIdeas.map((idea) => (
          <div
            key={idea.id}
            className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900">
                  {idea.title}
                </h3>

                <p className="mt-1 text-sm font-medium text-blue-600">
                  {idea.category}
                </p>
              </div>

              <div className="rounded-xl bg-yellow-50 p-2">
                <Lightbulb
                  size={20}
                  className="text-yellow-500"
                />
              </div>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {idea.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                {idea.difficulty}
              </span>

              <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
                {idea.investment} Investment
              </span>
            </div>

           <button
             onClick={() =>
             navigate("/business-details", {
             state: {
              ideaId: idea.id,
             },
              })
            }
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
             Explore Idea
             <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </PremiumCard>
  );
}

export default BusinessRecommendationCard;