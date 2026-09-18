/**
 * OMAR'S COMPANY - Global Configuration & Editable Variables
 * 
 * Update these values when Omar confirms:
 * - WhatsApp international phone format (e.g., Italian +39 or Kenyan +254)
 * - Official Google Reviews page link
 * - Official Instagram handle
 */

export const SITE_CONFIG = {
  brandName: "OMAR'S COMPANY",
  taglineBrand: "Discover Kenya with Omar",
  logoUrl: "/logo.jpg",
  location: {
    town: 'Watamu',
    country: 'Kenya',
    flag: '🇰🇪',
    displayEn: 'Based in Watamu, Kenya 🇰🇪',
    displayIt: 'Con base a Watamu, Kenya 🇰🇪',
  },

  /**
   * Official Contact Information from Omar:
   * Logo contact lines: 0116534487 / 0794777212
   * Email: omarfamau991@gmail.com
   */
  contact: {
    email: 'omarfamau991@gmail.com',
    kenyaPhones: [
      { raw: '0116534487', display: '+254 116 534 487', tel: '+254116534487' },
      { raw: '0794777212', display: '+254 794 777 212', tel: '+254794777212' },
    ],
  },

  /**
   * WhatsApp number confirmed by Omar: +254 116 534487
   */
  whatsApp: {
    rawNumber: '+254 116 534487',
    phoneDisplay: '+254 116 534 487',
    dialNumber: '254116534487', // International dialing format: +254 116 534487
    secondaryDialNumber: '254794777212',
    secondaryDisplay: '+254 794 777 212',
    prefilledMessages: {
      en: "Hi Omar! I'm interested in one of your Kenya tours. Could you please send me more information?",
      it: "Ciao Omar! Sono interessato a uno dei tuoi tour in Kenya. Potresti mandarmi maggiori informazioni?",
    },
  },
  omarPhotoUrl: '/omar_gemini.jpg',

  /**
   * Google Reviews URL placeholder: [GOOGLE REVIEWS LINK]
   */
  googleReviews: {
    url: '#google-reviews',
    isPlaceholder: true,
    placeholderLabel: '[GOOGLE REVIEWS LINK]',
  },

  /**
   * Official Instagram profile: omar.famau.18
   */
  instagram: {
    comingSoon: false,
    handle: 'omar.famau.18',
    url: 'https://instagram.com/omar.famau.18',
    displayLabel: '@omar.famau.18',
  },
};

/**
 * Generate a WhatsApp click-to-chat URL with optional custom pre-filled message
 */
export function getWhatsAppUrl(lang: 'en' | 'it' = 'en', customMessage?: string): string {
  const message = customMessage || SITE_CONFIG.whatsApp.prefilledMessages[lang];
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsApp.dialNumber}?text=${encoded}`;
}
