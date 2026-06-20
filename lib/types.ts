export interface PortfolioSection {
  id: string;
  label: string;
  description: string;
  folderId: string;
  /** Google Drive file ID for single-video preview — optional */
  previewFileId: string;
  thumbnailFallback: string;
}

export interface Specialization {
  id: string;
  title: string;
  description: string;
  folderId: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  bio: string;
  email: string;
  instagram: string;
  availability: string;
}

export interface HeroContent {
  showreelVideoId: string;
  showreelUrl: string;
  posterImage: string;
  profileImage: string;
}

export interface SocialLinks {
  instagram: string;
  email: string;
  phone: string;
  whatsappMessage: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SiteContent {
  profile: Profile;
  tools: string[];
  extraTools: string[];
  styleTags: string[];
  marqueeItems: string[];
  specializations: Specialization[];
  portfolioSections: PortfolioSection[];
  hero: HeroContent;
  social: SocialLinks;
  stats: Stat[];
  nav: { label: string; href: string }[];
}
