import type { ReactNode } from "react";
import Bullet from "./Bullet";

type Props = {
  planName: string;
  forWho: string;
  price: string;
  bullets: string[];
  btnText: string;
  children?: ReactNode ;
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
    <div className="border border-transparent w-100  py-5 px-10 rounded-xl flex-col flex gap-8  bg-white/10">
      {children}
      <p className="text-xl">{planName}</p>
      <p className="text-md">{forWho}</p>
      <div>
        <span className="text-4xl font-extrabold">{price}</span>
        <span className="text-white/60">/year</span>
      </div>
      <div>
        {bullets.map((el, idx) => (
          <Bullet title={el} key={idx} />
        ))}
      </div>
      <button className="border bg-black/20 rounded-lg w-fit self-center px-20 py-2">
        {btnText}
      </button>
    </div>
  );
}
