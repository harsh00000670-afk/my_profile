import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, MessageSquare, Send } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/projects';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(DEVELOPER_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="border-b border-neutral-200/80 bg-white py-12 sm:py-20 lg:py-24 overflow-x-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-10 lg:p-16 text-white relative overflow-hidden">
          {/* Subtle Grid Accent in Dark Container */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 font-mono text-[11px] text-neutral-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              <span>OPEN TO OPPORTUNITIES & COLLABORATIONS</span>
            </div>

            <h2 className="mt-4 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Let&apos;s build something exceptional together.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl">
              Whether you want to discuss full-stack development, collaborate on a new venture, explore my live projects, or connect for internship/entry roles—my inbox is always open.
            </p>

            {/* Interactive Email Bar */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl">
              <div className="flex flex-1 items-center justify-between rounded-lg border border-neutral-800 bg-neutral-900/90 px-4 py-3 font-mono text-sm text-neutral-200">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="h-4 w-4 text-neutral-400 shrink-0" />
                  <span className="truncate select-all text-white font-medium">
                    {DEVELOPER_PROFILE.email}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  title="Copy email address"
                  className="ml-3 rounded p-1 text-neutral-400 hover:text-white transition-colors"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              <a
                href={`mailto:${DEVELOPER_PROFILE.email}?subject=Project%20Inquiry%20/%20Portfolio%20Connection`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-mono text-xs font-bold text-neutral-950 transition-all hover:bg-neutral-200 active:scale-95"
              >
                <span>SEND DIRECT EMAIL</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Quick response note */}
            <div className="mt-6 flex items-center gap-4 font-mono text-xs text-neutral-500">
              <span>RESPONSE TIME: &lt; 24 HOURS</span>
              <span>·</span>
              <span>UTC+5:30 (IST)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
