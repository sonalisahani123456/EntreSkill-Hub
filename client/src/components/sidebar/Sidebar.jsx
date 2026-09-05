import sidebarData from "../../data/sidebarData";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

 const handleNavigation = (title) => {
  // Dashboard is a separate route
  if (title === "Dashboard") {
    navigate("/dashboard");
    return;
  }

  const sectionMap = {
    "Skill Assessment": "skill-assessment",
    "Business Ideas": "business-ideas",
    Roadmaps: "roadmaps",
    "Learning Hub": "learning-hub",
    Mentors: "mentors",
    Progress: "progress",
  };

  const sectionId = sectionMap[title];

  if (sectionId) {
    // If we are not on dashboard, first go to dashboard
    if (location.pathname !== "/dashboard") {
      navigate("/dashboard");

      // Wait for dashboard to render
      setTimeout(() => {
        const element = document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }
};

  const handleLogout = () => {
    const confirmed = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmed) {
      return;
    }

    localStorage.removeItem("isLoggedIn");

    navigate("/");
  };

  const isActive = (title) => {
    if (title === "Profile") {
      return location.pathname === "/profile";
    }

    if (title === "Settings") {
      return location.pathname === "/settings";
    }

    if (title === "Dashboard") {
      return location.pathname === "/dashboard";
    }

    return false;
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
            const active = isActive(item.title);

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
                    active
                      ? "bg-blue-600 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Icon size={20} />

                  <span>
                    {item.title}
                  </span>
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