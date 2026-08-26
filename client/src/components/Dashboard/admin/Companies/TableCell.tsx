import type { ReactNode } from "react";

type CellProps = {
  text?: string;
  children?: ReactNode;
  isType: boolean;
};

function getTypeColor(type: string) {
  switch (type) {
    case "Product":
      return "bg-blue-500/10 text-blue-500";
    case "Service":
      return "bg-green-500/10 text-green-500";
    case "Startup":
      return "bg-purple-500/10 text-purple-500";
    default:
      return "bg-gray-500/10 text-gray-500";
  }
}

export default function TableCell({ text, children, isType }: CellProps) {
  return (
    <td className="border-b px-4 py-3">
      <p className={(isType && text ? `${getTypeColor(text)} text-center w-20 rounded-lg border p-1 text-sm` : "") }>{text}</p>
      {children}
    </td>
  );
}
