import { Activity, ArrowRight, Check } from "lucide-react";

export default function LeftHero() {
  return (
    <div className=" w-[50vw] flex flex-col py-4">
      {/* Top Section */}
      <div className="p-4 border rounded-4xl bg-white/5 text-teal-400 backdrop-blur-md border-teal-400/40 w-fit flex items-center gap-2">
        <Activity size={15} />
        <p className="text-sm">Enterprise-grade Analytics Platform</p>
      </div>
      {/* Hero Text */}
      <div className="text-6xl mt-5 flex flex-col font-bold leading-snug">
        <p>Campus Placement</p>
        <p>Analytics, </p>
        <p className="bg-linear-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent ">
          Reimagined
        </p>
      </div>
      {/* Paragraph */}
      <div className="mt-10 text-lg text-white/70 max-w-2xl leading-relaxed">
        Multi-tenant SaaS platform for colleges to track, analyze, and optimize
        campus placements with real-time insights and lifecycle management.
      </div>
      {/* Buttons */}
      <div className="flex gap-6 mt-8">
        <button className="rounded-lg bg-linear-to-r from-teal-400 to-cyan-500 text-black font-semibold shadow-lg px-6 py-3 flex items-center gap-2">
          Start Free Trial <ArrowRight />
        </button>
        <button className="border-2 border-teal-400/40 rounded-lg text-teal-400 bg-white/10 px-6 py-3">
          View Demo
        </button>
      </div>
      <div className="flex gap-6 mt-8 text-white/50 text-sm">
        <div className="flex items-center gap-2">
          <Check size={20} /> No credit card required
        </div>
        <div className="flex items-center gap-2">
          <Check size={20} /> 14 day free trial
        </div>
      </div>
    </div>
  );
}
