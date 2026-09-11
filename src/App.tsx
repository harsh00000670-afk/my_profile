import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { Methodology } from './components/Methodology';
import { AboutMe } from './components/AboutMe';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LiveSiteModal } from './components/LiveSiteModal';
import { QuickSolveDeepDive } from './components/quicksolve/QuickSolveDeepDive';
import { AuraCafeDeepDive } from './components/auracafe/AuraCafeDeepDive';
import { AuraAthleteDeepDive } from './components/auraathlete/AuraAthleteDeepDive';
import { ToolsIUsed } from './components/ToolsIUsed';
import { PROJECTS } from './data/projects';
import { Project } from './types';
import { Layers, Globe, Filter } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'ALL' | 'Vercel' | 'Netlify'>('ALL');
  const [currentView, setCurrentView] = useState<
    'portfolio' | 'quicksolve-deep-dive' | 'auracafe-deep-dive' | 'athlete-deep-dive'
  >(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#quicksolve-review') {
        return 'quicksolve-deep-dive';
      }
      if (window.location.hash === '#auracafe-review') {
        return 'auracafe-deep-dive';
      }
      if (window.location.hash === '#athlete-review') {
        return 'athlete-deep-dive';
      }
    }
    return 'portfolio';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#quicksolve-review') {
        setCurrentView('quicksolve-deep-dive');
      } else if (window.location.hash === '#auracafe-review') {
        setCurrentView('auracafe-deep-dive');
      } else if (window.location.hash === '#athlete-review') {
        setCurrentView('athlete-deep-dive');
      } else if (!window.location.hash || window.location.hash === '#projects') {
        setCurrentView('portfolio');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openQuickSolveDeepDive = () => {
    setCurrentView('quicksolve-deep-dive');
    window.location.hash = '#quicksolve-review';
  };

  const openAuraCafeDeepDive = () => {
    setCurrentView('auracafe-deep-dive');
    window.location.hash = '#auracafe-review';
  };

  const openAuraAthleteDeepDive = () => {
    setCurrentView('athlete-deep-dive');
    window.location.hash = '#athlete-review';
  };

  const returnToPortfolio = () => {
    setCurrentView('portfolio');
    if (
      window.location.hash === '#quicksolve-review' ||
      window.location.hash === '#auracafe-review' ||
      window.location.hash === '#athlete-review'
    ) {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  };

  // If user navigated to the QuickSolve Deep-Dive review page
  if (currentView === 'quicksolve-deep-dive') {
    return <QuickSolveDeepDive onBack={returnToPortfolio} />;
  }

  // If user navigated to the Aura Cafe Deep-Dive review page
  if (currentView === 'auracafe-deep-dive') {
    return <AuraCafeDeepDive onBack={returnToPortfolio} />;
  }

  // If user navigated to the Aura Athlete Deep-Dive review page
  if (currentView === 'athlete-deep-dive') {
    return <AuraAthleteDeepDive onBack={returnToPortfolio} />;
  }

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'ALL') return true;
    return p.platform === filter;
  });

  return (
    <div className="min-h-[100dvh] w-full bg-white text-neutral-950 font-sans selection:bg-neutral-950 selection:text-white overflow-x-hidden">
      {/* Top Fixed Header */}
      <Header
        onOpenQuickSolveReview={openQuickSolveDeepDive}
        onOpenAuraCafeReview={openAuraCafeDeepDive}
        onOpenAuraAthleteReview={openAuraAthleteDeepDive}
        onHomeClick={returnToPortfolio}
      />

      {/* Hero Section */}
      <Hero />

      {/* Main Projects Section */}
      <main id="projects" className="border-b border-neutral-200/80 bg-white py-12 sm:py-20 md:py-24 overflow-x-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header & Platform Filters */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 sm:pb-10 border-b border-neutral-200">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <Globe className="h-3.5 w-3.5 text-neutral-900" />
                <span>FEATURED WORK // 3 VERIFIED SITES</span>
              </div>
              <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950">
                Live Production Deployments
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-2xl">
                Each site below is currently live and active on global CDNs. Click &ldquo;Simulator&rdquo; to test the interface directly, or &ldquo;Visit Live&rdquo; to launch in a new tab.
              </p>
            </div>

            {/* Platform Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1 rounded-lg border border-neutral-200 bg-neutral-50 p-1 font-mono text-xs">
              <button
                onClick={() => setFilter('ALL')}
                className={`rounded-md px-3 py-1.5 font-medium transition-all ${
                  filter === 'ALL'
                    ? 'bg-white text-neutral-950 shadow-xs'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                ALL [3]
              </button>
              <button
                onClick={() => setFilter('Vercel')}
                className={`rounded-md px-3 py-1.5 font-medium transition-all ${
                  filter === 'Vercel'
                    ? 'bg-white text-neutral-950 shadow-xs'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                VERCEL [1]
              </button>
              <button
                onClick={() => setFilter('Netlify')}
                className={`rounded-md px-3 py-1.5 font-medium transition-all ${
                  filter === 'Netlify'
                    ? 'bg-white text-neutral-950 shadow-xs'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                NETLIFY [2]
              </button>
            </div>
          </div>

          {/* Project Cards Stack */}
          <div className="mt-12 space-y-10 sm:space-y-12">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenPreview={(p) => setSelectedProject(p)}
                onOpenDeepDive={
                  project.id === 'quicksolve-platinum'
                    ? openQuickSolveDeepDive
                    : project.id === 'aura-cafes'
                    ? openAuraCafeDeepDive
                    : project.id === 'aura-athlete'
                    ? openAuraAthleteDeepDive
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </main>

      {/* Tools I Used Section */}
      <ToolsIUsed />

      {/* Methodology Section */}
      <Methodology />

      {/* About Section */}
      <AboutMe />

      {/* Contact Section */}
      <ContactSection />

      {/* Minimalist Footer */}
      <Footer />

      {/* Interactive Live Site Modal / Device Simulator */}
      <LiveSiteModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
