export interface CafeFileNode {
  name: string;
  type: 'folder' | 'file';
  path: string;
  description: string;
  codeSnippet?: string;
  children?: CafeFileNode[];
}

export interface CafeMenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'pastry' | 'bites' | 'beverage';
  price: string;
  description: string;
  image: string;
  tags: string[];
  origin: string;
  isSignature?: boolean;
}

export interface BookingFormData {
  guests: string;
  date: string;
  time: string;
  seating: string;
  name: string;
  phone: string;
  notes: string;
}

// WhatsApp Concierge phone configuration from live site
export const WHATSAPP_PHONE_NUMBER = '919219143734';
export const WHATSAPP_DISPLAY_PHONE = '+91 9219143734';

// Exact File Tree matching the user's uploaded CAFE_LANDING_PAGE screenshots (.git excluded)
export const CAFE_FILE_TREE: CafeFileNode = {
  name: 'CAFE_LANDING_PAGE',
  type: 'folder',
  path: '/',
  description: 'Root repository for the Aura Cafe artisanal roastery & sensory atelier web platform.',
  children: [
    {
      name: 'public',
      type: 'folder',
      path: '/public',
      description: 'Static web assets, edge redirects, and public distribution directory.',
      children: [
        {
          name: 'assets',
          type: 'folder',
          path: '/public/assets',
          description: 'Static media and studio assets directory.',
          children: [
            {
              name: 'aistudio',
              type: 'folder',
              path: '/public/assets/aistudio',
              description: 'AI Studio project configuration directory.',
              children: [
                {
                  name: '.gitignore',
                  type: 'file',
                  path: '/public/assets/aistudio/.gitignore',
                  description: 'Ignores local ephemeral studio build cache and telemetry logs.',
                  codeSnippet: `# AI Studio Local Artifacts\n*.tmp\n*.log\ncache/`,
                },
              ],
            },
          ],
        },
        {
          name: '_redirects',
          type: 'file',
          path: '/public/_redirects',
          description: 'Netlify SPA client-side routing fallback rule preserving multi-section navigation.',
          codeSnippet: `/*    /index.html   200`,
        },
      ],
    },
    {
      name: 'src',
      type: 'folder',
      path: '/src',
      description: 'Source code containing components, custom hooks, artisanal catalog data, and styles.',
      children: [
        {
          name: 'components',
          type: 'folder',
          path: '/src/components',
          description: 'Modular React presentation & interactive UI components.',
          children: [
            {
              name: 'AnimatedEffects.tsx',
              type: 'file',
              path: '/src/components/AnimatedEffects.tsx',
              description: 'Liquid-glass blur shaders, golden ambient glow orbs, and subtle sensory micro-animations.',
              codeSnippet: `// Liquid glass shader overlay & subtle ambient glow dynamics
export const AmbientGlow = () => (
  <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#F1E194]/4 rounded-full blur-[160px] pointer-events-none" />
);`,
            },
            {
              name: 'BookingModal.tsx',
              type: 'file',
              path: '/src/components/BookingModal.tsx',
              description: 'Interactive table reservation modal with direct WhatsApp dispatch to +91 9219143734.',
              codeSnippet: `// WhatsApp Table Reservation Dispatch Engine
export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('10:30 AM');
  const [seating, setSeating] = useState('Main Atelier Bar');
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.replace(/[^\\w\\s.,-]/gi, '').trim().slice(0, 60);
    const cleanNotes = notes.replace(/[^\\w\\s.,-]/gi, '').trim().slice(0, 250);
    
    const message = \`Hi Aura Cafe! I would like to reserve a table:\\n\` +
      \`• Guests: \${guests} people\\n\` +
      \`• Date: \${date}\\n\` +
      \`• Time: \${time}\\n\` +
      \`• Preferred Seating: \${seating}\` +
      (cleanName ? \`\\n• Name: \${cleanName}\` : '') +
      (cleanNotes ? \`\\n• Special Requests: \${cleanNotes}\` : '');

    const whatsappUrl = \`https://wa.me/919219143734?text=\${encodeURIComponent(message)}\`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };
  // ... JSX render
};`,
            },
            {
              name: 'Footer.tsx',
              type: 'file',
              path: '/src/components/Footer.tsx',
              description: 'Atelier footer with Soho location details, direct WhatsApp concierge, and back-to-top scroll.',
              codeSnippet: `// Atelier Footer with direct WhatsApp Concierge Hotline
<a href="https://wa.me/919219143734" target="_blank" rel="noopener noreferrer" className="hover:text-[#F1E194]">
  WhatsApp Concierge: +91 9219143734
</a>`,
            },
            {
              name: 'HeroSection.tsx',
              type: 'file',
              path: '/src/components/HeroSection.tsx',
              description: 'Editorial hero banner with live operating status badge via useCafeStatus and quick booking CTA.',
              codeSnippet: `// Hero section with dynamic status badge
export const HeroSection = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  const { isOpen, message } = useCafeStatus();
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
        <span className={\`h-2 w-2 rounded-full \${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}\`} />
        <span className="text-xs font-mono">{message}</span>
      </div>
      {/* Editorial headline & table reservation CTA */}
    </section>
  );
};`,
            },
            {
              name: 'MenuSection.tsx',
              type: 'file',
              path: '/src/components/MenuSection.tsx',
              description: 'Sensory menu showcase with category filters (Roasts, Pastry, Bites, Botanicals) and WhatsApp pre-order query.',
              codeSnippet: `// Direct WhatsApp Pre-Order / Availability query per item
const handlePreOrder = (item: MenuItem) => {
  const query = encodeURIComponent(
    \`Hi Aura Cafe! I'd love to ask about or pre-order the \${item.name} (\${item.price}). Is it available today?\`
  );
  window.open(\`https://wa.me/919219143734?text=\${query}\`, '_blank', 'noopener,noreferrer');
};`,
            },
            {
              name: 'Navigation.tsx',
              type: 'file',
              path: '/src/components/Navigation.tsx',
              description: 'Sticky liquid-glass navigation bar with live status indicator and direct table reservation trigger.',
              codeSnippet: `// Liquid glass navigation with live atelier status
<nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#0e0c0b]/80 border-b border-white/10">
  {/* Live status dot, brandmark, and Reserve Table button */}
</nav>`,
            },
            {
              name: 'StorySection.tsx',
              type: 'file',
              path: '/src/components/StorySection.tsx',
              description: 'Heritage chronicle from the 2019 Coorg estate inspiration to the 2026 Brew Avenue handcrafted roastery.',
              codeSnippet: `// Handcrafted atelier narrative timeline
const MILESTONES = [
  { year: '2019', title: 'The Coorg Morning', subtitle: 'Where Passion Overcame Routine' },
  { year: '2023', title: 'The Salmon Walls', subtitle: 'Building the Atelier by Hand' },
  { year: '2026', title: 'Aura Opens Its Doors', subtitle: 'A Cup of Coffee Changed Everything' },
];`,
            },
            {
              name: 'TestimonialsSection.tsx',
              type: 'file',
              path: '/src/components/TestimonialsSection.tsx',
              description: 'Editorial patron reviews from daily regulars, coffee critics, and artisan architects.',
              codeSnippet: `// Verified patron feedback carousel & quotes
export const TestimonialsSection = () => { /* Renders reviews from Sarah, Michael, and Elena */ };`,
            },
            {
              name: 'VisitSection.tsx',
              type: 'file',
              path: '/src/components/VisitSection.tsx',
              description: 'Interactive location coordinates at 142 Brew Avenue, Soho, operating schedule, and directions.',
              codeSnippet: `// Operating hours and Soho location guide
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Schedule: Mon-Fri 7AM-8PM, Sat-Sun 8AM-9PM */}
</div>`,
            },
          ],
        },
        {
          name: 'data',
          type: 'folder',
          path: '/src/data',
          description: 'Artisanal catalog database, roastery origin metadata, and milestone history.',
          children: [
            {
              name: 'cafeData.ts',
              type: 'file',
              path: '/src/data/cafeData.ts',
              description: 'Database of 16 signature beverages, hand-laminated pastries, savory sourdough bites, and story chronicles.',
              codeSnippet: `// Complete Aura Cafe Menu & Atelier Database
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'flat-white',
    name: 'Signature Flat White',
    category: 'coffee',
    price: '$4.50',
    description: 'Velvety steamed micro-foam folded over a double ristretto shot of seasonal house roast.',
    tags: ['Signature', 'Double Ristretto', 'House Roast'],
    origin: 'Huila, Colombia & Yirgacheffe, Ethiopia',
    isSignature: true,
  },
  {
    id: 'pour-over',
    name: 'Ethiopian Yirgacheffe Pour Over',
    category: 'coffee',
    price: '$5.00',
    description: 'Hand-poured slow extraction highlighting jasmine florals, bergamot, and crisp peach.',
    tags: ['Single Origin', 'V60 Pour Over', 'Light Roast'],
    origin: 'Konga Station, Yirgacheffe (Washed)',
    isSignature: true,
  },
  // ... 14 additional artisanal items
];`,
            },
          ],
        },
        {
          name: 'hooks',
          type: 'folder',
          path: '/src/hooks',
          description: 'Custom React hooks for real-time schedule tracking and client state.',
          children: [
            {
              name: 'useCafeStatus.ts',
              type: 'file',
              path: '/src/hooks/useCafeStatus.ts',
              description: '30-second interval hook computing live open/closed status against weekday/weekend operating hours.',
              codeSnippet: `// Real-Time Cafe Operating Status Engine
export function useCafeStatus() {
  const [status, setStatus] = useState(() => checkStatus());

  function checkStatus() {
    const now = new Date();
    const day = now.getDay();
    const mins = now.getHours() * 60 + now.getMinutes();
    const isWeekend = day === 0 || day === 6;
    
    // Weekday: 7:00 AM (420m) to 8:00 PM (1200m)
    // Weekend: 8:00 AM (480m) to 9:00 PM (1260m)
    const openMins = isWeekend ? 480 : 420;
    const closeMins = isWeekend ? 1260 : 1200;
    const openStr = isWeekend ? '8:00 AM' : '7:00 AM';
    const closeStr = isWeekend ? '9:00 PM' : '8:00 PM';
    
    const isOpen = mins >= openMins && mins < closeMins;
    return {
      isOpen,
      message: isOpen ? \`Open Now • Closes at \${closeStr}\` : \`Closed Now • Opens at \${openStr}\`,
      closesAt: closeStr,
      opensAt: openStr,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setStatus(checkStatus()), 30000);
    return () => clearInterval(timer);
  }, []);

  return status;
}`,
            },
          ],
        },
        {
          name: 'App.tsx',
          type: 'file',
          path: '/src/App.tsx',
          description: 'Root application component mounting Navigation, Hero, Menu, Story, Testimonials, Visit, and BookingModal.',
          codeSnippet: `// Aura Cafe Root Application Component
export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#0e0c0b] text-[#F4F0EB]">
      <Navigation onOpenBooking={() => setIsBookingOpen(true)} />
      <HeroSection onOpenBooking={() => setIsBookingOpen(true)} />
      <MenuSection onOpenBooking={() => setIsBookingOpen(true)} />
      <StorySection />
      <TestimonialsSection />
      <VisitSection onOpenBooking={() => setIsBookingOpen(true)} />
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}`,
        },
        {
          name: 'index.css',
          type: 'file',
          path: '/src/index.css',
          description: 'Global stylesheet with Tailwind CSS, custom liquid-glass utility classes, and warm gold highlights.',
          codeSnippet: `@import "tailwindcss";\n\n.liquid-glass {\n  background: rgba(255, 255, 255, 0.04);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}`,
        },
        {
          name: 'main.tsx',
          type: 'file',
          path: '/src/main.tsx',
          description: 'Application entry point rendering App within React 19 StrictMode.',
          codeSnippet: `import { StrictMode } from 'react';\nimport { createRoot } from 'react-dom/client';\nimport App from './App';\nimport './index.css';\n\ncreateRoot(document.getElementById('root')!).render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);`,
        },
        {
          name: 'types.ts',
          type: 'file',
          path: '/src/types.ts',
          description: 'TypeScript interfaces for MenuItem, Category, BookingFormData, and CafeStatus.',
          codeSnippet: `export interface MenuItem {\n  id: string;\n  name: string;\n  category: 'coffee' | 'pastry' | 'bites' | 'beverage';\n  price: string;\n  description: string;\n  image: string;\n  tags: string[];\n  origin: string;\n  isSignature?: boolean;\n}`,
        },
      ],
    },
    {
      name: 'index.html',
      type: 'file',
      path: '/index.html',
      description: 'HTML5 entry point preloading Google Fonts (EB Garamond, Hanken Grotesk, Inter) and viewport parameters.',
      codeSnippet: `<!doctype html>\n<html lang="en" class="dark">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" />\n    <title>Aura Cafe — Artisanal Roastery & Liquid Atelier</title>\n    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..700;1,400..700&family=Hanken+Grotesk:wght@300..700&family=Inter:wght@300..900&display=swap" rel="stylesheet" />\n  </head>\n  <body class="bg-[#0e0c0b] text-[#F4F0EB] antialiased selection:bg-[#F1E194] selection:text-[#0e0c0b] overflow-x-hidden">\n    <div id="root"></div>\n  </body>\n</html>`,
    },
    {
      name: 'metadata.json',
      type: 'file',
      path: '/metadata.json',
      description: 'AI Studio app metadata documenting system scope and major server capabilities.',
      codeSnippet: `{\n  "name": "Aura Cafe — Artisanal Roastery & Liquid Atelier",\n  "description": "Slow-roasted single-origin coffees, cold-extracted botanicals, and artisanal French pastries in an unhurried sanctuary.",\n  "majorCapabilities": ["MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API"]\n}`,
    },
    {
      name: 'netlify.toml',
      type: 'file',
      path: '/netlify.toml',
      description: 'Netlify deployment configuration with edge caching and security headers.',
      codeSnippet: `[build]\n  publish = "dist"\n  command = "npm run build"\n\n[[headers]]\n  for = "/*"\n    [headers.values]\n      X-Frame-Options = "DENY"\n      X-Content-Type-Options = "nosniff"\n      Referrer-Policy = "strict-origin-when-cross-origin"`,
    },
    {
      name: 'package.json',
      type: 'file',
      path: '/package.json',
      description: 'Project manifest with React 19, Vite, Lucide React, and Tailwind CSS.',
      codeSnippet: `{\n  "name": "aura-cafe",\n  "private": true,\n  "version": "1.0.0",\n  "type": "module",\n  "scripts": {\n    "dev": "vite",\n    "build": "vite build",\n    "preview": "vite preview"\n  },\n  "dependencies": {\n    "lucide-react": "^0.546.0",\n    "motion": "^12.0.0",\n    "react": "^19.0.0",\n    "react-dom": "^19.0.0"\n  }\n}`,
    },
    {
      name: 'README.md',
      type: 'file',
      path: '/README.md',
      description: 'Documentation outlining the design system, WhatsApp reservation pipeline, and deployment guide.',
      codeSnippet: `# Aura Cafe — Artisanal Roastery & Liquid Atelier\n\nA sensory digital flagship engineered for artisanal coffee culture, direct table reservations over WhatsApp (+91 9219143734), and real-time atelier status calculation.`,
    },
    {
      name: 'tsconfig.json',
      type: 'file',
      path: '/tsconfig.json',
      description: 'Strict TypeScript compiler options ensuring end-to-end type safety.',
      codeSnippet: `{\n  "compilerOptions": {\n    "target": "ES2022",\n    "useDefineForClassFields": true,\n    "lib": ["ES2023", "DOM", "DOM.Iterable"],\n    "module": "ESNext",\n    "skipLibCheck": true,\n    "strict": true\n  }\n}`,
    },
    {
      name: 'vite.config.ts',
      type: 'file',
      path: '/vite.config.ts',
      description: 'Vite bundling configuration with Tailwind CSS and React plugins.',
      codeSnippet: `import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\nimport tailwindcss from '@tailwindcss/vite';\n\nexport default defineConfig({\n  plugins: [react(), tailwindcss()],\n});`,
    },
  ],
};

