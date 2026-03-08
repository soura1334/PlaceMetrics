import AdminCard from "@/components/Dashboard/admin/Overview/AdminCard";
import CompaniesGraph from "@/components/Dashboard/admin/Overview/CompaniesGraph";
import DepartmentGraph from "@/components/Dashboard/admin/Overview/DepartmentGraph";
import PlacementGraph from "@/components/Dashboard/admin/Overview/PlacementGraph";
import StatCard, {
  type CardProps,
} from "@/components/Dashboard/admin/Overview/StatCard";
import StatDiv from "@/components/Dashboard/admin/Overview/StatDiv";
import { Award, Building2, IndianRupee, TrendingUp, Users } from "lucide-react";

const stats: CardProps[] = [
  {
    label: "Total Students",
    icon: <Users />,
    value: "510",
    subtext: "+12% from last year",
  },
  {
    label: "Total Companies",
    icon: <Building2 />,
    value: "87",
    subtext: "+8 new from last year",
  },
  {
    label: "Offer Conversion",
    icon: <TrendingUp />,
    value: "76%",
    subtext: "+5% from last year",
  },
  {
    label: "Average Package",
    icon: <IndianRupee />,
    value: "8 lpa",
    subtext: "+15% from last year",
  },
  {
    label: "Highest Package",
    icon: <Award />,
    value: "70 lpa",
    subtext: "+55% from last year",
  },
];

export default function AdminOverview() {
  return (
    <div className="p-4">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Overview</h1>
        <p className="text-lg">Welcome to your placement analytics dashboard</p>
        <div className="flex h-50 gap-5">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              label={stat.label}
              icon={stat.icon}
              value={stat.value}
              subtext={stat.subtext}
            />
          ))}
        </div>
        <div className="grid gap-5 p-5 grid-cols-2">
          <AdminCard title="Placement Trends Over Years">
            <PlacementGraph />
          </AdminCard>
          <AdminCard title="Department-wise Success Rate">
            <DepartmentGraph />
          </AdminCard>
          <AdminCard title="Company Hiring Distribution">
            <CompaniesGraph />
          </AdminCard>
          <AdminCard title="Quick Stats">
            <div>
              <StatDiv label="Active Drives" value="24" icon={<Building2 />} />
              <StatDiv label="Applications This Month" value="1247" icon={<TrendingUp />} />
              <StatDiv label="Offers Extended" value="389" icon={<Award />} />
            </div>
          </AdminCard>
        </div>
      </div>
    </div>
  );
}
