import { Check } from "lucide-react";

type Props = {title: string};

export default function Bullet({title}: Props) {
  return (
    <div className="flex items-center gap-2">
      <Check className="h-4 lg:h-10" /> {title}
    </div>
  );
}
