import React from 'react';
import { User, Users, Compass, Check } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface PrivateGroupSectionProps {
  currentLang: Language;
  onOpenQuoteModal: () => void;
}

export const PrivateGroupSection: React.FC<PrivateGroupSectionProps> = ({
  currentLang,
  onOpenQuoteModal,
}) => {
  const t = translations[currentLang];

  return (
    <section id="travel-styles" className="py-20 sm:py-28 bg-[#18201B] text-[#F7F4EC] relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#8A6045_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E8D5AD] font-semibold block mb-2">
            Tailored Journeys
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-[#F7F4EC]">
            {t.privateOrGroup.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#E8D5AD]/40 mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#E8D5AD]/90 leading-relaxed">
            {t.privateOrGroup.subtitle}
          </p>
        </div>

        {/* Two Visual Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Block 1: PRIVATE TOURS */}
          <div
            id="block-private-tours"
            className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#304C3A]/60 to-[#18201B] border border-[#E8D5AD]/20 p-8 sm:p-10 flex flex-col justify-between hover:border-[#E8D5AD]/50 transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#E8D5AD]/10 border border-[#E8D5AD]/30 flex items-center justify-center mb-6 text-[#E8D5AD]">
                <User className="w-7 h-7" />
              </div>

              <span className="text-xs uppercase tracking-[0.2em] text-[#E8D5AD] font-semibold block mb-1">
                Bespoke Itinerary
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F4EC] mb-2">
                {t.privateOrGroup.privateTitle}
              </h3>
              <p className="text-lg font-serif italic text-[#E8D5AD] mb-4">
                "{t.privateOrGroup.privateTagline}"
              </p>
              <p className="text-sm text-[#F7F4EC]/80 leading-relaxed mb-6">
                {t.privateOrGroup.privateDesc}
              </p>

              <ul className="space-y-3 text-xs text-[#F7F4EC]/85">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Dedicated private guide and custom schedule</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Perfect for couples, photographers, and families</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Door-to-door transportation from your Watamu stay</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10">
              <button
                id="btn-choose-private"
                type="button"
                onClick={onOpenQuoteModal}
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#E8D5AD] hover:bg-[#F4EAD3] text-[#18201B] py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
              >
                <Compass className="w-4 h-4" />
                <span>{t.pricing.button}</span>
              </button>
            </div>
          </div>

          {/* Block 2: GROUP TOURS */}
          <div
            id="block-group-tours"
            className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#8A6045]/40 to-[#18201B] border border-[#E8D5AD]/20 p-8 sm:p-10 flex flex-col justify-between hover:border-[#E8D5AD]/50 transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#E8D5AD]/10 border border-[#E8D5AD]/30 flex items-center justify-center mb-6 text-[#E8D5AD]">
                <Users className="w-7 h-7" />
              </div>

              <span className="text-xs uppercase tracking-[0.2em] text-[#E8D5AD] font-semibold block mb-1">
                Shared Expeditions
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F4EC] mb-2">
                {t.privateOrGroup.groupTitle}
              </h3>
              <p className="text-lg font-serif italic text-[#E8D5AD] mb-4">
                "{t.privateOrGroup.groupTagline}"
              </p>
              <p className="text-sm text-[#F7F4EC]/80 leading-relaxed mb-6">
                {t.privateOrGroup.groupDesc}
              </p>

              <ul className="space-y-3 text-xs text-[#F7F4EC]/85">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Small, engaging groups of international travellers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Shared costs and great social camaraderie</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Guided by Omar and trusted local experts</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10">
              <button
                id="btn-choose-group"
                type="button"
                onClick={onOpenQuoteModal}
                className="w-full inline-flex items-center justify-center space-x-2 bg-transparent border border-[#E8D5AD] text-[#E8D5AD] hover:bg-[#E8D5AD] hover:text-[#18201B] py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
              >
                <Compass className="w-4 h-4" />
                <span>{t.pricing.button}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
