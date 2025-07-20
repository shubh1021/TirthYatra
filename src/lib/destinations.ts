

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
    image: 'https://images.unsplash.com/photo-1705703906394-444155106a72?q=80&w=1887&auto=format&fit=crop',
    imageHint: 'Ayodhya temple India', 
    slideshowImages: [
      { url: 'https://images.unsplash.com/photo-1677695029315-a8f522293416?q=80&w=1932&auto=format&fit=crop', hint: 'Ayodhya sarayu river' },
      { url: 'https://images.unsplash.com/photo-1705703906394-444155106a72?q=80&w=1887&auto=format&fit=crop', hint: 'Ayodhya ram mandir' },
      { url: 'https://images.unsplash.com/photo-1594102602418-2e847e127394?q=80&w=2070&auto=format&fit=crop', hint: 'Ayodhya ghats' }
    ], 
    history: 'Ayodhya, one of the seven sacred cities of Hinduism, has a rich history dating back to ancient times. It was the capital of the Kosala Kingdom and is deeply intertwined with the epic Ramayana.', 
    mythology: 'According to Hindu mythology, Ayodhya is the birthplace of Lord Rama, the seventh avatar of Vishnu. The city is central to the Ramayana, which narrates his life and journey.', 
    etiquette: { dressCode: 'Modest attire is recommended. Cover shoulders and knees when visiting temples.', tips: ['Remove footwear before entering temples.', 'Respect local customs and traditions.', 'Photography may be restricted in some areas.'] }, 
    events: [ { date: 'Apr 17, 2025', title: 'Ram Navami', info: 'Grand celebrations for Lord Rama\'s birthday.' }, { date: 'Nov 1, 2024', title: 'Deepotsav', info: 'A spectacular festival of lights.' } ], 
    nearby: [ 
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://images.unsplash.com/photo-1528450393792-28a17688c805?q=80&w=1887&auto=format&fit=crop', imageHint: 'Varanasi ghats India' }, 
      { id: '3', name: 'Mathura & Vrindavan', image: 'https://images.unsplash.com/photo-1603803233814-4e94116c1410?q=80&w=1887&auto=format&fit=crop', imageHint: 'Mathura Vrindavan temple' }, 
      { id: '6', name: 'Haridwar & Rishikesh', image: 'https://images.unsplash.com/photo-1587799194582-7c749479b69b?q=80&w=2070&auto=format&fit=crop', imageHint: 'Haridwar Ganges river' } 
    ] 
  },
  { 
    id: '2', 
    slug: 'kashi', 
    name: 'Kashi (Varanasi)', 
    description: 'The spiritual capital of India, a mystical city of ghats, ancient temples, and moksha.', 
    image: 'https://images.unsplash.com/photo-1528450393792-28a17688c805?q=80&w=1887&auto=format&fit=crop',
    imageHint: 'Varanasi ghats India', 
    slideshowImages: [
      { url: 'https://images.unsplash.com/photo-1561361491-c8a7b7a42152?q=80&w=2070&auto=format&fit=crop', hint: 'Varanasi ganges boat' },
      { url: 'https://images.unsplash.com/photo-1608629132242-b671a99f168b?q=80&w=1935&auto=format&fit=crop', hint: 'Varanasi street' },
      { url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1974&auto=format&fit=crop', hint: 'Varanasi sadhu' }
    ], 
    history: 'Kashi, also known as Varanasi, is one of the oldest living cities in the world. It has been a center of learning, philosophy, and spirituality for thousands of years.', 
    mythology: 'It is believed that Kashi was founded by Lord Shiva. Hindus believe that dying in Kashi brings salvation (moksha), making it a major pilgrimage site.', 
    etiquette: { dressCode: 'Conservative clothing is advised, especially around religious sites.', tips: ['Be mindful of the funeral ceremonies at the burning ghats.', 'Bargaining is common in markets.', 'A boat ride on the Ganges at dawn is a must-do.'] }, 
    events: [ { date: 'Mar 7, 2025', title: 'Maha Shivaratri', info: 'A major festival dedicated to Lord Shiva.' }, { date: 'Nov 15, 2024', title: 'Dev Deepawali', info: 'The festival of lights of the gods.' } ], 
    nearby: [ 
      { id: '1', name: 'Ayodhya', image: 'https://images.unsplash.com/photo-1705703906394-444155106a72?q=80&w=1887&auto=format&fit=crop', imageHint: 'Ayodhya temple India' }, 
      { id: '7', name: 'Puri', image: 'https://images.unsplash.com/photo-1629683952290-71954c86b62e?q=80&w=1887&auto=format&fit=crop', imageHint: 'Puri Jagannath temple' }, 
      { id: '8', name: 'Tirupati', image: 'https://images.unsplash.com/photo-1605839958999-e688784d0383?q=80&w=1887&auto=format&fit=crop', imageHint: 'Tirupati temple gopuram' } 
    ] 
  },
  { 
    id: '3', 
    slug: 'mathura-vrindavan', 
    name: 'Mathura & Vrindavan', 
    description: 'The vibrant twin holy towns, the birthplace and childhood home of Lord Krishna.', 
    image: 'https://images.unsplash.com/photo-1603803233814-4e94116c1410?q=80&w=1887&auto=format&fit=crop',
    imageHint: 'Mathura Vrindavan temple', 
    slideshowImages: [
      { url: 'https://images.unsplash.com/photo-1580532296998-a25a0b814631?q=80&w=2070&auto=format&fit=crop', hint: 'Vrindavan holi festival' },
      { url: 'https://images.unsplash.com/photo-1622088804245-738914856f63?q=80&w=1964&auto=format&fit=crop', hint: 'Mathura krishna temple' },
      { url: 'https://images.unsplash.com/photo-1644724492772-23f2f1706a1d?q=80&w=2070&auto=format&fit=crop', hint: 'Vrindavan devotees' }
    ], 
    history: 'Mathura is an ancient city with a history that spans millennia. It has been an important center for art, culture, and religion, particularly Vaishnavism.', 
    mythology: 'Mathura is revered as the birthplace of Lord Krishna. The nearby town of Vrindavan is where he is said to have spent his childhood, filled with divine tales and leelas.', 
    etiquette: { dressCode: 'Wear comfortable and modest clothes. Bright colors are common during festivals.', tips: ['Be cautious of monkeys in temple areas.', 'Try the local specialty, "Mathura peda".', 'Participate in the joyous Holi celebrations if visiting in spring.'] }, 
    events: [ { date: 'Aug 26, 2024', title: 'Krishna Janmashtami', info: 'Elaborate festival celebrating Krishna\'s birth.' }, { date: 'Mar 14, 2025', title: 'Holi', info: 'The famous festival of colors is celebrated with great zeal.' } ], 
    nearby: [ 
      { id: '1', name: 'Ayodhya', image: 'https://images.unsplash.com/photo-1705703906394-444155106a72?q=80&w=1887&auto=format&fit=crop', imageHint: 'Ayodhya temple India' }, 
      { id: '9', name: 'Amritsar', image: 'https://images.unsplash.com/photo-1588623229896-4806a6435c24?q=80&w=1932&auto=format&fit=crop', imageHint: 'Amritsar Golden Temple' }, 
      { id: '10', name: 'Kedarnath', image: 'https://images.unsplash.com/photo-1691244309849-d7543a758509?q=80&w=1974&auto=format&fit=crop', imageHint: 'Kedarnath temple Himalayas' } 
    ] 
  },
  { 
    id: '4', 
    slug: 'dwarka', 
    name: 'Dwarka', 
    description: 'The legendary golden kingdom of Lord Krishna, one of the four sacred Char Dham sites.', 
    image: 'https://images.unsplash.com/photo-1662752538774-454341935816?q=80&w=1932&auto=format&fit=crop',
    imageHint: 'Dwarka temple Gujarat', 
    slideshowImages: [
      { url: 'https://images.unsplash.com/photo-1616604222045-8378f1b62f5f?q=80&w=1932&auto=format&fit=crop', hint: 'Dwarkadhish temple' },
      { url: 'https://images.unsplash.com/photo-1681596792942-13c5d642f831?q=80&w=1925&auto=format&fit=crop', hint: 'Dwarka beach' },
      { url: 'https://as2.ftcdn.net/v2/jpg/02/10/82/33/1000_F_210823340_8TspzX47FE2a2Z1p0wcoqUZN2pQRYxUK.jpg', hint: 'Gomti ghat Dwarka' }
    ], 
    history: 'Ancient Dwarka was a prosperous city that is said to have been submerged by the sea. The modern city is a major pilgrimage hub for Vaishnavites.', 
    mythology: 'Dwarka is identified with the Dwarka Kingdom, the ancient kingdom of Lord Krishna. He is said to have established this city after leaving Mathura.', 
    etiquette: { dressCode: 'Respectful attire is expected in the temples and holy sites.', tips: ['Take a ferry to the island of Bet Dwarka.', 'Visit the Nageshwar Jyotirlinga Temple.', 'The sea can be rough, be cautious near the coast.'] }, 
    events: [ { date: 'Aug 26, 2024', title: 'Janmashtami', info: 'Celebrations are held at the Dwarkadhish Temple.' } ], 
    nearby: [ 
      { id: '7', name: 'Puri', image: 'https://images.unsplash.com/photo-1629683952290-71954c86b62e?q=80&w=1887&auto=format&fit=crop', imageHint: 'Puri Jagannath temple' }, 
      { id: '5', name: 'Rameswaram', image: 'https://images.unsplash.com/photo-1609769682984-553995d23316?q=80&w=1974&auto=format&fit=crop', imageHint: 'Rameswaram temple corridor' }, 
      { id: '10', name: 'Kedarnath', image: 'https://images.unsplash.com/photo-1691244309849-d7543a758509?q=80&w=1974&auto=format&fit=crop', imageHint: 'Kedarnath temple Himalayas' } 
    ] 
  },
  { 
    id: '5', 
    slug: 'rameswaram', 
    name: 'Rameswaram', 
    description: 'A holy island town known for its magnificent Ramanathaswamy Temple with its grand corridors.', 
    image: 'https://images.unsplash.com/photo-1609769682984-553995d23316?q=80&w=1974&auto=format&fit=crop',
    imageHint: 'Rameswaram temple corridor', 
    slideshowImages: [
      { url: 'https://images.unsplash.com/photo-1679092441994-6b5d2f0674c1?q=80&w=2070&auto=format&fit=crop', hint: 'Pamban bridge' },
      { url: 'https://images.unsplash.com/photo-1643125372223-e2743a1a5d62?q=80&w=2070&auto=format&fit=crop', hint: 'Ramanathaswamy temple pillar' },
      { url: 'https://images.unsplash.com/photo-1616053301884-63806305a417?q=80&w=2070&auto=format&fit=crop', hint: 'Dhanushkodi beach' }
    ], 
    history: 'Rameswaram has been a pilgrimage center for centuries, with its temple being a fine example of Dravidian architecture.', 
    mythology: 'Lord Rama is said to have built a bridge (Rama Setu) from here to Lanka to rescue his wife Sita. He also worshipped Lord Shiva here to atone for killing Ravana.', 
    etiquette: { dressCode: 'Modest dress is required for temple entry. Men may need to be bare-chested.', tips: ['Take a holy dip in the Agni Theertham.', 'Walk through the famous temple corridors.', 'Visit the ghost town of Dhanushkodi.'] }, 
    events: [ { date: 'Feb 26, 2025', title: 'Maha Shivaratri', info: 'A night of prayer and festivities for Lord Shiva.' } ], 
    nearby: [ 
      { id: '8', name: 'Tirupati', image: 'https://images.unsplash.com/photo-1605839958999-e688784d0383?q=80&w=1887&auto=format&fit=crop', imageHint: 'Tirupati temple gopuram' }, 
      { id: '9', name: 'Amritsar', image: 'https://images.unsplash.com/photo-1588623229896-4806a6435c24?q=80&w=1932&auto=format&fit=crop', imageHint: 'Amritsar Golden Temple' }, 
      { id: '3', name: 'Mathura & Vrindavan', image: 'https://images.unsplash.com/photo-1603803233814-4e94116c1410?q=80&w=1887&auto=format&fit=crop', imageHint: 'Mathura Vrindavan temple' } 
    ] 
  },
  { 
    id: '6', 
    slug: 'haridwar-rishikesh', 
    name: 'Haridwar & Rishikesh', 
    description: 'Twin spiritual towns on the banks of the Ganges, the gateway to the Himalayas.', 
    image: 'https://images.unsplash.com/photo-1587799194582-7c749479b69b?q=80&w=2070&auto=format&fit=crop',
    imageHint: 'Haridwar Ganges river', 
    slideshowImages: [
      { url: 'https://images.unsplash.com/photo-1599422089404-3a9d940a68d8?q=80&w=1887&auto=format&fit=crop', hint: 'Rishikesh yoga' },
      { url: 'https://images.unsplash.com/photo-1616423920286-a10c735a2e4e?q=80&w=2070&auto=format&fit=crop', hint: 'Haridwar ganga aarti' },
      { url: 'https://images.unsplash.com/photo-1589932971169-7463a5a40a23?q=80&w=1974&auto=format&fit=crop', hint: 'Lakshman Jhula bridge' }
    ], 
    history: 'Haridwar and Rishikesh are ancient pilgrimage sites. Haridwar is where the Ganges enters the plains, while Rishikesh is known as the "Yoga Capital of the World".', 
    mythology: 'These towns are steeped in Hindu mythology, with numerous temples and ashrams dedicated to various deities. They are the starting point for the Char Dham Yatra of Uttarakhand.', 
    etiquette: { dressCode: 'Modest, comfortable clothing suitable for walking and yoga.', tips: ['Attend the Ganga Aarti at Har Ki Pauri.', 'Explore the ashrams of Rishikesh.', 'Try white-water rafting for an adventurous twist.'] }, 
    events: [ { date: 'April 14, 2025', title: 'Vaisakhi', info: 'Celebrates the solar new year with holy dips in the Ganges.' } ], 
    nearby: [ 
      { id: '1', name: 'Ayodhya', image: 'https://images.unsplash.com/photo-1705703906394-444155106a72?q=80&w=1887&auto=format&fit=crop', imageHint: 'Ayodhya temple India' }, 
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://images.unsplash.com/photo-1528450393792-28a17688c805?q=80&w=1887&auto=format&fit=crop', imageHint: 'Varanasi ghats India' }, 
      { id: '3', name: 'Mathura & Vrindavan', image: 'https://images.unsplash.com/photo-1603803233814-4e94116c1410?q=80&w=1887&auto=format&fit=crop', imageHint: 'Mathura Vrindavan temple' } 
    ] 
  },
  { 
    id: '7', 
    slug: 'puri', 
    name: 'Puri', 
    description: 'Home to the Jagannath Temple, famous for its annual Rath Yatra festival.', 
    image: 'https://images.unsplash.com/photo-1629683952290-71954c86b62e?q=80&w=1887&auto=format&fit=crop',
    imageHint: 'Puri Jagannath temple', 
    slideshowImages: [
      { url: 'https://images.unsplash.com/photo-1576752796039-4d334587321a?q=80&w=2070&auto=format&fit=crop', hint: 'Puri rath yatra' },
      { url: 'https://images.unsplash.com/photo-1596890332306-99b3a4f64b4c?q=80&w=2070&auto=format&fit=crop', hint: 'Puri beach' },
      { url: 'https://images.unsplash.com/photo-1577968897966-2d4912a3e230?q=80&w=1932&auto=format&fit=crop', hint: 'Konark sun temple' }
    ], 
    history: 'Puri is one of the Char Dham pilgrimage sites. The Jagannath Temple is an architectural marvel and has been a focal point of Hinduism for centuries.', 
    mythology: 'The temple is dedicated to Lord Jagannath (a form of Krishna), his brother Balabhadra, and sister Subhadra.', 
    etiquette: { dressCode: 'Strict dress code for the temple; non-Hindus are not permitted inside the main sanctum.', tips: ['Witness the grand Rath Yatra if visiting in summer.', 'Relax on the golden sands of Puri Beach.', 'Take a day trip to the Konark Sun Temple.'] }, 
    events: [ { date: 'July 7, 2024', title: 'Rath Yatra', info: 'The spectacular chariot festival.' } ], 
    nearby: [ 
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://images.unsplash.com/photo-1528450393792-28a17688c805?q=80&w=1887&auto=format&fit=crop', imageHint: 'Varanasi ghats India' }, 
      { id: '8', name: 'Tirupati', image: 'https://images.unsplash.com/photo-1605839958999-e688784d0383?q=80&w=1887&auto=format&fit=crop', imageHint: 'Tirupati temple gopuram' }, 
      { id: '5', name: 'Rameswaram', image: 'https://images.unsplash.com/photo-1609769682984-553995d23316?q=80&w=1974&auto=format&fit=crop', imageHint: 'Rameswaram temple corridor' } 
    ] 
  },
  { 
    id: '8', 
    slug: 'tirupati', 
    name: 'Tirupati', 
    description: 'The abode of Lord Venkateswara, one of the most visited and wealthiest pilgrimage centers.', 
    image: 'https://images.unsplash.com/photo-1605839958999-e688784d0383?q=80&w=1887&auto=format&fit=crop',
    imageHint: 'Tirupati temple gopuram', 
    slideshowImages: [
      { url: 'https://images.unsplash.com/photo-1605839958999-e688784d0383?q=80&w=1887&auto=format&fit=crop', hint: 'Tirumala temple' },
      { url: 'https://images.unsplash.com/photo-1558236122-423379b38914?q=80&w=2070&auto=format&fit=crop', hint: 'Tirupati landscape' },
      { url: 'https://as1.ftcdn.net/v2/jpg/02/01/24/75/1000_F_201247571_5w2tx2i03nAbHj2sEaSB0p4z4y53i26A.jpg', hint: 'Venkateswara deity' }
    ], 
    history: 'The temple\'s origins are ancient, with contributions from various dynasties over centuries. It is a masterpiece of Dravidian architecture.', 
    mythology: 'Lord Venkateswara, a form of Vishnu, is believed to have manifested here to save mankind from the trials of the Kali Yuga.', 
    etiquette: { dressCode: 'Traditional Indian attire is mandatory (Dhoti for men, Saree/Chudidar for women).', tips: ['Book your darshan (viewing) slot online well in advance.', 'Be prepared for large crowds and long queues.', 'Do not carry leather items or electronic gadgets inside the temple.'] }, 
    events: [ { date: 'Sept-Oct 2024', title: 'Brahmotsavam', info: 'A nine-day grand festival celebrated with processions.' } ], 
    nearby: [ 
      { id: '5', name: 'Rameswaram', image: 'https://images.unsplash.com/photo-1609769682984-553995d23316?q=80&w=1974&auto=format&fit=crop', imageHint: 'Rameswaram temple corridor' }, 
      { id: '9', name: 'Amritsar', image: 'https://images.unsplash.com/photo-1588623229896-4806a6435c24?q=80&w=1932&auto=format&fit=crop', imageHint: 'Amritsar Golden Temple' }, 
      { id: '4', name: 'Dwarka', image: 'https://images.unsplash.com/photo-1662752538774-454341935816?q=80&w=1932&auto=format&fit=crop', imageHint: 'Dwarka temple Gujarat' } 
    ] 
  },
  { 
    id: '9', 
    slug: 'amritsar', 
    name: 'Amritsar', 
    description: 'The spiritual center for Sikhs, home to the magnificent Golden Temple.', 
    image: 'https://images.unsplash.com/photo-1588623229896-4806a6435c24?q=80&w=1932&auto=format&fit=crop',
    imageHint: 'Amritsar Golden Temple', 
    slideshowImages: [
      { url: 'https://images.unsplash.com/photo-1609879007636-c4d6a4a821e2?q=80&w=1935&auto=format&fit=crop', hint: 'Golden Temple reflection' },
      { url: 'https://images.unsplash.com/photo-1543083437-1284a21a5a78?q=80&w=1949&auto=format&fit=crop', hint: 'Wagah border ceremony' },
      { url: 'https://images.unsplash.com/photo-1599539385655-5777a683a8b4?q=80&w=2070&auto=format&fit=crop', hint: 'Langar community kitchen' }
    ], 
    history: 'Founded in the 16th century, Amritsar is a city of immense historical and religious importance for Sikhism.', 
    mythology: 'The Golden Temple, or Harmandir Sahib, is the holiest gurdwara of Sikhism, symbolizing equality and brotherhood.', 
    etiquette: { dressCode: 'Head must be covered for all genders inside the temple complex. Scarves are provided.', tips: ['Partake in the langar (free community meal).', 'Visit the Jallianwala Bagh memorial.', 'Witness the Wagah Border ceremony in the evening.'] }, 
    events: [ { date: 'April 14, 2025', title: 'Vaisakhi', info: 'Celebrated with great fervor as the founding day of the Khalsa.' } ], 
    nearby: [ 
      { id: '6', name: 'Haridwar & Rishikesh', image: 'https://images.unsplash.com/photo-1587799194582-7c749479b69b?q=80&w=2070&auto=format&fit=crop', imageHint: 'Haridwar Ganges river' }, 
      { id: '10', name: 'Kedarnath', image: 'https://images.unsplash.com/photo-1691244309849-d7543a758509?q=80&w=1974&auto=format&fit=crop', imageHint: 'Kedarnath temple Himalayas' }, 
      { id: '1', name: 'Ayodhya', image: 'https://images.unsplash.com/photo-1705703906394-444155106a72?q=80&w=1887&auto=format&fit=crop', imageHint: 'Ayodhya temple India' } 
    ] 
  },
  { 
    id: '10', 
    slug: 'kedarnath', 
    name: 'Kedarnath', 
    description: 'A majestic Himalayan temple dedicated to Lord Shiva, part of the Char Dham Yatra.', 
    image: 'https://images.unsplash.com/photo-1691244309849-d7543a758509?q=80&w=1974&auto=format&fit=crop',
    imageHint: 'Kedarnath temple Himalayas', 
    slideshowImages: [
      { url: 'https://images.unsplash.com/photo-1601815121303-a25e17d2a138?q=80&w=2070&auto=format&fit=crop', hint: 'Kedarnath valley' },
      { url: 'https://images.unsplash.com/photo-1596706052825-f0e843719927?q=80&w=1933&auto=format&fit=crop', hint: 'Himalayan mountains' },
      { url: 'https://images.unsplash.com/photo-1610974106138-958b3874c74a?q=80&w=2070&auto=format&fit=crop', hint: 'Shiva temple snow' }
    ], 
    history: 'An ancient temple that has stood for over a thousand years amidst the challenging Himalayan terrain, rebuilt after the 2013 floods.', 
    mythology: 'Believed to have been built by the Pandavas to atone for their sins after the Mahabharata war. It is one of the 12 Jyotirlingas.', 
    etiquette: { dressCode: 'Warm layered clothing is essential due to the high altitude and cold weather.', tips: ['Acclimatize properly to avoid altitude sickness.', 'The temple is only open for about six months a year (typically Apr-Nov).', 'The journey involves a significant trek; pony and helicopter services are available.'] }, 
    events: [ { date: 'May 10, 2025 (Tentative)', title: 'Temple Opening', info: 'The ceremonial opening of the temple doors after winter.' } ], 
    nearby: [ 
      { id: '6', name: 'Haridwar & Rishikesh', image: 'https://images.unsplash.com/photo-1587799194582-7c749479b69b?q=80&w=2070&auto=format&fit=crop', imageHint: 'Haridwar Ganges river' }, 
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://images.unsplash.com/photo-1528450393792-28a17688c805?q=80&w=1887&auto=format&fit=crop', imageHint: 'Varanasi ghats India' }, 
      { id: '1', name: 'Ayodhya', image: 'https://images.unsplash.com/photo-1705703906394-444155106a72?q=80&w=1887&auto=format&fit=crop', imageHint: 'Ayodhya temple India' } 
    ] 
  },
];


export async function getAllDestinations(): Promise<Destination[]> {
    // No need to process, just return the static data
    return destinationsData;
}

export async function getDestinationBySlug(slug: string): Promise<Destination | undefined> {
    const destination = destinationsData.find((d) => d.slug === slug);
    return destination;
}

export function getDestinationById(id: string) {
    const destination = destinationsData.find((d) => d.id === id);
    if (!destination) return undefined;

    // Return the full object needed for the nearby card
    return {
        id: destination.id,
        slug: destination.slug,
        name: destination.name,
        image: destination.image, 
        imageHint: destination.imageHint,
    };
}
