

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
    image: 'https://images.pexels.com/photos/19174983/pexels-photo-19174983/free-photo-of-ayodhya-mandir.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageHint: 'Ayodhya temple', 
    slideshowImages: [
      { url: 'https://images.pexels.com/photos/15787291/pexels-photo-15787291/free-photo-of-the-sarayu-river-in-ayodhya.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Sarayu river' },
      { url: 'https://images.pexels.com/photos/20857500/pexels-photo-20857500/free-photo-of-shri-ram-janmabhoomi-temple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'ram mandir' },
      { url: 'https://images.pexels.com/photos/7978253/pexels-photo-7978253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'holy ghats' },
      { url: 'https://images.pexels.com/photos/7876255/pexels-photo-7876255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'devotees praying' },
      { url: 'https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'hanuman temple' }
    ], 
    history: 'Ayodhya, one of the seven sacred cities of Hinduism, has a rich history dating back to ancient times. It was the capital of the Kosala Kingdom and is deeply intertwined with the epic Ramayana.', 
    mythology: 'According to Hindu mythology, Ayodhya is the birthplace of Lord Rama, the seventh avatar of Vishnu. The city is central to the Ramayana, which narrates his life and journey.', 
    etiquette: { dressCode: 'Modest attire is recommended. Cover shoulders and knees when visiting temples.', tips: ['Remove footwear before entering temples.', 'Respect local customs and traditions.', 'Photography may be restricted in some areas.'] }, 
    events: [ { date: 'Apr 17, 2025', title: 'Ram Navami', info: 'Grand celebrations for Lord Rama\'s birthday.' }, { date: 'Nov 1, 2024', title: 'Deepotsav', info: 'A spectacular festival of lights.' } ], 
    nearby: [ 
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://images.pexels.com/photos/3889926/pexels-photo-3889926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Varanasi ghats' }, 
      { id: '3', name: 'Mathura & Vrindavan', image: 'https://images.pexels.com/photos/11990492/pexels-photo-11990492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Mathura temple' }, 
      { id: '6', name: 'Haridwar & Rishikesh', image: 'https://images.pexels.com/photos/7912497/pexels-photo-7912497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Haridwar river' } 
    ] 
  },
  { 
    id: '2', 
    slug: 'kashi', 
    name: 'Kashi (Varanasi)', 
    description: 'The spiritual capital of India, a mystical city of ghats, ancient temples, and moksha.', 
    image: 'https://images.pexels.com/photos/2099393/pexels-photo-2099393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageHint: 'Varanasi Ganges', 
    slideshowImages: [
      { url: 'https://images.pexels.com/photos/3572719/pexels-photo-3572719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Varanasi aarti' },
      { url: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'sadhu meditating' },
      { url: 'https://images.pexels.com/photos/3889926/pexels-photo-3889926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Varanasi city' },
      { url: 'https://images.pexels.com/photos/2437933/pexels-photo-2437933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'boats ganges' },
      { url: 'https://images.pexels.com/photos/10839930/pexels-photo-10839930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Kashi temple' }
    ], 
    history: 'Kashi, also known as Varanasi, is one of the oldest living cities in the world. It has been a center of learning, philosophy, and spirituality for thousands of years.', 
    mythology: 'It is believed that Kashi was founded by Lord Shiva. Hindus believe that dying in Kashi brings salvation (moksha), making it a major pilgrimage site.', 
    etiquette: { dressCode: 'Conservative clothing is advised, especially around religious sites.', tips: ['Be mindful of the funeral ceremonies at the burning ghats.', 'Bargaining is common in markets.', 'A boat ride on the Ganges at dawn is a must-do.'] }, 
    events: [ { date: 'Mar 7, 2025', title: 'Maha Shivaratri', info: 'A major festival dedicated to Lord Shiva.' }, { date: 'Nov 15, 2024', title: 'Dev Deepawali', info: 'The festival of lights of the gods.' } ], 
    nearby: [ 
      { id: '1', name: 'Ayodhya', image: 'https://images.pexels.com/photos/19174983/pexels-photo-19174983/free-photo-of-ayodhya-mandir.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Ayodhya Ram Mandir' }, 
      { id: '7', name: 'Puri', image: 'https://images.pexels.com/photos/12842918/pexels-photo-12842918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Puri Jagannath temple' }, 
      { id: '8', name: 'Tirupati', image: 'https://images.pexels.com/photos/14849281/pexels-photo-14849281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Tirupati Hindu temple' } 
    ] 
  },
  { 
    id: '3', 
    slug: 'mathura-vrindavan', 
    name: 'Mathura & Vrindavan', 
    description: 'The vibrant twin holy towns, the birthplace and childhood home of Lord Krishna.', 
    image: 'https://images.pexels.com/photos/11990492/pexels-photo-11990492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageHint: 'Mathura Krishna temple', 
    slideshowImages: [
      { url: 'https://images.pexels.com/photos/10502497/pexels-photo-10502497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Holi festival' },
      { url: 'https://images.pexels.com/photos/8142436/pexels-photo-8142436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Krishna idol' },
      { url: 'https://images.pexels.com/photos/11990487/pexels-photo-11990487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'ISKCON temple' },
      { url: 'https://images.pexels.com/photos/15187332/pexels-photo-15187332/free-photo-of-banke-bihari-temple-in-vrindavan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Banke Bihari Temple' },
      { url: 'https://images.pexels.com/photos/11990492/pexels-photo-11990492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Prem Mandir' }
    ], 
    history: 'Mathura is an ancient city with a history that spans millennia. It has been an important center for art, culture, and religion, particularly Vaishnavism.', 
    mythology: 'Mathura is revered as the birthplace of Lord Krishna. The nearby town of Vrindavan is where he is said to have spent his childhood, filled with divine tales and leelas.', 
    etiquette: { dressCode: 'Wear comfortable and modest clothes. Bright colors are common during festivals.', tips: ['Be cautious of monkeys in temple areas.', 'Try the local specialty, "Mathura peda".', 'Participate in the joyous Holi celebrations if visiting in spring.'] }, 
    events: [ { date: 'Aug 26, 2024', title: 'Krishna Janmashtami', info: 'Elaborate festival celebrating Krishna\'s birth.' }, { date: 'Mar 14, 2025', title: 'Holi', info: 'The famous festival of colors is celebrated with great zeal.' } ], 
    nearby: [ 
      { id: '1', name: 'Ayodhya', image: 'https://images.pexels.com/photos/19174983/pexels-photo-19174983/free-photo-of-ayodhya-mandir.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Ayodhya historic temple' }, 
      { id: '9', name: 'Amritsar', image: 'https://images.pexels.com/photos/3569744/pexels-photo-3569744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Amritsar Golden Temple' }, 
      { id: '10', name: 'Kedarnath', image: 'https://images.pexels.com/photos/14833292/pexels-photo-14833292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Kedarnath Himalayas' } 
    ] 
  },
  { 
    id: '4', 
    slug: 'dwarka', 
    name: 'Dwarka', 
    description: 'The legendary golden kingdom of Lord Krishna, one of the four sacred Char Dham sites.', 
    image: 'https://images.pexels.com/photos/10184838/pexels-photo-10184838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageHint: 'Dwarka temple', 
    slideshowImages: [
      { url: 'https://images.pexels.com/photos/10184838/pexels-photo-10184838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Dwarkadhish temple' },
      { url: 'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Dwarka sea' },
      { url: 'https://images.pexels.com/photos/12399047/pexels-photo-12399047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Gomti ghat' },
      { url: 'https://images.pexels.com/photos/16843478/pexels-photo-16843478/free-photo-of-sudama-setu-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Sudama Setu bridge' },
      { url: 'https://images.pexels.com/photos/18285166/pexels-photo-18285166/free-photo-of-a-hindu-temple-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Bet Dwarka' }
    ], 
    history: 'Ancient Dwarka was a prosperous city that is said to have been submerged by the sea. The modern city is a major pilgrimage hub for Vaishnavites.', 
    mythology: 'Dwarka is identified with the Dwarka Kingdom, the ancient kingdom of Lord Krishna. He is said to have established this city after leaving Mathura.', 
    etiquette: { dressCode: 'Respectful attire is expected in the temples and holy sites.', tips: ['Take a ferry to the island of Bet Dwarka.', 'Visit the Nageshwar Jyotirlinga Temple.', 'The sea can be rough, be cautious near the coast.'] }, 
    events: [ { date: 'Aug 26, 2024', title: 'Janmashtami', info: 'Celebrations are held at the Dwarkadhish Temple.' } ], 
    nearby: [ 
      { id: '7', name: 'Puri', image: 'https://images.pexels.com/photos/12842918/pexels-photo-12842918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Puri chariot' }, 
      { id: '5', name: 'Rameswaram', image: 'https://images.pexels.com/photos/12842928/pexels-photo-12842928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Rameswaram temple' }, 
      { id: '10', name: 'Kedarnath', image: 'https://images.pexels.com/photos/14833292/pexels-photo-14833292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Kedarnath peak' } 
    ] 
  },
  { 
    id: '5', 
    slug: 'rameswaram', 
    name: 'Rameswaram', 
    description: 'A holy island town known for its magnificent Ramanathaswamy Temple with its grand corridors.', 
    image: 'https://images.pexels.com/photos/12842928/pexels-photo-12842928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageHint: 'Rameswaram temple', 
    slideshowImages: [
      { url: 'https://images.pexels.com/photos/712319/pexels-photo-712319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Pamban bridge' },
      { url: 'https://images.pexels.com/photos/12842928/pexels-photo-12842928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'temple corridor' },
      { url: 'https://images.pexels.com/photos/1587843/pexels-photo-1587843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Dhanushkodi beach' },
      { url: 'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'holy water' },
      { url: 'https://images.pexels.com/photos/10170068/pexels-photo-10170068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Rama Setu' }
    ], 
    history: 'Rameswaram has been a pilgrimage center for centuries, with its temple being a fine example of Dravidian architecture.', 
    mythology: 'Lord Rama is said to have built a bridge (Rama Setu) from here to Lanka to rescue his wife Sita. He also worshipped Lord Shiva here to atone for killing Ravana.', 
    etiquette: { dressCode: 'Modest dress is required for temple entry. Men may need to be bare-chested.', tips: ['Take a holy dip in the Agni Theertham.', 'Walk through the famous temple corridors.', 'Visit the ghost town of Dhanushkodi.'] }, 
    events: [ { date: 'Feb 26, 2025', title: 'Maha Shivaratri', info: 'A night of prayer and festivities for Lord Shiva.' } ], 
    nearby: [ 
      { id: '8', name: 'Tirupati', image: 'https://images.pexels.com/photos/14849281/pexels-photo-14849281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Tirupati hills' }, 
      { id: '9', name: 'Amritsar', image: 'https://images.pexels.com/photos/3569744/pexels-photo-3569744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Golden Temple' }, 
      { id: '3', name: 'Mathura & Vrindavan', image: 'https://images.pexels.com/photos/11990492/pexels-photo-11990492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Prem Mandir' } 
    ] 
  },
  { 
    id: '6', 
    slug: 'haridwar-rishikesh', 
    name: 'Haridwar & Rishikesh', 
    description: 'Twin spiritual towns on the banks of the Ganges, the gateway to the Himalayas.', 
    image: 'https://images.pexels.com/photos/225017/pexels-photo-225017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageHint: 'Haridwar Ganges', 
    slideshowImages: [
      { url: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'yoga meditation' },
      { url: 'https://images.pexels.com/photos/7912497/pexels-photo-7912497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Ganga aarti' },
      { url: 'https://images.pexels.com/photos/2422572/pexels-photo-2422572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Lakshman Jhula' },
      { url: 'https://images.pexels.com/photos/13101150/pexels-photo-13101150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Har Ki Pauri' },
      { url: 'https://images.pexels.com/photos/8439167/pexels-photo-8439167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'river rafting' }
    ], 
    history: 'Haridwar and Rishikesh are ancient pilgrimage sites. Haridwar is where the Ganges enters the plains, while Rishikesh is known as the "Yoga Capital of the World".', 
    mythology: 'These towns are steeped in Hindu mythology, with numerous temples and ashrams dedicated to various deities. They are the starting point for the Char Dham Yatra of Uttarakhand.', 
    etiquette: { dressCode: 'Modest, comfortable clothing suitable for walking and yoga.', tips: ['Attend the Ganga Aarti at Har Ki Pauri.', 'Explore the ashrams of Rishikesh.', 'Try white-water rafting for an adventurous twist.'] }, 
    events: [ { date: 'April 14, 2025', title: 'Vaisakhi', info: 'Celebrates the solar new year with holy dips in the Ganges.' } ], 
    nearby: [ 
      { id: '1', name: 'Ayodhya', image: 'https://images.pexels.com/photos/19174983/pexels-photo-19174983/free-photo-of-ayodhya-mandir.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Sarayu river' }, 
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://images.pexels.com/photos/3889926/pexels-photo-3889926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Varanasi ghats' }, 
      { id: '3', name: 'Mathura & Vrindavan', image: 'https://images.pexels.com/photos/11990492/pexels-photo-11990492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Vrindavan temple' } 
    ] 
  },
  { 
    id: '7', 
    slug: 'puri', 
    name: 'Puri', 
    description: 'Home to the Jagannath Temple, famous for its annual Rath Yatra festival.', 
    image: 'https://images.pexels.com/photos/12842918/pexels-photo-12842918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageHint: 'Puri Rath Yatra', 
    slideshowImages: [
      { url: 'https://images.pexels.com/photos/12842918/pexels-photo-12842918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Rath Yatra chariot' },
      { url: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'sandy beach' },
      { url: 'https://images.pexels.com/photos/2404432/pexels-photo-2404432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Konark Sun temple' },
      { url: 'https://images.pexels.com/photos/11833446/pexels-photo-11833446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Jagannath temple' },
      { url: 'https://images.pexels.com/photos/1560065/pexels-photo-1560065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'beach sunset' }
    ], 
    history: 'Puri is one of the Char Dham pilgrimage sites. The Jagannath Temple is an architectural marvel and has been a focal point of Hinduism for centuries.', 
    mythology: 'The temple is dedicated to Lord Jagannath (a form of Krishna), his brother Balabhadra, and sister Subhadra.', 
    etiquette: { dressCode: 'Strict dress code for the temple; non-Hindus are not permitted inside the main sanctum.', tips: ['Witness the grand Rath Yatra if visiting in summer.', 'Relax on the golden sands of Puri Beach.', 'Take a day trip to the Konark Sun Temple.'] }, 
    events: [ { date: 'July 7, 2024', title: 'Rath Yatra', info: 'The spectacular chariot festival.' } ], 
    nearby: [ 
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://images.pexels.com/photos/2099393/pexels-photo-2099393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Varanasi cityscape' }, 
      { id: '8', name: 'Tirupati', image: 'https://images.pexels.com/photos/14849281/pexels-photo-14849281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Tirupati hill' }, 
      { id: '5', name: 'Rameswaram', image: 'https://images.pexels.com/photos/12842928/pexels-photo-12842928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Rameswaram temple' } 
    ] 
  },
  { 
    id: '8', 
    slug: 'tirupati', 
    name: 'Tirupati', 
    description: 'The abode of Lord Venkateswara, one of the most visited and wealthiest pilgrimage centers.', 
    image: 'https://images.pexels.com/photos/14849281/pexels-photo-14849281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageHint: 'Tirupati gopuram', 
    slideshowImages: [
      { url: 'https://images.pexels.com/photos/14849281/pexels-photo-14849281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Tirumala hills' },
      { url: 'https://images.pexels.com/photos/7846337/pexels-photo-7846337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Dravidian architecture' },
      { url: 'https://images.pexels.com/photos/11990497/pexels-photo-11990497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Venkateswara idol' },
      { url: 'https://images.pexels.com/photos/7876255/pexels-photo-7876255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'pilgrims' },
      { url: 'https://images.pexels.com/photos/18979450/pexels-photo-18979450/free-photo-of-tirumala-devastanam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'temple at night' }
    ], 
    history: 'The temple\'s origins are ancient, with contributions from various dynasties over centuries. It is a masterpiece of Dravidian architecture.', 
    mythology: 'Lord Venkateswara, a form of Vishnu, is believed to have manifested here to save mankind from the trials of the Kali Yuga.', 
    etiquette: { dressCode: 'Traditional Indian attire is mandatory (Dhoti for men, Saree/Chudidar for women).', tips: ['Book your darshan (viewing) slot online well in advance.', 'Be prepared for large crowds and long queues.', 'Do not carry leather items or electronic gadgets inside the temple.'] }, 
    events: [ { date: 'Sept-Oct 2024', title: 'Brahmotsavam', info: 'A nine-day grand festival celebrated with processions.' } ], 
    nearby: [ 
      { id: '5', name: 'Rameswaram', image: 'https://images.pexels.com/photos/12842928/pexels-photo-12842928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Pamban bridge' }, 
      { id: '9', name: 'Amritsar', image: 'https://images.pexels.com/photos/3569744/pexels-photo-3569744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Harmandir Sahib' }, 
      { id: '4', name: 'Dwarka', image: 'https://images.pexels.com/photos/10184838/pexels-photo-10184838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Krishna temple' } 
    ] 
  },
  { 
    id: '9', 
    slug: 'amritsar', 
    name: 'Amritsar', 
    description: 'The spiritual center for Sikhs, home to the magnificent Golden Temple.', 
    image: 'https://images.pexels.com/photos/3569744/pexels-photo-3569744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageHint: 'Golden Temple', 
    slideshowImages: [
      { url: 'https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Golden Temple night' },
      { url: 'https://images.pexels.com/photos/1614053/pexels-photo-1614053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Wagah border' },
      { url: 'https://images.pexels.com/photos/11553535/pexels-photo-11553535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'temple kitchen' },
      { url: 'https://images.pexels.com/photos/9871542/pexels-photo-9871542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Jallianwala Bagh' },
      { url: 'https://images.pexels.com/photos/2774433/pexels-photo-2774433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Sikh pilgrims' }
    ], 
    history: 'Founded in the 16th century, Amritsar is a city of immense historical and religious importance for Sikhism.', 
    mythology: 'The Golden Temple, or Harmandir Sahib, is the holiest gurdwara of Sikhism, symbolizing equality and brotherhood.', 
    etiquette: { dressCode: 'Head must be covered for all genders inside the temple complex. Scarves are provided.', tips: ['Partake in the langar (free community meal).', 'Visit the Jallianwala Bagh memorial.', 'Witness the Wagah Border ceremony in the evening.'] }, 
    events: [ { date: 'April 14, 2025', title: 'Vaisakhi', info: 'Celebrated with great fervor as the founding day of the Khalsa.' } ], 
    nearby: [ 
      { id: '6', name: 'Haridwar & Rishikesh', image: 'https://images.pexels.com/photos/225017/pexels-photo-225017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Ganges river' }, 
      { id: '10', name: 'Kedarnath', image: 'https://images.pexels.com/photos/14833292/pexels-photo-14833292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'snowy Himalayas' }, 
      { id: '1', name: 'Ayodhya', image: 'https://images.pexels.com/photos/19174983/pexels-photo-19174983/free-photo-of-ayodhya-mandir.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'ancient city' } 
    ] 
  },
  { 
    id: '10', 
    slug: 'kedarnath', 
    name: 'Kedarnath', 
    description: 'A majestic Himalayan temple dedicated to Lord Shiva, part of the Char Dham Yatra.', 
    image: 'https://images.pexels.com/photos/14833292/pexels-photo-14833292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageHint: 'Himalayan temple', 
    slideshowImages: [
      { url: 'https://images.pexels.com/photos/4020215/pexels-photo-4020215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'mountain valley' },
      { url: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'snow peaks' },
      { url: 'https://images.pexels.com/photos/14833292/pexels-photo-14833292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Shiva temple' },
      { url: 'https://images.pexels.com/photos/11051699/pexels-photo-11051699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'Vasuki Tal' },
      { url: 'https://images.pexels.com/photos/7133099/pexels-photo-7133099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', hint: 'pilgrimage trek' }
    ], 
    history: 'An ancient temple that has stood for over a thousand years amidst the challenging Himalayan terrain, rebuilt after the 2013 floods.', 
    mythology: 'Believed to have been built by the Pandavas to atone for their sins after the Mahabharata war. It is one of the 12 Jyotirlingas.', 
    etiquette: { dressCode: 'Warm layered clothing is essential due to the high altitude and cold weather.', tips: ['Acclimatize properly to avoid altitude sickness.', 'The temple is only open for about six months a year (typically Apr-Nov).', 'The journey involves a significant trek; pony and helicopter services are available.'] }, 
    events: [ { date: 'May 10, 2025 (Tentative)', title: 'Temple Opening', info: 'The ceremonial opening of the temple doors after winter.' } ], 
    nearby: [ 
      { id: '6', name: 'Haridwar & Rishikesh', image: 'https://images.pexels.com/photos/7912497/pexels-photo-7912497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Haridwar Aarti' }, 
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://images.pexels.com/photos/3889926/pexels-photo-3889926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Varanasi city' }, 
      { id: '1', name: 'Ayodhya', image: 'https://images.pexels.com/photos/19174983/pexels-photo-19174983/free-photo-of-ayodhya-mandir.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', imageHint: 'Ram Mandir' } 
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

    