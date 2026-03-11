import AnalyticsCard from "@/components/Dashboard/admin/Placement Analytics/AnalyticsCard";
import ChartContainer from "@/components/Dashboard/admin/Placement Analytics/ChartContainer";

export default function PlacementAnalytics() {
  return (
    <div className="p-4">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Placement Analytics</h2>
        <p>
          Comprehensive insights into placement performance across branches and
          companies
        </p>
        <div className="flex justify-between">
            <AnalyticsCard label="Overall Placement Rate" value="92%" subtext="+2% from last year" />
            <AnalyticsCard label="Students Placed" value="387" subtext="Out of 420 eligible" />
            <AnalyticsCard label="Avg Package (LPA)" value="₹19.2" subtext="+8.5% vs last year" />
            <AnalyticsCard label="Companies Visited" value="87" subtext="+8 new this year" />
        </div>
        <div className="grid grid-cols-2 justify-items-center mt-10 gap-10">
          <ChartContainer />
          <ChartContainer />
          <ChartContainer />
          <ChartContainer />
        </div>
      </div>
    </div>
  );
}
