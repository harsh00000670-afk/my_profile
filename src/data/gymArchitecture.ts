export interface GymFileNode {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: GymFileNode[];
  description?: string;
  codeSnippet?: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  tierBadge: string;
  monthlyDues: string;
  initiation: string;
  tagline: string;
  features: string[];
  perks: string[];
  isPopular?: boolean;
}

export interface RecoveryProtocol {
  id: string;
  name: string;
  category: 'Cellular' | 'Thermal' | 'Neuromuscular' | 'Metabolic';
  duration: string;
  tempOrMetric: string;
  description: string;
  clinicalBenefit: string;
  scientificMechanism: string;
}

export interface EliteTrainer {
  id: string;
  name: string;
  role: string;
  credentials: string[];
  specialty: string;
  bio: string;
  availability: string;
}

export interface FlagshipSanctuary {
  id: string;
  city: string;
  neighborhood: string;
  address: string;
  sqft: string;
  features: string[];
  hours: string;
}

export interface TrainingSpace {
  id: string;
  name: string;
  zone: string;
  equipment: string[];
  description: string;
}

// Exact file tree matching user screenshot: AURA-ATHLETIC-CLUB (.git excluded)
export const GYM_FILE_TREE: GymFileNode = {
  name: 'AURA-ATHLETIC-CLUB',
  path: '/',
  type: 'folder',
  description: 'Production root repository for AURA Athletic Club — high-performance luxury wellness & athletic sanctuary.',
  children: [
    {
      name: 'assets',
      path: '/assets',
      type: 'folder',
      description: 'Static images, brand vector icons, typography fonts, and environment configs.',
      children: [
        {
          name: '.aistudio',
          path: '/assets/.aistudio',
          type: 'folder',
          description: 'AI Studio workspace cache and development configuration directory.',
          children: [
            {
              name: '.gitignore',
              path: '/assets/.aistudio/.gitignore',
              type: 'file',
              description: 'Excludes workspace cache and ephemeral compiler metadata.',
              codeSnippet: `# AI Studio ephemeral artifacts
.cache/
*.tmp`,
            },
          ],
        },
      ],
    },
    {
      name: 'src',
      path: '/src',
      type: 'folder',
      description: 'Source code container written in TypeScript, React 19, and Tailwind CSS.',
      children: [
        {
          name: 'components',
          path: '/src/components',
          type: 'folder',
          description: 'Reusable UI elements, sticky navigation, footer, and VIP reservation modal.',
          children: [
            {
              name: 'Footer.tsx',
              path: '/src/components/Footer.tsx',
              type: 'file',
              description: 'Comprehensive footer with global flagship locations, legal compliance, newsletter, and operating hours.',
              codeSnippet: `import React from 'react';
import { ShieldCheck, MapPin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h4 className="font-display font-black text-white text-lg tracking-wider">AURA ATHLETIC CLUB</h4>
          <p className="text-xs text-neutral-500 mt-2 font-mono">
            High-performance sanctuary uniting Olympic biomechanics and cellular longevity.
          </p>
        </div>
        {/* Global Flagships */}
        <div>
          <h5 className="font-mono text-xs uppercase text-white font-bold mb-3">Sanctuaries</h5>
          <ul className="space-y-1.5 text-xs font-mono">
            <li>SoHo · New York</li>
            <li>Mayfair · London</li>
            <li>Ginza · Tokyo</li>
            <li>DIFC · Dubai</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};`,
            },
            {
              name: 'Navbar.tsx',
              path: '/src/components/Navbar.tsx',
              type: 'file',
              description: 'Sticky liquid-glass navigation header with page tabs, live club status, and VIP consultation trigger.',
              codeSnippet: `import React, { useState } from 'react';
import { Menu, X, Shield, Sparkles } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = ['Overview', 'Membership', 'Protocols', 'Spaces', 'Trainers', 'Flagships', 'Science'];

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg font-black tracking-widest text-white">AURA</span>
          <span className="font-mono text-[10px] text-amber-400 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30">
            ATHLETIC CLUB
          </span>
        </div>
        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => onNavigate(link.toLowerCase())}
              className={\`px-3 py-1.5 rounded transition-colors \${
                activePage === link.toLowerCase() ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'
              }\`}
            >
              {link}
            </button>
          ))}
        </nav>
        <button
          onClick={onOpenBooking}
          className="bg-white text-neutral-950 font-mono text-xs font-bold px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors shadow-sm"
        >
          VIP ACCESS
        </button>
      </div>
    </header>
  );
};`,
            },
            {
              name: 'VipBookingModal.tsx',
              path: '/src/components/VipBookingModal.tsx',
              type: 'file',
              description: 'Private consultation & biomarker screening booking modal with form validation, location selection, and instant dispatch.',
              codeSnippet: `import React, { useState } from 'react';
import { X, CheckCircle2, ShieldAlert, Sparkles, Send } from 'lucide-react';

interface VipBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VipBookingModal: React.FC<VipBookingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [tier, setTier] = useState('Black Tier Athlete');
  const [flagship, setFlagship] = useState('SoHo New York');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Dispatches booking request to concierge
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-2xl bg-neutral-900 border border-white/10 p-6 text-white">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <h3 className="font-display text-lg font-bold">PRIVATE VIP CONSULTATION</h3>
          <button onClick={onClose}><X className="h-5 w-5 text-neutral-400" /></button>
        </div>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4 font-mono text-xs">
          <div>
            <label className="block text-neutral-400 mb-1">PATRON NAME</label>
            <input value={name} onChange={e => setName(e.target.value)} required className="w-full bg-neutral-800 border border-white/10 rounded px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-neutral-400 mb-1">PHONE NUMBER</label>
            <input value={phone} onChange={e => setPhone(e.target.value)} required className="w-full bg-neutral-800 border border-white/10 rounded px-3 py-2 text-white" />
          </div>
          <button type="submit" className="w-full bg-white text-black py-3 rounded-lg font-bold">
            CONFIRM VIP CONSULTATION
          </button>
        </form>
      </div>
    </div>
  );
};`,
            },
          ],
        },
        {
          name: 'data',
          path: '/src/data',
          type: 'folder',
          description: 'Single source of truth for athletic club memberships, recovery protocols, coach profiles, and flagship sanctums.',
          children: [
            {
              name: 'gymData.ts',
              path: '/src/data/gymData.ts',
              type: 'file',
              description: 'Exported constants including 3 Membership tiers, 6 Recovery protocols, 4 Flagship locations, and 4 Master coaches.',
              codeSnippet: `export const MEMBERSHIP_TIERS = [
  { id: 'founding', name: 'Founding Member', dues: '$1,250/mo', initiation: '$2,500' },
  { id: 'black', name: 'Black Tier Athlete', dues: '$2,400/mo', initiation: '$5,000' },
  { id: 'syndicate', name: 'Private Syndicate', dues: '$4,800/mo', initiation: '$10,000' }
];

export const RECOVERY_PROTOCOLS = [
  { id: 'hbot', name: 'Hyperbaric Oxygen Chamber', duration: '60 min', metric: '2.0 ATA' },
  { id: 'cryo', name: 'Sub-Zero Whole Body Cryotherapy', duration: '3.5 min', metric: '-110°C' },
  { id: 'infrared', name: 'Medical-Grade Infrared Sauna', duration: '45 min', metric: '75°C' }
];`,
            },
          ],
        },
        {
          name: 'pages',
          path: '/src/pages',
          type: 'folder',
          description: 'The 7 core architectural pages constituting the AURA Athletic Club multi-page web application.',
          children: [
            {
              name: 'FlagshipsPage.tsx',
              path: '/src/pages/FlagshipsPage.tsx',
              type: 'file',
              description: 'Showcases the global network of private athletic sanctuaries in SoHo New York, Mayfair London, Ginza Tokyo, and DIFC Dubai.',
              codeSnippet: `import React from 'react';
import { MapPin, Clock, Shield } from 'lucide-react';
import { FLAGSHIP_SANCTUARIES } from '../data/gymData';

export const FlagshipsPage: React.FC = () => {
  return (
    <div className="py-16 space-y-8">
      <h2 className="text-3xl font-display font-black text-white">GLOBAL SANCTUARIES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FLAGSHIP_SANCTUARIES.map(s => (
          <div key={s.id} className="p-6 rounded-2xl bg-neutral-900 border border-white/10">
            <h3 className="text-xl font-bold text-white">{s.city} · {s.neighborhood}</h3>
            <p className="text-sm text-neutral-400 mt-2 font-mono">{s.address}</p>
            <div className="mt-4 text-xs font-mono text-amber-400">{s.sqft} · High-Performance Facility</div>
          </div>
        ))}
      </div>
    </div>
  );
};`,
            },
            {
              name: 'MembershipPage.tsx',
              path: '/src/pages/MembershipPage.tsx',
              type: 'file',
              description: 'Presents the 3 luxury membership tiers: Founding Member, Black Tier Athlete, and Private Syndicate with initiation dues and privileges.',
              codeSnippet: `import React from 'react';
import { Check, ShieldCheck, Sparkles } from 'lucide-react';
import { MEMBERSHIP_TIERS } from '../data/gymData';

export const MembershipPage: React.FC = () => {
  return (
    <div className="py-16 space-y-10">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-display font-black text-white">EXCLUSIVE ADMISSIONS</h2>
        <p className="text-neutral-400 mt-3 text-sm font-mono">Capped membership rosters ensuring unfettered training availability.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MEMBERSHIP_TIERS.map(tier => (
          <div key={tier.id} className="p-6 rounded-2xl bg-neutral-900 border border-white/10">
            <span className="font-mono text-xs text-amber-400 font-bold">{tier.tierBadge}</span>
            <h3 className="text-2xl font-bold text-white mt-1">{tier.name}</h3>
            <div className="text-3xl font-black text-white mt-4">{tier.monthlyDues}</div>
          </div>
        ))}
      </div>
    </div>
  );
};`,
            },
            {
              name: 'OverviewPage.tsx',
              path: '/src/pages/OverviewPage.tsx',
              type: 'file',
              description: 'Primary landing hero and brand manifest fusing Olympic-tier biomechanics, cellular longevity, and tactile architecture.',
              codeSnippet: `import React from 'react';
import { Zap, Activity, Heart, Shield } from 'lucide-react';

export const OverviewPage: React.FC = () => {
  return (
    <div className="space-y-16">
      <section className="relative py-20 text-center">
        <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">THE PINNACLE OF HUMAN PERFORMANCE</span>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white mt-4">WHERE BIOMECHANICS MEETS CELLULAR LONGEVITY</h1>
      </section>
    </div>
  );
};`,
            },
            {
              name: 'ProtocolsPage.tsx',
              path: '/src/pages/ProtocolsPage.tsx',
              type: 'file',
              description: 'Clinical-grade recovery protocols: Hyperbaric oxygen, contrast cryotherapy, infrared sauna, and red light photobiomodulation.',
              codeSnippet: `import React from 'react';
import { RECOVERY_PROTOCOLS } from '../data/gymData';

export const ProtocolsPage: React.FC = () => {
  return (
    <div className="py-16 space-y-8">
      <h2 className="text-3xl font-display font-black text-white">CLINICAL RECOVERY PROTOCOLS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {RECOVERY_PROTOCOLS.map(p => (
          <div key={p.id} className="p-6 rounded-2xl bg-neutral-900 border border-white/10">
            <span className="text-xs font-mono text-emerald-400">{p.category}</span>
            <h3 className="text-xl font-bold text-white mt-1">{p.name}</h3>
            <div className="text-2xl font-mono text-amber-400 mt-3">{p.tempOrMetric}</div>
          </div>
        ))}
      </div>
    </div>
  );
};`,
            },
            {
              name: 'SciencePage.tsx',
              path: '/src/pages/SciencePage.tsx',
              type: 'file',
              description: 'Explores peer-reviewed athletic science: continuous metabolic monitoring, HRV autonomic balance, and cellular ATP synthesis.',
              codeSnippet: `import React from 'react';
import { Activity, Dna, Brain, LineChart } from 'lucide-react';

export const SciencePage: React.FC = () => {
  return (
    <div className="py-16 space-y-8">
      <h2 className="text-3xl font-display font-black text-white">EVIDENCE-BASED METHODOLOGY</h2>
      <p className="text-neutral-400 font-mono text-sm max-w-3xl">
        Every training parameter is measured through VO2 Max lactate thresholds, EMG neuromuscular activation, and continuous HRV telemetry.
      </p>
    </div>
  );
};`,
            },
            {
              name: 'SpacesPage.tsx',
              path: '/src/pages/SpacesPage.tsx',
              type: 'file',
              description: 'Detailed showcase of architectural zones: Eleiko Olympic platforms, private hydrothermal suites, and soundproof recovery pods.',
              codeSnippet: `import React from 'react';
import { TRAINING_SPACES } from '../data/gymData';

export const SpacesPage: React.FC = () => {
  return (
    <div className="py-16 space-y-8">
      <h2 className="text-3xl font-display font-black text-white">ARCHITECTURAL TRAINING SPACES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TRAINING_SPACES.map(s => (
          <div key={s.id} className="p-6 rounded-2xl bg-neutral-900 border border-white/10">
            <h3 className="text-xl font-bold text-white">{s.name}</h3>
            <p className="text-sm text-neutral-400 mt-2 font-mono">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};`,
            },
            {
              name: 'TrainersPage.tsx',
              path: '/src/pages/TrainersPage.tsx',
              type: 'file',
              description: 'Olympic conditioning directors, neuromuscular physical therapists, and sports longevity scientists guiding members.',
              codeSnippet: `import React from 'react';
import { ELITE_TRAINERS } from '../data/gymData';

export const TrainersPage: React.FC = () => {
  return (
    <div className="py-16 space-y-8">
      <h2 className="text-3xl font-display font-black text-white">MASTER COACHES & SCIENTISTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ELITE_TRAINERS.map(t => (
          <div key={t.id} className="p-6 rounded-2xl bg-neutral-900 border border-white/10">
            <h3 className="text-xl font-bold text-white">{t.name}</h3>
            <div className="text-xs font-mono text-amber-400">{t.role}</div>
            <p className="text-sm text-neutral-400 mt-2">{t.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};`,
            },
          ],
        },
        {
          name: 'App.tsx',
          path: '/src/App.tsx',
          type: 'file',
          description: 'Client-side router driving multi-page state transitions, VIP booking modal open/close triggers, and dark atmospheric layout.',
          codeSnippet: `import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { VipBookingModal } from './components/VipBookingModal';
import { OverviewPage } from './pages/OverviewPage';
import { MembershipPage } from './pages/MembershipPage';
import { ProtocolsPage } from './pages/ProtocolsPage';
import { SpacesPage } from './pages/SpacesPage';
import { TrainersPage } from './pages/TrainersPage';
import { FlagshipsPage } from './pages/FlagshipsPage';
import { SciencePage } from './pages/SciencePage';

export function App() {
  const [activePage, setActivePage] = useState('overview');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] bg-neutral-950 text-white font-sans overflow-x-hidden">
      <Navbar activePage={activePage} onNavigate={setActivePage} onOpenBooking={() => setIsBookingOpen(true)} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activePage === 'overview' && <OverviewPage />}
        {activePage === 'membership' && <MembershipPage />}
        {activePage === 'protocols' && <ProtocolsPage />}
        {activePage === 'spaces' && <SpacesPage />}
        {activePage === 'trainers' && <TrainersPage />}
        {activePage === 'flagships' && <FlagshipsPage />}
        {activePage === 'science' && <SciencePage />}
      </main>
      <Footer />
      <VipBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}`,
        },
        {
          name: 'index.css',
          path: '/src/index.css',
          type: 'file',
          description: 'Global stylesheet importing Tailwind CSS with bespoke typography styling and dark atmospheric tokens.',
          codeSnippet: `@import "tailwindcss";

@layer base {
  body {
    background-color: #0a0a0a;
    color: #f5f5f5;
    font-family: 'Inter', sans-serif;
  }
}`,
        },
        {
          name: 'main.tsx',
          path: '/src/main.tsx',
          type: 'file',
          description: 'React 19 entry point mounting the root application to DOM with strict mode.',
          codeSnippet: `import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
        },
        {
          name: 'types.ts',
          path: '/src/types.ts',
          type: 'file',
          description: 'TypeScript interfaces for Memberships, Recovery Protocols, Trainers, Booking Form, and Page Navigation.',
          codeSnippet: `export type PageTab = 'overview' | 'membership' | 'protocols' | 'spaces' | 'trainers' | 'flagships' | 'science';

export interface VipBookingForm {
  name: string;
  phone: string;
  email?: string;
  preferredTier: string;
  flagshipSanctuary: string;
  targetFitnessGoals: string;
  preferredDate: string;
  preferredTime: string;
}`,
        },
      ],
    },
    {
      name: '.env.example',
      path: '/.env.example',
      type: 'file',
      description: 'Documents environment variable keys (e.g. VITE_SITE_URL, VITE_ANALYTICS_ID).',
      codeSnippet: `VITE_SITE_URL=https://aura-athlete.vercel.app`,
    },
    {
      name: '.gitignore',
      path: '/.gitignore',
      type: 'file',
      description: 'Git ignore rules for node_modules, dist, bun locks, and environment files.',
      codeSnippet: `node_modules/
dist/
.env
.env.local
.DS_Store`,
    },
    {
      name: 'bun.lock',
      path: '/bun.lock',
      type: 'file',
      description: 'High-speed Bun deterministic dependency lockfile guaranteeing reproducible builds.',
      codeSnippet: `// Bun lockfile v1 (reproducible binary hash)`,
    },
    {
      name: 'index.html',
      path: '/index.html',
      type: 'file',
      description: 'HTML5 document shell loading Hanken Grotesk and Inter Google fonts with Open Graph metadata.',
      codeSnippet: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AURA ATHLETIC CLUB — High-Performance Sanctuary</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body class="bg-neutral-950 text-white antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
    },
    {
      name: 'metadata.json',
      path: '/metadata.json',
      type: 'file',
      description: 'Application metadata declaring project name, description, and permissions.',
      codeSnippet: `{
  "name": "AURA Athletic Club",
  "description": "High-performance athletic club, biometrics & recovery sanctuary."
}`,
    },
    {
      name: 'package.json',
      path: '/package.json',
      type: 'file',
      description: 'NPM package manifest containing React 19, Lucide React, Vite, and Tailwind CSS.',
      codeSnippet: `{
  "name": "aura-athletic-club",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "^1.16.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "tailwindcss": "^4.0.0",
    "typescript": "~5.7.2",
    "vite": "^6.1.0"
  }
}`,
    },
    {
      name: 'README.md',
      path: '/README.md',
      type: 'file',
      description: 'Project documentation with setup instructions, design tokens, and deployment guides.',
      codeSnippet: `# AURA Athletic Club

Ultra-private high-performance athletic club and cellular longevity sanctuary. Built with React 19, TypeScript, and Tailwind CSS.`,
    },
    {
      name: 'tsconfig.json',
      path: '/tsconfig.json',
      type: 'file',
      description: 'TypeScript compiler configuration targeting ES2022 with strict type checking.',
      codeSnippet: `{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true
  }
}`,
    },
    {
      name: 'vite.config.ts',
      path: '/vite.config.ts',
      type: 'file',
      description: 'Vite build engine configuration with React plugin and Tailwind CSS integration.',
      codeSnippet: `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
});`,
    },
  ],
};

// Rich gym data for all pages
export const GYM_MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'founding',
    name: 'Founding Member',
    tierBadge: 'TIER 01 // CAPPED AT 100',
    monthlyDues: '$1,250',
    initiation: '$2,500 Initiation',
    tagline: 'Full sanctuary access with personalized biometrics & clinical recovery suites.',
    features: [
      'Unlimited access to primary flagship sanctum',
      'Full thermal suite: Contrast Cryo & Infrared Sauna',
      'Quarterly VO2 Max & Metabolic lactate profiling',
      'Dedicated athletic locker with laundry service',
      'Private valet parking & apparel concierge',
    ],
    perks: ['Biometric Smart Ring Integration', 'Guest Passes (2/month)', 'Cellular Hydration Bar'],
  },
  {
    id: 'black',
    name: 'Black Tier Athlete',
    tierBadge: 'TIER 02 // INVITATION ONLY',
    monthlyDues: '$2,400',
    initiation: '$5,000 Initiation',
    tagline: 'Global reciprocity across NYC, London, Tokyo & Dubai with master coach 1-on-1s.',
    isPopular: true,
    features: [
      'Global multi-city reciprocity across all 4 sanctums',
      'Unlimited Hyperbaric Oxygen (HBOT) sessions',
      'Weekly 1-on-1 Olympic biomechanics coaching',
      'Continuous blood biomarker & continuous glucose monitoring (CGM)',
      'Customized micronutrient IV drips & peptide consultation',
    ],
    perks: ['Private Hypoxic Altitude Chamber', 'Priority Private Suite Reservations', 'Bespoke Travel Conditioning Kits'],
  },
  {
    id: 'syndicate',
    name: 'Private Syndicate',
    tierBadge: 'TIER 03 // COMMITTEE VETTED',
    monthlyDues: '$4,800',
    initiation: '$10,000 Initiation',
    tagline: 'The ultimate bespoke athletic residency with full private training pod exclusivity.',
    features: [
      'Dedicated private training pod during peak hours',
      'Full sports science staff: Coach, Physio & Longevity Doctor',
      'Unlimited biometric testing, MRI musculoskeletal screenings',
      'Helipad transfers & executive discreet entrance',
      'Personalized biometric ring + 24/7 telemetry physician',
    ],
    perks: ['Private Recovery Lounge Access', 'Exclusive Annual Longevity Retreat', 'Unlimited Global Guest Privileges'],
  },
];

