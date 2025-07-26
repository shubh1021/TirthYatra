

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
    name:string;
    image: string;
    imageHint: string;
  }[];
}

const destinationsData: Destination[] = [
  { 
    id: '1', 
    slug: 'ayodhya', 
    name: 'Ayodhya', 
    description: 'The sacred birthplace of Lord Rama, a city of ancient temples and ghats on the Sarayu river.', 
    image: '/api/image?query=Ayodhya%20India',
    imageHint: 'Ayodhya temple', 
    slideshowImages: [
      { url: '/api/image?query=Sarayu%20river', hint: 'Sarayu river' },
      { url: '/api/image?query=Ram%20Mandir%20Ayodhya', hint: 'ram mandir' },
      { url: '/api/image?query=Indian%20ghats', hint: 'holy ghats' },
      { url: '/api/image?query=devotees%20praying', hint: 'devotees praying' },
      { url: '/api/image?query=Hanuman%20Garhi%20temple', hint: 'hanuman temple' }
    ], 
    history: 'Ayodhya, one of the seven sacred cities of Hinduism, has a rich history dating back to ancient times. It was the capital of the Kosala Kingdom and is deeply intertwined with the epic Ramayana.', 
    mythology: 'According to Hindu mythology, Ayodhya is the birthplace of Lord Rama, the seventh avatar of Vishnu. The city is central to the Ramayana, which narrates his life and journey.', 
    etiquette: { dressCode: 'Modest attire is recommended. Cover shoulders and knees when visiting temples.', tips: ['Remove footwear before entering temples.', 'Respect local customs and traditions.', 'Photography may be restricted in some areas.'] }, 
    events: [ { date: 'Apr 17, 2025', title: 'Ram Navami', info: 'Grand celebrations for Lord Rama\'s birthday.' }, { date: 'Nov 1, 2024', title: 'Deepotsav', info: 'A spectacular festival of lights.' } ], 
    nearby: [ 
      { id: '2', name: 'Kashi (Varanasi)', image: '/api/image?query=Varanasi', imageHint: 'Varanasi ghats' }, 
      { id: '3', name: 'Mathura & Vrindavan', image: '/api/image?query=Mathura', imageHint: 'Mathura temple' }, 
      { id: '6', name: 'Haridwar & Rishikesh', image: '/api/image?query=Haridwar', imageHint: 'Haridwar river' } 
    ] 
  },
  { 
    id: '2', 
    slug: 'kashi', 
    name: 'Kashi (Varanasi)', 
    description: 'The spiritual capital of India, a mystical city of ghats, ancient temples, and moksha.', 
    image: '/api/image?query=Varanasi%20Ganges',
    imageHint: 'Varanasi Ganges', 
    slideshowImages: [
      { url: '/api/image?query=Varanasi%20Ganges%20aarti', hint: 'Varanasi aarti' },
      { url: '/api/image?query=sadhu%20meditating%20Ganges', hint: 'sadhu meditating' },
      { url: '/api/image?query=Varanasi%20old%20city%20India', hint: 'Varanasi city' },
      { url: '/api/image?query=boats%20on%20ganges', hint: 'boats ganges' },
      { url: '/api/image?query=Kashi%20Vishwanath%20temple', hint: 'Kashi temple' }
    ], 
    history: 'Kashi, also known as Varanasi, is one of the oldest living cities in the world. It has been a center of learning, philosophy, and spirituality for thousands of years.', 
    mythology: 'It is believed that Kashi was founded by Lord Shiva. Hindus believe that dying in Kashi brings salvation (moksha), making it a major pilgrimage site.', 
    etiquette: { dressCode: 'Conservative clothing is advised, especially around religious sites.', tips: ['Be mindful of the funeral ceremonies at the burning ghats.', 'Bargaining is common in markets.', 'A boat ride on the Ganges at dawn is a must-do.'] }, 
    events: [ { date: 'Mar 7, 2025', title: 'Maha Shivaratri', info: 'A major festival dedicated to Lord Shiva.' }, { date: 'Nov 15, 2024', title: 'Dev Deepawali', info: 'The festival of lights of the gods.' } ], 
    nearby: [ 
      { id: '1', name: 'Ayodhya', image: '/api/image?query=Ayodhya', imageHint: 'Ayodhya Ram Mandir' }, 
      { id: '7', name: 'Puri', image: '/api/image?query=Puri%20India', imageHint: 'Puri Jagannath temple' }, 
      { id: '8', name: 'Tirupati', image: '/api/image?query=Tirupati%20India', imageHint: 'Tirupati Hindu temple' } 
    ] 
  },
  { 
    id: '3', 
    slug: 'mathura-vrindavan', 
    name: 'Mathura & Vrindavan', 
    description: 'The vibrant twin holy towns, the birthplace and childhood home of Lord Krishna.', 
    image: '/api/image?query=Mathura%20India',
    imageHint: 'Mathura Krishna temple', 
    slideshowImages: [
      { url: '/api/image?query=Holi%20festival%20Vrindavan', hint: 'Holi festival' },
      { url: '/api/image?query=Krishna%20deity%20India', hint: 'Krishna idol' },
      { url: '/api/image?query=ISKCON%20temple%20India', hint: 'ISKCON temple' },
      { url: '/api/image?query=Banke%20Bihari%20Temple', hint: 'Banke Bihari Temple' },
      { url: '/api/image?query=Prem%20Mandir%20temple', hint: 'Prem Mandir' }
    ], 
    history: 'Mathura is an ancient city with a history that spans millennia. It has been an important center for art, culture, and religion, particularly Vaishnavism.', 
    mythology: 'Mathura is revered as the birthplace of Lord Krishna. The nearby town of Vrindavan is where he is said to have spent his childhood, filled with divine tales and leelas.', 
    etiquette: { dressCode: 'Wear comfortable and modest clothes. Bright colors are common during festivals.', tips: ['Be cautious of monkeys in temple areas.', 'Try the local specialty, "Mathura peda".', 'Participate in the joyous Holi celebrations if visiting in spring.'] }, 
    events: [ { date: 'Aug 26, 2024', title: 'Krishna Janmashtami', info: 'Elaborate festival celebrating Krishna\'s birth.' }, { date: 'Mar 14, 2025', title: 'Holi', info: 'The famous festival of colors is celebrated with great zeal.' } ], 
    nearby: [ 
      { id: '1', name: 'Ayodhya', image: '/api/image?query=Ayodhya%20temple', imageHint: 'Ayodhya historic temple' }, 
      { id: '9', name: 'Amritsar', image: '/api/image?query=Amritsar', imageHint: 'Amritsar Golden Temple' }, 
      { id: '10', name: 'Kedarnath', image: '/api/image?query=Kedarnath', imageHint: 'Kedarnath Himalayas' } 
    ] 
  },
  { 
    id: '4', 
    slug: 'dwarka', 
    name: 'Dwarka', 
    description: 'The legendary golden kingdom of Lord Krishna, one of the four sacred Char Dham sites.', 
    image: '/api/image?query=Dwarka%20Gujarat',
    imageHint: 'Dwarka temple', 
    slideshowImages: [
      { url: '/api/image?query=Dwarkadhish%20temple', hint: 'Dwarkadhish temple' },
      { url: '/api/image?query=Dwarka%20coast', hint: 'Dwarka sea' },
      { url: '/api/image?query=Dwarka%20ghat', hint: 'Gomti ghat' },
      { url: '/api/image?query=Sudama%20Setu%20Dwarka', hint: 'Sudama Setu bridge' },
      { url: '/api/image?query=Bet%20Dwarka%20temple', hint: 'Bet Dwarka' }
    ], 
    history: 'Ancient Dwarka was a prosperous city that is said to have been submerged by the sea. The modern city is a major pilgrimage hub for Vaishnavites.', 
    mythology: 'Dwarka is identified with the Dwarka Kingdom, the ancient kingdom of Lord Krishna. He is said to have established this city after leaving Mathura.', 
    etiquette: { dressCode: 'Respectful attire is expected in the temples and holy sites.', tips: ['Take a ferry to the island of Bet Dwarka.', 'Visit the Nageshwar Jyotirlinga Temple.', 'The sea can be rough, be cautious near the coast.'] }, 
    events: [ { date: 'Aug 26, 2024', title: 'Janmashtami', info: 'Celebrations are held at the Dwarkadhish Temple.' } ], 
    nearby: [ 
      { id: '7', name: 'Puri', image: '/api/image?query=Puri%20chariot', imageHint: 'Puri chariot' }, 
      { id: '5', name: 'Rameswaram', image: '/api/image?query=Rameswaram%20temple', imageHint: 'Rameswaram temple' }, 
      { id: '10', name: 'Kedarnath', image: '/api/image?query=Kedarnath%20peak', imageHint: 'Kedarnath peak' } 
    ] 
  },
  { 
    id: '5', 
    slug: 'rameswaram', 
    name: 'Rameswaram', 
    description: 'A holy island town known for its magnificent Ramanathaswamy Temple with its grand corridors.', 
    image: '/api/image?query=Rameswaram%20India',
    imageHint: 'Rameswaram temple', 
    slideshowImages: [
      { url: '/api/image?query=Pamban%20bridge', hint: 'Pamban bridge' },
      { url: '/api/image?query=Ramanathaswamy%20temple', hint: 'temple corridor' },
      { url: '/api/image?query=Dhanushkodi%20beach', hint: 'Dhanushkodi beach' },
      { url: '/api/image?query=Rameswaram%20holy%20bath', hint: 'holy water' },
      { url: '/api/image?query=Adam\'s%20Bridge', hint: 'Rama Setu' }
    ], 
    history: 'Rameswaram has been a pilgrimage center for centuries, with its temple being a fine example of Dravidian architecture.', 
    mythology: 'Lord Rama is said to have built a bridge (Rama Setu) from here to Lanka to rescue his wife Sita. He also worshipped Lord Shiva here to atone for killing Ravana.', 
    etiquette: { dressCode: 'Modest dress is required for temple entry. Men may need to be bare-chested.', tips: ['Take a holy dip in the Agni Theertham.', 'Walk through the famous temple corridors.', 'Visit the ghost town of Dhanushkodi.'] }, 
    events: [ { date: 'Feb 26, 2025', title: 'Maha Shivaratri', info: 'A night of prayer and festivities for Lord Shiva.' } ], 
    nearby: [ 
      { id: '8', name: 'Tirupati', image: '/api/image?query=Tirumala%20hills', imageHint: 'Tirupati hills' }, 
      { id: '9', name: 'Amritsar', image: '/api/image?query=Golden%20Temple%20Amritsar', imageHint: 'Golden Temple' }, 
      { id: '3', name: 'Mathura & Vrindavan', image: '/api/image?query=Prem%20Mandir', imageHint: 'Prem Mandir' } 
    ] 
  },
  { 
    id: '6', 
    slug: 'haridwar-rishikesh', 
    name: 'Haridwar & Rishikesh', 
    description: 'Twin spiritual towns on the banks of the Ganges, the gateway to the Himalayas.', 
    image: '/api/image?query=Rishikesh%20India',
    imageHint: 'Haridwar Ganges', 
    slideshowImages: [
      { url: '/api/image?query=yoga%20Rishikesh', hint: 'yoga meditation' },
      { url: '/api/image?query=Ganga%20aarti%20Haridwar', hint: 'Ganga aarti' },
      { url: '/api/image?query=Lakshman%20Jhula%20bridge', hint: 'Lakshman Jhula' },
      { url: '/api/image?query=Har%20Ki%20Pauri', hint: 'Har Ki Pauri' },
      { url: '/api/image?query=river%20rafting%20Ganges', hint: 'river rafting' }
    ], 
    history: 'Haridwar and Rishikesh are ancient pilgrimage sites. Haridwar is where the Ganges enters the plains, while Rishikesh is known as the "Yoga Capital of the World".', 
    mythology: 'These towns are steeped in Hindu mythology, with numerous temples and ashrams dedicated to various deities. They are the starting point for the Char Dham Yatra of Uttarakhand.', 
    etiquette: { dressCode: 'Modest, comfortable clothing suitable for walking and yoga.', tips: ['Attend the Ganga Aarti at Har Ki Pauri.', 'Explore the ashrams of Rishikesh.', 'Try white-water rafting for an adventurous twist.'] }, 
    events: [ { date: 'April 14, 2025', title: 'Vaisakhi', info: 'Celebrates the solar new year with holy dips in the Ganges.' } ], 
    nearby: [ 
      { id: '1', name: 'Ayodhya', image: '/api/image?query=Sarayu%20river%20Ayodhya', imageHint: 'Sarayu river' }, 
      { id: '2', name: 'Kashi (Varanasi)', image: '/api/image?query=Varanasi%20India', imageHint: 'Varanasi ghats' }, 
      { id: '3', name: 'Mathura & Vrindavan', image: '/api/image?query=Vrindavan', imageHint: 'Vrindavan temple' } 
    ] 
  },
  { 
    id: '7', 
    slug: 'puri', 
    name: 'Puri', 
    description: 'Home to the Jagannath Temple, famous for its annual Rath Yatra festival.', 
    image: '/api/image?query=Puri%20Rath%20Yatra',
    imageHint: 'Puri Rath Yatra', 
    slideshowImages: [
      { url: '/api/image?query=Puri%20Rath%20Yatra%20chariot', hint: 'Rath Yatra chariot' },
      { url: '/api/image?query=Puri%20beach%20India', hint: 'sandy beach' },
      { url: '/api/image?query=Konark%20Sun%20temple', hint: 'Konark Sun temple' },
      { url: '/api/image?query=Jagannath%20Puri%20temple', hint: 'Jagannath temple' },
      { url: '/api/image?query=Puri%20beach%20sunset', hint: 'beach sunset' }
    ], 
    history: 'Puri is one of the Char Dham pilgrimage sites. The Jagannath Temple is an architectural marvel and has been a focal point of Hinduism for centuries.', 
    mythology: 'The temple is dedicated to Lord Jagannath (a form of Krishna), his brother Balabhadra, and sister Subhadra.', 
    etiquette: { dressCode: 'Strict dress code for the temple; non-Hindus are not permitted inside the main sanctum.', tips: ['Witness the grand Rath Yatra if visiting in summer.', 'Relax on the golden sands of Puri Beach.', 'Take a day trip to the Konark Sun Temple.'] }, 
    events: [ { date: 'July 7, 2024', title: 'Rath Yatra', info: 'The spectacular chariot festival.' } ], 
    nearby: [ 
      { id: '2', name: 'Kashi (Varanasi)', image: '/api/image?query=Varanasi', imageHint: 'Varanasi cityscape' }, 
      { id: '8', name: 'Tirupati', image: '/api/image?query=Tirupati%20temple', imageHint: 'Tirupati hill' }, 
      { id: '5', name: 'Rameswaram', image: '/api/image?query=Rameswaram%20island', imageHint: 'Rameswaram temple' } 
    ] 
  },
  { 
    id: '8', 
    slug: 'tirupati', 
    name: 'Tirupati', 
    description: 'The abode of Lord Venkateswara, one of the most visited and wealthiest pilgrimage centers.', 
    image: '/api/image?query=Tirupati%20temple',
    imageHint: 'Tirupati gopuram', 
    slideshowImages: [
      { url: '/api/image?query=Tirumala%20hills', hint: 'Tirumala hills' },
      { url: '/api/image?query=Tirupati%20architecture', hint: 'Dravidian architecture' },
      { url: '/api/image?query=Venkateswara%20deity', hint: 'Venkateswara idol' },
      { url: '/api/image?query=pilgrims%20queue%20Tirupati', hint: 'pilgrims' },
      { url: '/api/image?query=Tirumala%20temple%20at%20night', hint: 'temple at night' }
    ], 
    history: 'The temple\'s origins are ancient, with contributions from various dynasties over centuries. It is a masterpiece of Dravidian architecture.', 
    mythology: 'Lord Venkateswara, a form of Vishnu, is believed to have manifested here to save mankind from the trials of the Kali Yuga.', 
    etiquette: { dressCode: 'Traditional Indian attire is mandatory (Dhoti for men, Saree/Chudidar for women).', tips: ['Book your darshan (viewing) slot online well in advance.', 'Be prepared for large crowds and long queues.', 'Do not carry leather items or electronic gadgets inside the temple.'] }, 
    events: [ { date: 'Sept-Oct 2024', title: 'Brahmotsavam', info: 'A nine-day grand festival celebrated with processions.' } ], 
    nearby: [ 
      { id: '5', name: 'Rameswaram', image: '/api/image?query=Rameswaram%20bridge', imageHint: 'Pamban bridge' }, 
      { id: '9', name: 'Amritsar', image: '/api/image?query=Harmandir%20Sahib', imageHint: 'Harmandir Sahib' }, 
      { id: '4', name: 'Dwarka', image: '/api/image?query=Dwarkadhish%20temple', imageHint: 'Krishna temple' } 
    ] 
  },
  { 
    id: '9', 
    slug: 'amritsar', 
    name: 'Amritsar', 
    description: 'The spiritual center for Sikhs, home to the magnificent Golden Temple.', 
    image: '/api/image?query=Golden%20Temple%20Amritsar',
    imageHint: 'Golden Temple', 
    slideshowImages: [
      { url: '/api/image?query=Golden%20Temple%20night%20reflection', hint: 'Golden Temple night' },
      { url: '/api/image?query=Wagah%20border%20ceremony', hint: 'Wagah border' },
      { url: '/api/image?query=Golden%20Temple%20community%20kitchen', hint: 'temple kitchen' },
      { url: '/api/image?query=Jallianwala%20Bagh%20memorial', hint: 'Jallianwala Bagh' },
      { url: 'https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg', hint: 'Sikh pilgrims' }
    ], 
    history: 'Founded in the 16th century, Amritsar is a city of immense historical and religious importance for Sikhism.', 
    mythology: 'The Golden Temple, or Harmandir Sahib, is the holiest gurdwara of Sikhism, symbolizing equality and brotherhood.', 
    etiquette: { dressCode: 'Head must be covered for all genders inside the temple complex. Scarves are provided.', tips: ['Partake in the langar (free community meal).', 'Visit the Jallianwala Bagh memorial.', 'Witness the Wagah Border ceremony in the evening.'] }, 
    events: [ { date: 'April 14, 2025', title: 'Vaisakhi', info: 'Celebrated with great fervor as the founding day of the Khalsa.' } ], 
    nearby: [ 
      { id: '6', name: 'Haridwar & Rishikesh', image: '/api/image?query=Rishikesh%20Ganges', imageHint: 'Ganges river' }, 
      { id: '10', name: 'Kedarnath', image: '/api/image?query=Kedarnath%20snowy', imageHint: 'snowy Himalayas' }, 
      { id: '1', name: 'Ayodhya', image: '/api/image?query=Ayodhya%20city', imageHint: 'ancient city' } 
    ] 
  },
  { 
    id: '10', 
    slug: 'kedarnath', 
    name: 'Kedarnath', 
    description: 'A majestic Himalayan temple dedicated to Lord Shiva, part of the Char Dham Yatra.', 
    image: '/api/image?query=Kedarnath%20temple%20Himalayas',
    imageHint: 'Himalayan temple', 
    slideshowImages: [
      { url: '/api/image?query=Kedarnath%20valley', hint: 'mountain valley' },
      { url: '/api/image?query=Himalayas%20snow%20peak', hint: 'snow peaks' },
      { url: '/api/image?query=Kedarnath%20Shiva%20mandir', hint: 'Shiva temple' },
      { url: '/api/image?query=Vasuki%20Tal%20lake', hint: 'Vasuki Tal' },
      { url: '/api/image?query=Himalayan%20pilgrimage', hint: 'pilgrimage trek' }
    ], 
    history: 'An ancient temple that has stood for over a thousand years amidst the challenging Himalayan terrain, rebuilt after the 2013 floods.', 
    mythology: 'Believed to have been built by the Pandavas to atone for their sins after the Mahabharata war. It is one of the 12 Jyotirlingas.', 
    etiquette: { dressCode: 'Warm layered clothing is essential due to the high altitude and cold weather.', tips: ['Acclimatize properly to avoid altitude sickness.', 'The temple is only open for about six months a year (typically Apr-Nov).', 'The journey involves a significant trek; pony and helicopter services are available.'] }, 
    events: [ { date: 'May 10, 2025 (Tentative)', title: 'Temple Opening', info: 'The ceremonial opening of the temple doors after winter.' } ], 
    nearby: [ 
      { id: '6', name: 'Haridwar & Rishikesh', image: '/api/image?query=Haridwar%20Aarti', imageHint: 'Haridwar Aarti' }, 
      { id: '2', name: 'Kashi (Varanasi)', image: '/api/image?query=Varanasi%20city', imageHint: 'Varanasi city' }, 
      { id: '1', name: 'Ayodhya', image: '/api/image?query=Ram%20Mandir', imageHint: 'Ram Mandir' } 
    ] 
  },
];


export async function getAllDestinations(): Promise<Destination[]> {
    return destinationsData;
}

export async function getDestinationBySlug(slug: string): Promise<Destination | undefined> {
    const destination = destinationsData.find((d) => d.slug === slug);
    return destination;
}

export function getDestinationById(id: string) {
    const destination = destinationsData.find((d) => d.id === id);
    if (!destination) return undefined;

    return {
        id: destination.id,
        slug: destination.slug,
        name: destination.name,
        image: destination.image, 
        imageHint: destination.imageHint,
    };
}
