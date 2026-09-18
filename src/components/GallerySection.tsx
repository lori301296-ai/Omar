import React, { useState } from 'react';
import { Camera, X, Maximize2, Info } from 'lucide-react';
import { GalleryItem, Language } from '../types';
import { translations } from '../data/translations';

interface GallerySectionProps {
  items: GalleryItem[];
  currentLang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ items, currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const t = translations[currentLang];

  const categories = [
    'ALL',
    'SAFARI',
    'OCEAN',
    'WATAMU',
    "HELL'S KITCHEN",
    'FOOD',
    'PEOPLE',
    'KENYA',
  ];

  const filteredItems =
    selectedCategory === 'ALL'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#18201B] text-[#F7F4EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E8D5AD] font-semibold block mb-2">
            Visual Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-[#F7F4EC]">
            {t.gallery.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#E8D5AD]/40 mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#E8D5AD]/80 leading-relaxed mb-6">
            {t.gallery.subtitle}
          </p>

          {/* Explicit Placeholder Notice (Mandated by prompt) */}
          <div className="inline-flex items-center space-x-2 bg-[#8A6045]/20 border border-[#8A6045]/40 text-[#E8D5AD] px-4 py-2 rounded-full text-xs max-w-2xl text-center">
            <Info className="w-3.5 h-3.5 shrink-0 text-[#E8D5AD]" />
            <span>{t.gallery.placeholderNotice}</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const label =
              cat === 'ALL'
                ? t.gallery.all
                : t.gallery.categories[cat as keyof typeof t.gallery.categories] || cat;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                id={`gallery-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? 'bg-[#E8D5AD] text-[#18201B] shadow-md font-bold'
                    : 'bg-white/5 text-[#F7F4EC]/75 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setActivePhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 cursor-pointer aspect-[4/3] shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title[currentLang]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-3 left-3">
                <span className="bg-black/60 backdrop-blur-md text-[#E8D5AD] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-white/10">
                  {item.category}
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-2 rounded-full text-white">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-serif text-base font-bold text-[#F7F4EC] line-clamp-1">
                  {item.title[currentLang]}
                </h3>
                <p className="text-xs text-[#E8D5AD]/85 line-clamp-1 mt-0.5">
                  {item.caption[currentLang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center bg-[#18201B] rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title[currentLang]}
                className="max-w-full max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 w-full text-left bg-[#18201B]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#E8D5AD]">
                  {activePhoto.category} · KENYA
                </span>
                <span className="text-[10px] text-white/50 italic">
                  Royalty-free placeholder
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#F7F4EC]">
                {activePhoto.title[currentLang]}
              </h3>
              <p className="text-sm text-[#E8D5AD]/80 mt-1">
                {activePhoto.caption[currentLang]}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
