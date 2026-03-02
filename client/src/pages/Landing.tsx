import LeftHero from "../components/Landing/LeftHero";
import RightHero from "../components/Landing/RightHero";
import Navbar from "../components/Navbar";
import DarkVeil from "../utils/DarkVeil";

export default function Landing() {
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
      <Navbar />
      <div className="flex justify-center max-w-7xl mt-20 gap-5 px-6 py-4 mx-auto">
        <LeftHero />
        <RightHero />
      </div>
    </div>
  );
}
