export type Language = 'en' | 'it';

export interface ItineraryStep {
  number: number;
  icon?: string;
  title: {
    en: string;
    it: string;
  };
  description: {
    en: string;
    it: string;
  };
  highlight?: {
    en: string;
    it: string;
  };
  optionalCost?: {
    en: string;
    it: string;
  };
}

export interface LunchMenuItem {
  icon: string;
  name: {
    en: string;
    it: string;
  };
  note?: {
    en: string;
    it: string;
  };
}

export interface Tour {
  id: string;
  slug: string;
  title: {
    en: string;
    it: string;
  };
  duration: {
    en: string;
    it: string;
  };
  available: {
    en: string;
    it: string;
  };
  transport: {
    en: string;
    it: string;
  };
  lunch?: {
    en: string;
    it: string;
  };
  tagline: {
    en: string;
    it: string;
  };
  description: {
    en: string;
    it: string;
  };
  departureTime?: {
    time: string;
    note: {
      en: string;
      it: string;
    };
  };
  detailedItinerary?: {
    intro: {
      en: string;
      it: string;
    };
    steps: ItineraryStep[];
    motto: {
      en: string;
      it: string;
    };
    closingInvitation: {
      en: string;
      it: string;
    };
  };
  lunchMenu?: {
    title: {
      en: string;
      it: string;
    };
    location: {
      en: string;
      it: string;
    };
    items: LunchMenuItem[];
  };
  foodSection?: {
    title: {
      en: string;
      it: string;
    };
    description: {
      en: string;
      it: string;
    };
    note: {
      en: string;
      it: string;
    };
  };
  placeholderSection?: {
    title: {
      en: string;
      it: string;
    };
    message: {
      en: string;
      it: string;
    };
    editableFieldsHint: {
      en: string;
      it: string;
    };
  };
  coverImage: string;
  imageAlt: string;
}

export interface GalleryItem {
  id: string;
  title: {
    en: string;
    it: string;
  };
  category: 'SAFARI' | 'OCEAN' | 'WATAMU' | "HELL'S KITCHEN" | 'FOOD' | 'PEOPLE' | 'KENYA';
  imageUrl: string;
  caption: {
    en: string;
    it: string;
  };
  aspectRatio: 'tall' | 'wide' | 'square';
}
