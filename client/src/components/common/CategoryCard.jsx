function CategoryCard({ icon, title, businesses }) {
  return (
    <div className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">

      <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-slate-500">
        {businesses}
      </p>

      <button className="mt-6 text-blue-600 font-semibold group-hover:translate-x-2 transition">
        Explore →
      </button>

    </div>
  );
}

export default CategoryCard;