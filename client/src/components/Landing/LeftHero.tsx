import { Activity, ArrowRight} from "lucide-react";
import Bullet from "./Bullet";

export default function LeftHero() {
  return (
    <div className="flex flex-col dark:text-white text-black py-4">
      {/* Top Section */}
      <div className="p-4 border rounded-4xl bg-white/80 dark:bg-white/5 text-teal-400 backdrop-blur-md border-teal-400/40 w-fit flex items-center gap-2">
        <Activity size={15} />
        <p className="lg:text-sm text-xs">Enterprise-grade Analytics Platform</p>
      </div>
      {/* Hero Text */}
      <div className="text-4xl lg:text-6xl mt-5 flex flex-col font-bold leading-snug">
        <p>Campus Placement</p>
        <p>Analytics, </p>
        <p className="bg-linear-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent ">
          Reimagined
        </p>
      </div>
      {/* Paragraph */}
      <div className="mt-10 text-sm lg:text-lg text-gray-600 dark:text-white/70 max-w-2xl leading-relaxed">
        Multi-tenant SaaS platform for colleges to track, analyze, and optimize
        campus placements with real-time insights and lifecycle management.
      </div>
      {/* Buttons */}
      <div className="lg:text-sm text-xs flex gap-6 mt-8">
        <button className="rounded-lg bg-linear-to-r from-teal-400 to-cyan-500 text-black font-semibold shadow-lg p-2 lg:px-4 flex items-center gap-2">
          Start Free Trial <ArrowRight className="h-4 lg:h-10" />
        </button>
        <button className="border-2 border-teal-400/40 rounded-lg text-teal-400 bg-white/80 dark:bg-white/5 p-2 lg:px-4 ">
          View Demo
        </button>
      </div>
      {/* Text */}
      <div className="flex gap-6 mt-5 text-gray-500 dark:text-white/50 text-xs lg:text-sm">
        <Bullet title="No credit card required" />
        <Bullet title="14 day free trial"/>
      </div>
    </div>
  );
}
