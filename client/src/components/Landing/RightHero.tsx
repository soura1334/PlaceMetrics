import { Award, ChartColumn, ChartLine, Users, Zap } from "lucide-react";
import ChartComp from "./ChartComp";

export default function RightHero() {
  return (
    <div className="border border-transparent my-2 rounded-2xl grid-rows-5 p-6 bg-white/5 backdrop-blur-md">
      <div className="flex items-center gap-3 border-b border-white/10 pb-5">
        <ChartColumn className="h-4 lg:h-10" /> Dashboard
      </div>
      <div className="flex gap-4">
        <div className="w-[50%] mt-10 border border-white/10 rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <Award className="h-4 lg:h-10" />
            <p className="text-xs">+12.5%</p>
          </div>
          <p className="text-lg lg:text-2xl font-bold">92%</p>
          <p className="text-xs">Placement Rate</p>
        </div>
        <div className="w-[50%] mt-10 border border-white/10 rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <Users className="h-4 lg:h-10"/>
            <p className="text-xs">+8.2%</p>
          </div>
          <p className="text-lg lg:text-2xl font-bold">1,248</p>
          <p className="text-xs">Active Students</p>
        </div>
      </div>
      <div className="w-full border border-white/10 px-5 pt-5 rounded-xl mt-10 flex flex-col gap-4 items-center">
        <div className="flex justify-between items-center w-full">
          <p className="font-semibold text-sm">Placement Trends</p>
          <ChartLine size={15} />
        </div>
        <ChartComp />
      </div>
      <div className="border p-5 border-white/10 rounded-xl items-center mt-8 flex justify-between bg-linear-to-r from-transparent to-white/20">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">Quick Actions</p>
          <p className="text-xs font-light">Manage Placements Efficiently</p>
        </div>
        <Zap />
      </div>
    </div>
  );
}
