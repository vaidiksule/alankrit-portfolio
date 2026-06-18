"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { usePrefersReducedMotion } from "@/lib/hooks";

export function Contact() {
  const { profile, social } = siteContent;
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="contact" className="bg-surface-elevated px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl text-center">
        <motion.p
          className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent-tertiary"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Let&apos;s Work Together
        </motion.p>

        <motion.h2
          className="font-display text-display-lg uppercase text-foreground"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Create
          <br />
          Something Bold?
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-md text-body"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {profile.availability}. Reach out for brand campaigns, creator content,
          or longform projects.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button href={`mailto:${social.email}`}>Email Me</Button>
          <Button href={social.instagram} variant="secondary">
            Instagram
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
