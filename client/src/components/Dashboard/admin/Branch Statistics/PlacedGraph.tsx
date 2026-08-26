import type { branchObj } from "@/pages/admin/BranchStatistics";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

export type ChartProps = {
  data: branchObj[];
};

export default function PlacedGraph({ data }: ChartProps) {
  return <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="code"/>
    <YAxis />
    <Tooltip contentStyle={{ backgroundColor: "black" }}
        itemStyle={{ color: "white" }}
        labelStyle={{ color: "white" }} />
    <Legend />
    <Bar dataKey="students" fill="rgba(30, 41, 59, 0.5)" radius={[4, 4, 0, 0]} name="Total Students"/>
    <Bar dataKey="placed" fill="#10B981" radius={[4, 4, 0, 0]} name="Total Students"/>
  </BarChart>;
}
