import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save authentication data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login successful!");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Section */}
          <div className="hidden md:flex bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 p-10 lg:p-14 text-white flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                <span className="text-xl font-bold">E</span>
              </div>

              <h1 className="text-4xl font-bold leading-tight">
                Build your skills.
                <br />
                Build your future.
              </h1>

              <p className="mt-5 text-blue-50 text-base leading-7 max-w-md">
                Learn new skills, discover business opportunities, connect
                with mentors, and turn your skills into meaningful
                opportunities.
              </p>
            </div>

            <div className="space-y-4 text-sm text-blue-50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white" />
                Skill-based learning
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white" />
                Personalized business ideas
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white" />
                Expert mentor guidance
              </div>
            </div>
          </div>

          {/* Login Section */}
          <div className="p-7 sm:p-10 lg:p-14">
            <div className="max-w-md mx-auto">
              
              {/* Mobile Logo */}
              <div className="md:hidden flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                  E
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">
                    EntreSkill Hub
                  </h2>
                  <p className="text-xs text-slate-500">
                    Skill to Startup Platform
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-sm font-medium text-indigo-600 mb-2">
                  Welcome back
                </p>

                <h2 className="text-3xl font-bold text-slate-900">
                  Login to your account
                </h2>

                <p className="mt-2 text-slate-500 text-sm">
                  Continue your journey with EntreSkill Hub.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email address
                  </label>

                  <div className="relative">
                    <Mail
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <LockKeyhole
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="w-full h-12 pl-11 pr-12 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-xl bg-indigo-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    "Logging in..."
                  ) : (
                    <>
                      Login
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>

              {/* Signup */}
              <p className="text-center text-sm text-slate-500 mt-7">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Create an account
                </Link>
              </p>

              {/* Back */}
              <div className="text-center mt-5">
                <Link
                  to="/"
                  className="text-sm text-slate-400 hover:text-slate-600"
                >
                  ← Back to home
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;