# ⬛ HV DEV — Portfolio

### College Undergraduate · Frontend & Web Application Developer · AI-Assisted Workflow

[Live Portfolio](https://harshdev-omega.vercel.app/)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Enabled-5A0FC8?logo=pwa&logoColor=white)

A developer portfolio showcasing three live web projects, interactive case studies, device previews, and an AI-assisted development workflow.

The portfolio is built as a React 19 single-page application with TypeScript, Tailwind CSS, Motion, and PWA support.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Projects](#-live-projects)
- [Tech Stack](#-tech-stack)
- [Key Features](#-key-features)
- [Project Structure](#-project-structure)
- [Navigation Architecture](#-navigation-architecture)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)
- [Deployment](#-deployment)
- [AI-Assisted Workflow](#-ai-assisted-workflow)
- [What I Focus On](#-what-i-focus-on)
- [Contact](#-contact)
- [License](#-license)

---

## 🧭 Overview

This is the personal portfolio of a college undergraduate developer focused on building and shipping real web projects while developing deeper software engineering fundamentals.

The portfolio has three main purposes:

### Showcase
Present three live projects built and deployed using Vercel and Netlify.

### Inspect
Provide technical case studies with project structure, architecture explanations, implementation details, and performance information.

### Explore
Allow visitors to preview the showcased projects through an integrated device simulator.

The portfolio itself is a React 19 SPA with:

- TypeScript
- Tailwind CSS v4
- Motion
- PWA support
- Responsive layouts
- Hash-based navigation
- Interactive project case studies
- Live project previews

---

# 🚀 Live Projects

## 01 — AURA Athletic Club

**Ultra-premium private athletic club & recovery-focused landing experience**

**Live:**  
https://aura-athlete.vercel.app/

### Highlights

- 7 major content sections/pages
- Interactive membership and consultation experience
- Trainer and location showcases
- Interactive VIP booking flow
- Responsive mobile-first layouts
- Motion-based UI transitions
- Dynamic viewport handling with `100dvh`
- Lighthouse performance score around 99 during testing

### Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Vercel

> The booking experience is implemented as an interactive frontend flow rather than a persistent backend reservation system.

---

## 02 — QuickSolve Platinum

**Offline-ready collection of client-side calculation tools**

**Live:**  
https://quicksolve-platinum.netlify.app/

### Highlights

- 96+ calculation utilities
- 11 specialized tool suites
- Finance and loan calculations
- GST tools
- Mathematical utilities
- Programmer utilities
- Health and biometrics tools
- Scientific calculations
- Equation and expression utilities
- PWA support
- Client-side computation
- Offline-oriented architecture

### Stack

- HTML
- CSS
- JavaScript
- PWA APIs
- Client-side calculation engines
- Netlify

The project also includes shared calculation logic and reusable interfaces across multiple utility categories.

---

## 03 — Aura Cafe

**Modern cafe landing page with a structured WhatsApp booking flow**

**Live:**  
https://auracafes.netlify.app/

### Highlights

- Responsive cafe landing page
- Interactive menu/catalog
- Business-hours status indicator
- `useCafeStatus` custom React hook
- Booking form with guest/date/time/seating details
- Structured WhatsApp message generation
- Motion-based interactions
- Mobile-first layout
- Lighthouse performance testing

### Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React
- Netlify

> The booking system is a client-side flow that formats booking information and opens WhatsApp with the generated message. It does not use a database or persistent reservation backend.

---

# 🛠 Tech Stack

## Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- HTML
- CSS
- JavaScript

## UI & Interaction

- Motion
- Lucide React
- React-based component architecture
- Responsive design
- Custom UI components

## Progressive Web App

- `vite-plugin-pwa`
- Service worker
- Offline caching
- Web App Manifest
- Install detection
- Android installation support
- iOS installation guidance

## Development & Tooling

- Bun
- npm
- Git
- GitHub
- Termux
- Acode

## Deployment

- Vercel
- Netlify

## AI-Assisted Development

- ChatGPT
- Google Gemini
- Google AI Studio
- Google Anti Gravity
- Anthropic Claude
- Google Flow

---

# ✨ Key Features

## 🖥 Live Project Simulator

The portfolio includes an integrated simulator for the showcased projects.

Features include:

- Desktop preview
- Tablet preview
- Mobile preview
- Embedded live-site iframe
- Reload controls
- URL display
- Open-in-new-tab option

---

## 🔬 Interactive Case Studies

Each project has its own technical deep-dive containing relevant information about:

- Project structure
- Components
- Architecture
- Features
- Implementation decisions
- Performance results
- Project-specific interactive demonstrations

---

## 📱 PWA Support

The portfolio can be installed as a Progressive Web App.

### Android

Uses the browser's installation prompt when available.

### iOS

Provides instructions for adding the application through Safari's Share menu.

The application also detects standalone display mode to adjust the installation UI accordingly.

---

## 🧭 Hash-Based Navigation

The portfolio uses lightweight hash-based navigation for its project deep-dives.

Example:

```text
/#quicksolve-review
/#auracafe-review
/#athlete-review
```

The application listens for browser navigation events and switches between the main portfolio and project deep-dive views.

---

# 📂 Project Structure

```text
PORTFOLIO_ROOT/
│
├── public/
│   ├── logo.svg
│   ├── manifest.json
│   └── icons/
│
├── src/
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── LiveSiteModal.tsx
│   │   ├── ToolsIUsed.tsx
│   │   ├── Methodology.tsx
│   │   ├── AboutMe.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── PWAInstallButton.tsx
│   │
│   ├── quicksolve/
│   ├── auracafe/
│   ├── auraathlete/
│   │
│   ├── data/
│   ├── hooks/
│   │   └── usePWAInstall.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   ├── types.ts
│   └── index.css
│
├── generate-icons.js
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── bun.lock
```

---

# 🏗 Navigation Architecture

The application uses a lightweight view-based architecture.

```text
App.tsx
│
├── portfolio
│   └── Main Portfolio
│
├── quicksolve-deep-dive
│   └── QuickSolveDeepDive
│
├── auracafe-deep-dive
│   └── AuraCafeDeepDive
│
└── athlete-deep-dive
    └── AuraAthleteDeepDive
```

Navigation is controlled through URL hashes and browser history events.

This keeps the project simple while allowing each case study to behave like a separate view.

---

# 🔧 Getting Started

## Prerequisites

- Node.js `>= 18`
- npm `>= 9`
- Bun `>= 1` (optional)

## Clone

```bash
git clone https://github.com/harsh00000670-afk/my_profile.git
cd my_profile
```

## Install Dependencies

Using Bun:

```bash
bun install
```

Or npm:

```bash
npm install
```

## Environment Variables

If AI-powered functionality is enabled, create:

```text
.env.local
```

and add:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Do not commit real API keys to the repository.

## Start Development Server

```bash
bun run dev
```

or:

```bash
npm run dev
```

The development server is configured for local network testing.

---

# 📜 Scripts

| Command | Purpose |
|---|---|
| `bun run dev` | Start development server |
| `bun run build` | Build the application |
| `bun run preview` | Preview production build |
| `bun run lint` | Run TypeScript checking |
| `bun run clean` | Remove generated build/server files |
| `node generate-icons.js` | Generate PWA icons |

---

# 🚢 Deployment

## Vercel

1. Import the repository into Vercel.
2. Select the Vite framework preset.
3. Deploy.

## Netlify

1. Connect the repository to Netlify.
2. Set the build command:

```bash
npm run build
```

3. Set the publish directory:

```text
dist
```

The SPA fallback configuration allows application routes to resolve correctly.

---

# 🤖 AI-Assisted Development

AI is an active part of my development workflow.

I use AI tools for:

- Exploring implementation approaches
- Rapid prototyping
- Debugging
- Refactoring
- Understanding unfamiliar code
- Architecture brainstorming
- Documentation
- Research
- Iterative development

The workflow is not simply generating code and shipping it.

My approach is:

```text
Idea
  ↓
Prototype
  ↓
Read the implementation
  ↓
Run & test
  ↓
Break / find problems
  ↓
Debug
  ↓
Understand
  ↓
Refine
  ↓
Ship
```

AI helps accelerate iteration, while understanding the resulting code and validating the implementation remain part of the development process.

---

# 🧠 What I Focus On

I am currently building deeper foundations in:

- Programming fundamentals
- Data structures & algorithms
- C / C++
- Python
- JavaScript / TypeScript
- React
- SQL
- Git & GitHub
- Linux
- Networking
- Operating systems
- Backend development
- Software architecture
- AI-assisted development

My longer-term direction is toward software engineering, systems, AI, and full-stack development.

---

# 📬 Contact

**Email:**  
quicksolve.platinum@gmail.com

**Portfolio:**  
https://harshdev-omega.vercel.app/

**GitHub:**  
https://github.com/harsh00000670-afk

**Status:**  
Open to opportunities, collaborations, and web development projects.

---

# 📄 License

This repository is publicly available for portfolio and code-review purposes.

Please do not redistribute or resell the project as your own work.

---

### Built with

**React 19 · TypeScript · Tailwind CSS · Motion · Vite**

*College Undergraduate · Frontend & Web Application Developer · AI-Assisted Workflow*
