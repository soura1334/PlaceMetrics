import HeroWrapper from "../components/Landing/HeroWrapper";
import LandingWrapper from "../components/Landing/LandingWrapper";
import Navbar from "../components/Navbar";

import { lazy, Suspense } from "react";

const Features = lazy(() => import("../components/Landing/Features"));
const Pricing = lazy(() => import("../components/Landing/Pricing"));
const CTASection = lazy(()=> import("../components/Landing/CTASection"));
const Footer = lazy(() => import("../components/Footer"));

export default function Landing() {
  return (
    <LandingWrapper>
      <Navbar />
      <HeroWrapper />
      <Suspense>
        <Features />
        <Pricing />
        <CTASection />
        <Footer />
      </Suspense>
    </LandingWrapper>
  );
}
