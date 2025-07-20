import { getImages } from '@/services/unsplash';

export interface Destination {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  imageHint: string;
  slideshowImages: { url: string; hint: string }[];
  history: string;
  mythology: string;
  etiquette: {
    dressCode: string;
    tips: string[];
  };
  events: {
    date: string;
    title: string;
    info: string;
  }[];
  nearby: {
    id: string;
    name: string;
    image: string;
    imageHint: string;
  }[];
}

// Base data without image URLs
const destinationData = [
  {
    id: '1',
    slug: 'ayodhya',
    name: 'Ayodhya',
    description: 'The sacred birthplace of Lord Rama, a city of ancient temples and ghats.',
    imageHint: 'Ayodhya temple',
    slideshowHints: ['Sarayu river', 'temple architecture', 'Ayodhya temple night'],
    history: 'Ayodhya, one of the seven sacred cities of Hinduism, has a rich history dating back to ancient times. It was the capital of the Kosala Kingdom and is deeply intertwined with the epic Ramayana.',
    mythology: 'According to Hindu mythology, Ayodhya is the birthplace of Lord Rama, the seventh avatar of Vishnu. The city is central to the Ramayana, which narrates his life and journey.',
    etiquette: {
      dressCode: 'Modest attire is recommended. Cover shoulders and knees when visiting temples.',
      tips: ['Remove footwear before entering temples.', 'Respect local customs and traditions.', 'Photography may be restricted in some areas.'],
    },
    events: [
      { date: 'Apr 17, 2025', title: 'Ram Navami', info: 'Grand celebrations for Lord Rama\'s birthday.' },
      { date: 'Nov 1, 2024', title: 'Deepotsav', info: 'A spectacular festival of lights.' },
    ],
    nearby: [
      { id: '2', name: 'Kashi', imageHint: 'Kashi ghats' },
      { id: '3', name: 'Mathura', imageHint: 'Mathura temple' },
    ],
  },
  {
    id: '2',
    slug: 'kashi',
    name: 'Kashi',
    description: 'Varanasi, the spiritual capital of India, a city of ghats, temples, and moksha.',
    imageHint: 'Varanasi ghats',
    slideshowHints: ['Ganges aarti', 'Varanasi boats', 'Kashi Vishwanath'],
    history: 'Kashi, also known as Varanasi, is one of the oldest living cities in the world. It has been a center of learning, philosophy, and spirituality for thousands of years.',
    mythology: 'It is believed that Kashi was founded by Lord Shiva. Hindus believe that dying in Kashi brings salvation (moksha), making it a major pilgrimage site.',
    etiquette: {
      dressCode: 'Conservative clothing is advised, especially around religious sites.',
      tips: ['Be mindful of the funeral ceremonies at the burning ghats.', 'Bargaining is common in markets.', 'A boat ride on the Ganges at dawn is a must-do.'],
    },
    events: [
      { date: 'Mar 7, 2025', title: 'Maha Shivaratri', info: 'A major festival dedicated to Lord Shiva.' },
      { date: 'Nov 15, 2024', title: 'Dev Deepawali', info: 'The festival of lights of the gods.' },
    ],
    nearby: [
      { id: '1', name: 'Ayodhya', imageHint: 'Ayodhya temple' },
      { id: '4', name: 'Dwarka', imageHint: 'Dwarka coast' },
    ],
  },
  {
    id: '3',
    slug: 'mathura',
    name: 'Mathura',
    description: 'The vibrant birthplace of Lord Krishna, resonating with tales of his divine life.',
    imageHint: 'Mathura celebration',
    slideshowHints: ['Krishna Janmabhoomi', 'Holi festival', 'Vrindavan temples'],
    history: 'Mathura is an ancient city with a history that spans millennia. It has been an important center for art, culture, and religion, particularly Vaishnavism.',
    mythology: 'Mathura is revered as the birthplace of Lord Krishna, a major deity in Hinduism. The nearby town of Vrindavan is where he is said to have spent his childhood.',
    etiquette: {
      dressCode: 'Wear comfortable and modest clothes. Bright colors are common during festivals.',
      tips: ['Be cautious of monkeys in temple areas.', 'Try the local specialty, "Mathura peda".', 'Participate in the joyous Holi celebrations if visiting in spring.'],
    },
    events: [
      { date: 'Aug 26, 2024', title: 'Janmashtami', info: 'Elaborate festival celebrating Krishna\'s birth.' },
      { date: 'Mar 25, 2025', title: 'Holi', info: 'The famous festival of colors is celebrated with great zeal.' },
    ],
    nearby: [
      { id: '5', name: 'Rameswaram', imageHint: 'Rameswaram bridge' },
      { id: '1', name: 'Ayodhya', imageHint: 'Ayodhya temple' },
    ],
  },
  {
    id: '4',
    slug: 'dwarka',
    name: 'Dwarka',
    description: 'The legendary kingdom of Lord Krishna, one of the four sacred Char Dham sites.',
    imageHint: 'Dwarka temple',
    slideshowHints: ['Dwarkadhish temple', 'Gomti Ghat', 'Bet Dwarka'],
    history: 'Ancient Dwarka was a prosperous city that is said to have been submerged by the sea. The modern city is a major pilgrimage hub.',
    mythology: 'Dwarka is identified with the Dwarka Kingdom, the ancient kingdom of Lord Krishna. He is said to have established this city after leaving Mathura.',
    etiquette: {
      dressCode: 'Respectful attire is expected in the temples and holy sites.',
      tips: ['Take a ferry to the island of Bet Dwarka.', 'Visit the Nageshwar Jyotirlinga Temple.', 'The sea can be rough, be cautious near the coast.'],
    },
    events: [
      { date: 'Aug 26, 2024', title: 'Janmashtami', info: 'Celebrations are held at the Dwarkadhish Temple.' },
    ],
    nearby: [
      { id: '2', name: 'Kashi', imageHint: 'Kashi ghats' },
      { id: '5', name: 'Rameswaram', imageHint: 'Rameswaram temple' },
    ],
  },
  {
    id: '5',
    slug: 'rameswaram',
    name: 'Rameswaram',
    description: 'A holy island town known for its magnificent Ramanathaswamy Temple.',
    imageHint: 'Rameswaram corridor',
    slideshowHints: ['Ramanathaswamy Temple', 'Pamban Bridge', 'Dhanushkodi beach'],
    history: 'Rameswaram has been a pilgrimage center for centuries, with its temple being a fine example of Dravidian architecture.',
    mythology: 'Lord Rama is said to have built a bridge (Rama Setu) from here to Lanka to rescue his wife Sita. He also worshipped Lord Shiva here to atone for killing Ravana.',
    etiquette: {
      dressCode: 'Modest dress is required for temple entry. Men may need to be bare-chested.',
      tips: ['Take a holy dip in the Agni Theertham.', 'Walk through the famous temple corridors.', 'Visit the ghost town of Dhanushkodi.'],
    },
    events: [
      { date: 'Mar 7, 2025', title: 'Maha Shivaratri', info: 'A night of prayer and festivities for Lord Shiva.' },
    ],
    nearby: [
      { id: '3', name: 'Mathura', imageHint: 'Mathura holi' },
      { id: '4', name: 'Dwarka', imageHint: 'Dwarka coast' },
    ],
  },
];

