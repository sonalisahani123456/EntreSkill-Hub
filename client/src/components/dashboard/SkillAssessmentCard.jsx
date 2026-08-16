import { Target, TrendingUp } from "lucide-react";
import PremiumCard from "../common/PremiumCard";
import { useNavigate } from "react-router-dom";


function SkillAssessmentCard() {
  const navigate = useNavigate();

  return (
    <PremiumCard
      title="Skill Assessment"
      subtitle="Track your entrepreneurial skills and identify improvement areas."
      icon={<Target size={28} />}
      className="mt-8"
    >
      {/* Score */}
      <div>
        <div className="mb-3 flex justify-between">
          <span className="font-medium text-slate-700">
            Overall Skill Score
          </span>

          <span className="font-bold text-blue-600">
            85%
          </span>
        </div>

        <div className="h-4 w-full overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-[85%] rounded-full bg-blue-600"></div>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">

        {/* Strengths */}
        <div className="rounded-2xl bg-green-50 p-5">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-green-600" />

            <h3 className="font-semibold text-green-700">
              Strengths
            </h3>
          </div>

          <ul className="mt-4 space-y-2 text-slate-700">
            <li>✔ Creativity</li>
            <li>✔ Communication</li>
            <li>✔ Problem Solving</li>
          </ul>
        </div>

        {/* Improvements */}
        <div className="rounded-2xl bg-orange-50 p-5">
          <div className="flex items-center gap-3">
            <TrendingUp className="rotate-180 text-orange-600" />

            <h3 className="font-semibold text-orange-700">
              Improve
            </h3>
          </div>

          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Financial Planning</li>
            <li>• Marketing Skills</li>
            <li>• Leadership</li>
          </ul>
        </div>

      </div>

      {/* Button */}
      <button
  onClick={() => navigate("/skill-assessment")}
  className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
>
  Retake Assessment
</button>

    </PremiumCard>
  );
}

export default SkillAssessmentCard;