export const GYM_RECOVERY_PROTOCOLS: RecoveryProtocol[] = [
  {
    id: 'hbot',
    name: 'Hyperbaric Oxygen Therapy (HBOT)',
    category: 'Cellular',
    duration: '60 min',
    tempOrMetric: '2.0 ATA Pressure',
    description: 'Pure 100% medical oxygen in a pressurized chamber that dissolves O2 directly into blood plasma and lymph fluids.',
    clinicalBenefit: 'Accelerates soft-tissue healing 300%, stimulates stem cell mobilization, reduces systemic neuroinflammation.',
    scientificMechanism: 'Henry’s Law: Increased hydrostatic pressure supersaturates blood plasma independent of red blood cell binding capacity.',
  },
  {
    id: 'cryo',
    name: 'Sub-Zero Whole Body Cryotherapy',
    category: 'Thermal',
    duration: '3.5 min',
    tempOrMetric: '-110°C (-166°F)',
    description: 'True nitrogen-free electric refrigerated walk-in chamber producing systemic vasoconstriction followed by hyper-oxygenated rebound perfusion.',
    clinicalBenefit: 'Drastically suppresses delayed onset muscle soreness (DOMS), blunts pro-inflammatory cytokines (IL-6), elevates norepinephrine.',
    scientificMechanism: 'Massive sympathetic nerve response causing systemic vascular constriction, followed by flood of oxygenated blood upon rewarming.',
  },
  {
    id: 'infrared',
    name: 'Full-Spectrum Medical Infrared Sauna',
    category: 'Thermal',
    duration: '45 min',
    tempOrMetric: '75°C (167°F)',
    description: 'Far, mid, and near-infrared radiant heaters penetrating up to 3 inches into muscle tissue to trigger heat shock proteins.',
    clinicalBenefit: 'Induces deep cellular detoxification via profuse sweating, improves endothelial vascular compliance, optimizes parasympathetic HRV tone.',
    scientificMechanism: 'Upregulation of Heat Shock Proteins (HSP70) preventing protein misfolding and boosting cardiovascular microcirculation.',
  },
  {
    id: 'red-light',
    name: 'Full-Body Photobiomodulation (Red Light)',
    category: 'Cellular',
    duration: '20 min',
    tempOrMetric: '660nm & 850nm Waves',
    description: 'High-irradiance LED canopy delivering dual therapeutic wavelengths directly to skin, joints, and deep mitochondrial clusters.',
    clinicalBenefit: 'Amplifies ATP energy output in mitochondria, reduces oxidative stress, accelerates collagen synthesis.',
    scientificMechanism: 'Cytochrome c oxidase photon absorption in the mitochondrial respiratory chain, boosting ATP synthesis.',
  },
  {
    id: 'compression',
    name: 'Normatec Dynamic Pneumatic Compression',
    category: 'Neuromuscular',
    duration: '30 min',
    tempOrMetric: '100 mmHg Pulsing',
    description: 'Biomimetic sequential compression sleeves that flush metabolic waste, stimulate lymphatic drainage, and alleviate vascular pooling.',
    clinicalBenefit: 'Accelerates clearance of blood lactate by 45%, enhances range of motion, alleviates heavy legs sensation.',
    scientificMechanism: 'Sequential pneumatic peristaltic pressure mimicking the physiological muscle pump to facilitate venous return.',
  },
  {
    id: 'cold-plunge',
    name: 'Thermoregulated Glacier Cold Plunge',
    category: 'Thermal',
    duration: '3-5 min',
    tempOrMetric: '4°C (39°F) Continuous Flow',
    description: 'High-filtration titanium-chilled plunge pools with continuous laminar water flow to eliminate thermal barrier pockets.',
    clinicalBenefit: 'Spikes dopamine by 250% for hours, accelerates central nervous system recovery, bolsters brown fat thermogenesis.',
    scientificMechanism: 'Intense cold shock response stimulating peripheral vasoconstriction, norepinephrine release, and vagal nerve activation.',
  },
];

