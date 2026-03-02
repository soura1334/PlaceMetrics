import { TrendingUp } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 py-2 bg-black/30 backdrop-blur-md border-b border-white/5 lg:text-md text-sm">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center gap-4"><TrendingUp className="h-5 lg:h-10" />PlaceMetrics</div>
        <ul className="flex justify-end gap-10">
          <li>Login</li>
          <li>Get Started</li>
        </ul>
      </div>
    </nav>
  );
}
