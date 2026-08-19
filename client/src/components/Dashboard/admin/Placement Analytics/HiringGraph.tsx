import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

type HiringData = {
    company: string;
    hired: number;
}

const companiesHiringCount: HiringData[] = [
  { company: "Google", hired: 45 },
  { company: "Amazon", hired: 42 },
  { company: "Microsoft", hired: 38 },
  { company: "Meta", hired: 35 },
  { company: "Goldman Sachs", hired: 28 },
  { company: "Airbnb", hired: 20 },
  { company: "Netflix", hired: 18 },
  { company: "Stripe", hired: 15 },
];

export default function HiringGraph() {
  return (
    <BarChart responsive data={companiesHiringCount} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip contentStyle={{ backgroundColor: "black" }}
        formatter={(v: string | undefined) => [`${v}`, "Students Hired"]}
        itemStyle={{ color: "#10B981" }}
        labelStyle={{ color: "white" }} />
      <XAxis type="number" dataKey="hired" />
      <YAxis type="category" dataKey="company" fontSize={12} />
      <Bar dataKey="hired" radius={[0, 6, 6, 0]} fill="#10B981" />
    </BarChart>
  );
}
