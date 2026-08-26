import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import type { ChartProps } from "./PlacedGraph";
import { CustomBar } from "../Placement Analytics/DeptGraph";

export default function CTCGraph({ data }: ChartProps) {
  return (
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="code" />
      <YAxis />
      <Bar dataKey="avgPkg" shape={<CustomBar />} />
    </BarChart>
  );
}
