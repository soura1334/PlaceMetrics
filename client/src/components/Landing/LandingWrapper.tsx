import type { ReactNode } from "react";
import DarkVeil from "../../utils/DarkVeil";
type Props = { children: ReactNode }

export default function LandingWrapper({ children }: Props) {
  return (
    <div className="text-white box-border">
      <DarkVeil
        hueShift={-20}
        noiseIntensity={0}
        scanlineIntensity={0.7}
        speed={0.5}
        scanlineFrequency={0}
        warpAmount={0}
        resolutionScale={1.25}
      />
      {children}
    </div>
  );
}
