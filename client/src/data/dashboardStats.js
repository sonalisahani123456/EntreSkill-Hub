const savedSkillScore =
  localStorage.getItem("skillScore") || "85";

const dashboardStats = [
  {
    id: 1,
    title: "Skill Score",
    value: `${savedSkillScore}%`,
    color: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    id: 2,
    title: "Business Ideas",
    value: "24",
    color: "bg-green-100",
    textColor: "text-green-600",
  },
  {
    id: 3,
    title: "Learning Progress",
    value: "12",
    color: "bg-purple-100",
    textColor: "text-purple-600",
  },
  {
    id: 4,
    title: "Mentor Sessions",
    value: "3",
    color: "bg-orange-100",
    textColor: "text-orange-600",
  },
];

export default dashboardStats;