<div align="center">

# ⬛ HV DEV — PORTFOLIO

### *Live Production Portfolio · 3 Verified Deployments · AI-Augmented Workflow*

[![Live Site](https://img.shields.io/badge/PORTFOLIO-LIVE-black?style=for-the-badge&logo=vercel&logoColor=white)](https://quicksolve-platinum.netlify.app)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Vite 6](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

<br/>

> **A high-performance developer portfolio showcasing 3 live production deployments with interactive deep-dive case studies, device simulators, and an AI-augmented development workflow.**

<br/>

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Projects Showcased](#-live-projects-showcased)
- [Tech Stack](#-tech-stack)
- [Key Features](#-key-features)
- [Project Structure](#-project-structure)
- [Deep Dive Architecture](#-deep-dive-architecture)
- [Getting Started](#-getting-started)
- [Scripts Reference](#-scripts-reference)
- [Deployment](#-deployment)
- [Tools & AI Workflow](#-tools--ai-workflow)
- [Contact](#-contact)

---

## 🧭 Overview

This is the **personal engineering portfolio** of an undergraduate developer focused on building real, live production software — not just demos. The portfolio is engineered as a production-grade React 19 SPA with Tailwind CSS v4, serving three distinct purposes:

1. **Showcase** — 3 verified live deployments on Vercel & Netlify global edge CDNs
2. **Inspect** — Interactive deep-dive case studies per project with file trees, architecture diagrams, and Lighthouse audit scores
3. **Simulate** — Built-in device simulator to preview each live site at mobile, tablet, or desktop breakpoints

The site itself is a **Progressive Web App (PWA)**, fully installable on both Android and iOS, and engineered with `100dvh` dynamic viewport compliance, `overflow-x` safe layout, and zero iOS input-zoom bugs.

---

## 🚀 Live Projects Showcased

### `01` — AURA Athletic Club
> **Ultra-premium private athletic residency & cellular recovery sanctuary**

| Detail | Value |
|---|---|
| 🌐 Live URL | [aura-athlete.vercel.app](https://aura-athlete.vercel.app) |
| ☁️ Platform | Vercel Edge CDN |
| 📄 Architecture | 7-Page Multi-Tab SPA |
| 📱 VIP Engine | Direct WhatsApp Concierge Booking |
| 📊 Lighthouse | 99 / 100 |
| 🔧 Viewport | 100dvh Zero-Shift Compliant |

**Highlights:**
- 7 architectural pages: Overview, Membership, Protocols, Spaces, Trainers, Flagships, Science
- VIP concierge reservation engine dispatching directly to WhatsApp
- Clinical recovery protocols: Hyperbaric Oxygen (HBOT), Sub-Zero Cryotherapy (-110°C), Infrared Sauna
- Zero CLS and zero TBT — rock-solid mobile Chrome & Safari stability

---

### `02` — QuickSolve Platinum
> **Professional offline-ready finance & developer calculator suite**

| Detail | Value |
|---|---|
| 🌐 Live URL | [quicksolve-platinum.netlify.app](https://quicksolve-platinum.netlify.app) |
| ☁️ Platform | Netlify Edge CDN |
| 📄 Architecture | Multi-Utility PWA Hub |
| 🔢 Tools | 96+ Calculation Utilities |
| 📊 Lighthouse | 100 / 100 SEO |
| 📦 Bundle | 100% Client-Side, Zero-Latency |

**Highlights:**
- 11 specialized suites: Finance, Math, Engineering, Health, Programmer, Biometrics & more
- GST Calculator, Loan EMI Planner, Equation Visualizer, Scientific Compute Engine
- Advanced programmer toolkit: Base Converter, JSON Formatter, Epoch Timestamps, Voice Input
- Offline-ready PWA with mobile app status bar and native install prompt support

---

### `03` — Aura Cafe
> **Artisanal roastery, liquid atelier & direct WhatsApp table reservation concierge**

| Detail | Value |
|---|---|
| 🌐 Live URL | [auracafes.netlify.app](https://auracafes.netlify.app) |
| ☁️ Platform | Netlify Edge CDN |
| 📄 Architecture | Multi-Section Sensory Landing Page |
| 📖 Catalog | 16 Live Artisanal Creations |
| 📊 Lighthouse | 99 / 100 Performance |
| 💬 Concierge | WhatsApp Direct (+91 9219143734) |

**Highlights:**
- Real-time operating status engine (`useCafeStatus` hook) with 30-second heartbeat intervals
- Serverless WhatsApp reservation pipeline — no database, no cold starts, zero backend cost
- 16-item sensory catalog: single-origin roasts, cold botanical extracts, hand-laminated French pastries
- Liquid-glass UI with EB Garamond editorial typography, Motion.js animations, and `100dvh` mobile compliance

---

## 🛠 Tech Stack

```
FRONTEND CORE
├── React 19              — Latest concurrent features & RSC-ready architecture
├── TypeScript 5.8        — Strict mode, full type safety across all components
├── Vite 6                — Lightning HMR, optimized production bundles
└── Tailwind CSS v4       — New @theme config, dvh utilities, no config file needed

ANIMATION & INTERACTION
├── Motion v12            — Declarative spring physics, 60fps layout animations
└── Lucide React          — Consistent, tree-shakeable SVG icon system

PROGRESSIVE WEB APP
├── vite-plugin-pwa       — Workbox service worker, offline caching, install prompt
└── usePWAInstall hook    — Custom iOS/Android install detection & deferred prompt

AI INTEGRATION
└── @google/genai         — Google Gemini API client for AI-powered features

BACKEND (Light)
├── Express 4             — Minimal local development server
└── dotenv                — Environment variable management for API keys

DEPLOYMENT
├── Vercel Edge           — Aura Athletic Club (zero-config, instant preview URLs)
└── Netlify Edge          — QuickSolve + Aura Cafe (Brotli, HTTP/2, _redirects SPA)

TOOLING
├── Bun                   — Fast lockfile & script runner
├── tsx                   — TypeScript server-side execution
├── esbuild               — Ultra-fast JS bundler for server compilation
└── sharp                 — Image optimization for PWA icon generation
```

---

## ✨ Key Features

### 🖥 Interactive Live Site Simulator
Click **"Simulator"** on any project card to open a full browser-chrome modal with:
- **Desktop / Tablet / Mobile** viewport switcher
- Real iframe embed of the live production site
- Reload button, URL bar with SSL indicator
- Open in new tab shortcut

### 🔬 Deep Dive Case Studies
Each of the 3 projects has a dedicated full-page technical deep-dive including:
- **File Tree Explorer** — Interactive repository structure (`.git` excluded)
- **Architecture Diagram** — Clickable multi-tier system overview
- **Lighthouse Audit Panel** — Desktop & mobile scores with Core Web Vitals
- **Project-Specific Simulator** — WhatsApp booking engine (Cafe), VIP booking form (Athlete), Calculator catalog (QuickSolve)
- **Section Jump Navigation** — Sticky header with quick-scroll pills

### 🧰 Tools I Used
Filterable grid of every tool in the development stack including:
- AI engines: Gemini, AI Studio, Claude, ChatGPT, Google Anti Gravity
- UI libraries: React Bits, motion.io, Google Stitch
- Cloud & deployment: Vercel, Netlify, Umami Analytics
- Languages: Python, C, C++, TypeScript

### 📲 PWA — Installable on Any Device
- **Android**: Native "Add to Home Screen" prompt via `beforeinstallprompt`
- **iOS Safari**: Share → Add to Home Screen with manual instruction sheet
- **Standalone mode detection**: Hides install button when already installed

### 🧭 Single-Page Navigation
- Hash-based routing (`#quicksolve-review`, `#auracafe-review`, `#athlete-review`)
- Deep dive pages replace the portfolio view entirely (no nested scroll issues)
- Browser back/forward button support via `popstate`

---

## 📂 Project Structure

```
PORTFOLIO_ROOT/
├── public/
│   ├── logo.svg                    # HV monogram logo
│   ├── manifest.json               # PWA manifest (icons, theme, display)
│   └── icons/                      # PWA icon set (generated via generate-icons.js)
│
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Sticky nav: logo, availability pill, deep-dive links, PWA install
│   │   ├── Hero.tsx                # Bio headline, project quick-index, primary CTAs
│   │   ├── ProjectCard.tsx         # Project card: metadata, simulator trigger, deep-dive button
│   │   ├── LiveSiteModal.tsx       # Full-screen iframe simulator with device controls
│   │   ├── ToolsIUsed.tsx          # Filterable tool grid with category tabs & search
│   │   ├── Methodology.tsx         # 4-pillar development approach section
│   │   ├── AboutMe.tsx             # Bio, core values, developer spec sheet
│   │   ├── ContactSection.tsx      # Dark contact panel with email copy & mailto CTA
│   │   ├── Footer.tsx              # Live clock, project links, back-to-top
│   │   ├── PWAInstallButton.tsx    # Smart install button for Android + iOS
│   │   │
│   │   ├── quicksolve/             # QuickSolve Platinum deep-dive
│   │   │   ├── QuickSolveDeepDive.tsx
│   │   │   ├── FileTreeViewer.tsx
│   │   │   ├── ArchitectureDiagram.tsx
│   │   │   ├── AuditScoresSection.tsx
│   │   │   └── SuitesCatalog.tsx
│   │   │
│   │   ├── auracafe/               # Aura Cafe deep-dive
│   │   │   ├── AuraCafeDeepDive.tsx
│   │   │   ├── CafeFileTreeViewer.tsx
│   │   │   ├── CafeArchitectureDiagram.tsx
│   │   │   ├── WhatsAppBookingEngine.tsx
│   │   │   ├── CafeMenuShowcase.tsx
│   │   │   └── CafeAuditSection.tsx
│   │   │
│   │   └── auraathlete/            # Aura Athlete deep-dive
│   │       ├── AuraAthleteDeepDive.tsx
│   │       ├── GymFileTreeViewer.tsx
│   │       ├── GymArchitectureDiagram.tsx
│   │       ├── GymPagesShowcase.tsx
│   │       ├── GymAuditSection.tsx
│   │       └── VipBookingSimulator.tsx
│   │
│   ├── data/
│   │   ├── projects.ts             # PROJECTS array + DEVELOPER_PROFILE config
│   │   ├── cafeArchitecture.ts     # Cafe file tree, menu items, WhatsApp config
│   │   ├── quicksolveArchitecture.ts
│   │   └── gymArchitecture.ts
│   │
│   ├── hooks/
│   │   └── usePWAInstall.ts        # PWA deferred prompt + iOS detection hook
│   │
│   ├── App.tsx                     # Root: view router (portfolio | 3 deep-dives)
│   ├── main.tsx                    # React 19 createRoot entry
│   ├── types.ts                    # Project & DeveloperProfile TypeScript interfaces
│   └── index.css                   # Tailwind v4 @import, @theme tokens, global mobile fixes
│
├── generate-icons.js               # Sharp-based PWA icon generator script
├── index.html                      # HTML shell with font preconnects & meta tags
├── vite.config.ts                  # Vite + React + Tailwind + PWA plugin config
├── tsconfig.json                   # Strict TypeScript compiler options
├── package.json                    # Dependencies, scripts
├── bun.lock                        # Bun lockfile for reproducible installs
└── netlify.toml / _redirects       # SPA routing fallback for Netlify
```

---

## 🏗 Deep Dive Architecture

Each project's deep-dive is a **self-contained full-page view** triggered by hash navigation:

```
/#quicksolve-review  →  QuickSolveDeepDive
/#auracafe-review    →  AuraCafeDeepDive
/#athlete-review     →  AuraAthleteDeepDive
```

### Navigation Flow
```
App.tsx
 ├── currentView === 'portfolio'        → Full portfolio page
 ├── currentView === 'quicksolve-deep-dive'  → <QuickSolveDeepDive onBack={...} />
 ├── currentView === 'auracafe-deep-dive'    → <AuraCafeDeepDive onBack={...} />
 └── currentView === 'athlete-deep-dive'    → <AuraAthleteDeepDive onBack={...} />
```

### Deep Dive Sections (Aura Cafe example)
```
AuraCafeDeepDive
 ├── 01 / 4-Tier Technical Architecture  (CafeArchitectureDiagram)
 ├── 02 / Repository File Tree           (CafeFileTreeViewer)
 ├── 03 / WhatsApp Reservation Pipeline  (WhatsAppBookingEngine) ← live simulator
 ├── 04 / Sensory Menu Catalog (16 items)(CafeMenuShowcase)
 └── 05 / Lighthouse & Production Audit  (CafeAuditSection)
```

---

## 🧑‍💻 Getting Started

### Prerequisites

| Tool | Version |
|---|---|
| Node.js | `>= 18.x` |
| Bun (recommended) | `>= 1.x` |
| npm | `>= 9.x` (alternative to Bun) |

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
```

### 2. Install Dependencies

```bash
# Using Bun (recommended — faster)
bun install

# OR using npm
npm install
```

### 3. Set Up Environment Variables

```bash
# Create a .env.local file in the root
touch .env.local
```

Add your Gemini API key (only needed if AI features are active):
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Run Development Server

```bash
# Bun
bun run dev

# npm
npm run dev
```

The app will start at **[http://localhost:3000](http://localhost:3000)**

> The `--host=0.0.0.0` flag is set by default — this exposes the dev server on your local network (useful for testing on a real mobile device over Wi-Fi).

### 5. Generate PWA Icons (optional)

```bash
node generate-icons.js
```

This uses `sharp` to generate all required PWA icon sizes from the source SVG.

---

## 📜 Scripts Reference

| Script | Command | Description |
|---|---|---|
| **Dev server** | `bun run dev` | Start Vite dev server on port 3000 |
| **Production build** | `bun run build` | Type-check + bundle for production |
| **Preview build** | `bun run preview` | Locally preview the production build |
| **Type check** | `bun run lint` | Run `tsc --noEmit` strict type checking |
| **Clean** | `bun run clean` | Remove `dist/` and `server.js` |
| **Generate icons** | `node generate-icons.js` | Generate PWA icon set using sharp |

---

## 🚢 Deployment

### Netlify (Recommended for this portfolio)

1. Push to GitHub
2. Connect repo to Netlify
3. Build settings:
   ```
   Build command:  npm run build
   Publish dir:    dist
   Node version:   18
   ```
4. The `_redirects` file in `/public` handles SPA routing:
   ```
   /*    /index.html   200
   ```

### Vercel

1. Import repo from GitHub to Vercel dashboard
2. Framework preset: **Vite**
3. No additional config needed — `vite.config.ts` handles everything

### Environment Variables (Production)

Set in your Netlify/Vercel dashboard:
```
GEMINI_API_KEY = your_production_key
```

---

## 🤖 Tools & AI Workflow

This portfolio was built using an **AI-augmented development workflow**:

| Tool | Role |
|---|---|
| **Google Gemini** | Deep contextual code synthesis & architectural brainstorming |
| **Google AI Studio** | System prompt engineering & rapid API prototyping |
| **Google Anti Gravity** | Autonomous agentic coding, multi-file synthesis & full-stack builds |
| **Anthropic Claude** | Long-context codebase audits, architectural separation & nuanced refactoring |
| **ChatGPT (OpenAI)** | Cross-referencing, edge-case analysis & iterative debugging |
| **React Bits** | Animated UI component inspiration & micro-interaction patterns |
| **motion.io** | Declarative spring animations & 60fps layout transitions |
| **Termux + Acode** | Mobile CLI & IDE for development on-the-go |
| **Umami Analytics** | Privacy-first, cookieless production traffic analytics |

> The workflow pairs deep foundational knowledge (data structures, TypeScript, browser APIs) with AI-driven velocity to turn complex ideas into verified, live production apps at 10x speed — without sacrificing clean architecture.

---

## 📬 Contact

| Channel | Details |
|---|---|
| 📧 Email | [quicksolve.platinum@gmail.com](mailto:quicksolve.platinum@gmail.com) |
| 🌐 Portfolio | Live via this repo |
| ⚡ Response Time | < 24 hours |
| 🕐 Timezone | UTC+5:30 (IST) |
| 💼 Status | **Open to opportunities & collaborations** |

---

## 📄 License

This portfolio and its source code are the intellectual property of the developer. The codebase is shared publicly for portfolio review purposes. Please do not redistribute or resell.

---

<div align="center">

**Built with React 19 · TypeScript · Tailwind v4 · Motion · Vite**

*College Undergrad · Frontend & Landing Page Specialist · AI-Augmented Workflow*

[![Email](https://img.shields.io/badge/Email-quicksolve.platinum%40gmail.com-black?style=flat-square&logo=gmail)](mailto:quicksolve.platinum@gmail.com)

</div>
