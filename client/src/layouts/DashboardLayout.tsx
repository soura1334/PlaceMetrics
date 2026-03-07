import DashNav from "@/components/Dashboard/DashNavbar";
import Sidebar from "@/components/Dashboard/SIdebar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="m-0 p-0 flex overflow-hidden h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashNav />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
