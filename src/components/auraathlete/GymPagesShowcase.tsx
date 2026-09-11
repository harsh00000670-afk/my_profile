import React, { useState } from 'react';
import {
  Layers,
  Sparkles,
  Shield,
  Activity,
  Award,
  Zap,
  Flame,
  Dna,
  Heart,
  Clock,
  MapPin,
  CheckCircle2,
  ChevronRight,
  UserCheck,
  Brain,
} from 'lucide-react';
import {
  GYM_MEMBERSHIP_TIERS,
  GYM_RECOVERY_PROTOCOLS,
  GYM_TRAINERS,
  GYM_FLAGSHIPS,
  GYM_TRAINING_SPACES,
} from '../../data/gymArchitecture';

export function GymPagesShowcase() {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'membership' | 'protocols' | 'spaces' | 'trainers' | 'flagships' | 'science'
  >('overview');

  const tabs = [
    { id: 'overview', label: '01. Overview', file: 'OverviewPage.tsx' },
    { id: 'membership', label: '02. Membership', file: 'MembershipPage.tsx' },
    { id: 'protocols', label: '03. Protocols', file: 'ProtocolsPage.tsx' },
    { id: 'spaces', label: '04. Spaces', file: 'SpacesPage.tsx' },
    { id: 'trainers', label: '05. Trainers', file: 'TrainersPage.tsx' },
    { id: 'flagships', label: '06. Flagships', file: 'FlagshipsPage.tsx' },
    { id: 'science', label: '07. Science', file: 'SciencePage.tsx' },
  ] as const;

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white shadow-xs overflow-hidden">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 bg-neutral-50/80 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-neutral-900" />
          <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-950">
            7 CORE PAGES ARCHITECTURE SHOWCASE
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-600 font-semibold border border-neutral-200">
            src/pages/*.tsx
          </span>
          <span className="inline-flex items-center gap-1 rounded bg-amber-100 px-2 py-0.5 font-mono text-[10px] text-amber-900 font-semibold border border-amber-200">
            Multi-Page SPA
          </span>
        </div>
      </div>

      {/* Interactive Tabs Bar */}
      <div className="flex overflow-x-auto border-b border-neutral-200 bg-neutral-100/60 p-1.5 gap-1 text-xs font-mono scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === tab.id
                ? 'bg-neutral-950 text-white shadow-xs'
                : 'text-neutral-600 hover:text-neutral-950 hover:bg-white/60'
            }`}
          >
            <span>{tab.label}</span>
            <span className="text-[9px] opacity-60">({tab.file})</span>
          </button>
        ))}
      </div>

      {/* Tab Content Display Area */}
      <div className="p-4 sm:p-8 bg-neutral-50/30 min-h-[420px]">
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                The Athletic Sanctum Manifest
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
                Where Olympic Biomechanics Meets Cellular Longevity
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed font-sans">
                AURA Athletic Club eliminates the dichotomy between ruthless physical performance and sustainable long-term health. Uniting medical-grade hyperbaric recovery, velocity-based strength training, and continuous biomarker analytics.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl border border-neutral-200 bg-white shadow-2xs">
                <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-900 mb-3">
                  <Activity className="h-5 w-5" />
                </div>
                <h4 className="font-mono text-sm font-bold text-neutral-950 uppercase">Precision Telemetry</h4>
                <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                  Continuous glucose monitoring, autonomic HRV tracking, and quarterly VO2 Max lactate profiling to remove all training guesswork.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-neutral-200 bg-white shadow-2xs">
                <div className="h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700 mb-3">
                  <Flame className="h-5 w-5" />
                </div>
                <h4 className="font-mono text-sm font-bold text-neutral-950 uppercase">Thermal Contrast</h4>
                <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                  -110°C electric whole-body cryotherapy coupled with 75°C medical far-infrared saunas to stimulate deep heat shock protein synthesis.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-neutral-200 bg-white shadow-2xs">
                <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 mb-3">
                  <Shield className="h-5 w-5" />
                </div>
                <h4 className="font-mono text-sm font-bold text-neutral-950 uppercase">Zero Friction Luxury</h4>
                <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                  Capped membership registries, dedicated athletic lockers with daily laundry service, private valet, and global reciprocity across 4 continents.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MEMBERSHIP */}
        {activeTab === 'membership' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <h3 className="text-xl sm:text-3xl font-extrabold text-neutral-950">
                Exclusive Admissions &amp; Membership Tiers
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-mono">
                Rosters are rigorously capped to preserve sanctuary quietude and unhindered training availability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GYM_MEMBERSHIP_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className={`relative rounded-2xl border p-6 flex flex-col justify-between transition-all ${
                    tier.isPopular
                      ? 'border-neutral-950 bg-neutral-950 text-white shadow-lg'
                      : 'border-neutral-200 bg-white text-neutral-900'
                  }`}
                >
                  {tier.isPopular && (
                    <span className="absolute -top-3 left-6 rounded-full bg-amber-400 px-3 py-0.5 font-mono text-[10px] font-bold text-neutral-950 uppercase tracking-wider">
                      Most Selected
                    </span>
                  )}
                  <div>
                    <span
                      className={`font-mono text-[10px] font-bold tracking-wider uppercase block ${
                        tier.isPopular ? 'text-amber-400' : 'text-amber-700'
                      }`}
                    >
                      {tier.tierBadge}
                    </span>
                    <h4 className="text-xl font-black mt-1">{tier.name}</h4>
                    <p
                      className={`text-xs mt-2 font-sans leading-relaxed ${
                        tier.isPopular ? 'text-neutral-300' : 'text-neutral-600'
                      }`}
                    >
                      {tier.tagline}
                    </p>

                    <div className="mt-5 pb-5 border-b border-neutral-200/40">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black font-mono">{tier.monthlyDues}</span>
                        <span className="text-xs font-mono opacity-70">/ month</span>
                      </div>
                      <div className="text-[11px] font-mono opacity-60 mt-1">{tier.initiation}</div>
                    </div>

                    {/* Features List */}
                    <ul className="mt-5 space-y-2 text-xs font-mono">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2
                            className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${
                              tier.isPopular ? 'text-amber-400' : 'text-neutral-900'
                            }`}
                          />
                          <span className={tier.isPopular ? 'text-neutral-200' : 'text-neutral-700'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-200/30">
                    <span
                      className={`text-[10px] font-mono uppercase block mb-1.5 ${
                        tier.isPopular ? 'text-neutral-400' : 'text-neutral-500'
                      }`}
                    >
                      Exclusive Perks:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {tier.perks.map((p, idx) => (
                        <span
                          key={idx}
                          className={`rounded px-2 py-0.5 text-[10px] font-mono ${
                            tier.isPopular
                              ? 'bg-neutral-900 text-neutral-300 border border-neutral-800'
                              : 'bg-neutral-100 text-neutral-700 border border-neutral-200'
                          }`}
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: PROTOCOLS */}
        {activeTab === 'protocols' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <h3 className="text-xl sm:text-3xl font-extrabold text-neutral-950">
                Clinical-Grade Recovery Protocols
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-mono">
                Medical-grade technologies programmed to suppress inflammation and stimulate cellular rejuvenation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {GYM_RECOVERY_PROTOCOLS.map((protocol) => (
                <div
                  key={protocol.id}
                  className="rounded-xl border border-neutral-200 bg-white p-5 shadow-2xs hover:border-neutral-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-neutral-100 px-2 py-0.5 font-mono text-[10px] font-bold text-neutral-700 border border-neutral-200">
                        {protocol.category}
                      </span>
                      <span className="font-mono text-xs font-bold text-amber-700">
                        {protocol.duration}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-neutral-950 mt-3">{protocol.name}</h4>
                    <div className="font-mono text-xs font-semibold text-neutral-900 mt-1 bg-neutral-50 px-2 py-1 rounded inline-block">
                      {protocol.tempOrMetric}
                    </div>

                    <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                      {protocol.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1.5">
                    <div className="font-mono text-[10px] text-neutral-400 uppercase">
                      Clinical Benefit:
                    </div>
                    <div className="text-[11px] text-emerald-800 font-medium bg-emerald-50/80 p-2 rounded border border-emerald-200/60 leading-normal">
                      {protocol.clinicalBenefit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: SPACES */}
        {activeTab === 'spaces' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <h3 className="text-xl sm:text-3xl font-extrabold text-neutral-950">
                Architectural Training Spaces
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-mono">
                Crafted in basalt stone, white oak, and precision stainless steel for acoustic decoupling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {GYM_TRAINING_SPACES.map((space) => (
                <div
                  key={space.id}
                  className="rounded-xl border border-neutral-200 bg-white p-6 shadow-2xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-amber-700">{space.zone}</span>
                  </div>
                  <h4 className="text-lg font-bold text-neutral-950">{space.name}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-sans">{space.description}</p>

                  <div className="pt-2">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1.5">
                      Fitted Equipment:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {space.equipment.map((eq, idx) => (
                        <span
                          key={idx}
                          className="rounded bg-neutral-100 border border-neutral-200 px-2 py-0.5 text-[10px] font-mono text-neutral-700"
                        >
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: TRAINERS */}
        {activeTab === 'trainers' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <h3 className="text-xl sm:text-3xl font-extrabold text-neutral-950">
                Master Coaches &amp; Longevity Clinicians
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-mono">
                Olympic coaches, Oxford physiologists, and neuromuscular doctors dedicated to member performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {GYM_TRAINERS.map((trainer) => (
                <div
                  key={trainer.id}
                  className="rounded-xl border border-neutral-200 bg-white p-6 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-neutral-950">{trainer.name}</h4>
                      <span className="font-mono text-[10px] text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                        {trainer.availability}
                      </span>
                    </div>
                    <div className="font-mono text-xs text-neutral-500 font-semibold mt-0.5">
                      {trainer.role}
                    </div>

                    <p className="text-xs text-neutral-600 mt-3 leading-relaxed font-sans">
                      {trainer.bio}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1.5">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase block">
                      Credentials &amp; Specialty:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.credentials.map((c, idx) => (
                        <span
                          key={idx}
                          className="rounded bg-neutral-100 border border-neutral-200 px-2 py-0.5 text-[10px] font-mono text-neutral-700"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: FLAGSHIPS */}
        {activeTab === 'flagships' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <h3 className="text-xl sm:text-3xl font-extrabold text-neutral-950">
                Global Flagship Sanctuaries
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-mono">
                Four global enclaves connected via biometric profile reciprocity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {GYM_FLAGSHIPS.map((sanctuary) => (
                <div
                  key={sanctuary.id}
                  className="rounded-xl border border-neutral-200 bg-white p-6 shadow-2xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-neutral-950">
                      {sanctuary.city} · <span className="text-neutral-500 font-normal">{sanctuary.neighborhood}</span>
                    </h4>
                    <span className="font-mono text-xs font-bold text-amber-700">{sanctuary.sqft}</span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-500">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-neutral-400" />
                    <span>{sanctuary.address}</span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-emerald-700">
                    <Clock className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span>{sanctuary.hours}</span>
                  </div>

                  <div className="pt-2 border-t border-neutral-100">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1.5">
                      Sanctuary Amenities:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sanctuary.features.map((f, idx) => (
                        <span
                          key={idx}
                          className="rounded bg-neutral-100 border border-neutral-200 px-2 py-0.5 text-[10px] font-mono text-neutral-700"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: SCIENCE */}
        {activeTab === 'science' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <h3 className="text-xl sm:text-3xl font-extrabold text-neutral-950">
                Evidence-Based Performance Science
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-mono">
                Peer-reviewed clinical methodologies validating every training and recovery prescription.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-neutral-900">
                  <Activity className="h-4 w-4" />
                  <h4 className="font-mono text-sm font-bold uppercase">VO2 Max &amp; Lactate Inflection</h4>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  Direct gas exchange spirometry accurately maps aerobic threshold (LT1) and anaerobic threshold (LT2), ensuring conditioning stimulates mitochondrial biogenesis without overtaxing central recovery reserves.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-amber-700">
                  <Heart className="h-4 w-4" />
                  <h4 className="font-mono text-sm font-bold uppercase">Continuous HRV Autonomic Tone</h4>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  Real-time rMSSD heart rate variability monitoring calculates daily neuromuscular readiness, adjusting barbell loads and volume before central nervous system fatigue degrades form.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Brain className="h-4 w-4" />
                  <h4 className="font-mono text-sm font-bold uppercase">Photobiomodulation &amp; ATP</h4>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  Targeted 660nm and 850nm photon wavelengths excite Cytochrome c Oxidase in the mitochondrial electron transport chain, boosting ATP synthesis by up to 200% and suppressing oxidative stress.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-blue-700">
                  <Dna className="h-4 w-4" />
                  <h4 className="font-mono text-sm font-bold uppercase">Blood Biomarker Profiling</h4>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  Quarterly profiling of hs-CRP, fasting insulin, testosterone-to-cortisol ratio, and ApoB provides an objective longitudinal record of cellular vitality and cardiovascular health.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
