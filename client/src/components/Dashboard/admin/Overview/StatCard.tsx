import { ArrowUp } from "lucide-react";
import type { ReactNode } from "react";

export interface CardProps{
    label: string;
    icon: ReactNode;
    value: string;
    subtext: string;
}

export default function StatCard({label, icon, value, subtext} : CardProps) {
  return (
    <div className="border px-10 py-5 h-full w-fit flex flex-col justify-between rounded-lg gap-5">
      <div className="flex gap-4">
        <p>{label}</p>
        {icon}
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <div className="flex items-center text-green-500 gap-2">
        <ArrowUp className="h-5 w-5" />
        <p>{subtext}</p>
      </div>
    </div>
  );
}
