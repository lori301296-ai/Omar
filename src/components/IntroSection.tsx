import React from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { SITE_CONFIG } from '../data/siteConfig';

interface IntroSectionProps {
  currentLang: Language;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section
      id="experience"
      className="py-20 sm:py-28 bg-[#F7F4EC] text-[#18201B] relative overflow-hidden border-b border-[#8A6045]/15"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtle Category Eyebrow */}
        <div className="inline-flex items-center space-x-2 text-[#8A6045] mb-5">
          <Compass className="w-4 h-4 text-[#304C3A]" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold">
            {t.introSection.tag}
          </span>
        </div>

        {/* Large Editorial Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#18201B] leading-[1.15] tracking-tight max-w-3xl mx-auto mb-8">
          <span className="block text-[#18201B]">{t.introSection.headlinePart1}</span>
          <span className="block text-[#304C3A] italic font-normal">{t.introSection.headlinePart2}</span>
        </h2>

        {/* Divider accent line with earth brown tone */}
        <div className="w-16 h-[2px] bg-[#8A6045]/40 mx-auto mb-8" />

        {/* Editorial Body Text */}
        <p className="text-base sm:text-xl text-[#18201B]/80 font-normal leading-relaxed max-w-2xl mx-auto font-sans">
          {t.introSection.text}
        </p>

        {/* Subtle Local Indicator */}
        <div className="mt-8 inline-flex items-center space-x-2 text-xs text-[#8A6045] font-medium tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#304C3A]" />
          <span>{currentLang === 'it' ? SITE_CONFIG.location.displayIt : SITE_CONFIG.location.displayEn}</span>
        </div>
      </div>
    </section>
  );
};
