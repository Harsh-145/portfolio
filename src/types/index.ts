export interface Profile {
  name: string;
  headline: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  availability: string;
}
export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}
export interface Education {
  institution: string;
  degree: string;
  field?: string;
  cgpa?: string;
  cgpaContext?: string;
  currentSemester?: string;
  graduationDate: string;
  details?: string;
}
export interface Experience {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}
export interface EvidenceLink {
  label: string;
  url: string;
}
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  liveDemo?: string;
  category: string;
  role: string;
  label: string;
  featured: boolean;
  visual:
    "pipeline" | "vision" | "hostel" | "community" | "social" | "php" | "music";
  highlights: string[];
  evaluation: string;
  limitations: string;
  references: EvidenceLink[];
  metric?: { value: string; label: string; source: string };
}
export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}
export interface SkillCategory {
  category: string;
  skills: string[];
}
export interface NavigationItem {
  label: string;
  href: string;
}
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
}
export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  locale: string;
}
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary?: string;
    background?: string;
    text?: string;
  };
  fontFamilies: { heading: string; body: string };
  borderRadius: string;
}
