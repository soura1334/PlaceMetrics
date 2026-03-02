import HeroWrapper from "../components/Landing/HeroWrapper";
import LandingWrapper from "../components/Landing/LandingWrapper";
import Navbar from "../components/Navbar";
import Features from "../components/Landing/Features"

export default function Landing() {
  return (
    <LandingWrapper>
      <Navbar />
      <HeroWrapper />
      <Features />
    </LandingWrapper>
  );
}
