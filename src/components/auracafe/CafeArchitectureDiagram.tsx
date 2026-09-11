import React, { useState } from 'react';
import {
  Layers,
  Sparkles,
  Clock,
  MessageSquare,
  Globe,
  Smartphone,
  Cpu,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { WHATSAPP_DISPLAY_PHONE } from '../../data/cafeArchitecture';

const TIERS = [
  {
    id: 'tier-1',
    number: '01',
    name: 'SENSORY PRESENTATION LAYER',
    badge: 'Editorial UI & Typography',
    color: 'border-amber-500/40 bg-amber-500/5',
    tagColor: 'bg-amber-100 text-amber-900 border-amber-300',
    description:
      'Dark luxury aesthetic using EB Garamond display serif, Hanken Grotesk sans, and bespoke liquid-glass shaders. Fully responsive from 360px mobile viewports to 4K displays with 100dvh compliance.',
    technologies: ['React 19', 'Tailwind CSS', 'EB Garamond', 'Liquid Glass Blur', 'Dynamic Viewport (100dvh)'],
    highlights: [
      'Tactile dark theme (#0e0c0b canvas with #F1E194 warm gold accents)',
      'No unsolicited animations or UI lag; micro-transitions optimized for mobile browsers',
      'Editorial photo presentation with lazy loading and high-contrast accessibility',
    ],
  },
  {
    id: 'tier-2',
    number: '02',
    name: 'REAL-TIME CAFE STATUS ENGINE',
    badge: 'useCafeStatus Hook',
    color: 'border-blue-500/40 bg-blue-500/5',
    tagColor: 'bg-blue-100 text-blue-900 border-blue-300',
    description:
      'Client-side heartbeat calculation engine monitoring real-time operational status (Mon-Fri 7AM-8PM, Sat-Sun 8AM-9PM) with 30-second interval updates and pulsing indicators.',
    technologies: ['React useEffect', 'Date Temporal Math', '30s Heartbeat Timer', 'Dynamic Badge States'],
    highlights: [
      'Instant visual feedback ("Open Now • Closes at 8:00 PM" / "Closed Now • Opens at 7:00 AM")',
      'Zero external API dependencies; pure deterministic temporal logic',
      'Pulsing status pill displayed across sticky navigation, hero section, and visit guide',
    ],
  },
  {
    id: 'tier-3',
    number: '03',
    name: 'SERVERLESS WHATSAPP PIPELINE',
    badge: 'Direct WhatsApp Concierge',
    color: 'border-emerald-500/40 bg-emerald-500/5',
    tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    description:
      `Zero-backend reservation and pre-ordering pipeline dispatching authenticated structured booking intents directly to ${WHATSAPP_DISPLAY_PHONE} via URI scheme encoding.`,
    technologies: ['WhatsApp URI Scheme (wa.me)', 'URI Component Encoding', 'Input Sanitization', 'Mobile App Handshake'],
    highlights: [
      'Collects patron name, phone number, party size, time slot, seating zone, and personal notes',
      'Eliminates database maintenance, monthly server costs, and cold starts',
      'Direct human-to-human hospitality connection with instantaneous mobile push notifications',
    ],
  },
  {
    id: 'tier-4',
    number: '04',
    name: 'EDGE CDN & DEPLOYMENT LAYER',
    badge: 'Netlify Edge Network',
    color: 'border-violet-500/40 bg-violet-500/5',
    tagColor: 'bg-violet-100 text-violet-900 border-violet-300',
    description:
      'Globally distributed static distribution on Netlify Edge CDN with automatic SPA redirection (_redirects), Brotli compression, and immutable cache headers.',
    technologies: ['Netlify Edge CDN', 'Brotli Compression', 'HTTP/2 Multiplexing', 'Sub-20ms TTFB'],
    highlights: [
      'Pre-rendered static bundle with zero server render bottlenecks',
      'Strict security headers (X-Frame-Options, X-Content-Type-Options)',
      'Sub-second first contentful paint across global cellular and fiber connections',
    ],
  },
];

const SECTIONS_FLOW = [
  { id: 'nav', title: 'Navigation Bar', desc: 'Sticky glass with pulsing live status pill & table booking CTA' },
  { id: 'hero', title: 'Hero Experience', desc: 'Editorial headline, sensory imagery & reservation trigger' },
  { id: 'menu', title: 'Sensory Menu', desc: '5 categories, item drawer & direct WhatsApp pre-orders' },
  { id: 'story', title: 'Heritage Story', desc: 'Timeline from 2019 Coorg estate to 2026 Brew Avenue' },
  { id: 'reviews', title: 'Testimonials', desc: 'Verified patron & coffee critic commentary' },
  { id: 'visit', title: 'Visit & Hours', desc: 'Interactive schedule table & Soho location directions' },
  { id: 'modal', title: 'Booking Modal', desc: 'Form capturing name, phone & notes -> WhatsApp dispatch' },
];

export function CafeArchitectureDiagram() {
  const [activeTier, setActiveTier] = useState<string>('tier-3');

  const selectedTier = TIERS.find((t) => t.id === activeTier) || TIERS[0];

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white shadow-xs overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 bg-neutral-50/80 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-neutral-900" />
          <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-950">
            AURA CAFE // 4-TIER TECHNICAL ARCHITECTURE
          </h3>
        </div>
        <span className="font-mono text-[11px] text-neutral-500">
          Click any tier to inspect architectural specifications
        </span>
      </div>

      {/* Multi-Section Page Flow Visualizer */}
      <div className="border-b border-neutral-200/80 bg-neutral-50/40 p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <Globe className="h-3.5 w-3.5 text-neutral-700" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900">
            Multi-Section Application User Journey Flow
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {SECTIONS_FLOW.map((sec, idx) => (
            <div
              key={sec.id}
              className="rounded-lg border border-neutral-200 bg-white p-2.5 text-left relative overflow-hidden shadow-2xs"
            >
              <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400 mb-1">
                <span>0{idx + 1}</span>
                {idx === SECTIONS_FLOW.length - 1 && (
                  <span className="text-emerald-600 font-bold">DISPATCH</span>
                )}
              </div>
              <div className="font-mono text-xs font-bold text-neutral-950 truncate">
                {sec.title}
              </div>
              <p className="text-[11px] text-neutral-500 line-clamp-2 mt-0.5 leading-snug">
                {sec.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Tiers Navigation & Detail Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Tier Buttons List */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-neutral-200 p-3 sm:p-4 bg-neutral-50/30 space-y-2">
          <div className="text-[11px] font-mono uppercase font-semibold text-neutral-400 px-2 mb-2">
            System Tiers
          </div>
          {TIERS.map((tier) => {
            const isSelected = tier.id === activeTier;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTier(tier.id)}
                className={`w-full text-left p-3 rounded-xl border transition-all ${
                  isSelected
                    ? 'border-neutral-950 bg-white shadow-xs'
                    : 'border-neutral-200/80 bg-white/70 hover:bg-white hover:border-neutral-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-extrabold text-neutral-400">
                    TIER {tier.number}
                  </span>
                  <span
                    className={`rounded px-1.5 py-0.2 font-mono text-[9px] font-bold border ${tier.tagColor}`}
                  >
                    {tier.badge}
                  </span>
                </div>
                <div className="mt-1 font-mono text-xs font-bold text-neutral-950">
                  {tier.name}
                </div>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-neutral-500 font-mono">
                  <span>Inspect Layer</span>
                  <ArrowRight className="h-3 w-3 text-neutral-400" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Tier Inspector */}
        <div className="lg:col-span-7 p-4 sm:p-6 bg-white space-y-5">
          <div className="border-b border-neutral-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-neutral-400">
                TIER {selectedTier.number} SPECIFICATION
              </span>
              <span className={`rounded px-2 py-0.5 font-mono text-[10px] font-bold border ${selectedTier.tagColor}`}>
                {selectedTier.badge}
              </span>
            </div>
            <h4 className="mt-1 text-lg sm:text-xl font-bold text-neutral-950">
              {selectedTier.name}
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {selectedTier.description}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          <div className="space-y-2">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-950">
              Implementation Highlights
            </div>
            <div className="space-y-2">
              {selectedTier.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="pt-4 border-t border-neutral-100">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-950 mb-2">
              Technologies & Standards
            </div>
            <div className="flex flex-wrap gap-1.5">
              {selectedTier.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 font-mono text-xs text-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
