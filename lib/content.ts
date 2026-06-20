import { driveFolderUrl } from "./drive";
import { youtubeThumbnailUrl, youtubeWatchUrl } from "./youtube";
import type { SiteContent } from "./types";

const SHOWREEL_VIDEO_ID = "SpAwdGohbhc";

export const siteContent: SiteContent = {
  profile: {
    name: "Alankrit Sharma",
    title: "Video Editor",
    location: "Bilaspur, Chhattisgarh",
    bio: "Professional video editor crafting cinematic stories for brands, creators, and athletes. Specializing in typographic edits, motion-driven cuts, and longform content that keeps viewers locked in from frame one to the final fade.",
    email: "alankrit2211@gmail.com",
    instagram: "https://www.instagram.com/alankritt_sharma?utm_source=qr",
    availability: "Available for freelance & collaborations",
  },
  tools: ["Adobe Premiere Pro", "CapCut", "Adobe Photoshop", "Seedance"],
  extraTools: ["Kling AI", "Flow", "ElevenLabs"],
  styleTags: ["Professional", "Typographic", "Motion", "Longform", "Social"],
  marqueeItems: [
    "Minimal UGC",
    "Influencer Content",
    "Brand Promotion",
    "Commercials",
    "Motion Graphics",
    "Long Form Narrative Editing",
  ],
  specializations: [
    {
      id: "ugc-influencer",
      title: "Minimal UGC & Influencer Content",
      description:
        "Clean, engaging, human-centric edits designed to feel authentic and maximize viewer retention.",
      folderId: "1LeykZ7sxj5EMbPcypGu7Awhh9crRv0Zq",
    },
    {
      id: "brand-commercials",
      title: "Brand Promotions & Commercials",
      description:
        "High-converting, polished video assets built to elevate brand presence and drive action.",
      folderId: "1_vRBluvPEBrRk4sf_o2Hm-dgQxoHrqeZ",
    },
    {
      id: "ai-motion",
      title: "AI-Content",
      description:
        "Seamlessly blending advanced AI video tools with dynamic typography and smooth motion design.",
      folderId: "1XbgGNYAPQq1Qnp5-pJ0SJmzhnvQNTaDW",
    },
    {
      id: "longform",
      title: "Longform Narrative Editing",
      description:
        "Structuring deep-dive content, podcasts, or documentaries with seamless pacing and perfect rhythm.",
      folderId: "1unt1YchGe0lTCBXXnqQSCJr4BHhIQIJG",
    },
  ],
  portfolioSections: [
    {
      id: "ai-motion",
      label: "AI Content",
      description:
        "Seamlessly blending advanced AI video tools with dynamic typography and smooth motion design.",
      folderId: "1XbgGNYAPQq1Qnp5-pJ0SJmzhnvQNTaDW",
      previewFileId: "174LGNYfDffd3A8TJH36VJo03zf7Kbt1P",
      thumbnailFallback: "/images/placeholder-1.svg",
    },
    {
      id: "brand-commercials",
      label: "Brand Promotions and Commercials",
      description:
        "High-converting, polished video assets built to elevate brand presence and drive action.",
      folderId: "1_vRBluvPEBrRk4sf_o2Hm-dgQxoHrqeZ",
      previewFileId: "1CrKvoUx-gJKlIXCAbsvWswJOp9leWjPI",
      thumbnailFallback: "/images/placeholder-2.svg",
    },
    {
      id: "influencer",
      label: "Influencer Content",
      description:
        "Clean, engaging, human-centric edits designed to feel authentic and maximize viewer retention.",
      folderId: "1LeykZ7sxj5EMbPcypGu7Awhh9crRv0Zq",
      previewFileId: "1xIxbFQEN7xgJXR6Daod87QUTF9ua10pj",
      thumbnailFallback: "/images/placeholder-3.svg",
    },
    {
      id: "longform",
      label: "Longform Narrative Editing",
      description:
        "Structuring deep-dive content, podcasts, or documentaries with seamless pacing and perfect rhythm.",
      folderId: "1unt1YchGe0lTCBXXnqQSCJr4BHhIQIJG",
      previewFileId: "1oU-1vM2bSQvbobu56l2nR2G3xlqzNUx7",
      thumbnailFallback: "/images/placeholder-4.svg",
    },
  ],
  hero: {
    showreelVideoId: SHOWREEL_VIDEO_ID,
    showreelUrl: youtubeWatchUrl(SHOWREEL_VIDEO_ID),
    posterImage: youtubeThumbnailUrl(SHOWREEL_VIDEO_ID),
    profileImage: "/images/alankrit.jpeg",
  },
  social: {
    instagram: "https://www.instagram.com/alankritt_sharma?utm_source=qr",
    email: "alankrit2211@gmail.com",
    phone: "+91 9171582622",
    whatsappMessage: "Hey, I have an inquiry about collaboration!",
  },
  stats: [
    { value: "100+", label: "Projects Delivered" },
    { value: "2+ Years", label: "Experience" },
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Categories", href: "#categories" },
    { label: "Contact", href: "#contact" },
  ],
};

export function getSectionFolderUrl(
  section: { folderId: string },
): string {
  return driveFolderUrl(section.folderId);
}

export function getWhatsAppUrl(phone: string, message?: string): string {
  const base = `https://wa.me/${phone.replace(/\D/g, "")}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
