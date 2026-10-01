import { useEffect, useState } from "react";

function WelcomeBanner() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Invalid user data:", error);
      }
    }
  }, []);

  const userName = user?.name || "User";

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="text-sm font-medium text-indigo-600 mb-2">
            Welcome back 👋
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Hello, {userName}!
          </h1>

          <p className="mt-2 text-slate-500 max-w-xl">
            Continue building your skills, explore new business
            opportunities, and take the next step toward your goals.
          </p>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0">
          <span className="text-2xl font-bold text-indigo-600">
            {userName.charAt(0).toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;