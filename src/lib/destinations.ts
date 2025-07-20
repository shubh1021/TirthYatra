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

export const destinations: Destination[] = [
  {
    id: '1',
    slug: 'ayodhya',
    name: 'Ayodhya',
    description: 'The sacred birthplace of Lord Rama, a city of ancient temples and ghats.',
    image: 'https://images.unsplash.com/photo-1707731920783-0eabc5457c69?q=80&w=800&h=1000&fit=crop',
    imageHint: 'Ayodhya temple',
    slideshowImages: [
      { url: 'https://images.unsplash.com/photo-1677336943521-235e0767a210?q=80&w=1200&h=800&fit=crop', hint: 'Sarayu river' },
      { url: 'https://images.unsplash.com/photo-1707731920783-0eabc5457c69?q=80&w=1200&h=800&fit=crop', hint: 'temple architecture' },
      { url: 'https://images.unsplash.com/photo-1677336943521-235e0767a210?q=80&w=1200&h=800&fit=crop', hint: 'Ayodhya temple night' },
    ],
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
      { id: '2', name: 'Kashi', image: 'https://images.unsplash.com/photo-1528450393792-28a17688c805?q=80&w=400&h=300&fit=crop', imageHint: 'Kashi ghats' },
      { id: '3', name: 'Mathura', image: 'https://images.unsplash.com/photo-1590321430444-0de472a15748?q=80&w=400&h=300&fit=crop', imageHint: 'Mathura temple' },
    ],
  },
  {
    id: '2',
    slug: 'kashi',
    name: 'Kashi',
    description: 'Varanasi, the spiritual capital of India, a city of ghats, temples, and moksha.',
    image: 'https://images.unsplash.com/photo-1528450393792-28a17688c805?q=80&w=800&h=1000&fit=crop',
    imageHint: 'Varanasi ghats',
    slideshowImages: [
        { url: 'https://images.unsplash.com/photo-1603803233814-4e94116c1410?q=80&w=1200&h=800&fit=crop', hint: 'Ganges aarti' },
        { url: 'https://images.unsplash.com/photo-1544718228-55ce1e3f7c46?q=80&w=1200&h=800&fit=crop', hint: 'Varanasi boats' },
        { url: 'https://images.unsplash.com/photo-1561361513-259c87383a8f?q=80&w=1200&h=800&fit=crop', hint: 'Kashi Vishwanath' },
    ],
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
      { id: '1', name: 'Ayodhya', image: 'https://images.unsplash.com/photo-1707731920783-0eabc5457c69?q=80&w=400&h=300&fit=crop', imageHint: 'Ayodhya temple' },
      { id: '4', name: 'Dwarka', image: 'https://images.unsplash.com/photo-1691244309849-d7543a758509?q=80&w=400&h=300&fit=crop', imageHint: 'Dwarka coast' },
    ],
  },
  {
    id: '3',
    slug: 'mathura',
    name: 'Mathura',
    description: 'The vibrant birthplace of Lord Krishna, resonating with tales of his divine life.',
    image: 'https://images.unsplash.com/photo-1590321430444-0de472a15748?q=80&w=800&h=1000&fit=crop',
    imageHint: 'Mathura celebration',
    slideshowImages: [
        { url: 'https://images.unsplash.com/photo-1610486161491-5c742514125b?q=80&w=1200&h=800&fit=crop', hint: 'Krishna Janmabhoomi' },
        { url: 'https://images.unsplash.com/photo-1581489148342-991f7d549f6f?q=80&w=1200&h=800&fit=crop', hint: 'Holi festival' },
        { url: 'https://images.unsplash.com/photo-1620138547372-031f7abd577b?q=80&w=1200&h=800&fit=crop', hint: 'Vrindavan temples' },
    ],
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
      { id: '5', name: 'Rameswaram', image: 'https://images.unsplash.com/photo-1628181679930-b4d458703348?q=80&w=400&h=300&fit=crop', imageHint: 'Rameswaram bridge' },
      { id: '1', name: 'Ayodhya', image: 'https://images.unsplash.com/photo-1707731920783-0eabc5457c69?q=80&w=400&h=300&fit=crop', imageHint: 'Ayodhya temple' },
    ],
  },
  {
    id: '4',
    slug: 'dwarka',
    name: 'Dwarka',
    description: 'The legendary kingdom of Lord Krishna, one of the four sacred Char Dham sites.',
    image: 'https://images.unsplash.com/photo-1691244309849-d7543a758509?q=80&w=800&h=1000&fit=crop',
    imageHint: 'Dwarka temple',
    slideshowImages: [
        { url: 'https://images.unsplash.com/photo-1691244309849-d7543a758509?q=80&w=1200&h=800&fit=crop', hint: 'Dwarkadhish temple' },
        { url: 'https://images.unsplash.com/photo-1587799194582-7c749479b69b?q=80&w=1200&h=800&fit=crop', hint: 'Gomti Ghat' },
        { url: 'https://images.unsplash.com/photo-1621682375895-350742594a97?q=80&w=1200&h=800&fit=crop', hint: 'Bet Dwarka' },
    ],
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
      { id: '2', name: 'Kashi', image: 'https://images.unsplash.com/photo-1528450393792-28a17688c805?q=80&w=400&h=300&fit=crop', imageHint: 'Kashi ghats' },
      { id: '5', name: 'Rameswaram', image: 'https://images.unsplash.com/photo-1605839958999-e688784d0383?q=80&w=400&h=300&fit=crop', imageHint: 'Rameswaram temple' },
    ],
  },
  {
    id: '5',
    slug: 'rameswaram',
    name: 'Rameswaram',
    description: 'A holy island town known for its magnificent Ramanathaswamy Temple.',
    image: 'https://images.unsplash.com/photo-1605839958999-e688784d0383?q=80&w=800&h=1000&fit=crop',
    imageHint: 'Rameswaram corridor',
    slideshowImages: [
        { url: 'https://images.unsplash.com/photo-1628181679930-b4d458703348?q=80&w=1200&h=800&fit=crop', hint: 'Ramanathaswamy Temple' },
        { url: 'https://images.unsplash.com/photo-1588623229896-4806a6435c24?q=80&w=1200&h=800&fit=crop', hint: 'Pamban Bridge' },
        { url: 'https://images.unsplash.com/photo-1643103310323-e518c7c9197c?q=80&w=1200&h=800&fit=crop', hint: 'Dhanushkodi beach' },
    ],
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
      { id: '3', name: 'Mathura', image: 'https://images.unsplash.com/photo-1590321430444-0de472a15748?q=80&w=400&h=300&fit=crop', imageHint: 'Mathura holi' },
      { id: '4', name: 'Dwarka', image: 'https://images.unsplash.com/photo-1691244309849-d7543a758509?q=80&w=400&h=300&fit=crop', imageHint: 'Dwarka coast' },
    ],
  },
];

export const getDestinationBySlug = (slug: string) => {
  return destinations.find((d) => d.slug === slug);
};

export const getDestinationById = (id: string) => {
  return destinations.find((d) => d.id === id);
}
