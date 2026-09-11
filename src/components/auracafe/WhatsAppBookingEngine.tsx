import React, { useState } from 'react';
import {
  MessageSquare,
  Send,
  Calendar,
  Clock,
  Users,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Smartphone,
  Phone,
  User,
  FileText,
} from 'lucide-react';
import { WHATSAPP_PHONE_NUMBER, WHATSAPP_DISPLAY_PHONE } from '../../data/cafeArchitecture';

const TIME_SLOTS = [
  '8:30 AM',
  '9:30 AM',
  '10:30 AM',
  '11:30 AM',
  '1:00 PM',
  '2:30 PM',
  '4:00 PM',
  '5:30 PM',
  '7:00 PM',
];

const SEATING_AREAS = [
  { id: 'Main Atelier Bar', label: 'Main Atelier Bar', desc: 'Front-row view of Synesso espresso extractions' },
  { id: 'Curved Walnut Counter', label: 'Curved Walnut Counter', desc: 'Handcrafted timber counter by artisan Rahul' },
  { id: 'Window Sun Nook', label: 'Window Sun Nook', desc: 'Warm natural light & Brew Avenue street views' },
  { id: 'Quiet Library Corner', label: 'Quiet Library Corner', desc: 'Unhurried study corner with curated design books' },
];

const PRESETS = [
  {
    name: 'Morning Espresso Tasting',
    guests: '2',
    time: '8:30 AM',
    seating: 'Main Atelier Bar',
    notes: 'Keen on trying the Colombian Gesha micro-lot and almond croissant.',
  },
  {
    name: 'Afternoon Remote Work',
    guests: '1',
    time: '2:30 PM',
    seating: 'Quiet Library Corner',
    notes: 'Will be reading & sketching. Need quiet spot near power outlet.',
  },
  {
    name: 'Weekend Pastry Date',
    guests: '4',
    time: '11:30 AM',
    seating: 'Window Sun Nook',
    notes: 'Celebrating weekend brunch, please reserve almond croissants.',
  },
];

