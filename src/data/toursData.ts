import { Tour } from '../types';

/**
 * Tours & Experiences Data
 * 
 * DESIGNED FOR EASY EDITING:
 * To add confirmed safari destinations, detailed day-by-day itineraries,
 * wildlife highlights, lodges/accommodations, activities, or pricing,
 * simply edit the respective fields below.
 */

export const toursData: Tour[] = [
  {
    id: 'safari',
    slug: 'safari',
    title: {
      en: 'SAFARI',
      it: 'SAFARI',
    },
    duration: {
      en: '1–7 DAYS',
      it: '1–7 GIORNI',
    },
    available: {
      en: 'PRIVATE & GROUP TOURS',
      it: 'TOUR PRIVATI E DI GRUPPO',
    },
    transport: {
      en: 'INCLUDED',
      it: 'INCLUSO',
    },
    tagline: {
      en: 'The legendary wilderness of Kenya',
      it: 'La leggendaria natura selvaggia del Kenya',
    },
    description: {
      en: "Experience Kenya's wild side with a safari designed around your journey.",
      it: 'Vivi il lato più selvaggio del Kenya con un safari costruito intorno al tuo viaggio.',
    },
    placeholderSection: {
      title: {
        en: 'SAFARI DESTINATIONS',
        it: 'DESTINAZIONI SAFARI',
      },
      message: {
        en: 'Details coming soon.',
        it: 'Dettagli in arrivo.',
      },
      editableFieldsHint: {
        en: 'Ready to receive: Destinations, Itinerary, Wildlife, Accommodation, Activities, Duration, and Custom Quote.',
        it: 'Predisposto per: Destinazioni, Itinerario, Fauna, Alloggi, Attività, Durata e Preventivo personalizzato.',
      },
    },
    // High quality royalty-free African safari photography (Elephants in Kenyan savannah)
    coverImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'African safari wildlife landscape placeholder',
  },
  {
    id: 'blue-safari',
    slug: 'blue-safari',
    title: {
      en: 'SAFARI BLUE WITH PRIVATE OWNED BOAT',
      it: 'SAFARI BLUE CON BARCA DI PROPRIETÀ',
    },
    duration: {
      en: '1 DAY',
      it: '1 GIORNO',
    },
    available: {
      en: 'PRIVATE & GROUP TOURS',
      it: 'TOUR PRIVATI E DI GRUPPO',
    },
    transport: {
      en: 'INCLUDED',
      it: 'INCLUSO',
    },
    lunch: {
      en: 'INCLUDED (SEAFOOD & LOBSTER)',
      it: 'INCLUSO (PESCE & ARAGOSTA)',
    },
    departureTime: {
      time: '9:00',
      note: {
        en: 'Departure time may vary depending on the tide.',
        it: "L'orario di partenza può variare in base alla marea.",
      },
    },
    tagline: {
      en: 'An unforgettable day on Omar\'s own traditional boat with fresh seafood feast',
      it: 'Una giornata indimenticabile sulla barca di proprietà di Omar con delizioso pesce fresco',
    },
    description: {
      en: 'Discover the beauty of the Kenyan coast with a full-day experience on Omar\'s private boat: dolphin watching, coral snorkeling, swimming, tropical fruits, mangroves, and lobster on Sudi Island.',
      it: "Scopri la bellezza della costa del Kenya con la barca di proprietà di Omar: avvistamento delfini, snorkeling tra i coralli, nuotate, frutta fresca, mangrovie e aragosta a Sudi Island.",
    },
    foodSection: {
      title: {
        en: 'TASTE THE FLAVOURS OF THE KENYAN COAST',
        it: 'ASSAPORA I SAPORI DELLA COSTA KENYOTA',
      },
      description: {
        en: 'Enjoy fresh local food and typical Kenyan coastal cuisine during your experience on Sudi Island.',
        it: 'Assapora prodotti freschi e la tipica cucina della costa kenyota durante la tua esperienza a Sudi Island.',
      },
      note: {
        en: 'Freshly grilled fish, prawns, lobster, coconut rice, and seasonal tropical fruits prepared on Sudi Island.',
        it: 'Pesce alla griglia, gamberi, aragosta fresca, riso al cocco e frutta tropicale preparati su Sudi Island.',
      },
    },
    detailedItinerary: {
      intro: {
        en: 'Get ready to experience an unforgettable day along the splendid Kenyan coast on our own boat, featuring dolphins, coral snorkeling, swimming in calm shallows, fresh tropical fruits, mangroves, and a delicious seafood and lobster feast on Sudi Island.',
        it: "Preparati a vivere una giornata indimenticabile sulla nostra barca lungo la splendida costa del Kenya: delfini, snorkeling tra i coralli, nuotate in acque basse, frutta tropicale, mangrovie e pranzo a base di pesce e aragosta sull'isola di Sudi.",
      },
      motto: {
        en: "SAFARI BLUE CON BARCA DI PROPRIETÀ — WHERE THE OCEAN MEETS ADVENTURE! 🐬",
        it: "SAFARI BLUE CON BARCA DI PROPRIETÀ — DOVE IL MARE INCONTRA L'AVVENTURA! 🐬",
      },
      closingInvitation: {
        en: 'Come swim, explore, taste, relax, and create unforgettable memories aboard our private boat!',
        it: 'Vieni a nuotare, esplorare, gustare, rilassarti e creare ricordi indimenticabili a bordo della nostra barca!',
      },
      steps: [
        {
          number: 1,
          icon: '🐬',
          title: {
            en: '1. Dolphin Watching',
            it: '1. Avvistamento dei delfini',
          },
          description: {
            en: 'Our adventure begins with dolphin watching, where you will have the chance to admire these splendid creatures in their natural habitat.',
            it: "La nostra avventura inizia con l'avvistamento dei delfini, durante il quale avrai la possibilità di ammirare questi splendidi animali nel loro ambiente naturale.",
          },
          highlight: {
            en: 'Dolphin watching is seasonal and typically available from mid-November to March.',
            it: "L'avvistamento dei delfini è stagionale e disponibile indicativamente da metà novembre a marzo.",
          },
        },
        {
          number: 2,
          icon: '🤿',
          title: {
            en: '2. Snorkeling in Watamu Marine Park',
            it: '2. Snorkeling nel Watamu Marine Park',
          },
          description: {
            en: 'Immerse yourself from the boat into the crystalline waters of Watamu Marine Park and explore a spectacular underwater world rich with colourful fish and vibrant coral formations.',
            it: 'Immergiti dalla barca nelle acque cristalline del Watamu Marine Park e scopri lo spettacolare mondo sottomarino ricco di pesci colorati e formazioni coralline.',
          },
        },
        {
          number: 3,
          icon: '🏝️',
          title: {
            en: '3. Swimming in the Shallow Waters of Garoda',
            it: '3. Nuotata nelle acque basse di Garoda',
          },
          description: {
            en: 'Enjoy a delightful swim in the calm, turquoise shallow waters of Garoda — perfect for swimming, cooling off, and unwinding in paradise.',
            it: 'Goditi una piacevole nuotata nelle bellissime acque basse di Garoda, ideali per rilassarsi, rinfrescarsi e divertirsi in mare.',
          },
        },
        {
          number: 4,
          icon: '🍉',
          title: {
            en: '4. Fresh Tropical Fruit Break',
            it: '4. Pausa con frutta tropicale',
          },
          description: {
            en: 'During the excursion, we serve a refreshing selection of freshly sliced tropical fruits: sweet watermelon 🍉, fresh banana 🍌, and juicy pineapple 🍍.',
            it: "Durante l'escursione serviamo una selezione di frutta tropicale fresca: Anguria 🍉, Banana 🍌 e Ananas 🍍.",
          },
        },
        {
          number: 5,
          icon: '🌿',
          title: {
            en: '5. Mangrove Ecosystem Exploration',
            it: '5. Avvistamento delle mangrovie',
          },
          description: {
            en: 'Admire the wondrous mangrove ecosystem, one of the most vital and fascinating natural marine landscapes along the coast of Kenya.',
            it: 'Ammira il meraviglioso ecosistema delle mangrovie, una delle caratteristiche naturali più affascinanti della costa del Kenya.',
          },
        },
        {
          number: 6,
          icon: '🛶',
          title: {
            en: '6. Canoe Tour (Optional)',
            it: '6. Giro in canoa — Opzionale',
          },
          description: {
            en: 'For those who wish to experience an even closer connection with nature, a relaxing traditional wooden canoe ride through the winding mangrove canals is available.',
            it: "Per chi desidera vivere un'esperienza ancora più avventurosa, è disponibile un rilassante giro in canoa attraverso le mangrovie.",
          },
          optionalCost: {
            en: 'Canoe ride cost: KSh 1,000 per person (optional extra, not included in the standard Safari Blue package)',
            it: 'Costo del giro in canoa: KSh 1.000 a persona (Il giro in canoa non è incluso nel pacchetto Safari Blue)',
          },
        },
        {
          number: 7,
          icon: '🦞',
          title: {
            en: '7. Seafood & Lobster Feast on Sudi Island',
            it: "7. Pranzo a base di pesce e frutti di mare sull'isola di Sudi",
          },
          description: {
            en: 'Following the morning activities, we cruise to Sudi Island to enjoy an authentic coastal banquet cooked over an open fire.',
            it: 'Dopo le attività della mattina, ci dirigiamo verso Sudi Island per gustare un delizioso pranzo in stile costiero.',
          },
        },
        {
          number: 8,
          icon: '🌅',
          title: {
            en: '8. Conclusion of Excursion & Return',
            it: "8. Fine dell'escursione e rientro",
          },
          description: {
            en: 'After a leisurely lunch and time to unwind on magnificent Sudi Island, we set sail back to Watamu, concluding an unforgettable Safari Blue journey.',
            it: "Dopo il pranzo e un po' di relax sulla splendida Sudi Island, inizieremo il viaggio di ritorno, concludendo così la nostra indimenticabile esperienza Safari Blue.",
          },
        },
      ],
    },
    lunchMenu: {
      title: {
        en: 'Seafood & Coastal Lunch Menu',
        it: 'Menù del pranzo a base di pesce e frutti di mare',
      },
      location: {
        en: 'Sudi Island',
        it: "Isola di Sudi",
      },
      items: [
        {
          icon: '🥥',
          name: {
            en: 'Coconut rice',
            it: 'Riso al cocco',
          },
        },
        {
          icon: '🐙',
          name: {
            en: 'Octopus soup',
            it: 'Zuppa di polpo',
          },
        },
        {
          icon: '🥔',
          name: {
            en: 'Potato soup',
            it: 'Zuppa di patate',
          },
          note: {
            en: 'Available for non-octopus eaters',
            it: 'Disponibile per chi non mangia il polpo',
          },
        },
        {
          icon: '🐟',
          name: {
            en: 'Grilled fresh fish',
            it: 'Pesce alla griglia',
          },
        },
        {
          icon: '🍤',
          name: {
            en: 'Succulent prawns',
            it: 'Gamberi',
          },
        },
        {
          icon: '🦞',
          name: {
            en: 'Fresh lobster',
            it: 'Aragosta',
          },
        },
        {
          icon: '🥤',
          name: {
            en: 'Soft drinks',
            it: 'Bibita',
          },
        },
        {
          icon: '💧',
          name: {
            en: 'Fresh bottled water',
            it: 'Acqua',
          },
        },
        {
          icon: '🍉',
          name: {
            en: 'Fresh watermelon, banana, and pineapple',
            it: 'Anguria, Banana, Ananas',
          },
        },
      ],
    },
    // Real Kenyan wooden safari boat in turquoise lagoon
    coverImage: '/safari_blue_boat.jpg',
    imageAlt: 'Traditional Kenyan wooden boat on turquoise waters of Watamu for Safari Blue',
  },
  {
    id: 'hells-kitchen',
    slug: 'hells-kitchen',
    title: {
      en: "MARAFA SUNSET & HELL'S KITCHEN",
      it: "SUNSET A MARAFA HELL'S KITCHEN",
    },
    duration: {
      en: 'AFTERNOON / 1 DAY',
      it: 'POMERIGGIO / 1 GIORNO',
    },
    available: {
      en: 'PRIVATE & GROUP TOURS',
      it: 'TOUR PRIVATI E DI GRUPPO',
    },
    transport: {
      en: 'INCLUDED',
      it: 'INCLUSO',
    },
    lunch: {
      en: 'AVAILABLE ON REQUEST',
      it: 'SU RICHIESTA',
    },
    tagline: {
      en: 'The dramatic sandstone canyon of Marafa glowing in sunset colours',
      it: 'Lo spettacolare canyon di arenaria di Marafa illuminato dai colori del tramonto',
    },
    description: {
      en: 'Experience the magic of Marafa Hell\'s Kitchen at sunset, walking through carved sandstone gulleys and chimneys as the rock turns fiery red, orange, and gold.',
      it: "Vivi la magia di Marafa Hell's Kitchen all'ora del tramonto, camminando attraverso gole scolpite e camini di arenaria mentre le rocce si accendono di rosso, arancio e oro.",
    },
    foodSection: {
      title: {
        en: 'LOCAL FLAVOURS',
        it: 'SAPORI LOCALI',
      },
      description: {
        en: 'Refreshments and local coastal specialties can be arranged as part of the sunset excursion.',
        it: 'Rinfreschi e specialità locali della costa possono essere inclusi su richiesta.',
      },
      note: {
        en: 'Can be combined with Robinson Island seafood lunch.',
        it: 'Abbinabile con il pranzo di pesce fresco a Robinson Island.',
      },
    },
    placeholderSection: {
      title: {
        en: "SUNSET AT MARAFA ITINERARY",
        it: "ITINERARIO TRAMONTO A MARAFA",
      },
      message: {
        en: 'Guided canyon descent with local guide, natural viewpoints, sunset photo session, and transfer.',
        it: 'Discesa guidata nel canyon con guida locale, punti panoramici, foto al tramonto e transfer.',
      },
      editableFieldsHint: {
        en: 'Departure from Watamu in the early afternoon, guided tour of the canyon, sunset over the rocks, and return.',
        it: 'Partenza da Watamu nel primo pomeriggio, tour guidato nel canyon, tramonto sulle rocce e rientro.',
      },
    },
    // Real photograph of Marafa Hell's Kitchen at sunset
    coverImage: '/marafa_sunset.jpg',
    imageAlt: "Marafa Hell's Kitchen sandstone canyon cliffs at fiery sunset",
  },
  {
    id: 'vera-africa',
    slug: 'vera-africa',
    title: {
      en: 'REAL AFRICA: CITY TOUR & SCHOOL VISIT',
      it: 'VERA AFRICA: TOUR DELLA CITTÀ & VISITA ALLA SCUOLA',
    },
    duration: {
      en: 'HALF DAY / 1 DAY',
      it: 'MEZZA GIORNATA / 1 GIORNO',
    },
    available: {
      en: 'PRIVATE & GROUP TOURS',
      it: 'TOUR PRIVATI E DI GRUPPO',
    },
    transport: {
      en: 'INCLUDED',
      it: 'INCLUSO',
    },
    lunch: {
      en: 'OPTIONAL LOCAL TASTING',
      it: 'DEGUSTAZIONE LOCALE OPZIONALE',
    },
    tagline: {
      en: 'Immerse yourself in authentic everyday Kenya with local guides',
      it: 'Immergiti nella vita quotidiana autentica del Kenya con guide locali',
    },
    description: {
      en: 'A deep cultural journey through real Kenyan life: walking around town with authentic locals, bustling markets, neighbourhood traditions, and an unforgettable visit to a local village school to connect with children and teachers.',
      it: "Un viaggio culturale profondo nella vera vita del Kenya: passeggiata nella città reale con i local, mercati vivaci, tradizioni di quartiere e una commovente visita a una scuola locale per incontrare i bambini e gli insegnanti.",
    },
    foodSection: {
      title: {
        en: 'AUTHENTIC LOCAL STREET TASTING',
        it: 'ASSAGGI AUTENTICI LOCALI',
      },
      description: {
        en: 'Taste fresh local fruits, samosas, fresh coconut water, and traditional coastal tea during the city tour.',
        it: 'Assaggia frutta locale appena colta, samosa fresche, acqua di cocco e tè tradizionale costiero.',
      },
      note: {
        en: 'Respectful, authentic community engagement supporting the local school.',
        it: 'Esperienza comunitaria autentica e rispettosa a supporto della scuola locale.',
      },
    },
    placeholderSection: {
      title: {
        en: 'REAL AFRICA ITINERARY',
        it: 'ITINERARIO VERA AFRICA',
      },
      message: {
        en: 'City walk, local markets, artisans, cultural exchange, and school visit.',
        it: 'Passeggiata in città, mercati tipici, artigiani, scambio culturale e visita alla scuola.',
      },
      editableFieldsHint: {
        en: 'Pick up from accommodation, local guided city tour, interactive school visit with children, traditional craft stops.',
        it: 'Pick up in struttura, tour guidato con la gente del posto, incontro con gli studenti a scuola e tappe artigianali.',
      },
    },
    coverImage: '/kenyan_family.jpg',
    imageAlt: 'Authentic Kenyan people, children and local community in Kenya',
  },
  {
    id: 'wood-factory-robinson',
    slug: 'wood-factory-robinson',
    title: {
      en: 'MALINDI WOOD FACTORY & ROBINSON ISLAND SEAFOOD',
      it: 'FABBRICA DEL LEGNO A MALINDI & PRANZO A ROBINSON ISLAND',
    },
    duration: {
      en: '1 DAY',
      it: '1 GIORNO',
    },
    available: {
      en: 'PRIVATE & GROUP TOURS',
      it: 'TOUR PRIVATI E DI GRUPPO',
    },
    transport: {
      en: 'INCLUDED',
      it: 'INCLUSO',
    },
    lunch: {
      en: 'INCLUDED (FRESH SEAFOOD ON ROBINSON ISLAND)',
      it: 'INCLUSO (PESCE FRESCO A ROBINSON ISLAND)',
    },
    tagline: {
      en: 'Master wood carving craftsmanship and legendary seafood on Robinson Island',
      it: 'La maestria dell’artigianato del legno e il celebre pranzo di pesce a Robinson Island',
    },
    description: {
      en: 'Discover the extraordinary artisan cooperative of wood carvers in Malindi, witnessing sculptures created by hand from ebony and mahogany, followed by a crossing to wild Robinson Island for a renowned feast of fresh crab, prawns, and grilled fish.',
      it: "Scopri la straordinaria cooperativa di intagliatori del legno a Malindi ammirando sculture fatte a mano in ebano e mogano, per poi attraversare verso la selvaggia Robinson Island per un memorabile pranzo di pesce fresco, granchi e gamberi.",
    },
    foodSection: {
      title: {
        en: 'ROBINSON ISLAND FRESH SEAFOOD LUNCH',
        it: 'PRANZO DI PESCE FRESCO SULL’ISOLA DI ROBINSON',
      },
      description: {
        en: 'Enjoy an authentic open-air feast with fresh crab, grilled fish, coconut rice, and typical coastal spices.',
        it: 'Gusta un pranzo autentico all’aperto a base di granchi freschi, pesce alla griglia, riso al cocco e spezie locali.',
      },
      note: {
        en: 'Can be combined with sunset at Marafa Hell’s Kitchen for a full day of wonder.',
        it: 'Perfettamente abbinabile con il tramonto a Marafa Hell’s Kitchen.',
      },
    },
    placeholderSection: {
      title: {
        en: 'TOUR HIGHLIGHTS',
        it: 'PUNTI SALIENTI DEL TOUR',
      },
      message: {
        en: 'Malindi artisan wood workshop, scenic island crossing, Robinson seafood lunch, and leisure.',
        it: 'Laboratorio artigiani del legno a Malindi, traversata per Robinson Island, pranzo di pesce e relax.',
      },
      editableFieldsHint: {
        en: 'Morning visit to wood factory, transfer to Robinson Island jetty, boat crossing, coastal lunch, and return.',
        it: 'Visita mattutina alla fabbrica del legno, transfer a Robinson Island, traversata in barca, pranzo e rientro.',
      },
    },
    coverImage: '/robinson_island.jpg',
    imageAlt: 'Robinson Island Kenyan coast authentic rustic seafood experience',
  },
  {
    id: 'crab-shack-canoe',
    slug: 'crab-shack-canoe',
    title: {
      en: 'CANOE TOUR AT CRAB SHACK DABASO',
      it: 'GIRO IN CANOA AL CRAB SHACK DABASO',
    },
    duration: {
      en: 'HALF DAY',
      it: 'MEZZA GIORNATA',
    },
    available: {
      en: 'PRIVATE & GROUP TOURS',
      it: 'TOUR PRIVATI E DI GRUPPO',
    },
    transport: {
      en: 'INCLUDED',
      it: 'INCLUSO',
    },
    lunch: {
      en: 'OPTIONAL CRAB & DRINKS',
      it: 'GRANCHIO E DEGUSTAZIONE OPZIONALI',
    },
    tagline: {
      en: 'Gliding along Mida Creek in a traditional dugout canoe',
      it: 'Scivolando tra le acque di Mida Creek su una tradizionale canoa',
    },
    description: {
      en: 'Explore the serene waterways of Mida Creek and Dabaso on a peaceful traditional canoe ride, guided by local boatmen through quiet mangrove channels to the iconic Crab Shack boardwalk.',
      it: "Esplora i canali tranquilli di Mida Creek e Dabaso con un suggestivo giro in canoa tradizionale, guidato dai barcaioli locali attraverso le mangrovie fino alla passerella sospesa del Crab Shack.",
    },
    foodSection: {
      title: {
        en: 'CRAB SHACK SPECIALITIES',
        it: 'SPECIALITÀ DEL CRAB SHACK',
      },
      description: {
        en: 'Fresh samosas, mangrove crab dishes, and refreshing drinks served on the rustic stilt platform over the creek.',
        it: 'Samosa fresche, specialità di granchio delle mangrovie e bevande servite sulla suggestiva palafitta.',
      },
      note: {
        en: 'Managed by the local community conservation project in Dabaso.',
        it: 'Gestito dal progetto comunitario di conservazione di Dabaso.',
      },
    },
    placeholderSection: {
      title: {
        en: 'CANOE & CRAB SHACK EXPERIENCE',
        it: 'ESPERIENZA CANOA & CRAB SHACK',
      },
      message: {
        en: 'Traditional wooden canoe gliding through Mida Creek channels.',
        it: 'Canoa tradizionale in legno attraverso i canali di Mida Creek.',
      },
      editableFieldsHint: {
        en: 'Pick up from hotel, wooden canoe excursion through the mangroves, visit to Crab Shack boardwalk, bird watching.',
        it: 'Pick up dall’alloggio, giro in canoa tra le mangrovie, visita alle passerelle del Crab Shack, birdwatching.',
      },
    },
    coverImage: '/mida_creek_canoe.jpg',
    imageAlt: 'Traditional wooden canoe gliding through calm mangrove creek in Watamu Kenya',
  },
  {
    id: 'sunset-mangrovia-aperitivo',
    slug: 'sunset-mangrovia-aperitivo',
    title: {
      en: 'SUNSET APERITIVO AMONG THE MANGROVES',
      it: 'APERITIVO AL TRAMONTO TRA LE MANGROVIE',
    },
    duration: {
      en: 'EVENING (3–4 HOURS)',
      it: 'SERALE (3–4 ORE)',
    },
    available: {
      en: 'PRIVATE & GROUP TOURS',
      it: 'TOUR PRIVATI E DI GRUPPO',
    },
    transport: {
      en: 'INCLUDED',
      it: 'INCLUSO',
    },
    lunch: {
      en: 'INCLUDED (SUNSET APERITIVO & APPETISERS)',
      it: 'INCLUSO (APERITIVO AL TRAMONTO & STUZZICHINI)',
    },
    tagline: {
      en: 'A magical golden sunset over Mida Creek with cocktails and snacks',
      it: 'Un magico tramonto dorato su Mida Creek con aperitivo e stuzzichini',
    },
    description: {
      en: 'Unwind at golden hour surrounded by the tranquil beauty of the mangrove forest. Sip refreshing drinks, enjoy authentic coastal appetisers, and watch the sun dip below the horizon over the calm waters of Mida Creek.',
      it: "Rilassati all'ora d'oro circondato dalla pacifica bellezza della foresta di mangrovie. Sorseggia drink rinfrescanti, gusta deliziosi stuzzichini locali e ammira il sole tramontare sull'orizzonte delle acque calme di Mida Creek.",
    },
    foodSection: {
      title: {
        en: 'SUNSET APERITIVO & COCKTAILS',
        it: 'APERITIVO AL TRAMONTO & COCKTAIL',
      },
      description: {
        en: 'Tropical fruit drinks, local wines, Dawa cocktails, seafood bites, and freshly fried samosas.',
        it: 'Bevande alla frutta tropicale, cocktail Dawa, stuzzichini di pesce e samosa appena fritte.',
      },
      note: {
        en: 'The ultimate romantic and relaxing coastal evening in Watamu.',
        it: 'La serata più romantica e rilassante della costa di Watamu.',
      },
    },
    placeholderSection: {
      title: {
        en: 'APERITIVO PROGRAMME',
        it: 'PROGRAMMA APERITIVO',
      },
      message: {
        en: 'Sunset boat transfer or boardwalk arrival, drinks service, golden hour photos, and evening return.',
        it: 'Arrivo in barca o passerella, servizio aperitivo, foto al tramonto e rientro serale.',
      },
      editableFieldsHint: {
        en: 'Late afternoon departure, welcome cocktail at the mangrove deck, sunset viewing, return to accommodation.',
        it: 'Partenza tardo pomeriggio, drink di benvenuto sulla pedana tra le mangrovie, tramonto e rientro.',
      },
    },
    coverImage: '/mangrove_sunset_drinks.jpg',
    imageAlt: 'Golden sunset over Kenyan mangroves with tropical drinks at Crab Shack Mida Creek',
  },
  {
    id: 'kenya-national-parks-safari',
    slug: 'kenya-national-parks-safari',
    title: {
      en: 'BIG GAME SAFARI: TSAVO, AMBOSELI, TAITA & MASAI MARA',
      it: 'SAFARI PARCHI DEL KENYA: TSAVO EST, TSAVO WEST, AMBOSELI, TAITA & MASAI MARA',
    },
    duration: {
      en: '2–7 DAYS',
      it: '2–7 GIORNI',
    },
    available: {
      en: 'PRIVATE & GROUP SAFARIS',
      it: 'SAFARI PRIVATI E DI GRUPPO',
    },
    transport: {
      en: '4X4 SAFARI JEEP INCLUDED',
      it: 'JEEP 4X4 DA SAFARI INCLUSA',
    },
    lunch: {
      en: 'FULL BOARD AT SELECTED SAFARI LODGES',
      it: 'PENSIONE COMPLETA NEI LODGE',
    },
    tagline: {
      en: 'Tsavo East, Tsavo West, Amboseli, Taita Hills & Masai Mara',
      it: 'Tsavo Est, Tsavo West, Amboseli, Taita Hills & Masai Mara',
    },
    description: {
      en: 'Embark on the ultimate African safari journey across Kenya’s most renowned national reserves: the red elephants of Tsavo East, the lush landscapes and Mzima Springs of Tsavo West, the majestic views of Mount Kilimanjaro in Amboseli, the sanctuary stilt lodges of Taita Hills, and the legendary Big Five and Great Migration of Masai Mara.',
      it: "Parti per il grande safari africano attraverso i parchi nazionali più celebri del Kenya: gli elefanti rossi di Tsavo Est, le sorgenti e i paesaggi verdi di Tsavo West, la maestosa vista del Kilimangiaro ad Amboseli, i lodge su palafitte del Taita Hills e i leggendari Big Five e la Grande Migrazione del Masai Mara.",
    },
    foodSection: {
      title: {
        en: 'FULL BOARD SAFARI DINING',
        it: 'RISTORAZIONE COMPLETA IN SAFARI',
      },
      description: {
        en: 'Hearty safari breakfasts, bush luncheons, and gourmet buffet dinners inside luxury tented camps and lodges.',
        it: 'Colazioni abbondanti, pranzi nella savana e cene a buffet nei campi tendati e lodge selezionati.',
      },
      note: {
        en: 'Customise your itinerary across single or multiple national parks.',
        it: 'Personalizza il tuo itinerario scegliendo uno o più parchi nazionali.',
      },
    },
    placeholderSection: {
      title: {
        en: 'PARK ITINERARIES & LODGES',
        it: 'ITINERARI DEI PARCHI & LODGE',
      },
      message: {
        en: 'Choose your parks: Tsavo East (1-2 days), Tsavo West + Taita Hills (2-3 days), Amboseli with Kilimanjaro view, or Masai Mara flying/road safari.',
        it: 'Scegli i tuoi parchi: Tsavo Est (1-2 giorni), Tsavo West + Taita Hills (2-3 giorni), Amboseli con vista Kilimangiaro, oppure Masai Mara.',
      },
      editableFieldsHint: {
        en: '4x4 Land Cruiser with pop-up roof, experienced safari driver-guide, park entrance fees, lodge accommodation, and game drives.',
        it: 'Jeep 4x4 con tetto panoramico, autista-guida certificata, ingressi ai parchi, pernottamento nei lodge e game drive.',
      },
    },
    coverImage: '/kenya_lion.jpg',
    imageAlt: 'Authentic wild male Kenyan Tsavo lion close-up resting in the savannah',
  },
];
