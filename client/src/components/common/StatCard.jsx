function StatCard({ number, title, className = "" }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-xl border border-slate-200 px-6 py-5 w-56 ${className}`}
    >
      <h3 className="text-3xl font-bold text-blue-600">
        {number}
      </h3>

      <p className="mt-2 text-slate-600">
        {title}
      </p>
    </div>
  );
}

export default StatCard;