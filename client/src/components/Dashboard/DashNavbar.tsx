import { Search, TrendingUp, User } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThemeToggle } from "../ThemeToggle";
import NotificationBell, { Dropdown } from "./NotificationBell";
import { useState } from "react";

export default function DashNav() {

    const [isVisible, setIsVisible]= useState<boolean>(false);
    
    function handleNoti(){
        setIsVisible((curr)=> !curr );
    }

  return (
    <nav className="px-5 flex border-b  gap-16">
      <div className="flex py-4 gap-4 items-center">
        <TrendingUp />
        <p>PlaceMetrics</p>
      </div>
      <div className="flex p-4 border-l w-full justify-around items-center gap-5">
        <div className="flex gap-4 items-center">
          <p>College:</p>
          <p className="border rounded-lg p-2 text-xs">
            Kalyani Government Engineering College
          </p>
        </div>
        <Select>
          <SelectTrigger className="text-sm">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select year</SelectLabel>
              <SelectItem value="2026">2026</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex items-center text-sm gap-3 p-2 border rounded-md">
          <Search size={20} />
          <input placeholder="Search companies..." />
        </div>
        <ThemeToggle />
        <div className="relative">
          <NotificationBell handleClick={handleNoti} />
          {isVisible && <Dropdown />}
        </div>
        <div className="flex items-center gap-4 text-sm">
            <User size={20} />
            <div>
                <p className="font-bold">Sourajeet Routh</p>
                <p>Admin</p>
            </div>
        </div>
      </div>
    </nav>
  );
}
