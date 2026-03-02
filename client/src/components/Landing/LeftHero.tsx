import { Activity, ArrowRight, Check } from "lucide-react";

export default function LeftHero() {
  return (
    <div className="flex flex-col py-4">
      {/* Top Section */}
      <div className="p-4 border rounded-4xl bg-white/5 text-teal-400 backdrop-blur-md border-teal-400/40 w-fit flex items-center gap-2">
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
      <div className="mt-10 text-sm lg:text-lg text-white/70 max-w-2xl leading-relaxed">
        Multi-tenant SaaS platform for colleges to track, analyze, and optimize
        campus placements with real-time insights and lifecycle management.
      </div>
      {/* Buttons */}
      <div className="lg:text-sm text-xs flex gap-6 mt-8">
        <button className="rounded-lg bg-linear-to-r from-teal-400 to-cyan-500 text-black font-semibold shadow-lg p-2 lg:px-4 flex items-center gap-2">
          Start Free Trial <ArrowRight className="h-4 lg:h-10" />
        </button>
        <button className="border-2 border-teal-400/40 rounded-lg text-teal-400 bg-white/10 p-2 lg:px-4 ">
          View Demo
        </button>
      </div>
      {/* Text */}
      <div className="flex gap-6 mt-5 text-white/50 text-xs lg:text-sm">
        <div className="flex items-center gap-2">
          <Check className="h-4 lg:h-10"  /> No credit card required
        </div>
        <div className="flex items-center gap-2">
          <Check className="h-4 lg:h-10" /> 14 day free trial
        </div>
      </div>
    </div>
  );
}
