"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/hooks";

interface VideoFrameProps {
  title: string;
  category: string;
  thumbnail: string;
  href: string;
  timecode?: string;
  className?: string;
  index?: number;
}

export function VideoFrame({
  title,
  category,
  thumbnail,
  href,
  timecode,
  className,
  index = 0,
}: VideoFrameProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group block", className)}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative">
        {/* Corner brackets */}
        <div className="pointer-events-none absolute -inset-3 z-10">
          <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-border transition-colors duration-300 group-hover:border-accent" />
          <span className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-border transition-colors duration-300 group-hover:border-accent" />
          <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-border transition-colors duration-300 group-hover:border-accent" />
          <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-border transition-colors duration-300 group-hover:border-accent" />
        </div>

        <div className="relative aspect-video overflow-hidden border border-border bg-surface-elevated transition-transform duration-500 group-hover:scale-[1.02]">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-90"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10">
            <motion.div
              className="flex h-14 w-14 items-center justify-center rounded-full border border-inverse/60 bg-accent/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.1 }}
            >
              <svg
                className="ml-1 h-5 w-5 text-inverse"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl uppercase tracking-wide text-foreground transition-colors group-hover:text-accent-secondary md:text-2xl">
            {title}
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
            {category}
          </p>
        </div>
        {timecode && (
          <span className="shrink-0 font-mono text-xs text-accent-tertiary">
            {timecode}
          </span>
        )}
      </div>
    </motion.a>
  );
}
