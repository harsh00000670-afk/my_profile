import React, { useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Zap,
  Layers,
  FolderTree,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Smartphone,
  Cpu,
} from 'lucide-react';
import { FileTreeViewer } from './FileTreeViewer';
import { AuditScoresSection } from './AuditScoresSection';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { SuitesCatalog } from './SuitesCatalog';

interface QuickSolveDeepDiveProps {
  onBack: () => void;
}

export function QuickSolveDeepDive({ onBack }: QuickSolveDeepDiveProps) {
  const structureRef = useRef<HTMLDivElement>(null);
  const auditRef = useRef<HTMLDivElement>(null);
  const architectureRef = useRef<HTMLDivElement>(null);
  const suitesRef = useRef<HTMLDivElement>(null);

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
          <div className="flex items-center gap-4">
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
                HARSH // QUICKSOLVE PLATINUM
              </span>
              <span className="rounded bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-600 font-semibold border border-neutral-200">
                DEEP-DIVE
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://quicksolve-platinum.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-950 px-3.5 py-1.5 font-mono text-xs font-medium text-white hover:bg-neutral-800 transition-colors shadow-2xs"
            >
              <span>Visit Live App</span>
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
              3-Tier Architecture
            </button>
            <button
              onClick={() => scrollTo(structureRef)}
              className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 shrink-0 transition-colors"
            >
              Repository Structure (.git excluded)
            </button>
            <button
              onClick={() => scrollTo(auditRef)}
              className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 shrink-0 transition-colors"
            >
              Lighthouse &amp; Google SEO
            </button>
            <button
              onClick={() => scrollTo(suitesRef)}
              className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 shrink-0 transition-colors"
            >
              Calculator Catalog (96+ Tools)
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
            <span>CASE STUDY // PRODUCTION SPECIFICATION &amp; CODEBASE AUDIT</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl">
                QuickSolve Platinum
              </h1>
              <p className="mt-3 text-lg text-neutral-600 leading-relaxed font-light">
                An ultra-performant Progressive Web App (PWA) housing over 96+ precision calculation utilities spanning 11 specialized financial, mathematical, engineering, and biometrics suites. Built with vanilla zero-overhead architecture, delivering sub-second edge loads and 100/100 Lighthouse ratings.
              </p>
            </div>

            {/* Quick Metrics Badge Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono shrink-0">
              <div className="rounded-lg border border-neutral-200 bg-neutral-50/80 p-3 text-center">
                <div className="text-2xl font-extrabold text-neutral-950">96+</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider mt-0.5">Calculators</div>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-neutral-50/80 p-3 text-center">
                <div className="text-2xl font-extrabold text-neutral-950">11</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider mt-0.5">Suites</div>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-neutral-50/80 p-3 text-center">
                <div className="text-2xl font-extrabold text-neutral-950">100</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider mt-0.5">Lighthouse SEO</div>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-neutral-50/80 p-3 text-center">
                <div className="text-2xl font-extrabold text-neutral-950">100%</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider mt-0.5">Client-Side</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: 3-Tier Multi-Page Architecture */}
        <section ref={architectureRef} className="pt-6">
          <ArchitectureDiagram />
        </section>

        {/* Section 2: Repository Structure Box (.git excluded) */}
        <section ref={structureRef} className="pt-6 space-y-4">
          <div className="border-b border-neutral-200 pb-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <FolderTree className="h-3.5 w-3.5 text-neutral-900" />
              <span>FILE REPOSITORY HIERARCHY</span>
            </div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
              Clean Project File Tree (.git Excluded)
            </h3>
            <p className="mt-2 text-sm text-neutral-600 max-w-2xl">
              Complete production directory structure verified from project source files, detailing the hub layout, sub-directories, audio assets, and typography modules.
            </p>
          </div>

          <FileTreeViewer />
        </section>

        {/* Section 3: Lighthouse & Google SEO Audit */}
        <section ref={auditRef} className="pt-6">
          <AuditScoresSection />
        </section>

        {/* Section 4: Suites Directory (96+ Tools) */}
        <section ref={suitesRef} className="pt-6">
          <SuitesCatalog />
        </section>

        {/* Bottom CTA / Back */}
        <section className="border-t border-neutral-200 pt-10 pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 font-mono text-xs font-semibold text-neutral-900 hover:bg-neutral-50 transition-colors shadow-2xs"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Return to Main Portfolio</span>
            </button>
            <span className="text-xs text-neutral-500 font-mono hidden sm:inline">
              Harsh // Engineering Case Studies
            </span>
          </div>

          <a
            href="https://quicksolve-platinum.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-950 px-5 py-2 font-mono text-xs font-medium text-white hover:bg-neutral-800 transition-colors shadow-xs"
          >
            <span>Launch QuickSolve Platinum Live</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </section>
      </main>
    </div>
  );
}
