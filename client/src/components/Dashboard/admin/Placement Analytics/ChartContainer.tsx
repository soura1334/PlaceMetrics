import type { ReactNode } from "react";
import { ResponsiveContainer } from "recharts";

type ChartProps = {
  children: ReactNode;
}

export default function ChartContainer({children}: ChartProps) {
  return (
    <div className="p-4 border space-y-2 w-full rounded-lg">
      <p>Placement % by Branch</p>
      <p>Department-wise placement success rate</p>
      <ResponsiveContainer width="100%" height={300}>
        {children}
      </ResponsiveContainer>
    </div>
  );
}