// Complete Authentic Menu directly extracted from auracafes.netlify.app
export const CAFE_MENU_ITEMS: CafeMenuItem[] = [
  {
    id: 'flat-white',
    name: 'Signature Flat White',
    category: 'coffee',
    price: '$4.50',
    description: 'Velvety steamed micro-foam folded over a double ristretto shot of our seasonal house roast.',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=800&auto=format&fit=crop',
    tags: ['Signature', 'Double Ristretto', 'House Roast'],
    origin: 'Huila, Colombia & Yirgacheffe, Ethiopia',
    isSignature: true,
  },
  {
    id: 'pour-over',
    name: 'Ethiopian Yirgacheffe Pour Over',
    category: 'coffee',
    price: '$5.00',
    description: 'Hand-poured slow extraction highlighting jasmine florals, bergamot, and a crisp peach finish.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
    tags: ['Single Origin', 'V60 Pour Over', 'Light Roast'],
    origin: 'Konga Station, Yirgacheffe (Washed)',
    isSignature: true,
  },
  {
    id: 'spanish-latte',
    name: 'Aura Spanish Latte',
    category: 'coffee',
    price: '$5.25',
    description: 'Silky sweet condensed milk layered under bold espresso with a dusting of organic Ceylon cinnamon.',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop',
    tags: ['Creamy', 'Ceylon Cinnamon', 'Sweet Accent'],
    origin: 'Antioquia, Colombia',
  },
  {
    id: 'nitro-cold-brew',
    name: 'Nitro Cascade Cold Brew',
    category: 'coffee',
    price: '$5.50',
    description: '18-hour cold-steeped micro-lot infused with pure nitrogen for a Guinness-like creamy head and naturally sweet body.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop',
    tags: ['Nitrogen Infused', '18h Steep', 'Draft Pour'],
    origin: 'Tarrazú, Costa Rica',
    isSignature: true,
  },
  {
    id: 'cortado',
    name: 'Valencia Cortado',
    category: 'coffee',
    price: '$4.25',
    description: 'Equal 1:1 balance of intense double espresso and textured milk in a classic heavy Gibraltar tumbler.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop',
    tags: ['Balanced 1:1', 'Gibraltar Glass', 'Bold'],
    origin: 'Bourbon & Typica blend',
  },
  {
    id: 'single-espresso',
    name: 'Origin Micro-Lot Espresso',
    category: 'coffee',
    price: '$3.75',
    description: 'Double extraction of our current farm-direct micro-lot. Notes of black cherry, cacao nibs, and cane sugar.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop',
    tags: ['Direct Trade', 'Pure Extraction', 'Micro-Lot'],
    origin: 'Finca La Palma, Honduras',
  },
  {
    id: 'almond-croissant',
    name: 'Twice-Baked Almond Croissant',
    category: 'pastry',
    price: '$3.75',
    description: '72-layer flaky pastry filled with house-whipped almond frangipane, topped with toasted sliced almonds.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop',
    tags: ['Artisanal Bakery', 'Twice-Baked', 'Fresh 4 AM'],
    origin: 'Baked in-house daily',
    isSignature: true,
  },
  {
    id: 'nutella-bomb',
    name: 'Nutella Hazelnut Bombshell',
    category: 'pastry',
    price: '$4.20',
    description: 'Golden brioche roll stuffed generously with warm molten Nutella and roasted Piedmont hazelnuts.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop',
    tags: ['Warm Brioche', 'Piedmont Hazelnuts', 'Indulgent'],
    origin: 'Parisian Recipe',
  },
  {
    id: 'butter-croissant',
    name: 'Classic AOP Butter Croissant',
    category: 'pastry',
    price: '$3.25',
    description: 'Authentic laminated puff pastry made with Normandy cultured butter. Crispy acoustic exterior and honeycomb interior.',
    image: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?q=80&w=800&auto=format&fit=crop',
    tags: ['AOP Normandy Butter', 'French Classic', 'Vegetarian'],
    origin: 'Artisan hand-rolled',
  },
  {
    id: 'cardamom-bun',
    name: 'Stockholm Cardamom Bun',
    category: 'pastry',
    price: '$4.50',
    description: 'Swedish-style knotted sweet brioche infused with freshly crushed green cardamom and raw pearl sugar.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    tags: ['Green Cardamom', 'Nordic Baker', 'Aromatic'],
    origin: 'Scandinavian recipe',
  },
  {
    id: 'avocado-toast',
    name: 'Avocado Sourdough Toast',
    category: 'bites',
    price: '$8.00',
    description: 'Smashed Hass avocado, soft-poached pasture-raised egg, pickled shallots, microgreens, and chili crunch on artisanal sourdough.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop',
    tags: ['Organic Sourdough', 'Pasture Egg', 'Superfood'],
    origin: 'Locally Sourced Farm Produce',
    isSignature: true,
  },
  {
    id: 'truffle-fries',
    name: 'Truffle Parmesan Hand-Cut Fries',
    category: 'bites',
    price: '$6.50',
    description: 'Russet potatoes double-fried in sunflower oil, tossed in aromatic black truffle oil, aged Parmigiano-Reggiano, and fresh thyme.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=800&auto=format&fit=crop',
    tags: ['Black Truffle Oil', '24mo Parmesan', 'Crisp'],
    origin: 'House recipe',
  },
  {
    id: 'mushroom-bruschetta',
    name: 'Wild Mushroom Bruschetta',
    category: 'bites',
    price: '$7.50',
    description: 'Pan-seared foraged chanterelle and cremini mushrooms, herb-infused whipped ricotta, and aged balsamic reduction on toasted ciabatta.',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=800&auto=format&fit=crop',
    tags: ['Foraged Mushrooms', 'Whipped Ricotta', 'Artisan Bread'],
    origin: 'Seasonal Harvest',
  },
  {
    id: 'matcha-latte',
    name: 'Ceremonial Uji Matcha Latte',
    category: 'beverage',
    price: '$5.50',
    description: 'First-harvest ceremonial grade matcha from Uji, Kyoto, whisked with hot water and finished with textured minor figures oat milk.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop',
    tags: ['Uji Kyoto', 'Ceremonial Grade', 'Vegan / Oat Milk'],
    origin: 'Kyoto Prefecture, Japan',
    isSignature: true,
  },
  {
    id: 'hibiscus-cooler',
    name: 'Sparkling Hibiscus Berry Cooler',
    category: 'beverage',
    price: '$4.80',
    description: 'Tart organic Egyptian hibiscus flowers steeped with wild blackberries, crushed fresh garden mint, and bubbly sparkling spring water.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop',
    tags: ['Caffeine Free', 'Organic Hibiscus', 'Botanical'],
    origin: 'Hand-crafted syrup',
  },
  {
    id: 'spiced-lemonade',
    name: 'Spiced Honey Cold Brew Lemonade',
    category: 'beverage',
    price: '$5.00',
    description: 'A striking layered refresher: freshly squeezed Eureka lemon juice, raw wildflower honey, crushed ginger, and a floating shot of cold brew.',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop',
    tags: ['Citrus Fusion', 'Raw Honey', 'Layered Brew'],
    origin: 'Signature concoction',
  },
];
