import React from 'react';
import { MessageCircle, Heart, MapPin, Compass, Instagram } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/siteConfig';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onLanguageChange,
  onOpenQuoteModal,
}) => {
  const t = translations[currentLang];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#121814] text-[#F7F4EC] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={SITE_CONFIG.logoUrl}
                alt="Omar's Company Logo"
                className="w-12 h-12 rounded-full object-cover border border-[#E8D5AD]/40 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-[#F7F4EC] block leading-tight">
                  {t.nav.brand}
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#E8D5AD] block font-medium mt-0.5">
                  Watamu · Kenya 🇰🇪
                </span>
              </div>
            </div>
            <p className="text-xs text-[#E8D5AD]/80 leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="flex items-center space-x-2 text-xs text-white/60">
              <MapPin className="w-3.5 h-3.5 text-[#25D366]" />
              <span>
                {currentLang === 'it' ? 'Watamu, Contea di Kilifi, Kenya' : 'Watamu, Kilifi County, Kenya'}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8D5AD]">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleSmoothScroll(e, '#home')}
                  className="hover:text-[#E8D5AD] transition-colors"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#tours"
                  onClick={(e) => handleSmoothScroll(e, '#tours')}
                  className="hover:text-[#E8D5AD] transition-colors"
                >
                  {t.nav.tours}
                </a>
              </li>
              <li>
                <a
                  href="#about-omar"
                  onClick={(e) => handleSmoothScroll(e, '#about-omar')}
                  className="hover:text-[#E8D5AD] transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleSmoothScroll(e, '#gallery')}
                  className="hover:text-[#E8D5AD] transition-colors"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => handleSmoothScroll(e, '#reviews')}
                  className="hover:text-[#E8D5AD] transition-colors"
                >
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="hover:text-[#E8D5AD] transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8D5AD]">
              {t.footer.directContact}
            </h4>
            <p className="text-xs text-white/70">
              {currentLang === 'it'
                ? 'Per disponibilità in tempo reale e itinerari su misura:'
                : 'For real-time availability and custom itineraries:'}
            </p>
            <div className="flex flex-col space-y-2">
              <a
                id="footer-whatsapp-link"
                href={getWhatsAppUrl(currentLang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all border border-[#25D366]/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{SITE_CONFIG.whatsApp.phoneDisplay}</span>
              </a>

              <a
                id="footer-instagram-link"
                href={SITE_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white/5 hover:bg-[#E8D5AD] text-[#E8D5AD] hover:text-[#18201B] px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all border border-white/10"
              >
                <Instagram className="w-4 h-4" />
                <span>{SITE_CONFIG.instagram.displayLabel}</span>
              </a>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="text-xs text-[#E8D5AD] hover:underline flex items-center space-x-1"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>{t.pricing.button}</span>
              </button>
            </div>
          </div>

          {/* Language & Editorial Controls */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8D5AD]">
              {currentLang === 'it' ? 'Lingua' : 'Language'}
            </h4>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentLang === 'en'
                    ? 'bg-[#E8D5AD] text-[#18201B]'
                    : 'bg-white/10 text-white/70 hover:text-white'
                }`}
              >
                🇬🇧 English
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('it')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentLang === 'it'
                    ? 'bg-[#E8D5AD] text-[#18201B]'
                    : 'bg-white/10 text-white/70 hover:text-white'
                }`}
              >
                🇮🇹 Italiano
              </button>
            </div>
            <p className="text-[11px] text-white/40 pt-2">
              {t.footer.editablePlaceholderNotice}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.brandName}. {t.footer.copyright}</p>
          <div className="flex items-center space-x-4">
            <span>Watamu, Kenya 🇰🇪</span>
            <span>·</span>
            <span className="font-mono text-[10px]">v1.0 Pilot Launch</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
