import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const placementTrends = [
  { year: "2022", placements: 245, avgPackage: 12.5 },
  { year: "2023", placements: 278, avgPackage: 14.2 },
  { year: "2024", placements: 312, avgPackage: 16.8 },
  { year: "2025", placements: 345, avgPackage: 18.5 },
  { year: "2026", placements: 289, avgPackage: 19.2 },
];

export default function PlacementGraph() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart responsive data={placementTrends} id="admin-area-chart">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis dataKey="placements" />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="placements"
          stroke="#10B981"
          strokeWidth={3}
          fill="#10B98133"
          name="Placements"
        />
        <Area
          type="monotone"
          dataKey="avgPackage"
          stroke="#3B82F6"
          strokeWidth={3}
          fill="#3B82F633"
          name="Avg Package (LPA)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
