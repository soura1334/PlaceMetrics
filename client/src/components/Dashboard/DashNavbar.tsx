import { Search, User } from "lucide-react";

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
import SettingsDialog from "./SettingsDialog";

export default function DashNav() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  function handleNoti() {
    setIsVisible((curr) => !curr);
  }

  function handleProfile(){
    setShowSettings((curr) => !curr);
  }

  return (
    <nav className="flex border-b h-16">
      <div className="flex p-4 border-l justify-around w-full items-center gap-5">
        <div className="flex gap-5">
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
        </div>
        <div className="relative flex grow max-w-xs items-center text-sm gap-3 border rounded-md">
          <Search className="absolute left-2 w-4 h-4" />
          <input className="h-full w-full py-2 pl-8" placeholder="Search companies..." />
        </div>
        <ThemeToggle />
        <div className="relative">
          <NotificationBell handleClick={handleNoti} />
          {isVisible && <Dropdown />}
        </div>
        <div className="flex items-center gap-4 text-sm">
          <User size={20} />
          <button onClick={handleProfile} className="text-left relative">
            <p className="font-bold">Sourajeet Routh</p>
            <p>Admin</p>
            {showSettings && <SettingsDialog />}
          </button>
        </div>
      </div>
    </nav>
  );
}
