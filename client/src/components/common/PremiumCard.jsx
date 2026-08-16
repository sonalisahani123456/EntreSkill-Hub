function PremiumCard({
  title,
  subtitle,
  icon,
  children,
  className = "",
}) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-7
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:border-blue-200
        ${className}
      `}
    >
      {/* Top Gradient Line */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500"></div>

      {/* Header */}
      {(title || icon) && (
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {title}
            </h2>

            {subtitle && (
              <p className="mt-2 text-slate-500">
                {subtitle}
              </p>
            )}
          </div>

          {icon && (
            <div className="rounded-2xl bg-blue-50 p-3 text-blue-600 transition group-hover:scale-110">
              {icon}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      {children}
    </div>
  );
}

export default PremiumCard;