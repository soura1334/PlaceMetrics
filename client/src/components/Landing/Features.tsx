import { ChartColumnIncreasing, Shield, TrendingUp } from "lucide-react";
import Card from "./Card";

export default function Features() {
  return (
    <>
      <div className="text-center mt-30">
        <p className="lg:text-4xl text-2xl p-2 lg:p-0 font-bold">
          Everything you need to manage placements
        </p>
        <p className="lg:text-lg text-sm mt-5">
          Powerful features designed for modern placement cells
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center px-6 mt-8 py-4 gap-8">
        <Card
          title="Advanced Analytics"
          tagline="Turn data into decisions."
          description="Real-time dashboards with KPIs, trend analysis, and predictive insights. Track placement performance across departments, companies, and academic years — all in one place."
        >
          <ChartColumnIncreasing />
        </Card>
        <Card
          title="End-to-End Placement Workflow"
          tagline="From application to offer — fully transparent."
          description="Kanban pipelines, funnel analytics, and automated status updates keep students, faculty, and admins aligned at every stage."
        >
          <TrendingUp />
        </Card>
        <Card
          title="Institution-Grade Infrastructure"
          tagline="Enterprise-grade security and isolation."
          description="Dedicated data environments for each institution with role-based access control and full privacy compliance."
        >
          <Shield />
        </Card>
      </div>
    </>
  );
}
