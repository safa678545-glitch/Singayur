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

export interface Testimonial {
  stars: number;
  quote: string;
  name: string;
  location: string;
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