// In-memory cache to avoid re-fetching images on every request during development
const destinationCache = new Map<string, Destination>();
const nearbyImageCache = new Map<string, string>();


async function enrichDestination(destination: any): Promise<Destination> {
  if (destinationCache.has(destination.id)) {
    return destinationCache.get(destination.id)!;
  }

  const [mainImage, ...slideshowImagesArr] = await Promise.all([
    getImages(destination.imageHint, 1, 'portrait'),
    ...destination.slideshowHints.map(hint => getImages(hint, 1, 'landscape'))
  ]);

  const slideshowImages = slideshowImagesArr.flat().map((img, i) => ({
      url: img.urls.regular,
      hint: destination.slideshowHints[i],
  }));

  const nearbyWithImages = await Promise.all(
    destination.nearby.map(async (place) => {
      if (nearbyImageCache.has(place.id)) {
          return { ...place, image: nearbyImageCache.get(place.id)! };
      }
      const [nearbyImage] = await getImages(place.imageHint, 1, 'squarish');
      const imageUrl = nearbyImage?.urls?.small || 'https://placehold.co/400x300.png';
      nearbyImageCache.set(place.id, imageUrl);
      return {
        ...place,
        image: imageUrl,
      };
    })
  );

  const enriched = {
    ...destination,
    image: mainImage[0]?.urls?.regular || 'https://placehold.co/800x1000.png',
    slideshowImages,
    nearby: nearbyWithImages,
  };

  destinationCache.set(destination.id, enriched);
  return enriched;
}

export async function getAllDestinations(): Promise<Destination[]> {
    const enrichedDestinations = await Promise.all(destinationData.map(enrichDestination));
    return enrichedDestinations;
}

export async function getDestinationBySlug(slug: string): Promise<Destination | undefined> {
  const destination = destinationData.find((d) => d.slug === slug);
  if (!destination) return undefined;
  return enrichDestination(destination);
}

export function getDestinationById(id: string) {
    const destination = destinationData.find((d) => d.id === id);
    if (!destination) return undefined;

    const imageUrl = nearbyImageCache.get(id) || 'https://placehold.co/400x300.png';

    return {
        ...destination,
        image: imageUrl,
    };
}
