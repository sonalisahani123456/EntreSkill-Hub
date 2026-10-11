import { useEffect, useState } from "react";
import dashboardStats from "../../data/dashboardStats";
import StatCard from "./StatCard";

function StatsSection() {
  const [stats, setStats] = useState(dashboardStats);

  useEffect(() => {
    const savedSkillScore = localStorage.getItem("skillScore");
    if (savedSkillScore) {
      setStats((previous) => previous.map((item) =>
        item.title === "Skill Score" ? { ...item, value: `${savedSkillScore}%` } : item
      ));
    }

    const token = localStorage.getItem("token");
    if (!token) return;
    fetch("http://localhost:5000/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Could not load user");
        const score = Number(data.user?.skillAssessment?.score || 0);
        localStorage.setItem("skillScore", String(score));
        setStats((previous) => previous.map((item) =>
          item.title === "Skill Score" ? { ...item, value: `${score}%` } : item
        ));
      })
      .catch((error) => console.error("Dashboard stats load failed:", error));
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