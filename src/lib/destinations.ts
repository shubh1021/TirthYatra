

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
    imageHint: 'Ayodhya temple', 
    slideshowImages: [
      { url: 'https://cdn.pixabay.com/photo/2021/11/02/18/25/river-6764268_1280.jpg', hint: 'Sarayu river' },
      { url: 'https://cdn.pixabay.com/photo/2024/01/22/16/32/ai-generated-8525790_1280.jpg', hint: 'ram mandir' },
      { url: 'https://cdn.pixabay.com/photo/2015/03/17/20/12/varanasi-678652_1280.jpg', hint: 'holy ghats' },
      { url: 'https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg', hint: 'devotees praying' },
      { url: 'https://as2.ftcdn.net/v2/jpg/05/62/92/14/1000_F_562921455_9yF614a38tM22g3s0J5vT20yD5cGVVnJ.jpg', hint: 'hanuman temple' }
    ], 
    history: 'Ayodhya, one of the seven sacred cities of Hinduism, has a rich history dating back to ancient times. It was the capital of the Kosala Kingdom and is deeply intertwined with the epic Ramayana.', 
    mythology: 'According to Hindu mythology, Ayodhya is the birthplace of Lord Rama, the seventh avatar of Vishnu. The city is central to the Ramayana, which narrates his life and journey.', 
    etiquette: { dressCode: 'Modest attire is recommended. Cover shoulders and knees when visiting temples.', tips: ['Remove footwear before entering temples.', 'Respect local customs and traditions.', 'Photography may be restricted in some areas.'] }, 
    events: [ { date: 'Apr 17, 2025', title: 'Ram Navami', info: 'Grand celebrations for Lord Rama\'s birthday.' }, { date: 'Nov 1, 2024', title: 'Deepotsav', info: 'A spectacular festival of lights.' } ], 
    nearby: [ 
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://cdn.pixabay.com/photo/2020/01/17/20/07/varanasi-4773824_1280.jpg', imageHint: 'Varanasi ghats' }, 
      { id: '3', name: 'Mathura & Vrindavan', image: 'https://cdn.pixabay.com/photo/2021/01/01/17/34/prem-mandir-5879313_1280.jpg', imageHint: 'Mathura temple' }, 
      { id: '6', name: 'Haridwar & Rishikesh', image: 'https://cdn.pixabay.com/photo/2022/03/04/14/52/haridwar-7047129_1280.jpg', imageHint: 'Haridwar river' } 
    ] 
  },
  { 
    id: '2', 
    slug: 'kashi', 
    name: 'Kashi (Varanasi)', 
    description: 'The spiritual capital of India, a mystical city of ghats, ancient temples, and moksha.', 
    image: 'https://cdn.pixabay.com/photo/2017/02/22/16/30/varanasi-2090297_1280.jpg',
    imageHint: 'Varanasi Ganges', 
    slideshowImages: [
      { url: 'https://cdn.pixabay.com/photo/2020/01/17/20/07/varanasi-4773824_1280.jpg', hint: 'Varanasi aarti' },
      { url: 'https://cdn.pixabay.com/photo/2021/11/02/18/25/river-6764268_1280.jpg', hint: 'sadhu meditating' },
      { url: 'https://cdn.pixabay.com/photo/2015/03/17/20/12/varanasi-678652_1280.jpg', hint: 'Varanasi city' },
      { url: 'https://cdn.pixabay.com/photo/2019/06/15/23/07/ganges-4277146_1280.jpg', hint: 'boats ganges' },
      { url: 'https://as1.ftcdn.net/v2/jpg/03/19/22/74/1000_F_319227402_xTgyp9n224c3GhtCj1h0C9aQ2y323tWe.jpg', hint: 'Kashi temple' }
    ], 
    history: 'Kashi, also known as Varanasi, is one of the oldest living cities in the world. It has been a center of learning, philosophy, and spirituality for thousands of years.', 
    mythology: 'It is believed that Kashi was founded by Lord Shiva. Hindus believe that dying in Kashi brings salvation (moksha), making it a major pilgrimage site.', 
    etiquette: { dressCode: 'Conservative clothing is advised, especially around religious sites.', tips: ['Be mindful of the funeral ceremonies at the burning ghats.', 'Bargaining is common in markets.', 'A boat ride on the Ganges at dawn is a must-do.'] }, 
    events: [ { date: 'Mar 7, 2025', title: 'Maha Shivaratri', info: 'A major festival dedicated to Lord Shiva.' }, { date: 'Nov 15, 2024', title: 'Dev Deepawali', info: 'The festival of lights of the gods.' } ], 
    nearby: [ 
      { id: '1', name: 'Ayodhya', image: 'https://cdn.pixabay.com/photo/2024/02/19/13/46/ai-generated-8583933_1280.jpg', imageHint: 'Ayodhya Ram Mandir' }, 
      { id: '7', name: 'Puri', image: 'https://as2.ftcdn.net/v2/jpg/02/18/85/51/1000_F_218855191_B7mQ2v7s8337VL2iUE11n0Kq3n5v3N0c.jpg', imageHint: 'Puri Jagannath temple' }, 
      { id: '8', name: 'Tirupati', image: 'https://as1.ftcdn.net/v2/jpg/06/06/80/75/1000_F_606807560_3SCgAGsJMdka5LA1aV21k2C58Jd34G6q.jpg', imageHint: 'Tirupati Hindu temple' } 
    ] 
  },
  { 
    id: '3', 
    slug: 'mathura-vrindavan', 
    name: 'Mathura & Vrindavan', 
    description: 'The vibrant twin holy towns, the birthplace and childhood home of Lord Krishna.', 
    image: 'https://cdn.pixabay.com/photo/2021/01/01/17/34/prem-mandir-5879313_1280.jpg',
    imageHint: 'Mathura Krishna temple', 
    slideshowImages: [
      { url: 'https://cdn.pixabay.com/photo/2020/03/10/05/29/holi-4917033_1280.jpg', hint: 'Holi festival' },
      { url: 'https://as1.ftcdn.net/v2/jpg/05/17/87/42/1000_F_517874221_PEXL4gkbKjZq09sV12bmsJ5KdaB3d38V.jpg', hint: 'Krishna idol' },
      { url: 'https://as2.ftcdn.net/v2/jpg/05/35/61/29/1000_F_535612984_FDRGj2vk2e6mlt2B47OQls6Kzvv0aQ6t.jpg', hint: 'ISKCON temple' },
      { url: 'https://as1.ftcdn.net/v2/jpg/04/18/69/41/1000_F_418694119_uTVpQoN18ad232i28i0EEqfU2bmaT5Iu.jpg', hint: 'Banke Bihari Temple' },
      { url: 'https://cdn.pixabay.com/photo/2021/01/01/17/34/prem-mandir-5879313_1280.jpg', hint: 'Prem Mandir' }
    ], 
    history: 'Mathura is an ancient city with a history that spans millennia. It has been an important center for art, culture, and religion, particularly Vaishnavism.', 
    mythology: 'Mathura is revered as the birthplace of Lord Krishna. The nearby town of Vrindavan is where he is said to have spent his childhood, filled with divine tales and leelas.', 
    etiquette: { dressCode: 'Wear comfortable and modest clothes. Bright colors are common during festivals.', tips: ['Be cautious of monkeys in temple areas.', 'Try the local specialty, "Mathura peda".', 'Participate in the joyous Holi celebrations if visiting in spring.'] }, 
    events: [ { date: 'Aug 26, 2024', title: 'Krishna Janmashtami', info: 'Elaborate festival celebrating Krishna\'s birth.' }, { date: 'Mar 14, 2025', title: 'Holi', info: 'The famous festival of colors is celebrated with great zeal.' } ], 
    nearby: [ 
      { id: '1', name: 'Ayodhya', image: 'https://cdn.pixabay.com/photo/2024/02/19/13/46/ai-generated-8583933_1280.jpg', imageHint: 'Ayodhya historic temple' }, 
      { id: '9', name: 'Amritsar', image: 'https://cdn.pixabay.com/photo/2019/10/21/20/47/golden-temple-4567204_1280.jpg', imageHint: 'Amritsar Golden Temple' }, 
      { id: '10', name: 'Kedarnath', image: 'https://as2.ftcdn.net/v2/jpg/02/89/34/50/1000_F_289345058_p12iCq1tJALFNLza0ePU0ut24P4vr031.jpg', imageHint: 'Kedarnath Himalayas' } 
    ] 
  },
  { 
    id: '4', 
    slug: 'dwarka', 
    name: 'Dwarka', 
    description: 'The legendary golden kingdom of Lord Krishna, one of the four sacred Char Dham sites.', 
    image: 'https://as2.ftcdn.net/v2/jpg/02/75/19/33/1000_F_275193355_e9yvV34g7Lt5d9dBr1NExs0s33oB5iEG.jpg',
    imageHint: 'Dwarka temple', 
    slideshowImages: [
      { url: 'https://as2.ftcdn.net/v2/jpg/02/75/19/33/1000_F_275193355_e9yvV34g7Lt5d9dBr1NExs0s33oB5iEG.jpg', hint: 'Dwarkadhish temple' },
      { url: 'https://cdn.pixabay.com/photo/2023/02/09/10/37/sea-7778593_1280.jpg', hint: 'Dwarka sea' },
      { url: 'https://as2.ftcdn.net/v2/jpg/05/88/54/22/1000_F_588542245_P88iCq2ERgS1iLYIszQkEDi4STs3fKz7.jpg', hint: 'Gomti ghat' },
      { url: 'https://as1.ftcdn.net/v2/jpg/03/11/48/43/1000_F_311484347_Aaf0e014I9V3Jz86QyNaX1yB2a3YmR4c.jpg', hint: 'Sudama Setu bridge' },
      { url: 'https://as1.ftcdn.net/v2/jpg/04/79/11/04/1000_F_479110423_gQwhEpGUK1fG25M67eK2LoUTGeWHDMKr.jpg', hint: 'Bet Dwarka' }
    ], 
    history: 'Ancient Dwarka was a prosperous city that is said to have been submerged by the sea. The modern city is a major pilgrimage hub for Vaishnavites.', 
    mythology: 'Dwarka is identified with the Dwarka Kingdom, the ancient kingdom of Lord Krishna. He is said to have established this city after leaving Mathura.', 
    etiquette: { dressCode: 'Respectful attire is expected in the temples and holy sites.', tips: ['Take a ferry to the island of Bet Dwarka.', 'Visit the Nageshwar Jyotirlinga Temple.', 'The sea can be rough, be cautious near the coast.'] }, 
    events: [ { date: 'Aug 26, 2024', title: 'Janmashtami', info: 'Celebrations are held at the Dwarkadhish Temple.' } ], 
    nearby: [ 
      { id: '7', name: 'Puri', image: 'https://as2.ftcdn.net/v2/jpg/02/18/85/51/1000_F_218855191_B7mQ2v7s8337VL2iUE11n0Kq3n5v3N0c.jpg', imageHint: 'Puri chariot' }, 
      { id: '5', name: 'Rameswaram', image: 'https://cdn.pixabay.com/photo/2022/03/01/13/20/temple-7041183_1280.jpg', imageHint: 'Rameswaram temple' }, 
      { id: '10', name: 'Kedarnath', image: 'https://as2.ftcdn.net/v2/jpg/02/89/34/50/1000_F_289345058_p12iCq1tJALFNLza0ePU0ut24P4vr031.jpg', imageHint: 'Kedarnath peak' } 
    ] 
  },
  { 
    id: '5', 
    slug: 'rameswaram', 
    name: 'Rameswaram', 
    description: 'A holy island town known for its magnificent Ramanathaswamy Temple with its grand corridors.', 
    image: 'https://cdn.pixabay.com/photo/2022/03/01/13/20/temple-7041183_1280.jpg',
    imageHint: 'Rameswaram temple', 
    slideshowImages: [
      { url: 'https://cdn.pixabay.com/photo/2016/11/13/04/34/pamban-bridge-1820311_1280.jpg', hint: 'Pamban bridge' },
      { url: 'https://as1.ftcdn.net/v2/jpg/01/91/97/57/1000_F_191975798_1mX6ln5S5H5p0VP4QuH5XG55sO3uCn4h.jpg', hint: 'temple corridor' },
      { url: 'https://as2.ftcdn.net/v2/jpg/01/99/33/95/1000_F_199339517_Zl233S4o5LflfQRwsmY3gK7Nbw2i2a3m.jpg', hint: 'Dhanushkodi beach' },
      { url: 'https://as2.ftcdn.net/v2/jpg/02/95/02/15/1000_F_295021579_50pbmrC4C20vNfgHnJpakQGvL7g5y0Jq.jpg', hint: 'holy water' },
      { url: 'https://as2.ftcdn.net/v2/jpg/03/20/43/68/1000_F_320436894_pA1RClE5W1C4kCcn3zCaUnTzSgArtNuf.jpg', hint: 'Rama Setu' }
    ], 
    history: 'Rameswaram has been a pilgrimage center for centuries, with its temple being a fine example of Dravidian architecture.', 
    mythology: 'Lord Rama is said to have built a bridge (Rama Setu) from here to Lanka to rescue his wife Sita. He also worshipped Lord Shiva here to atone for killing Ravana.', 
    etiquette: { dressCode: 'Modest dress is required for temple entry. Men may need to be bare-chested.', tips: ['Take a holy dip in the Agni Theertham.', 'Walk through the famous temple corridors.', 'Visit the ghost town of Dhanushkodi.'] }, 
    events: [ { date: 'Feb 26, 2025', title: 'Maha Shivaratri', info: 'A night of prayer and festivities for Lord Shiva.' } ], 
    nearby: [ 
      { id: '8', name: 'Tirupati', image: 'https://as1.ftcdn.net/v2/jpg/06/06/80/75/1000_F_606807560_3SCgAGsJMdka5LA1aV21k2C58Jd34G6q.jpg', imageHint: 'Tirupati hills' }, 
      { id: '9', name: 'Amritsar', image: 'https://cdn.pixabay.com/photo/2019/10/21/20/47/golden-temple-4567204_1280.jpg', imageHint: 'Golden Temple' }, 
      { id: '3', name: 'Mathura & Vrindavan', image: 'https://cdn.pixabay.com/photo/2021/01/01/17/34/prem-mandir-5879313_1280.jpg', imageHint: 'Prem Mandir' } 
    ] 
  },
  { 
    id: '6', 
    slug: 'haridwar-rishikesh', 
    name: 'Haridwar & Rishikesh', 
    description: 'Twin spiritual towns on the banks of the Ganges, the gateway to the Himalayas.', 
    image: 'https://cdn.pixabay.com/photo/2018/06/25/13/13/rishikesh-3497184_1280.jpg',
    imageHint: 'Haridwar Ganges', 
    slideshowImages: [
      { url: 'https://cdn.pixabay.com/photo/2020/06/01/09/59/yoga-5246241_1280.jpg', hint: 'yoga meditation' },
      { url: 'https://cdn.pixabay.com/photo/2022/03/04/14/52/haridwar-7047129_1280.jpg', hint: 'Ganga aarti' },
      { url: 'https://cdn.pixabay.com/photo/2020/01/29/18/01/rishikesh-4802830_1280.jpg', hint: 'Lakshman Jhula' },
      { url: 'https://as1.ftcdn.net/v2/jpg/05/88/53/78/1000_F_588537873_DCAnghY1wSc1DCx0c25Zx6U72iW1jLnj.jpg', hint: 'Har Ki Pauri' },
      { url: 'https://cdn.pixabay.com/photo/2016/07/04/19/23/ganges-1497241_1280.jpg', hint: 'river rafting' }
    ], 
    history: 'Haridwar and Rishikesh are ancient pilgrimage sites. Haridwar is where the Ganges enters the plains, while Rishikesh is known as the "Yoga Capital of the World".', 
    mythology: 'These towns are steeped in Hindu mythology, with numerous temples and ashrams dedicated to various deities. They are the starting point for the Char Dham Yatra of Uttarakhand.', 
    etiquette: { dressCode: 'Modest, comfortable clothing suitable for walking and yoga.', tips: ['Attend the Ganga Aarti at Har Ki Pauri.', 'Explore the ashrams of Rishikesh.', 'Try white-water rafting for an adventurous twist.'] }, 
    events: [ { date: 'April 14, 2025', title: 'Vaisakhi', info: 'Celebrates the solar new year with holy dips in the Ganges.' } ], 
    nearby: [ 
      { id: '1', name: 'Ayodhya', image: 'https://cdn.pixabay.com/photo/2024/02/19/13/46/ai-generated-8583933_1280.jpg', imageHint: 'Sarayu river' }, 
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://cdn.pixabay.com/photo/2017/02/22/16/30/varanasi-2090297_1280.jpg', imageHint: 'Varanasi ghats' }, 
      { id: '3', name: 'Mathura & Vrindavan', image: 'https://cdn.pixabay.com/photo/2021/01/01/17/34/prem-mandir-5879313_1280.jpg', imageHint: 'Vrindavan temple' } 
    ] 
  },
  { 
    id: '7', 
    slug: 'puri', 
    name: 'Puri', 
    description: 'Home to the Jagannath Temple, famous for its annual Rath Yatra festival.', 
    image: 'https://as2.ftcdn.net/v2/jpg/02/18/85/51/1000_F_218855191_B7mQ2v7s8337VL2iUE11n0Kq3n5v3N0c.jpg',
    imageHint: 'Puri Rath Yatra', 
    slideshowImages: [
      { url: 'https://as2.ftcdn.net/v2/jpg/02/18/85/51/1000_F_218855191_B7mQ2v7s8337VL2iUE11n0Kq3n5v3N0c.jpg', hint: 'Rath Yatra chariot' },
      { url: 'https://cdn.pixabay.com/photo/2016/11/25/11/49/beach-1858999_1280.jpg', hint: 'sandy beach' },
      { url: 'https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg', hint: 'Konark Sun temple' },
      { url: 'https://as1.ftcdn.net/v2/jpg/02/95/08/99/1000_F_295089906_XBj9tOR22o53b2s0fJ2rX17w82sAU54o.jpg', hint: 'Jagannath temple' },
      { url: 'https://cdn.pixabay.com/photo/2015/09/05/21/53/sunset-925232_1280.jpg', hint: 'beach sunset' }
    ], 
    history: 'Puri is one of the Char Dham pilgrimage sites. The Jagannath Temple is an architectural marvel and has been a focal point of Hinduism for centuries.', 
    mythology: 'The temple is dedicated to Lord Jagannath (a form of Krishna), his brother Balabhadra, and sister Subhadra.', 
    etiquette: { dressCode: 'Strict dress code for the temple; non-Hindus are not permitted inside the main sanctum.', tips: ['Witness the grand Rath Yatra if visiting in summer.', 'Relax on the golden sands of Puri Beach.', 'Take a day trip to the Konark Sun Temple.'] }, 
    events: [ { date: 'July 7, 2024', title: 'Rath Yatra', info: 'The spectacular chariot festival.' } ], 
    nearby: [ 
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://cdn.pixabay.com/photo/2017/02/22/16/30/varanasi-2090297_1280.jpg', imageHint: 'Varanasi cityscape' }, 
      { id: '8', name: 'Tirupati', image: 'https://as1.ftcdn.net/v2/jpg/06/06/80/75/1000_F_606807560_3SCgAGsJMdka5LA1aV21k2C58Jd34G6q.jpg', imageHint: 'Tirupati hill' }, 
      { id: '5', name: 'Rameswaram', image: 'https://cdn.pixabay.com/photo/2022/03/01/13/20/temple-7041183_1280.jpg', imageHint: 'Rameswaram temple' } 
    ] 
  },
  { 
    id: '8', 
    slug: 'tirupati', 
    name: 'Tirupati', 
    description: 'The abode of Lord Venkateswara, one of the most visited and wealthiest pilgrimage centers.', 
    image: 'https://as1.ftcdn.net/v2/jpg/06/06/80/75/1000_F_606807560_3SCgAGsJMdka5LA1aV21k2C58Jd34G6q.jpg',
    imageHint: 'Tirupati gopuram', 
    slideshowImages: [
      { url: 'https://as1.ftcdn.net/v2/jpg/06/06/80/75/1000_F_606807560_3SCgAGsJMdka5LA1aV21k2C58Jd34G6q.jpg', hint: 'Tirumala hills' },
      { url: 'https://as2.ftcdn.net/v2/jpg/05/85/33/20/1000_F_585332025_cwpLfrb2GkEz5l0nPGT3Kk6n123fWz29.jpg', hint: 'Dravidian architecture' },
      { url: 'https://as2.ftcdn.net/v2/jpg/02/76/12/35/1000_F_276123512_x08Yc3tL4G3pC5tPxy2x25aF30nJz2eI.jpg', hint: 'Venkateswara idol' },
      { url: 'https://as1.ftcdn.net/v2/jpg/02/89/34/50/1000_F_289345058_p12iCq1tJALFNLza0ePU0ut24P4vr031.jpg', hint: 'pilgrims' },
      { url: 'https://as2.ftcdn.net/v2/jpg/02/88/24/76/1000_F_288247656_9n52AJRke51Cfb4t1sCde5Kq5bW2Lq53.jpg', hint: 'temple at night' }
    ], 
    history: 'The temple\'s origins are ancient, with contributions from various dynasties over centuries. It is a masterpiece of Dravidian architecture.', 
    mythology: 'Lord Venkateswara, a form of Vishnu, is believed to have manifested here to save mankind from the trials of the Kali Yuga.', 
    etiquette: { dressCode: 'Traditional Indian attire is mandatory (Dhoti for men, Saree/Chudidar for women).', tips: ['Book your darshan (viewing) slot online well in advance.', 'Be prepared for large crowds and long queues.', 'Do not carry leather items or electronic gadgets inside the temple.'] }, 
    events: [ { date: 'Sept-Oct 2024', title: 'Brahmotsavam', info: 'A nine-day grand festival celebrated with processions.' } ], 
    nearby: [ 
      { id: '5', name: 'Rameswaram', image: 'https://cdn.pixabay.com/photo/2022/03/01/13/20/temple-7041183_1280.jpg', imageHint: 'Pamban bridge' }, 
      { id: '9', name: 'Amritsar', image: 'https://cdn.pixabay.com/photo/2019/10/21/20/47/golden-temple-4567204_1280.jpg', imageHint: 'Harmandir Sahib' }, 
      { id: '4', name: 'Dwarka', image: 'https://as2.ftcdn.net/v2/jpg/02/75/19/33/1000_F_275193355_e9yvV34g7Lt5d9dBr1NExs0s33oB5iEG.jpg', imageHint: 'Krishna temple' } 
    ] 
  },
  { 
    id: '9', 
    slug: 'amritsar', 
    name: 'Amritsar', 
    description: 'The spiritual center for Sikhs, home to the magnificent Golden Temple.', 
    image: 'https://cdn.pixabay.com/photo/2019/10/21/20/47/golden-temple-4567204_1280.jpg',
    imageHint: 'Golden Temple', 
    slideshowImages: [
      { url: 'https://cdn.pixabay.com/photo/2014/11/24/20/27/golden-temple-544426_1280.jpg', hint: 'Golden Temple night' },
      { url: 'https://cdn.pixabay.com/photo/2017/02/09/16/36/india-2052906_1280.jpg', hint: 'Wagah border' },
      { url: 'https://as1.ftcdn.net/v2/jpg/05/73/07/75/1000_F_573077565_tqVNO1gRVEDCYB0pYnciY9IT2eaxgbaQ.jpg', hint: 'temple kitchen' },
      { url: 'https://as2.ftcdn.net/v2/jpg/02/26/51/95/1000_F_226519572_V7eMj1tl0dpjUWx2sG0m5s4fF41i72aY.jpg', hint: 'Jallianwala Bagh' },
      { url: 'https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg', hint: 'Sikh pilgrims' }
    ], 
    history: 'Founded in the 16th century, Amritsar is a city of immense historical and religious importance for Sikhism.', 
    mythology: 'The Golden Temple, or Harmandir Sahib, is the holiest gurdwara of Sikhism, symbolizing equality and brotherhood.', 
    etiquette: { dressCode: 'Head must be covered for all genders inside the temple complex. Scarves are provided.', tips: ['Partake in the langar (free community meal).', 'Visit the Jallianwala Bagh memorial.', 'Witness the Wagah Border ceremony in the evening.'] }, 
    events: [ { date: 'April 14, 2025', title: 'Vaisakhi', info: 'Celebrated with great fervor as the founding day of the Khalsa.' } ], 
    nearby: [ 
      { id: '6', name: 'Haridwar & Rishikesh', image: 'https://cdn.pixabay.com/photo/2018/06/25/13/13/rishikesh-3497184_1280.jpg', imageHint: 'Ganges river' }, 
      { id: '10', name: 'Kedarnath', image: 'https://as2.ftcdn.net/v2/jpg/02/89/34/50/1000_F_289345058_p12iCq1tJALFNLza0ePU0ut24P4vr031.jpg', imageHint: 'snowy Himalayas' }, 
      { id: '1', name: 'Ayodhya', image: 'https://cdn.pixabay.com/photo/2024/02/19/13/46/ai-generated-8583933_1280.jpg', imageHint: 'ancient city' } 
    ] 
  },
  { 
    id: '10', 
    slug: 'kedarnath', 
    name: 'Kedarnath', 
    description: 'A majestic Himalayan temple dedicated to Lord Shiva, part of the Char Dham Yatra.', 
    image: 'https://as2.ftcdn.net/v2/jpg/02/89/34/50/1000_F_289345058_p12iCq1tJALFNLza0ePU0ut24P4vr031.jpg',
    imageHint: 'Himalayan temple', 
    slideshowImages: [
      { url: 'https://cdn.pixabay.com/photo/2021/07/26/16/22/kedarnath-6494796_1280.jpg', hint: 'mountain valley' },
      { url: 'https://cdn.pixabay.com/photo/2018/05/17/14/40/himalayas-3408226_1280.jpg', hint: 'snow peaks' },
      { url: 'https://as2.ftcdn.net/v2/jpg/02/89/34/50/1000_F_289345058_p12iCq1tJALFNLza0ePU0ut24P4vr031.jpg', hint: 'Shiva temple' },
      { url: 'https://as2.ftcdn.net/v2/jpg/05/89/99/33/1000_F_589993354_S7eGwp32bGUN3i8l8T82kO4j2P9A5z4G.jpg', hint: 'Vasuki Tal' },
      { url: 'https://cdn.pixabay.com/photo/2021/07/26/16/22/kedarnath-6494796_1280.jpg', hint: 'pilgrimage trek' }
    ], 
    history: 'An ancient temple that has stood for over a thousand years amidst the challenging Himalayan terrain, rebuilt after the 2013 floods.', 
    mythology: 'Believed to have been built by the Pandavas to atone for their sins after the Mahabharata war. It is one of the 12 Jyotirlingas.', 
    etiquette: { dressCode: 'Warm layered clothing is essential due to the high altitude and cold weather.', tips: ['Acclimatize properly to avoid altitude sickness.', 'The temple is only open for about six months a year (typically Apr-Nov).', 'The journey involves a significant trek; pony and helicopter services are available.'] }, 
    events: [ { date: 'May 10, 2025 (Tentative)', title: 'Temple Opening', info: 'The ceremonial opening of the temple doors after winter.' } ], 
    nearby: [ 
      { id: '6', name: 'Haridwar & Rishikesh', image: 'https://cdn.pixabay.com/photo/2022/03/04/14/52/haridwar-7047129_1280.jpg', imageHint: 'Haridwar Aarti' }, 
      { id: '2', name: 'Kashi (Varanasi)', image: 'https://cdn.pixabay.com/photo/2017/02/22/16/30/varanasi-2090297_1280.jpg', imageHint: 'Varanasi city' }, 
      { id: '1', name: 'Ayodhya', image: 'https://cdn.pixabay.com/photo/2024/02/19/13/46/ai-generated-8583933_1280.jpg', imageHint: 'Ram Mandir' } 
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
