"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

function ToolCard({
  tool,
  index,
  prefersReducedMotion,
}: {
  tool: string;
  index: number;
  prefersReducedMotion: boolean;
}) {
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border border-border-strong bg-background px-8 py-6"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-tertiary">
        Software
      </span>
      <p className="mt-2 font-display text-2xl uppercase text-foreground md:text-3xl">
        {tool}
      </p>
    </motion.div>
  );
}

export function Tools() {
  const { tools, extraTools, styleTags } = siteContent;
  const prefersReducedMotion = usePrefersReducedMotion();
  const [showExtra, setShowExtra] = useState(false);

  const primaryTools = tools.slice(0, -1);
  const expandTool = tools[tools.length - 1];

  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="Tools & Style"
          description="Editing with industry-standard software and a distinct visual approach."
        />

        <div className="mb-12 flex flex-wrap items-stretch gap-4">
          {primaryTools.map((tool, i) => (
            <ToolCard
              key={tool}
              tool={tool}
              index={i}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}

          <div className="flex items-stretch gap-2">
            <ToolCard
              tool={expandTool}
              index={primaryTools.length}
              prefersReducedMotion={prefersReducedMotion}
            />
            <button
              type="button"
              onClick={() => setShowExtra((open) => !open)}
              aria-expanded={showExtra}
              aria-label={showExtra ? "Hide additional tools" : "Show additional tools"}
              className={cn(
                "flex w-12 shrink-0 items-center justify-center border border-border-strong bg-background font-display text-3xl text-accent transition-all hover:border-accent hover:bg-surface-elevated hover:shadow-[0_0_20px_rgba(0,102,255,0.25)] md:w-14 md:text-4xl",
                showExtra && "border-accent bg-surface-elevated neon-glow",
              )}
            >
              <span
                className={cn(
                  "transition-transform duration-300",
                  showExtra && "rotate-45",
                )}
              >
                +
              </span>
            </button>
          </div>

          <AnimatePresence>
            {showExtra &&
              extraTools.map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.85, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: 12 }}
                  transition={{ duration: 0.35, delay: prefersReducedMotion ? 0 : i * 0.08 }}
                  className="border border-accent/50 bg-surface-elevated px-8 py-6 neon-border-glow"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-secondary">
                    Software
                  </span>
                  <p className="mt-2 font-display text-2xl uppercase text-foreground md:text-3xl">
                    {tool}
                  </p>
                </motion.div>
              ))}
          </AnimatePresence>
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
