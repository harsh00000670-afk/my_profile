import React, { useState } from 'react';
import { ExternalLink, Eye, Copy, Check, Sparkles, Layers, ShieldCheck, ArrowRight, FolderTree } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenPreview: (project: Project) => void;
  onOpenDeepDive?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenPreview, onOpenDeepDive }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(project.liveUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Specific visual styling accents for each site's preview showcase
  const isAuraAthlete = project.id === 'aura-athlete';
  const isQuickSolve = project.id === 'quicksolve-platinum';
  const isAuraCafes = project.id === 'aura-cafes';

  return (
    <article
      id={`project-${project.id}`}
      className="group relative w-full max-w-full rounded-xl border border-neutral-200 bg-white p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-neutral-900 hover:shadow-lg overflow-hidden"
    >
      {/* Top Architectural Metadata Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 border-b border-neutral-100 pb-3 sm:pb-4 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="rounded bg-neutral-900 px-2 py-0.5 font-bold text-white text-[11px]">
            {project.indexNumber}
          </span>
          <span className="text-neutral-400">/</span>
          <span className="text-neutral-600 font-medium uppercase text-[11px] sm:text-xs">{project.category}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/80 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {project.status}
          </span>
          <span className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[10px] sm:text-[11px] text-neutral-600">
            {project.platform}
          </span>
        </div>
      </div>

      {/* Title & Tagline */}
      <div className="mt-5 sm:mt-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 group-hover:text-black break-words">
            {project.title}
          </h3>
          <p className="mt-1.5 sm:mt-2 text-sm sm:text-base font-medium text-neutral-700">
            {project.tagline}
          </p>
        </div>

        {/* Live URL Readout & Quick Actions - Mobile Responsive Wrapping Grid */}
        <div className="flex flex-wrap items-center gap-2 pt-1 sm:pt-0 w-full md:w-auto shrink-0">
          <button
            onClick={handleCopy}
            title={`Copy ${project.displayUrl}`}
            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-50 px-2.5 sm:px-3 py-2 font-mono text-xs font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-white hover:text-neutral-950 active:scale-95 shrink-0"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-neutral-400" />
                <span className="inline">Copy Link</span>
              </>
            )}
          </button>

          {(isQuickSolve || isAuraCafes || isAuraAthlete) && onOpenDeepDive && (
            <button
              onClick={onOpenDeepDive}
              title="Inspect Full Codebase Architecture, File Tree & Audits"
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-neutral-900 bg-white px-3 py-2 font-mono text-xs font-bold text-neutral-950 transition-all hover:bg-neutral-900 hover:text-white shadow-2xs active:scale-95 shrink-0"
            >
              <FolderTree className="h-3.5 w-3.5" />
              <span>DEEP REVIEW</span>
            </button>
          )}

          <button
            onClick={() => onOpenPreview(project)}
            title="Open Interactive Simulator"
            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-neutral-300 bg-white px-3 py-2 font-mono text-xs font-semibold text-neutral-800 transition-all hover:border-neutral-900 hover:text-neutral-950 active:scale-95 shrink-0"
          >
            <Eye className="h-3.5 w-3.5 text-neutral-500" />
            <span>Simulator</span>
          </button>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open Live Site in New Tab"
            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-neutral-900 bg-neutral-950 px-3.5 py-2 font-mono text-xs font-semibold text-white transition-all hover:bg-neutral-800 active:scale-95 shrink-0"
          >
            <span>VISIT LIVE</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
        {project.description}
      </p>

      {/* Simulated Live UI Preview Canvas */}
      <div className="mt-5 sm:mt-6 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50/60 p-3 sm:p-4 transition-colors group-hover:border-neutral-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-neutral-200/80 pb-2.5 font-mono text-[11px] text-neutral-500">
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-semibold text-neutral-700 shrink-0">URL:</span>
            <span className="text-neutral-900 font-medium underline underline-offset-2 truncate break-all">
              {project.displayUrl}
            </span>
          </div>
          <span className="text-[10px] text-neutral-400 shrink-0">EDGE CDN · SECURE PROTOCOL</span>
        </div>

        {/* Customized Visual Mock of Each Unique Project */}
        <div className="mt-3 rounded-md border border-neutral-200 bg-white p-3 sm:p-5">
          {isAuraAthlete && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-900">
                  AURA ATHLETIC CLUB // 7-PAGE HIGH-PERFORMANCE SANCTUARY
                </span>
                <span className="rounded bg-neutral-900 px-2 py-0.5 font-mono text-[10px] text-white">
                  VERCEL EDGE LIVE
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="rounded border border-neutral-100 bg-neutral-50 p-3">
                  <div className="font-mono text-[10px] text-neutral-500 uppercase">Architecture</div>
                  <div className="font-semibold text-sm text-neutral-900 mt-1">7 Multi-Page Tabs</div>
                  <div className="text-[10px] font-mono text-neutral-500 mt-0.5">Overview · Science · Protocols</div>
                </div>
                <div className="rounded border border-neutral-100 bg-neutral-50 p-3">
                  <div className="font-mono text-[10px] text-neutral-500 uppercase">Recovery Suites</div>
                  <div className="font-semibold text-sm text-neutral-900 mt-1">Sub-Zero Cryo &amp; HBOT</div>
                  <div className="text-[10px] font-mono text-neutral-500 mt-0.5">-110°C &amp; 2.0 ATA Pressure</div>
                </div>
                <div className="rounded border border-neutral-100 bg-neutral-50 p-3">
                  <div className="font-mono text-[10px] text-neutral-500 uppercase">VIP Concierge Engine</div>
                  <div className="font-semibold text-sm text-neutral-900 mt-1">Direct WhatsApp Booking</div>
                  <div className="text-[10px] font-mono text-neutral-500 mt-0.5">VipBookingModal.tsx</div>
                </div>
              </div>
            </div>
          )}

          {isQuickSolve && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-900">
                  QUICKSOLVE PLATINUM // MULTI-CALCULATOR SUITE
                </span>
                <span className="rounded bg-neutral-900 px-2 py-0.5 font-mono text-[10px] text-white">
                  NETLIFY LIVE
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="rounded border border-neutral-100 bg-neutral-50 p-3">
                  <div className="font-mono text-[10px] text-neutral-500 uppercase">Finance Tools</div>
                  <div className="font-semibold text-sm text-neutral-900 mt-1">GST & Loan EMI Suite</div>
                </div>
                <div className="rounded border border-neutral-100 bg-neutral-50 p-3">
                  <div className="font-mono text-[10px] text-neutral-500 uppercase">Dev Toolkit</div>
                  <div className="font-semibold text-sm text-neutral-900 mt-1">Base, JSON & Epoch</div>
                </div>
                <div className="rounded border border-neutral-100 bg-neutral-50 p-3">
                  <div className="font-mono text-[10px] text-neutral-500 uppercase">Speed & UX</div>
                  <div className="font-semibold text-sm text-neutral-900 mt-1">Offline PWA & Voice</div>
                </div>
              </div>

              {onOpenDeepDive && (
                <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-lg border border-neutral-200 bg-white p-3 font-mono text-xs">
                  <div className="text-neutral-600">
                    <span className="font-bold text-neutral-950">Codebase Specification:</span> 96+ tools, repository file tree (.git excluded), Lighthouse mobile &amp; laptop audit scores.
                  </div>
                  <button
                    onClick={onOpenDeepDive}
                    className="inline-flex items-center gap-1.5 rounded bg-neutral-900 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-neutral-800 transition-colors shrink-0"
                  >
                    <span>Inspect Deep Review</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              )}
            </div>
          )}

          {isAuraCafes && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-900 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  AURA CAFE // DIRECT WHATSAPP CONCIERGE &amp; SENSORY MENU
                </span>
                <span className="rounded bg-emerald-100 px-2 py-0.5 font-mono text-[10px] text-emerald-800 font-bold border border-emerald-300">
                  WA: +91 9219143734
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="rounded border border-neutral-100 bg-neutral-50 p-3">
                  <div className="font-mono text-[10px] text-neutral-500 uppercase">Direct Booking</div>
                  <div className="font-semibold text-sm text-neutral-900 mt-1">WhatsApp Concierge</div>
                  <div className="text-[11px] text-neutral-500 font-mono mt-0.5">Name, Phone &amp; Notes</div>
                </div>
                <div className="rounded border border-neutral-100 bg-neutral-50 p-3">
                  <div className="font-mono text-[10px] text-neutral-500 uppercase">16 Live Creations</div>
                  <div className="font-semibold text-sm text-neutral-900 mt-1">Artisanal Catalog</div>
                  <div className="text-[11px] text-neutral-500 font-mono mt-0.5">Roasts, Pastries &amp; Cold Brew</div>
                </div>
                <div className="rounded border border-neutral-100 bg-neutral-50 p-3">
                  <div className="font-mono text-[10px] text-neutral-500 uppercase">Operating Hours</div>
                  <div className="font-semibold text-sm text-neutral-900 mt-1">useCafeStatus Hook</div>
                  <div className="text-[11px] text-neutral-500 font-mono mt-0.5">30s Heartbeat Timer</div>
                </div>
              </div>
            </div>
          )}

          {/* Direct Trigger to Open Simulator */}
          <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <span className="text-neutral-500 font-mono text-[11px]">
              Ready to interact? Experience the live build directly:
            </span>
            <button
              onClick={() => onOpenPreview(project)}
              className="group/btn inline-flex items-center gap-1 font-mono text-xs font-semibold text-neutral-950 hover:underline shrink-0"
            >
              <span>Launch Device Inspector</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="mt-6">
        <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Key Architecture & Implementation
        </h4>
        <ul className="mt-3 space-y-2">
          {project.keyHighlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-950 shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Chips */}
      <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-neutral-100">
        <span className="font-mono text-[11px] text-neutral-400 mr-1">STACK:</span>
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 font-mono text-[11px] font-medium text-neutral-800"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};
