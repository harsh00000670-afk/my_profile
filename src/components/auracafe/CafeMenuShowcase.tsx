import React, { useState, useMemo } from 'react';
import {
  Coffee,
  Search,
  MessageSquare,
  Sparkles,
  Tag,
  ExternalLink,
  MapPin,
  Check,
  Flame,
} from 'lucide-react';
import { CAFE_MENU_ITEMS, CafeMenuItem, WHATSAPP_PHONE_NUMBER, WHATSAPP_DISPLAY_PHONE } from '../../data/cafeArchitecture';

const CATEGORIES = [
  { id: 'all', label: 'ALL CREATIONS', count: 16 },
  { id: 'coffee', label: 'ARTISANAL ROASTS', count: 6 },
  { id: 'pastry', label: 'BAKED ATELIER', count: 4 },
  { id: 'bites', label: 'SAVORY BITES', count: 3 },
  { id: 'beverage', label: 'COLD BOTANICALS', count: 3 },
];

export function CafeMenuShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItem, setActiveItem] = useState<CafeMenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return CAFE_MENU_ITEMS.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handlePreOrderWhatsApp = (item: CafeMenuItem) => {
    const text = encodeURIComponent(
      `Hi Aura Cafe! I'd love to ask about or pre-order the ${item.name} (${item.price}). Is it available today?`
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white shadow-xs overflow-hidden">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 bg-neutral-50/80 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <Coffee className="h-4 w-4 text-neutral-900" />
          <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-950">
            AURA CAFE // SENSORY MENU &amp; ATELIER CATALOG (16 CREATIONS)
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded bg-emerald-100 px-2 py-0.5 font-mono text-[10px] text-emerald-800 font-semibold border border-emerald-300">
            Live Pre-Orders via WhatsApp ({WHATSAPP_DISPLAY_PHONE})
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 sm:p-6 border-b border-neutral-200/80 bg-white space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-lg px-3 py-1.5 font-mono text-xs font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-neutral-950 text-white shadow-2xs'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200/70 hover:text-neutral-950'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`ml-1.5 text-[10px] ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search origin, notes, pastry..."
              className="w-full rounded-lg border border-neutral-200 bg-neutral-50/50 pl-8 pr-3 py-1.5 text-xs text-neutral-900 focus:bg-white focus:border-neutral-950 focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="p-4 sm:p-6 bg-neutral-50/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-xl border border-neutral-200 bg-white p-4 flex flex-col justify-between hover:border-neutral-900 transition-all duration-200 shadow-2xs"
            >
              <div className="space-y-3">
                {/* Image and badges */}
                <div className="relative h-40 w-full overflow-hidden rounded-lg bg-neutral-100 border border-neutral-200/70">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 flex items-center gap-1.5">
                    {item.isSignature && (
                      <span className="inline-flex items-center gap-1 rounded bg-amber-500 text-neutral-950 px-2 py-0.5 font-mono text-[9px] font-bold shadow-xs">
                        <Sparkles className="h-2.5 w-2.5" />
                        SIGNATURE
                      </span>
                    )}
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="rounded bg-neutral-950/85 backdrop-blur-xs text-white px-2 py-0.5 font-mono text-xs font-bold shadow-xs">
                      {item.price}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-base font-bold text-neutral-950 group-hover:text-amber-900 transition-colors">
                    {item.name}
                  </h4>
                  <p className="mt-1 text-xs text-neutral-600 line-clamp-2 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-500 truncate">
                  <MapPin className="h-3 w-3 text-neutral-400 shrink-0" />
                  <span className="truncate">{item.origin}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[9px] text-neutral-600 border border-neutral-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pre-Order via WhatsApp Action */}
              <div className="mt-4 pt-3 border-t border-neutral-100">
                <button
                  onClick={() => handlePreOrderWhatsApp(item)}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-3 py-1.5 font-mono text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="h-3 w-3 text-emerald-600" />
                  <span>Ask on WhatsApp ({item.price})</span>
                  <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-12 text-center">
            <Coffee className="h-8 w-8 text-neutral-300 mx-auto mb-2" />
            <p className="font-mono text-xs text-neutral-500">No creations found matching &quot;{searchQuery}&quot;</p>
          </div>
        )}
      </div>
    </div>
  );
}
