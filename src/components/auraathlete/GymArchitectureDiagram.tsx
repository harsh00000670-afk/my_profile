import React from 'react';
import {
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Smartphone,
  Server,
  Lock,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

export function GymArchitectureDiagram() {
  const tiers = [
    {
      step: '01',
      title: 'Biometric Sensory UI Layer',
      badge: 'React 19 + Tailwind CSS',
      icon: Smartphone,
      accent: 'border-neutral-950 bg-neutral-50',
      description:
        'Tactile dark aesthetic with Hanken Grotesk display typography, strict 100dvh viewport bounds (preventing Chrome/Safari mobile address bar jumps), and zero horizontal overflow.',
      bullets: [
        'Strict 100dvh viewport normalization',
        'Tailwind CSS design tokens & sub-zero palette',
        'Fully accessible WCAG AA contrast',
      ],
    },
    {
      step: '02',
      title: '7-Page SPA State Router',
      badge: 'Client-Side State Engine',
      icon: Layers,
      accent: 'border-amber-400 bg-amber-50/40',
      description:
        'Seamless hash & state switching across 7 functional pages (Overview, Membership, Protocols, Spaces, Trainers, Flagships, Science) without DOM flashing or page unmounts.',
      bullets: [
        'Sub-10ms page transition latency',
        'Shared immutable gymData.ts state store',
        'Zero layout shifting during page navigation',
      ],
    },
    {
      step: '03',
      title: 'VIP Concierge & Booking Engine',
      badge: 'VipBookingModal.tsx Pipeline',
      icon: MessageSquare,
      accent: 'border-emerald-500 bg-emerald-50/40',
      description:
        'Direct consultation dispatch connecting prospective members with private concierges across NYC, London, Tokyo & Dubai using URI-encoded payloads and WhatsApp protocol hooks.',
      bullets: [
        'Zero-backend serverless lead capture',
        'Direct wa.me protocol hook & auto-formatted text',
        'Tier, location, and biomarker goal verification',
      ],
    },
    {
      step: '04',
      title: 'Vercel Global Edge Network',
      badge: 'Vite 6 + Bun Lockfile',
      icon: Globe,
      accent: 'border-blue-500 bg-blue-50/40',
      description:
        'Deployed to Vercel global edge nodes with Brotli compression, instant cache invalidation, and sub-40ms Time to First Byte (TTFB) globally.',
      bullets: [
        'High-speed Bun deterministic dependency locks',
        'Vite 6 tree-shaking & ESM code splitting',
        'Immutable edge CDN distribution',
      ],
    },
  ];

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white shadow-xs overflow-hidden">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 bg-neutral-50/80 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-neutral-900" />
          <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-950">
            SYSTEM ARCHITECTURE // 4-TIER FULL STACK PIPELINE
          </h3>
        </div>
        <span className="inline-flex items-center gap-1 rounded bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-600 font-semibold border border-neutral-200">
          Deterministic Flow
        </span>
      </div>

      {/* Grid of 4 Tiers */}
      <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tiers.map((tier, idx) => {
          const Icon = tier.icon;
          return (
            <div
              key={tier.step}
              className={`rounded-xl border p-4 sm:p-5 flex flex-col justify-between transition-all ${tier.accent}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-neutral-400">
                    PHASE {tier.step}
                  </span>
                  <div className="h-7 w-7 rounded-md bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shadow-2xs">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                </div>

                <h4 className="font-mono text-sm font-bold text-neutral-950 mb-1">
                  {tier.title}
                </h4>
                <span className="inline-block rounded bg-white px-2 py-0.5 font-mono text-[10px] font-semibold text-neutral-700 border border-neutral-200 mb-3 shadow-2xs">
                  {tier.badge}
                </span>

                <p className="text-xs text-neutral-600 leading-relaxed font-sans mb-4">
                  {tier.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200/60 space-y-1.5 font-mono text-[11px] text-neutral-700">
                {tier.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <div className="h-1 w-1 rounded-full bg-neutral-900 mt-1.5 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
