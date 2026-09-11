import React, { useState } from 'react';
import {
  Shield,
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  Send,
  Copy,
  Check,
  Award,
  Flame,
  Zap,
} from 'lucide-react';
import { GYM_MEMBERSHIP_TIERS, GYM_FLAGSHIPS } from '../../data/gymArchitecture';

export function VipBookingSimulator() {
  const [name, setName] = useState('Alexander Sterling');
  const [phone, setPhone] = useState('+1 917 482 9901');
  const [selectedFlagship, setSelectedFlagship] = useState('soho-nyc');
  const [selectedTier, setSelectedTier] = useState('black');
  const [selectedDate, setSelectedDate] = useState('2026-09-15');
  const [selectedTime, setSelectedTime] = useState('09:30 AM');
  const [fitnessGoals, setFitnessGoals] = useState(
    'Focusing on VO2 Max lactate profiling, hyperbolic oxygen therapy recovery, and Olympic barbell velocity training after marathon prep.'
  );
  const [dispatched, setDispatched] = useState(false);
  const [copied, setCopied] = useState(false);

  const flagshipObj = GYM_FLAGSHIPS.find((f) => f.id === selectedFlagship) || GYM_FLAGSHIPS[0];
  const tierObj = GYM_MEMBERSHIP_TIERS.find((t) => t.id === selectedTier) || GYM_MEMBERSHIP_TIERS[0];

  // Structured VIP Concierge Payload
  const conciergeMessage = `*AURA ATHLETIC CLUB // PRIVATE VIP CONSULTATION*
────────────────────────────
• Patron Name: ${name}
• Contact: ${phone}
• Membership Tier: ${tierObj.name} (${tierObj.monthlyDues})
• Target Sanctuary: ${flagshipObj.city} · ${flagshipObj.neighborhood}
• Scheduled Session: ${selectedDate} at ${selectedTime}
• Biometrics & Goals: "${fitnessGoals}"
────────────────────────────
Requested via AURA High-Performance Concierge Pipeline`;

  // WhatsApp concierge link (uses WhatsApp URI scheme)
  const conciergePhone = '919219143734'; // High-performance concierge line
  const whatsappUrl = `https://wa.me/${conciergePhone}?text=${encodeURIComponent(conciergeMessage)}`;

  const handleDispatch = () => {
    setDispatched(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setTimeout(() => setDispatched(false), 3500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(conciergeMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const applyPreset = (
    presetName: string,
    presetPhone: string,
    tierId: string,
    flagshipId: string,
    time: string,
    goals: string
  ) => {
    setName(presetName);
    setPhone(presetPhone);
    setSelectedTier(tierId);
    setSelectedFlagship(flagshipId);
    setSelectedTime(time);
    setFitnessGoals(goals);
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white shadow-xs overflow-hidden">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 bg-neutral-50/80 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-neutral-900" />
          <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-950">
            VIP CONSULTATION &amp; ASSESSMENT ENGINE (VipBookingModal.tsx)
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded bg-amber-100 px-2 py-0.5 font-mono text-[10px] text-amber-900 font-semibold border border-amber-200">
            Real Concierge Pipeline
          </span>
          <span className="inline-flex items-center gap-1 rounded bg-emerald-100 px-2 py-0.5 font-mono text-[10px] text-emerald-800 font-semibold border border-emerald-200">
            WhatsApp + Telemetry Ready
          </span>
        </div>
      </div>

      {/* Quick Preset Selector */}
      <div className="px-4 py-2.5 sm:px-6 bg-neutral-100/60 border-b border-neutral-200/80 flex flex-wrap items-center gap-2 text-xs font-mono">
        <span className="text-neutral-500 font-semibold">Test Presets:</span>
        <button
          onClick={() =>
            applyPreset(
              'Elena Rostova',
              '+44 20 7946 0912',
              'black',
              'mayfair-london',
              '10:00 AM',
              'Interested in continuous lactate testing, hydrothermal contrast suites, and private strength lab access.'
            )
          }
          className="px-2.5 py-1 rounded bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-700 hover:text-neutral-900 transition-colors shadow-2xs"
        >
          London Executive
        </button>
        <button
          onClick={() =>
            applyPreset(
              'Kenji Takahashi',
              '+81 3 5555 0142',
              'syndicate',
              'ginza-tokyo',
              '04:30 PM',
              'Private syndicate inquiry with dedicated biomechanics coach and acoustic isolation pod reservations.'
            )
          }
          className="px-2.5 py-1 rounded bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-700 hover:text-neutral-900 transition-colors shadow-2xs"
        >
          Tokyo Syndicate
        </button>
        <button
          onClick={() =>
            applyPreset(
              'Tariq Al-Mansoor',
              '+971 4 312 8840',
              'founding',
              'difc-dubai',
              '06:00 PM',
              'Altitude hypoxic conditioning (3,000m+) combined with sub-zero cryotherapy and high-velocity sprinting.'
            )
          }
          className="px-2.5 py-1 rounded bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-700 hover:text-neutral-900 transition-colors shadow-2xs"
        >
          Dubai Hypoxic
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Interactive Booking Form */}
        <div className="lg:col-span-7 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-neutral-200 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Patron Name */}
            <div>
              <label className="block font-mono text-[11px] font-bold text-neutral-600 uppercase mb-1 flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-neutral-400" />
                Patron Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alexander Sterling"
                className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs font-mono text-neutral-900 focus:border-neutral-950 focus:outline-hidden"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block font-mono text-[11px] font-bold text-neutral-600 uppercase mb-1 flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-neutral-400" />
                Phone Number / WhatsApp
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 917 482 9901"
                className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs font-mono text-neutral-900 focus:border-neutral-950 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Preferred Flagship Sanctuary */}
          <div>
            <label className="block font-mono text-[11px] font-bold text-neutral-600 uppercase mb-1.5 flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-neutral-400" />
              Target Flagship Sanctuary
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {GYM_FLAGSHIPS.map((flagship) => (
                <button
                  key={flagship.id}
                  type="button"
                  onClick={() => setSelectedFlagship(flagship.id)}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    selectedFlagship === flagship.id
                      ? 'border-neutral-950 bg-neutral-950 text-white shadow-xs'
                      : 'border-neutral-200 bg-neutral-50 hover:bg-white text-neutral-800'
                  }`}
                >
                  <div className="font-mono text-xs font-bold">{flagship.city}</div>
                  <div className="text-[10px] font-mono text-neutral-400 truncate mt-0.5">
                    {flagship.neighborhood}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Membership Tier Inquiry */}
          <div>
            <label className="block font-mono text-[11px] font-bold text-neutral-600 uppercase mb-1.5 flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-neutral-400" />
              Membership Tier Inquiry
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {GYM_MEMBERSHIP_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setSelectedTier(tier.id)}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    selectedTier === tier.id
                      ? 'border-neutral-950 bg-neutral-950 text-white shadow-xs'
                      : 'border-neutral-200 bg-neutral-50 hover:bg-white text-neutral-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold">{tier.name}</span>
                  </div>
                  <div className="font-mono text-[11px] text-amber-600 font-semibold mt-0.5">
                    {tier.monthlyDues}/mo
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-[11px] font-bold text-neutral-600 uppercase mb-1 flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-neutral-400" />
                Preferred Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs font-mono text-neutral-900 focus:border-neutral-950 focus:outline-hidden"
              />
            </div>
            <div>
              <label className="block font-mono text-[11px] font-bold text-neutral-600 uppercase mb-1 flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-neutral-400" />
                Session Time Slot
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs font-mono text-neutral-900 focus:border-neutral-950 focus:outline-hidden"
              >
                <option value="06:30 AM">06:30 AM (Dawn Fasted Training)</option>
                <option value="08:00 AM">08:00 AM (Morning Conditioning)</option>
                <option value="09:30 AM">09:30 AM (Biomarker Screening)</option>
                <option value="12:00 PM">12:00 PM (Midday Hydrothermal)</option>
                <option value="02:30 PM">02:30 PM (Neuromuscular Mobility)</option>
                <option value="04:30 PM">04:30 PM (Sub-Zero Cryo &amp; HBOT)</option>
                <option value="06:30 PM">06:30 PM (Evening Velocity Lifting)</option>
                <option value="08:30 PM">08:30 PM (Dusk Infrared Sauna)</option>
              </select>
            </div>
          </div>

          {/* Fitness Goals / About Yourself */}
          <div>
            <label className="block font-mono text-[11px] font-bold text-neutral-600 uppercase mb-1">
              About Yourself &amp; Biomarker Goals
            </label>
            <textarea
              rows={2}
              value={fitnessGoals}
              onChange={(e) => setFitnessGoals(e.target.value)}
              placeholder="Detail your performance objectives, sports background, or cellular recovery requirements..."
              className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs font-mono text-neutral-900 focus:border-neutral-950 focus:outline-hidden"
            />
          </div>
        </div>

        {/* Right Column: Live Telemetry Payload & WhatsApp Dispatch */}
        <div className="lg:col-span-5 p-4 sm:p-6 bg-neutral-950 text-white flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-400" />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  CONCIERGE PAYLOAD PREVIEW
                </span>
              </div>
              <span className="font-mono text-[10px] text-neutral-400">URI Encoded</span>
            </div>

            {/* Formatted Terminal Message Preview */}
            <div className="mt-3 rounded-lg bg-neutral-900 border border-neutral-800 p-3.5 font-mono text-xs text-neutral-300 space-y-1.5 whitespace-pre-line leading-relaxed">
              {conciergeMessage}
            </div>

            {/* Target Spec Summary */}
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="rounded-md bg-neutral-900/90 border border-neutral-800 p-2">
                <span className="text-[10px] text-neutral-500 uppercase block">Facility Size</span>
                <span className="text-white font-bold">{flagshipObj.sqft}</span>
              </div>
              <div className="rounded-md bg-neutral-900/90 border border-neutral-800 p-2">
                <span className="text-[10px] text-neutral-500 uppercase block">Initiation Due</span>
                <span className="text-amber-400 font-bold">{tierObj.initiation}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2">
            <button
              onClick={handleDispatch}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-mono text-xs font-bold text-neutral-950 hover:bg-neutral-100 transition-all shadow-md active:scale-[0.99]"
            >
              {dispatched ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>DISPATCHED TO CONCIERGE</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>DISPATCH TO WHATSAPP CONCIERGE</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopy}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2 font-mono text-xs text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span>PAYLOAD COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-neutral-400" />
                  <span>COPY DISPATCH PAYLOAD</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
