import React from 'react';
import { Tour, Language } from '../types';
import { translations } from '../data/translations';
import { TourCard } from './TourCard';

interface ToursSectionProps {
  tours: Tour[];
  currentLang: Language;
  onSelectTour: (tour: Tour) => void;
  onOpenQuoteModal: (tourId?: string) => void;
}

export const ToursSection: React.FC<ToursSectionProps> = ({
  tours,
  currentLang,
  onSelectTour,
  onOpenQuoteModal,
}) => {
  const t = translations[currentLang];

  return (
    <section id="tours" className="py-20 sm:py-28 bg-[#F7F4EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8A6045] font-semibold block mb-2">
            Watamu · Kenya
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#18201B] tracking-tight mb-4">
            {t.toursSection.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#8A6045] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#18201B]/75 leading-relaxed">
            {t.toursSection.subtitle}
          </p>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              currentLang={currentLang}
              onSelectTour={onSelectTour}
              onOpenQuoteModal={onOpenQuoteModal}
            />
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 bg-[#304C3A] text-[#F7F4EC] rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-[#E8D5AD]/20">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-[#F7F4EC] mb-2">
              {t.pricing.title}
            </h3>
            <p className="text-sm text-[#E8D5AD] leading-relaxed">
              {t.pricing.description}
            </p>
          </div>
          <button
            id="tours-section-quote-btn"
            type="button"
            onClick={() => onOpenQuoteModal()}
            className="shrink-0 bg-[#E8D5AD] hover:bg-[#F4EAD3] text-[#18201B] px-8 py-3.5 rounded-full text-xs uppercase font-bold tracking-wider transition-all shadow-md active:scale-95"
          >
            {t.pricing.button}
          </button>
        </div>
      </div>
    </section>
  );
};
