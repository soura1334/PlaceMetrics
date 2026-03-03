import { TrendingUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 p-10  px-20 bg-linear-to-b from-black/50 via-black/70 to-black/90 backdrop-blur-md ">
      <div className="grid grid-cols-4 gap-x-8 gap-y-4 w-fit border-b border-white/10 pb-10 mx-auto">
        <div className="flex gap-4 font-bold text-lg">
          <TrendingUp /> PlaceMetrics
        </div>
        <div className="font-bold text-lg">Product</div>
        <div className="font-bold text-lg">Company</div>
        <div className="font-bold text-lg">Legal</div>

        {/* Second row */}
        <p className="text-gray-400/80 text-sm">
          Enterprise placement analytics for modern colleges.
        </p>
        <div className="text-gray-400 text-sm flex flex-col gap-2">
          <p>Features</p>
          <p>Pricing</p>
          <p>Security</p>
          <p>Roadmap</p>
        </div>
        <div className="text-gray-400 text-sm flex flex-col gap-2">
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div className="text-gray-400 text-sm flex flex-col gap-2">
          <p>Privacy</p>
          <p>Terms</p>
          <p>License</p>
        </div>
      </div>
      <p className="text-center text-gray-500/70 text-sm mt-10">
        © 2026 PlaceMetrics. All rights reserved.
      </p>
    </footer>
  );
}
