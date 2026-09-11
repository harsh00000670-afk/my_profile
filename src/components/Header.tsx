import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/projects';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  onOpenQuickSolveReview?: () => void;
  onOpenAuraCafeReview?: () => void;
  onOpenAuraAthleteReview?: () => void;
  onHomeClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuickSolveReview,
  onOpenAuraCafeReview,
  onOpenAuraAthleteReview,
  onHomeClick,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 w-full border-b border-neutral-200/80 bg-white/90 backdrop-blur-md transition-all"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Monogram / Brand Logo */}
        <button
          onClick={onHomeClick}
          id="brand-logo-link"
          className="group flex items-center gap-2.5 text-neutral-900 transition-opacity hover:opacity-80 text-left"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300 bg-white shadow-2xs p-0.5 shrink-0">
            <img src="/logo.svg" alt="HV Logo" className="h-full w-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-neutral-950 uppercase">
              Harsh // Dev
            </span>
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
              QuickSolve · 2026
            </span>
          </div>
        </button>

        {/* Live Availability Status */}
        <div
          id="availability-status"
          className="hidden md:flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50/80 px-3 py-1 text-xs text-neutral-700"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[11px] font-medium tracking-tight">
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        {/* Navigation & Action */}
        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="hidden sm:flex items-center gap-1 font-mono text-xs text-neutral-600">
            <a
              href="#projects"
              id="nav-link-projects"
              className="rounded-md px-3 py-1.5 hover:bg-neutral-100 hover:text-neutral-950 transition-colors"
            >
              PROJECTS [3]
            </a>
            {onOpenQuickSolveReview && (
              <button
                onClick={onOpenQuickSolveReview}
                id="nav-link-deep-review"
                className="rounded-md px-2.5 py-1.5 text-neutral-900 font-semibold bg-neutral-100 hover:bg-neutral-200 transition-colors flex items-center gap-1.5"
              >
                <span>QUICKSOLVE</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </button>
            )}
            {onOpenAuraAthleteReview && (
              <button
                onClick={onOpenAuraAthleteReview}
                id="nav-link-athlete-review"
                className="rounded-md px-2.5 py-1.5 text-neutral-900 font-semibold bg-neutral-100 hover:bg-neutral-200 transition-colors flex items-center gap-1.5"
              >
                <span>AURA ATHLETE</span>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              </button>
            )}
            {onOpenAuraCafeReview && (
              <button
                onClick={onOpenAuraCafeReview}
                id="nav-link-cafe-review"
                className="rounded-md px-2.5 py-1.5 text-neutral-900 font-semibold bg-amber-50 border border-amber-200/80 hover:bg-amber-100 transition-colors flex items-center gap-1.5"
              >
                <span>AURA CAFE</span>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              </button>
            )}
            <a
              href="#tools"
              id="nav-link-tools"
              className="rounded-md px-3 py-1.5 hover:bg-neutral-100 hover:text-neutral-950 transition-colors"
            >
              TOOLS
            </a>
            <a
              href="#workflow"
              id="nav-link-workflow"
              className="rounded-md px-3 py-1.5 hover:bg-neutral-100 hover:text-neutral-950 transition-colors"
            >
              WORKFLOW
            </a>
            <a
              href="#about"
              id="nav-link-about"
              className="rounded-md px-3 py-1.5 hover:bg-neutral-100 hover:text-neutral-950 transition-colors"
            >
              ABOUT
            </a>
          </nav>

          {/* PWA App Install / Share Button */}
          <PWAInstallButton />

          {/* Direct Email Action */}
          <button
            id="header-email-btn"
            onClick={handleCopyEmail}
            title={`Copy ${DEVELOPER_PROFILE.email}`}
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-900 bg-neutral-950 px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-neutral-800 active:scale-95"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="font-mono text-[11px]">COPIED</span>
              </>
            ) : (
              <>
                <Mail className="h-3.5 w-3.5 text-neutral-400" />
                <span className="font-mono text-[11px]">CONTACT</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
