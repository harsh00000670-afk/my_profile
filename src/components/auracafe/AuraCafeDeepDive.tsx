import React, { useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Coffee,
  Layers,
  FolderTree,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Smartphone,
  Phone,
  Sparkles,
} from 'lucide-react';
import { CafeFileTreeViewer } from './CafeFileTreeViewer';
import { CafeArchitectureDiagram } from './CafeArchitectureDiagram';
import { WhatsAppBookingEngine } from './WhatsAppBookingEngine';
import { CafeMenuShowcase } from './CafeMenuShowcase';
import { CafeAuditSection } from './CafeAuditSection';
import { WHATSAPP_DISPLAY_PHONE } from '../../data/cafeArchitecture';

interface AuraCafeDeepDiveProps {
  onBack: () => void;
}

export function AuraCafeDeepDive({ onBack }: AuraCafeDeepDiveProps) {
  const architectureRef = useRef<HTMLDivElement>(null);
  const fileTreeRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const auditRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-[100dvh] w-full bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white overflow-x-hidden">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 font-mono text-xs font-semibold text-neutral-800 hover:bg-neutral-50 hover:text-neutral-950 transition-colors shadow-2xs"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Portfolio</span>
            </button>

            <div className="h-4 w-px bg-neutral-200 hidden sm:block" />

            <div className="hidden sm:flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-950">
                HARSH // AURA CAFE ATELIER
              </span>
              <span className="rounded bg-amber-100 px-2 py-0.5 font-mono text-[10px] text-amber-900 font-semibold border border-amber-300">
                ARCHITECTURE &amp; WHATSAPP ENGINE
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://auracafes.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-950 px-3.5 py-1.5 font-mono text-xs font-medium text-white hover:bg-neutral-800 transition-colors shadow-2xs"
            >
              <span>Visit Live Cafe</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Section Navigation Quick Jump Pills */}
        <div className="border-t border-neutral-100 bg-neutral-50/70 px-4 py-2 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto text-xs font-mono no-scrollbar">
            <span className="text-neutral-400 text-[11px] font-semibold mr-1 shrink-0">
              JUMP TO:
            </span>
            <button
              onClick={() => scrollTo(architectureRef)}
              className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 shrink-0 transition-colors"
            >
              4-Tier Architecture
            </button>
            <button
              onClick={() => scrollTo(fileTreeRef)}
              className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 shrink-0 transition-colors"
            >
              Repository Structure (.git excluded)
            </button>
            <button
              onClick={() => scrollTo(bookingRef)}
              className="rounded-md border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-emerald-800 font-semibold hover:bg-emerald-100 shrink-0 transition-colors"
            >
              WhatsApp Reservation Engine
            </button>
            <button
              onClick={() => scrollTo(menuRef)}
              className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 shrink-0 transition-colors"
            >
              Sensory Menu (16 Items)
            </button>
            <button
              onClick={() => scrollTo(auditRef)}
              className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 shrink-0 transition-colors"
            >
              Lighthouse &amp; Operating Hours
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 font-mono text-xs text-neutral-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>CASE STUDY // PRODUCTION SPECIFICATION &amp; WHATSAPP ARCHITECTURE</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950">
                Aura Cafe — Artisanal Roastery
              </h1>
              <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed font-light">
                An unhurried digital sanctuary engineered with React 19, tactile EB Garamond typography, and a direct serverless WhatsApp concierge booking pipeline. Features real-time operating status calculation, 16 single-origin extractions &amp; French pastries, and sub-second edge distribution on Netlify.
              </p>
            </div>

            {/* Quick Metrics Badge Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono shrink-0">
              <div className="rounded-lg border border-neutral-200 bg-neutral-50/80 p-3 text-center">
                <div className="text-2xl font-extrabold text-neutral-950">20</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider mt-0.5">Files (.git out)</div>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-neutral-50/80 p-3 text-center">
                <div className="text-2xl font-extrabold text-neutral-950">16</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider mt-0.5">Creations</div>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-neutral-50/80 p-3 text-center">
                <div className="text-2xl font-extrabold text-emerald-600">WhatsApp</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider mt-0.5">{WHATSAPP_DISPLAY_PHONE}</div>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-neutral-50/80 p-3 text-center">
                <div className="text-2xl font-extrabold text-emerald-600">99</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider mt-0.5">Lighthouse</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: 4-Tier Architecture Diagram */}
        <section ref={architectureRef} className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-neutral-900" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-950">
              01 // 4-TIER TECHNICAL ARCHITECTURE
            </h2>
          </div>
          <CafeArchitectureDiagram />
        </section>

        {/* Section 2: Repository Structure & File Tree Viewer */}
        <section ref={fileTreeRef} className="space-y-4">
          <div className="flex items-center gap-2">
            <FolderTree className="h-4 w-4 text-neutral-900" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-950">
              02 // COMPLETE REPOSITORY STRUCTURE (CAFE_LANDING_PAGE, .GIT EXCLUDED)
            </h2>
          </div>
          <CafeFileTreeViewer />
        </section>

        {/* Section 3: Interactive WhatsApp Booking Engine */}
        <section ref={bookingRef} className="space-y-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-emerald-600" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-950">
              03 // DIRECT WHATSAPP TABLE RESERVATION PIPELINE (LIVE SIMULATOR)
            </h2>
          </div>
          <WhatsAppBookingEngine />
        </section>

        {/* Section 4: Artisanal Menu & Atelier Catalog */}
        <section ref={menuRef} className="space-y-4">
          <div className="flex items-center gap-2">
            <Coffee className="h-4 w-4 text-neutral-900" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-950">
              04 // SENSORY MENU &amp; WHATSAPP PRE-ORDER CATALOG (16 LIVE CREATIONS)
            </h2>
          </div>
          <CafeMenuShowcase />
        </section>

        {/* Section 5: Lighthouse & Operating Schedule */}
        <section ref={auditRef} className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-950">
              05 // LIGHTHOUSE SCORES, REAL-TIME STATUS HOOK &amp; EDGE AUDIT
            </h2>
          </div>
          <CafeAuditSection />
        </section>

        {/* Bottom Navigation Callout */}
        <section className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-mono text-sm font-bold text-neutral-950">
              Ready to explore other projects?
            </h3>
            <p className="text-xs text-neutral-600 mt-1 font-sans">
              Return to Harsh&apos;s primary software engineering portfolio to review QuickSolve Platinum and AURA Athletic Club.
            </p>
          </div>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-950 px-4 py-2 font-mono text-xs font-semibold text-white hover:bg-neutral-800 transition-colors shadow-2xs self-start sm:self-auto shrink-0"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Portfolio Overview</span>
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-8 text-center text-xs font-mono text-neutral-500">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>Harsh // AI-Augmented Software Engineer</span>
          <span>Aura Cafe Production Architecture Case Study</span>
          <button onClick={onBack} className="hover:text-neutral-950 underline transition-colors">
            Return to Top ↑
          </button>
        </div>
      </footer>
    </div>
  );
}
