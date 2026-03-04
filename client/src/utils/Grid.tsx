import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

export function Grid() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="relative h-full w-full">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "absolute inset-0 h-full w-full",
            "skew-y-12",
            "mask-[radial-gradient(700px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
    </div>
  );
}