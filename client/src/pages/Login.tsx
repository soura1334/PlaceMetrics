import { ArrowLeft, TrendingUp } from "lucide-react";
import LandingWrapper from "../components/Landing/LandingWrapper";
import LoginForm from "../components/Auth/LoginForm";
import { Link } from "react-router";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Login() {
  return (
    <LandingWrapper>
      <div className="justify-self-end text-black dark:text-white px-10 py-8">
        <ThemeToggle />
      </div>
      <div className="text-center text-black dark:text-white">
        <div className="justify-self-center my-5 lg:my-8 bg-black/15 dark:bg-white/5 p-2 rounded-lg">
          <TrendingUp size={30} />
        </div>
        <p className="text-3xl lg:text-5xl font-bold">Welcome Back</p>
        <p className="my-4 text-sm lg:text-lg">Sign in to your account to continue</p>
      </div>
      <LoginForm />
      <Link className="flex justify-self-center text-black dark:text-white text-sm lg:text-md my-8 items-center gap-2" to="/">
        <ArrowLeft /> Back to home
      </Link>
      <p className="text-center my-8 text-xs lg:text-sm text-black/30 dark:text-white/30">
        © 2026 PlaceMetrics. All rights reserved.
      </p>
    </LandingWrapper>
  );
}
