import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Share2, X, Smartphone, Check } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [shared, setShared] = useState(false);

  // If already installed, hide prompt button or show share action
  if (isInstalled) {
    return null;
  }

  // Native Web Share Trigger
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Harsh Vishwakarma | Developer Portfolio',
          text: 'Explore live deployed apps, AI systems, and case studies by Harsh Vishwakarma.',
          url: window.location.origin,
        });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch {
        // Share cancelled or dismissed
      }
    } else {
      navigator.clipboard.writeText(window.location.origin);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        id="pwa-install-app-btn"
        onClick={install}
        className="inline-flex items-center gap-1.5 rounded-md border border-neutral-300 bg-white px-2.5 py-1.5 font-mono text-[11px] font-semibold text-neutral-800 shadow-2xs hover:bg-neutral-100 hover:text-neutral-950 transition-all active:scale-95"
        title="Install Web App to Home Screen"
      >
        <Download className="h-3.5 w-3.5 text-blue-600 animate-bounce" />
        <span className="hidden sm:inline">INSTALL APP</span>
        <span className="sm:hidden">PWA</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          id="pwa-ios-install-btn"
          onClick={() => setShowIOSGuide(true)}
          className="inline-flex items-center gap-1.5 rounded-md border border-neutral-300 bg-white px-2.5 py-1.5 font-mono text-[11px] font-semibold text-neutral-800 shadow-2xs hover:bg-neutral-100 transition-all"
        >
          <Smartphone className="h-3.5 w-3.5 text-neutral-600" />
          <span>INSTALL</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-neutral-200 text-neutral-900 font-sans">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-neutral-950 flex items-center justify-center p-1.5">
                    <img src="/logo.svg" alt="HV Logo" className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-tight">Install on iPhone / iPad</h3>
                    <p className="text-[11px] text-neutral-500 font-mono">Harsh // Dev PWA</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="rounded-full p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-3 font-mono text-xs text-neutral-700">
                <div className="flex items-start gap-3 rounded-lg bg-neutral-50 p-3 border border-neutral-100">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold text-white">1</span>
                  <span>Tap the <strong>Share button</strong> in Safari toolbar.</span>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-neutral-50 p-3 border border-neutral-100">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold text-white">2</span>
                  <span>Scroll down and tap <strong>Add to Home Screen</strong>.</span>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-lg bg-neutral-950 py-2.5 text-xs font-mono font-semibold text-white hover:bg-neutral-800 transition"
              >
                GOT IT
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  // Fallback direct share button for easy mobile sharing
  return (
    <button
      id="pwa-share-btn"
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 font-mono text-[11px] font-semibold text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 transition-all"
      title="Share Portfolio Web App"
    >
      {shared ? (
        <>
          <Check className="h-3.5 w-3.5 text-emerald-500" />
          <span>LINK COPIED</span>
        </>
      ) : (
        <>
          <Share2 className="h-3.5 w-3.5 text-neutral-500" />
          <span className="hidden sm:inline">SHARE</span>
        </>
      )}
    </button>
  );
};
