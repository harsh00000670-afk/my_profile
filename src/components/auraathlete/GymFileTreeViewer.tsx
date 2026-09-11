import React, { useState } from 'react';
import {
  Folder,
  FolderOpen,
  FileCode,
  FileText,
  Copy,
  Check,
  ChevronRight,
  ChevronDown,
  Terminal,
  Layers,
  Sparkles,
} from 'lucide-react';
import { GYM_FILE_TREE, GymFileNode } from '../../data/gymArchitecture';

export function GymFileTreeViewer() {
  const [selectedFile, setSelectedFile] = useState<GymFileNode | null>(() => {
    // Default select VipBookingModal.tsx or OverviewPage.tsx
    const src = GYM_FILE_TREE.children?.find((c) => c.name === 'src');
    const comp = src?.children?.find((c) => c.name === 'components');
    return comp?.children?.find((c) => c.name === 'VipBookingModal.tsx') || null;
  });

  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    '/': true,
    '/src': true,
    '/src/components': true,
    '/src/data': true,
    '/src/pages': true,
    '/assets': false,
  });

  const [copied, setCopied] = useState(false);

  const toggleFolder = (path: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const handleCopy = (code?: string) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderTree = (node: GymFileNode) => {
    const isFolder = node.type === 'folder';
    const isExpanded = expandedFolders[node.path] ?? false;
    const isSelected = selectedFile?.path === node.path;

    return (
      <div key={node.path} className="text-xs font-mono select-none">
        <div
          onClick={() => {
            if (isFolder) {
              toggleFolder(node.path);
            } else {
              setSelectedFile(node);
            }
          }}
          className={`group flex items-center gap-1.5 py-1.5 px-2 rounded-md cursor-pointer transition-colors ${
            isSelected
              ? 'bg-neutral-900 text-white font-semibold'
              : 'text-neutral-700 hover:bg-neutral-100'
          }`}
        >
          {isFolder ? (
            <span className="text-neutral-400 group-hover:text-neutral-600">
              {isExpanded ? (
                <ChevronDown className="h-3.5 w-3.5" />
              ) : (
                <ChevronRight className="h-3.5 w-3.5" />
              )}
            </span>
          ) : (
            <span className="w-3.5" />
          )}

          {isFolder ? (
            isExpanded ? (
              <FolderOpen className={`h-4 w-4 shrink-0 ${isSelected ? 'text-amber-400' : 'text-amber-600'}`} />
            ) : (
              <Folder className={`h-4 w-4 shrink-0 ${isSelected ? 'text-amber-400' : 'text-amber-600'}`} />
            )
          ) : node.name.endsWith('.tsx') || node.name.endsWith('.ts') ? (
            <FileCode className={`h-4 w-4 shrink-0 ${isSelected ? 'text-cyan-300' : 'text-cyan-600'}`} />
          ) : (
            <FileText className={`h-4 w-4 shrink-0 ${isSelected ? 'text-neutral-300' : 'text-neutral-400'}`} />
          )}

          <span className="truncate">{node.name}</span>

          {node.name === 'VipBookingModal.tsx' && (
            <span className="ml-auto shrink-0 rounded bg-amber-100 px-1.5 py-0.2 text-[9px] font-bold text-amber-900 border border-amber-300">
              VIP Booking
            </span>
          )}

          {node.name === 'gymData.ts' && (
            <span className="ml-auto shrink-0 rounded bg-blue-100 px-1.5 py-0.2 text-[9px] font-bold text-blue-900 border border-blue-300">
              Data Store
            </span>
          )}

          {node.name === 'bun.lock' && (
            <span className="ml-auto shrink-0 rounded bg-neutral-100 px-1.5 py-0.2 text-[9px] font-bold text-neutral-600 border border-neutral-300">
              Bun Lock
            </span>
          )}
        </div>

        {isFolder && isExpanded && node.children && (
          <div className="pl-4 border-l border-neutral-200/80 ml-2.5 my-0.5 space-y-0.5">
            {node.children.map((child) => renderTree(child))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white shadow-xs overflow-hidden">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 bg-neutral-50/80 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-neutral-900" />
          <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-950">
            AURA ATHLETIC CLUB // CODEBASE ARCHITECTURE
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-600 font-semibold border border-neutral-200">
            .git excluded
          </span>
          <span className="inline-flex items-center gap-1 rounded bg-amber-100 px-2 py-0.5 font-mono text-[10px] text-amber-900 font-semibold border border-amber-200">
            24 Verified Files
          </span>
        </div>
      </div>

      {/* Main 2-Column Split: Tree on left, File Details/Snippet on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left Column: Interactive File Explorer */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-neutral-200 p-3 sm:p-4 bg-neutral-50/40 overflow-y-auto max-h-[520px]">
          <div className="mb-2 flex items-center justify-between px-2 text-[11px] font-mono text-neutral-400 uppercase font-semibold">
            <span>Explorer (AURA-ATHLETIC-CLUB)</span>
            <span>Click to inspect</span>
          </div>
          {renderTree(GYM_FILE_TREE)}
        </div>

        {/* Right Column: Code & Architecture Inspector */}
        <div className="lg:col-span-7 p-4 sm:p-6 flex flex-col justify-between bg-white overflow-x-hidden">
          {selectedFile ? (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm sm:text-base font-bold text-neutral-950">
                      {selectedFile.name}
                    </span>
                    <span className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[10px] text-neutral-600 border border-neutral-200">
                      {selectedFile.type === 'folder' ? 'DIRECTORY' : 'FILE'}
                    </span>
                  </div>
                  <div className="font-mono text-[11px] text-neutral-500 mt-0.5 break-all">
                    {selectedFile.path}
                  </div>
                </div>

                {selectedFile.codeSnippet && (
                  <button
                    onClick={() => handleCopy(selectedFile.codeSnippet)}
                    className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-md border border-neutral-200 bg-white px-2.5 py-1 font-mono text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 transition-colors shadow-2xs shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-600" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 text-neutral-500" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* File Purpose & Description */}
              <div className="rounded-lg bg-neutral-50 border border-neutral-200/80 p-3.5">
                <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  Architectural Role &amp; Module Purpose
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans">
                  {selectedFile.description}
                </p>
              </div>

              {/* Code Snippet Preview */}
              {selectedFile.codeSnippet && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span>PRODUCTION IMPLEMENTATION SNIPPET</span>
                    <span>TypeScript / React 19</span>
                  </div>
                  <pre className="rounded-lg bg-neutral-950 p-3.5 sm:p-4 text-neutral-100 font-mono text-xs overflow-x-auto border border-neutral-800 leading-relaxed">
                    <code>{selectedFile.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 text-neutral-400">
              <Layers className="h-8 w-8 mb-2 stroke-1" />
              <p className="font-mono text-xs">Select any file from the explorer to inspect its code and architectural role.</p>
            </div>
          )}

          {/* Bottom Callout */}
          <div className="mt-6 pt-3 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[11px] text-neutral-500">
            <span>Bun Package Manager · React 19 · Vite 6 · Tailwind CSS</span>
            <span className="text-amber-800 font-semibold">100dvh Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
}
