import sidebarData from "../../data/sidebarData";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const handleNavigation = (title) => {
    const sectionMap = {
      Dashboard: "dashboard",
      "Skill Assessment": "skill-assessment",
      "Business Ideas": "business-ideas",
      Roadmaps: "roadmaps",
      "Learning Hub": "learning-hub",
      Mentors: "mentors",
      Progress: "progress",
    };

    const sectionId = sectionMap[title];

    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleLogout = () => {
    const confirmed = window.confirm(
      "Are you sure you want to logout?"
    );

   if (!confirmed) {
      return;
    }

    // Temporary session cleanup
    localStorage.removeItem("isLoggedIn");

    // Go back to landing page
    navigate("/");
  };

  return (
    <aside className="hidden w-72 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      {/* Logo */}
      <div className="border-b border-slate-200 px-8 py-6">
        <h1 className="text-2xl font-bold text-blue-600">
          EntreSkill Hub
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {sidebarData.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.id}>
                <button
                  onClick={() => {
  if (item.title === "Logout") {
    handleLogout();
  } else if (item.title === "Profile") {
    navigate("/profile");
  } else if (item.title === "Settings") {
     navigate("/settings");
  } else {
    handleNavigation(item.title);
  }
}}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 ${
                    item.title === "Dashboard"
                      ? "bg-blue-600 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;