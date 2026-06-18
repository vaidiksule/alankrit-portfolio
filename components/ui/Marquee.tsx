import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={cn("overflow-hidden border-y border-border py-6", className)}>
      <div className="flex w-max animate-marquee gap-12">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 font-display text-display-md uppercase text-accent-secondary/40"
          >
            {item}
            <span className="mx-12 text-accent-tertiary">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
