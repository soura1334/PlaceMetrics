import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type TrendData = {
  year: string;
  placed: number;
  rate: number;
};

const placementTrendYearly: TrendData[] = [
  { year: "2022", placed: 245, rate: 76 },
  { year: "2023", placed: 278, rate: 82 },
  { year: "2024", placed: 312, rate: 87 },
  { year: "2025", placed: 345, rate: 90 },
  { year: "2026", placed: 387, rate: 92 },
];

export default function TrendGraph() {
  return (
    <AreaChart responsive data={placementTrendYearly}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip contentStyle={{ backgroundColor: "black", borderRadius: "8px", border: "1px solid black" }}
        labelStyle={{ color: "white" }} />
      <Legend />
      <Area
        type="monotone"
        dataKey="placed"
        stroke="#10B981"
        strokeWidth={2.5}
        fill="#10B98133"
        name="Students Placed"
      />
      <Area
        type="monotone"
        dataKey="rate"
        stroke="#3B82F6"
        strokeWidth={2.5}
        fill="#3B82F633"
        name="Placement Rate %"
      />
    </AreaChart>
  );
}
