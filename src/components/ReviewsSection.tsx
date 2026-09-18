import React, { useState } from 'react';
import { Star, MessageSquareQuote, ExternalLink, Info } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { SITE_CONFIG } from '../data/siteConfig';

interface ReviewsSectionProps {
  currentLang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ currentLang }) => {
  const [showPlaceholderTip, setShowPlaceholderTip] = useState(false);
  const t = translations[currentLang];

  const handleGoogleReviewsClick = (e: React.MouseEvent) => {
    if (SITE_CONFIG.googleReviews.isPlaceholder) {
      e.preventDefault();
      setShowPlaceholderTip(true);
      setTimeout(() => setShowPlaceholderTip(false), 4000);
    }
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F7F4EC] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <span className="text-xs uppercase tracking-[0.25em] text-[#8A6045] font-semibold block mb-2">
          Traveller Feedback
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#18201B] tracking-tight mb-4">
          {t.reviews.title}
        </h2>
        <div className="w-16 h-0.5 bg-[#8A6045] mx-auto mb-10" />

        {/* Reviews Coming Soon Container (Prompt constraint: DO NOT INVENT REVIEWS) */}
        <div className="bg-[#F4EAD3]/70 border-2 border-dashed border-[#8A6045]/30 rounded-3xl p-8 sm:p-14 shadow-sm relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-[#8A6045]/10 border border-[#8A6045]/20 flex items-center justify-center mx-auto mb-6 text-[#8A6045]">
            <MessageSquareQuote className="w-8 h-8" />
          </div>

          <div className="flex items-center justify-center space-x-1 text-[#E8D5AD] mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#E8D5AD] text-[#D4BE8D]" />
            ))}
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#18201B] mb-3">
            {t.reviews.comingSoon}
          </h3>

          <p className="text-sm sm:text-base text-[#18201B]/70 max-w-lg mx-auto leading-relaxed mb-8">
            {t.reviews.subtext}
          </p>

          {/* Button: READ OUR GOOGLE REVIEWS with editable placeholder URL */}
          <div className="inline-flex flex-col items-center">
            <a
              id="google-reviews-btn"
              href={SITE_CONFIG.googleReviews.url}
              onClick={handleGoogleReviewsClick}
              className="inline-flex items-center space-x-2 bg-[#18201B] hover:bg-[#304C3A] text-[#F7F4EC] px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-md active:scale-95"
            >
              <span>{t.reviews.button}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#E8D5AD]" />
            </a>

            {/* Editable notice badge */}
            <span className="text-[11px] text-[#8A6045] mt-3 font-mono">
              Placeholder: {SITE_CONFIG.googleReviews.placeholderLabel}
            </span>

            {showPlaceholderTip && (
              <div className="mt-3 bg-[#18201B] text-[#E8D5AD] px-4 py-2 rounded-xl text-xs flex items-center space-x-2 animate-fadeIn shadow-lg">
                <Info className="w-4 h-4 text-[#E8D5AD]" />
                <span>{t.reviews.placeholderLinkNotice}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
