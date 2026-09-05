import {
  ArrowLeft,
  Lightbulb,
  CheckCircle2,
  Wallet,
  TrendingUp,
  Target,
  Rocket,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

import businessIdeas from "../../data/businessIdeas";
import roadmapSteps from "../../data/roadmapSteps";

function BusinessDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const businessId = location.state?.businessId;

  const selectedIdea =
    businessIdeas.find((idea) => idea.id === businessId) ||
    businessIdeas[0];

  const handleBack = () => {
    navigate("/business-recommendation");
  };

  const handleStartRoadmap = () => {
    navigate("/dashboard");

    setTimeout(() => {
      const element = document.getElementById("roadmaps");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Back Button */}
        <button
          type="button"
          onClick={handleBack}
          className="mb-6 inline-flex items-center gap-2 text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to Recommendations
        </button>

        {/* Hero */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-sm md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <div className="mb-4 inline-flex rounded-xl bg-white/20 p-3">
                <Lightbulb size={30} />
              </div>

              <p className="text-sm font-semibold text-blue-100">
                {selectedIdea.category}
              </p>

              <h1 className="mt-2 text-3xl font-bold md:text-4xl">
                {selectedIdea.title}
              </h1>

              <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                {selectedIdea.description}
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm text-blue-100">
                Difficulty
              </p>

              <p className="mt-1 text-xl font-bold">
                {selectedIdea.difficulty}
              </p>
            </div>

          </div>
        </div>

        {/* Quick Information */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">

          {/* Investment */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex rounded-xl bg-green-100 p-3">
              <Wallet
                className="text-green-600"
                size={22}
              />
            </div>

            <p className="text-sm text-slate-500">
              Investment Level
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-900">
              {selectedIdea.investment}
            </h2>
          </div>

          {/* Growth */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex rounded-xl bg-purple-100 p-3">
              <TrendingUp
                className="text-purple-600"
                size={22}
              />
            </div>

            <p className="text-sm text-slate-500">
              Growth Potential
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-900">
              High
            </h2>
          </div>

          {/* Recommended */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex rounded-xl bg-orange-100 p-3">
              <Target
                className="text-orange-600"
                size={22}
              />
            </div>

            <p className="text-sm text-slate-500">
              Recommended For
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-900">
              Beginners
            </h2>
          </div>

        </div>

        {/* Main Content */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* Left Content */}
          <div className="space-y-6 lg:col-span-2">

            {/* Why this idea */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Why This Business Idea?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                This business idea matches your current skill profile
                and can be started gradually. You can begin with a
                small customer base, validate your idea, and expand
                as your experience grows.
              </p>
            </div>

            {/* Required Skills */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Required Skills
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Communication",
                  "Problem Solving",
                  "Customer Management",
                  "Basic Marketing",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-green-600"
                    />

                    <span className="font-medium text-slate-700">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Startup Roadmap */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <Rocket
                  size={24}
                  className="text-blue-600"
                />

                <h2 className="text-2xl font-bold text-slate-900">
                  Startup Roadmap
                </h2>
              </div>

            <div className="mt-8 space-y-6">
  {roadmapSteps.map((step, index) => (
    <div
      key={step.id}
      className="flex gap-4"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
        {index + 1}
      </div>

      <div>
        <h3 className="font-semibold text-slate-800">
          {step.title}
        </h3>

        <p className="mt-1 leading-6 text-slate-600">
          {step.description}
        </p>
      </div>
    </div>
  ))}
</div>
            </div>

          </div>

          {/* Right CTA */}
          <div className="h-fit rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

            <h2 className="text-xl font-bold text-slate-900">
              Ready to Start?
            </h2>

            <p className="mt-3 leading-6 text-slate-600">
              Follow the roadmap and start building your business
              step by step.
            </p>

            <button
              type="button"
              onClick={handleStartRoadmap}
              className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Start Roadmap
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default BusinessDetails;