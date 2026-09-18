import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { getWhatsAppUrl, SITE_CONFIG } from '../data/siteConfig';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenQuoteModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.tours, href: '#tours' },
    { label: t.nav.about, href: '#about-omar' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.reviews, href: '#reviews' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#18201B]/95 backdrop-blur-md py-3 shadow-lg border-b border-[#E8D5AD]/10 text-[#F7F4EC]'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              id="nav-brand-logo"
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="group flex items-center space-x-3 focus:outline-none"
            >
              <img
                src={SITE_CONFIG.logoUrl}
                alt="Omar's Company Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-[#E8D5AD]/40 shadow-md group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#F7F4EC] group-hover:text-[#E8D5AD] transition-colors">
                  {t.nav.brand}
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#E8D5AD]/90 font-medium">
                  Watamu · Kenya 🇰🇪
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="nav-desktop-menu" className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`nav-link-${link.href.replace('#', '')}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs tracking-[0.2em] font-medium uppercase text-[#F7F4EC]/85 hover:text-[#E8D5AD] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#E8D5AD] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Side: Language Switcher & WhatsApp CTA */}
            <div className="hidden sm:flex items-center space-x-4">
              {/* Language Switcher EN | IT */}
              <div
                id="language-switcher"
                className="flex items-center bg-black/40 backdrop-blur-sm rounded-full p-1 border border-[#E8D5AD]/20 text-xs font-semibold"
              >
                <button
                  id="lang-btn-en"
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                    currentLang === 'en'
                      ? 'bg-[#E8D5AD] text-[#18201B] shadow-sm font-bold'
                      : 'text-[#F7F4EC]/75 hover:text-white'
                  }`}
                  aria-label="Switch language to English"
                >
                  EN
                </button>
                <span className="text-white/30 text-[10px]">|</span>
                <button
                  id="lang-btn-it"
                  type="button"
                  onClick={() => onLanguageChange('it')}
                  className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                    currentLang === 'it'
                      ? 'bg-[#E8D5AD] text-[#18201B] shadow-sm font-bold'
                      : 'text-[#F7F4EC]/75 hover:text-white'
                  }`}
                  aria-label="Passa alla lingua Italiana"
                >
                  IT
                </button>
              </div>

              {/* WhatsApp Button */}
              <a
                id="nav-whatsapp-cta"
                href={getWhatsAppUrl(currentLang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#304C3A] hover:bg-[#3D5F4A] text-[#F7F4EC] border border-[#E8D5AD]/30 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all transform active:scale-95 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>{t.nav.whatsAppButton}</span>
              </a>
            </div>

            {/* Mobile Controls: Language & Hamburger */}
            <div className="flex items-center space-x-2 lg:hidden">
              {/* Mobile Language Switcher */}
              <div
                id="mobile-language-switcher"
                className="flex items-center bg-black/40 rounded-full p-0.5 border border-[#E8D5AD]/20 text-[11px] font-semibold"
              >
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`px-2 py-0.5 rounded-full ${
                    currentLang === 'en'
                      ? 'bg-[#E8D5AD] text-[#18201B] font-bold'
                      : 'text-white/70'
                  }`}
                >
                  EN
                </button>
                <span className="text-white/30 text-[9px]">|</span>
                <button
                  type="button"
                  onClick={() => onLanguageChange('it')}
                  className={`px-2 py-0.5 rounded-full ${
                    currentLang === 'it'
                      ? 'bg-[#E8D5AD] text-[#18201B] font-bold'
                      : 'text-white/70'
                  }`}
                >
                  IT
                </button>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                id="mobile-menu-toggle"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-0 z-40 bg-[#18201B] pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto lg:hidden"
        >
          <div className="space-y-6">
            <div className="border-b border-[#E8D5AD]/15 pb-4 flex items-center space-x-3">
              <img
                src={SITE_CONFIG.logoUrl}
                alt="Omar Logo"
                className="w-12 h-12 rounded-full object-cover border border-[#E8D5AD]/40"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-serif text-lg font-bold text-[#F7F4EC] block leading-tight">
                  {SITE_CONFIG.brandName}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#E8D5AD] block font-medium">
                  Watamu, Kenya 🇰🇪
                </span>
              </div>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`mobile-nav-link-${link.href.replace('#', '')}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-serif text-2xl text-[#F7F4EC] hover:text-[#E8D5AD] transition-colors py-1 flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <span className="text-[#E8D5AD]/40 text-sm">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 space-y-3 border-t border-[#E8D5AD]/15 mt-8">
            <a
              id="mobile-menu-whatsapp-btn"
              href={getWhatsAppUrl(currentLang)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-4 rounded-xl font-semibold text-sm tracking-wide shadow-md transition-all"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>{t.hero.chatWhatsApp}</span>
            </a>

            <button
              id="mobile-menu-quote-btn"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full text-center py-3 px-4 rounded-xl border border-[#E8D5AD]/40 text-[#E8D5AD] hover:bg-[#E8D5AD]/10 font-semibold text-sm tracking-wide transition-all"
            >
              {t.pricing.button}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
