"use client";

import { useState } from "react";
import Image from "next/image";
import { youtubeEmbedUrl, youtubeWatchUrl } from "@/lib/youtube";
import { usePrefersReducedMotion } from "@/lib/hooks";

interface ShowreelEmbedProps {
  videoId: string;
  posterImage: string;
}

export function ShowreelEmbed({ videoId, posterImage }: ShowreelEmbedProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isPlaying, setIsPlaying] = useState(!prefersReducedMotion);
  const [isMuted, setIsMuted] = useState(true);

  const watchUrl = youtubeWatchUrl(videoId);

  const embedSrc = youtubeEmbedUrl(videoId, {
    autoplay: isPlaying,
    mute: isMuted,
    loop: true,
  });

  return (
    <div className="neon-border-glow relative aspect-video overflow-hidden border border-border-strong/50 bg-surface-elevated">
      {isPlaying ? (
        <iframe
          key={`${videoId}-${isMuted}`}
          src={embedSrc}
          title="Showcase reel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="group absolute inset-0 w-full"
          aria-label="Play showcase reel"
        >
          <Image
            src={posterImage}
            alt="Showcase reel poster"
            fill
            unoptimized
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-background/40 transition-colors group-hover:bg-background/25">
            <div className="neon-glow flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent/60 bg-accent backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <svg
                className="ml-1 h-8 w-8 text-inverse"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}

      {isPlaying && isMuted && (
        <button
          type="button"
          onClick={() => setIsMuted(false)}
          className="absolute right-4 top-4 z-20 border border-accent/50 bg-background/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-foreground backdrop-blur-sm transition-colors hover:border-accent hover:text-accent-secondary"
        >
          Unmute
        </button>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-background/90 to-transparent px-4 pb-4 pt-8">
        <div className="pointer-events-auto flex items-end justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-foreground">
            Showcase Reel
          </span>
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-accent-secondary transition-colors hover:text-accent-tertiary"
          >
            Watch on YouTube ↗
          </a>
        </div>
      </div>
    </div>
  );
}
