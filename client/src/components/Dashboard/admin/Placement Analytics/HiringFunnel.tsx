import { Pie, PieChart, Sector, Tooltip, type PieSectorShapeProps } from "recharts";
import ChartContainer from "./ChartContainer";

const hiringFunnelData = [
  { name: "Applied", value: 1247, fill: "#10B981" },
  { name: "Shortlisted", value: 820, fill: "#3B82F6" },
  { name: "Interview", value: 420, fill: "#06B6D4" },
  { name: "HR Round", value: 210, fill: "#8B5CF6" },
  { name: "Offered", value: 389, fill: "#F59E0B" },
];


export default function HiringFunnel() {
  return (
    <div className="border py-4 px-4 rounded-lg space-y-4">
      <h1 className="text-xl">Hiring Funnel</h1>
      <h3>Student progression through recruitment stages</h3>
      <div className="flex w-full justify-between">
        <div className="w-full p-4 space-y-2">
            {hiringFunnelData.map((stage) => {
              const pct = Math.round((stage.value / hiringFunnelData[0].value) * 100);
              return (
                <div key={stage.name} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{stage.name}</span>
                    <span className="text-muted-foreground">{stage.value.toLocaleString()} ({pct}%)</span>
                  </div>
                  <div className="h-8 rounded-lg overflow-hidden bg-muted/40">
                    <div
                      className="h-full rounded-lg flex items-center justify-end pr-3 "
                      style={{ width: `${pct}%`, backgroundColor: stage.fill }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="w-full">
          <ChartContainer border={false}>
            <PieChart responsive>
              <Pie
                data={hiringFunnelData}
                labelLine={false}
                dataKey="value"
                nameKey="name"
                label={({ percent }) => `${((percent ?? 0) * 100).toFixed(0)}%`}
                shape={(props: PieSectorShapeProps & { index?: number }) => {
                  const fill = hiringFunnelData[(props.index ?? 0) % hiringFunnelData.length].fill;
                  return <Sector {...props} fill={fill} />;
                }}
              />
              <Tooltip />
            </PieChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
