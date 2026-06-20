export function youtubeWatchUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function youtubeThumbnailUrl(
  videoId: string,
  quality: "maxres" | "hq" = "maxres",
): string {
  const suffix = quality === "maxres" ? "maxresdefault" : "hqdefault";
  return `https://img.youtube.com/vi/${videoId}/${suffix}.jpg`;
}

interface EmbedOptions {
  autoplay?: boolean;
  mute?: boolean;
  loop?: boolean;
}

export function youtubeEmbedUrl(
  videoId: string,
  { autoplay = false, mute = false, loop = false }: EmbedOptions = {},
): string {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });

  if (autoplay) params.set("autoplay", "1");
  if (mute) params.set("mute", "1");
  if (loop) {
    params.set("loop", "1");
    params.set("playlist", videoId);
  }

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}
