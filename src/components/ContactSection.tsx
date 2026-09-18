import React from 'react';
import { MessageCircle, Compass, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/siteConfig';

interface ContactSectionProps {
  currentLang: Language;
  onOpenQuoteModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  onOpenQuoteModal,
}) => {
  const t = translations[currentLang];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#18201B] text-[#F7F4EC] relative overflow-hidden">
      {/* Editorial Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#18201B] via-[#23382B]/30 to-[#18201B] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-[#E8D5AD]/10 border border-[#E8D5AD]/30 text-[#E8D5AD] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
          <MapPin className="w-3.5 h-3.5 text-[#25D366]" />
          <span>{SITE_CONFIG.location.displayEn}</span>
        </div>

        {/* Serif Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#F7F4EC] tracking-tight mb-4">
          {t.contact.title}
        </h2>

        {/* Subtitle */}
        <p className="font-serif text-lg sm:text-2xl text-[#E8D5AD] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.contact.subtitle}
        </p>

        {/* Two Main Call-To-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 max-w-xl mx-auto">
          {/* Primary Goal: WhatsApp */}
          <a
            id="contact-whatsapp-btn"
            href={getWhatsAppUrl(currentLang)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 inline-flex items-center justify-center space-x-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-4 px-6 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-[#25D366]/25 transition-all active:scale-95 group"
          >
            <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            <span>{t.contact.chatWhatsApp}</span>
          </a>

          {/* Secondary Goal: Personal Quote */}
          <button
            id="contact-quote-btn"
            type="button"
            onClick={onOpenQuoteModal}
            className="w-full sm:flex-1 inline-flex items-center justify-center space-x-2.5 bg-transparent hover:bg-[#E8D5AD] text-[#E8D5AD] hover:text-[#18201B] border border-[#E8D5AD] py-4 px-6 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md active:scale-95 group"
          >
            <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            <span>{t.contact.getQuote}</span>
          </button>
        </div>

        {/* Contact Info & Channels Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
          {/* WhatsApp Direct */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#E8D5AD] font-semibold block mb-1">
              WhatsApp
            </span>
            <p className="font-mono text-sm text-[#F7F4EC] font-semibold">
              {SITE_CONFIG.whatsApp.phoneDisplay}
            </p>
            <p className="text-[11px] text-white/50 mt-1">
              Direct chat with Omar
            </p>
          </div>

          {/* Kenya Calls / Lines */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="w-10 h-10 rounded-xl bg-[#304C3A]/30 text-[#E8D5AD] flex items-center justify-center mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#E8D5AD] font-semibold block mb-1">
              Kenya Phone
            </span>
            <p className="font-mono text-xs text-[#F7F4EC] font-semibold">
              {SITE_CONFIG.contact.kenyaPhones[0].display}
            </p>
            <p className="font-mono text-xs text-[#F7F4EC]/80">
              {SITE_CONFIG.contact.kenyaPhones[1].display}
            </p>
          </div>

          {/* Direct Email */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="w-10 h-10 rounded-xl bg-[#8A6045]/20 text-[#E8D5AD] flex items-center justify-center mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#E8D5AD] font-semibold block mb-1">
              Email
            </span>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="text-xs text-[#F7F4EC] hover:text-[#E8D5AD] font-medium block truncate"
            >
              {SITE_CONFIG.contact.email}
            </a>
            <p className="text-[11px] text-white/50 mt-1">
              Watamu, Kilifi County 🇰🇪
            </p>
          </div>

          {/* Instagram Official Profile */}
          <a
            id="contact-instagram-card"
            href={SITE_CONFIG.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#E8D5AD]/40 rounded-2xl p-5 transition-all block"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-purple-500/20 text-[#E8D5AD] group-hover:scale-105 transition-transform flex items-center justify-center mb-3">
              <Instagram className="w-5 h-5 text-[#E8D5AD]" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#E8D5AD] font-semibold block mb-1">
              {t.instagram.title}
            </span>
            <p className="font-mono text-sm text-[#F7F4EC] group-hover:text-[#E8D5AD] font-semibold transition-colors">
              {t.instagram.handle}
            </p>
            <p className="text-[11px] text-white/50 mt-1 line-clamp-2">
              {t.instagram.subtext}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
