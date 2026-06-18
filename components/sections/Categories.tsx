"use client";

import { useEffect, useRef, useState } from "react";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { cn } from "@/lib/utils";

export function Categories() {
  const { categories } = siteContent;
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 0) return;

      const { scrollLeft } = container;
      const atStart = scrollLeft <= 0;
      const atEnd = scrollLeft >= maxScroll - 1;
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      if ((scrollingDown && !atEnd) || (scrollingUp && !atStart)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section id="categories" className="overflow-hidden">
      <div className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Specializations"
            title="What I Edit"
            description="From brand films to gym montages — every cut is built with rhythm, intent, and typographic precision."
          />
        </div>
      </div>

      <Marquee items={categories.map((c) => c.label)} className="mb-16" />

      <div className="relative px-6 md:px-10">
        <p
          className={cn(
            "pointer-events-none mb-4 font-mono text-xs uppercase tracking-widest text-accent-tertiary transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-60",
          )}
        >
          Hover & scroll to explore →
        </p>

        <div
          ref={trackRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            "category-track flex gap-8 overflow-x-auto pb-24 md:gap-12 md:pb-32",
            isHovered && "category-track--active",
          )}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex w-[85vw] shrink-0 flex-col justify-between border border-border bg-background p-8 md:w-[420px] md:p-10"
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-tertiary">
                {category.id.replace("-", " ")}
              </span>
              <h3 className="mt-6 font-display text-display-md uppercase text-foreground">
                {category.label}
              </h3>
              <p className="mt-4 text-body">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
