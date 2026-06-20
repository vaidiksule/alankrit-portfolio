"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { driveFilePreviewUrl, driveThumbnailUrl } from "@/lib/drive";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/hooks";

interface VideoFrameProps {
  title: string;
  href: string;
  previewFileId: string;
  thumbnailFallback: string;
  className?: string;
  index?: number;
}

export function VideoFrame({
  title,
  href,
  previewFileId,
  thumbnailFallback,
  className,
  index = 0,
}: VideoFrameProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const thumbnail = previewFileId
    ? driveThumbnailUrl(previewFileId)
    : thumbnailFallback;

  return (
    <motion.div
      className={cn("group", className)}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative">
        <div className="pointer-events-none absolute -inset-3 z-10">
          <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-border transition-colors duration-300 group-hover:border-accent" />
          <span className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-border transition-colors duration-300 group-hover:border-accent" />
          <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-border transition-colors duration-300 group-hover:border-accent" />
          <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-border transition-colors duration-300 group-hover:border-accent" />
        </div>

        <div className="neon-border-glow relative aspect-video overflow-hidden border border-border-strong/40 bg-surface-elevated transition-transform duration-500 group-hover:scale-[1.01]">
          {previewFileId ? (
            <iframe
              src={driveFilePreviewUrl(previewFileId)}
              title={title}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <Image
              src={thumbnail}
              alt={title}
              fill
              unoptimized={thumbnail.startsWith("http")}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h3 className="font-display text-xl uppercase tracking-wide text-foreground md:text-2xl">
          {title}
        </h3>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-accent-secondary transition-colors hover:text-accent-tertiary"
        >
          Open in Drive →
        </a>
      </div>
    </motion.div>
  );
}
