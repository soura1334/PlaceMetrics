import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { CustomBarProps } from "./DeptGraph";

type SalaryData = {
  range: string;
  count: number;
};

const salaryDistribution: SalaryData[] = [
  { range: "5-10 LPA", count: 45 },
  { range: "10-15 LPA", count: 78 },
  { range: "15-20 LPA", count: 92 },
  { range: "20-30 LPA", count: 54 },
  { range: "30-50 LPA", count: 28 },
  { range: "50+ LPA", count: 12 },
];

function CustomBar(props: CustomBarProps) {
  const { x = 0, y = 0, width = 0, height = 0 } = props;

  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      fill="#10B981"
      radius={[6, 6, 0, 0]}
    />
  );
}

export default function SalDist() {
  return (
    <BarChart responsive data={salaryDistribution}>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip
        contentStyle={{ backgroundColor: "black" }}
        formatter={(v: string | undefined) => [`${v}`, "Students"]}
        itemStyle={{ color: "#10B981" }}
        labelStyle={{ color: "white" }}
      />
      <XAxis dataKey="range" />
      <YAxis dataKey="count" />
      <Bar dataKey="count" shape={<CustomBar />} />
    </BarChart>
  );
}
