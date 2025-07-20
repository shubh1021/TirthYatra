
import { createApi } from 'unsplash-js';

// Initialize Unsplash API client
// This is the standard Next.js way to access server-side environment variables.
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

async function fetchImage(query: string, w: number, h: number): Promise<string> {
    const fallbackUrl = `https://placehold.co/${w}x${h}.png`;
    if (!process.env.UNSPLASH_ACCESS_KEY) {
        console.warn("Unsplash API key not found. Using fallback images.");
        return fallbackUrl;
    }
    try {
        const result = await unsplash.search.getPhotos({ query, perPage: 1, orientation: 'landscape' });
        if (result.response && result.response.results.length > 0) {
            const photo = result.response.results[0];
            // Using the regular URL for better quality and appending parameters
            return `${photo.urls.regular}&w=${w}&h=${h}&fit=crop`;
        }
        console.warn(`No Unsplash image found for query "${query}". Using fallback.`);
        return fallbackUrl;
    } catch (error: any) {
        // Log a more detailed error message
        console.error(`Unsplash API error for query "${query}":`, error.message || error);
        return fallbackUrl;
    }
}


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

const destinationsData = [
  { id: '1', slug: 'ayodhya', name: 'Ayodhya', description: 'The sacred birthplace of Lord Rama, a city of ancient temples and ghats on the Sarayu river.', imageHint: 'Ayodhya temple India', slideshowHints: ['Ayodhya sarayu river', 'Ayodhya ram mandir', 'Ayodhya ghats'], history: 'Ayodhya, one of the seven sacred cities of Hinduism, has a rich history dating back to ancient times. It was the capital of the Kosala Kingdom and is deeply intertwined with the epic Ramayana.', mythology: 'According to Hindu mythology, Ayodhya is the birthplace of Lord Rama, the seventh avatar of Vishnu. The city is central to the Ramayana, which narrates his life and journey.', etiquette: { dressCode: 'Modest attire is recommended. Cover shoulders and knees when visiting temples.', tips: ['Remove footwear before entering temples.', 'Respect local customs and traditions.', 'Photography may be restricted in some areas.'] }, events: [ { date: 'Apr 17, 2025', title: 'Ram Navami', info: 'Grand celebrations for Lord Rama\'s birthday.' }, { date: 'Nov 1, 2024', title: 'Deepotsav', info: 'A spectacular festival of lights.' } ], nearby: [ { id: '2', name: 'Kashi (Varanasi)', imageHint: 'Varanasi ghats India' }, { id: '3', name: 'Mathura & Vrindavan', imageHint: 'Mathura Vrindavan temple' }, { id: '6', name: 'Haridwar & Rishikesh', imageHint: 'Haridwar Ganges river' } ] },
  { id: '2', slug: 'kashi', name: 'Kashi (Varanasi)', description: 'The spiritual capital of India, a mystical city of ghats, ancient temples, and moksha.', imageHint: 'Varanasi ghats India', slideshowHints: ['Varanasi ganges boat', 'Varanasi street', 'Varanasi sadhu'], history: 'Kashi, also known as Varanasi, is one of the oldest living cities in the world. It has been a center of learning, philosophy, and spirituality for thousands of years.', mythology: 'It is believed that Kashi was founded by Lord Shiva. Hindus believe that dying in Kashi brings salvation (moksha), making it a major pilgrimage site.', etiquette: { dressCode: 'Conservative clothing is advised, especially around religious sites.', tips: ['Be mindful of the funeral ceremonies at the burning ghats.', 'Bargaining is common in markets.', 'A boat ride on the Ganges at dawn is a must-do.'] }, events: [ { date: 'Mar 7, 2025', title: 'Maha Shivaratri', info: 'A major festival dedicated to Lord Shiva.' }, { date: 'Nov 15, 2024', title: 'Dev Deepawali', info: 'The festival of lights of the gods.' } ], nearby: [ { id: '1', name: 'Ayodhya', imageHint: 'Ayodhya temple India' }, { id: '7', name: 'Puri', imageHint: 'Puri Jagannath temple' }, { id: '8', name: 'Tirupati', imageHint: 'Tirupati temple gopuram' } ] },
  { id: '3', slug: 'mathura-vrindavan', name: 'Mathura & Vrindavan', description: 'The vibrant twin holy towns, the birthplace and childhood home of Lord Krishna.', imageHint: 'Mathura Vrindavan temple', slideshowHints: ['Vrindavan holi festival', 'Mathura krishna temple', 'Vrindavan devotees'], history: 'Mathura is an ancient city with a history that spans millennia. It has been an important center for art, culture, and religion, particularly Vaishnavism.', mythology: 'Mathura is revered as the birthplace of Lord Krishna. The nearby town of Vrindavan is where he is said to have spent his childhood, filled with divine tales and leelas.', etiquette: { dressCode: 'Wear comfortable and modest clothes. Bright colors are common during festivals.', tips: ['Be cautious of monkeys in temple areas.', 'Try the local specialty, "Mathura peda".', 'Participate in the joyous Holi celebrations if visiting in spring.'] }, events: [ { date: 'Aug 26, 2024', title: 'Krishna Janmashtami', info: 'Elaborate festival celebrating Krishna\'s birth.' }, { date: 'Mar 14, 2025', title: 'Holi', info: 'The famous festival of colors is celebrated with great zeal.' } ], nearby: [ { id: '1', name: 'Ayodhya', imageHint: 'Ayodhya temple India' }, { id: '9', name: 'Amritsar', imageHint: 'Amritsar Golden Temple' }, { id: '10', name: 'Kedarnath', imageHint: 'Kedarnath temple Himalayas' } ] },
  { id: '4', slug: 'dwarka', name: 'Dwarka', description: 'The legendary golden kingdom of Lord Krishna, one of the four sacred Char Dham sites.', imageHint: 'Dwarka temple Gujarat', slideshowHints: ['Dwarkadhish temple', 'Dwarka beach', 'Gomti ghat Dwarka'], history: 'Ancient Dwarka was a prosperous city that is said to have been submerged by the sea. The modern city is a major pilgrimage hub for Vaishnavites.', mythology: 'Dwarka is identified with the Dwarka Kingdom, the ancient kingdom of Lord Krishna. He is said to have established this city after leaving Mathura.', etiquette: { dressCode: 'Respectful attire is expected in the temples and holy sites.', tips: ['Take a ferry to the island of Bet Dwarka.', 'Visit the Nageshwar Jyotirlinga Temple.', 'The sea can be rough, be cautious near the coast.'] }, events: [ { date: 'Aug 26, 2024', title: 'Janmashtami', info: 'Celebrations are held at the Dwarkadhish Temple.' } ], nearby: [ { id: '7', name: 'Puri', imageHint: 'Puri Jagannath temple' }, { id: '5', name: 'Rameswaram', imageHint: 'Rameswaram temple corridor' }, { id: '10', name: 'Kedarnath', imageHint: 'Kedarnath temple Himalayas' } ] },
  { id: '5', slug: 'rameswaram', name: 'Rameswaram', description: 'A holy island town known for its magnificent Ramanathaswamy Temple with its grand corridors.', imageHint: 'Rameswaram temple corridor', slideshowHints: ['Pamban bridge', 'Ramanathaswamy temple pillar', 'Dhanushkodi beach'], history: 'Rameswaram has been a pilgrimage center for centuries, with its temple being a fine example of Dravidian architecture.', mythology: 'Lord Rama is said to have built a bridge (Rama Setu) from here to Lanka to rescue his wife Sita. He also worshipped Lord Shiva here to atone for killing Ravana.', etiquette: { dressCode: 'Modest dress is required for temple entry. Men may need to be bare-chested.', tips: ['Take a holy dip in the Agni Theertham.', 'Walk through the famous temple corridors.', 'Visit the ghost town of Dhanushkodi.'] }, events: [ { date: 'Feb 26, 2025', title: 'Maha Shivaratri', info: 'A night of prayer and festivities for Lord Shiva.' } ], nearby: [ { id: '8', name: 'Tirupati', imageHint: 'Tirupati temple gopuram' }, { id: '9', name: 'Amritsar', imageHint: 'Amritsar Golden Temple' }, { id: '3', name: 'Mathura & Vrindavan', imageHint: 'Mathura Vrindavan temple' } ] },
  { id: '6', slug: 'haridwar-rishikesh', name: 'Haridwar & Rishikesh', description: 'Twin spiritual towns on the banks of the Ganges, the gateway to the Himalayas.', imageHint: 'Haridwar Ganges river', slideshowHints: ['Rishikesh yoga', 'Haridwar ganga aarti', 'Lakshman Jhula bridge'], history: 'Haridwar and Rishikesh are ancient pilgrimage sites. Haridwar is where the Ganges enters the plains, while Rishikesh is known as the "Yoga Capital of the World".', mythology: 'These towns are steeped in Hindu mythology, with numerous temples and ashrams dedicated to various deities. They are the starting point for the Char Dham Yatra of Uttarakhand.', etiquette: { dressCode: 'Modest, comfortable clothing suitable for walking and yoga.', tips: ['Attend the Ganga Aarti at Har Ki Pauri.', 'Explore the ashrams of Rishikesh.', 'Try white-water rafting for an adventurous twist.'] }, events: [ { date: 'April 14, 2025', title: 'Vaisakhi', info: 'Celebrates the solar new year with holy dips in the Ganges.' } ], nearby: [ { id: '1', name: 'Ayodhya', imageHint: 'Ayodhya temple India' }, { id: '2', name: 'Kashi (Varanasi)', imageHint: 'Varanasi ghats India' }, { id: '3', name: 'Mathura & Vrindavan', imageHint: 'Mathura Vrindavan temple' } ] },
  { id: '7', slug: 'puri', name: 'Puri', description: 'Home to the Jagannath Temple, famous for its annual Rath Yatra festival.', imageHint: 'Puri Jagannath temple', slideshowHints: ['Puri rath yatra', 'Puri beach', 'Konark sun temple'], history: 'Puri is one of the Char Dham pilgrimage sites. The Jagannath Temple is an architectural marvel and has been a focal point of Hinduism for centuries.', mythology: 'The temple is dedicated to Lord Jagannath (a form of Krishna), his brother Balabhadra, and sister Subhadra.', etiquette: { dressCode: 'Strict dress code for the temple; non-Hindus are not permitted inside the main sanctum.', tips: ['Witness the grand Rath Yatra if visiting in summer.', 'Relax on the golden sands of Puri Beach.', 'Take a day trip to the Konark Sun Temple.'] }, events: [ { date: 'July 7, 2024', title: 'Rath Yatra', info: 'The spectacular chariot festival.' } ], nearby: [ { id: '2', name: 'Kashi (Varanasi)', imageHint: 'Varanasi ghats India' }, { id: '8', name: 'Tirupati', imageHint: 'Tirupati temple gopuram' }, { id: '5', name: 'Rameswaram', imageHint: 'Rameswaram temple corridor' } ] },
  { id: '8', slug: 'tirupati', name: 'Tirupati', description: 'The abode of Lord Venkateswara, one of the most visited and wealthiest pilgrimage centers.', imageHint: 'Tirupati temple gopuram', slideshowHints: ['Tirumala temple', 'Tirupati landscape', 'Venkateswara deity'], history: 'The temple\'s origins are ancient, with contributions from various dynasties over centuries. It is a masterpiece of Dravidian architecture.', mythology: 'Lord Venkateswara, a form of Vishnu, is believed to have manifested here to save mankind from the trials of the Kali Yuga.', etiquette: { dressCode: 'Traditional Indian attire is mandatory (Dhoti for men, Saree/Chudidar for women).', tips: ['Book your darshan (viewing) slot online well in advance.', 'Be prepared for large crowds and long queues.', 'Do not carry leather items or electronic gadgets inside the temple.'] }, events: [ { date: 'Sept-Oct 2024', title: 'Brahmotsavam', info: 'A nine-day grand festival celebrated with processions.' } ], nearby: [ { id: '5', name: 'Rameswaram', imageHint: 'Rameswaram temple corridor' }, { id: '9', name: 'Amritsar', imageHint: 'Amritsar Golden Temple' }, { id: '4', name: 'Dwarka', imageHint: 'Dwarka temple Gujarat' } ] },
  { id: '9', slug: 'amritsar', name: 'Amritsar', description: 'The spiritual center for Sikhs, home to the magnificent Golden Temple.', imageHint: 'Amritsar Golden Temple', slideshowHints: ['Golden Temple reflection', 'Wagah border ceremony', 'Langar community kitchen'], history: 'Founded in the 16th century, Amritsar is a city of immense historical and religious importance for Sikhism.', mythology: 'The Golden Temple, or Harmandir Sahib, is the holiest gurdwara of Sikhism, symbolizing equality and brotherhood.', etiquette: { dressCode: 'Head must be covered for all genders inside the temple complex. Scarves are provided.', tips: ['Partake in the langar (free community meal).', 'Visit the Jallianwala Bagh memorial.', 'Witness the Wagah Border ceremony in the evening.'] }, events: [ { date: 'April 14, 2025', title: 'Vaisakhi', info: 'Celebrated with great fervor as the founding day of the Khalsa.' } ], nearby: [ { id: '6', name: 'Haridwar & Rishikesh', imageHint: 'Haridwar Ganges river' }, { id: '10', name: 'Kedarnath', imageHint: 'Kedarnath temple Himalayas' }, { id: '1', name: 'Ayodhya', imageHint: 'Ayodhya temple India' } ] },
  { id: '10', slug: 'kedarnath', name: 'Kedarnath', description: 'A majestic Himalayan temple dedicated to Lord Shiva, part of the Char Dham Yatra.', imageHint: 'Kedarnath temple Himalayas', slideshowHints: ['Kedarnath valley', 'Himalayan mountains', 'Shiva temple snow'], history: 'An ancient temple that has stood for over a thousand years amidst the challenging Himalayan terrain, rebuilt after the 2013 floods.', mythology: 'Believed to have been built by the Pandavas to atone for their sins after the Mahabharata war. It is one of the 12 Jyotirlingas.', etiquette: { dressCode: 'Warm layered clothing is essential due to the high altitude and cold weather.', tips: ['Acclimatize properly to avoid altitude sickness.', 'The temple is only open for about six months a year (typically Apr-Nov).', 'The journey involves a significant trek; pony and helicopter services are available.'] }, events: [ { date: 'May 10, 2025 (Tentative)', title: 'Temple Opening', info: 'The ceremonial opening of the temple doors after winter.' } ], nearby: [ { id: '6', name: 'Haridwar & Rishikesh', imageHint: 'Haridwar Ganges river' }, { id: '2', name: 'Kashi (Varanasi)', imageHint: 'Varanasi ghats India' }, { id: '1', name: 'Ayodhya', imageHint: 'Ayodhya temple India' } ] },
];

