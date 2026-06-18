"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/lib/content";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export function HeroPortrait() {
  const { profile, hero } = siteContent;
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className="group relative mx-auto w-full lg:mx-0 lg:justify-self-end"
      initial={prefersReducedMotion ? false : { opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div
        className={cn(
          "absolute -inset-6 rounded-sm bg-accent/8 blur-2xl transition-opacity duration-700 md:-inset-10",
          "opacity-40 group-hover:opacity-70",
        )}
        aria-hidden
      />

      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:w-[min(44vw,540px)]">
        <div
          className={cn(
            "pointer-events-none absolute -inset-4 z-10 transition-all duration-500 md:-inset-5",
            !prefersReducedMotion && "group-hover:-inset-5 md:group-hover:-inset-6",
          )}
        >
          <span className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-accent/50 transition-colors duration-500 group-hover:border-accent md:h-10 md:w-10" />
          <span className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-accent/50 transition-colors duration-500 group-hover:border-accent md:h-10 md:w-10" />
          <span className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-accent/50 transition-colors duration-500 group-hover:border-accent md:h-10 md:w-10" />
          <span className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-accent/50 transition-colors duration-500 group-hover:border-accent md:h-10 md:w-10" />
        </div>

        <div className="hero-portrait-frame relative aspect-[3/4] overflow-hidden border border-border/50 bg-surface-elevated">
          <Image
            src={hero.profileImage}
            alt={profile.name}
            fill
            className={cn(
              "hero-portrait-image object-cover object-top",
              !prefersReducedMotion &&
                "transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:saturate-[1.08] group-hover:contrast-[1.04]",
            )}
            priority
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 448px, 540px"
          />

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-50"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 opacity-60 transition-opacity duration-700 group-hover:opacity-25"
            aria-hidden
          />

          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden
          >
            <div className="absolute inset-x-0 top-1/2 h-px bg-inverse/10" />
            <div className="absolute inset-y-0 left-1/2 w-px bg-inverse/10" />
          </div>

          <span className="pointer-events-none absolute bottom-4 right-4 font-mono text-[10px] tracking-widest text-inverse opacity-0 transition-all duration-500 group-hover:opacity-70">
            00:00:12:04
          </span>
        </div>
      </div>

      <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-muted/70 transition-colors duration-500 group-hover:text-muted lg:text-right">
        {profile.title}
      </p>
    </motion.div>
  );
}
