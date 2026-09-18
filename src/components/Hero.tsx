import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, MessageCircle, Compass } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { getWhatsAppUrl } from '../data/siteConfig';

interface HeroProps {
  currentLang: Language;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onExploreClick }) => {
  const t = translations[currentLang];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#18201B]"
    >
      {/* Background Cinematic Image with subtle zoom */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3.5, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2400&q=85"
            alt="Scenic Kenya safari savannah landscape with wild elephants at golden hour"
            className="w-full h-full object-cover object-center"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Cinematic Multi-Layer Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#18201B] via-black/45 to-black/60" />
        <div className="absolute inset-0 bg-[#304C3A]/25 mix-blend-multiply" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-16 flex flex-col items-center">
        {/* Main Serif Headline */}
        <motion.h1
          key={currentLang + '-headline'}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F7F4EC] leading-[1.08] mb-6 drop-shadow-md max-w-4xl"
        >
          {t.hero.headline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          key={currentLang + '-subtitle'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-base sm:text-xl md:text-2xl text-[#E8D5AD] font-light max-w-2xl leading-relaxed mb-10 text-balance drop-shadow"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            id="hero-explore-tours-btn"
            type="button"
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#E8D5AD] hover:bg-[#F4EAD3] text-[#18201B] px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-[#E8D5AD]/20 active:scale-95 group"
          >
            <Compass className="w-4 h-4 text-[#18201B] group-hover:rotate-45 transition-transform duration-300" />
            <span>{t.hero.exploreTours}</span>
          </button>

          <a
            id="hero-whatsapp-btn"
            href={getWhatsAppUrl(currentLang)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#304C3A]/90 hover:bg-[#304C3A] text-[#F7F4EC] border border-[#E8D5AD]/30 px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase backdrop-blur-sm transition-all shadow-md active:scale-95 group"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
            <span>{t.hero.chatWhatsApp}</span>
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-auto cursor-pointer"
        onClick={onExploreClick}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#E8D5AD]/70 mb-2 font-medium">
          {t.hero.scrollPrompt}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-8 h-8 rounded-full border border-[#E8D5AD]/30 flex items-center justify-center bg-black/20 backdrop-blur-sm text-[#E8D5AD]"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};
