# Alankrit Sharma — Portfolio

A cinematic portfolio website for video editor **Alankrit Sharma**, built with Next.js, Framer Motion, GSAP, and Lenis.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

All site copy, links, and portfolio data live in **[`lib/content.ts`](lib/content.ts)**.

### Showcase reel (YouTube)

The hero embeds a YouTube video with autoplay (muted). Update the video ID in `content.ts`:

```ts
hero: {
  showreelVideoId: "SpAwdGohbhc",  // change this ID
  showreelUrl: "https://www.youtube.com/watch?v=SpAwdGohbhc",
  ...
}
```

The video must be **Public** or **Unlisted** and allow embedding.

### Portfolio sections (Google Drive)

Four work categories each link to a Google Drive **folder** on click. Edit `portfolioSections`:

```ts
{
  id: "ai-video",
  label: "AI Video",
  folderId: "1XbgGNYAPQq1Qnp5-pJ0SJmzhnvQNTaDW",  // folder ID from Drive URL
  previewFileId: "",   // optional: Drive file ID for thumbnail preview
  previewTitle: "AI Video — Featured Edit",
  thumbnailFallback: "/images/placeholder-1.svg",
}
```

**To add Drive preview thumbnails:** open a video in Drive, copy the file ID from the URL (`/file/d/FILE_ID/view`), and set `previewFileId`. Folders must be shared as **Anyone with the link**.

## Changing Colors

Edit hex values in **[`app/globals.css`](app/globals.css)** under the `:root` "Raw palette" block.

## Deploy to Vercel

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Deploy — no environment variables required

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- YouTube embed (showcase reel)
- Google Drive links (portfolio folders)
- Framer Motion, GSAP, Lenis

## Phase 2 (Later)

Admin dashboard for non-technical content updates.
