import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

export default function HeroWrapper() {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:items-center max-w-7xl mt-10 lg:mt-20 gap-5 px-6 py-4 mx-auto">
      <LeftHero />
      <RightHero />
    </div>
  );
}
