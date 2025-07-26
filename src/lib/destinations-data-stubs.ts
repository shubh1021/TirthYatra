// This file is used as a data source for the image generation script.
// It is NOT used directly by the application components.

export const destinationsData = [
  { 
    id: '1', 
    slug: 'ayodhya', 
    name: 'Ayodhya', 
    image: "/images/destinations/ayodhya/ayodhya-temple.jpg",
    imageHint: 'Ayodhya Ram Mandir grand temple', 
    slideshowImages: [
      { url: "/images/destinations/ayodhya/ayodhya-grand-temple.jpg", hint: 'Ayodhya grand temple' },
      { url: "/images/destinations/ayodhya/ayodhya-sarayu-river.jpg", hint: 'Ayodhya sarayu river' },
      { url: "/images/destinations/ayodhya/ayodhya-intricate-carvings.jpg", hint: 'Ayodhya intricate carvings' },
    ],
  },
  { 
    id: '2', 
    slug: 'kashi', 
    name: 'Kashi (Varanasi)', 
    image: "/images/destinations/kashi/kashi-ghats.jpg",
    imageHint: 'Varanasi Ganga Aarti evening ceremony', 
    slideshowImages: [
      { url: "/images/destinations/kashi/varanasi-ganges-aarti.jpg", hint: 'Varanasi ganges aarti' },
      { url: "/images/destinations/kashi/varanasi-ancient-ghats.jpg", hint: 'Varanasi ancient ghats' },
      { url: "/images/destinations/kashi/varanasi-spiritual-ceremony.jpg", hint: 'Varanasi spiritual ceremony' },
    ],
  },
  { 
    id: '3', 
    slug: 'mathura-vrindavan', 
    name: 'Mathura & Vrindavan', 
    image: "/images/destinations/mathura-vrindavan/mathura-vrindavan-temple.jpg",
    imageHint: 'Prem Mandir Vrindavan white marble temple', 
    slideshowImages: [
        { url: "/images/destinations/mathura-vrindavan/mathura-krishna-temple.jpg", hint: 'Mathura krishna temple' },
        { url: "/images/destinations/mathura-vrindavan/vrindavan-holi-festival.jpg", hint: 'Vrindavan holi festival' },
        { url: "/images/destinations/mathura-vrindavan/prem-mandir-lights.jpg", hint: 'Prem Mandir lights' },
    ],
  },
  { 
    id: '4', 
    slug: 'dwarka', 
    name: 'Dwarka', 
    image: "/images/destinations/dwarka/dwarka-temple.jpg",
    imageHint: 'Dwarkadhish temple from sea', 
    slideshowImages: [
        { url: "/images/destinations/dwarka/dwarka-coastal-temple.jpg", hint: 'Dwarka coastal temple' },
        { url: "/images/destinations/dwarka/dwarkadhish-temple-architecture.jpg", hint: 'Dwarkadhish temple architecture' },
        { url: "/images/destinations/dwarka/dwarka-ocean-view.jpg", hint: 'Dwarka ocean view' },
    ],
  },
  { 
    id: '5', 
    slug: 'rameswaram', 
    name: 'Rameswaram', 
    image: "/images/destinations/rameswaram/rameswaram-temple.jpg",
    imageHint: 'Rameswaram temple grand corridor', 
    slideshowImages: [
        { url: "/images/destinations/rameswaram/rameswaram-temple-corridors.jpg", hint: 'Rameswaram temple corridors' },
        { url: "/images/destinations/rameswaram/pamban-bridge-sea.jpg", hint: 'Pamban bridge sea' },
        { url: "/images/destinations/rameswaram/rameswaram-sacred-tank.jpg", hint: 'Rameswaram sacred tank' },
    ],
  },
  { 
    id: '6', 
    slug: 'haridwar-rishikesh', 
    name: 'Haridwar & Rishikesh', 
    image: "/images/destinations/haridwar-rishikesh/haridwar-rishikesh.jpg",
    imageHint: 'Haridwar Ganga Aarti fire ceremony', 
    slideshowImages: [
        { url: "/images/destinations/haridwar-rishikesh/haridwar-ganga-aarti.jpg", hint: 'Haridwar ganga aarti' },
        { url: "/images/destinations/haridwar-rishikesh/rishikesh-laxman-jhula.jpg", hint: 'Rishikesh laxman jhula' },
        { url: "/images/destinations/haridwar-rishikesh/rishikesh-yoga-meditation.jpg", hint: 'Rishikesh yoga meditation' },
    ],
  },
  { 
    id: '7', 
    slug: 'puri', 
    name: 'Puri', 
    image: "/images/destinations/puri/puri-temple.jpg",
    imageHint: 'Puri Rath Yatra grand chariot festival', 
    slideshowImages: [
        { url: "/images/destinations/puri/puri-jagannath-temple.jpg", hint: 'Puri jagannath temple' },
        { url: "/images/destinations/puri/puri-rath-yatra.jpg", hint: 'Puri rath yatra' },
        { url: "/images/destinations/puri/puri-beach-sunset.jpg", hint: 'Puri beach sunset' },
    ],
  },
  { 
    id: '8', 
    slug: 'tirupati', 
    name: 'Tirupati', 
    image: "/images/destinations/tirupati/tirupati-temple.jpg",
    imageHint: 'Tirumala temple golden gopuram', 
    slideshowImages: [
        { url: "/images/destinations/tirupati/tirupati-venkateswara-temple.jpg", hint: 'Tirupati venkateswara temple' },
        { url: "/images/destinations/tirupati/tirumala-hills-gopuram.jpg", hint: 'Tirumala hills gopuram' },
        { url: "/images/destinations/tirupati/tirupati-temple-complex.jpg", hint: 'Tirupati temple complex' },
    ],
  },
  { 
    id: '9', 
    slug: 'amritsar', 
    name: 'Amritsar', 
    image: "/images/destinations/amritsar/amritsar-golden-temple.jpg",
    imageHint: 'Golden Temple at night reflection in water', 
    slideshowImages: [
        { url: "/images/destinations/amritsar/amritsar-golden-temple.jpg", hint: 'Amritsar golden temple' },
        { url: "/images/destinations/amritsar/golden-temple-reflection.jpg", hint: 'Golden Temple reflection' },
        { url: "/images/destinations/amritsar/harmandir-sahib-night.jpg", hint: 'Harmandir Sahib night' },
    ],
  },
  { 
    id: '10', 
    slug: 'kedarnath', 
    name: 'Kedarnath', 
    image: "/images/destinations/kedarnath/kedarnath-temple.jpg",
    imageHint: 'Kedarnath temple in the himalayas', 
    slideshowImages: [
        { url: "/images/destinations/kedarnath/kedarnath-temple-himalayas.jpg", hint: 'Kedarnath temple himalayas' },
        { url: "/images/destinations/kedarnath/kedarnath-snowy-peaks.jpg", hint: 'Kedarnath snowy peaks' },
        { url: "/images/destinations/kedarnath/kedarnath-pilgrims-journey.jpg", hint: 'Kedarnath pilgrims journey' },
    ],
  },
];
