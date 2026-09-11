import React, { useState } from 'react';
import { AUDIT_SCORES, CORE_WEB_VITALS } from '../../data/quicksolveArchitecture';
import {
  Laptop,
  Smartphone,
  CheckCircle2,
  Search,
  Zap,
  ShieldCheck,
  Eye,
  FileCheck,
  TrendingUp,
  Cpu,
  Globe,
} from 'lucide-react';

export function AuditScoresSection() {
  const [deviceTab, setDeviceTab] = useState<'both' | 'laptop' | 'mobile'>('both');

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <Zap className="h-3.5 w-3.5 text-neutral-900" />
            <span>LIGHTHOUSE BENCHMARKS & GOOGLE SEO</span>
          </div>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
            Audit Scores & Performance Verification
          </h3>
          <p className="mt-2 text-sm text-neutral-600 max-w-2xl">
            Independent automated audit results across Desktop (Laptop) and Mobile viewports verifying sub-second load times, complete a11y compliance, and Google Search Console indexing.
          </p>
        </div>

        {/* Viewport Filter Toggle */}
        <div className="flex items-center gap-1 rounded-lg border border-neutral-200 bg-neutral-50 p-1 font-mono text-xs">
          <button
            onClick={() => setDeviceTab('both')}
            className={`rounded-md px-3 py-1.5 font-medium transition-all ${
              deviceTab === 'both' ? 'bg-white text-neutral-950 shadow-xs' : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Comparative [All]
          </button>
          <button
            onClick={() => setDeviceTab('laptop')}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-medium transition-all ${
              deviceTab === 'laptop' ? 'bg-white text-neutral-950 shadow-xs' : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <Laptop className="h-3.5 w-3.5" />
            <span>Laptop</span>
          </button>
          <button
            onClick={() => setDeviceTab('mobile')}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-medium transition-all ${
              deviceTab === 'mobile' ? 'bg-white text-neutral-950 shadow-xs' : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <Smartphone className="h-3.5 w-3.5" />
            <span>Mobile</span>
          </button>
        </div>
      </div>

      {/* Main Comparative Score Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Performance */}
        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Zap className="h-4 w-4" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
                  PERFORMANCE
                </span>
              </div>
              <span className="rounded bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-800">
                OPTIMAL
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 border-y border-neutral-100 py-3">
              {(deviceTab === 'both' || deviceTab === 'laptop') && (
                <div className={deviceTab === 'laptop' ? 'col-span-2' : ''}>
                  <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[11px]">
                    <Laptop className="h-3 w-3" />
                    <span>Laptop / Desktop</span>
                  </div>
                  <div className="mt-1 text-3xl font-extrabold text-neutral-950 font-mono">
                    98<span className="text-sm font-normal text-neutral-400">/100</span>
                  </div>
                </div>
              )}

              {(deviceTab === 'both' || deviceTab === 'mobile') && (
                <div className={deviceTab === 'mobile' ? 'col-span-2' : ''}>
                  <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[11px]">
                    <Smartphone className="h-3 w-3" />
                    <span>Mobile Screen</span>
                  </div>
                  <div className="mt-1 text-3xl font-extrabold text-neutral-950 font-mono">
                    96<span className="text-sm font-normal text-neutral-400">/100</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
            Zero external JavaScript frameworks on runtime micro-pages. Static pre-rendered HTML/CSS eliminates hydrations and main-thread execution lag.
          </p>
        </div>

        {/* Accessibility */}
        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Eye className="h-4 w-4" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
                  ACCESSIBILITY
                </span>
              </div>
              <span className="rounded bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-800">
                100 / 100
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 border-y border-neutral-100 py-3">
              {(deviceTab === 'both' || deviceTab === 'laptop') && (
                <div className={deviceTab === 'laptop' ? 'col-span-2' : ''}>
                  <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[11px]">
                    <Laptop className="h-3 w-3" />
                    <span>Laptop / Desktop</span>
                  </div>
                  <div className="mt-1 text-3xl font-extrabold text-neutral-950 font-mono">
                    100<span className="text-sm font-normal text-neutral-400">/100</span>
                  </div>
                </div>
              )}

              {(deviceTab === 'both' || deviceTab === 'mobile') && (
                <div className={deviceTab === 'mobile' ? 'col-span-2' : ''}>
                  <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[11px]">
                    <Smartphone className="h-3 w-3" />
                    <span>Mobile Screen</span>
                  </div>
                  <div className="mt-1 text-3xl font-extrabold text-neutral-950 font-mono">
                    100<span className="text-sm font-normal text-neutral-400">/100</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
            Full compliance with WCAG 2.2 AA. Minimum 48px touch targets, explicit <code className="font-mono text-[11px] bg-neutral-100 px-1 rounded">aria-label</code> on all interactive calculators, and high-contrast color palette.
          </p>
        </div>

        {/* Best Practices */}
        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
                  BEST PRACTICES
                </span>
              </div>
              <span className="rounded bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-800">
                100 / 100
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 border-y border-neutral-100 py-3">
              {(deviceTab === 'both' || deviceTab === 'laptop') && (
                <div className={deviceTab === 'laptop' ? 'col-span-2' : ''}>
                  <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[11px]">
                    <Laptop className="h-3 w-3" />
                    <span>Laptop / Desktop</span>
                  </div>
                  <div className="mt-1 text-3xl font-extrabold text-neutral-950 font-mono">
                    100<span className="text-sm font-normal text-neutral-400">/100</span>
                  </div>
                </div>
              )}

              {(deviceTab === 'both' || deviceTab === 'mobile') && (
                <div className={deviceTab === 'mobile' ? 'col-span-2' : ''}>
                  <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[11px]">
                    <Smartphone className="h-3 w-3" />
                    <span>Mobile Screen</span>
                  </div>
                  <div className="mt-1 text-3xl font-extrabold text-neutral-950 font-mono">
                    100<span className="text-sm font-normal text-neutral-400">/100</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
            Strict Content Security Policy (CSP), automated HTTPS redirection, modern image encoding, and isolated client sandboxing for zero XSS risk.
          </p>
        </div>

        {/* SEO Score */}
        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Search className="h-4 w-4" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
                  SEARCH ENGINE (SEO)
                </span>
              </div>
              <span className="rounded bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-800">
                100 / 100
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 border-y border-neutral-100 py-3">
              {(deviceTab === 'both' || deviceTab === 'laptop') && (
                <div className={deviceTab === 'laptop' ? 'col-span-2' : ''}>
                  <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[11px]">
                    <Laptop className="h-3 w-3" />
                    <span>Laptop / Desktop</span>
                  </div>
                  <div className="mt-1 text-3xl font-extrabold text-neutral-950 font-mono">
                    100<span className="text-sm font-normal text-neutral-400">/100</span>
                  </div>
                </div>
              )}

              {(deviceTab === 'both' || deviceTab === 'mobile') && (
                <div className={deviceTab === 'mobile' ? 'col-span-2' : ''}>
                  <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[11px]">
                    <Smartphone className="h-3 w-3" />
                    <span>Mobile Screen</span>
                  </div>
                  <div className="mt-1 text-3xl font-extrabold text-neutral-950 font-mono">
                    100<span className="text-sm font-normal text-neutral-400">/100</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
            Google Search Console verified, fully articulated semantic <code className="font-mono text-[11px] bg-neutral-100 px-1 rounded">&lt;title&gt;</code> &amp; meta tags on all 96+ individual pages with canonical links.
          </p>
        </div>
      </div>

      {/* Core Web Vitals Row */}
      <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-4">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-neutral-900" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900">
              CORE WEB VITALS // REAL USER MEASUREMENTS
            </span>
          </div>
          <span className="font-mono text-xs text-neutral-500">
            Field Target: 75th percentile of page loads
          </span>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {CORE_WEB_VITALS.map((vital) => (
            <div
              key={vital.abbreviation}
              className="rounded-lg border border-neutral-200 bg-white p-3.5 sm:p-4 text-center shadow-2xs"
            >
              <div className="font-mono text-xs text-neutral-500 font-semibold">
                {vital.abbreviation}
              </div>
              <div className="mt-1.5 sm:mt-2 text-2xl font-extrabold text-neutral-950 font-mono">
                {vital.value}
              </div>
              <div className="mt-1 text-[11px] text-neutral-500 font-medium">
                {vital.metric}
              </div>
              <div className="mt-2 inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 font-mono text-[10px] text-emerald-700 font-bold border border-emerald-200">
                <CheckCircle2 className="h-3 w-3" />
                <span>{vital.rating} ({vital.threshold})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google SEO & Discovery Infrastructure Breakdown */}
      <div className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2 pb-4 border-b border-neutral-200">
          <Globe className="h-4 w-4 text-neutral-900" />
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-950">
            GOOGLE SEARCH CONSOLE & SEO DISCOVERY ARCHITECTURE
          </h4>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-900">
              <FileCheck className="h-4 w-4 text-emerald-600" />
              <span>Domain Verification Token</span>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Domain ownership verified with Google Search Console through root file <code className="font-mono bg-neutral-100 px-1 py-0.5 rounded text-neutral-900">googleb0b40b98a356f3ac.html</code> for instant indexing authority.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-900">
              <Search className="h-4 w-4 text-emerald-600" />
              <span>Full XML Sitemap (96+ Routes)</span>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Auto-generated <code className="font-mono bg-neutral-100 px-1 py-0.5 rounded text-neutral-900">sitemap.xml</code> enumerating every sub-suite calculation URL with explicit priority and daily changefreq tags for Googlebot.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-900">
              <TrendingUp className="h-4 w-4 text-emerald-600" />
              <span>Crawler Directives &amp; Robothood</span>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Precision <code className="font-mono bg-neutral-100 px-1 py-0.5 rounded text-neutral-900">robots.txt</code> allowing comprehensive indexation while disallowing ephemeral query states, maximizing crawl budget efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
