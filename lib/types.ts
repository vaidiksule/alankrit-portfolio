export interface Category {
  id: string;
  label: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  timecode: string;
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
  showreelUrl: string;
  posterImage: string;
}

export interface SocialLinks {
  instagram: string;
  email: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SiteContent {
  profile: Profile;
  tools: string[];
  styleTags: string[];
  categories: Category[];
  projects: Project[];
  hero: HeroContent;
  social: SocialLinks;
  stats: Stat[];
  nav: { label: string; href: string }[];
}
