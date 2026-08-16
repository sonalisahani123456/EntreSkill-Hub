import {
  Settings as SettingsIcon,
  Bell,
  Lock,
  Globe,
  Save,
} from "lucide-react";

import DashboardLayout from "../../layouts/DashboardLayout";

function Settings() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Settings
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your account preferences and application settings.
          </p>
        </div>

        {/* General Settings */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-6">
            <div className="rounded-xl bg-blue-100 p-3">
              <SettingsIcon className="text-blue-600" size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                General Settings
              </h2>

              <p className="text-sm text-slate-500">
                Manage your basic preferences.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-6">

            {/* Language */}
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <Globe className="text-slate-500" size={22} />

                <div>
                  <h3 className="font-semibold text-slate-800">
                    Language
                  </h3>

                  <p className="text-sm text-slate-500">
                    Choose your preferred language.
                  </p>
                </div>
              </div>

              <select className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none focus:border-blue-500">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>

            {/* Notifications */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-6">
              <div className="flex items-center gap-4">
                <Bell className="text-slate-500" size={22} />

                <div>
                  <h3 className="font-semibold text-slate-800">
                    Notifications
                  </h3>

                  <p className="text-sm text-slate-500">
                    Receive updates and important notifications.
                  </p>
                </div>
              </div>

              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="peer sr-only"
                />

                <div className="h-6 w-11 rounded-full bg-slate-300 peer-checked:bg-blue-600 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-full" />
              </label>
            </div>

            {/* Save Button */}
            <div className="border-t border-slate-100 pt-6">
              <button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-orange-100 p-3">
              <Lock className="text-orange-600" size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Security
              </h2>

              <p className="text-sm text-slate-500">
                Manage your account security.
              </p>
            </div>
          </div>

          <button className="mt-6 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">
            Change Password
          </button>
        </div>

      </div>
    </DashboardLayout>
  );
}

export default Settings;