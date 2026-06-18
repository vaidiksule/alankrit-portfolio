"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { usePrefersReducedMotion } from "@/lib/hooks";

export function Tools() {
  const { tools, styleTags } = siteContent;
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="Tools & Style"
          description="Editing with industry-standard software and a distinct visual approach."
        />

        <div className="mb-12 flex flex-wrap gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-border-strong bg-background px-8 py-6"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-tertiary">
                Software
              </span>
              <p className="mt-2 font-display text-2xl uppercase text-foreground md:text-3xl">
                {tool}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {styleTags.map((tag) => (
            <span
              key={tag}
              className="border border-border px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
