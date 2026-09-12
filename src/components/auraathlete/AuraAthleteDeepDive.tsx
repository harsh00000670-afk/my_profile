import React, { useRef } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Shield,
  Activity,
  Award,
  Layers,
  Terminal,
  Zap,
  CheckCircle2,
  Calendar,
  Sparkles,
  Smartphone,
  Globe,
} from 'lucide-react';
import { GymFileTreeViewer } from './GymFileTreeViewer';
import { VipBookingSimulator } from './VipBookingSimulator';
import { GymPagesShowcase } from './GymPagesShowcase';
import { GymArchitectureDiagram } from './GymArchitectureDiagram';
import { GymAuditSection } from './GymAuditSection';

interface AuraAthleteDeepDiveProps {
  onBack: () => void;
}

export function AuraAthleteDeepDive({ onBack }: AuraAthleteDeepDiveProps) {
  const treeRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  const pagesRef = useRef<HTMLDivElement>(null);
  const archRef = useRef<HTMLDivElement>(null);
  const auditRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-[100dvh] w-full bg-neutral-50/50 text-neutral-900 overflow-x-hidden">
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-mono font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 transition-colors shadow-2xs"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>PORTFOLIO</span>
            </button>
            <div className="h-4 w-px bg-neutral-200" />
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-neutral-900 tracking-wider">
                AURA ATHLETIC CLUB
              </span>
              <span className="hidden sm:inline-block rounded bg-amber-100 border border-amber-300 px-2 py-0.5 text-[10px] font-mono font-semibold text-amber-900">
                CASE STUDY
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://aura-athlete.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-950 px-3.5 py-1.5 text-xs font-mono font-bold text-white hover:bg-neutral-800 transition-colors shadow-2xs"
            >
              <span>LIVE SITE</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        {/* Project Hero Header */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="rounded bg-neutral-900 px-2.5 py-1 text-white font-semibold">
              PROJECT 01 // ARCHITECTURE REVIEW
            </span>
            <span className="rounded bg-amber-100 border border-amber-300 px-2.5 py-1 text-amber-900 font-semibold">
              ATHLETIC & RECOVERY SANCTUARY
            </span>
            <span className="rounded bg-emerald-100 border border-emerald-300 px-2.5 py-1 text-emerald-900 font-semibold">
              {/* FIX #14: Toned down from marketing claim to accurate description */}
              MOBILE VIEWPORT OPTIMIZED
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight">
              AURA ATHLETIC CLUB
            </h1>
            {/*
              FIX: Removed "Olympic biomechanics with precision longevity telemetry" — overclaiming
              FIX #5: "interactive VIP consultation booking" → "interactive VIP booking flow"
            */}
            <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed font-sans">
              A multi-page athletic club and recovery sanctuary website showcasing membership tiers, recovery protocols, global flagship locations, and an interactive VIP booking flow. Built as a 7-page client-side SPA with zero mobile viewport jumping.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 font-mono text-xs">
            <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-2xs">
              <span className="text-[10px] text-neutral-400 uppercase block font-semibold">
                Architecture
              </span>
              <span className="text-sm sm:text-base font-bold text-neutral-950 mt-0.5 block">
                React 19 + Vite 6
              </span>
              <span className="text-[10px] text-neutral-500 mt-1 block">7-Page SPA</span>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-2xs">
              {/* FIX #5 & #9: "VIP Concierge Pipeline" → "VIP Booking Flow" */}
              <span className="text-[10px] text-neutral-400 uppercase block font-semibold">
                VIP Booking Flow
              </span>
              <span className="text-sm sm:text-base font-bold text-amber-700 mt-0.5 block">
                WhatsApp Dispatch
              </span>
              <span className="text-[10px] text-neutral-500 mt-1 block">VipBookingModal.tsx</span>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-2xs">
              <span className="text-[10px] text-neutral-400 uppercase block font-semibold">
                {/* FIX #12: "Global Flagships" is site content, fine to keep as-is */}
                Global Flagships
              </span>
              <span className="text-sm sm:text-base font-bold text-neutral-950 mt-0.5 block">
                4 Locations
              </span>
              <span className="text-[10px] text-neutral-500 mt-1 block">NYC · LDN · TYO · DXB</span>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-2xs">
              {/* FIX #13: "Core Web Vitals 99/100" → cleaner label */}
              <span className="text-[10px] text-neutral-400 uppercase block font-semibold">
                Lighthouse Score
              </span>
              <span className="text-sm sm:text-base font-bold text-emerald-600 mt-0.5 block">
                Performance 99
              </span>
              <span className="text-[10px] text-neutral-500 mt-1 block">0.000 CLS · 0ms TBT</span>
            </div>
          </div>

          {/* Interactive Jump Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
            <span className="text-neutral-400 font-semibold uppercase text-[11px] mr-1">
              Jump To:
            </span>
            <button
              onClick={() => scrollToSection(treeRef)}
              className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 transition-colors shadow-2xs"
            >
              FILE TREE (24 Files)
            </button>
            <button
              onClick={() => scrollToSection(bookingRef)}
              className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 transition-colors shadow-2xs"
            >
              {/* FIX #23: "VIP Booking Simulation" is honest */}
              VIP BOOKING SIMULATOR
            </button>
            <button
              onClick={() => scrollToSection(pagesRef)}
              className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 transition-colors shadow-2xs"
            >
              7-PAGE SHOWCASE
            </button>
            <button
              onClick={() => scrollToSection(archRef)}
              className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 transition-colors shadow-2xs"
            >
              {/* FIX #6: "4-TIER PIPELINE" → "4-LAYER ARCHITECTURE" */}
              4-LAYER ARCHITECTURE
            </button>
            <button
              onClick={() => scrollToSection(auditRef)}
              className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 transition-colors shadow-2xs"
            >
              LIGHTHOUSE AUDIT
            </button>
          </div>
        </section>

        {/* SECTION 1: Codebase Explorer & File Tree */}
        <section ref={treeRef} className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-neutral-400 uppercase">
              MODULE 01 // CODEBASE EXPLORER
            </span>
          </div>
          <GymFileTreeViewer />
        </section>

        {/* SECTION 2: VIP Booking Simulator */}
        <section ref={bookingRef} className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-neutral-400 uppercase">
              {/* FIX #5 & #9: "VIP CONCIERGE & RESERVATION ENGINE" → "VIP BOOKING FLOW SIMULATOR" */}
              MODULE 02 // VIP BOOKING FLOW SIMULATOR
            </span>
          </div>
          <VipBookingSimulator />
        </section>

        {/* SECTION 3: 7-Page Multi-Page Showcase */}
        <section ref={pagesRef} className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-neutral-400 uppercase">
              MODULE 03 // 7 CORE ARCHITECTURAL PAGES
            </span>
          </div>
          <GymPagesShowcase />
        </section>

        {/* SECTION 4: 4-Layer Architecture */}
        <section ref={archRef} className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-neutral-400 uppercase">
              {/* FIX #6: "4-TIER FULL STACK PIPELINE" → "4-LAYER FRONTEND ARCHITECTURE" */}
              MODULE 04 // 4-LAYER FRONTEND ARCHITECTURE
            </span>
          </div>
          <GymArchitectureDiagram />
        </section>

        {/* SECTION 5: Lighthouse & Core Web Vitals Audit */}
        <section ref={auditRef} className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-neutral-400 uppercase">
              MODULE 05 // PERFORMANCE &amp; MOBILE VIEWPORT AUDIT
            </span>
          </div>
          <GymAuditSection />
        </section>

        {/* Bottom Navigation Return */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-6 py-3 font-mono text-xs font-bold text-white hover:bg-neutral-800 transition-colors shadow-xs"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>RETURN TO PORTFOLIO</span>
          </button>

          <span className="font-mono text-xs text-neutral-400">
            AURA Athletic Club · Architecture Case Study · Mobile Viewport Compliant
          </span>
        </div>
      </main>
    </div>
  );
}