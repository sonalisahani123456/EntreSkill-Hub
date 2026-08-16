function MentorCard({ name, role, expertise }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl">
        👤
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {name}
      </h3>

      <p className="mt-1 text-blue-600 font-medium">{role}</p>

      <p className="mt-4 text-slate-600">
        <span className="font-semibold">Expertise:</span> {expertise}
      </p>

      <button className="mt-6 rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
        View Profile
      </button>
    </div>
  );
}

export default MentorCard;