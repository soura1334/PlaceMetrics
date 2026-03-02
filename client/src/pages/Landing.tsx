import HeroWrapper from "../components/Landing/HeroWrapper";
import LandingWrapper from "../components/Landing/LandingWrapper";
import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <LandingWrapper>
      <Navbar />
      <HeroWrapper />
    </LandingWrapper>
  );
}
