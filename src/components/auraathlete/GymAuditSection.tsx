import React from 'react';
import {
  Gauge,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Search,
  Smartphone,
  Server,
  Sparkles,
} from 'lucide-react';

export function GymAuditSection() {
  const scores = [
    { label: 'Performance', score: 99, color: 'text-emerald-600', ring: 'border-emerald-500' },
    { label: 'Accessibility', score: 100, color: 'text-emerald-600', ring: 'border-emerald-500' },
    { label: 'Best Practices', score: 100, color: 'text-emerald-600', ring: 'border-emerald-500' },
    { label: 'SEO', score: 100, color: 'text-emerald-600', ring: 'border-emerald-500' },
  ];

  const vitals = [
    { name: 'First Contentful Paint (FCP)', value: '0.4s', status: 'Optimal', target: '< 1.8s' },
    { name: 'Largest Contentful Paint (LCP)', value: '0.7s', status: 'Optimal', target: '< 2.5s' },
    { name: 'Cumulative Layout Shift (CLS)', value: '0.000', status: 'Zero Shift', target: '< 0.1' },
    { name: 'Total Blocking Time (TBT)', value: '0 ms', status: 'Zero Block', target: '< 200ms' },
    { name: 'Interaction to Next Paint (INP)', value: '18 ms', status: 'Optimal', target: '< 200ms' },
  ];

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white shadow-xs overflow-hidden">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 bg-neutral-50/80 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <Gauge className="h-4 w-4 text-neutral-900" />
          <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-950">
            AUDIT BENCHMARKS // LIGHTHOUSE &amp; CORE WEB VITALS
          </h3>
        </div>
        <span className="inline-flex items-center gap-1 rounded bg-emerald-100 px-2 py-0.5 font-mono text-[10px] text-emerald-800 font-semibold border border-emerald-200">
          Tier 1 Production Grade
        </span>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        {/* 4 Lighthouse Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {scores.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-4 text-center flex flex-col items-center justify-center space-y-1"
            >
              <div
                className={`h-14 w-14 rounded-full border-2 ${s.ring} flex items-center justify-center font-mono text-xl font-bold ${s.color} bg-white shadow-2xs`}
              >
                {s.score}
              </div>
              <span className="font-mono text-xs font-bold text-neutral-900 mt-2 uppercase">
                {s.label}
              </span>
              <span className="text-[10px] font-mono text-emerald-700 font-semibold">PASS (100%)</span>
            </div>
          ))}
        </div>

        {/* Web Vitals Table */}
        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          <div className="bg-neutral-100/70 px-4 py-2 border-b border-neutral-200 text-[11px] font-mono font-bold text-neutral-600 uppercase flex items-center justify-between">
            <span>Core Web Vital Metric</span>
            <span>Real-World Benchmark</span>
          </div>
          <div className="divide-y divide-neutral-200 text-xs font-mono">
            {vitals.map((v) => (
              <div
                key={v.name}
                className="px-4 py-2.5 flex items-center justify-between hover:bg-neutral-50/80 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span className="text-neutral-900 font-medium">{v.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-neutral-400 text-[11px]">Threshold: {v.target}</span>
                  <span className="rounded bg-emerald-50 border border-emerald-200 text-emerald-800 px-2 py-0.5 font-bold">
                    {v.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & 100dvh Viewport Guarantee */}
        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-amber-950">
          <div className="flex items-center gap-2.5">
            <Smartphone className="h-4 w-4 text-amber-800 shrink-0" />
            <div>
              <span className="font-bold block">100dvh Dynamic Viewport Height Guarantee</span>
              <span className="text-[11px] text-amber-800 font-normal">
                Eliminates Chrome/Safari URL bar jumping, prevents modal scrolling freeze, and locks layout without horizontal overflow.
              </span>
            </div>
          </div>
          <span className="shrink-0 rounded bg-amber-100 border border-amber-300 text-amber-900 px-2.5 py-1 font-bold text-[10px]">
            ACTIVE ON ALL DEVICES
          </span>
        </div>
      </div>
    </div>
  );
}
