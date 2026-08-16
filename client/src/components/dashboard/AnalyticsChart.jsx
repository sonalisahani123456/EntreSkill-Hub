import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", score: 30 },
  { month: "Feb", score: 45 },
  { month: "Mar", score: 55 },
  { month: "Apr", score: 62 },
  { month: "May", score: 78 },
  { month: "Jun", score: 85 },
];

function AnalyticsChart() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Skill Growth Analytics
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Your entrepreneurial learning progress over time.
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="growth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#2563EB" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="score"
              stroke="#2563EB"
              fill="url(#growth)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AnalyticsChart;