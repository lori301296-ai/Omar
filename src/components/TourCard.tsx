import React from 'react';
import { Clock, Users, Car, Utensils, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Tour, Language } from '../types';
import { translations } from '../data/translations';
import { getWhatsAppUrl } from '../data/siteConfig';

interface TourCardProps {
  tour: Tour;
  currentLang: Language;
  onSelectTour: (tour: Tour) => void;
  onOpenQuoteModal: (tourId?: string) => void;
}

export const TourCard: React.FC<TourCardProps> = ({
  tour,
  currentLang,
  onSelectTour,
  onOpenQuoteModal,
}) => {
  const t = translations[currentLang];

  const customWhatsAppMessage =
    currentLang === 'en'
      ? `Hi Omar! I'm interested in the ${tour.title.en} tour from Watamu. Could you send me more information?`
      : `Ciao Omar! Sono interessato al tour ${tour.title.it} da Watamu. Potresti mandarmi maggiori informazioni?`;

  return (
    <div
      id={`tour-card-${tour.id}`}
      className="group bg-[#F7F4EC] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#8A6045]/15 flex flex-col justify-between"
    >
      {/* Top Image Container */}
      <div className="relative h-72 sm:h-80 w-full overflow-hidden">
        <img
          src={tour.coverImage}
          alt={tour.imageAlt}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="bg-[#304C3A]/90 text-[#F7F4EC] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full backdrop-blur-sm border border-[#E8D5AD]/20">
            {tour.available[currentLang]}
          </span>
          <span className="bg-black/60 text-[#E8D5AD] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full backdrop-blur-sm flex items-center space-x-1">
            <Clock className="w-3 h-3 text-[#E8D5AD]" />
            <span>{tour.duration[currentLang]}</span>
          </span>
        </div>

        {/* Bottom Image Overlay Header */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4EC] tracking-wide">
            {tour.title[currentLang]}
          </h3>
          <p className="text-xs text-[#E8D5AD] font-medium tracking-wide mt-0.5 line-clamp-1">
            {tour.tagline[currentLang]}
          </p>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-4">
          {/* Key Inclusions Row */}
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#8A6045]">
            <span className="inline-flex items-center space-x-1 bg-[#E8D5AD]/30 px-2.5 py-1 rounded-md border border-[#8A6045]/15">
              <Car className="w-3.5 h-3.5 text-[#304C3A]" />
              <span>
                {t.toursSection.transportLabel}: {tour.transport[currentLang]}
              </span>
            </span>

            {tour.lunch && (
              <span className="inline-flex items-center space-x-1 bg-[#E8D5AD]/30 px-2.5 py-1 rounded-md border border-[#8A6045]/15">
                <Utensils className="w-3.5 h-3.5 text-[#304C3A]" />
                <span>
                  {t.toursSection.lunchLabel}: {tour.lunch[currentLang]}
                </span>
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-[#18201B]/80 leading-relaxed">
            {tour.description[currentLang]}
          </p>

          {/* Food Spotlight for Blue Safari */}
          {tour.foodSection && (
            <div className="bg-[#E8D5AD]/25 border-l-2 border-[#8A6045] p-3 rounded-r-lg">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A6045] block">
                {tour.foodSection.title[currentLang]}
              </span>
              <p className="text-xs text-[#18201B]/80 mt-0.5">
                {tour.foodSection.description[currentLang]}
              </p>
            </div>
          )}

          {/* Detailed Itinerary Highlight or Placeholder Notice Box */}
          {tour.detailedItinerary ? (
            <div className="bg-[#304C3A]/10 border border-[#304C3A]/30 rounded-xl p-3.5 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#304C3A] flex items-center space-x-1">
                  <span>🐬</span>
                  <span>{currentLang === 'it' ? '8 Tappe Dettagliate' : '8 Detailed Steps'}</span>
                </span>
                {tour.departureTime && (
                  <span className="text-[10px] font-semibold bg-[#304C3A] text-[#F7F4EC] px-2 py-0.5 rounded-full">
                    {currentLang === 'it' ? 'Partenza 9:00' : 'Departs 9:00 AM'}
                  </span>
                )}
              </div>
              <p className="text-xs text-[#18201B]/85 font-medium leading-tight">
                {currentLang === 'it'
                  ? 'Delfini · Snorkeling Watamu Marine Park · Acque di Garoda · Mangrovie · Pranzo pesce & aragosta a Sudi Island'
                  : 'Dolphin Watching · Watamu Marine Park Snorkeling · Garoda Waters · Mangroves · Sudi Island Seafood Feast'}
              </p>
            </div>
          ) : tour.placeholderSection ? (
            <div className="bg-white/70 border border-dashed border-[#8A6045]/30 rounded-xl p-3.5 flex items-start space-x-2.5">
              <Sparkles className="w-4 h-4 text-[#8A6045] shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold uppercase tracking-wider text-[#8A6045] block">
                  {tour.placeholderSection.title[currentLang]}
                </span>
                <span className="font-serif font-medium text-[#18201B] block">
                  {tour.placeholderSection.message[currentLang]}
                </span>
              </div>
            </div>
          ) : null}
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-[#8A6045]/15 space-y-2.5">
          <div className="grid grid-cols-2 gap-2">
            <button
              id={`tour-btn-details-${tour.id}`}
              type="button"
              onClick={() => onSelectTour(tour)}
              className="w-full inline-flex items-center justify-center space-x-1.5 bg-[#18201B] hover:bg-[#304C3A] text-[#F7F4EC] py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all"
            >
              <span>{t.toursSection.viewDetails}</span>
              <ArrowRight className="w-3 h-3" />
            </button>

            <button
              id={`tour-btn-quote-${tour.id}`}
              type="button"
              onClick={() => onOpenQuoteModal(tour.id)}
              className="w-full inline-flex items-center justify-center space-x-1 border border-[#8A6045] text-[#8A6045] hover:bg-[#8A6045] hover:text-white py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all"
            >
              <span>{t.pricing.button}</span>
            </button>
          </div>

          <a
            id={`tour-btn-whatsapp-${tour.id}`}
            href={getWhatsAppUrl(currentLang, customWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-1.5 bg-[#304C3A]/10 hover:bg-[#304C3A] text-[#304C3A] hover:text-white py-2 px-3 rounded-xl text-xs font-semibold tracking-wide transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>{t.hero.chatWhatsApp}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
