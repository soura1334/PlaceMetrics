import HeroWrapper from "../components/Landing/HeroWrapper";
import LandingWrapper from "../components/Landing/LandingWrapper";
import Navbar from "../components/Navbar";
import Features from "../components/Landing/Features"
import Pricing from "../components/Landing/Pricing";
import CTASection from "../components/Landing/CTASection";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <LandingWrapper>
      <Navbar />
      <HeroWrapper />
      <Features />
      <Pricing />
      <CTASection />
      <Footer />
    </LandingWrapper>
  );
}
