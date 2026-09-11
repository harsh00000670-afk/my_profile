import { Project, DeveloperProfile } from '../types';

export const DEVELOPER_PROFILE: DeveloperProfile = {
  name: 'Harsh Vishwakarma',
  role: 'Frontend & Landing Page Developer | Core Backend Logics',
  education: 'Undergraduate Degree in Progress (Engineering Student)',
  philosophy:
    'Focusing on high-converting landing pages, pixel-perfect frontend interfaces, and core backend logic integration — continuously scaling toward full-stack architecture.',
  email: 'quicksolve.platinum@gmail.com',
  liveSitesCount: 3,
  availableForHire: true,
};

export const PROJECTS: Project[] = [
  {
    id: 'aura-athlete',
    indexNumber: '01',
    title: 'AURA Athletic Club',
    tagline: 'Ultra-premium private athletic residency & recovery sanctuary',
    description:
      'A multi-page private athletic residency and recovery sanctuary featuring editorial aesthetics, biometric diagnostics, hydro recovery sanctuaries, and world-class global flagships.',
    liveUrl: 'https://aura-athlete.vercel.app',
    displayUrl: 'aura-athlete.vercel.app',
    platform: 'Vercel',
    category: 'Athletic Residency & Recovery Sanctuary',
    status: 'Live & Operational',
    hasDeepDive: true,
    deepDiveSlug: 'athlete-review',
    techStack: [
      'React 19',
      'TypeScript',
      'Bun Lockfile',
      'Tailwind CSS',
      'Vercel Edge',
      'VipBookingModal',
      '100dvh Compliant',
    ],
    keyHighlights: [
      'Interactive VIP Consultation & Concierge reservation engine with direct WhatsApp dispatch hook',
      '7 architectural pages: Overview, Membership, Protocols, Spaces, Trainers, Flagships, Science',
      'Clinical recovery protocols: Hyperbaric Oxygen (HBOT), -110°C Sub-Zero Cryo & Infrared Sauna',
      'Zero layout shifts and rock-solid mobile Chrome/Safari stability using 100dvh dynamic viewport',
    ],
    metrics: [
      { label: 'Architecture', value: '7 Core Pages' },
      { label: 'VIP Engine', value: 'WhatsApp Hook' },
      { label: 'Lighthouse', value: '99 / 100 PASS' },
      { label: 'Mobile Tech', value: '100dvh Viewport' },
    ],
    overview:
      'AURA Athletic Club is designed as a world-class digital flagship for elite athletic conditioning, restorative hydrotherapy, and private residency wellness.',
  },
  {
    id: 'quicksolve-platinum',
    indexNumber: '02',
    title: 'QuickSolve Platinum',
    tagline: 'Professional suite of offline-ready finance & developer calculators',
    description:
      'A multi-utility computational hub providing GST calculations, Loan EMI planning, equation visualizers, and advanced programmer tools (Base, JSON, Epoch, Voice Input) with zero latency.',
    liveUrl: 'https://quicksolve-platinum.netlify.app',
    displayUrl: 'quicksolve-platinum.netlify.app',
    platform: 'Netlify',
    category: 'Financial & Developer Utility Suite',
    status: 'Live & Operational',
    techStack: [
      'TypeScript',
      'PWA Offline Engine',
      'Algorithmic Logic',
      'Voice API',
      'Netlify Edge',
    ],
    keyHighlights: [
      'Multi-tool engine: GST Calc, Loan / EMI, Scientific Compute, Equation Visualizer & Health Check',
      'Advanced Programmer Toolkit: Base Converter, JSON Formatter, Epoch Timestamps & Voice Input',
      '100% client-side zero-latency compute, secure global history tracking & dynamic app themes',
      'Progressive Web App (PWA) architecture with offline readiness and mobile app status bar support',
    ],
    metrics: [
      { label: 'Platform', value: 'Netlify Edge' },
      { label: 'Execution', value: 'Zero-Latency Compute' },
      { label: 'Tools Count', value: '12+ Utilities' },
    ],
    overview:
      'QuickSolve Platinum is an enterprise-grade utility suite built by Harsh and the QuickSolve team, engineered for speed, accuracy, and offline accessibility.',
  },
  {
    id: 'aura-cafes',
    indexNumber: '03',
    title: 'Aura Cafe',
    tagline: 'Artisanal roastery, liquid atelier & direct WhatsApp table reservation concierge',
    description:
      'A multi-page sensory digital sanctuary engineered with React 19, tactile EB Garamond typography, real-time operational status calculation, and direct WhatsApp table booking concierge (+91 9219143734).',
    liveUrl: 'https://auracafes.netlify.app',
    displayUrl: 'auracafes.netlify.app',
    platform: 'Netlify',
    category: 'Artisanal Roastery & Liquid Atelier',
    status: 'Live & Operational',
    techStack: [
      'React 19',
      'Tailwind CSS',
      'WhatsApp Concierge (+91 9219143734)',
      'useCafeStatus Hook',
      'EB Garamond & Grotesk',
      '100dvh Viewport',
      'Netlify Edge',
    ],
    keyHighlights: [
      'Direct WhatsApp table reservation pipeline (+91 9219143734) with guest count, schedule, seating area, and custom patron notes',
      'Real-time operational status engine (useCafeStatus) computing live opening hours with 30s heartbeat intervals',
      'Sensory catalog of 16 live creations across single-origin roasts, cold botanicals, and hand-laminated French pastries',
      'Mobile-first 100dvh responsive architecture eliminating address-bar jump, layout shift, and horizontal overflows',
    ],
    metrics: [
      { label: 'Concierge', value: 'WhatsApp Direct' },
      { label: 'Creations', value: '16 Live Items' },
      { label: 'Viewport', value: '100dvh Zero-Shift' },
    ],
    overview:
      'Aura Cafe is an unhurried digital sanctuary connecting specialty coffee connoisseurs with artisanal batch roasts, botanical extracts, and thoughtful culinary craft with zero-backend WhatsApp concierge booking.',
  },
];
