import {
  ArrowLeft,
  Star,
  MessageCircle,
  Calendar,
  CheckCircle2,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

import mentorData from "../../data/mentorData";

function MentorDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const mentorId = location.state?.mentorId;

  const mentor =
    mentorData.find((item) => item.id === mentorId) ||
    mentorData[0];

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Back */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 flex items-center gap-2 text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        {/* Profile Header */}
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">

            {/* Avatar */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-blue-100 text-3xl font-bold text-blue-600">
              {mentor.name.charAt(0)}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-bold text-slate-900">
                  {mentor.name}
                </h1>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  Available
                </span>
              </div>

              <p className="mt-2 text-slate-500">
                {mentor.expertise}
              </p>

              <div className="mt-3 flex items-center gap-2 text-yellow-500">
                <Star size={18} fill="currentColor" />

                <span className="font-semibold">
                  {mentor.rating}
                </span>

                <span className="text-sm text-slate-400">
                  Mentor Rating
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Content */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* About */}
          <div className="space-y-6 lg:col-span-2">

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                About This Mentor
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                This mentor can help you understand your business
                challenges, improve your skills, validate your ideas,
                and create a practical roadmap for your entrepreneurial
                journey.
              </p>
            </div>

            {/* Expertise */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Areas of Expertise
              </h2>

              <div className="mt-5 space-y-3">
                {[
                  "Business Strategy",
                  "Startup Planning",
                  "Marketing",
                  "Customer Acquisition",
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

          </div>

          {/* Connect Card */}
          <div className="h-fit rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="text-xl font-bold text-slate-900">
              Connect With Mentor
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Get personalized guidance and discuss your business
              ideas with an experienced mentor.
            </p>

            <button
              onClick={() =>
                alert(
                  `Connection request sent to ${mentor.name}!`
                )
              }
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <MessageCircle size={18} />
              Connect
            </button>

            <button
              onClick={() =>
                alert("Mentor session booking will be available soon.")
              }
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <Calendar size={18} />
              Book Session
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default MentorDetails;