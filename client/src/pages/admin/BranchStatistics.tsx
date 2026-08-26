import CTCGraph from "@/components/Dashboard/admin/Branch Statistics/CTCGraph";
import PlacedGraph from "@/components/Dashboard/admin/Branch Statistics/PlacedGraph";
import ChartContainer from "@/components/Dashboard/admin/Placement Analytics/ChartContainer";

export type branchObj = {
  branch: string;
  code: string;
  students: number;
  placed: number;
  avgPkg: number;
  highPkg: number;
  companies: number;
  rate: number;
  color: string;
};

const branchData: branchObj[] = [
  {
    branch: "Computer Science",
    code: "CSE",
    students: 120,
    placed: 110,
    avgPkg: 22.5,
    highPkg: 58,
    companies: 42,
    rate: 92,
    color: "#10B981",
  },
  {
    branch: "Information Technology",
    code: "IT",
    students: 80,
    placed: 70,
    avgPkg: 19.8,
    highPkg: 45,
    companies: 35,
    rate: 88,
    color: "#3B82F6",
  },
  {
    branch: "Electronics & Comm.",
    code: "ECE",
    students: 90,
    placed: 68,
    avgPkg: 15.2,
    highPkg: 32,
    companies: 28,
    rate: 75,
    color: "#06B6D4",
  },
  {
    branch: "Electrical Engineering",
    code: "EEE",
    students: 70,
    placed: 48,
    avgPkg: 12.8,
    highPkg: 24,
    companies: 20,
    rate: 68,
    color: "#8B5CF6",
  },
  {
    branch: "Mechanical Engineering",
    code: "Mech",
    students: 85,
    placed: 53,
    avgPkg: 10.5,
    highPkg: 18,
    companies: 15,
    rate: 62,
    color: "#F59E0B",
  },
  {
    branch: "Civil Engineering",
    code: "Civil",
    students: 65,
    placed: 38,
    avgPkg: 9.2,
    highPkg: 14,
    companies: 12,
    rate: 58,
    color: "#EF4444",
  },
];

export default function BranchStatistics() {
  return (
    <div className="p-4 space-y-4">
      <p className="text-3xl font-bold">Branch Statistics</p>
      <p>Detailed placement breakdown by engineering branch</p>
      <div className="grid grid-cols-6 gap-5 ">
        {branchData.map((branch) => {
          return (
            <div className="text-center space-y-4 flex flex-col items-center border px-5 py-10 rounded-md ">
              <div
                className="p-3 rounded-xl w-15 h-15 flex items-center justify-center"
                style={{ backgroundColor: branch.color }}
              >
                <p>{branch.code}</p>
              </div>
              <p>{branch.branch.split(" ")[0]}</p>
              <p className="text-3xl font-bold" style={{ color: branch.color }}>
                {branch.rate}%
              </p>
              <p className="text-sm">
                {branch.placed}/{branch.students} placed
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex gap-5 ">
        <ChartContainer
          heading="Students Placed vs Total"
          subHeading="Placed vs total eligible students per branch"
        >
          <PlacedGraph data={branchData} />
        </ChartContainer>
        <ChartContainer
          heading="Average Package by Branch"
          subHeading="Mean CTC offered across departments (LPA)"
        >
          <CTCGraph data={branchData} />
        </ChartContainer>
      </div>
    </div>
  );
}
