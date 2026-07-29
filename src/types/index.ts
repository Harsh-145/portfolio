export interface Profile {
  name: string;
  headline: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl?: string;
  availability: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string; // Optional icon name or class
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  cgpa?: string;
  graduationDate: string;
  details?: string;
}

export interface Experience {
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  images?: string[];
  videos?: string[];
  documentation?: string;
  date: string;
  category: string;
  status: 'in-progress' | 'completed' | 'planned';
  tags?: string[];
  featured?: boolean;
  caseStudy?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Skill {
  name: string;
  level?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[]; // Keeping simple array of strings based on provided data
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary?: string;
    background?: string;
    text?: string;
  };
  fontFamilies: {
    heading: string;
    body: string;
  };
  borderRadius: string;
}

export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  locale: string;
}
