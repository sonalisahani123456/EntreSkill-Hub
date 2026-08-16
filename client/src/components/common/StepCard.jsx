function StepCard({ step, icon, title, description }) {
  return (
    <div className="relative rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      
      {/* Step Number */}
      <span className="absolute top-5 right-6 text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
        {step}
      </span>

      {/* Icon */}
      <div className="text-5xl mb-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-slate-600 leading-7">
        {description}
      </p>
    </div>
  );
}

export default StepCard;