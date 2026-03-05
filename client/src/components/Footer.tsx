import { TrendingUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t text-black dark:text-white dark:border-white/10 py-10 lg:px-20 bg-linear-to-b from-gray-300/50 dark:from-black/50 via-gray-500/70 dark:via-black/70 to-gray-700/90 dark:to-black/90 backdrop-blur-md ">
      <div className="grid lg:grid-cols-4 gap-x-8 gap-y-4 w-fit border-b border-black/40 dark:border-white/10 pb-10 mx-auto">
        <div className="space-y-5">
          <div className="flex gap-4 font-bold text-sm lg:text-lg">
            <TrendingUp /> PlaceMetrics
          </div>
          <p className="dark:text-gray-400/80 text-xs lg:text-sm">
            Enterprise placement analytics for modern colleges.
          </p>
        </div>
        <div className="space-y-4">
          <div className="font-bold text-sm lg:text-lg">Product</div>
          <div className="dark:text-gray-400 text-xs lg:text-sm flex flex-col gap-2">
            <p>Features</p>
            <p>Pricing</p>
            <p>Security</p>
            <p>Roadmap</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="font-bold text-sm lg:text-lg">Company</div>
          <div className="dark:text-gray-400 text-xs lg:text-sm flex flex-col gap-2">
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="font-bold text-sm lgtext-lg">Legal</div>
          <div className="dark:text-gray-400 text-xs lg:text-sm flex flex-col gap-2">
            <p>Privacy</p>
            <p>Terms</p>
            <p>License</p>
          </div>
        </div>
      </div>
      <p className="text-center dark:text-gray-500/70 text-xs lg:text-sm mt-10">
        © 2026 PlaceMetrics. All rights reserved.
      </p>
    </footer>
  );
}