export function WhatsAppBookingEngine() {
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('10:30 AM');
  const [seating, setSeating] = useState('Main Atelier Bar');
  const [name, setName] = useState('Harsh');
  const [phone, setPhone] = useState('+91 9219143734');
  const [notes, setNotes] = useState('First-time visitor. Excited to experience the seasonal pour-over extraction!');

  const [copiedMsg, setCopiedMsg] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [dispatched, setDispatched] = useState(false);

  // Generate exact structured message string according to the user's booking engine
  const generatedMessage =
    `Hi Aura Cafe! I would like to reserve a table:\n` +
    `• Guests: ${guests} ${parseInt(guests, 10) === 1 ? 'person' : 'people'}\n` +
    `• Date: ${date}\n` +
    `• Time: ${time}\n` +
    `• Preferred Seating: ${seating}` +
    (name.trim() ? `\n• Name: ${name.trim()}` : '') +
    (phone.trim() ? `\n• Phone: ${phone.trim()}` : '') +
    (notes.trim() ? `\n• Special Requests / About: ${notes.trim()}` : '');

  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(generatedMessage)}`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopiedMsg(true);
    setTimeout(() => setCopiedMsg(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(whatsappUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleDispatch = () => {
    setDispatched(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setTimeout(() => setDispatched(false), 3000);
  };

  const applyPreset = (preset: (typeof PRESETS)[0]) => {
    setGuests(preset.guests);
    setTime(preset.time);
    setSeating(preset.seating);
    setNotes(preset.notes);
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white shadow-xs overflow-hidden">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 bg-neutral-50/80 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-emerald-600" />
          <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-950">
            WHATSAPP CONCIERGE &amp; DIRECT TABLE RESERVATION PIPELINE
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded bg-emerald-100 px-2 py-0.5 font-mono text-[10px] text-emerald-800 font-semibold border border-emerald-300">
            <Phone className="h-3 w-3" />
            Concierge: {WHATSAPP_DISPLAY_PHONE}
          </span>
          <span className="inline-flex items-center gap-1 rounded bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-600 font-semibold border border-neutral-200">
            Zero-Backend Serverless
          </span>
        </div>
      </div>

      {/* Preset Quick Actions */}
      <div className="border-b border-neutral-200/80 bg-neutral-50/40 px-4 py-2 sm:px-6">
        <div className="flex items-center gap-2 overflow-x-auto text-xs font-mono no-scrollbar">
          <span className="text-neutral-400 text-[11px] font-semibold shrink-0 flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-amber-500" />
            QUICK PRESETS:
          </span>
          {PRESETS.map((p) => (
            <button
              key={p.name}
              onClick={() => applyPreset(p)}
              className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 shrink-0 transition-colors"
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Form & Live WhatsApp Dispatch Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Form: Name, Phone, Notes & Booking Parameters */}
        <div className="lg:col-span-7 p-4 sm:p-6 space-y-5 border-b lg:border-b-0 lg:border-r border-neutral-200 bg-white">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-950">
              Direct Table Reservation Form
            </h4>
            <p className="text-xs text-neutral-600">
              Enter patron details, party size, and schedule to generate the authenticated WhatsApp concierge dispatch payload.
            </p>
          </div>

          {/* User Details: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-semibold text-neutral-700 mb-1.5">
                <User className="h-3 w-3 inline mr-1 text-neutral-500" />
                YOUR NAME (अपना नाम)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Harsh"
                className="w-full rounded-lg border border-neutral-200 bg-neutral-50/50 px-3 py-2 text-sm text-neutral-900 focus:bg-white focus:border-neutral-950 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-neutral-700 mb-1.5">
                <Phone className="h-3 w-3 inline mr-1 text-neutral-500" />
                PHONE NUMBER (नंबर)
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g., +91 9219143734"
                className="w-full rounded-lg border border-neutral-200 bg-neutral-50/50 px-3 py-2 text-sm text-neutral-900 focus:bg-white focus:border-neutral-950 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Party Size & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-semibold text-neutral-700 mb-1.5">
                <Users className="h-3 w-3 inline mr-1 text-neutral-500" />
                NUMBER OF GUESTS
              </label>
              <div className="grid grid-cols-6 gap-1">
                {['1', '2', '3', '4', '5', '6+'].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setGuests(num)}
                    className={`py-1.5 rounded-md font-mono text-xs font-semibold border transition-all ${
                      guests === num
                        ? 'border-neutral-950 bg-neutral-950 text-white shadow-2xs'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-neutral-700 mb-1.5">
                <Calendar className="h-3 w-3 inline mr-1 text-neutral-500" />
                RESERVATION DATE
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-lg border border-neutral-200 bg-neutral-50/50 px-3 py-1.5 text-xs font-mono text-neutral-900 focus:bg-white focus:border-neutral-950 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Time Slot Selection */}
          <div>
            <label className="block text-xs font-mono font-semibold text-neutral-700 mb-1.5">
              <Clock className="h-3 w-3 inline mr-1 text-neutral-500" />
              PREFERRED TIME SLOT
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
              {TIME_SLOTS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTime(t)}
                  className={`py-1.5 px-2 rounded-md font-mono text-[11px] font-semibold border transition-all truncate text-center ${
                    time === t
                      ? 'border-neutral-950 bg-neutral-950 text-white shadow-2xs'
                      : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Seating Area Selection */}
          <div>
            <label className="block text-xs font-mono font-semibold text-neutral-700 mb-1.5">
              <MapPin className="h-3 w-3 inline mr-1 text-neutral-500" />
              PREFERRED SEATING AREA
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SEATING_AREAS.map((area) => (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setSeating(area.id)}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    seating === area.id
                      ? 'border-neutral-950 bg-neutral-950 text-white shadow-2xs'
                      : 'border-neutral-200 bg-neutral-50 text-neutral-800 hover:bg-neutral-100'
                  }`}
                >
                  <div className="font-mono text-xs font-bold">{area.label}</div>
                  <div
                    className={`text-[11px] mt-0.5 font-sans ${
                      seating === area.id ? 'text-neutral-300' : 'text-neutral-500'
                    }`}
                  >
                    {area.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Special Requests / About Yourself */}
          <div>
            <label className="block text-xs font-mono font-semibold text-neutral-700 mb-1.5">
              <FileText className="h-3 w-3 inline mr-1 text-neutral-500" />
              SPECIAL REQUESTS / ABOUT YOURSELF (अपने बारे में जानकारी)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., Dietary preferences, espresso origin questions, or celebratory occasion..."
              className="w-full rounded-lg border border-neutral-200 bg-neutral-50/50 px-3 py-2 text-xs text-neutral-900 focus:bg-white focus:border-neutral-950 focus:outline-none transition-colors resize-none"
            />
          </div>
        </div>

        {/* Right Panel: Live WhatsApp Preview & Action Hub */}
        <div className="lg:col-span-5 p-4 sm:p-6 bg-neutral-50/50 flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-200/80 pb-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-950 flex items-center gap-1.5">
                <Smartphone className="h-3.5 w-3.5 text-emerald-600" />
                Live WhatsApp Dispatch Preview
              </span>
              <span className="rounded bg-emerald-100 px-1.5 py-0.5 font-mono text-[10px] text-emerald-800 font-semibold border border-emerald-300">
                Ready to Send
              </span>
            </div>

            {/* Simulated WhatsApp Chat Bubble */}
            <div className="rounded-xl border border-emerald-300/80 bg-[#DCF8C6]/30 p-3.5 space-y-2 text-neutral-900 shadow-2xs">
              <div className="flex items-center justify-between text-[11px] font-mono text-emerald-900 font-semibold">
                <span>To: Aura Concierge ({WHATSAPP_DISPLAY_PHONE})</span>
                <span>Just Now</span>
              </div>
              <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-neutral-900 leading-relaxed font-normal bg-white/70 rounded-lg p-3 border border-emerald-200/60">
                {generatedMessage}
              </pre>
            </div>

            {/* Generated wa.me URL Preview */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>GENERATED URI ENDPOINT</span>
                <button
                  onClick={handleCopyLink}
                  className="text-emerald-700 hover:text-emerald-900 flex items-center gap-1 font-semibold"
                >
                  {copiedLink ? <Check className="h-2.5 w-2.5" /> : <Copy className="h-2.5 w-2.5" />}
                  <span>{copiedLink ? 'Copied Link' : 'Copy URI'}</span>
                </button>
              </div>
              <div className="rounded-md border border-neutral-200 bg-white p-2 text-[11px] font-mono text-neutral-600 break-all select-all">
                {whatsappUrl}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-3 border-t border-neutral-200/80">
            <button
              onClick={handleDispatch}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-4 py-3 font-mono text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg"
            >
              {dispatched ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>DISPATCHED TO WHATSAPP!</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>DISPATCH TO WHATSAPP ({WHATSAPP_DISPLAY_PHONE})</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </>
              )}
            </button>

            <button
              onClick={handleCopyMessage}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 px-3 py-2 font-mono text-xs font-semibold transition-colors"
            >
              {copiedMsg ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Message Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-neutral-500" />
                  <span>Copy Message Text</span>
                </>
              )}
            </button>

            <p className="text-[11px] text-center text-neutral-500 font-sans mt-2">
              Opens WhatsApp Web or mobile app directly with the pre-composed table reservation request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
