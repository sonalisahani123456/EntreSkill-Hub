import upcomingTasksData from "../../data/upcomingTasksData";

function UpcomingTasksCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        Upcoming Tasks
      </h2>

      <div className="mt-6 space-y-4">
        {upcomingTasksData.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
          >
            <input type="checkbox" />

            <span className="text-slate-700">
              {item.task}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingTasksCard;