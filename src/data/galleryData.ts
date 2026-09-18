import { GalleryItem } from '../types';

/**
 * Editorial Gallery Data
 * 
 * IMPORTANT NOTE FOR WEBSITE OWNER:
 * These high-resolution photos are royalty-free placeholders selected
 * to reflect Kenya, Watamu, marine waters, wildlife, and coastal culture.
 * 
 * TO REPLACE WITH OMAR'S REAL PHOTOS:
 * Simply replace the `imageUrl` with the path or URL of Omar's original
 * photographs (e.g., in `/public/images/omar/safari-1.jpg`).
 */

export const galleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    title: {
      en: 'Elephants in the Savannah',
      it: 'Elefanti nella savana',
    },
    category: 'SAFARI',
    imageUrl: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80',
    caption: {
      en: 'Gentle giants walking across the golden African plains.',
      it: 'I giganti gentili camminano lungo le pianure dorate africane.',
    },
    aspectRatio: 'wide',
  },
  {
    id: 'g-2',
    title: {
      en: 'Watamu Turquoise Lagoon',
      it: 'La laguna turchese di Watamu',
    },
    category: 'WATAMU',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    caption: {
      en: 'Pristine white coral sand and Indian Ocean shallows.',
      it: 'Sabbia bianca corallina incontaminata e le acque basse dell’Oceano Indiano.',
    },
    aspectRatio: 'square',
  },
  {
    id: 'g-3',
    title: {
      en: 'Marafa Canyon (Hell\'s Kitchen)',
      it: 'Canyon di Marafa (Hell\'s Kitchen)',
    },
    category: "HELL'S KITCHEN",
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    caption: {
      en: 'Layered sandstone formations carved by centuries of wind and rain.',
      it: 'Formazioni di arenaria stratificate scolpite da secoli di vento e pioggia.',
    },
    aspectRatio: 'tall',
  },
  {
    id: 'g-4',
    title: {
      en: 'Watamu Turquoise Ocean & Dhow',
      it: 'Oceano turchese e dhow a Watamu',
    },
    category: 'OCEAN',
    imageUrl: '/watamu_ocean_dhow.jpg',
    caption: {
      en: 'Crystal clear Indian ocean turquoise waters and sandbanks along the Kenyan coast in Watamu.',
      it: 'Acque turchesi cristalline e lingue di sabbia bianca lungo la costa keniota a Watamu.',
    },
    aspectRatio: 'wide',
  },
  {
    id: 'g-5',
    title: {
      en: 'Fresh Kenyan Coastal Flavours',
      it: 'I freschi sapori della costa keniota',
    },
    category: 'FOOD',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    caption: {
      en: 'Locally sourced spices, fresh coconut, and coastal delights.',
      it: 'Spezie locali, cocco fresco e le delizie della cucina costiera.',
    },
    aspectRatio: 'square',
  },
  {
    id: 'g-6',
    title: {
      en: 'The Lion of the Plains',
      it: 'Il leone della savana',
    },
    category: 'SAFARI',
    imageUrl: 'https://images.unsplash.com/photo-1614027164847-1b28caa142e1?auto=format&fit=crop&w=1200&q=80',
    caption: {
      en: 'Unmatched wildlife encounters in Kenya’s protected ecosystems.',
      it: 'Incontri ravvicinati indimenticabili negli ecosistemi protetti del Kenya.',
    },
    aspectRatio: 'tall',
  },
  {
    id: 'g-7',
    title: {
      en: 'Kenyan Family & Smiling Children',
      it: 'Famiglia keniota e bambini sorridenti',
    },
    category: 'PEOPLE',
    imageUrl: '/kenyan_family.jpg',
    caption: {
      en: 'Warm smiles and authentic family moments in a local Kenyan village community.',
      it: 'Sorrisi calorosi e autentici momenti in famiglia in una comunità locale keniota.',
    },
    aspectRatio: 'wide',
  },
  {
    id: 'g-8',
    title: {
      en: 'Sunset over Watamu Bay',
      it: 'Tramonto sulla baia di Watamu',
    },
    category: 'WATAMU',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
    caption: {
      en: 'Amber skies casting warm reflections on calm coastal waters.',
      it: 'Cieli color ambra che riflettono calde tonalità sulle placide acque costiere.',
    },
    aspectRatio: 'wide',
  },
  {
    id: 'g-9',
    title: {
      en: 'Acacia Silhouette at Dusk',
      it: 'Silhouette di acacia al crepuscolo',
    },
    category: 'KENYA',
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    caption: {
      en: 'The iconic Kenyan horizon bathed in fiery twilight.',
      it: 'L’iconico orizzonte keniota immerso nel crepuscolo di fuoco.',
    },
    aspectRatio: 'tall',
  },
];
