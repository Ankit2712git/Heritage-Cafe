import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, Sparkles, X, MessageSquare, Info, ShieldCheck } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { MenuItem, DietaryType } from '../types/cafe';
import { CAFE_INFO } from '../data/cafeInfo';

export const DigitalMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg' | 'jain'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAllItems, setShowAllItems] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Compute counts for dietary options
  const dietaryCounts = useMemo(() => {
    return {
      all: MENU_ITEMS.length,
      veg: MENU_ITEMS.filter((item) => item.dietary === 'veg' || item.dietary === 'jain').length,
      nonVeg: MENU_ITEMS.filter((item) => item.dietary === 'non-veg').length,
      jain: MENU_ITEMS.filter((item) => item.dietary === 'jain').length,
    };
  }, []);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // Dietary filter (veg, non-veg, jain)
      if (dietaryFilter === 'veg' && item.dietary !== 'veg' && item.dietary !== 'jain') {
        return false;
      }
      if (dietaryFilter === 'non-veg' && item.dietary !== 'non-veg') {
        return false;
      }
      if (dietaryFilter === 'jain' && item.dietary !== 'jain') {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesCat = item.categoryLabel.toLowerCase().includes(q);
        return matchesName || matchesDesc || matchesCat;
      }

      return true;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  // Determine how many items to display initially
  const displayItems = showAllItems ? filteredItems : filteredItems.slice(0, 12);

  const handleInquireDish = (item: MenuItem) => {
    const text = `Hello Heritage Cafe, I am inquiring about the dish: *${item.name}* (₹${item.price.toFixed(2)}).`;
    const url = `https://wa.me/${CAFE_INFO.phone.value}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FFF9EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-[1.5px] bg-[#B65F42]" />
            <span className="text-xs uppercase tracking-widest text-[#B65F42] font-semibold">
              Heritage Culinary Offerings
            </span>
            <span className="w-6 h-[1.5px] bg-[#B65F42]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8E2638] font-serif-display">
            Our Digital Menu
          </h2>

          <p className="text-sm sm:text-base text-[#27231F]/80 leading-relaxed">
            Freshly prepared dishes, chef specials, and dedicated Pure Veg &amp; Jain options prepared without onion or garlic.
          </p>

          <div className="pt-2 flex items-center justify-center">
            <div className="w-16 h-[1.5px] bg-[#8E2638]/40" />
          </div>
        </div>

        {/* Dietary Options Bar (Veg, Non-Veg, Jain) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 p-2 bg-[#F5E9D0]/60 rounded-xl max-w-2xl mx-auto border border-[#F5E9D0]">
          {/* All */}
          <button
            type="button"
            onClick={() => {
              setDietaryFilter('all');
              setShowAllItems(false);
            }}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
              dietaryFilter === 'all'
                ? 'bg-[#27231F] text-white shadow-xs'
                : 'bg-white/80 text-[#27231F] hover:bg-white'
            }`}
          >
            All Items ({dietaryCounts.all})
          </button>

          {/* Veg */}
          <button
            type="button"
            onClick={() => {
              setDietaryFilter('veg');
              setShowAllItems(false);
            }}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
              dietaryFilter === 'veg'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-white/80 text-emerald-800 hover:bg-white'
            }`}
          >
            <span className="w-3 h-3 rounded-xs border-2 border-current flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
            </span>
            <span>Pure Veg ({dietaryCounts.veg})</span>
          </button>

          {/* Non-Veg */}
          <button
            type="button"
            onClick={() => {
              setDietaryFilter('non-veg');
              setShowAllItems(false);
            }}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
              dietaryFilter === 'non-veg'
                ? 'bg-[#8E2638] text-white shadow-xs'
                : 'bg-white/80 text-[#8E2638] hover:bg-white'
            }`}
          >
            <span className="w-3 h-3 rounded-xs border-2 border-current flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
            </span>
            <span>Non-Veg ({dietaryCounts.nonVeg})</span>
          </button>

          {/* Jain Option */}
          <button
            type="button"
            onClick={() => {
              setDietaryFilter('jain');
              setShowAllItems(false);
            }}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
              dietaryFilter === 'jain'
                ? 'bg-amber-600 text-white shadow-xs ring-2 ring-amber-400'
                : 'bg-amber-50/90 text-amber-900 border border-amber-300 hover:bg-amber-100'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-current" />
            <span>Jain Option ({dietaryCounts.jain})</span>
          </button>
        </div>

        {/* Categories Tab Bar & Search */}
        <div className="mt-8 space-y-5">
          {/* Categories Tab Bar */}
          <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-2 gap-2 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setShowAllItems(false);
                  }}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-[#8E2638] text-white shadow-xs'
                      : 'bg-[#F5E9D0]/70 text-[#27231F] hover:bg-[#F5E9D0] border border-[#F5E9D0]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#27231F]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowAllItems(true);
              }}
              placeholder="Search dishes (e.g., Vetki, Jain Paneer, Momos, Pizza)..."
              className="w-full pl-10 pr-10 py-2.5 text-sm bg-white border border-[#F5E9D0] rounded-md text-[#27231F] placeholder-[#27231F]/40 focus:outline-none focus:ring-1 focus:ring-[#8E2638] focus:border-[#8E2638]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#27231F]/50 hover:text-[#27231F]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Active Filter Notice */}
        <div className="mt-4 flex items-center justify-between text-xs text-[#27231F]/70 px-1 max-w-7xl mx-auto">
          <span>
            Showing <strong className="text-[#27231F]">{filteredItems.length}</strong> items
            {dietaryFilter !== 'all' && (
              <span className="ml-1 text-[#8E2638] font-semibold">
                [{dietaryFilter.toUpperCase()}]
              </span>
            )}
          </span>
          {dietaryFilter === 'jain' && (
            <span className="text-amber-800 font-medium inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Prepared strictly without root vegetables, onion or garlic
            </span>
          )}
        </div>

        {/* Menu Cards Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedDish(item)}
              className="bg-white rounded-lg border border-[#F5E9D0] overflow-hidden shadow-xs hover:border-[#B65F42]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* AI Equivalent Food Image */}
                <div className="h-48 w-full bg-[#F5E9D0] overflow-hidden relative">
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

                  {/* Dietary Badge (Veg, Non-Veg, Jain) */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    {item.dietary === 'jain' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-500 text-white text-[11px] font-bold tracking-wider shadow-sm uppercase">
                        <ShieldCheck className="w-3 h-3" />
                        JAIN
                      </span>
                    )}
                    {item.dietary === 'veg' && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/95 text-emerald-800 text-[10px] font-bold tracking-wider shadow-xs uppercase border border-emerald-300">
                        <span className="w-2.5 h-2.5 rounded-xs border-2 border-emerald-600 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        </span>
                        VEG
                      </span>
                    )}
                    {item.dietary === 'non-veg' && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/95 text-[#8E2638] text-[10px] font-bold tracking-wider shadow-xs uppercase border border-[#8E2638]/40">
                        <span className="w-2.5 h-2.5 rounded-xs border-2 border-[#8E2638] flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8E2638]" />
                        </span>
                        NON-VEG
                      </span>
                    )}
                  </div>

                  {/* Special Badge */}
                  {item.isSpecial && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#8E2638] text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                      <Sparkles className="w-3 h-3" />
                      Special
                    </span>
                  )}

                  {/* Category Pill */}
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/70 text-white backdrop-blur-xs">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold text-[#27231F] font-serif-display leading-snug group-hover:text-[#8E2638] transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="text-base font-bold text-[#8E2638] font-mono tabular-nums block">
                        ₹{item.price.toFixed(2)}
                      </span>
                      {item.portion && (
                        <span className="text-[10px] font-mono text-[#27231F]/60 block">
                          {item.portion}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#27231F]/70 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-4 pt-1 flex items-center justify-between text-xs text-[#8E2638] font-medium">
                <span className="group-hover:underline inline-flex items-center gap-1">
                  View Dish Details
                </span>
                <span className="text-[11px] text-[#27231F]/50">
                  Tap to view
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA Button */}
        {filteredItems.length > 12 && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAllItems(!showAllItems)}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#8E2638] bg-white hover:bg-[#F5E9D0] border border-[#8E2638]/40 rounded-md transition-colors shadow-xs"
            >
              <span>{showAllItems ? 'Show Less' : `View Full Menu (${filteredItems.length} Items)`}</span>
              {showAllItems ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

      </div>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-[#FFF9EC] rounded-xl shadow-2xl border border-[#F5E9D0] overflow-hidden">
            {/* Modal Image */}
            <div className="relative h-64 w-full bg-[#F5E9D0]">
              <img
                src={selectedDish.imageSrc}
                alt={selectedDish.name}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setSelectedDish(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Dietary indicator */}
              <div className="absolute bottom-3 left-3">
                {selectedDish.dietary === 'jain' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-500 text-white text-xs font-bold shadow-md">
                    <ShieldCheck className="w-4 h-4" />
                    PURE JAIN (NO ONION &amp; GARLIC)
                  </span>
                )}
                {selectedDish.dietary === 'veg' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-700 text-white text-xs font-bold shadow-md">
                    PURE VEGETARIAN
                  </span>
                )}
                {selectedDish.dietary === 'non-veg' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#8E2638] text-white text-xs font-bold shadow-md">
                    NON-VEGETARIAN
                  </span>
                )}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#B65F42]">
                    {selectedDish.categoryLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-[#27231F] mt-1">
                    {selectedDish.name}
                  </h3>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-2xl font-bold text-[#8E2638] font-mono tabular-nums">
                    ₹{selectedDish.price.toFixed(2)}
                  </span>
                  {selectedDish.portion && (
                    <span className="text-xs text-[#27231F]/60 block font-mono">
                      {selectedDish.portion}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm text-[#27231F]/80 leading-relaxed">
                {selectedDish.description}
              </p>

              {selectedDish.dietary === 'jain' && (
                <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Jain Preparation:</strong> Prepared strictly adhering to Jain dietary principles without onion, garlic, or root vegetables.
                  </span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleInquireDish(selectedDish)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#315443] hover:bg-[#254134] rounded-md transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire / Order via WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDish(null)}
                  className="px-5 py-3 text-xs uppercase tracking-wider font-semibold text-[#27231F] bg-[#F5E9D0] hover:bg-[#EADCCB] rounded-md transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
