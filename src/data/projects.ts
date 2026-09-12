import { Project, DeveloperProfile } from '../types';

export const DEVELOPER_PROFILE: DeveloperProfile = {
  name: 'Harsh Vishwakarma',
  // FIX #27: Removed "Core Backend Logics" — awkward phrasing.
  role: 'Frontend Developer • Software Engineering Student',
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
    tagline: 'Premium athletic residency & recovery sanctuary website',
    // FIX #7: Removed "biometric diagnostics" — no actual biometric system exists.
    description:
      'A multi-page athletic residency and recovery sanctuary featuring editorial aesthetics, hydro recovery sanctuaries, recovery protocols, and global flagship locations.',
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
      'Vercel Deployment',
      'Interactive Booking Flow',
      'Dynamic Viewport (100dvh)',
    ],
    keyHighlights: [
      // FIX #5: "VIP Concierge reservation engine" → "Interactive VIP booking flow"
      'Interactive VIP booking flow with structured WhatsApp dispatch for consultation requests',
      '7-page client-side SPA: Overview, Membership, Protocols, Spaces, Trainers, Flagships, Science',
      'Recovery protocols showcased: Hyperbaric Oxygen (HBOT), Sub-Zero Cryotherapy & Infrared Sauna',
      // FIX #14: "100dvh compliant" toned down to accurate description
      'Mobile viewport handling using dynamic viewport units (100dvh) — no address-bar jump or layout shift',
    ],
    metrics: [
      { label: 'Architecture', value: '7-Page SPA' },
      // FIX #5 & #9: "VIP Engine / WhatsApp Hook" → simpler honest labels
      { label: 'Booking', value: 'WhatsApp Flow' },
      // FIX #13: "Core Web Vitals 99/100" → clearer phrasing
      { label: 'Lighthouse', value: 'Performance 99' },
      { label: 'Mobile', value: 'Dynamic Viewport' },
    ],
    overview:
      'AURA Athletic Club is a multi-page editorial website for an elite athletic and recovery brand, built to showcase membership tiers, recovery protocols, and global flagship locations.',
  },
  {
    id: 'quicksolve-platinum',
    indexNumber: '02',
    title: 'QuickSolve Platinum',
    tagline: 'Offline-ready finance & developer calculation suite',
    // FIX #18: Removed "zero latency" — not a meaningful real-world claim.
    description:
      'A multi-utility calculation hub providing GST calculations, Loan EMI planning, equation visualizers, and advanced programmer tools (Base, JSON, Epoch, Voice Input) — all running client-side with no server round-trip.',
    liveUrl: 'https://quicksolve-platinum.netlify.app',
    displayUrl: 'quicksolve-platinum.netlify.app',
    platform: 'Netlify',
    category: 'Financial & Developer Utility Suite',
    status: 'Live & Operational',
    techStack: [
      'TypeScript',
      'PWA Offline Support',
      'Client-Side Logic',
      'Voice API',
      'Netlify Deployment',
    ],
    keyHighlights: [
      'Multi-tool suite: GST Calc, Loan / EMI, Scientific Compute, Equation Visualizer & Health Check',
      'Advanced Programmer Toolkit: Base Converter, JSON Formatter, Epoch Timestamps & Voice Input',
      // FIX #18: "zero-latency" → accurate description
      '100% client-side compute with no server round-trip — history tracking & dynamic app themes',
      // FIX #15: "Ultra-performance PWA" → honest label
      'Offline-ready PWA with mobile app status bar and native install prompt support',
    ],
    metrics: [
      { label: 'Platform', value: 'Netlify' },
      // FIX #18: "Zero-Latency Compute" → "Client-Side Compute"
      { label: 'Execution', value: 'Client-Side Compute' },
      // FIX #17: "Precision calculation" → count only
      { label: 'Tools', value: '96+ Utilities' },
    ],
    // FIX #24: Removed "enterprise-grade", removed "Harsh and the QuickSolve team"
    overview:
      'QuickSolve Platinum is an offline-ready utility suite engineered for fast, accurate, client-side calculations — covering finance, health, developer tools, and advanced math.',
  },
  {
    id: 'aura-cafes',
    indexNumber: '03',
    title: 'Aura Cafe',
    tagline: 'Artisanal roastery & direct WhatsApp table booking',
    // FIX #11: "real-time operational status" → accurate description
    description:
      'A multi-section sensory landing page built with React 19, tactile EB Garamond typography, automatic open/closed status based on configured business hours, and a structured WhatsApp table booking flow.',
    liveUrl: 'https://auracafes.netlify.app',
    displayUrl: 'auracafes.netlify.app',
    platform: 'Netlify',
    category: 'Artisanal Roastery & Liquid Atelier',
    status: 'Live & Operational',
    techStack: [
      'React 19',
      'Tailwind CSS',
      'WhatsApp Booking (+91 9219143734)',
      'useCafeStatus Hook',
      'EB Garamond & Grotesk',
      'Dynamic Viewport (100dvh)',
      'Netlify Deployment',
    ],
    keyHighlights: [
      // FIX #10: "serverless WhatsApp reservation pipeline" → accurate description
      'Structured client-side WhatsApp booking flow — collects guest count, schedule, seating area, and custom notes',
      // FIX #11: "Real-time operational status" → honest description
      'Automatic open/closed status based on configured business hours, recalculated every 30 seconds (useCafeStatus hook)',
      'Sensory catalog of 16 artisanal creations: single-origin roasts, cold botanicals, and hand-laminated French pastries',
      'Mobile-first layout using dynamic viewport units (100dvh) — no address-bar jump or horizontal overflow',
    ],
    metrics: [
      // FIX #10: Keep WhatsApp but remove "pipeline"
      { label: 'Booking', value: 'WhatsApp Flow' },
      { label: 'Catalog', value: '16 Live Items' },
      { label: 'Lighthouse', value: 'Performance 99' },
    ],
    overview:
      'Aura Cafe is a sensory landing page for a specialty coffee brand, featuring a WhatsApp-based table booking form, an artisanal menu catalog, and automatic open/closed status based on business hours.',
  },
];