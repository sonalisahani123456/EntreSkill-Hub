import { Bell, Search } from "lucide-react";

function Topbar() {
  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">
      {/* Search */}
      <div className="flex w-full max-w-md items-center rounded-xl border border-slate-200 px-4">
        <Search size={18} className="text-slate-500" />

        <input
          type="text"
          placeholder="Search..."
          className="w-full border-none bg-transparent px-3 py-3 outline-none"
        />
      </div>

      {/* Right */}
      <div className="ml-6 flex items-center gap-5">
        <button className="relative rounded-full p-2 hover:bg-slate-100">
          <Bell size={22} />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            S
          </div>

          <div>
            <p className="font-semibold text-slate-900">Sonali</p>
            <p className="text-sm text-slate-500">Student</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;