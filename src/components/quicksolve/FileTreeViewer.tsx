import React, { useState } from 'react';
import { QUICKSOLVE_FILE_TREE, FileNode } from '../../data/quicksolveArchitecture';
import {
  Folder,
  FolderOpen,
  FileCode,
  FileText,
  Music,
  FileSpreadsheet,
  Search,
  ChevronRight,
  ChevronDown,
  Layers,
  Copy,
  Check,
} from 'lucide-react';

interface FileTreeItemProps {
  key?: string;
  node: FileNode;
  level: number;
  searchQuery: string;
  expandedFolders: Set<string>;
  toggleFolder: (path: string) => void;
  onSelectFile: (node: FileNode) => void;
  selectedPath: string | null;
}

function matchesSearch(node: FileNode, query: string): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  if (node.name.toLowerCase().includes(q)) return true;
  if (node.description?.toLowerCase().includes(q)) return true;
  if (node.children) {
    return node.children.some((child) => matchesSearch(child, query));
  }
  return false;
}

function getFileIcon(name: string) {
  if (name.endsWith('.html')) return <FileCode className="h-4 w-4 text-orange-600" />;
  if (name.endsWith('.js')) return <FileCode className="h-4 w-4 text-amber-600" />;
  if (name.endsWith('.css')) return <FileCode className="h-4 w-4 text-blue-600" />;
  if (name.endsWith('.mp3')) return <Music className="h-4 w-4 text-emerald-600" />;
  if (name.endsWith('.json')) return <FileSpreadsheet className="h-4 w-4 text-amber-700" />;
  if (name.endsWith('.ttf') || name.endsWith('.woff2')) return <FileText className="h-4 w-4 text-purple-600" />;
  if (name.endsWith('.xml') || name.endsWith('.txt')) return <FileText className="h-4 w-4 text-neutral-500" />;
  return <FileText className="h-4 w-4 text-neutral-500" />;
}