export const GYM_TRAINERS: EliteTrainer[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance, CSCS',
    role: 'Head of Biomechanics & Olympic Conditioning',
    credentials: ['Former USATF Track & Field Coach', 'M.Sc. Human Movement Science', 'Eleiko Master Instructor'],
    specialty: 'Explosive Force-Velocity Profiling & Barbell Kinetics',
    bio: 'Marcus has spent 14 years preparing World Championship sprinters and decathletes, translating Olympic velocity protocols into executive physical resilience.',
    availability: 'SoHo NYC & Mayfair London',
  },
  {
    id: 'dr-elena-rostova',
    name: 'Dr. Elena Rostova, Ph.D.',
    role: 'Director of Longevity & Cellular Physiology',
    credentials: ['Ph.D. Exercise Endocrinology (Oxford)', 'Fellow of American College of Sports Medicine', 'Ex-Olympic Physiologist'],
    specialty: 'Metabolic Flexibility, VO2 Max & Continuous Biomarkers',
    bio: 'Dr. Rostova spearheads the club’s clinical laboratory, auditing continuous glucose, resting metabolic rate, and intracellular antioxidant status for members.',
    availability: 'Global Telemetry & Mayfair London',
  },
  {
    id: 'kenji-takahashi',
    name: 'Kenji Takahashi, PT, DPT',
    role: 'Lead Neuromuscular Physical Therapist',
    credentials: ['Doctor of Physical Therapy (USC)', 'Board Certified Orthopedic Specialist (OCS)', 'FMS Level 2'],
    specialty: 'Joint Articular Mobility & Soft Tissue Diagnostics',
    bio: 'Specializing in post-competition spinal decompression, fascial gliding, and neuromuscular re-education to guarantee injury-free longevity.',
    availability: 'Ginza Tokyo & SoHo NYC',
  },
  {
    id: 'tariq-al-mansoor',
    name: 'Tariq Al-Mansoor, M.Sc.',
    role: 'Director of Hypoxic & Altitude Conditioning',
    credentials: ['M.Sc. High Altitude Physiology (Innsbruck)', 'Alpinist & Extreme Endurance Specialist'],
    specialty: 'Hypoxic Conditioning & Autonomic Nervous System Calibration',
    bio: 'Tariq engineers simulated high-altitude hypoxic protocols (up to 4,500m) to supercharge red blood cell density and mitochondrial efficiency.',
    availability: 'DIFC Dubai',
  },
];

