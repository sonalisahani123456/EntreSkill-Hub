import recentActivityData from "../../data/recentActivityData";

function RecentActivityCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-5">
        {recentActivityData.map((item) => (
          <div
            key={item.id}
            className="border-b border-slate-100 pb-4 last:border-none"
          >
            <h3 className="font-medium text-slate-800">
              {item.activity}
            </h3>

            <p className="text-sm text-slate-500">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivityCard;