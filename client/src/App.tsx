import DarkVeil from "./utils/DarkVeil";

function App() {
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
      <nav className="border border-white">
        <div className="flex justify-between px-6 py-4 mx-auto max-w-7xl border border-white">
          <div className="border border-white">Logo</div>
          <ul className="flex justify-end border border-white ">
            <li>Login</li>
            <li>Get Started</li>
          </ul>
        </div>
      </nav>
      <div className="flex justify-center max-w-7xl border border-white gap-5 px-6 py-4 mx-auto">
        <div className="border border-white h-[70vh] w-[50vw]">hello</div>
        <div className="border border-white h-[70vh] w-[50vw]">ok</div>
      </div>
    </div>
  );
}

export default App;
