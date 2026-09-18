import React, { useState } from 'react';
import { X, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { SITE_CONFIG } from '../data/siteConfig';

interface QuoteModalProps {
  isOpen: boolean;
  currentLang: Language;
  initialTourId?: string;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  currentLang,
  initialTourId,
  onClose,
}) => {
  const t = translations[currentLang];

  const [tourChoice, setTourChoice] = useState<string>(
    initialTourId === 'safari'
      ? 'Safari'
      : initialTourId === 'blue-safari'
      ? 'Blue Safari'
      : initialTourId === 'hells-kitchen'
      ? "Hell's Kitchen"
      : 'Safari'
  );
  const [partyType, setPartyType] = useState<string>('Couple');
  const [travelStyle, setTravelStyle] = useState<string>('Private');
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [dates, setDates] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const buildWhatsAppMessage = () => {
    if (currentLang === 'en') {
      return (
        `Hi Omar! I would like to request a personalised quote for Kenya:\n` +
        `• Name: ${name || 'Traveller'}\n` +
        `• Tour: ${tourChoice}\n` +
        `• Style: ${travelStyle} Tour\n` +
        `• Party: ${partyType}\n` +
        (dates ? `• Dates: ${dates}\n` : '') +
        (contactInfo ? `• Contact: ${contactInfo}\n` : '') +
        (notes ? `• Notes: ${notes}\n` : '') +
        `Could you please let me know availability and pricing? Asante!`
      );
    } else {
      return (
        `Ciao Omar! Vorrei richiedere un preventivo personalizzato per il Kenya:\n` +
        `• Nome: ${name || 'Viaggiatore'}\n` +
        `• Tour: ${tourChoice}\n` +
        `• Modalità: Tour ${travelStyle}\n` +
        `• Partecipanti: ${partyType}\n` +
        (dates ? `• Periodo: ${dates}\n` : '') +
        (contactInfo ? `• Contatto: ${contactInfo}\n` : '') +
        (notes ? `• Note: ${notes}\n` : '') +
        `Potresti inviarmi disponibilità e dettagli sul costo? Asante!`
      );
    }
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildWhatsAppMessage();
    const url = `https://wa.me/${SITE_CONFIG.whatsApp.dialNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div
      id="quote-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="quote-modal-content"
        className="relative w-full max-w-xl bg-[#F7F4EC] rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#8A6045]/20 my-8 text-[#18201B]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-[#18201B] transition-colors"
          aria-label={t.quoteForm.close}
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6 pr-8">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8A6045] block mb-1">
                Watamu · Kenya 🇰🇪
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#18201B]">
                {t.contact.quoteModalTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#18201B]/70 mt-1">
                {t.contact.quoteModalSubtitle}
              </p>
            </div>

            <form onSubmit={handleSendViaWhatsApp} className="space-y-4 text-xs">
              {/* Experience selection */}
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#8A6045] mb-1.5">
                  {t.quoteForm.tourChoice}
                </label>
                <select
                  value={tourChoice}
                  onChange={(e) => setTourChoice(e.target.value)}
                  className="w-full bg-white border border-[#8A6045]/20 rounded-xl px-3.5 py-2.5 text-sm text-[#18201B] focus:outline-none focus:border-[#304C3A]"
                >
                  <option value="Safari">{t.quoteForm.tourSafari}</option>
                  <option value="Blue Safari">{t.quoteForm.tourBlueSafari}</option>
                  <option value="Hell's Kitchen">{t.quoteForm.tourHellsKitchen}</option>
                  <option value="Custom / Multiple">{t.quoteForm.tourCustom}</option>
                </select>
              </div>

              {/* Private or Group */}
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#8A6045] mb-1.5">
                  {t.quoteForm.travelType}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTravelStyle('Private')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all text-xs font-semibold ${
                      travelStyle === 'Private'
                        ? 'bg-[#304C3A] text-white border-[#304C3A]'
                        : 'bg-white border-[#8A6045]/20 text-[#18201B]/80 hover:bg-[#E8D5AD]/20'
                    }`}
                  >
                    {t.quoteForm.privateOption}
                  </button>
                  <button
                    type="button"
                    onClick={() => setTravelStyle('Group')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all text-xs font-semibold ${
                      travelStyle === 'Group'
                        ? 'bg-[#304C3A] text-white border-[#304C3A]'
                        : 'bg-white border-[#8A6045]/20 text-[#18201B]/80 hover:bg-[#E8D5AD]/20'
                    }`}
                  >
                    {t.quoteForm.groupOption}
                  </button>
                </div>
              </div>

              {/* Party Size */}
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#8A6045] mb-1.5">
                  {t.quoteForm.partySize}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { key: 'Solo', label: t.quoteForm.solo },
                    { key: 'Couple', label: t.quoteForm.couple },
                    { key: 'Friends', label: t.quoteForm.friends },
                    { key: 'Family', label: t.quoteForm.family },
                  ].map((p) => (
                    <button
                      key={p.key}
                      type="button"
                      onClick={() => setPartyType(p.key)}
                      className={`py-2 px-1 text-center rounded-xl border text-[11px] font-semibold transition-all ${
                        partyType === p.key
                          ? 'bg-[#8A6045] text-white border-[#8A6045]'
                          : 'bg-white border-[#8A6045]/20 text-[#18201B]/80 hover:bg-[#E8D5AD]/20'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#8A6045] mb-1">
                    {t.quoteForm.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.quoteForm.namePlaceholder}
                    className="w-full bg-white border border-[#8A6045]/20 rounded-xl px-3.5 py-2.5 text-sm text-[#18201B] focus:outline-none focus:border-[#304C3A]"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#8A6045] mb-1">
                    {t.quoteForm.whatsapp}
                  </label>
                  <input
                    type="text"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder={t.quoteForm.whatsappPlaceholder}
                    className="w-full bg-white border border-[#8A6045]/20 rounded-xl px-3.5 py-2.5 text-sm text-[#18201B] focus:outline-none focus:border-[#304C3A]"
                  />
                </div>
              </div>

              {/* Travel Dates */}
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#8A6045] mb-1">
                  {t.quoteForm.dates}
                </label>
                <input
                  type="text"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  placeholder={t.quoteForm.datesPlaceholder}
                  className="w-full bg-white border border-[#8A6045]/20 rounded-xl px-3.5 py-2.5 text-sm text-[#18201B] focus:outline-none focus:border-[#304C3A]"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#8A6045] mb-1">
                  {t.quoteForm.notes}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.quoteForm.notesPlaceholder}
                  className="w-full bg-white border border-[#8A6045]/20 rounded-xl px-3.5 py-2 text-sm text-[#18201B] focus:outline-none focus:border-[#304C3A]"
                />
              </div>

              {/* Pricing Notice */}
              <div className="bg-[#E8D5AD]/30 p-3 rounded-xl text-[11px] text-[#8A6045]">
                {t.pricing.description}
              </div>

              {/* Submit Button */}
              <button
                id="quote-form-submit-whatsapp"
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-4 rounded-xl font-bold text-sm tracking-wide shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.quoteForm.submitWhatsApp}</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#18201B]">
              {t.quoteForm.successTitle}
            </h3>
            <p className="text-sm text-[#18201B]/80 max-w-sm mx-auto leading-relaxed">
              {t.quoteForm.successDesc}
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="bg-[#304C3A] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                {t.quoteForm.close}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
