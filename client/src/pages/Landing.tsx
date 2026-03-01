import LeftHero from "../components/Landing/LeftHero";
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
      <nav className="sticky top-0 z-20 py-2 bg-gray-300/10 backdrop-blur-xl">
        <div className="flex justify-between px-6 py-4 mx-auto max-w-7xl">
          <div className="">PlaceMetrics</div>
          <ul className="flex justify-end gap-10">
            <li>Login</li>
            <li>Get Started</li>
          </ul>
        </div>
      </nav>
      <div className="flex justify-center max-w-7xl mt-20 gap-5 px-6 py-4 mx-auto">
        <LeftHero />
        <div className="border border-white w-[50vw]">ok</div>
      </div>
    </div>
  );
}
