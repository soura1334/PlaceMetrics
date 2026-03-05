import PriceCard from "./PriceCard";

export default function Pricing() {
  return (
    <>
      <div className="text-center text-black dark:text-white mt-20">
        <p className="text-2xl lg:text-4xl font-bold">Simple, transparent pricing</p>
        <p className="lg:text-lg text-sm mt-4">Choose the plan that fits your institution</p>
      </div>

      <div className="flex flex-col text-black dark:text-white lg:h-140 items-center lg:items-start lg:flex-row lg:justify-center gap-5 lg:gap-8 mx-10 my-10">
        <PriceCard
          planName="Starter"
          forWho="For small colleges"
          price="₹49,999"
          bullets={["Up to 500 students", "Basic analytics", "Email support"]}
          btnText="Start Small"
        />
        <PriceCard
          planName="Professional"
          forWho="For growing institutions"
          price="₹99,999"
          bullets={[
            "Up to 2000 students",
            "Advanced analytics",
            "Priority support",
            "Custom reports",
          ]}
          btnText="Get Started"
        >
          <p className="text-teal-300 bg-white/80 dark:bg-black/40 border border-teal-400/20 px-3 py-1 text-sm font-medium rounded-xl w-fit">Most Popular</p>
        </PriceCard>
        <PriceCard
          planName="Enterprise"
          forWho="For large universities"
          price="₹1,49,999"
          bullets={[
            "Unlimited",
            "Full Analytics Suite",
            "Dedicated support",
            "API Access",
          ]}
          btnText="Contact Sales"
        />
      </div>
    </>
  );
}
