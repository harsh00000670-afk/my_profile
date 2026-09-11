import React, { useEffect, useState } from 'react';
import { PROJECTS, DEVELOPER_PROFILE } from '../data/projects';
import { ArrowUp, Globe, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-white py-10 sm:py-12 text-neutral-600 overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="HV Logo" className="h-5 w-5 rounded border border-neutral-300 bg-white p-0.5" />
              <span className="font-mono text-xs font-bold text-neutral-950 uppercase tracking-widest">
                Harsh Vishwakarma // HV Dev
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <p className="mt-1 text-xs text-neutral-500 font-mono">
              College Undergrad &middot; Frontend & Landing Page Specialist
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs">
            {PROJECTS.map((project) => (
              <a
                key={project.id}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-950 transition-colors"
              >
                {project.displayUrl}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-neutral-900 font-bold hover:underline"
            >
              <span>TOP</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} QuickSolve</span>
            <span>&middot;</span>
            <span className="text-neutral-500">LIVE LOCAL TIME: {time || 'SYNCING...'}</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>ALL 3 PRODUCTION NODES OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
