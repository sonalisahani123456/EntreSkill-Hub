function SectionTitle({
  badge,
  title,
  description,
  align = "left",
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {badge && (
        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium mb-5">
          {badge}
        </span>
      )}

      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg text-slate-600 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;