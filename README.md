# Alankrit Sharma — Portfolio

A cinematic portfolio website for video editor **Alankrit Sharma**, built with Next.js, Framer Motion, GSAP, and Lenis.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

All site copy, links, and project data live in one file:

**[`lib/content.ts`](lib/content.ts)**

Update profile info, projects, categories, social links, and showreel URL there. No component changes needed.

## Changing Colors

All colors are defined as CSS variables in **[`app/globals.css`](app/globals.css)**.

Edit the hex values in the `:root` block under "Raw palette":

```css
--color-deep-burnt: #8B4411;
--color-terracotta: #AE6E4E;
--color-sandy-tan: #CC9767;
--color-cream: #F5F5DD;
--color-beige: #C7AD7F;
--color-taupe: #A57A5A;
```

Semantic tokens (`--background`, `--accent`, etc.) reference these automatically.

## Deploy to Vercel

1. Push to GitHub: `https://github.com/vaidiksule/alankrit-portfolio`
2. Import the repo in [Vercel](https://vercel.com)
3. Deploy — no environment variables required

## Tech Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** with custom CSS variable theme
- **Framer Motion** — section reveals, hero animations
- **GSAP + ScrollTrigger** — pinned category scroll (desktop)
- **Lenis** — smooth scrolling

## Project Structure

```
app/              → Pages, layout, global styles
components/
  sections/       → Hero, About, Categories, Work, Tools, Contact
  ui/             → VideoFrame, Button, Marquee, SectionHeading
  layout/         → Header, Footer
lib/
  content.ts      → All editable site content
  types.ts        → TypeScript interfaces
```

## Phase 2 (Later)

Admin dashboard for non-technical content updates — projects, bio, links, and hero video.
