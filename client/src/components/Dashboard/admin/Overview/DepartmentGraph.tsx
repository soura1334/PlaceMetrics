import {
    Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const departmentStats = [
  { department: "CSE", successRate: 92, students: 120 },
  { department: "IT", successRate: 88, students: 80 },
  { department: "ECE", successRate: 75, students: 90 },
  { department: "EEE", successRate: 68, students: 70 },
  { department: "Mech", successRate: 62, students: 85 },
  { department: "Civil", successRate: 58, students: 65 },
];

export default function DepartmentGraph() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart responsive data={departmentStats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="department" />
        <YAxis dataKey="students" />
        <Tooltip contentStyle={{
            backgroundColor: "var(--color-card)"
        }} />
        <Legend />
        <Bar dataKey="successRate" fill="#10B981" name="Success Rate %" />
      </BarChart>
    </ResponsiveContainer>
  );
}
