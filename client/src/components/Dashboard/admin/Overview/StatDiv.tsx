import type { ReactNode } from "react";

type StatDivProps = {
    label: string;
    value: string;
    icon: ReactNode;
}

export default function StatDiv({label, value, icon}: StatDivProps) {
  return (
    <div className="flex items-center p-10 justify-between">
      <div>
        <p className="text-lg">{label}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
      {icon}
    </div>
  );
}
