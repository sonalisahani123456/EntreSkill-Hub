function FeatureCard({ icon, title, description }) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 text-5xl">{icon}</div>

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 text-slate-600 leading-7">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;