function FileTreeItem({
  node,
  level,
  searchQuery,
  expandedFolders,
  toggleFolder,
  onSelectFile,
  selectedPath,
}: FileTreeItemProps) {
  const isMatch = matchesSearch(node, searchQuery);
  if (!isMatch) return null;

  const isFolder = node.type === 'folder';
  const isExpanded = expandedFolders.has(node.path) || Boolean(searchQuery);
  const isSelected = selectedPath === node.path;

  return (
    <div>
      <div
        onClick={() => {
          if (isFolder) {
            toggleFolder(node.path);
          } else {
            onSelectFile(node);
          }
        }}
        className={`group flex items-center justify-between py-1 px-2 rounded-md font-mono text-xs cursor-pointer transition-colors ${
          isSelected
            ? 'bg-neutral-900 text-white'
            : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950'
        }`}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
      >
        <div className="flex items-center gap-2 truncate">
          {isFolder ? (
            <span className="text-neutral-400 group-hover:text-neutral-700">
              {isExpanded ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
            </span>
          ) : (
            <span className="w-3.5" />
          )}

          {isFolder ? (
            isExpanded ? (
              <FolderOpen className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-neutral-900'}`} />
            ) : (
              <Folder className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-neutral-600'}`} />
            )
          ) : (
            getFileIcon(node.name)
          )}

          <span className={`truncate font-medium ${isFolder ? 'font-bold' : ''}`}>
            {node.name}
          </span>
        </div>

        {node.description && (
          <span
            className={`hidden md:inline text-[11px] truncate max-w-[280px] pl-3 text-right ${
              isSelected ? 'text-neutral-300' : 'text-neutral-400 group-hover:text-neutral-500'
            }`}
          >
            {node.description}
          </span>
        )}
      </div>

      {isFolder && isExpanded && node.children && (
        <div>
          {node.children.map((child) => (
            <FileTreeItem
              key={child.path}
              node={child}
              level={level + 1}
              searchQuery={searchQuery}
              expandedFolders={expandedFolders}
              toggleFolder={toggleFolder}
              onSelectFile={onSelectFile}
              selectedPath={selectedPath}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function FileTreeViewer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);
  const [copied, setCopied] = useState(false);

  // Initialize with top suites expanded
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    initial.add('/');
    initial.add('/gst_suites');
    initial.add('/programmer_suites');
    initial.add('/enginev12');
    initial.add('/assets');
    return initial;
  });

  const toggleFolder = (path: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  };

  const expandAll = () => {
    const all = new Set<string>();
    function collect(n: FileNode) {
      if (n.type === 'folder') {
        all.add(n.path);
        n.children?.forEach(collect);
      }
    }
    collect(QUICKSOLVE_FILE_TREE);
    setExpandedFolders(all);
  };

  const collapseAll = () => {
    setExpandedFolders(new Set(['/']));
  };

  const copyPath = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="rounded-xl border border-neutral-200 bg-white shadow-xs overflow-hidden">
      {/* Top Terminal Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-200 bg-neutral-50/80 px-4 py-3 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-neutral-300 border border-neutral-400/40" />
            <span className="h-3 w-3 rounded-full bg-neutral-300 border border-neutral-400/40" />
            <span className="h-3 w-3 rounded-full bg-neutral-300 border border-neutral-400/40" />
          </div>
          <span className="font-mono text-xs font-semibold text-neutral-900 ml-2">
            REPOSITORY STRUCTURE // QUICKSOLVE PLATINUM
          </span>
          <span className="hidden sm:inline-block rounded border border-neutral-200 bg-white px-2 py-0.5 font-mono text-[10px] text-neutral-600">
            .git excluded as requested
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={expandAll}
            className="rounded border border-neutral-200 bg-white px-2.5 py-1 font-mono text-[11px] font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="rounded border border-neutral-200 bg-white px-2.5 py-1 font-mono text-[11px] font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="p-3 border-b border-neutral-200 bg-white flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search files, suites or calculators (e.g. itc, bmi, bitwise, audio, epoch)..."
            className="w-full rounded-md border border-neutral-200 bg-neutral-50/60 pl-9 pr-3 py-1.5 font-mono text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:bg-white focus:outline-hidden"
          />
        </div>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="rounded border border-neutral-200 bg-white px-2 py-1 font-mono text-xs text-neutral-600 hover:bg-neutral-100"
          >
            Clear
          </button>
        )}
      </div>

      {/* Tree View Container */}
      <div className="max-h-[500px] overflow-y-auto p-2 font-mono text-xs bg-white">
        <FileTreeItem
          node={QUICKSOLVE_FILE_TREE}
          level={0}
          searchQuery={searchQuery}
          expandedFolders={expandedFolders}
          toggleFolder={toggleFolder}
          onSelectFile={(node) => setSelectedFile(node)}
          selectedPath={selectedFile?.path || null}
        />
      </div>

      {/* Footer / Selected File Detail Bar */}
      <div className="border-t border-neutral-200 bg-neutral-50 px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
        <div className="flex items-center gap-2 truncate">
          <span className="text-neutral-500">Selected:</span>
          {selectedFile ? (
            <span className="font-semibold text-neutral-900 truncate">
              {selectedFile.path}
            </span>
          ) : (
            <span className="text-neutral-400 italic">Click any file to inspect details</span>
          )}
        </div>

        {selectedFile && (
          <div className="flex items-center gap-3">
            {selectedFile.description && (
              <span className="text-neutral-600 hidden md:inline text-[11px]">
                {selectedFile.description}
              </span>
            )}
            <button
              onClick={() => copyPath(selectedFile.path)}
              className="inline-flex items-center gap-1 rounded border border-neutral-200 bg-white px-2 py-1 text-[11px] font-medium text-neutral-700 hover:bg-neutral-100"
            >
              {copied ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
              <span>{copied ? 'Copied' : 'Copy Path'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
