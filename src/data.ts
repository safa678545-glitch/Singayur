/* ══════════════════════════════════
   Singayur – Static Data Constants
   ══════════════════════════════════ */

import type {
  NavLink,
  Stat,
  TrustItem,
  Credential,
  Service,
  Condition,
  Step,
  Testimonial,
  ContactInfo,
  FooterColumn,
} from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Conditions', href: '#conditions' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
  { label: 'Book Now', href: '#book', isButton: true },
];

export const HERO_STATS: Stat[] = [
  { value: '500+', label: 'Patients Healed' },
  { value: '8+', label: 'Years Experience' },
];

export const TRUST_ITEMS: TrustItem[] = [
  { text: 'Personalised Consultations' },
  { text: 'Certified Ayurvedic Physician' },
  { text: 'Singapore Licensed' },
  { text: 'Panchakarma Therapies' },
  { text: 'Online & In-Clinic' },
];

export const CREDENTIALS: Credential[] = [
  { text: 'BAMS, Rajiv Gandhi University of Health Sciences' },
  { text: 'MD Ayurveda, NIA Jaipur' },
  { text: 'Registered with Singapore TCM Practitioners Board' },
  { text: 'Certified Panchakarma Specialist' },
];

export const SERVICES: Service[] = [
  {
    icon: '🌿',
    name: 'Initial Consultation',
    description: '60-minute in-depth assessment of your prakriti and health history to understand your unique constitution and imbalances.',
  },
  {
    icon: '💆',
    name: 'Panchakarma Therapy',
    description: 'Abhyanga, Shirodhara, Kati Vasti & classical cleansing therapies to detoxify the body and restore balance.',
  },
  {
    icon: '🍃',
    name: 'Herbal Wellness Plans',
    description: 'Customised herbal formulations aligned with your dosha for sustained healing and long-term wellness.',
  },
  {
    icon: '🧘',
    name: 'Yoga & Lifestyle',
    description: 'Therapeutic yoga sessions and personalised dinacharya (daily routine) guidance for lasting balance in body and mind.',
  },
  {
    icon: '💻',
    name: 'Online Consultations',
    description: 'Flexible virtual consultations from the comfort of your home — available to patients across Singapore and worldwide.',
  },
  {
    icon: '🌸',
    name: "Women's Wellness",
    description: 'Specialised care for hormonal balance, PCOS, menstrual health, menopause and skin & hair concerns.',
  },
];

export const CONDITIONS: Condition[] = [
  { label: 'Digestive Issues & IBS' },
  { label: 'Joint Pain & Arthritis' },
  { label: 'Hormonal Imbalance' },
  { label: 'PCOS & Menstrual Health' },
  { label: 'Psoriasis & Eczema' },
  { label: 'Chronic Fatigue & Sleep' },
  { label: 'Weight Management' },
  { label: 'Diabetes & Metabolic Health' },
  { label: 'Stress & Anxiety' },
  { label: 'Hair Loss' },
  { label: 'Immunity & Allergy' },
  { label: 'Thyroid Disorders' },
];

export const STEPS: Step[] = [
  {
    number: '01',
    title: 'Book a Consultation',
    description: 'Schedule your 60-min initial consultation online or in-clinic at your convenience.',
  },
  {
    number: '02',
    title: 'Prakriti Assessment',
    description: 'Dr. Ashida evaluates your constitution, health history and wellness goals in depth.',
  },
  {
    number: '03',
    title: 'Personalised Plan',
    description: 'Receive a tailored plan — herbs, diet, therapies and lifestyle guidance just for you.',
  },
  {
    number: '04',
    title: 'Heal & Thrive',
    description: 'Follow your plan with regular check-ins and ongoing support from Dr. Ashida.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    stars: 5,
    quote: "After years of struggling with IBS, Dr. Ashida's herbal plan transformed my gut health in just 6 weeks. Truly life-changing!",
    name: 'Aisha M.',
    location: 'Singapore',
  },
  {
    stars: 5,
    quote: "I came in with chronic joint pain. After my Panchakarma sessions I'm pain-free. The personalised approach is what makes Singayur so special.",
    name: 'Rajesh K.',
    location: 'Orchard, SG',
  },
  {
    stars: 5,
    quote: "Dr. Ashida treated my PCOS holistically — no harsh medicines. My hormones are balanced and I feel like myself again. Highly recommend!",
    name: 'Preethi S.',
    location: 'Clementi, SG',
  },
];

export const TICKER_ITEMS: string[] = [
  '• Digestive Issues',
  '• Joint Pain',
  '• Hormonal Health',
  '• Skin & Hair',
  '• Stress & Sleep',
  '• Weight Management',
  '• Gut Health',
  '• Immunity',
];

export const CONTACT_INFO: ContactInfo[] = [
  { icon: '📍', text: '123 Orchard Road, Singapore' },
  { icon: '📞', text: '+65 9123 4567' },
  { icon: '✉', text: 'hello@singayur.com' },
  { icon: '🕐', text: 'Mon–Sat: 9am – 6pm' },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'Initial Consultation', href: '#services' },
      { label: 'Panchakarma', href: '#services' },
      { label: 'Herbal Plans', href: '#services' },
      { label: 'Online Consult', href: '#services' },
      { label: "Women's Wellness", href: '#services' },
    ],
  },
  {
    title: 'Conditions',
    links: [
      { label: 'Digestive Health', href: '#conditions' },
      { label: 'Joint & Spine', href: '#conditions' },
      { label: 'Hormonal Health', href: '#conditions' },
      { label: 'Skin & Hair', href: '#conditions' },
      { label: 'Stress & Sleep', href: '#conditions' },
    ],
  },
];
