import { LogOut, TrendingUp } from "lucide-react";
import { Link } from "react-router";

export default function Sidebar() {
  return (
    <aside className="w-60 h-screen items-start flex flex-col border-r">
      <div className="flex p-4 h-16 gap-4 border-b w-full items-center">
        <TrendingUp />
        <p>PlaceMetrics</p>
      </div>
        <div className="grow border-b p-4 pb-8 flex w-full gap-5 items-start justify-center flex-col">
          <Link to="/admin">Overview</Link>
          <button>Placement Analytics</button>
          <button>Companies</button>
          <button>Branch Statistics</button>
          <button>Job Roles</button>
          <button>Application Tracking</button>
          <button>Students</button>
          <button>Upload Data</button>
          <button>Reports</button>
        </div>
      <div className="grow w-full justify-around flex flex-col items-start p-4">
        <div className="text-left text-sm space-y-2">
          <p className="font-bold">Sourajeet Routh</p>
          <p>Admin</p>
        </div>
        <button className="flex gap-4">
          <LogOut />
          <p>Logout</p>
        </button>
      </div>
    </aside>
  );
}
