import type { ReactNode } from "react";

type CompProps = {
  children: ReactNode;
  title: string;
  tagline: string;
  description: string;
};

export default function Card({
  children,
  title,
  tagline,
  description,
}: CompProps) {
  return (
    <div className="lg:w-100 px-6 py-10 rounded-2xl border flex flex-col gap-5 bg-black/10 dark:bg-white/10 backdrop-blur-md border-white/10">
      <div className="w-fit text-teal-400 bg-white/80 dark:bg-black/40 p-3 rounded-xl border border-teal-400/20">
        {children}
      </div>
      <p className="lg:text-xl text-lg font-semibold">{title}</p>
      <p className="lg:text-sm text-xs font-medium">{tagline}</p>
      <p className="lg:text-sm text-xs font-light">{description}</p>
    </div>
  );
}
