import { useEffect, useState } from "react";
import { User, Mail, Phone, MapPin, Briefcase, Edit3, Save } from "lucide-react";
import toast from "react-hot-toast";
import DashboardLayout from "../../layouts/DashboardLayout";

const emptyProfile = { name: "", email: "", phone: "", location: "", skill: "", goal: "" };

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState(() => {
    try {
      return { ...emptyProfile, ...JSON.parse(localStorage.getItem("user") || "{}"), ...JSON.parse(localStorage.getItem("userProfile") || "{}") };
    } catch {
      return { ...emptyProfile };
    }
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    fetch("http://localhost:5000/api/auth/me", { headers: { Authorization: `Bearer ${token}` } })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Could not load profile");
        setProfile((previous) => ({ ...emptyProfile, ...previous, ...data.user }));
        localStorage.setItem("user", JSON.stringify(data.user));
      })
      .catch((error) => console.error("Profile load failed:", error));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((previous) => ({ ...previous, [name]: value }));
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) return toast.error("Please log in again.");
    if (!profile.name.trim() || !profile.email.trim()) return toast.error("Name and email are required.");
    try {
      setSaving(true);
      const response = await fetch("http://localhost:5000/api/auth/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(profile),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Profile update failed");
      setProfile({ ...emptyProfile, ...data.user });
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("userProfile", JSON.stringify(data.user));
      setIsEditing(false);
      toast.success("Profile saved successfully.");
    } catch (error) {
      toast.error(error.message || "Could not save profile.");
    } finally {
      setSaving(false);
    }
  };

  const fields = [
    { name: "name", label: "Full Name", icon: User, placeholder: "Enter your full name" },
    { name: "email", label: "Email", icon: Mail, placeholder: "Enter your email", type: "email" },
    { name: "phone", label: "Phone", icon: Phone, placeholder: "Enter phone number" },
    { name: "location", label: "Location", icon: MapPin, placeholder: "City, state" },
    { name: "skill", label: "Primary Skill", icon: Briefcase, placeholder: "e.g. Tailoring, Web Development" },
    { name: "goal", label: "Career / Business Goal", icon: Briefcase, placeholder: "What do you want to achieve?" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl font-bold text-blue-600">
              {profile.name ? profile.name.charAt(0).toUpperCase() : <User size={32} />}
            </div>
            <div>
              <p className="text-blue-100">EntreSkill Hub</p>
              <h1 className="mt-1 text-3xl font-bold">My Profile</h1>
              <p className="mt-2 text-blue-100">Manage your personal information and entrepreneurial goals.</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Personal & Entrepreneurial Information</h2>
              <p className="mt-1 text-sm text-slate-500">Your changes are saved to your account.</p>
            </div>
            {!isEditing ? (
              <button type="button" onClick={() => setIsEditing(true)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700">
                <Edit3 size={17} /> Edit Profile
              </button>
            ) : (
              <div className="flex gap-3">
                <button type="button" onClick={() => setIsEditing(false)} className="rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-600">Cancel</button>
                <button type="button" onClick={handleSave} disabled={saving} className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700 disabled:opacity-60">
                  <Save size={17} /> {saving ? "Saving..." : "Save Profile"}
                </button>
              </div>
            )}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {fields.map(({ name, label, icon: Icon, placeholder, type }) => (
              <div key={name}>
                <label htmlFor={name} className="mb-2 block text-sm font-semibold text-slate-700">{label}</label>
                <div className="relative">
                  <Icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input id={name} name={name} type={type || "text"} value={profile[name] || ""} onChange={handleChange} placeholder={placeholder} disabled={!isEditing} className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-slate-800 outline-none transition focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-80" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default Profile;
