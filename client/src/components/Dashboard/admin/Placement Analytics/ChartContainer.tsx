import type { ReactNode } from "react";
import { ResponsiveContainer } from "recharts";

type ChartProps = {
  children: ReactNode;
  heading?: String;
  subHeading?: String;
  border? : boolean;
}

export default function ChartContainer({children, heading, subHeading, border = true}: ChartProps) {
  return (
    <div className= {`p-4 ${border ? "border" : "border-none"} space-y-2 w-full rounded-lg`}>
      <p>{heading}</p>
      <p>{subHeading}</p>
      <ResponsiveContainer width="100%" height={300}>
        {children}
      </ResponsiveContainer>
    </div>
  );
}
