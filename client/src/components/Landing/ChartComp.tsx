import { AreaChart, Area, ResponsiveContainer } from "recharts";

interface dataComp {
    name: string;
    value: number;
}

const data: dataComp[] = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 30 },
  { name: "Mar", value: 45 },
  { name: "Apr", value: 35 },
  { name: "May", value: 60 },
  { name: "Jun", value: 70 },
  { name: "Jul", value: 85 },
];

export default function ChartComp() {
  return (
    <div className="lg:w-100 w-70 h-37.5 rounded-2xl p-6">
      <ResponsiveContainer width="100%" height="80%" minHeight={1} minWidth={1}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={1} />
              <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="url(#colorGradient)"
            strokeWidth={3}
            fill="url(#areaGradient)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
