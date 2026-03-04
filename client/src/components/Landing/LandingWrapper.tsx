import type { ReactNode } from "react";
import { Grid } from "@/utils/Grid";
type Props = { children: ReactNode }

export default function LandingWrapper({ children }: Props) {
  return (
    <div className="relative text-white box-border min-h-screen">
      <Grid />
      {children}
    </div>
  );
}
