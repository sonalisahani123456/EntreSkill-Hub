import { Bell, Search, Check } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Notifications
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);

  const searchItems = [
    {
      title: "Dashboard",
      type: "section",
      id: "dashboard",
    },
    {
      title: "Skill Assessment",
      type: "section",
      id: "skill-assessment",
    },
    {
      title: "Business Ideas",
      type: "section",
      id: "business-ideas",
    },
    {
      title: "Roadmaps",
      type: "section",
      id: "roadmaps",
    },
    {
      title: "Learning Hub",
      type: "section",
      id: "learning-hub",
    },
    {
      title: "Mentors",
      type: "section",
      id: "mentors",
    },
    {
      title: "Progress",
      type: "section",
      id: "progress",
    },
    {
      title: "Profile",
      type: "route",
      path: "/profile",
    },
    {
      title: "Settings",
      type: "route",
      path: "/settings",
    },
  ];

  const filteredResults = searchItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (item) => {
    setSearch("");
    setShowResults(false);

    // Separate route
    if (item.type === "route") {
      navigate(item.path);
      return;
    }

    // Dashboard section
    if (location.pathname !== "/dashboard") {
      navigate("/dashboard");

      setTimeout(() => {
        const element = document.getElementById(item.id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return;
    }

    const element = document.getElementById(item.id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNotificationClick = () => {
    setShowNotifications((prev) => !prev);
  };

  const handleMarkAsRead = () => {
    setHasNotifications(false);
    setShowNotifications(false);
  };

  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">

      {/* Search */}
      <div className="relative flex w-full max-w-md items-center rounded-xl border border-slate-200 px-4">

        <Search
          size={18}
          className="text-slate-500"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => {
            if (search) {
              setShowResults(true);
            }
          }}
          placeholder="Search..."
          className="w-full border-none bg-transparent px-3 py-3 outline-none"
        />

        {/* Search Results */}
        {showResults && search.trim() !== "" && (
          <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">

            {filteredResults.length > 0 ? (
              <div className="py-2">

                {filteredResults.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => handleSearch(item)}
                    className="flex w-full items-center px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    <Search
                      size={16}
                      className="mr-3 text-slate-400"
                    />

                    {item.title}
                  </button>
                ))}

              </div>
            ) : (
              <div className="px-4 py-4 text-sm text-slate-500">
                No results found.
              </div>
            )}

          </div>
        )}

      </div>


      {/* Right */}
      <div className="ml-6 flex items-center gap-5">

        {/* Notifications */}
        <div className="relative">

          <button
            type="button"
            onClick={handleNotificationClick}
            className="relative rounded-full p-2 transition hover:bg-slate-100"
          >
            <Bell size={22} />

            {/* Notification Dot */}
            {hasNotifications && (
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
            )}
          </button>


          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 top-full z-50 mt-3 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">

                <div>
                  <h3 className="font-bold text-slate-900">
                    Notifications
                  </h3>

                  <p className="text-xs text-slate-500">
                    Stay updated with your activities.
                  </p>
                </div>

              </div>


              {/* Notifications */}
              <div className="divide-y divide-slate-100">

                <div className="px-5 py-4 hover:bg-slate-50">
                  <p className="text-sm font-semibold text-slate-800">
                    Complete your profile
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Your profile is 75% complete.
                  </p>
                </div>


                <div className="px-5 py-4 hover:bg-slate-50">
                  <p className="text-sm font-semibold text-slate-800">
                    New learning course available
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Explore new courses in Learning Hub.
                  </p>
                </div>


                <div className="px-5 py-4 hover:bg-slate-50">
                  <p className="text-sm font-semibold text-slate-800">
                    Business recommendation updated
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Check your latest business ideas.
                  </p>
                </div>

              </div>


              {/* Mark as Read */}
              {hasNotifications && (
                <div className="border-t border-slate-200 p-3">

                  <button
                    onClick={handleMarkAsRead}
                    className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                  >
                    <Check size={16} />
                    Mark all as read
                  </button>

                </div>
              )}

            </div>
          )}

        </div>


        {/* Profile */}
        <button
          type="button"
          onClick={() => navigate("/profile")}
          className="flex items-center gap-3 rounded-xl px-2 py-1 text-left transition hover:bg-slate-100"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            S
          </div>

          <div>
            <p className="font-semibold text-slate-900">
              Sonali
            </p>

            <p className="text-sm text-slate-500">
              Student
            </p>
          </div>
        </button>

      </div>

    </header>
  );
}

export default Topbar;