import { ArrowUpRight } from "lucide-react";

function StatCard({ title, value, color, textColor }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white
        border
        border-slate-200
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        hover:border-blue-300
      "
    >
      {/* Top Gradient Line */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500"></div>

      {/* Badge */}
      <div
        className={`inline-flex rounded-xl px-4 py-2 ${color} ${textColor} font-semibold`}
      >
        {title}
      </div>

      {/* Value */}
      <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
        {value}
      </h2>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Updated today
        </p>

        <div className="rounded-full bg-blue-50 p-2 text-blue-600 transition group-hover:rotate-45">
          <ArrowUpRight size={18} />
        </div>
      </div>
    </div>
  );
}

export default StatCard;