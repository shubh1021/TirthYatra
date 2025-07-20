
// Using direct links to stable images to simulate fetching from Firebase Storage.
// This removes the dependency on the Unsplash API at runtime.

export interface Destination {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string; // Direct URL
  imageHint: string;
  slideshowImages: { url: string; hint: string }[]; // Direct URLs
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
    image: string; // Direct URL
    imageHint: string;
  }[];
}

const destinations: Destination[] = [
  {
    id: '1',
    slug: 'ayodhya',
    name: 'Ayodhya',
    description: 'The sacred birthplace of Lord Rama, a city of ancient temples and ghats on the Sarayu river.',
    image: 'https://images.unsplash.com/photo-1705703906394-444155106a72?q=80&w=1887&auto=format&fit=crop',
    imageHint: 'Ayodhya temple India',
    slideshowImages: [
      { url: 'https://images.unsplash.com/photo-1677312942474-121575a6a244?q=80&w=2070&auto=format&fit=crop', hint: 'Sarayu river boat' },
      { url: 'https://images.unsplash.com/photo-1705703906394-444155106a72?q=80&w=2070&auto=format&fit=crop', hint: 'Ram Mandir Ayodhya night' },
      { url: 'https://images.unsplash.com/photo-1653473268615-6379134a6750?q=80&w=1935&auto=format&fit=crop', hint: 'Hanuman Garhi temple' },
    ],
    history: 'Ayodhya, one of the seven sacred cities of Hinduism, has a rich history dating back to ancient times. It was the capital of the Kosala Kingdom and is deeply intertwined with the epic Ramayana.',
    mythology: 'According to Hindu mythology, Ayodhya is the birthplace of Lord Rama, the seventh avatar of Vishnu. The city is central to the Ramayana, which narrates his life and journey.',
    etiquette: { dressCode: 'Modest attire is recommended. Cover shoulders and knees when visiting temples.', tips: ['Remove footwear before entering temples.', 'Respect local customs and traditions.', 'Photography may be restricted in some areas.'] },
    events: [ { date: 'Apr 17, 2025', title: 'Ram Navami', info: 'Grand celebrations for Lord Rama\'s birthday.' }, { date: 'Nov 1, 2024', title: 'Deepotsav', info: 'A spectacular festival of lights.' } ],
    nearby: [
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://images.unsplash.com/photo-1528450393792-28a17688c805?q=80&w=1887&auto=format&fit=crop', imageHint: 'Varanasi ghats India' },
      { id: '3', name: 'Mathura & Vrindavan', image: 'https://images.unsplash.com/photo-1629683952290-71954c86b62e?q=80&w=1887&auto=format&fit=crop', imageHint: 'Mathura Vrindavan temple' },
      { id: '6', name: 'Haridwar & Rishikesh', image: 'https://images.unsplash.com/photo-1605839958999-e688784d0383?q=80&w=1887&auto=format&fit=crop', imageHint: 'Haridwar Ganges river' }
    ],
  },
  {
    id: '2',
    slug: 'kashi',
    name: 'Kashi (Varanasi)',
    description: 'The spiritual capital of India, a mystical city of ghats, ancient temples, and moksha.',
    image: 'https://images.unsplash.com/photo-1528450393792-28a17688c805?q=80&w=1887&auto=format&fit=crop',
    imageHint: 'Varanasi ghats India',
    slideshowImages: [
      { url: 'https://images.unsplash.com/photo-1561361513-259c87383a8f?q=80&w=2070&auto=format&fit=crop', hint: 'Ganges aarti ceremony' },
      { url: 'https://images.unsplash.com/photo-1543048532-6e2714c633a2?q=80&w=2070&auto=format&fit=crop', hint: 'boats on Ganges river Varanasi' },
      { url: 'https://images.unsplash.com/photo-1587799194582-7c749479b69b?q=80&w=1932&auto=format&fit=crop', hint: 'Kashi Vishwanath temple' }
    ],
    history: 'Kashi, also known as Varanasi, is one of the oldest living cities in the world. It has been a center of learning, philosophy, and spirituality for thousands of years.',
    mythology: 'It is believed that Kashi was founded by Lord Shiva. Hindus believe that dying in Kashi brings salvation (moksha), making it a major pilgrimage site.',
    etiquette: { dressCode: 'Conservative clothing is advised, especially around religious sites.', tips: ['Be mindful of the funeral ceremonies at the burning ghats.', 'Bargaining is common in markets.', 'A boat ride on the Ganges at dawn is a must-do.'] },
    events: [ { date: 'Mar 7, 2025', title: 'Maha Shivaratri', info: 'A major festival dedicated to Lord Shiva.' }, { date: 'Nov 15, 2024', title: 'Dev Deepawali', info: 'The festival of lights of the gods.' } ],
    nearby: [
      { id: '1', name: 'Ayodhya', image: 'https://images.unsplash.com/photo-1705703906394-444155106a72?q=80&w=1887&auto=format&fit=crop', imageHint: 'Ayodhya temple India' },
      { id: '7', name: 'Puri', image: 'https://images.unsplash.com/photo-1588623229896-4806a6435c24?q=80&w=1932&auto=format&fit=crop', imageHint: 'Puri Jagannath temple' },
      { id: '8', name: 'Tirupati', image: 'https://images.unsplash.com/photo-1610486161491-5c742514125b?q=80&w=1887&auto=format&fit=crop', imageHint: 'Tirupati temple gopuram' }
    ],
  },
  {
    id: '3',
    slug: 'mathura-vrindavan',
    name: 'Mathura & Vrindavan',
    description: 'The vibrant twin holy towns, the birthplace and childhood home of Lord Krishna.',
    image: 'https://images.unsplash.com/photo-1629683952290-71954c86b62e?q=80&w=1887&auto=format&fit=crop',
    imageHint: 'Mathura Vrindavan temple',
    slideshowImages: [
        { url: 'https://images.unsplash.com/photo-1601053354499-9ef17f20b4a7?q=80&w=2070&auto=format&fit=crop', hint: 'Krishna Janmabhoomi Mathura' },
        { url: 'https://images.unsplash.com/photo-1583018228189-53e3b3319843?q=80&w=2070&auto=format&fit=crop', hint: 'Holi festival Vrindavan' },
        { url: 'https://images.unsplash.com/photo-1622396347231-772922a94569?q=80&w=1964&auto=format&fit=crop', hint: 'Prem Mandir Vrindavan' }
    ],
    history: 'Mathura is an ancient city with a history that spans millennia. It has been an important center for art, culture, and religion, particularly Vaishnavism.',
    mythology: 'Mathura is revered as the birthplace of Lord Krishna. The nearby town of Vrindavan is where he is said to have spent his childhood, filled with divine tales and leelas.',
    etiquette: { dressCode: 'Wear comfortable and modest clothes. Bright colors are common during festivals.', tips: ['Be cautious of monkeys in temple areas.', 'Try the local specialty, "Mathura peda".', 'Participate in the joyous Holi celebrations if visiting in spring.'] },
    events: [ { date: 'Aug 26, 2024', title: 'Krishna Janmashtami', info: 'Elaborate festival celebrating Krishna\'s birth.' }, { date: 'Mar 14, 2025', title: 'Holi', info: 'The famous festival of colors is celebrated with great zeal.' } ],
    nearby: [
      { id: '1', name: 'Ayodhya', image: 'https://images.unsplash.com/photo-1705703906394-444155106a72?q=80&w=1887&auto=format&fit=crop', imageHint: 'Ayodhya temple India' },
      { id: '9', name: 'Amritsar', image: 'https://images.unsplash.com/photo-1628181679930-b4d458703348?q=80&w=1964&auto=format&fit=crop', imageHint: 'Amritsar Golden Temple' },
      { id: '10', name: 'Kedarnath', image: 'https://images.unsplash.com/photo-1621682375895-350742594a97?q=80&w=2070&auto=format&fit=crop', imageHint: 'Kedarnath temple Himalayas' }
    ],
  },
   {
    id: '4',
    slug: 'dwarka',
    name: 'Dwarka',
    description: 'The legendary golden kingdom of Lord Krishna, one of the four sacred Char Dham sites.',
    image: 'https://images.unsplash.com/photo-1603803233814-4e94116c1410?q=80&w=1887&auto=format&fit=crop',
    imageHint: 'Dwarka temple Gujarat',
    slideshowImages: [
        { url: 'https://images.unsplash.com/photo-1603803233814-4e94116c1410?q=80&w=2070&auto=format&fit=crop', hint: 'Dwarkadhish temple sunset' },
        { url: 'https://as2.ftcdn.net/v2/jpg/05/63/12/38/1000_F_563123893_sQPF35Ykjq2UunJmqX2Pj2j2E3E2jl3A.jpg', hint: 'Gomti Ghat Dwarka' },
        { url: 'https://as1.ftcdn.net/v2/jpg/05/63/12/42/1000_F_563124209_ayufXtt5yTj2fjsgP4i3zW44tdGZMYn8.jpg', hint: 'Bet Dwarka island ferry' }
    ],
    history: 'Ancient Dwarka was a prosperous city that is said to have been submerged by the sea. The modern city is a major pilgrimage hub for Vaishnavites.',
    mythology: 'Dwarka is identified with the Dwarka Kingdom, the ancient kingdom of Lord Krishna. He is said to have established this city after leaving Mathura.',
    etiquette: { dressCode: 'Respectful attire is expected in the temples and holy sites.', tips: ['Take a ferry to the island of Bet Dwarka.', 'Visit the Nageshwar Jyotirlinga Temple.', 'The sea can be rough, be cautious near the coast.'] },
    events: [ { date: 'Aug 26, 2024', title: 'Janmashtami', info: 'Celebrations are held at the Dwarkadhish Temple.' } ],
    nearby: [
      { id: '7', name: 'Puri', image: 'https://images.unsplash.com/photo-1588623229896-4806a6435c24?q=80&w=1932&auto=format&fit=crop', imageHint: 'Puri Jagannath temple' },
      { id: '5', name: 'Rameswaram', image: 'https://images.unsplash.com/photo-1691244309849-d7543a758509?q=80&w=2070&auto=format&fit=crop', imageHint: 'Rameswaram temple corridor' },
      { id: '10', name: 'Kedarnath', image: 'https://images.unsplash.com/photo-1621682375895-350742594a97?q=80&w=2070&auto=format&fit=crop', imageHint: 'Kedarnath temple Himalayas' }
    ],
  },
  {
    id: '5',
    slug: 'rameswaram',
    name: 'Rameswaram',
    description: 'A holy island town known for its magnificent Ramanathaswamy Temple with its grand corridors.',
    image: 'https://images.unsplash.com/photo-1691244309849-d7543a758509?q=80&w=1974&auto=format&fit=crop',
    imageHint: 'Rameswaram temple corridor',
    slideshowImages: [
        { url: 'https://images.unsplash.com/photo-1643133277123-8b019ef7b81b?q=80&w=1969&auto=format&fit=crop', hint: 'Ramanathaswamy Temple gopuram' },
        { url: 'https://images.unsplash.com/photo-1605285116843-f458f33b1e32?q=80&w=2070&auto=format&fit=crop', hint: 'Pamban Bridge train' },
        { url: 'https://images.unsplash.com/photo-1628135891392-628b3446abd2?q=80&w=1963&auto=format&fit=crop', hint: 'Dhanushkodi beach ruins' }
    ],
    history: 'Rameswaram has been a pilgrimage center for centuries, with its temple being a fine example of Dravidian architecture.',
    mythology: 'Lord Rama is said to have built a bridge (Rama Setu) from here to Lanka to rescue his wife Sita. He also worshipped Lord Shiva here to atone for killing Ravana.',
    etiquette: { dressCode: 'Modest dress is required for temple entry. Men may need to be bare-chested.', tips: ['Take a holy dip in the Agni Theertham.', 'Walk through the famous temple corridors.', 'Visit the ghost town of Dhanushkodi.'] },
    events: [ { date: 'Feb 26, 2025', title: 'Maha Shivaratri', info: 'A night of prayer and festivities for Lord Shiva.' } ],
    nearby: [
      { id: '8', name: 'Tirupati', image: 'https://images.unsplash.com/photo-1610486161491-5c742514125b?q=80&w=1887&auto=format&fit=crop', imageHint: 'Tirupati temple gopuram' },
      { id: '9', name: 'Amritsar', image: 'https://images.unsplash.com/photo-1628181679930-b4d458703348?q=80&w=1964&auto=format&fit=crop', imageHint: 'Amritsar Golden Temple' },
      { id: '3', name: 'Mathura & Vrindavan', image: 'https://images.unsplash.com/photo-1629683952290-71954c86b62e?q=80&w=1887&auto=format&fit=crop', imageHint: 'Mathura Vrindavan temple' }
    ],
  },
  {
    id: '6',
    slug: 'haridwar-rishikesh',
    name: 'Haridwar & Rishikesh',
    description: 'Twin spiritual towns on the banks of the Ganges, the gateway to the Himalayas.',
    image: 'https://images.unsplash.com/photo-1605839958999-e688784d0383?q=80&w=1887&auto=format&fit=crop',
    imageHint: 'Haridwar Ganges river',
    slideshowImages: [
        { url: 'https://images.unsplash.com/photo-1605839958999-e688784d0383?q=80&w=2070&auto=format&fit=crop', hint: 'Har Ki Pauri evening aarti' },
        { url: 'https://images.unsplash.com/photo-1593782449410-2a912d0bf3da?q=80&w=1974&auto=format&fit=crop', hint: 'Lakshman Jhula bridge Rishikesh' },
        { url: 'https://images.unsplash.com/photo-1588622867041-35b9a4f650de?q=80&w=2070&auto=format&fit=crop', hint: 'Yoga Rishikesh ganges' }
    ],
    history: 'Haridwar and Rishikesh are ancient pilgrimage sites. Haridwar is where the Ganges enters the plains, while Rishikesh is known as the "Yoga Capital of the World".',
    mythology: 'These towns are steeped in Hindu mythology, with numerous temples and ashrams dedicated to various deities. They are the starting point for the Char Dham Yatra of Uttarakhand.',
    etiquette: { dressCode: 'Modest, comfortable clothing suitable for walking and yoga.', tips: ['Attend the Ganga Aarti at Har Ki Pauri.', 'Explore the ashrams of Rishikesh.', 'Try white-water rafting for an adventurous twist.'] },
    events: [ { date: 'April 14, 2025', title: 'Vaisakhi', info: 'Celebrates the solar new year with holy dips in the Ganges.' } ],
    nearby: [
      { id: '1', name: 'Ayodhya', image: 'https://images.unsplash.com/photo-1705703906394-444155106a72?q=80&w=1887&auto=format&fit=crop', imageHint: 'Ayodhya temple India' },
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://images.unsplash.com/photo-1528450393792-28a17688c805?q=80&w=1887&auto=format&fit=crop', imageHint: 'Varanasi ghats India' },
      { id: '3', name: 'Mathura & Vrindavan', image: 'https://images.unsplash.com/photo-1629683952290-71954c86b62e?q=80&w=1887&auto=format&fit=crop', imageHint: 'Mathura Vrindavan temple' }
    ],
  },
  {
    id: '7',
    slug: 'puri',
    name: 'Puri',
    description: 'Home to the Jagannath Temple, famous for its annual Rath Yatra festival.',
    image: 'https://images.unsplash.com/photo-1588623229896-4806a6435c24?q=80&w=1932&auto=format&fit=crop',
    imageHint: 'Puri Jagannath temple',
    slideshowImages: [
        { url: 'https://images.unsplash.com/photo-1588623229896-4806a6435c24?q=80&w=2070&auto=format&fit=crop', hint: 'Rath Yatra Puri festival' },
        { url: 'https://images.unsplash.com/photo-1584914594243-525164a13346?q=80&w=2070&auto=format&fit=crop', hint: 'Puri beach sunset' },
        { url: 'https://images.unsplash.com/photo-1595185934958-552d1192c7a0?q=80&w=2070&auto=format&fit=crop', hint: 'Konark Sun Temple wheel' }
    ],
    history: 'Puri is one of the Char Dham pilgrimage sites. The Jagannath Temple is an architectural marvel and has been a focal point of Hinduism for centuries.',
    mythology: 'The temple is dedicated to Lord Jagannath (a form of Krishna), his brother Balabhadra, and sister Subhadra.',
    etiquette: { dressCode: 'Strict dress code for the temple; non-Hindus are not permitted inside the main sanctum.', tips: ['Witness the grand Rath Yatra if visiting in summer.', 'Relax on the golden sands of Puri Beach.', 'Take a day trip to the Konark Sun Temple.'] },
    events: [ { date: 'July 7, 2024', title: 'Rath Yatra', info: 'The spectacular chariot festival.' } ],
    nearby: [
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://images.unsplash.com/photo-1528450393792-28a17688c805?q=80&w=1887&auto=format&fit=crop', imageHint: 'Varanasi ghats India' },
      { id: '8', name: 'Tirupati', image: 'https://images.unsplash.com/photo-1610486161491-5c742514125b?q=80&w=1887&auto=format&fit=crop', imageHint: 'Tirupati temple gopuram' },
      { id: '5', name: 'Rameswaram', image: 'https://images.unsplash.com/photo-1691244309849-d7543a758509?q=80&w=2070&auto=format&fit=crop', imageHint: 'Rameswaram temple corridor' }
    ],
  },
  {
    id: '8',
    slug: 'tirupati',
    name: 'Tirupati',
    description: 'The abode of Lord Venkateswara, one of the most visited and wealthiest pilgrimage centers.',
    image: 'https://images.unsplash.com/photo-1610486161491-5c742514125b?q=80&w=1887&auto=format&fit=crop',
    imageHint: 'Tirupati temple gopuram',
    slideshowImages: [
        { url: 'https://images.unsplash.com/photo-1610486161491-5c742514125b?q=80&w=2070&auto=format&fit=crop', hint: 'Tirumala hills temple' },
        { url: 'https://as1.ftcdn.net/v2/jpg/02/89/36/55/1000_F_289365545_c2HhV62r78dM6p1z02s6gArzC72w4is9.jpg', hint: 'devotees queue Tirupati' },
        { url: 'https://images.unsplash.com/photo-1610486161491-5c742514125b?q=80&w=2070&auto=format&fit=crop', hint: 'Sri Venkateswara Swamy Vaari Temple' }
    ],
    history: 'The temple\'s origins are ancient, with contributions from various dynasties over centuries. It is a masterpiece of Dravidian architecture.',
    mythology: 'Lord Venkateswara, a form of Vishnu, is believed to have manifested here to save mankind from the trials of the Kali Yuga.',
    etiquette: { dressCode: 'Traditional Indian attire is mandatory (Dhoti for men, Saree/Chudidar for women).', tips: ['Book your darshan (viewing) slot online well in advance.', 'Be prepared for large crowds and long queues.', 'Do not carry leather items or electronic gadgets inside the temple.'] },
    events: [ { date: 'Sept-Oct 2024', title: 'Brahmotsavam', info: 'A nine-day grand festival celebrated with processions.' } ],
    nearby: [
      { id: '5', name: 'Rameswaram', image: 'https://images.unsplash.com/photo-1691244309849-d7543a758509?q=80&w=2070&auto=format&fit=crop', imageHint: 'Rameswaram temple corridor' },
      { id: '9', name: 'Amritsar', image: 'https://images.unsplash.com/photo-1628181679930-b4d458703348?q=80&w=1964&auto=format&fit=crop', imageHint: 'Amritsar Golden Temple' },
      { id: '4', name: 'Dwarka', image: 'https://images.unsplash.com/photo-1603803233814-4e94116c1410?q=80&w=1887&auto=format&fit=crop', imageHint: 'Dwarka temple Gujarat' }
    ],
  },
  {
    id: '9',
    slug: 'amritsar',
    name: 'Amritsar',
    description: 'The spiritual center for Sikhs, home to the magnificent Golden Temple.',
    image: 'https://images.unsplash.com/photo-1628181679930-b4d458703348?q=80&w=1964&auto=format&fit=crop',
    imageHint: 'Amritsar Golden Temple',
    slideshowImages: [
        { url: 'https://images.unsplash.com/photo-1605962451555-b38dc2a45334?q=80&w=1932&auto=format&fit=crop', hint: 'Golden Temple reflection night' },
        { url: 'https://images.unsplash.com/photo-1628181679930-b4d458703348?q=80&w=2070&auto=format&fit=crop', hint: 'Langar Golden Temple community kitchen' },
        { url: 'https://images.unsplash.com/photo-1544718228-55ce1e3f7c46?q=80&w=2070&auto=format&fit=crop', hint: 'Wagah Border ceremony' }
    ],
    history: 'Founded in the 16th century, Amritsar is a city of immense historical and religious importance for Sikhism.',
    mythology: 'The Golden Temple, or Harmandir Sahib, is the holiest gurdwara of Sikhism, symbolizing equality and brotherhood.',
    etiquette: { dressCode: 'Head must be covered for all genders inside the temple complex. Scarves are provided.', tips: ['Partake in the langar (free community meal).', 'Visit the Jallianwala Bagh memorial.', 'Witness the Wagah Border ceremony in the evening.'] },
    events: [ { date: 'April 14, 2025', title: 'Vaisakhi', info: 'Celebrated with great fervor as the founding day of the Khalsa.' } ],
    nearby: [
      { id: '6', name: 'Haridwar & Rishikesh', image: 'https://images.unsplash.com/photo-1605839958999-e688784d0383?q=80&w=1887&auto=format&fit=crop', imageHint: 'Haridwar Ganges river' },
      { id: '10', name: 'Kedarnath', image: 'https://images.unsplash.com/photo-1621682375895-350742594a97?q=80&w=2070&auto=format&fit=crop', imageHint: 'Kedarnath temple Himalayas' },
      { id: '1', name: 'Ayodhya', image: 'https://images.unsplash.com/photo-1705703906394-444155106a72?q=80&w=1887&auto=format&fit=crop', imageHint: 'Ayodhya temple India' }
    ],
  },
  {
    id: '10',
    slug: 'kedarnath',
    name: 'Kedarnath',
    description: 'A majestic Himalayan temple dedicated to Lord Shiva, part of the Char Dham Yatra.',
    image: 'https://images.unsplash.com/photo-1621682375895-350742594a97?q=80&w=1974&auto=format&fit=crop',
    imageHint: 'Kedarnath temple Himalayas',
    slideshowImages: [
        { url: 'https://images.unsplash.com/photo-1621682375895-350742594a97?q=80&w=2070&auto=format&fit=crop', hint: 'Kedarnath temple snow' },
        { url: 'https://images.unsplash.com/photo-1596706240424-c11438345733?q=80&w=2070&auto=format&fit=crop', hint: 'Himalayan mountain peaks' },
        { url: 'https://images.unsplash.com/photo-1664872352102-741c34371994?q=80&w=1932&auto=format&fit=crop', hint: 'pilgrims trekking Kedarnath' }
    ],
    history: 'An ancient temple that has stood for over a thousand years amidst the challenging Himalayan terrain, rebuilt after the 2013 floods.',
    mythology: 'Believed to have been built by the Pandavas to atone for their sins after the Mahabharata war. It is one of the 12 Jyotirlingas.',
    etiquette: { dressCode: 'Warm layered clothing is essential due to the high altitude and cold weather.', tips: ['Acclimatize properly to avoid altitude sickness.', 'The temple is only open for about six months a year (typically Apr-Nov).', 'The journey involves a significant trek; pony and helicopter services are available.'] },
    events: [ { date: 'May 10, 2025 (Tentative)', title: 'Temple Opening', info: 'The ceremonial opening of the temple doors after winter.' } ],
    nearby: [
      { id: '6', name: 'Haridwar & Rishikesh', image: 'https://images.unsplash.com/photo-1605839958999-e688784d0383?q=80&w=1887&auto=format&fit=crop', imageHint: 'Haridwar Ganges river' },
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://images.unsplash.com/photo-1528450393792-28a17688c805?q=80&w=1887&auto=format&fit=crop', imageHint: 'Varanasi ghats India' },
      { id: '1', name: 'Ayodhya', image: 'https://images.unsplash.com/photo-1705703906394-444155106a72?q=80&w=1887&auto=format&fit=crop', imageHint: 'Ayodhya temple India' }
    ],
  },
];


export async function getAllDestinations(): Promise<Destination[]> {
    // No async needed anymore, but we keep the function signature for consistency
    return destinations;
}

export async function getDestinationBySlug(slug: string): Promise<Destination | undefined> {
  // No async needed anymore
  const destination = destinations.find((d) => d.slug === slug);
  return destination;
}

export function getDestinationById(id: string) {
    // This function is used for the "nearby" places cards
    const destination = destinations.find((d) => d.id === id);
    if (!destination) return undefined;

    return {
        id: destination.id,
        slug: destination.slug,
        name: destination.name,
        image: destination.image,
        imageHint: destination.imageHint,
    };
}
