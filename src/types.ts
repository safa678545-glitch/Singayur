/* ══════════════════════════════════
   Singayur – TypeScript Interfaces
   ══════════════════════════════════ */

export interface NavLink {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TrustItem {
  text: string;
}

export interface Credential {
  text: string;
}

export interface Service {
  icon: string;
  name: string;
  description: string;
}

export interface Condition {
  label: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: string;
  text: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

/** Supabase-aligned interfaces */

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  icon: string;
  category: string;
  read_time: string;
  author: string;
  created_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  stars: number;
  approved: boolean;
  created_at: string;
}
