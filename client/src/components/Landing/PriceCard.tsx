import type { ReactNode } from "react";
import Bullet from "./Bullet";

type Props = {
  planName: string;
  forWho: string;
  price: string;
  bullets: string[];
  btnText: string;
  children?: ReactNode;
};

export default function PriceCard({
  planName,
  forWho,
  price,
  bullets,
  btnText,
  children,
}: Props) {
  return (
    <div className="border h-full w-full border-transparent lg:w-100 py-8 px-10 rounded-xl flex-col flex gap-8 backdrop-blur-md bg-black/10 dark:bg-white/10">
      {children}
      <p className="text-lg lg:text-xl">{planName}</p>
      <p className="text-sm lg:text-md">{forWho}</p>
      <div>
        <span className="text-2xl lg:text-4xl font-extrabold">{price}</span>
        <span className="text-sm lg:text-md text-black/60 dark:text-white/60">/year</span>
      </div>
      <div>
        {bullets.map((el, idx) => (
          <Bullet title={el} key={idx} />
        ))}
      </div>
      {planName == "Professional" ? (
        <button className="border bg-teal-400 text-black lg:text-md text-sm rounded-lg w-fit self-center px-10 lg:px-20 py-2">
          {btnText}
        </button>
      ) : (
        <button className="border bg-white/80 dark:bg-black/20 lg:text-md text-sm rounded-lg w-fit self-center px-10 lg:px-20 py-2">
          {btnText}
        </button>
      )}
    </div>
  );
}
