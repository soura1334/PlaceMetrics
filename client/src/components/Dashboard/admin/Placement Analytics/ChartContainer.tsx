import { ResponsiveContainer } from "recharts";

export default function ChartContainer() {
  return (
    <div className="p-4 border space-y-2 w-fit rounded-lg">
      <p>Placement % by Branch</p>
      <p>Department-wise placement success rate</p>
      <ResponsiveContainer>
        <p></p>
      </ResponsiveContainer>
    </div>
  );
}
