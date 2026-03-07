import type { ReactNode } from "react";

type AdminCardProps = {
  title: string;
  children: ReactNode;
}

export default function AdminCard({title, children}: AdminCardProps) {
  return (
    <div className="p-6 space-y-4 border rounded-lg">
      <p className="text-lg font-semibold">{title}</p>
      {children}
    </div>
  );
}
