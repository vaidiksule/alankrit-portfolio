import type { SiteContent } from "./types";

export const siteContent: SiteContent = {
  profile: {
    name: "Alankrit Sharma",
    title: "Video Editor",
    location: "Bilaspur, Chhattisgarh",
    bio: "Professional video editor crafting cinematic stories for brands, creators, and athletes. Specializing in typographic edits, motion-driven cuts, and longform content that keeps viewers locked in from frame one to the final fade.",
    email: "hello@alankritsharma.com",
    instagram: "https://instagram.com/alankritsharma",
    availability: "Available for freelance & collaborations",
  },
  tools: ["Adobe Premiere Pro", "CapCut"],
  styleTags: ["Professional", "Typographic", "Motion", "Longform", "Social"],
  categories: [
    {
      id: "brand",
      label: "Brand Promotional",
      description: "High-impact edits for brands that need to stand out.",
    },
    {
      id: "clothing",
      label: "Clothing Content",
      description: "Fashion-forward pacing with editorial flair.",
    },
    {
      id: "ai-longform",
      label: "AI Longform",
      description: "Extended narratives with cinematic structure.",
    },
    {
      id: "influencer",
      label: "Influencer Work",
      description: "Scroll-stopping cuts built for social growth.",
    },
    {
      id: "gym",
      label: "Gym Edits",
      description: "High-energy montages with punchy rhythm.",
    },
  ],
  projects: [
    {
      id: "1",
      title: "Urban Threads Campaign",
      category: "Clothing Content",
      thumbnail: "/images/placeholder-1.svg",
      videoUrl: "#",
      timecode: "00:00:45:12",
    },
    {
      id: "2",
      title: "FitCore Brand Reel",
      category: "Brand Promotional",
      thumbnail: "/images/placeholder-2.svg",
      videoUrl: "#",
      timecode: "00:01:12:08",
    },
    {
      id: "3",
      title: "Iron Pulse Gym Series",
      category: "Gym Edits",
      thumbnail: "/images/placeholder-3.svg",
      videoUrl: "#",
      timecode: "00:00:32:18",
    },
    {
      id: "4",
      title: "Creator Spotlight — Maya R.",
      category: "Influencer Work",
      thumbnail: "/images/placeholder-4.svg",
      videoUrl: "#",
      timecode: "00:02:04:03",
    },
    {
      id: "5",
      title: "Neural Horizons Documentary",
      category: "AI Longform",
      thumbnail: "/images/placeholder-5.svg",
      videoUrl: "#",
      timecode: "00:08:15:22",
    },
    {
      id: "6",
      title: "Streetwear Drop Teaser",
      category: "Clothing Content",
      thumbnail: "/images/placeholder-6.svg",
      videoUrl: "#",
      timecode: "00:00:28:09",
    },
  ],
  hero: {
    showreelUrl: "#",
    posterImage: "/images/hero-poster.svg",
  },
  social: {
    instagram: "https://instagram.com/alankritsharma",
    email: "hello@alankritsharma.com",
  },
  stats: [
    { value: "50+", label: "Projects Delivered" },
    { value: "3+", label: "Years Editing" },
    { value: "5", label: "Content Categories" },
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Categories", href: "#categories" },
    { label: "Contact", href: "#contact" },
  ],
};
