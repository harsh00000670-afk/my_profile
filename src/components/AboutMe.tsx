import React from 'react';
import { GraduationCap, Code, Sparkles, Compass, CheckCircle } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/projects';

export const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="border-b border-neutral-200/80 bg-white py-12 sm:py-20 lg:py-24 overflow-x-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Context & Bio */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <GraduationCap className="h-3.5 w-3.5 text-neutral-900" />
              <span>COLLEGE UNDERGRAD · SOFTWARE BUILDER</span>
            </div>

            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-950">
              Building real products while mastering the foundations.
            </h2>

            <div className="mt-6 space-y-4 text-base text-neutral-600 leading-relaxed">
              <p>
                I am currently pursuing my college degree, but my education doesn&apos;t stop at classroom theory. I actively build and deploy production software that lives on the web for anyone to visit and experience.
              </p>
              <p>
                My approach combines curiosity, disciplined engineering fundamentals, and modern AI acceleration. By integrating cutting-edge LLMs and web ecosystems with hands-on development, I rapidly transform complex concepts into responsive, high-performance web products.
              </p>
              <p>
                Whether it&apos;s an athletic performance portal like <span className="font-semibold text-neutral-900">Aura Athlete</span>, an algorithmic tool suite like <span className="font-semibold text-neutral-900">QuickSolve Platinum</span>, or a sensory hospitality platform like <span className="font-semibold text-neutral-900">Aura Cafes</span>, every project is driven by clean code, intuitive UX, and zero unnecessary bloat.
              </p>
            </div>

            {/* Core Values Checklist */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-neutral-800">
                <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Autonomous Builder Mindset</span>
              </div>
              <div className="flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-neutral-800">
                <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>AI-Assisted Rapid Iteration</span>
              </div>
              <div className="flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-neutral-800">
                <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Clean & Accessible UX</span>
              </div>
              <div className="flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-neutral-800">
                <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Global Edge Deployments</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Specifications & Technical DNA */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-4 sm:p-6 md:p-8">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4 font-mono text-xs">
                <span className="font-bold text-neutral-900 uppercase">DEVELOPER SPECIFICATIONS</span>
                <span className="text-neutral-400">[2026.SYS]</span>
              </div>

              <div className="mt-5 space-y-4 font-mono text-xs">
                <div>
                  <span className="text-neutral-400 block uppercase text-[10px]">Academic Status</span>
                  <span className="text-neutral-900 font-semibold text-sm">
                    Undergraduate Degree (In Progress) · Computer Science &amp; Systems
                  </span>
                </div>

                <div>
                  <span className="text-neutral-400 block uppercase text-[10px]">Development Philosophy</span>
                  <span className="text-neutral-800 leading-normal block mt-0.5">
                    Continuous learning, self-driven research, pairing human logic with agentic AI to build live production apps.
                  </span>
                </div>

                <div>
                  <span className="text-neutral-400 block uppercase text-[10px]">Production Track Record</span>
                  <span className="text-neutral-900 font-semibold text-sm">
                    3 Verified Live Sites (Vercel &amp; Netlify)
                  </span>
                </div>

                <div>
                  <span className="text-neutral-400 block uppercase text-[10px]">Languages &amp; Core Systems</span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {[
                      'Python (Proficient)',
                      'C Language (Foundations)',
                      'C++ (Systems Learning)',
                      'TypeScript / React',
                      'Google Anti Gravity',
                      'Google AI Studio',
                      'Termux & Acode (Mobile CLI & IDE)',
                      'motion.io & React Bits',
                      'Vercel & Netlify',
                      'Umami Analytics',
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-white px-2 py-0.5 border border-neutral-200 text-neutral-800 text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-200">
                  <span className="text-neutral-400 block uppercase text-[10px]">Contact Channel</span>
                  <span className="text-neutral-900 font-semibold select-all break-all">
                    {DEVELOPER_PROFILE.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