export const GYM_FLAGSHIPS: FlagshipSanctuary[] = [
  {
    id: 'soho-nyc',
    city: 'New York City',
    neighborhood: 'SoHo Historic Cast-Iron District',
    address: '142 Mercer Street, New York, NY 10012',
    sqft: '28,000 sq ft',
    features: ['Eleiko Custom Rigs', 'Hyperbaric Oxygen Chamber Suite', 'Sub-Zero Cryo', 'Rooftop Sprint Track', 'Private Valet'],
    hours: 'Mon–Sun: 5:00 AM – 11:00 PM',
  },
  {
    id: 'mayfair-london',
    city: 'London',
    neighborhood: 'Mayfair Heritage Enclave',
    address: '22 Berkeley Square, Mayfair, London W1J 6EH',
    sqft: '24,000 sq ft',
    features: ['Hydrothermal Roman Baths', 'Biomarker Blood Laboratory', 'Infrared Cedar Suites', 'Private Pods', 'Chauffeur Lounge'],
    hours: 'Mon–Sun: 5:30 AM – 10:30 PM',
  },
  {
    id: 'ginza-tokyo',
    city: 'Tokyo',
    neighborhood: 'Ginza Sanctuary Tower',
    address: '6-10-1 Ginza, Chuo City, Tokyo 104-0061',
    sqft: '22,000 sq ft',
    features: ['Acoustic Decoupled Pods', 'Hinoki Wood Plunges', 'Biomechanics Motion Capture Lab', 'Zen Oxygen Garden'],
    hours: 'Mon–Sun: 6:00 AM – 11:00 PM',
  },
  {
    id: 'difc-dubai',
    city: 'Dubai',
    neighborhood: 'DIFC Financial Centre',
    address: 'Gate Precinct 4, Level 5, DIFC, Dubai, UAE',
    sqft: '32,000 sq ft',
    features: ['Hypoxic Altitude Chamber (4,500m)', 'Olympic 50m Sprint Lane', 'Private Cryo Pods', 'Executive Helipad Access'],
    hours: 'Mon–Sun: 24/7 Private Syndicate Access',
  },
];

