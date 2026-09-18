import React from 'react';
import { Camera, MapPin, Heart, ShieldCheck, Compass, MessageCircle, Instagram } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { getWhatsAppUrl, SITE_CONFIG } from '../data/siteConfig';

interface AboutOmarProps {
  currentLang: Language;
}

export const AboutOmar: React.FC<AboutOmarProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [photoUrl, setPhotoUrl] = React.useState<string>(SITE_CONFIG.omarPhotoUrl);

  return (
    <section id="about-omar" className="py-20 sm:py-28 bg-[#F7F4EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Official Badge Container */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-4">
            {/* Official Badge Card */}
            <div className="w-full max-w-md bg-white rounded-2xl p-5 border border-[#8A6045]/20 shadow-md flex items-center space-x-4">
              <img
                src={SITE_CONFIG.logoUrl}
                alt="Omar Official Logo"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#8A6045] shadow-sm shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="min-w-0">
                <span className="font-serif font-bold text-lg text-[#18201B] block leading-tight">
                  {SITE_CONFIG.brandName}
                </span>
                <span className="text-xs text-[#8A6045] font-medium block">
                  Watamu, Coast Region · Kenya 🇰🇪
                </span>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-xs text-[#304C3A] hover:underline block truncate mt-0.5"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
            </div>

            {/* Omar's Real Portrait Photograph at Sunset */}
            <div
              id="omar-photo-container"
              className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#8A6045]/40 shadow-xl group"
            >
              <img
                id="about-omar-portrait"
                src={photoUrl}
                alt="Omar - Watamu Kenya Tour Guide on the boat at sunset"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={() => {
                  if (photoUrl === '/omar_gemini.jpg') {
                    setPhotoUrl('/Omar gemini.jpg');
                  } else if (photoUrl === '/Omar gemini.jpg') {
                    setPhotoUrl('/omar.jpg');
                  } else if (photoUrl === '/omar.jpg') {
                    setPhotoUrl('/omar_sunset_portrait.jpg');
                  }
                }}
              />

              {/* Gradient overlay for text legibility at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md py-2.5 px-4 rounded-xl border border-white/20 text-xs text-[#F7F4EC] flex items-center justify-between shadow-md">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="font-medium">Omar · Watamu Guide</span>
                </div>
                <span className="font-semibold text-[#E8D5AD] font-mono">{SITE_CONFIG.whatsApp.phoneDisplay}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio & Values */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-[#8A6045]/10 text-[#8A6045] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>{t.aboutOmar.badge}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#18201B] tracking-tight leading-tight mb-4">
                {t.aboutOmar.title}
              </h2>

              <div className="w-20 h-0.5 bg-[#8A6045] mb-6" />

              <p className="font-serif text-xl sm:text-2xl text-[#304C3A] leading-relaxed mb-6 font-medium">
                {t.aboutOmar.bio}
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.aboutOmar.values.map((v, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 p-4 rounded-xl border border-[#8A6045]/15 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#304C3A]/10 text-[#304C3A] flex items-center justify-center mb-2 font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#18201B] mb-1">
                    {v.label}
                  </h4>
                  <p className="text-xs text-[#18201B]/70 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Designated Space for Longer Personal Story (as required by prompt) */}
            <div
              id="omar-personal-story-placeholder"
              className="bg-[#E8D5AD]/20 border border-dashed border-[#8A6045]/30 rounded-xl p-5"
            >
              <div className="flex items-center space-x-2 text-[#8A6045] text-xs font-semibold uppercase tracking-wider mb-1">
                <Heart className="w-3.5 h-3.5" />
                <span>{t.aboutOmar.storyPlaceholderTitle}</span>
              </div>
              <p className="text-xs text-[#18201B]/75 leading-relaxed">
                {t.aboutOmar.storyPlaceholderDesc}
              </p>
            </div>

            {/* Quick Contact & Instagram Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                id="about-omar-whatsapp-link"
                href={getWhatsAppUrl(currentLang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[#304C3A] hover:text-[#23382B] font-bold text-xs uppercase tracking-wider group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className="border-b border-[#304C3A] group-hover:border-[#23382B]">
                  {t.hero.chatWhatsApp}
                </span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                id="about-omar-instagram-link"
                href={SITE_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[#8A6045] hover:text-[#5E3F2D] font-bold text-xs uppercase tracking-wider group"
              >
                <Instagram className="w-4 h-4 text-[#E8D5AD] bg-[#8A6045] rounded-full p-0.5" />
                <span className="border-b border-[#8A6045] group-hover:border-[#5E3F2D]">
                  {SITE_CONFIG.instagram.displayLabel}
                </span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
