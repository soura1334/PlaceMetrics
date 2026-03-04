import { ArrowLeft, TrendingUp } from "lucide-react";
import LandingWrapper from "../components/Landing/LandingWrapper";
import LoginForm from "../components/Auth/LoginForm";
import { Link } from "react-router";

export default function Login() {
  return (
    <LandingWrapper>
      <div className="text-center">
        <div className="justify-self-center my-8 bg-black/40 p-2 rounded-lg">
          <TrendingUp size={40} />
        </div>
        <p className="text-5xl font-bold">Welcome Back</p>
        <p className="my-4 text-lg">Sign in to your account to continue</p>
      </div>
      <LoginForm />
      <Link className="flex justify-self-center my-8 items-center gap-2" to="/">
        <ArrowLeft /> Back to home
      </Link>
      <p className="text-center my-8 text-sm text-white/30">© 2026 PlaceMetrics. All rights reserved.</p>
    </LandingWrapper>
  );
}
