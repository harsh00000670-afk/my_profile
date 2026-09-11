import React, { useState } from 'react';
import { X, ExternalLink, RefreshCw, Smartphone, Monitor, Tablet, Copy, Check, ShieldCheck } from 'lucide-react';
import { Project } from '../types';

interface LiveSiteModalProps {
  project: Project | null;
  onClose: () => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const LiveSiteModal: React.FC<LiveSiteModalProps> = ({ project, onClose }) => {
  const [device, setDevice] = useState<DeviceMode>('desktop');
  const [copied, setCopied] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  if (!project) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(project.liveUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReload = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div
      id="live-site-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/70 p-0 sm:p-4 md:p-6 backdrop-blur-sm animate-in fade-in duration-200 h-[100dvh] w-full"
    >
      <div
        id="live-site-modal-window"
        className="flex h-[100dvh] sm:h-[92dvh] w-full max-w-6xl flex-col rounded-none sm:rounded-xl border-0 sm:border border-neutral-200 bg-white shadow-2xl overflow-hidden"
      >
        {/* Modal Browser Chrome Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-3 sm:px-4 py-2 sm:py-2.5 gap-2 shrink-0">
          {/* Window Traffic Dots & Title */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>
            <div className="hidden sm:flex items-center gap-2 border-l border-neutral-300 pl-3">
              <span className="font-mono text-xs font-semibold text-neutral-800 truncate max-w-[140px]">
                {project.title}
              </span>
              <span className="font-mono text-[10px] text-neutral-400">
                [{project.platform} Edge]
              </span>
            </div>
          </div>

          {/* Interactive URL Bar */}
          <div className="flex flex-1 min-w-0 max-w-md items-center justify-between rounded-md border border-neutral-200 bg-white px-2.5 sm:px-3 py-1 font-mono text-xs text-neutral-700 mx-1 sm:mx-2">
            <div className="flex items-center gap-2 truncate">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
              <span className="truncate text-neutral-800">{project.liveUrl}</span>
            </div>
            <button
              onClick={handleCopy}
              title="Copy URL"
              className="ml-2 text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-600" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </div>

          {/* Device Controls, Reload & Close */}
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="hidden sm:flex items-center rounded-md border border-neutral-200 bg-neutral-100 p-0.5">
              <button
                onClick={() => setDevice('desktop')}
                title="Desktop View"
                className={`rounded px-2 py-1 transition-colors ${
                  device === 'desktop'
                    ? 'bg-white text-neutral-900 shadow-xs'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                <Monitor className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setDevice('tablet')}
                title="Tablet View"
                className={`rounded px-2 py-1 transition-colors ${
                  device === 'tablet'
                    ? 'bg-white text-neutral-900 shadow-xs'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                <Tablet className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setDevice('mobile')}
                title="Mobile View"
                className={`rounded px-2 py-1 transition-colors ${
                  device === 'mobile'
                    ? 'bg-white text-neutral-900 shadow-xs'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                <Smartphone className="h-3.5 w-3.5" />
              </button>
            </div>

            <button
              onClick={handleReload}
              title="Reload Frame"
              className="rounded-md border border-neutral-200 bg-white p-1.5 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
            >
              <RefreshCw className="h-3.5 w-3.5" />
            </button>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-neutral-900 bg-neutral-950 px-2 sm:px-2.5 py-1.5 font-mono text-[10px] sm:text-[11px] font-medium text-white transition-colors hover:bg-neutral-800 shrink-0"
            >
              <span className="hidden sm:inline">OPEN NEW TAB</span>
              <span className="sm:hidden">TAB</span>
              <ExternalLink className="h-3 w-3" />
            </a>

            <button
              onClick={onClose}
              title="Close Preview"
              className="rounded-md p-1.5 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-900 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Viewport Frame Container */}
        <div className="relative flex flex-1 items-center justify-center overflow-auto bg-neutral-100/70 p-2 sm:p-4">
          <div
            className={`transition-all duration-300 h-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-md flex flex-col ${
              device === 'desktop'
                ? 'w-full'
                : device === 'tablet'
                ? 'w-[768px] max-w-full'
                : 'w-[375px] max-w-full'
            }`}
          >
            <div className="flex-1 w-full relative">
              <iframe
                key={iframeKey}
                src={project.liveUrl}
                title={`${project.title} Live Preview`}
                className="h-full w-full border-none"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar Info */}
        <div className="flex flex-wrap items-center justify-between border-t border-neutral-200 bg-white px-4 py-2 text-xs text-neutral-500 font-mono">
          <div className="flex items-center gap-3">
            <span>STATUS: 200 OK</span>
            <span>·</span>
            <span>SSL: SECURE</span>
            <span>·</span>
            <span className="hidden sm:inline">EDGE: ACTIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Note: If preview is blocked by provider policies, click &ldquo;OPEN NEW TAB&rdquo;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
