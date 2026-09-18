import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Language } from '../types';
import { getWhatsAppUrl } from '../data/siteConfig';

interface StickyWhatsAppProps {
  currentLang: Language;
}

export const StickyWhatsApp: React.FC<StickyWhatsAppProps> = ({ currentLang }) => {
  const [showBubble, setShowBubble] = useState(true);

  const bubbleText =
    currentLang === 'en'
      ? 'Questions? Chat with Omar on WhatsApp'
      : 'Hai domande? Scrivi a Omar su WhatsApp';

  return (
    <div
      id="sticky-whatsapp-container"
      className="fixed bottom-6 right-6 z-40 flex items-center space-x-3 pointer-events-auto"
    >
      {/* Informative Floating Tooltip Bubble */}
      {showBubble && (
        <div className="hidden sm:flex items-center space-x-2 bg-[#18201B] text-[#F7F4EC] border border-[#E8D5AD]/30 py-2 px-3.5 rounded-2xl shadow-xl text-xs font-medium max-w-xs animate-fadeIn">
          <span>{bubbleText}</span>
          <button
            type="button"
            onClick={() => setShowBubble(false)}
            className="text-white/50 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        id="sticky-whatsapp-button"
        href={getWhatsAppUrl(currentLang)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
        aria-label="Chat with Omar on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400" />
        </span>
        <MessageCircle className="w-7 h-7 text-white fill-white group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
