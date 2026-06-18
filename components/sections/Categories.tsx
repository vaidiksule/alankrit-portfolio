"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { usePrefersReducedMotion } from "@/lib/hooks";

export function Categories() {
  const { categories } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const scrollWidth = track.scrollWidth - window.innerWidth + 200;

      const tween = gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="categories" ref={sectionRef} className="overflow-hidden">
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

      <div
        ref={trackRef}
        className="flex gap-8 px-6 pb-24 md:gap-12 md:px-10 md:pb-32"
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
    </section>
  );
}
