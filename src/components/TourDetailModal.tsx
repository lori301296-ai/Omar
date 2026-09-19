import React from 'react';
import { X, Clock, Users, Car, Utensils, AlertCircle, MessageCircle, FileText } from 'lucide-react';
import { Tour, Language } from '../types';
import { translations } from '../data/translations';
import { getWhatsAppUrl } from '../data/siteConfig';

interface TourDetailModalProps {
  tour: Tour | null;
  currentLang: Language;
  onClose: () => void;
  onOpenQuoteModal: (tourId?: string) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  currentLang,
  onClose,
  onOpenQuoteModal,
}) => {
  if (!tour) return null;

  const t = translations[currentLang];

  const customWhatsAppMessage =
    currentLang === 'en'
      ? `Hi Omar! I am interested in the ${tour.title.en} experience starting from Watamu. Could you provide details and availability?`
      : `Ciao Omar! Sono interessato all'esperienza ${tour.title.it} con partenza da Watamu. Potresti inviarmi dettagli e disponibilità?`;

  return (
    <div
      id="tour-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id={`tour-detail-modal-${tour.id}`}
        className="relative w-full max-w-3xl bg-[#F7F4EC] rounded-2xl shadow-2xl overflow-hidden border border-[#8A6045]/20 my-8 text-[#18201B]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-all"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={tour.coverImage}
            alt={tour.imageAlt}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18201B] via-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8D5AD] font-semibold">
              {currentLang === 'it' ? 'Esperienza a Watamu' : 'Watamu Experience'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1 text-[#F7F4EC]">
              {tour.title[currentLang]}
            </h2>
            <p className="text-sm text-[#E8D5AD]/90 mt-1">{tour.tagline[currentLang]}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Facts Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#E8D5AD]/25 p-3 rounded-xl border border-[#8A6045]/15">
              <div className="flex items-center space-x-1.5 text-[#8A6045] text-xs font-semibold uppercase tracking-wider mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{t.toursSection.durationLabel}</span>
              </div>
              <p className="font-bold text-sm text-[#18201B]">{tour.duration[currentLang]}</p>
            </div>

            <div className="bg-[#E8D5AD]/25 p-3 rounded-xl border border-[#8A6045]/15">
              <div className="flex items-center space-x-1.5 text-[#8A6045] text-xs font-semibold uppercase tracking-wider mb-1">
                <Users className="w-3.5 h-3.5" />
                <span>{t.toursSection.availableLabel}</span>
              </div>
              <p className="font-bold text-sm text-[#18201B]">{tour.available[currentLang]}</p>
            </div>

            <div className="bg-[#E8D5AD]/25 p-3 rounded-xl border border-[#8A6045]/15">
              <div className="flex items-center space-x-1.5 text-[#8A6045] text-xs font-semibold uppercase tracking-wider mb-1">
                <Car className="w-3.5 h-3.5" />
                <span>{t.toursSection.transportLabel}</span>
              </div>
              <p className="font-bold text-sm text-[#18201B]">{tour.transport[currentLang]}</p>
            </div>

            {tour.lunch ? (
              <div className="bg-[#E8D5AD]/25 p-3 rounded-xl border border-[#8A6045]/15">
                <div className="flex items-center space-x-1.5 text-[#8A6045] text-xs font-semibold uppercase tracking-wider mb-1">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>{t.toursSection.lunchLabel}</span>
                </div>
                <p className="font-bold text-sm text-[#18201B]">{tour.lunch[currentLang]}</p>
              </div>
            ) : (
              <div className="bg-[#E8D5AD]/25 p-3 rounded-xl border border-[#8A6045]/15">
                <div className="flex items-center space-x-1.5 text-[#8A6045] text-xs font-semibold uppercase tracking-wider mb-1">
                  <FileText className="w-3.5 h-3.5" />
                  <span>{currentLang === 'it' ? 'Partenza' : 'Departure'}</span>
                </div>
                <p className="font-bold text-sm text-[#18201B]">Watamu</p>
              </div>
            )}
          </div>

          {/* Tour Description */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[#18201B] mb-2">
              {currentLang === 'it' ? 'Panoramica' : 'Overview'}
            </h3>
            <p className="text-base text-[#18201B]/80 leading-relaxed">
              {tour.description[currentLang]}
            </p>
          </div>

          {/* Departure Time (if specified) */}
          {tour.departureTime && (
            <div className="bg-[#304C3A]/10 border border-[#304C3A]/25 rounded-xl p-4 flex items-start space-x-3">
              <span className="text-2xl">⏰</span>
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#304C3A] block">
                  {currentLang === 'it' ? 'Orario di Partenza' : 'Departure Time'}: {tour.departureTime.time}
                </span>
                <p className="text-xs text-[#18201B]/80 mt-0.5">
                  {tour.departureTime.note[currentLang]}
                </p>
              </div>
            </div>
          )}

          {/* Authentic Detailed Itinerary (for Blue Safari) */}
          {tour.detailedItinerary && (
            <div className="space-y-6 pt-2">
              <div className="border-b border-[#8A6045]/20 pb-3">
                <h3 className="font-serif text-2xl font-bold text-[#18201B]">
                  {currentLang === 'it' ? 'Itinerario Completo' : 'Complete Excursion Itinerary'}
                </h3>
                <p className="text-sm text-[#18201B]/80 mt-1 italic">
                  {tour.detailedItinerary.intro[currentLang]}
                </p>
              </div>

              {/* Steps List */}
              <div className="space-y-4">
                {tour.detailedItinerary.steps.map((step) => (
                  <div
                    key={step.number}
                    className="bg-white/80 rounded-xl p-4 border border-[#8A6045]/15 shadow-sm space-y-2 hover:border-[#304C3A]/40 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{step.icon || '📍'}</span>
                      <h4 className="font-serif font-bold text-base text-[#18201B]">
                        {step.title[currentLang]}
                      </h4>
                    </div>
                    <p className="text-sm text-[#18201B]/85 leading-relaxed pl-7">
                      {step.description[currentLang]}
                    </p>

                    {step.highlight && (
                      <div className="ml-7 bg-[#E8D5AD]/30 text-[#8A6045] text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#8A6045]/20 inline-block">
                        {step.highlight[currentLang]}
                      </div>
                    )}

                    {step.optionalCost && (
                      <div className="ml-7 bg-[#304C3A]/10 text-[#304C3A] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#304C3A]/20 block">
                        {step.optionalCost[currentLang]}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Lunch Menu (if specified) */}
              {tour.lunchMenu && (
                <div className="bg-[#304C3A] text-[#F7F4EC] rounded-2xl p-6 sm:p-7 shadow-md border border-[#E8D5AD]/25">
                  <div className="flex items-center justify-between border-b border-[#E8D5AD]/25 pb-3 mb-4">
                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] text-[#E8D5AD] font-semibold block">
                        🍽️ {tour.lunchMenu.location[currentLang]}
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#F7F4EC] mt-0.5">
                        {tour.lunchMenu.title[currentLang]}
                      </h4>
                    </div>
                    <span className="text-2xl">🦞</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                    {tour.lunchMenu.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2.5 bg-black/20 px-3 py-2 rounded-lg border border-white/5"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <div className="flex-1">
                          <span className="text-[#F7F4EC] font-medium block">
                            {item.name[currentLang]}
                          </span>
                          {item.note && (
                            <span className="text-[11px] text-[#E8D5AD]/80 italic block">
                              {item.note[currentLang]}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Authentic Motto & Invitation */}
              <div className="bg-[#E8D5AD]/30 border-l-4 border-[#8A6045] p-4 rounded-r-xl text-center sm:text-left">
                <p className="font-serif font-bold text-base text-[#304C3A]">
                  {tour.detailedItinerary.motto[currentLang]}
                </p>
                <p className="text-xs sm:text-sm text-[#18201B]/80 mt-1">
                  {tour.detailedItinerary.closingInvitation[currentLang]}
                </p>
              </div>
            </div>
          )}

          {/* Food Section (General) */}
          {tour.foodSection && !tour.lunchMenu && (
            <div className="bg-[#304C3A]/10 border-l-4 border-[#304C3A] p-4 rounded-r-xl">
              <h4 className="font-serif font-bold text-base text-[#304C3A]">
                {tour.foodSection.title[currentLang]}
              </h4>
              <p className="text-sm text-[#18201B]/85 mt-1">
                {tour.foodSection.description[currentLang]}
              </p>
              <p className="text-xs text-[#8A6045] mt-1 italic">
                {tour.foodSection.note[currentLang]}
              </p>
            </div>
          )}

          {/* Editable Placeholder Block (for tours with details coming soon) */}
          {tour.placeholderSection && (
            <div className="border border-dashed border-[#8A6045]/40 bg-[#E8D5AD]/15 rounded-xl p-5">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-[#8A6045] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-[#8A6045]">
                    {tour.placeholderSection.title[currentLang]}
                  </h4>
                  <p className="text-base font-serif font-bold text-[#18201B] mt-0.5">
                    {tour.placeholderSection.message[currentLang]}
                  </p>
                  <p className="text-xs text-[#18201B]/60 mt-1">
                    {tour.placeholderSection.editableFieldsHint[currentLang]}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Quote & Pricing Explanatory Note */}
          <div className="bg-[#F4EAD3] p-4 rounded-xl text-center border border-[#E8D5AD]">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#8A6045]">
              {t.pricing.title}
            </p>
            <p className="text-sm text-[#18201B]/85 mt-1 max-w-lg mx-auto">
              {t.pricing.description}
            </p>
          </div>

          {/* Modal Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              id={`modal-whatsapp-${tour.id}`}
              href={getWhatsAppUrl(currentLang, customWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-5 rounded-full font-semibold text-sm tracking-wide shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.contact.chatWhatsApp}</span>
            </a>

            <button
              id={`modal-quote-btn-${tour.id}`}
              type="button"
              onClick={() => {
                onClose();
                onOpenQuoteModal(tour.id);
              }}
              className="w-full sm:flex-1 inline-flex items-center justify-center space-x-2 bg-[#304C3A] hover:bg-[#23382B] text-[#F7F4EC] py-3 px-5 rounded-full font-semibold text-sm tracking-wide shadow-md transition-all active:scale-95"
            >
              <span>{t.pricing.button}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
