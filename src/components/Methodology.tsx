import React from 'react';
import { Cpu, Terminal, Zap, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export const Methodology: React.FC = () => {
  const pillars = [
    {
      index: '01',
      icon: Cpu,
      title: 'AI & LLM Augmentation',
      description:
        'Harnessing cutting-edge Large Language Models and AI engineering workflows as force-multipliers for rapid system architecture, complex logic generation, and accelerated iterations.',
      points: [
        'Accelerated prototyping & algorithmic problem modeling',
        'Intelligent refactoring and multi-paradigm code synthesis',
        '10x velocity without sacrificing clean architectural standards',
      ],
    },
    {
      index: '02',
      icon: BookOpen,
      title: 'First-Principles Engineering',
      description:
        'Grounding every build in solid computer science fundamentals, semantic HTML, strict TypeScript typing, and modular state management to ensure lasting stability.',
      points: [
        'Strong grasp of data structures, algorithms, and browser APIs',
        'Strict TypeScript type safety and defensive logic flows',
        'Continuous deep learning alongside college engineering degree',
      ],
    },
    {
      index: '03',
      icon: Layers,
      title: 'Design Systems & Sensory UX',
      description:
        'Crafting refined digital experiences inspired by high-end modern minimalism. Eliminating visual noise, optimizing optical contrast, and respecting user time.',
      points: [
        'Mathematical spacing systems and typographic step ratios',
        'Fluid responsive interfaces that scale seamlessly across devices',
        'Tactile interactions, clean micro-animations, and fast feedback loops',
      ],
    },
    {
      index: '04',
      icon: Zap,
      title: 'Continuous Edge Deployment',
      description:
        'Moving from local concept to live global edge deployments instantly across platforms like Vercel and Netlify with automated CI/CD and CDN distribution.',
      points: [
        'Production edge hosting for sub-second global responses',
        'Zero-downtime continuous deployment pipelines',
        'Real-world operational monitoring and live verification',
      ],
    },
  ];

  return (
    <section
      id="workflow"
      className="border-b border-neutral-200/80 bg-white py-12 sm:py-20 lg:py-24 overflow-x-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <Terminal className="h-3.5 w-3.5 text-neutral-900" />
            <span>DEVELOPMENT METHODOLOGY</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-950">
            How I build & ship production software.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            I believe modern development isn&apos;t about choosing between human intuition and AI tools—it is about synthesizing both. By pairing deep foundational knowledge with AI-driven speed, I turn ambitious ideas into verified, live products.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.index}
                className="group relative rounded-xl border border-neutral-200 bg-neutral-50/40 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-neutral-900 hover:bg-white"
              >
                <div className="flex items-center justify-between border-b border-neutral-200/70 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-xs">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-neutral-900 transition-colors">
                    [ {pillar.index} ]
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight text-neutral-950">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {pillar.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-neutral-200/60 pt-4">
                  {pillar.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-neutral-950 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
