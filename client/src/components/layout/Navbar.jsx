import { Link } from "react-router-dom";
import navigation from "../../data/navigation";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          EntreSkill Hub
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="text-slate-600 hover:text-blue-600 font-medium transition duration-300"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <button
            className="hidden md:block px-5 py-2 rounded-xl text-blue-600 font-semibold hover:bg-blue-50 transition"
          >
            Login
          </button>

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;