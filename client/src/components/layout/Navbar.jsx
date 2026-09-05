import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // Agar Home page par nahi hain
    if (location.pathname !== "/") {
      navigate("/");

      // Home page render hone ke baad section par scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return;
    }

    // Agar already Home page par hain
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          EntreSkill Hub
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          {/* Home */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="font-medium text-slate-600 transition duration-300 hover:text-blue-600"
          >
            Home
          </button>

          {/* Features */}
          <button
            type="button"
            onClick={() => scrollToSection("features")}
            className="font-medium text-slate-600 transition duration-300 hover:text-blue-600"
          >
            Features
          </button>

          {/* Business Ideas */}
          <button
            type="button"
            onClick={() => scrollToSection("business-ideas")}
            className="font-medium text-slate-600 transition duration-300 hover:text-blue-600"
          >
            Business Ideas
          </button>

          {/* Mentors */}
          <button
            type="button"
            onClick={() => scrollToSection("mentors")}
            className="font-medium text-slate-600 transition duration-300 hover:text-blue-600"
          >
            Mentors
          </button>

          {/* Learning */}
          <button
            type="button"
            onClick={() => navigate("/learning-hub")}
            className="font-medium text-slate-600 transition duration-300 hover:text-blue-600"
          >
            Learning
          </button>

        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          {/* Login */}
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="hidden rounded-xl px-5 py-2 font-semibold text-blue-600 transition hover:bg-blue-50 md:block"
          >
            Login
          </button>

          {/* Get Started */}
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Get Started
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;