import { TrendingUp } from "lucide-react";
import { Link } from "react-router";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {

  return (
    <nav className="sticky top-0 z-20 py-2 dark:bg-white/5 text-black dark:text-white bg-black/20 backdrop-blur-md border-b border-white/5 lg:text-sm text-xs">
      <div className="flex items-center justify-between lg:px-6 px-2 py-4">
        <div className="flex items-center gap-4">
          <div className="w-fit bg-white/80 dark:bg-black/20 px-2 border dark:border-black/20 rounded-xl ">
            <TrendingUp className="h-5 lg:h-10" />
          </div>
          PlaceMetrics
        </div>
        <ul className="flex items-center justify-end gap-10">
          <Link to="/login">Login</Link>
          <Link to="/register">Get Started</Link>
          <ThemeToggle />
        </ul>
      </div>
    </nav>
  );
}