export const GYM_TRAINING_SPACES: TrainingSpace[] = [
  {
    id: 'biomechanics-lab',
    name: 'Biomechanical Strength Lab',
    zone: 'Zone 01 · Kinetic Performance',
    equipment: ['Eleiko IPF Certified Rigs', 'Force Plates & Barbell Accelerometers', 'Custom Dumbbells up to 150 lbs', 'Keiser Pneumatic Cable Systems'],
    description: 'Engineered with vibration-dampening acoustic subfloors, customized Eleiko stainless barbells, and real-time velocity-based training sensors.',
  },
  {
    id: 'hypoxic-chamber',
    name: 'Hypoxic Altitude Chamber',
    zone: 'Zone 02 · Conditioning & Endurance',
    equipment: ['Woodway 4Front Treadmills', 'Wattbike AtomX Smart Ergometers', 'Concept2 SkiErgs', 'Nitrogen-Enriched Air Scrubbers'],
    description: 'Simulates atmospheric altitudes from sea level up to 4,500 meters (14,700 ft) to induce erythropoietin release and elevate hematocrit.',
  },
  {
    id: 'hydrothermal-suite',
    name: 'Thermal Contrast & Hydrotherapy Suite',
    zone: 'Zone 03 · Thermal Longevity',
    equipment: ['Twin 4°C Titanium Glacier Plunges', '85°C Finnish Dry Sauna', '75°C Far-Infrared Cedar Chamber', 'Eucalyptus Steam Cave'],
    description: 'A subterranean sanctuary clad in Italian basalt stone designed for strict cyclic hot-cold contrast protocols.',
  },
  {
    id: 'recovery-pods',
    name: 'Zero-Gravity Cellular Recovery Pods',
    zone: 'Zone 04 · Neural Restoration',
    equipment: ['Multi-place 2.0 ATA Hyperbaric Chambers', 'Full-Body 850nm Red Light Beds', 'Acoustic Sound Healing Beds', 'Normatec 3 Systems'],
    description: 'Sound-isolated acoustic pods where athletes recharge between intense conditioning bouts using targeted photobiomodulation.',
  },
];
