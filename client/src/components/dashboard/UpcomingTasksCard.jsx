import { useEffect, useState } from "react";
import upcomingTasksData from "../../data/upcomingTasksData";

function UpcomingTasksCard() {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("completedUpcomingTasks");

    if (savedTasks) {
      setCompletedTasks(JSON.parse(savedTasks));
    }
  }, []);

  const toggleTask = (taskId) => {
    setCompletedTasks((previous) => {
      let updatedTasks;

      if (previous.includes(taskId)) {
        updatedTasks = previous.filter((id) => id !== taskId);
      } else {
        updatedTasks = [...previous, taskId];
      }

      localStorage.setItem(
        "completedUpcomingTasks",
        JSON.stringify(updatedTasks)
      );

      return updatedTasks;
    });
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        Upcoming Tasks
      </h2>

      <div className="mt-6 space-y-4">
        {upcomingTasksData.map((item) => {
          const isCompleted = completedTasks.includes(item.id);

          return (
            <label
              key={item.id}
              className={`flex cursor-pointer items-center gap-3 rounded-xl p-4 transition ${
                isCompleted
                  ? "bg-green-50"
                  : "bg-slate-50 hover:bg-slate-100"
              }`}
            >
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => toggleTask(item.id)}
                className="h-4 w-4 cursor-pointer accent-blue-600"
              />

              <span
                className={`text-slate-700 ${
                  isCompleted
                    ? "font-medium line-through text-green-700"
                    : ""
                }`}
              >
                {item.task}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default UpcomingTasksCard;