async function processDestination(destination: any, imageW: number, imageH: number): Promise<any> {
    const image = await fetchImage(destination.imageHint, imageW, imageH);
    
    const slideshowImages = await Promise.all(
        destination.slideshowHints.map((hint: string) => 
            fetchImage(hint, 1280, 720).then(url => ({ url, hint }))
        )
    );

    const nearby = await Promise.all(
        destination.nearby.map(async (place: any) => {
            const nearbyImage = await fetchImage(place.imageHint, 600, 400);
            return { ...place, image: nearbyImage };
        })
    );

    return {
        ...destination,
        image,
        slideshowImages,
        nearby,
    };
}


export async function getAllDestinations(): Promise<Destination[]> {
    const processedDestinations = await Promise.all(
        destinationsData.map(dest => processDestination(dest, 800, 600))
    );
    return processedDestinations;
}

export async function getDestinationBySlug(slug: string): Promise<Destination | undefined> {
    const destination = destinationsData.find((d) => d.slug === slug);
    if (!destination) return undefined;

    return processDestination(destination, 1280, 720);
}

export function getDestinationById(id: string) {
    const destination = destinationsData.find((d) => d.id === id);
    if (!destination) return undefined;

    return {
        id: destination.id,
        slug: destination.slug,
        name: destination.name,
        image: '', 
        imageHint: destination.imageHint,
    };
}
