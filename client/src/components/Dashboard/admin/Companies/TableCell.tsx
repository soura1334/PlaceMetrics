import type { ReactNode } from "react";

type CellProps = {
  text?: string;
  children?: ReactNode;
};

export default function TableCell({ text, children }: CellProps) {
  return (
    <td className="border-b px-4 py-3">
      <p>{text}</p>
      {children}
    </td>
  );
}
