type CardProps = {
    label: string;
    value: string;
    subtext: string;
}

export default function AnalyticsCard({label, value, subtext} : CardProps) {
  return (
    <div className="border py-4 px-10 w-70 space-y-5 rounded-lg ">
      <p>{label}</p>
      <p className="font-bold text-2xl">{value}</p>
      <p>{subtext}</p>
    </div>
  );
}
