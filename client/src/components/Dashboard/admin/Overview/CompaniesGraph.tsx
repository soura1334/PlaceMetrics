import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
  type PieSectorShapeProps,
} from "recharts";

const companyHiringDistribution = [
  { name: "Product Companies", value: 45 },
  { name: "Service Companies", value: 30 },
  { name: "Startups", value: 15 },
  { name: "Finance", value: 10 },
];

const COLORS = ["#10B981", "#3B82F6", "#06B6D4", "#8B5CF6"];

type PieLabelProps = {
  x?: number;
  y?: number;
  name?: string;
  value?: number;
  index?: number;
  textAnchor?: "start" | "middle" | "end";
  dominantBaseline?: "auto" | "middle" | "central" | "hanging";
};

function CustomLabel(props: PieLabelProps) {
  const fill = COLORS[(props.index ?? 0) % COLORS.length];
  return (
    <text
      x={props.x}
      y={props.y}
      fill={fill}
      textAnchor={props.textAnchor}
      dominantBaseline={props.dominantBaseline}
    >
      {`${props.name}: ${props.value}`}
    </text>
  );
}

export default function CompaniesGraph() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart responsive>
        <Pie
          data={companyHiringDistribution}
          labelLine={false}
          dataKey="value"
          nameKey="name"
          label={<CustomLabel />}
          shape={(props: PieSectorShapeProps & { index?: number }) => {
            const fill = COLORS[(props.index ?? 0) % COLORS.length];
            return <Sector {...props} fill={fill} />;
          }}
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
