import React, { useState } from 'react';
import { SUITES_DATA, SuiteDetail } from '../../data/quicksolveArchitecture';
import { Calculator, FileCode } from 'lucide-react';

export function SuitesCatalog() {
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>('all');
  const [query, setQuery] = useState('');

  const filteredSuites = SUITES_DATA.filter((suite) => {
    if (selectedSuiteId !== 'all' && suite.id !== selectedSuiteId) {
      return false;
    }
    if (!query) return true;
    const q = query.toLowerCase();
    const matchesSuite =
      suite.title.toLowerCase().includes(q) ||
      suite.description.toLowerCase().includes(q);
    const matchesTool = suite.calculators.some(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.fileName.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
    );
    return matchesSuite || matchesTool;
  });

  const totalCalculators = SUITES_DATA.reduce(
    (acc, suite) => acc + suite.calculators.length,
    0
  );

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <Calculator className="h-3.5 w-3.5 text-neutral-900" />
            <span>CALCULATION CATALOG // 11 SUITES // {totalCalculators} TOOLS</span>
          </div>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
            Specialized Suites &amp; Calculator Directory
          </h3>
          <p className="mt-2 text-sm text-neutral-600 max-w-2xl">
            Explore the complete directory of all domain suites. Each calculator is an independent, highly tuned mathematical micro-module.
          </p>
        </div>

        {/* Search within suites */}
        <div className="w-full md:w-72">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter calculators (e.g. GST, BMI, EMI, RFC)..."
            className="w-full rounded-md border border-neutral-200 bg-neutral-50/70 px-3 py-1.5 font-mono text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:bg-white focus:outline-hidden"
          />
        </div>
      </div>

      {/* Suite Selector Pills */}
      <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
        <button
          onClick={() => setSelectedSuiteId('all')}
          className={`rounded-md px-3 py-1.5 font-medium transition-all ${
            selectedSuiteId === 'all'
              ? 'bg-neutral-950 text-white shadow-xs'
              : 'border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
          }`}
        >
          All Suites ({totalCalculators})
        </button>
        {SUITES_DATA.map((suite) => (
          <button
            key={suite.id}
            onClick={() => setSelectedSuiteId(suite.id)}
            className={`rounded-md px-3 py-1.5 font-medium transition-all ${
              selectedSuiteId === suite.id
                ? 'bg-neutral-950 text-white shadow-xs'
                : 'border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
            }`}
          >
            {suite.title} ({suite.calculators.length})
          </button>
        ))}
      </div>

      {/* Suites Cards Grid */}
      <div className="space-y-6">
        {filteredSuites.map((suite) => {
          const matchingTools = query
            ? suite.calculators.filter(
                (t) =>
                  t.name.toLowerCase().includes(query.toLowerCase()) ||
                  t.fileName.toLowerCase().includes(query.toLowerCase()) ||
                  t.description.toLowerCase().includes(query.toLowerCase())
              )
            : suite.calculators;

          if (matchingTools.length === 0 && query) return null;

          return (
            <div
              key={suite.id}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-xs"
            >
              {/* Suite Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-neutral-950 uppercase tracking-wider">
                      {suite.title}
                    </span>
                    <span className="rounded bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-700 font-semibold border border-neutral-200">
                      {suite.folderName}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-600">
                    {suite.description}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded border border-neutral-200 bg-neutral-50 px-2.5 py-1 font-mono text-[11px] text-neutral-700">
                    Hub: <span className="font-semibold text-neutral-900">{suite.hubHtml}</span>
                  </div>
                  <div className="font-mono text-xs font-bold text-neutral-950">
                    {matchingTools.length} {matchingTools.length === 1 ? 'Tool' : 'Tools'}
                  </div>
                </div>
              </div>

              {/* Tools Grid */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {matchingTools.map((tool) => (
                  <div
                    key={tool.fileName}
                    className="group rounded-lg border border-neutral-200/80 bg-neutral-50/50 p-3 hover:border-neutral-900 hover:bg-white transition-all shadow-2xs"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <FileCode className="h-4 w-4 text-neutral-400 group-hover:text-neutral-900 transition-colors shrink-0" />
                        <span className="font-mono text-xs font-bold text-neutral-900 truncate">
                          {tool.name}
                        </span>
                      </div>
                    </div>

                    <div className="mt-1.5 font-mono text-[11px] text-neutral-400 truncate">
                      {suite.folderName}/{tool.fileName}
                    </div>

                    <p className="mt-2 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
