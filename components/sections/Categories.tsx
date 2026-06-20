"use client";

import { motion } from "framer-motion";
import { siteContent, getSectionFolderUrl } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { usePrefersReducedMotion } from "@/lib/hooks";

export function Categories() {
  const { marqueeItems, specializations } = siteContent;
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="categories" className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-24 md:px-10 md:pt-32">
        <SectionHeading
          eyebrow="Specializations"
          title="What I Edit"
          description="From minimal UGC to longform narratives — every cut built with rhythm, intent, and typographic precision."
          className="mb-8 md:mb-10"
        />
      </div>

      <Marquee items={marqueeItems} className="mb-12 md:mb-16" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-24 md:grid-cols-2 md:gap-8 md:px-10 md:pb-32">
        {specializations.map((item, i) => (
          <motion.a
            key={item.id}
            href={getSectionFolderUrl(item)}
            target="_blank"
            rel="noopener noreferrer"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex min-h-[280px] flex-col justify-between border border-border bg-surface p-8 transition-all hover:border-accent hover:shadow-[0_0_24px_rgba(0,102,255,0.15)] md:min-h-[320px] md:p-10"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-tertiary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="my-6 flex-1">
              <h3 className="font-display text-2xl uppercase leading-tight text-foreground transition-colors group-hover:text-accent-secondary md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-body">
                {item.description}
              </p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent-tertiary transition-colors group-hover:text-accent-secondary">
              Open folder in Drive →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
