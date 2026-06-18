"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { HeroPortrait } from "@/components/sections/HeroPortrait";
import { usePrefersReducedMotion } from "@/lib/hooks";

export function Hero() {
  const { profile, hero } = siteContent;
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrubRef = useRef<HTMLDivElement>(null);
  const [scrubProgress, setScrubProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrubProgress(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nameParts = profile.name.toUpperCase().split(" ");

  return (
    <section className="relative min-h-screen px-6 pt-28 pb-16 md:px-10 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <div>
            <div className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent-tertiary">
              {profile.title} · {profile.location}
            </div>

            <h1 className="font-display text-display-xl uppercase text-foreground">
              {nameParts.map((part, i) => (
                <motion.span
                  key={part}
                  className="block"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                >
                  {part}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="mt-6 max-w-lg text-lg text-body"
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Professional, typographic editing for brands, creators, and athletes.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button href="#work">View Work</Button>
              <Button href="#contact" variant="secondary">
                Get in Touch
              </Button>
            </motion.div>
          </div>

          <HeroPortrait />
        </div>

        <motion.div
          className="relative mt-16 md:mt-24"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="pointer-events-none absolute -inset-4 z-10">
            <span className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-accent" />
            <span className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-accent" />
            <span className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-accent" />
            <span className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-accent" />
          </div>

          <a
            href={hero.showreelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-video overflow-hidden border border-border bg-surface-elevated"
          >
            <Image
              src={hero.posterImage}
              alt="Showreel"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 transition-colors group-hover:bg-foreground/30">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-inverse/50 bg-accent/90 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="ml-1 h-8 w-8 text-inverse"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <span className="absolute bottom-4 left-4 font-mono text-xs uppercase tracking-widest text-inverse">
              Play Showreel
            </span>
          </a>
        </motion.div>

        <div
          ref={scrubRef}
          className="timeline-scrub mt-12"
          style={{ "--scrub-progress": `${scrubProgress}%` } as React.CSSProperties}
        />
      </div>
    </section>
  );
}
