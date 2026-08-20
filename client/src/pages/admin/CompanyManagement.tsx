import CompanyTable from "@/components/Dashboard/admin/Companies/CompanyTable";
import SearchBar from "@/components/Dashboard/SearchBar";
import { Filter } from "lucide-react";

export default function CompanyManagement() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Company Management</h1>
          <p>Manage recruiting companies and partnerships</p>
        </div>
        <div className="space-x-2">
          <span>+</span>
          <button>Add Company</button>
        </div>
      </div>

      <div className="flex p-4 border rounded-lg gap-x-5 justify-between">
        <SearchBar />
        <div className="flex items-center justify-center relative border rounded-lg ">
          <Filter className="absolute left-2" size={20} />
          <select className="w-50 text-center p-2">
            <option>All Types</option>
            <option>Product</option>
            <option>Service</option>
            <option>Startup</option>
          </select>
        </div>
      </div>

      <div>
        <CompanyTable />
      </div>
    </div>
  );
}
