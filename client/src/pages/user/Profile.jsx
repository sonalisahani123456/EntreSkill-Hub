import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Edit3,
  Save,
} from "lucide-react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Sonali Sahani",
    email: "sonali@example.com",
    phone: "+91 9876543210",
    location: "Gorakhpur, India",
    skill: "Web Development",
    goal: "Build a successful business",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem(
      "userProfile",
      JSON.stringify(profile)
    );

    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 lg:p-8">

      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">

        <div className="flex flex-col gap-6 md:flex-row md:items-center">

          {/* Avatar */}
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-bold text-blue-600">
            {profile.name.charAt(0)}
          </div>

          <div>
            <p className="text-blue-100">
              EntreSkill Hub
            </p>

            <h1 className="mt-1 text-3xl font-bold">
              My Profile
            </h1>

            <p className="mt-2 text-blue-100">
              Manage your personal information and entrepreneurial goals.
            </p>
          </div>

        </div>

      </div>


      {/* Profile Information */}
      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Personal Information
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Keep your profile information up to date.
            </p>
          </div>

          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
            >
              <Edit3 size={17} />
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 font-semibold text-white transition hover:bg-green-700"
            >
              <Save size={17} />
              Save Profile
            </button>
          )}

        </div>


        {/* Fields */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Full Name
            </label>

            <div className="relative">

              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-80"
              />

            </div>
          </div>


          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email
            </label>

            <div className="relative">

              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="email"
                value={profile.email}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-80"
              />

            </div>
          </div>


          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Phone
            </label>

            <div className="relative">

              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-80"
              />

            </div>
          </div>


          {/* Location */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Location
            </label>

            <div className="relative">

              <MapPin
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="location"
                value={profile.location}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-80"
              />

            </div>
          </div>

        </div>

      </div>


      {/* Entrepreneurial Information */}
      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-blue-100 p-3">
            <Briefcase
              size={22}
              className="text-blue-600"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Entrepreneurial Information
            </h2>

            <p className="text-sm text-slate-500">
              Help us personalize your recommendations.
            </p>
          </div>

        </div>


        <div className="mt-6 grid gap-6 md:grid-cols-2">

          {/* Skill */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Primary Skill
            </label>

            <input
              name="skill"
              value={profile.skill}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-80"
            />
          </div>


          {/* Goal */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Career / Business Goal
            </label>

            <input
              name="goal"
              value={profile.goal}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-80"
            />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;