import DarkVeil from "../utils/DarkVeil";

export default function Landing() {
  return (
    <div className="text-white box-border">
      <DarkVeil
        hueShift={0}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={0.5}
        scanlineFrequency={0}
        warpAmount={0}
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
        <div className="border border-white h-[70vh] w-[50vw]">hello</div>
        <div className="border border-white h-[70vh] w-[50vw]">ok</div>
      </div>
    </div>
  );
}
