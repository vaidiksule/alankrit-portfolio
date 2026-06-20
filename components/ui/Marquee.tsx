import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "w-full overflow-hidden border-y border-border-strong/30 bg-surface/40 py-5",
        className,
      )}
    >
      <div className="flex w-max animate-marquee gap-10 md:gap-12">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 font-display text-display-md uppercase text-foreground/70 md:text-foreground/80"
          >
            {item}
            <span className="mx-8 text-accent-secondary/50 md:mx-12">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
