import React, { useState } from 'react';
import {
  Wrench,
  Bot,
  Sparkles,
  Cpu,
  Layers,
  Globe,
  GitBranch,
  BarChart3,
  Search,
  Code2,
  ExternalLink,
  CheckCircle2,
  Flame,
  Zap,
  Terminal,
  ArrowUpRight,
  Boxes,
  Binary,
  Activity,
  Workflow,
  Smartphone,
  Table,
} from 'lucide-react';

interface ToolItem {
  id: string;
  name: string;
  category: 'ai' | 'ui' | 'cloud' | 'analytics' | 'devtools' | 'languages';
  categoryLabel: string;
  role: string;
  description: string;
  impactNote: string;
  url?: string;
  tags: string[];
  status: string;
  statusColor: string;
  icon: React.ComponentType<{ className?: string }>;
  accentBorder: string;
}

export const ToolsIUsed: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const tools: ToolItem[] = [
    // AI & LLM Engines
    {
      id: 'gemini',
      name: 'Google Gemini',
      category: 'ai',
      categoryLabel: 'AI & LLMs',
      role: 'Advanced Multi-Modal Reasoning & Logic Architecture',
      description:
        'Utilized for deep contextual code synthesis, architectural brainstorming, multi-paradigm logic structuring, and rapid algorithmic prototyping across all web projects.',
      impactNote: 'Accelerated complex problem modeling and multi-step full-stack reasoning.',
      url: 'https://gemini.google.com',
      tags: ['Google DeepMind', 'Reasoning Engine', 'Multi-Modal', 'Architecture'],
      status: 'Daily Driver',
      statusColor: 'bg-blue-50 text-blue-800 border-blue-200',
      icon: Sparkles,
      accentBorder: 'hover:border-blue-300',
    },
    {
      id: 'ai-studio',
      name: 'Google AI Studio',
      category: 'ai',
      categoryLabel: 'AI & LLMs',
      role: 'System Prompt Engineering & API Prototyping',
      description:
        'The developer workbench used to craft system instructions, experiment with Gemini temperature settings, and rapidly prototype high-velocity agentic workflows.',
      impactNote: 'Provided deterministic prompt tuning and lightning-fast developer iteration.',
      url: 'https://aistudio.google.com',
      tags: ['Prompt Engineering', 'API Testing', 'Gemini Pro / Flash', 'Workbench'],
      status: 'Core Workspace',
      statusColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      icon: Cpu,
      accentBorder: 'hover:border-emerald-300',
    },
    {
      id: 'antigravity',
      name: 'Google Anti Gravity',
      category: 'ai',
      categoryLabel: 'AI & LLMs',
      role: 'Autonomous Agentic Coding & Full-Stack Synthesis',
      description:
        'Google DeepMind’s autonomous AI engineering agent. Orchestrates multi-file code synthesis, shell commands, terminal execution, dependency resolution, and end-to-end full-stack builds.',
      impactNote: 'Powers autonomous iteration, architecture refactoring, and deterministic build verification.',
      url: 'https://deepmind.google',
      tags: ['Google DeepMind', 'Antigravity Agent', 'Autonomous Coding', 'Full-Stack Agent'],
      status: 'Agentic Core',
      statusColor: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      icon: Workflow,
      accentBorder: 'hover:border-indigo-300',
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT (OpenAI)',
      category: 'ai',
      categoryLabel: 'AI & LLMs',
      role: 'Iterative Debugging & Logic Brainstorming',
      description:
        'Used extensively for cross-referencing implementation strategies, edge-case analysis, synthetic test generation, and deep code reviews during development cycles.',
      impactNote: 'Key sparring partner for resolving algorithmic bottlenecks and syntax queries.',
      url: 'https://chatgpt.com',
      tags: ['OpenAI', 'Code Review', 'Edge Case Analysis', 'Debugging'],
      status: 'Active Workflow',
      statusColor: 'bg-teal-50 text-teal-800 border-teal-200',
      icon: Bot,
      accentBorder: 'hover:border-teal-300',
    },
    {
      id: 'claude',
      name: 'Anthropic Claude',
      category: 'ai',
      categoryLabel: 'AI & LLMs',
      role: 'Long-Context Architecture & Nuanced Refactoring',
      description:
        'Leveraged for analyzing large codebase structures, generating architectural artifacts, and drafting clean, self-contained documentation with nuanced stylistic control.',
      impactNote: 'Exceptional for large-file audits and modular architectural separation.',
      url: 'https://claude.ai',
      tags: ['Anthropic', 'Long Context', 'System Refactoring', 'Architecture'],
      status: 'Production Refactor',
      statusColor: 'bg-amber-50 text-amber-800 border-amber-200',
      icon: Terminal,
      accentBorder: 'hover:border-amber-300',
    },
    {
      id: 'google-assistant',
      name: 'Google Assistant',
      category: 'ai',
      categoryLabel: 'AI & LLMs',
      role: 'Voice-Driven Productivity & Daily Task Automation',
      description:
        'Integrated into everyday development routines for hands-free queries, timeboxing build sprints, setting reminder triggers, and streamlining operational productivity.',
      impactNote: 'Maintains focused build velocity through conversational workflow shortcuts.',
      url: 'https://assistant.google.com',
      tags: ['Voice Productivity', 'Task Automation', 'Focus Sprints', 'Google Ecosystem'],
      status: 'Daily Routine',
      statusColor: 'bg-purple-50 text-purple-800 border-purple-200',
      icon: Zap,
      accentBorder: 'hover:border-purple-300',
    },

    // UI & Components
    {
      id: 'react-bits',
      name: 'React Bits',
      category: 'ui',
      categoryLabel: 'UI & Components',
      role: 'High-Performance Animated UI Components',
      description:
        'Explored and integrated dynamic animated patterns, tactile micro-interactions, canvas physics, and modern typography layouts from the popular reactbits.dev library.',
      impactNote: 'Inspired fluid interactive states, sleek border animations, and modern sensory UX.',
      url: 'https://reactbits.dev',
      tags: ['reactbits.dev', 'Micro-Interactions', 'Tailwind CSS', 'Animated UI'],
      status: 'Sensory Design',
      statusColor: 'bg-pink-50 text-pink-800 border-pink-200',
      icon: Layers,
      accentBorder: 'hover:border-pink-300',
    },
    {
      id: 'motion-io',
      name: 'motion.io (Motion)',
      category: 'ui',
      categoryLabel: 'UI & Components',
      role: 'Declarative Physics & 60fps Micro-Interactions',
      description:
        'Implemented for buttery 60fps layout transitions, tactile button press physics, spring-based modal entry/exit animations, and smooth viewport state shifts without frame dropping.',
      impactNote: 'Brings living, tactile physics and smooth transitions to modals, navigation bars, and cards.',
      url: 'https://motion.dev',
      tags: ['motion.io', 'Framer Motion', 'Physics Springs', '60fps Transitions'],
      status: 'Animation Core',
      statusColor: 'bg-violet-50 text-violet-800 border-violet-200',
      icon: Activity,
      accentBorder: 'hover:border-violet-300',
    },
    {
      id: 'google-stitch',
      name: 'Google Stitch',
      category: 'ui',
      categoryLabel: 'UI & Components',
      role: 'UI Composition, Component Stitching & Design Bridging',
      description:
        'Leveraged for rapid interface stitching, responsive layout alignment, seamless token mapping, and bridging design artifacts into production-ready React component trees.',
      impactNote: 'Ensured immaculate visual hierarchy, zero layout shifts, and pixel-precise component composition.',
      tags: ['Google Design', 'Component Stitching', 'UI Tokens', 'Layout Precision'],
      status: 'Design Engine',
      statusColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      icon: Boxes,
      accentBorder: 'hover:border-emerald-300',
    },

    // Cloud & Deployment
    {
      id: 'vercel',
      name: 'Vercel',
      category: 'cloud',
      categoryLabel: 'Cloud & Deploy',
      role: 'Global Edge Network & Production CDN Hosting',
      description:
        'Primary deployment infrastructure for high-performance projects like AURA Athletic Club. Delivers sub-40ms TTFB globally with automated Git push previews and edge caching.',
      impactNote: 'Guarantees 100dvh viewport stability, zero cold starts, and worldwide CDN distribution.',
      url: 'https://vercel.com',
      tags: ['Edge Network', 'Vite 6 / Bun', 'Global CDN', 'Instant Previews'],
      status: 'Production Host',
      statusColor: 'bg-neutral-900 text-white border-neutral-950',
      icon: Globe,
      accentBorder: 'hover:border-neutral-950',
    },
    {
      id: 'netlify',
      name: 'Netlify',
      category: 'cloud',
      categoryLabel: 'Cloud & Deploy',
      role: 'Continuous CI/CD & Atomic Edge Deployments',
      description:
        'Powering live deployments for QuickSolve Platinum and Aura Cafes with automated branch deploys, custom headers, zero-downtime rollbacks, and instant CDN propagation.',
      impactNote: 'Rock-solid hosting with verified uptime for 2 of my 3 flagship production web apps.',
      url: 'https://netlify.com',
      tags: ['Atomic Deploys', 'Continuous CI/CD', 'Edge Routing', 'Live Hosting'],
      status: 'Production Host',
      statusColor: 'bg-cyan-50 text-cyan-800 border-cyan-200',
      icon: Zap,
      accentBorder: 'hover:border-cyan-300',
    },
    {
      id: 'github',
      name: 'GitHub',
      category: 'cloud',
      categoryLabel: 'Cloud & Deploy',
      role: 'Distributed Version Control & Source Code Repository',
      description:
        'Central repository for all project codebases, tracking atomic commits, release tags, continuous integration webhooks, and collaborative software management.',
      impactNote: 'Enforces clean branch discipline and seamless webhook triggers to Vercel and Netlify.',
      url: 'https://github.com',
      tags: ['Git', 'Version Control', 'CI/CD Webhooks', 'Open Source'],
      status: 'Repository Core',
      statusColor: 'bg-neutral-100 text-neutral-800 border-neutral-300',
      icon: GitBranch,
      accentBorder: 'hover:border-neutral-400',
    },

    // Analytics & Telemetry
    {
      id: 'umami',
      name: 'Umami Analytics',
      category: 'analytics',
      categoryLabel: 'Analytics & SEO',
      role: 'Privacy-Focused Lightweight Visitor Telemetry',
      description:
        'Implemented for real-time web telemetry without cookie banners or GDPR compliance baggage. Tracks page views, referral sources, and visitor flow with zero performance penalty.',
      impactNote: 'Sub-2KB footprint ensuring 100/100 Core Web Vitals without surveillance cookies.',
      url: 'https://umami.is',
      tags: ['Privacy-First', 'GDPR Compliant', 'No Cookies', 'Real-Time Telemetry'],
      status: 'Active Telemetry',
      statusColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      icon: BarChart3,
      accentBorder: 'hover:border-emerald-300',
    },
    {
      id: 'google-search-console',
      name: 'Google Search Console',
      category: 'analytics',
      categoryLabel: 'Analytics & SEO',
      role: 'Search Visibility, Crawl Telemetry & Core Web Vitals',
      description:
        'Used to verify domain ownership, monitor sitemap indexing status, inspect organic search impressions, and ensure zero crawl errors across search engine spiders.',
      impactNote: 'Ensures public web accessibility, high indexing health, and mobile usability pass rates.',
      url: 'https://search.google.com/search-console',
      tags: ['SEO Indexing', 'Crawl Health', 'Core Web Vitals', 'Sitemaps'],
      status: 'Search Verified',
      statusColor: 'bg-amber-50 text-amber-800 border-amber-200',
      icon: Search,
      accentBorder: 'hover:border-amber-300',
    },

    // Mobile Dev & Workflow Tools
    {
      id: 'termux',
      name: 'Termux',
      category: 'devtools',
      categoryLabel: 'Mobile & Dev Tools',
      role: 'Android Linux Terminal & Mobile CLI Environment',
      description:
        'Provides a full, sandboxed Linux CLI environment on Android with APT package management. Used for running bash scripts, Git operations, Node/Python CLI commands, and rapid testing anywhere.',
      impactNote: 'Turned mobile hardware into an on-the-go terminal and development testbed.',
      url: 'https://termux.dev',
      tags: ['Termux', 'Linux CLI', 'Bash & Shell', 'Android Terminal'],
      status: 'Mobile Shell',
      statusColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      icon: Terminal,
      accentBorder: 'hover:border-emerald-300',
    },
    {
      id: 'acode',
      name: 'Acode',
      category: 'devtools',
      categoryLabel: 'Mobile & Dev Tools',
      role: 'Lightweight Mobile Code Editor & IDE',
      description:
        'A sleek, powerful code editor for Android supporting 100+ languages, syntax highlighting, Git integration, multi-tab editing, and in-browser previewing.',
      impactNote: 'Enabled rapid code inspection, quick fixes, and on-the-go file editing directly from mobile.',
      url: 'https://acode.app',
      tags: ['Mobile IDE', 'Code Editor', 'Syntax Highlighting', 'Git Ready'],
      status: 'Mobile IDE',
      statusColor: 'bg-amber-50 text-amber-800 border-amber-200',
      icon: Smartphone,
      accentBorder: 'hover:border-amber-300',
    },
    {
      id: 'google-sheets',
      name: 'Google Sheets',
      category: 'devtools',
      categoryLabel: 'Mobile & Dev Tools',
      role: 'Data Modeling, Content Structuring & Schema Planning',
      description:
        'Utilized for organizing project data dictionaries, tracking development backlogs, mapping JSON schemas, structuring tabular content, and testing formula logic.',
      impactNote: 'Essential workspace for preliminary data modeling and structuring before writing TypeScript interfaces.',
      url: 'https://sheets.google.com',
      tags: ['Google Workspace', 'Data Modeling', 'Schema Planning', 'Tabular Logic'],
      status: 'Data & Schemas',
      statusColor: 'bg-green-50 text-green-800 border-green-200',
      icon: Table,
      accentBorder: 'hover:border-green-300',
    },
    {
      id: 'google-flow',
      name: 'Google Flow',
      category: 'devtools',
      categoryLabel: 'Mobile & Dev Tools',
      role: 'Workflow Automation, Process Orchestration & Logic Pipelines',
      description:
        'Used for orchestrating multi-step automated workflows, connecting event triggers, sequencing tasks, and streamlining productivity pipelines across the development lifecycle.',
      impactNote: 'Automated repetitive task sequences and connected operational workflows seamlessly.',
      tags: ['Process Automation', 'Event Triggers', 'Task Pipelines', 'Orchestration'],
      status: 'Workflow Engine',
      statusColor: 'bg-blue-50 text-blue-800 border-blue-200',
      icon: Workflow,
      accentBorder: 'hover:border-blue-300',
    },

    // Languages & Systems
    {
      id: 'python',
      name: 'Python',
      category: 'languages',
      categoryLabel: 'Languages & Systems',
      role: 'Core Programming Language — Scripting & Logic',
      description:
        'Proficient and confident in Python. Used for writing clean algorithms, rapid prototyping, data manipulation, automation tasks, and backend API integration.',
      impactNote: 'Go-to language for rapid algorithmic thinking and general-purpose computational logic.',
      tags: ['Proficient', 'Algorithm Design', 'Scripting', 'Automation'],
      status: 'Proficient Language',
      statusColor: 'bg-blue-50 text-blue-900 border-blue-300',
      icon: Code2,
      accentBorder: 'hover:border-blue-400',
    },
    {
      id: 'c-lang',
      name: 'C Language',
      category: 'languages',
      categoryLabel: 'Languages & Systems',
      role: 'Procedural Foundations & Low-Level Memory Mechanics',
      description:
        'The foundational bedrock of computer science. Practicing manual memory allocation, pointers, structs, stack/heap dynamics, and hardware-close computation.',
      impactNote: 'Deepens first-principles comprehension of memory architecture, pointers, and CPU instructions.',
      tags: ['Memory Pointers', 'Procedural C', 'Hardware Close', 'CS Bedrock'],
      status: 'Core Foundation',
      statusColor: 'bg-slate-100 text-slate-900 border-slate-300',
      icon: Binary,
      accentBorder: 'hover:border-slate-400',
    },
    {
      id: 'cpp',
      name: 'C++',
      category: 'languages',
      categoryLabel: 'Languages & Systems',
      role: 'Systems Programming & Performance Deep Dive',
      description:
        'Currently learning and mastering C++. Focusing on low-level memory management, pointers, STL data structures, algorithmic efficiency, and object-oriented architectures.',
      impactNote: 'Deepening understanding of memory pointers, compile-time optimization, and raw compute.',
      tags: ['Active Learning', 'Memory Management', 'STL & Algorithms', 'High Performance'],
      status: 'Currently Learning',
      statusColor: 'bg-indigo-50 text-indigo-900 border-indigo-300',
      icon: Flame,
      accentBorder: 'hover:border-indigo-400',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Tools', count: tools.length },
    { id: 'ai', label: 'AI & LLMs', count: tools.filter((t) => t.category === 'ai').length },
    { id: 'ui', label: 'UI & Components', count: tools.filter((t) => t.category === 'ui').length },
    { id: 'cloud', label: 'Cloud & Deploy', count: tools.filter((t) => t.category === 'cloud').length },
    { id: 'analytics', label: 'Analytics & SEO', count: tools.filter((t) => t.category === 'analytics').length },
    { id: 'devtools', label: 'Mobile & Dev Tools', count: tools.filter((t) => t.category === 'devtools').length },
    { id: 'languages', label: 'Languages & Systems', count: tools.filter((t) => t.category === 'languages').length },
  ];

  const filteredTools = tools.filter((tool) => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <section
      id="tools"
      className="border-b border-neutral-200/80 bg-neutral-50/40 py-12 sm:py-20 lg:py-24 overflow-x-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Top Eyebrow & Title */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <Wrench className="h-3.5 w-3.5 text-neutral-900" />
              <span>STACK &amp; WORKFLOW // {tools.length} VERIFIED TECHNOLOGIES</span>
            </div>
            <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950">
              Tools I Used
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed">
              Every system, library, AI engine, hosting provider, and language that actively powers my software engineering journey — organized into distinct functional domains.
            </p>
          </div>

          {/* Quick Stats Pill Stack */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <div className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 shadow-2xs">
              <span className="text-neutral-400 uppercase text-[10px] block">Total Tools</span>
              <span className="font-bold text-neutral-900 text-sm">{tools.length} Disclosed</span>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 shadow-2xs">
              <span className="text-neutral-400 uppercase text-[10px] block">Live Deployments</span>
              <span className="font-bold text-emerald-600 text-sm">Vercel &amp; Netlify</span>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 shadow-2xs">
              <span className="text-neutral-400 uppercase text-[10px] block">Mobile &amp; Shell</span>
              <span className="font-bold text-amber-700 text-sm">Termux &amp; Acode</span>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 shadow-2xs">
              <span className="text-neutral-400 uppercase text-[10px] block">Systems &amp; Logic</span>
              <span className="font-bold text-indigo-700 text-sm">C, C++ &amp; Python</span>
            </div>
          </div>
        </div>

        {/* Highlight Banner: Languages & Foundational Rigor */}
        <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-7 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <Binary className="h-4 w-4 text-indigo-600" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-indigo-950">
                  PROGRAMMING FOUNDATIONS &amp; SYSTEMS ARCHITECTURE
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-950">
                Procedural Foundations in C · Proficient in Python · Actively Mastering C++
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                My engineering approach is rooted in solid programming fundamentals. In development, I use <span className="font-semibold text-neutral-900">Python</span> as my daily powerhouse for algorithmic logic, scripting, and automation. To understand low-level computation and systems mechanics from first principles, I write procedural <span className="font-semibold text-neutral-900">C</span> to master manual memory pointers and stack/heap allocation, while actively deep-diving into modern <span className="font-semibold text-neutral-900">C++</span> to master object-oriented architecture, STL algorithms, and hardware-close execution speed as I expand into high-performance software systems.
              </p>
            </div>

            {/* Language Micro Badges */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full lg:w-auto shrink-0 font-mono text-xs">
              <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3 flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  Py
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-blue-950">Python</span>
                    <span className="rounded bg-blue-200 text-blue-900 px-1.5 py-0.2 text-[10px] font-semibold">
                      PROFICIENT
                    </span>
                  </div>
                  <span className="text-[11px] text-blue-800">Core Language · Algorithms &amp; Automation</span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-300 bg-slate-100/80 p-3 flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  C
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-950">C Language</span>
                    <span className="rounded bg-slate-300 text-slate-900 px-1.5 py-0.2 text-[10px] font-semibold">
                      FOUNDATION
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-700">Memory Pointers · Procedural Bedrock</span>
                </div>
              </div>

              <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-3 flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  C++
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-indigo-950">C++</span>
                    <span className="rounded bg-indigo-200 text-indigo-900 px-1.5 py-0.2 text-[10px] font-semibold">
                      LEARNING
                    </span>
                  </div>
                  <span className="text-[11px] text-indigo-800">Memory Mechanics · STL · Systems Speed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-lg px-3 py-1.5 transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-neutral-950 text-white shadow-2xs font-semibold'
                      : 'border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                      isSelected ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-500'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64 font-mono text-xs">
            <input
              type="text"
              placeholder="Search tools, tags, or roles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-900 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Tool Cards Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                id={`tool-box-${tool.id}`}
                className={`rounded-xl border border-neutral-200 bg-white p-5 flex flex-col justify-between transition-all duration-200 shadow-2xs hover:shadow-sm ${tool.accentBorder}`}
              >
                {/* Top Header of Card */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="h-9 w-9 rounded-lg border border-neutral-200 bg-neutral-50 flex items-center justify-center text-neutral-900 shadow-2xs shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-neutral-950 tracking-tight flex items-center gap-1.5">
                          <span>{tool.name}</span>
                          {tool.url && (
                            <a
                              href={tool.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-neutral-400 hover:text-neutral-950 transition-colors"
                              title={`Visit ${tool.name}`}
                            >
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          )}
                        </h4>
                        <span className="font-mono text-[11px] text-neutral-500 block">
                          {tool.role}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`inline-block rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold shrink-0 ${tool.statusColor}`}
                    >
                      {tool.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-600 leading-relaxed font-sans mb-3">
                    {tool.description}
                  </p>

                  {/* Impact Highlight Box */}
                  <div className="rounded-lg border border-neutral-100 bg-neutral-50/80 p-2.5 mb-4">
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-[11px] text-neutral-700 leading-snug font-sans">
                        <span className="font-semibold text-neutral-900">How I Used It:</span>{' '}
                        {tool.impactNote}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer: Tags & Link */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {tool.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[10px] text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {tool.url && (
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-neutral-900 hover:underline shrink-0"
                    >
                      <span>Explore</span>
                      <ExternalLink className="h-3 w-3 text-neutral-500" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State if search yields no result */}
        {filteredTools.length === 0 && (
          <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-8 text-center font-mono text-xs text-neutral-500">
            No tools matched &ldquo;{searchQuery}&rdquo;. Try another keyword or clear the filter.
          </div>
        )}
      </div>
    </section>
  );
};
