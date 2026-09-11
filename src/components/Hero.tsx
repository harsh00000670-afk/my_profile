import React from 'react';
import { ArrowDown, ExternalLink, Sparkles, Terminal, Globe, Cpu } from 'lucide-react';
import { PROJECTS, DEVELOPER_PROFILE } from '../data/projects';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden border-b border-neutral-200/80 bg-white py-12 sm:py-20 lg:py-28"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-grid-lines pointer-events-none opacity-60" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Futuristic Coordinate & Mode Header */}
        <div className="mb-5 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 font-mono text-[11px] text-neutral-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            <span>SYSTEM ONLINE</span>
            <span className="text-neutral-300">/</span>
            <span>COLLEGE UNDERGRAD BUILDER</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 bg-white px-3 py-1 font-mono text-[11px] text-neutral-500">
            <Cpu className="h-3 w-3 text-neutral-700" />
            <span>AI-AUGMENTED WORKFLOW</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="max-w-4xl">
          <h1
            id="hero-headline"
            className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] sm:leading-[1.08]"
          >
            Crafting high-converting landing pages & frontend web systems.
          </h1>

          <p
            id="hero-bio"
            className="mt-6 max-w-2xl text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal"
          >
            College undergrad developer specializing in landing pages, modern frontend web interfaces, and essential backend logic. I focus on pixel-perfect execution, responsive UI/UX design, and AI-augmented workflows while expanding toward full-stack engineering.
          </p>
        </div>

        {/* Live Project Quick Index Bar */}
        <div className="mt-10 pt-8 border-t border-neutral-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              <Globe className="h-3.5 w-3.5 text-neutral-900" />
              <span>Verified Live Deployments ({PROJECTS.length})</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {PROJECTS.map((project) => (
                <a
                  key={project.id}
                  href={`#project-${project.id}`}
                  className="group inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50/80 px-3 py-1.5 font-mono text-xs text-neutral-800 transition-all hover:border-neutral-900 hover:bg-white hover:text-neutral-950"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                  <span className="font-medium">{project.title}</span>
                  <span className="text-[10px] text-neutral-400 font-normal group-hover:text-neutral-600">
                    ({project.platform})
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Primary Call to Actions & Metric Chips */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            id="cta-view-projects"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-950 bg-neutral-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-neutral-800 active:scale-[0.98]"
          >
            <span>Explore Portfolio Work</span>
            <ArrowDown className="h-4 w-4" />
          </a>

          <a
            href={`mailto:${DEVELOPER_PROFILE.email}`}
            id="cta-contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-800 transition-all hover:border-neutral-900 hover:text-neutral-950 active:scale-[0.98]"
          >
            <span>Get in Touch</span>
            <ExternalLink className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
