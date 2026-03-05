import Bullet from "./Bullet";

export default function CTASection() {
  return (
    <div className="lg:max-w-4xl mx-5 lg:mx-auto text-center border border-teal-400/40 py-10 flex flex-col gap-5 my-20 rounded-xl text-black dark:text-white bg-black/5 dark:bg-white/5 backdrop-blur-md">
      <p className="text-2xl lg:text-4xl font-bold">
        Ready to transform your placement process?
      </p>
      <p className="text-sm lg:text-xl">Join leading institutions using PlaceMetrics</p>
      <div className="mt-5 flex gap-6 justify-center">
        <button className="border lg:text-md text-sm px-2 lg:px-4 py-2 rounded-md  bg-teal-400 dark:border-black/40 text-black ">
          Start Free Trial
        </button>
        <button className=" lg:text-md text-sm px-2 lg:px-4 py-2 rounded-md bg-white/80 drop-shadow-xl dark:bg-black/40 border-teal-400/40 text-teal-400">
          Schedule Demo
        </button>
      </div>
      <div className="flex justify-center font-light gap-5 text-gray-400">
        <Bullet title="No credit card required" />
        <Bullet title="14 day free trial" />
      </div>
    </div>
  );
}
