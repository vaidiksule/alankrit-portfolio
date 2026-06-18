"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { usePrefersReducedMotion } from "@/lib/hooks";

export function About() {
  const { profile, stats } = siteContent;
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="about" className="bg-surface-elevated px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Cutting Stories That Stick"
          description={profile.bio}
        />

        <p className="mb-12 font-mono text-sm text-accent-secondary">
          {profile.availability} · {profile.location}
        </p>

        <div className="grid grid-cols-1 gap-8 border-t border-border pt-12 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-display text-display-md text-accent">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
