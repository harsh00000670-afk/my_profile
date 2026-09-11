import React from 'react';
import { Layers, ArrowRight, CornerDownRight, Cpu, HardDrive, Smartphone, Radio } from 'lucide-react';

export function ArchitectureDiagram() {
  return (
    <div className="space-y-8">
      {/* Section Title */}
      <div className="border-b border-neutral-200 pb-5">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500">
          <Layers className="h-3.5 w-3.5 text-neutral-900" />
          <span>SYSTEM DESIGN // 3-TIER MULTI-PAGE ARCHITECTURE</span>
        </div>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
          Hierarchical Progressive Web App Flow
        </h3>
        <p className="mt-2 text-sm text-neutral-600 max-w-2xl">
          QuickSolve Platinum is engineered with a strict 3-tier multi-page navigation hierarchy. Every tool is a fully independent, zero-dependency micro-application served with sub-second latency from global edge CDNs.
        </p>
      </div>

      {/* 3-Tier Flow Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
        {/* Tier 1 */}
        <div className="rounded-xl border border-neutral-300 bg-white p-6 shadow-xs relative">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <span className="font-mono text-xs font-bold text-neutral-900">
              TIER 01 // GLOBAL PORTAL
            </span>
            <span className="rounded bg-neutral-900 px-2 py-0.5 font-mono text-[10px] text-white">
              Root Level
            </span>
          </div>

          <div className="mt-4">
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 font-mono text-xs font-semibold text-neutral-900 flex items-center justify-between">
              <span>index.html</span>
              <span className="text-[10px] text-neutral-500">Command Center</span>
            </div>
            <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
              Main landing dashboard. Displays the master catalog of 11 primary calculation domains, global search index, theme switcher, and persistent calculation history.
            </p>

            <div className="mt-4 border-t border-neutral-100 pt-3">
              <div className="font-mono text-[11px] text-neutral-500">User Interaction:</div>
              <div className="text-xs font-medium text-neutral-900 mt-1 flex items-center gap-1.5">
                <span>Selects domain (e.g., GST, Loan, Programmer)</span>
                <ArrowRight className="h-3 w-3 text-neutral-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2 */}
        <div className="rounded-xl border border-neutral-300 bg-white p-6 shadow-xs relative">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <span className="font-mono text-xs font-bold text-neutral-900">
              TIER 02 // SUITE HUBS
            </span>
            <span className="rounded bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-800 font-bold border border-neutral-200">
              11 Hub Pages
            </span>
          </div>

          <div className="mt-4">
            <div className="space-y-1.5">
              <div className="rounded border border-neutral-200 bg-neutral-50 px-3 py-1.5 font-mono text-xs text-neutral-900 flex justify-between">
                <span>gst.html</span>
                <span className="text-[10px] text-neutral-500">Tax Hub</span>
              </div>
              <div className="rounded border border-neutral-200 bg-neutral-50 px-3 py-1.5 font-mono text-xs text-neutral-900 flex justify-between">
                <span>programmer.html</span>
                <span className="text-[10px] text-neutral-500">Dev Hub</span>
              </div>
              <div className="rounded border border-neutral-200 bg-neutral-50 px-3 py-1.5 font-mono text-xs text-neutral-900 flex justify-between">
                <span>loan.html, unit.html, etc.</span>
                <span className="text-[10px] text-neutral-500">9 More Hubs</span>
              </div>
            </div>

            <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
              Dedicated domain hubs presenting all specialized calculators within that discipline with contextual explanations, formula definitions, and quick previews.
            </p>

            <div className="mt-4 border-t border-neutral-100 pt-3">
              <div className="font-mono text-[11px] text-neutral-500">User Interaction:</div>
              <div className="text-xs font-medium text-neutral-900 mt-1 flex items-center gap-1.5">
                <span>Clicks specific tool (e.g., ITC Adjuster, Bitwise)</span>
                <ArrowRight className="h-3 w-3 text-neutral-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Tier 3 */}
        <div className="rounded-xl border border-neutral-300 bg-white p-6 shadow-xs relative">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <span className="font-mono text-xs font-bold text-neutral-900">
              TIER 03 // MICRO ENGINES
            </span>
            <span className="rounded bg-emerald-100 px-2 py-0.5 font-mono text-[10px] text-emerald-800 font-bold border border-emerald-200">
              96+ Live Units
            </span>
          </div>

          <div className="mt-4">
            <div className="space-y-1.5">
              <div className="rounded border border-neutral-200 bg-neutral-50 px-3 py-1.5 font-mono text-xs text-neutral-900 flex justify-between">
                <span>gst_suites/itc_adjuster.html</span>
                <span className="text-[10px] text-emerald-700 font-semibold">Standalone</span>
              </div>
              <div className="rounded border border-neutral-200 bg-neutral-50 px-3 py-1.5 font-mono text-xs text-neutral-900 flex justify-between">
                <span>programmer_suites/bitwise.html</span>
                <span className="text-[10px] text-emerald-700 font-semibold">Standalone</span>
              </div>
              <div className="rounded border border-neutral-200 bg-neutral-50 px-3 py-1.5 font-mono text-xs text-neutral-900 flex justify-between">
                <span>... 94+ specialized tools</span>
                <span className="text-[10px] text-neutral-500">Sub-folders</span>
              </div>
            </div>

            <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
              Completely self-contained computation pages with isolated DOM, bespoke input sliders, SVG visualizers, and direct zero-latency mathematical algorithms.
            </p>

            <div className="mt-4 border-t border-neutral-100 pt-3">
              <div className="font-mono text-[11px] text-neutral-500">Execution Model:</div>
              <div className="text-xs font-medium text-neutral-900 mt-1">
                Zero client-server roundtrips · 100% Client-Side
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-Cutting Infrastructure Layer */}
      <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
        <div className="flex items-center gap-2 pb-3 border-b border-neutral-200">
          <Cpu className="h-4 w-4 text-neutral-900" />
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-950">
            CROSS-CUTTING FOUNDATIONAL SERVICES
          </h4>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-lg border border-neutral-200 bg-white p-4">
            <div className="flex items-center gap-2 text-neutral-900 font-mono text-xs font-bold">
              <Smartphone className="h-4 w-4 text-neutral-800" />
              <span>PWA Offline Engine</span>
            </div>
            <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
              Configured with <code className="font-mono text-[10px] bg-neutral-100 px-1 py-0.5 rounded">manifest.json</code> and Service Worker caching for seamless offline access and installability on iOS and Android.
            </p>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white p-4">
            <div className="flex items-center gap-2 text-neutral-900 font-mono text-xs font-bold">
              <HardDrive className="h-4 w-4 text-neutral-800" />
              <span>enginev12 Core</span>
            </div>
            <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
              Shared JavaScript algorithmic library (<code className="font-mono text-[10px] bg-neutral-100 px-1 py-0.5 rounded">core.js</code> &amp; <code className="font-mono text-[10px] bg-neutral-100 px-1 py-0.5 rounded">math_core.js</code>) powering arbitrary precision and financial formulas.
            </p>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white p-4">
            <div className="flex items-center gap-2 text-neutral-900 font-mono text-xs font-bold">
              <Radio className="h-4 w-4 text-neutral-800" />
              <span>Ambient Audio Loops</span>
            </div>
            <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
              Locally bundled background focus synthesizer audio tracks (<code className="font-mono text-[10px] bg-neutral-100 px-1 py-0.5 rounded">lofi.mp3</code>, <code className="font-mono text-[10px] bg-neutral-100 px-1 py-0.5 rounded">rain.mp3</code>, <code className="font-mono text-[10px] bg-neutral-100 px-1 py-0.5 rounded">space.mp3</code>, <code className="font-mono text-[10px] bg-neutral-100 px-1 py-0.5 rounded">nature.mp3</code>).
            </p>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white p-4">
            <div className="flex items-center gap-2 text-neutral-900 font-mono text-xs font-bold">
              <Layers className="h-4 w-4 text-neutral-800" />
              <span>Zero-CDN Font Bundle</span>
            </div>
            <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
              Full JetBrains Mono family (18 weight variations) &amp; FontAwesome icons stored locally in <code className="font-mono text-[10px] bg-neutral-100 px-1 py-0.5 rounded">/assets</code> to eliminate DNS lookups and external tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
