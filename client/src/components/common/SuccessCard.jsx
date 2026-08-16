function SuccessCard({ image, name, business, story }) {
  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
        {image}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {name}
      </h3>

      <p className="text-blue-600 font-medium mt-1">
        {business}
      </p>

      <p className="mt-5 text-slate-600 leading-7">
        {story}
      </p>

    </div>
  );
}

export default SuccessCard;