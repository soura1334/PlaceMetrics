import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type BranchData = {
  branch: string;
  placed: number;
  total: number;
  rate: number;
};

const branchPlacementData: BranchData[] = [
  { branch: "CSE", placed: 110, total: 120, rate: 92 },
  { branch: "IT", placed: 70, total: 80, rate: 88 },
  { branch: "ECE", placed: 68, total: 90, rate: 75 },
  { branch: "EEE", placed: 48, total: 70, rate: 68 },
  { branch: "Mech", placed: 53, total: 85, rate: 62 },
  { branch: "Civil", placed: 38, total: 65, rate: 58 },
];

const colors = [
  "#10B981",
  "#3B82F6",
  "#06B6D4",
  "#8B5CF6",
  "#F59E0B",
  "#EF4444",
];

type CustomBarProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  payload?: BranchData;
  index?: number;
};

const CustomBar = (props: CustomBarProps) => {
  const { x = 0, y = 0, width = 0, height = 0, index = 0 } = props;

  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      fill={colors[index % colors.length]}
      radius={[6, 6, 0, 0]} // rounded top corners 🔥
    />
  );
};

export default function DeptGraph() {
  return (
    <BarChart responsive data={branchPlacementData}>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip
        contentStyle={{ backgroundColor: "black" }}
        formatter={(v: string | undefined) => [`${v}%`, "Placement Rate"]}
        itemStyle={{ color: "white" }}
        labelStyle={{ color: "white" }}
      />
      <XAxis dataKey="branch" />
      <YAxis dataKey="rate" />
      <Bar dataKey="rate" shape={<CustomBar />} />
    </BarChart>
  );
}
