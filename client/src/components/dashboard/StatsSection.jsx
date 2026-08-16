import { useEffect, useState } from "react";
import dashboardStats from "../../data/dashboardStats";
import StatCard from "./StatCard";

function StatsSection() {
  const [stats, setStats] = useState(dashboardStats);

  useEffect(() => {
    const savedSkillScore =
      localStorage.getItem("skillScore");

    if (savedSkillScore) {
      setStats((previousStats) =>
        previousStats.map((item) =>
          item.title === "Skill Score"
            ? {
                ...item,
                value: `${savedSkillScore}%`,
              }
            : item
        )
      );
    }
  }, []);

  return (
    <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <StatCard
          key={item.id}
          title={item.title}
          value={item.value}
          color={item.color}
          textColor={item.textColor}
        />
      ))}
    </section>
  );
}

export default StatsSection;