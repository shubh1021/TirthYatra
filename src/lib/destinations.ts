

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
    image: 'https://cdn.pixabay.com/photo/2024/02/19/13/46/ai-generated-8583933_1280.jpg',
    imageHint: 'Ayodhya Ram Mandir', 
    slideshowImages: [
      { url: 'https://cdn.pixabay.com/photo/2021/11/02/18/25/river-6764268_1280.jpg', hint: 'Sarayu river ayodhya' },
      { url: 'https://cdn.pixabay.com/photo/2024/02/19/13/46/ai-generated-8583933_1280.jpg', hint: 'Ram Mandir evening' },
      { url: 'https://cdn.pixabay.com/photo/2022/01/06/18/22/hindu-6919934_1280.jpg', hint: 'holy ghats india' },
      { url: 'https://cdn.pixabay.com/photo/2021/08/04/18/12/temple-6523032_1280.jpg', hint: 'devotees praying' },
      { url: 'https://cdn.pixabay.com/photo/2022/03/01/13/20/temple-7041183_1280.jpg', hint: 'Hanuman Garhi temple' }
    ], 
    history: 'Ayodhya, one of the seven sacred cities of Hinduism, has a rich history dating back to ancient times. It was the capital of the Kosala Kingdom and is deeply intertwined with the epic Ramayana.', 
    mythology: 'According to Hindu mythology, Ayodhya is the birthplace of Lord Rama, the seventh avatar of Vishnu. The city is central to the Ramayana, which narrates his life and journey.', 
    etiquette: { dressCode: 'Modest attire is recommended. Cover shoulders and knees when visiting temples.', tips: ['Remove footwear before entering temples.', 'Respect local customs and traditions.', 'Photography may be restricted in some areas.'] }, 
    events: [ { date: 'Apr 17, 2025', title: 'Ram Navami', info: 'Grand celebrations for Lord Rama\'s birthday.' }, { date: 'Nov 1, 2024', title: 'Deepotsav', info: 'A spectacular festival of lights.' } ], 
    nearby: [ 
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://cdn.pixabay.com/photo/2015/03/17/20/12/varanasi-678652_1280.jpg', imageHint: 'Varanasi ghats' }, 
      { id: '3', name: 'Mathura & Vrindavan', image: 'https://cdn.pixabay.com/photo/2021/08/29/18/31/temple-6584285_1280.jpg', imageHint: 'Mathura temple' }, 
      { id: '6', name: 'Haridwar & Rishikesh', image: 'https://cdn.pixabay.com/photo/2020/06/07/19/33/haridwar-5272197_1280.jpg', imageHint: 'Haridwar river' } 
    ] 
  },
  { 
    id: '2', 
    slug: 'kashi', 
    name: 'Kashi (Varanasi)', 
    description: 'The spiritual capital of India, a mystical city of ghats, ancient temples, and moksha.', 
    image: 'https://cdn.pixabay.com/photo/2017/04/10/22/07/varanasi-2219439_1280.jpg',
    imageHint: 'Varanasi Ganga Aarti', 
    slideshowImages: [
      { url: 'https://cdn.pixabay.com/photo/2017/12/28/23/34/varanasi-3046836_1280.jpg', hint: 'sadhu meditating varanasi' },
      { url: 'https://cdn.pixabay.com/photo/2015/03/17/20/12/varanasi-678652_1280.jpg', hint: 'Varanasi city ghats' },
      { url: 'https://cdn.pixabay.com/photo/2016/11/18/17/25/asia-1835882_1280.jpg', hint: 'boats on ganges' },
      { url: 'https://cdn.pixabay.com/photo/2020/01/10/11/25/temple-4754605_1280.jpg', hint: 'Kashi Vishwanath Temple' }
    ], 
    history: 'Kashi, also known as Varanasi, is one of the oldest living cities in the world. It has been a center of learning, philosophy, and spirituality for thousands of years.', 
    mythology: 'It is believed that Kashi was founded by Lord Shiva. Hindus believe that dying in Kashi brings salvation (moksha), making it a major pilgrimage site.', 
    etiquette: { dressCode: 'Conservative clothing is advised, especially around religious sites.', tips: ['Be mindful of the funeral ceremonies at the burning ghats.', 'Bargaining is common in markets.', 'A boat ride on the Ganges at dawn is a must-do.'] }, 
    events: [ { date: 'Mar 7, 2025', title: 'Maha Shivaratri', info: 'A major festival dedicated to Lord Shiva.' }, { date: 'Nov 15, 2024', title: 'Dev Deepawali', info: 'The festival of lights of the gods.' } ], 
    nearby: [ 
      { id: '1', name: 'Ayodhya', image: 'https://cdn.pixabay.com/photo/2024/02/19/13/46/ai-generated-8583933_1280.jpg', imageHint: 'Ayodhya Ram Mandir' }, 
      { id: '7', name: 'Puri', image: 'https://cdn.pixabay.com/photo/2022/09/25/08/59/jagannath-temple-7478051_1280.jpg', imageHint: 'Puri Jagannath temple' }, 
      { id: '8', name: 'Tirupati', image: 'https://cdn.pixabay.com/photo/2022/10/01/15/22/tirmula-7491752_1280.jpg', imageHint: 'Tirupati Hindu temple' } 
    ] 
  },
  { 
    id: '3', 
    slug: 'mathura-vrindavan', 
    name: 'Mathura & Vrindavan', 
    description: 'The vibrant twin holy towns, the birthplace and childhood home of Lord Krishna.', 
    image: 'https://cdn.pixabay.com/photo/2021/08/29/18/31/temple-6584285_1280.jpg',
    imageHint: 'Prem Mandir Vrindavan', 
    slideshowImages: [
      { url: 'https://cdn.pixabay.com/photo/2020/03/10/14/23/festival-4919102_1280.jpg', hint: 'Holi festival india' },
      { url: 'https://cdn.pixabay.com/photo/2019/08/25/11/49/radha-govind-dev-ji-4429352_1280.jpg', hint: 'Krishna idol statue' },
      { url: 'https://cdn.pixabay.com/photo/2021/08/29/18/31/temple-6584285_1280.jpg', hint: 'ISKCON temple vrindavan' },
      { url: 'https://cdn.pixabay.com/photo/2023/03/24/18/35/street-7874677_1280.jpg', hint: 'Banke Bihari Temple' }
    ], 
    history: 'Mathura is an ancient city with a history that spans millennia. It has been an important center for art, culture, and religion, particularly Vaishnavism.', 
    mythology: 'Mathura is revered as the birthplace of Lord Krishna. The nearby town of Vrindavan is where he is said to have spent his childhood, filled with divine tales and leelas.', 
    etiquette: { dressCode: 'Wear comfortable and modest clothes. Bright colors are common during festivals.', tips: ['Be cautious of monkeys in temple areas.', 'Try the local specialty, "Mathura peda".', 'Participate in the joyous Holi celebrations if visiting in spring.'] }, 
    events: [ { date: 'Aug 26, 2024', title: 'Krishna Janmashtami', info: 'Elaborate festival celebrating Krishna\'s birth.' }, { date: 'Mar 14, 2025', title: 'Holi', info: 'The famous festival of colors is celebrated with great zeal.' } ], 
    nearby: [ 
      { id: '1', name: 'Ayodhya', image: 'https://cdn.pixabay.com/photo/2024/02/19/13/46/ai-generated-8583933_1280.jpg', imageHint: 'Ayodhya historic temple' }, 
      { id: '9', name: 'Amritsar', image: 'https://cdn.pixabay.com/photo/2019/10/21/20/47/golden-temple-4567204_1280.jpg', imageHint: 'Amritsar Golden Temple' }, 
      { id: '10', name: 'Kedarnath', image: 'https://cdn.pixabay.com/photo/2022/11/11/13/21/kedarnath-7585011_1280.jpg', imageHint: 'Kedarnath Himalayas' } 
    ] 
  },
  { 
    id: '4', 
    slug: 'dwarka', 
    name: 'Dwarka', 
    description: 'The legendary golden kingdom of Lord Krishna, one of the four sacred Char Dham sites.', 
    image: 'https://cdn.pixabay.com/photo/2021/11/02/00/49/dwarka-6762332_1280.jpg',
    imageHint: 'Dwarkadhish temple', 
    slideshowImages: [
      { url: 'https://cdn.pixabay.com/photo/2016/01/16/18/43/dwarka-1143891_1280.jpg', hint: 'Dwarka temple sea' },
      { url: 'https://cdn.pixabay.com/photo/2021/11/02/00/49/dwarka-6762332_1280.jpg', hint: 'Gomti ghat dwarka' },
      { url: 'https://cdn.pixabay.com/photo/2017/01/29/15/34/dwarka-2018318_1280.jpg', hint: 'Sudama Setu bridge' }
    ], 
    history: 'Ancient Dwarka was a prosperous city that is said to have been submerged by the sea. The modern city is a major pilgrimage hub for Vaishnavites.', 
    mythology: 'Dwarka is identified with the Dwarka Kingdom, the ancient kingdom of Lord Krishna. He is said to have established this city after leaving Mathura.', 
    etiquette: { dressCode: 'Respectful attire is expected in the temples and holy sites.', tips: ['Take a ferry to the island of Bet Dwarka.', 'Visit the Nageshwar Jyotirlinga Temple.', 'The sea can be rough, be cautious near the coast.'] }, 
    events: [ { date: 'Aug 26, 2024', title: 'Janmashtami', info: 'Celebrations are held at the Dwarkadhish Temple.' } ], 
    nearby: [ 
      { id: '7', name: 'Puri', image: 'https://cdn.pixabay.com/photo/2022/09/25/08/59/jagannath-temple-7478051_1280.jpg', imageHint: 'Puri chariot' }, 
      { id: '5', name: 'Rameswaram', image: 'https://cdn.pixabay.com/photo/2017/01/11/15/06/pamban-bridge-1971796_1280.jpg', imageHint: 'Rameswaram Pamban Bridge' }, 
      { id: '10', name: 'Kedarnath', image: 'https://cdn.pixabay.com/photo/2022/11/11/13/21/kedarnath-7585011_1280.jpg', imageHint: 'Kedarnath temple peak' } 
    ] 
  },
  { 
    id: '5', 
    slug: 'rameswaram', 
    name: 'Rameswaram', 
    description: 'A holy island town known for its magnificent Ramanathaswamy Temple with its grand corridors.', 
    image: 'https://cdn.pixabay.com/photo/2015/09/01/12/58/pamban-bridge-916891_1280.jpg',
    imageHint: 'Rameswaram temple corridor', 
    slideshowImages: [
      { url: 'https://cdn.pixabay.com/photo/2017/01/11/15/06/pamban-bridge-1971796_1280.jpg', hint: 'Pamban bridge rameswaram' },
      { url: 'https://cdn.pixabay.com/photo/2018/04/24/16/48/dhanushkodi-3347589_1280.jpg', hint: 'Dhanushkodi beach ruins' },
      { url: 'https://cdn.pixabay.com/photo/2021/07/26/18/25/temple-6495213_1280.jpg', hint: 'holy water ritual' },
      { url: 'https://cdn.pixabay.com/photo/2017/01/11/15/06/pamban-bridge-1971796_1280.jpg', hint: 'Adam\'s Bridge Rama Setu' }
    ], 
    history: 'Rameswaram has been a pilgrimage center for centuries, with its temple being a fine example of Dravidian architecture.', 
    mythology: 'Lord Rama is said to have built a bridge (Rama Setu) from here to Lanka to rescue his wife Sita. He also worshipped Lord Shiva here to atone for killing Ravana.', 
    etiquette: { dressCode: 'Modest dress is required for temple entry. Men may need to be bare-chested.', tips: ['Take a holy dip in the Agni Theertham.', 'Walk through the famous temple corridors.', 'Visit the ghost town of Dhanushkodi.'] }, 
    events: [ { date: 'Feb 26, 2025', title: 'Maha Shivaratri', info: 'A night of prayer and festivities for Lord Shiva.' } ], 
    nearby: [ 
      { id: '8', name: 'Tirupati', image: 'https://cdn.pixabay.com/photo/2022/10/01/15/22/tirmula-7491752_1280.jpg', imageHint: 'Tirupati hills temple' }, 
      { id: '9', name: 'Amritsar', image: 'https://cdn.pixabay.com/photo/2019/10/21/20/47/golden-temple-4567204_1280.jpg', imageHint: 'Golden Temple night' }, 
      { id: '3', name: 'Mathura & Vrindavan', image: 'https://cdn.pixabay.com/photo/2021/08/29/18/31/temple-6584285_1280.jpg', imageHint: 'Prem Mandir lights' } 
    ] 
  },
  { 
    id: '6', 
    slug: 'haridwar-rishikesh', 
    name: 'Haridwar & Rishikesh', 
    description: 'Twin spiritual towns on the banks of the Ganges, the gateway to the Himalayas.', 
    image: 'https://cdn.pixabay.com/photo/2020/06/07/19/33/haridwar-5272197_1280.jpg',
    imageHint: 'Haridwar Ganga Aarti', 
    slideshowImages: [
      { url: 'https://cdn.pixabay.com/photo/2020/02/09/11/49/rishikesh-4832341_1280.jpg', hint: 'yoga meditation rishikesh' },
      { url: 'https://cdn.pixabay.com/photo/2020/05/17/14/08/laxman-jhula-5181775_1280.jpg', hint: 'Lakshman Jhula bridge' },
      { url: 'https://cdn.pixabay.com/photo/2020/06/07/19/33/haridwar-5272197_1280.jpg', hint: 'Har Ki Pauri haridwar' },
      { url: 'https://cdn.pixabay.com/photo/2016/07/22/16/32/ganges-1535402_1280.jpg', hint: 'Rishikesh river view' }
    ], 
    history: 'Haridwar and Rishikesh are ancient pilgrimage sites. Haridwar is where the Ganges enters the plains, while Rishikesh is known as the "Yoga Capital of the World".', 
    mythology: 'These towns are steeped in Hindu mythology, with numerous temples and ashrams dedicated to various deities. They are the starting point for the Char Dham Yatra of Uttarakhand.', 
    etiquette: { dressCode: 'Modest, comfortable clothing suitable for walking and yoga.', tips: ['Attend the Ganga Aarti at Har Ki Pauri.', 'Explore the ashrams of Rishikesh.', 'Try white-water rafting for an adventurous twist.'] }, 
    events: [ { date: 'April 14, 2025', title: 'Vaisakhi', info: 'Celebrates the solar new year with holy dips in the Ganges.' } ], 
    nearby: [ 
      { id: '1', name: 'Ayodhya', image: 'https://cdn.pixabay.com/photo/2024/02/19/13/46/ai-generated-8583933_1280.jpg', imageHint: 'Ayodhya Sarayu river' }, 
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://cdn.pixabay.com/photo/2017/04/10/22/07/varanasi-2219439_1280.jpg', imageHint: 'Varanasi ghats ritual' }, 
      { id: '3', name: 'Mathura & Vrindavan', image: 'https://cdn.pixabay.com/photo/2021/08/29/18/31/temple-6584285_1280.jpg', imageHint: 'Vrindavan temple india' } 
    ] 
  },
  { 
    id: '7', 
    slug: 'puri', 
    name: 'Puri', 
    description: 'Home to the Jagannath Temple, famous for its annual Rath Yatra festival.', 
    image: 'https://cdn.pixabay.com/photo/2022/09/25/08/59/jagannath-temple-7478051_1280.jpg',
    imageHint: 'Puri Rath Yatra chariot', 
    slideshowImages: [
      { url: 'https://cdn.pixabay.com/photo/2021/02/11/19/08/temple-6005785_1280.jpg', hint: 'Jagannath temple puri' },
      { url: 'https://cdn.pixabay.com/photo/2017/04/09/17/40/konark-sun-temple-2216231_1280.jpg', hint: 'Konark Sun temple odisha' },
      { url: 'https://cdn.pixabay.com/photo/2017/01/18/17/45/sea-1990269_1280.jpg', hint: 'puri beach sunset' }
    ], 
    history: 'Puri is one of the Char Dham pilgrimage sites. The Jagannath Temple is an architectural marvel and has been a focal point of Hinduism for centuries.', 
    mythology: 'The temple is dedicated to Lord Jagannath (a form of Krishna), his brother Balabhadra, and sister Subhadra.', 
    etiquette: { dressCode: 'Strict dress code for the temple; non-Hindus are not permitted inside the main sanctum.', tips: ['Witness the grand Rath Yatra if visiting in summer.', 'Relax on the golden sands of Puri Beach.', 'Take a day trip to the Konark Sun Temple.'] }, 
    events: [ { date: 'July 7, 2024', title: 'Rath Yatra', info: 'The spectacular chariot festival.' } ], 
    nearby: [ 
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://cdn.pixabay.com/photo/2017/04/10/22/07/varanasi-2219439_1280.jpg', imageHint: 'Varanasi city aarti' }, 
      { id: '8', name: 'Tirupati', image: 'https://cdn.pixabay.com/photo/2022/10/01/15/22/tirmula-7491752_1280.jpg', imageHint: 'Tirupati temple hill' }, 
      { id: '5', name: 'Rameswaram', image: 'https://cdn.pixabay.com/photo/2015/09/01/12/58/pamban-bridge-916891_1280.jpg', imageHint: 'Rameswaram temple architecture' } 
    ] 
  },
  { 
    id: '8', 
    slug: 'tirupati', 
    name: 'Tirupati', 
    description: 'The abode of Lord Venkateswara, one of the most visited and wealthiest pilgrimage centers.', 
    image: 'https://cdn.pixabay.com/photo/2022/10/01/15/22/tirmula-7491752_1280.jpg',
    imageHint: 'Tirumala temple gopuram', 
    slideshowImages: [
      { url: 'https://cdn.pixabay.com/photo/2012/11/15/10/43/tirumala-66100_1280.jpg', hint: 'Tirumala hills venkateswara' },
      { url: 'https://cdn.pixabay.com/photo/2021/07/26/18/25/temple-6495213_1280.jpg', hint: 'Dravidian temple architecture' },
      { url: 'https://cdn.pixabay.com/photo/2023/09/01/16/09/tirumala-8227316_1280.jpg', hint: 'Lord Venkateswara idol' },
      { url: 'https://cdn.pixabay.com/photo/2022/10/01/15/22/tirmula-7491752_1280.jpg', hint: 'pilgrims tirumala' }
    ], 
    history: 'The temple\'s origins are ancient, with contributions from various dynasties over centuries. It is a masterpiece of Dravidian architecture.', 
    mythology: 'Lord Venkateswara, a form of Vishnu, is believed to have manifested here to save mankind from the trials of the Kali Yuga.', 
    etiquette: { dressCode: 'Traditional Indian attire is mandatory (Dhoti for men, Saree/Chudidar for women).', tips: ['Book your darshan (viewing) slot online well in advance.', 'Be prepared for large crowds and long queues.', 'Do not carry leather items or electronic gadgets inside the temple.'] }, 
    events: [ { date: 'Sept-Oct 2024', title: 'Brahmotsavam', info: 'A nine-day grand festival celebrated with processions.' } ], 
    nearby: [ 
      { id: '5', name: 'Rameswaram', image: 'https://cdn.pixabay.com/photo/2017/01/11/15/06/pamban-bridge-1971796_1280.jpg', imageHint: 'Pamban bridge india' }, 
      { id: '9', name: 'Amritsar', image: 'https://cdn.pixabay.com/photo/2019/10/21/20/47/golden-temple-4567204_1280.jpg', imageHint: 'Harmandir Sahib amritsar' }, 
      { id: '4', name: 'Dwarka', image: 'https://cdn.pixabay.com/photo/2021/11/02/00/49/dwarka-6762332_1280.jpg', imageHint: 'Dwarkadhish Krishna temple' } 
    ] 
  },
  { 
    id: '9', 
    slug: 'amritsar', 
    name: 'Amritsar', 
    description: 'The spiritual center for Sikhs, home to the magnificent Golden Temple.', 
    image: 'https://cdn.pixabay.com/photo/2019/10/21/20/47/golden-temple-4567204_1280.jpg',
    imageHint: 'Golden Temple night', 
    slideshowImages: [
      { url: 'https://cdn.pixabay.com/photo/2014/10/16/11/44/golden-temple-491223_1280.jpg', hint: 'Golden Temple reflection' },
      { url: 'https://cdn.pixabay.com/photo/2017/04/03/06/17/sikh-2197049_1280.jpg', hint: 'Langar community kitchen' },
      { url: 'https://cdn.pixabay.com/photo/2022/04/18/14/43/golden-temple-7140869_1280.jpg', hint: 'Sikh pilgrims amritsar' }
    ], 
    history: 'Founded in the 16th century, Amritsar is a city of immense historical and religious importance for Sikhism.', 
    mythology: 'The Golden Temple, or Harmandir Sahib, is the holiest gurdwara of Sikhism, symbolizing equality and brotherhood.', 
    etiquette: { dressCode: 'Head must be covered for all genders inside the temple complex. Scarves are provided.', tips: ['Partake in the langar (free community meal).', 'Visit the Jallianwala Bagh memorial.', 'Witness the Wagah Border ceremony in the evening.'] }, 
    events: [ { date: 'April 14, 2025', title: 'Vaisakhi', info: 'Celebrated with great fervor as the founding day of the Khalsa.' } ], 
    nearby: [ 
      { id: '6', name: 'Haridwar & Rishikesh', image: 'https://cdn.pixabay.com/photo/2020/06/07/19/33/haridwar-5272197_1280.jpg', imageHint: 'Ganges river haridwar' }, 
      { id: '10', name: 'Kedarnath', image: 'https://cdn.pixabay.com/photo/2022/11/11/13/21/kedarnath-7585011_1280.jpg', imageHint: 'snowy Himalayas kedarnath' }, 
      { id: '1', name: 'Ayodhya', image: 'https://cdn.pixabay.com/photo/2024/02/19/13/46/ai-generated-8583933_1280.jpg', imageHint: 'ancient city india' } 
    ] 
  },
  { 
    id: '10', 
    slug: 'kedarnath', 
    name: 'Kedarnath', 
    description: 'A majestic Himalayan temple dedicated to Lord Shiva, part of the Char Dham Yatra.', 
    image: 'https://cdn.pixabay.com/photo/2022/11/11/13/21/kedarnath-7585011_1280.jpg',
    imageHint: 'Kedarnath temple himalayas', 
    slideshowImages: [
      { url: 'https://cdn.pixabay.com/photo/2019/08/12/10/06/himalaya-4400732_1280.jpg', hint: 'Himalayan mountain valley' },
      { url: 'https://cdn.pixabay.com/photo/2022/11/11/13/21/kedarnath-7585011_1280.jpg', hint: 'Vasuki Tal lake' },
      { url: 'https://cdn.pixabay.com/photo/2021/08/10/13/46/kedarnath-6535977_1280.jpg', hint: 'pilgrimage trek himalayas' }
    ], 
    history: 'An ancient temple that has stood for over a thousand years amidst the challenging Himalayan terrain, rebuilt after the 2013 floods.', 
    mythology: 'Believed to have been built by the Pandavas to atone for their sins after the Mahabharata war. It is one of the 12 Jyotirlingas.', 
    etiquette: { dressCode: 'Warm layered clothing is essential due to the high altitude and cold weather.', tips: ['Acclimatize properly to avoid altitude sickness.', 'The temple is only open for about six months a year (typically Apr-Nov).', 'The journey involves a significant trek; pony and helicopter services are available.'] }, 
    events: [ { date: 'May 10, 2025 (Tentative)', title: 'Temple Opening', info: 'The ceremonial opening of the temple doors after winter.' } ], 
    nearby: [ 
      { id: '6', name: 'Haridwar & Rishikesh', image: 'https://cdn.pixabay.com/photo/2020/06/07/19/33/haridwar-5272197_1280.jpg', imageHint: 'Haridwar Ganga Aarti' }, 
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://cdn.pixabay.com/photo/2015/03/17/20/12/varanasi-678652_1280.jpg', imageHint: 'Varanasi old city' }, 
      { id: '1', name: 'Ayodhya', image: 'https://cdn.pixabay.com/photo/2024/02/19/13/46/ai-generated-8583933_1280.jpg', imageHint: 'Ram Mandir complex' } 
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
