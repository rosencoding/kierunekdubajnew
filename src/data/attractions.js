export const categories = [
  { id: 'architecture', name: 'Architektura', icon: '🏛️' },
  { id: 'cultural', name: 'Kultura', icon: '🕌' },
  { id: 'shopping', name: 'Zakupy', icon: '🛍️' },
  { id: 'beaches', name: 'Plaże', icon: '🏖️' },
  { id: 'entertainment', name: 'Rozrywka', icon: '🎭' },
  { id: 'parks', name: 'Parki i Ogrody', icon: '🌸' }
];

const defaultAffiliateInfo = {
  hotels: [
    {
      id: 'address-downtown',
      name: 'Address Downtown',
      rating: 4.8,
      price: 1800,
      distance: 1.5,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd',
      partner: 'booking'
    }
  ],
  activities: [
    {
      id: 'city-tour',
      name: 'Dubai City Tour',
      rating: 4.6,
      price: 199,
      duration: '4 hours',
      image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5',
      partner: 'getyourguide'
    }
  ]
};

export const attractions = [
  {
    id: 'madinat-jumeirah',
    name: 'Madinat Jumeirah',
    category: 'shopping',
    description: 'Luksusowy kompleks hotelowy inspirowany tradycyjną arabską architekturą, z kanałami wodnymi, soukami i restauracjami.',
    longDescription: `Madinat Jumeirah to wyjątkowy kompleks hotelowy zaprojektowany w stylu tradycyjnego arabskiego miasta. Znajdują się tu luksusowe hotele, tradycyjny souk (bazar), restauracje i kanały wodne, po których można pływać tradycyjnymi łodziami abra. Z wielu miejsc kompleksu rozciąga się spektakularny widok na Burj Al Arab. To idealne miejsce, by poznać połączenie arabskiej tradycji z nowoczesnym luksusem.`,
    image: '/images/madinat-jumeirah.jpg',
    images: ['/images/madinat-jumeirah-1.jpg', '/images/madinat-jumeirah-2.jpg', '/images/madinat-jumeirah-3.jpg'],
    price: 0,
    rating: 4.7,
    latitude: 25.1335,
    longitude: 55.1851,
    duration: 180,
    bestTimeToVisit: 'Evening',
    tips: [
      'Najlepsze widoki na Burj Al Arab są o zachodzie słońca',
      'Warto wybrać się na przejażdżkę tradycyjną łodzią abra po kanałach',
      'Souk Madinat to świetne miejsce na zakup pamiątek',
      'Wstęp do kompleksu jest bezpłatny'
    ],
    highlights: [
      'Tradycyjny arabski souk z lokalnymi wyrobami',
      'Malownicze kanały wodne z łodziami abra',
      'Spektakularne widoki na Burj Al Arab',
      'Liczne restauracje i kawiarnie z kuchnią międzynarodową',
      'Piękna architektura inspirowana starym Dubajem'
    ],
    affiliateInfo: {
      hotels: [
        {
          id: 'jumeirah-al-qasr',
          name: 'Jumeirah Al Qasr',
          rating: 4.9,
          price: 2200,
          distance: 0,
          image: '/images/jumeirah-al-qasr.jpg',
          partner: 'booking'
        }
      ],
      activities: [
        {
          id: 'abra-tour',
          name: 'Madinat Jumeirah Abra Tour',
          rating: 4.6,
          price: 85,
          duration: '30 minutes',
          image: '/images/abra-tour.jpg',
          partner: 'getyourguide'
        }
      ]
    }
  },
  {
    id: 'burj-khalifa',
    name: 'Burj Khalifa',
    category: 'architecture',
    description: 'Najwyższy budynek świata o wysokości 828 metrów, oferujący zapierające dech w piersiach widoki na Dubaj.',
    longDescription: `Doświadcz szczytu osiągnięć architektonicznych w Burj Khalifa. Ten ikoniczny drapacz chmur oferuje kilka tarasów widokowych, w tym "At the Top" na 124. i 125. piętrze oraz "SKY lounge" na 148. piętrze. W budynku znajdują się również luksusowe apartamenty, biura i hotel Armani Dubai.`,
    image: '/images/burj-khalifa.jpg',
    images: ['/images/burj-khalifa-1.jpg', '/images/burj-khalifa-2.jpg', '/images/burj-khalifa-3.jpg'],
    price: 149,
    rating: 4.8,
    latitude: 25.197197,
    longitude: 55.274376,
    duration: 120,
    bestTimeToVisit: 'Sunset',
    tips: [
      'Book tickets in advance to avoid queues',
      'Visit during sunset for spectacular views',
      'Combine with a visit to Dubai Mall'
    ],
    openingHours: { open: '9:00', close: '22:00' },
    popularTimes: {
      morning: 'Moderate',
      afternoon: 'Busy',
      evening: 'Very Busy'
    },
    affiliateInfo: {
      hotels: [
        {
          id: 'armani-hotel-dubai',
          name: 'Armani Hotel Dubai',
          rating: 4.9,
          price: 2500,
          distance: 0.1,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
          partner: 'booking'
        },
        {
          id: 'address-downtown',
          name: 'Address Downtown',
          rating: 4.8,
          price: 1800,
          distance: 0.3,
          image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd',
          partner: 'booking'
        }
      ],
      activities: [
        {
          id: 'burj-khalifa-top',
          name: 'Burj Khalifa: At the Top SKY Lounge (Level 148)',
          rating: 4.8,
          price: 379,
          duration: '1 hour',
          image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5',
          partner: 'getyourguide'
        },
        {
          id: 'dubai-fountain-show',
          name: 'Dubai Fountain Show & Burj Khalifa Combo',
          rating: 4.7,
          price: 199,
          duration: '2 hours',
          image: 'https://images.unsplash.com/photo-1580237072617-771c3ecc4a24',
          partner: 'klook'
        }
      ]
    },
    location: 'Dubaj'
  },
  {
    id: 'dubai-mall',
    name: 'The Dubai Mall',
    category: 'shopping',
    description: 'Największe centrum handlowe świata z ponad 1200 sklepami i miejscami rozrywki, w tym akwarium i lodowiskiem.',
    longDescription: `Więcej niż centrum handlowe - to centrum rozrywki. Dubai Mall to dom dla Dubai Aquarium, lodowiska i niezliczonych luksusowych butików. W centrum znajduje się również spektakularny pokaz fontann Dubai Fountain i bezpośredni dostęp do Burj Khalifa.`,
    image: '/images/dubai-mall.jpg',
    images: ['/images/dubai-mall-1.jpg', '/images/dubai-mall-2.jpg', '/images/dubai-mall-3.jpg'],
    price: 0,
    rating: 4.7,
    latitude: 25.198765,
    longitude: 55.279729,
    duration: 240,
    bestTimeToVisit: 'Afternoon',
    tips: [
      'Visit Dubai Aquarium & Underwater Zoo',
      'Watch the Dubai Fountain show',
      'Combine with Burj Khalifa visit'
    ],
    openingHours: { open: '10:00', close: '23:00' },
    popularTimes: {
      morning: 'Moderate',
      afternoon: 'Very Busy',
      evening: 'Busy'
    },
    affiliateInfo: {
      hotels: [
        {
          id: 'address-dubai-mall',
          name: 'Address Dubai Mall',
          rating: 4.8,
          price: 1500,
          distance: 0.1,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
          partner: 'booking'
        }
      ],
      activities: [
        {
          id: 'dubai-aquarium',
          name: 'Dubai Aquarium & Underwater Zoo Tickets',
          rating: 4.6,
          price: 139,
          duration: '2-3 hours',
          image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5',
          partner: 'getyourguide'
        }
      ]
    },
    location: 'Dubaj'
  },
  {
    id: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    category: 'entertainment',
    description: 'Ikoniczna sztuczna wyspa w kształcie palmy z luksusowymi hotelami, restauracjami i pięknymi plażami.',
    longDescription: `The Palm Jumeirah is a marvel of engineering and luxury living. This palm-shaped archipelago houses some of Dubai's most exclusive resorts, including Atlantis, The Palm. Visitors can enjoy pristine beaches, water sports, and world-class dining with views of the Dubai skyline.`,
    image: '/images/palm-jumeirah.jpg',
    images: ['/images/palm-jumeirah-1.jpg', '/images/palm-jumeirah-2.jpg', '/images/palm-jumeirah-3.jpg'],
    price: 0,
    rating: 4.6,
    latitude: 25.1124,
    longitude: 55.1390,
    duration: 180,
    bestTimeToVisit: 'Late Afternoon',
    tips: [
      'Take the Palm Monorail for the best views',
      'Visit Atlantis Aquaventure Waterpark',
      'Book a dinner at one of the luxury restaurants'
    ],
    openingHours: { open: '0:00', close: '24:00' },
    popularTimes: {
      morning: 'Moderate',
      afternoon: 'Busy',
      evening: 'Moderate'
    },
    affiliateInfo: {
      hotels: [
        {
          id: 'atlantis-the-palm',
          name: 'Atlantis, The Palm',
          rating: 4.8,
          price: 2000,
          distance: 0.1,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
          partner: 'booking'
        }
      ],
      activities: [
        {
          id: 'atlantis-aquaventure',
          name: 'Atlantis Aquaventure Waterpark Tickets',
          rating: 4.6,
          price: 299,
          duration: '6-8 hours',
          image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5',
          partner: 'getyourguide'
        }
      ]
    },
    location: 'Dubaj'
  },
  {
    id: 'dubai-frame',
    name: 'Dubai Frame',
    category: 'architecture',
    description: 'Imponująca złota rama o wysokości 150 metrów, oferująca panoramiczny widok na stary i nowy Dubaj.',
    longDescription: `The Dubai Frame is a spectacular architectural landmark that perfectly frames stunning views of Old Dubai to the north and New Dubai to the south. Standing at 150 meters high, it features a glass-floored observation bridge, immersive galleries showcasing Dubai's past and future, and state-of-the-art augmented reality displays.`,
    image: '/images/dubai-frame.jpg',
    images: ['/images/dubai-frame-1.jpg', '/images/dubai-frame-2.jpg', '/images/dubai-frame-3.jpg'],
    price: 50,
    rating: 4.5,
    latitude: 25.2344,
    longitude: 55.3003,
    duration: 90,
    bestTimeToVisit: 'Sunset',
    tips: [
      'Visit during sunset for the best photo opportunities',
      'Book tickets online to avoid queues',
      'Combine with a visit to Zabeel Park',
      'Try the glass walkway experience'
    ],
    openingHours: { open: '9:00', close: '21:00' },
    popularTimes: {
      morning: 'Moderate',
      afternoon: 'Busy',
      evening: 'Very Busy'
    },
    affiliateInfo: {
      activities: [
        {
          id: 'dubai-frame-ticket',
          name: 'Dubai Frame Admission Ticket',
          rating: 4.5,
          price: 50,
          duration: '2-3 hours',
          image: '/images/dubai-frame-1.jpg',
          partner: 'getyourguide'
        }
      ]
    },
    location: 'Dubaj'
  },
  {
    id: 'miracle-garden',
    name: 'Dubai Miracle Garden',
    category: 'parks',
    description: 'Największy na świecie naturalny ogród kwiatowy z ponad 50 milionami kwiatów i zachwycającymi instalacjami.',
    longDescription: `Dubai Miracle Garden is a stunning floral display featuring over 50 million flowers and 250 million plants. The garden showcases a variety of floral sculptures, including the world's largest floral structure - an Emirates A380 aircraft. Open seasonally from October to April, it's a must-visit destination for nature lovers and photographers.`,
    image: '/images/miracle-garden.jpg',
    images: ['/images/miracle-garden-1.jpg', '/images/miracle-garden-2.jpg', '/images/miracle-garden-3.jpg'],
    price: 55,
    rating: 4.4,
    latitude: 25.0617,
    longitude: 55.2417,
    duration: 120,
    bestTimeToVisit: 'Morning',
    tips: [
      'Visit during winter months (November to May)',
      'Come early morning to avoid crowds',
      'Bring your camera for amazing photo opportunities',
      'Check seasonal opening dates before visiting'
    ],
    openingHours: { open: '9:00', close: '21:00' },
    popularTimes: {
      morning: 'Moderate',
      afternoon: 'Busy',
      evening: 'Moderate'
    },
    affiliateInfo: {
      activities: [
        {
          id: 'miracle-garden-ticket',
          name: 'Dubai Miracle Garden Admission Ticket',
          rating: 4.4,
          price: 55,
          duration: '1 day',
          image: '/images/miracle-garden-1.jpg',
          partner: 'getyourguide'
        }
      ]
    },
    location: 'Dubaj'
  },
  {
    id: 'img-worlds',
    name: 'IMG Worlds of Adventure',
    category: 'entertainment',
    description: 'Największy kryty park rozrywki na świecie ze strefami Marvel i Cartoon Network.',
    longDescription: `IMG Worlds of Adventure is Dubai's premier indoor theme park, spanning 1.5 million square feet of temperature-controlled entertainment. The park features four epic zones: Marvel, Cartoon Network, Lost Valley, and IMG Boulevard, offering thrilling rides, immersive experiences, and world-class entertainment for all ages.`,
    image: '/images/img-worlds.jpg',
    images: ['/images/img-worlds-1.jpg', '/images/img-worlds-2.jpg', '/images/img-worlds-3.jpg'],
    price: 299,
    rating: 4.3,
    latitude: 25.0569,
    longitude: 55.3019,
    duration: 300,
    bestTimeToVisit: 'Morning',
    tips: [
      'Book tickets online for better rates',
      'Visit on weekdays for shorter queues',
      'Download the park map before visiting',
      'Try the Velociraptor coaster first',
      'Check height requirements for rides'
    ],
    openingHours: { open: '11:00', close: '20:00' },
    popularTimes: {
      morning: 'Moderate',
      afternoon: 'Very Busy',
      evening: 'Busy'
    },
    affiliateInfo: {
      activities: [
        {
          id: 'img-worlds-ticket',
          name: 'IMG Worlds of Adventure Admission Ticket',
          rating: 4.3,
          price: 299,
          duration: '1 day',
          image: '/images/img-worlds-1.jpg',
          partner: 'getyourguide'
        }
      ]
    },
    location: 'Dubaj'
  },
  {
    id: 'dubai-creek',
    name: 'Dubai Creek',
    category: 'cultural',
    description: 'Historyczna zatoka dzieląca Dubaj, gdzie tradycyjne łodzie dhow pływają obok nowoczesnych budynków.',
    longDescription: `Dubai Creek is where the city's story began. Take an abra (traditional wooden boat) ride across the creek, visit the Gold and Spice Souks, and explore the Dubai Museum in Al Fahidi Historical District. The area provides a glimpse into Dubai's past as a pearl diving and trading port.`,
    image: '/images/dubai-creek.jpg',
    images: ['/images/dubai-creek-1.jpg', '/images/dubai-creek-2.jpg', '/images/dubai-creek-3.jpg'],
    price: 1,
    rating: 4.5,
    latitude: 25.2711,
    longitude: 55.3036,
    duration: 180,
    bestTimeToVisit: 'Late Afternoon',
    tips: [
      'Take an abra ride at sunset',
      'Visit the nearby souks',
      'Try traditional Arabic coffee in Al Fahidi'
    ],
    openingHours: { open: '5:00', close: '24:00' },
    popularTimes: {
      morning: 'Quiet',
      afternoon: 'Moderate',
      evening: 'Very Busy'
    },
    affiliateInfo: {
      hotels: [
        {
          id: 'hyatt-regency-dubai',
          name: 'Hyatt Regency Dubai',
          rating: 4.7,
          price: 1200,
          distance: 1.5,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
          partner: 'booking'
        }
      ],
      activities: [
        {
          id: 'dubai-creek-tour',
          name: 'Dubai Creek Tour',
          rating: 4.5,
          price: 50,
          duration: '2-3 hours',
          image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5',
          partner: 'getyourguide'
        }
      ]
    },
    location: 'Dubaj'
  },
  {
    id: 'jumeirah-beach',
    name: 'Jumeirah Beach',
    category: 'beaches',
    description: 'Popularna publiczna plaża z przepięknym widokiem na Burj Al Arab i krystalicznie czystą wodą.',
    longDescription: `Jumeirah Beach offers pristine white sand and crystal-clear waters with the iconic Burj Al Arab as a backdrop. The beach features excellent facilities including showers, changing rooms, and children's play areas. The adjacent Jumeirah Beach Park provides additional recreational facilities.`,
    image: '/images/jumeirah-beach.jpg',
    images: ['/images/jumeirah-beach-1.jpg', '/images/jumeirah-beach-2.jpg', '/images/jumeirah-beach-3.jpg'],
    price: 5,
    rating: 4.6,
    latitude: 25.2048,
    longitude: 55.2708,
    duration: 180,
    bestTimeToVisit: 'Early Morning',
    tips: [
      'Bring sun protection',
      'Visit on weekdays for fewer crowds',
      'Try water sports activities'
    ],
    openingHours: { open: '7:00', close: '22:00' },
    popularTimes: {
      morning: 'Moderate',
      afternoon: 'Very Busy',
      evening: 'Busy'
    },
    affiliateInfo: {
      hotels: [
        {
          id: 'burj-al-arab',
          name: 'Burj Al Arab',
          rating: 4.9,
          price: 3000,
          distance: 0.5,
          image: '/images/burj-al-arab.jpg',
          partner: 'booking'
        }
      ],
      activities: [
        {
          id: 'jumeirah-beach-activities',
          name: 'Jumeirah Beach Activities',
          rating: 4.5,
          price: 50,
          duration: '2-3 hours',
          image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5',
          partner: 'getyourguide'
        }
      ]
    },
    location: 'Dubaj'
  },
  {
    id: 'dubai-opera',
    name: 'Dubai Opera',
    category: 'entertainment',
    description: 'Oszałamiający architektoniczny majstersztyk goszczący światowej klasy występy artystyczne.',
    longDescription: `Dubai Opera is a masterpiece of contemporary architecture and a premier entertainment destination. The venue hosts opera, ballet, concerts, and theatrical productions in a stunning dhow-shaped building. The rooftop restaurant offers panoramic views of downtown Dubai.`,
    image: '/images/dubai-opera.jpg',
    images: ['/images/dubai-opera-1.jpg', '/images/dubai-opera-2.jpg', '/images/dubai-opera-3.jpg'],
    price: 200,
    rating: 4.7,
    latitude: 25.2052,
    longitude: 55.2789,
    duration: 180,
    bestTimeToVisit: 'Evening',
    tips: [
      'Book tickets well in advance',
      'Dress formally for performances',
      'Arrive early to explore the building'
    ],
    openingHours: { open: '10:00', close: '24:00' },
    popularTimes: {
      morning: 'Quiet',
      afternoon: 'Moderate',
      evening: 'Very Busy'
    },
    affiliateInfo: {
      hotels: [
        {
          id: 'address-downtown',
          name: 'Address Downtown',
          rating: 4.8,
          price: 1800,
          distance: 0.5,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
          partner: 'booking'
        }
      ],
      activities: [
        {
          id: 'dubai-opera-tickets',
          name: 'Dubai Opera Tickets',
          rating: 4.7,
          price: 200,
          duration: '2-3 hours',
          image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5',
          partner: 'getyourguide'
        }
      ]
    },
    location: 'Dubaj'
  },
  {
    id: 'ski-dubai',
    name: 'Ski Dubai',
    category: 'entertainment',
    description: 'Kryta hala narciarska oferująca zimowe sporty w sercu pustyni, z prawdziwym śniegiem i pingwinami.',
    longDescription: `Ski Dubai to niezwykłe miejsce, gdzie można doświadczyć zimowych sportów w środku pustyni. Kompleks oferuje 5 tras narciarskich o różnym poziomie trudności, spotkania z pingwinami, Snow Park dla dzieci oraz przytulną górską restaurację.`,
    image: '/images/ski-dubai.jpg',
    images: ['/images/ski-dubai-1.jpg', '/images/ski-dubai-2.jpg', '/images/ski-dubai-3.jpg'],
    price: 250,
    rating: 4.5,
    latitude: 25.1172,
    longitude: 55.2003,
    duration: 180,
    bestTimeToVisit: 'Morning',
    tips: [
      'Book penguin encounter in advance',
      'Wear long socks for comfort',
      'Take ski lessons if needed'
    ],
    openingHours: { open: '10:00', close: '23:00' },
    popularTimes: {
      morning: 'Busy',
      afternoon: 'Very Busy',
      evening: 'Moderate'
    },
    affiliateInfo: {
      hotels: [
        {
          id: 'kempinski-hotel-mall-of-the-emirates',
          name: 'Kempinski Hotel Mall of the Emirates',
          rating: 4.7,
          price: 1500,
          distance: 0.5,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
          partner: 'booking'
        }
      ],
      activities: [
        {
          id: 'ski-dubai-tickets',
          name: 'Ski Dubai Tickets',
          rating: 4.5,
          price: 250,
          duration: '2-3 hours',
          image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5',
          partner: 'getyourguide'
        }
      ]
    },
    location: 'Dubaj'
  },
  {
    id: 'xline-dubai-marina',
    name: 'XLine Dubai Marina',
    category: 'entertainment',
    description: 'Najdłuższa miejska tyrolka na świecie, oferująca ekscytujący zjazd nad Dubai Marina z prędkością do 80 km/h.',
    longDescription: `XLine Dubai Marina to najdłuższa miejska tyrolka na świecie, rozciągająca się na długości kilometra nad Dubai Marina. Zjazd rozpoczyna się z wysokości 170 metrów i oferuje niezapomniane wrażenia oraz spektakularne widoki na marinę i drapacze chmur. To idealna atrakcja dla poszukiwaczy adrenaliny.`,
    image: '/images/xline-dubai.jpg',
    images: ['/images/xline-dubai-1.jpg', '/images/xline-dubai-2.jpg', '/images/xline-dubai-3.jpg'],
    price: 650,
    rating: 4.8,
    duration: 60,
    bestTimeToVisit: 'Rano',
    tips: [
      'Zarezerwuj z wyprzedzeniem',
      'Ubierz się wygodnie',
      'Przybądź 30 minut przed wyznaczonym czasem'
    ],
    openingHours: { open: '9:00', close: '18:00' },
    location: 'Dubaj'
  },
  {
    id: 'dubai-aquarium',
    name: 'Dubai Aquarium & Underwater Zoo',
    category: 'entertainment',
    description: 'Jedno z największych akwariów na świecie z 10-milionowym zbiornikiem wodnym i tunelem spacerowym, gdzie można podziwiać rekiny, płaszczki i tysiące morskich stworzeń.',
    image: '/images/dubai-aquarium.jpg',
    price: 175,
    rating: 4.7,
    duration: 120,
    latitude: 25.1972,
    longitude: 55.2798,
    bestTimeToVisit: 'Morning or evening',
    tips: [
      'Book combo tickets with other Dubai Mall attractions',
      'Visit during feeding times',
      'Take the glass-bottom boat ride'
    ],
    openingHours: { open: '10:00', close: '22:00' },
    location: 'Dubaj'
  },
  {
    id: 'burj-al-arab',
    name: 'Burj Al Arab',
    category: 'architecture',
    description: 'Luksusowy hotel w kształcie żagla, symbol Dubaju i jedyny 7-gwiazdkowy hotel na świecie.',
    image: '/images/burj-al-arab.jpg',
    price: 0,
    rating: 4.9,
    duration: 120,
    latitude: 25.1412,
    longitude: 55.1853,
    bestTimeToVisit: 'Sunset',
    tips: [
      'Make a restaurant reservation to visit inside',
      'Take photos from Jumeirah Beach',
      'Book afternoon tea experience'
    ],
    openingHours: { open: '00:00', close: '23:59' },
    location: 'Dubaj'
  },
  {
    id: 'dubai-marina',
    name: 'Dubai Marina',
    category: 'architecture',
    description: 'Tętniąca życiem dzielnica z luksusowymi wieżowcami, jachtami i promenadą pełną restauracji.',
    image: '/images/dubai-marina.jpg',
    price: 0,
    rating: 4.7,
    duration: 180,
    latitude: 25.0819,
    longitude: 55.1367,
    bestTimeToVisit: 'Evening',
    tips: [
      'Take a dinner cruise',
      'Walk along Marina Walk',
      'Visit JBR Beach'
    ],
    openingHours: { open: '00:00', close: '23:59' },
    location: 'Dubaj'
  },
  {
    id: 'ain-dubai',
    name: 'Ain Dubai',
    category: 'entertainment',
    description: 'Największe koło obserwacyjne na świecie, oferujące zapierające dech w piersiach widoki na panoramę Dubaju i Wyspę Bluewaters.',
    image: '/images/ain-dubai.jpg',
    price: 130,
    rating: 4.6,
    duration: 38,
    latitude: 25.0825,
    longitude: 55.1181,
    bestTimeToVisit: 'Sunset',
    tips: [
      'Book sunset timing for best views',
      'Choose a clear day for visit',
      'Book premium cabin for special occasions'
    ],
    openingHours: { open: '12:00', close: '22:00' },
    location: 'Dubaj'
  },
  {
    id: 'atlantis-the-royal',
    name: 'Atlantis The Royal',
    category: 'architecture',
    description: 'Ultra-luksusowy kurort oferujący światowej klasy restauracje, rozrywkę i ekskluzywne zakwaterowanie.',
    image: '/images/atlantis-royal.jpg',
    price: 0,
    rating: 4.9,
    duration: 120,
    latitude: 25.1304,
    longitude: 55.1171,
    bestTimeToVisit: 'Evening',
    tips: [
      'Visit Cloudscape water feature',
      'Dine at celebrity chef restaurants',
      'Experience the infinity pool'
    ],
    openingHours: { open: '00:00', close: '23:59' },
    location: 'Dubaj'
  },
  {
    id: 'mall-of-emirates',
    name: 'Mall of the Emirates',
    category: 'shopping',
    description: 'Luksusowe centrum handlowe z kompleksem Ski Dubai, ekskluzywnymi sklepami i rozrywką.',
    image: '/images/mall-emirates.jpg',
    price: 0,
    rating: 4.7,
    duration: 240,
    latitude: 25.1181,
    longitude: 55.2008,
    bestTimeToVisit: 'Weekday afternoons',
    tips: [
      'Visit Ski Dubai',
      'Shop at luxury boutiques',
      'Try international dining options'
    ],
    openingHours: { open: '10:00', close: '22:00' },
    location: 'Dubaj'
  },
  {
    id: 'gold-souk',
    name: 'Gold Souk',
    category: 'shopping',
    description: 'Tradycyjny targ złota z setkami sprzedawców oferujących biżuterię ze złota i kamieni szlachetnych.',
    image: '/images/gold-souk.jpg',
    price: 0,
    rating: 4.5,
    duration: 120,
    latitude: 25.2867,
    longitude: 55.2973,
    bestTimeToVisit: 'Morning',
    tips: [
      'Bargain for better prices',
      'Check gold prices beforehand',
      'Visit nearby Spice Souk'
    ],
    openingHours: { open: '10:00', close: '22:00' },
    location: 'Dubaj'
  },
  {
    id: 'spice-souk',
    name: 'Spice Souk',
    category: 'shopping',
    description: 'Tradycyjny targ przypraw w dzielnicy Deira, gdzie można znaleźć egzotyczne przyprawy, zioła i tradycyjne arabskie perfumy.',
    image: '/images/spice-souk.jpg',
    price: 0,
    rating: 4.4,
    duration: 60,
    latitude: 25.2862,
    longitude: 55.2973,
    bestTimeToVisit: 'Morning',
    tips: [
      'Bargain with vendors',
      'Try local spice mixes',
      'Take photos of colorful displays'
    ],
    openingHours: { open: '10:00', close: '22:00' },
    location: 'Dubaj'
  },
  {
    id: 'global-village',
    name: 'Global Village',
    category: 'entertainment',
    description: 'Wielokulturowy park rozrywki i centrum handlowe z pawilonami reprezentującymi różne kraje świata.',
    image: '/images/global-village.jpg',
    price: 18,
    rating: 4.6,
    duration: 240,
    latitude: 25.0677,
    longitude: 55.3014,
    bestTimeToVisit: 'Evening',
    tips: [
      'Try international cuisines',
      'Watch cultural shows',
      'Visit during festival season'
    ],
    openingHours: { open: '16:00', close: '24:00' },
    location: 'Dubaj'
  },
  {
    id: 'wild-wadi',
    name: 'Wild Wadi Waterpark',
    category: 'entertainment',
    description: 'Tematyczny park wodny z 30 atrakcjami i zjeżdżalniami, położony przy słynnym Burj Al Arab.',
    image: '/images/wild-wadi.jpg',
    price: 249,
    rating: 4.5,
    duration: 360,
    latitude: 25.1419,
    longitude: 55.1919,
    bestTimeToVisit: 'Morning',
    tips: [
      'Book online for discounts',
      'Arrive early to avoid queues',
      'Try Leap of Faith slide'
    ],
    openingHours: { open: '10:00', close: '18:00' },
    location: 'Dubaj'
  },
  {
    id: 'jumeirah-mosque',
    name: 'Jumeirah Mosque',
    category: 'cultural',
    description: 'Jedyny meczet w Dubaju otwarty dla niemuzułmańskich zwiedzających, oferujący programy poznawania kultury islamskiej.',
    image: '/images/jumeirah-mosque.jpg',
    price: 25,
    rating: 4.7,
    duration: 90,
    latitude: 25.2332,
    longitude: 55.2615,
    bestTimeToVisit: 'Morning',
    tips: [
      'Join guided tour at 10am',
      'Dress modestly',
      'Book cultural breakfast tour'
    ],
    openingHours: { open: '09:00', close: '16:00' },
    location: 'Dubaj'
  },
  {
    id: 'dubai-fountain',
    name: 'Fontanny Dubajskie',
    category: 'entertainment',
    description: 'Największa na świecie tańcząca fontanna, prezentująca spektakularne pokazy wodno-muzyczne.',
    image: '/images/dubai-fountain.jpg',
    price: 0,
    rating: 4.8,
    duration: 30,
    latitude: 25.1972,
    longitude: 55.2744,
    bestTimeToVisit: 'Evening',
    tips: [
      'Watch from Dubai Mall waterfront',
      'Book a fountain lake ride',
      'Time visit with evening shows'
    ],
    openingHours: { open: '13:00', close: '23:00' },
    location: 'Dubaj'
  },
  {
    id: 'infinity-des-lumieres',
    name: 'Infinity des Lumières',
    category: 'entertainment',
    description: 'Największe centrum sztuki cyfrowej na Bliskim Wschodzie, oferujące immersyjne wystawy cyfrowe.',
    image: '/images/infinity-des-lumieres.jpg',
    price: 125,
    rating: 4.6,
    duration: 90,
    latitude: 25.1972,
    longitude: 55.2744,
    bestTimeToVisit: 'Afternoon',
    tips: [
      'Book tickets online',
      'Arrive 15 minutes early',
      'Check exhibition schedule'
    ],
    openingHours: { open: '10:00', close: '20:00' },
    location: 'Dubaj'
  },
  {
    id: 'deep-dive-dubai',
    name: 'Deep Dive Dubai',
    category: 'entertainment',
    description: 'Najgłębszy na świecie basen do nurkowania z podwodnym miastem i niezwykłymi atrakcjami.',
    image: '/images/deep-dive-dubai.jpg',
    price: 800,
    rating: 4.8,
    duration: 180,
    latitude: 25.1693,
    longitude: 55.3802,
    bestTimeToVisit: 'Morning',
    tips: [
      'Book in advance',
      'Choose experience level',
      'Bring swimwear'
    ],
    openingHours: { open: '09:00', close: '18:00' },
    location: 'Dubaj'
  },
  {
    id: 'dubai-festival-city-mall',
    name: 'Dubai Festival City Mall',
    category: 'shopping',
    description: 'Prestiżowe centrum handlowe znane ze spektakularnego pokazu IMAGINE nad Dubai Creek.',
    longDescription: `Dubai Festival City Mall is a major shopping destination that combines retail, dining, and entertainment. The mall is famous for its IMAGINE show - a multi-sensory experience featuring water, light, and sound. With over 400 retail outlets, waterfront dining options, and family entertainment areas, it offers a complete lifestyle experience.`,
    image: '/images/dubai-festival-city-mall.jpg',
    images: ['/images/dubai-festival-city-mall-1.jpg', '/images/dubai-festival-city-mall-2.jpg', '/images/dubai-festival-city-mall-3.jpg'],
    price: 0,
    rating: 4.5,
    latitude: 25.2207,
    longitude: 55.3492,
    duration: 180,
    bestTimeToVisit: 'Evening for the IMAGINE show',
    tips: [
      'Visit in the evening to catch the IMAGINE show',
      'Combine shopping with waterfront dining',
      'Check the show timings before your visit',
      'Visit IKEA for unique shopping experience',
      'Enjoy the waterfront promenade views'
    ],
    openingHours: { open: '10:00', close: '22:00' },
    popularTimes: {
      morning: 'Moderate',
      afternoon: 'Busy',
      evening: 'Very Busy'
    },
    affiliateInfo: {
      ...defaultAffiliateInfo,
      hotels: [
        {
          id: 'intercontinental-dubai-festival-city',
          name: 'InterContinental Dubai Festival City',
          rating: 4.7,
          price: 800,
          distance: 0.1,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
          partner: 'booking'
        }
      ]
    },
    location: 'Dubaj'
  },
  {
    id: 'textile-souk',
    name: 'Textile Souk',
    category: 'shopping',
    description: 'Tradycyjny targ oferujący tkaniny, tekstylia i tradycyjną odzież w sercu starego Dubaju.',
    image: '/images/textile-souk.jpg',
    price: 0,
    rating: 4.3,
    duration: 60,
    latitude: 25.2847,
    longitude: 55.2961,
    bestTimeToVisit: 'Morning',
    tips: [
      'Bargain for better prices',
      'Take abra to cross Creek',
      'Visit early morning'
    ],
    openingHours: { open: '10:00', close: '22:00' },
    location: 'Dubaj'
  },
  {
    id: 'city-walk',
    name: 'City Walk',
    category: 'entertainment',
    description: 'Nowoczesna dzielnica lifestylowa łącząca zakupy, rozrywkę i gastronomię w stylowym otoczeniu miejskim.',
    longDescription: `City Walk to innowacyjna dzielnica w sercu Dubaju, która łączy w sobie europejski styl życia z arabską gościnnością. Ta nowoczesna przestrzeń miejska oferuje wyjątkowe doświadczenia zakupowe, kulinarne i rozrywkowe. Znajdziesz tu designerskie butiki, światowej klasy restauracje, kawiarnie, kina oraz interaktywne atrakcje dla całej rodziny. Charakterystyczna architektura, przestronne place i klimatyzowane alejki tworzą przyjemną atmosferę do spacerów przez cały rok. City Walk słynie również z imponujących murali i instalacji artystycznych, które dodają dzielnicy wyjątkowego charakteru.`,
    image: '/images/city-walk.jpg',
    images: [
      '/images/city-walk.jpg',
      '/images/city-walk-2.jpg',
      '/images/city-walk-3.jpg',
      '/images/city-walk-4.jpg',
      '/images/city-walk-5.jpg',
      '/images/city-walk-6.jpg'
    ],
    price: 0,
    rating: 4.6,
    latitude: 25.2084,
    longitude: 55.2619,
    duration: 180,
    bestTimeToVisit: 'Evening',
    openingHours: {
      weekday: '10:00 - 22:00',
      weekend: '10:00 - 00:00'
    },
    location: 'Dubaj',
    address: 'Al Safa Street, Dubai',
    affiliateInfo: {
      ...defaultAffiliateInfo,
      hotels: [
        {
          id: 'rove-city-walk',
          name: 'Rove City Walk',
          rating: 4.5,
          price: 450,
          distance: 0.1,
          image: '/images/rove-city-walk.jpg',
          partner: 'booking'
        }
      ]
    }
  },
  {
    id: 'aquaventure',
    name: 'Aquaventure Waterpark',
    category: 'entertainment',
    description: 'Największy park wodny na Bliskim Wschodzie z ekscytującymi zjeżdżalniami i atrakcjami wodnymi.',
    image: '/images/aquaventure.jpg',
    price: 299,
    rating: 4.7,
    duration: 420,
    latitude: 25.1304,
    longitude: 55.1171,
    bestTimeToVisit: 'Morning',
    tips: [
      'Book online for discounts',
      'Arrive early to avoid queues',
      'Try Leap of Faith slide'
    ],
    openingHours: { open: '10:00', close: '18:00' },
    location: 'Dubaj'
  },
  {
    id: 'dubai-parks-resorts',
    name: 'Dubai Parks and Resorts',
    category: 'entertainment',
    description: 'Największy zintegrowany kompleks parków rozrywki na Bliskim Wschodzie.',
    image: '/images/dubai-parks-resorts.jpg',
    price: 330,
    rating: 4.5,
    duration: 480,
    latitude: 25.0333,
    longitude: 55.0167,
    bestTimeToVisit: 'Morning',
    tips: [
      'Buy multi-park tickets',
      'Download park app',
      'Visit MOTIONGATE first'
    ],
    openingHours: { open: '11:00', close: '20:00' },
    location: 'Dubaj'
  },
  {
    id: 'butterfly-garden',
    name: 'Dubai Butterfly Garden',
    category: 'entertainment',
    description: 'Największy na świecie kryty ogród motyli z tysiącami kolorowych okazów.',
    image: '/images/butterfly-garden.jpg',
    price: 55,
    rating: 4.3,
    duration: 120,
    latitude: 25.0623,
    longitude: 55.2417,
    bestTimeToVisit: 'Morning',
    tips: [
      'Visit during butterfly feeding',
      'Bring your camera',
      'Combine with Miracle Garden'
    ],
    openingHours: { open: '09:00', close: '18:00' },
    location: 'Dubaj'
  },
  {
    id: 'dubai-garden-glow',
    name: 'Dubai Garden Glow',
    category: 'entertainment',
    description: 'Największy na świecie ogród świetlny z artystycznymi instalacjami świecącymi w ciemności.',
    longDescription: `Dubai Garden Glow is a unique attraction combining art, technology, and nature to create a magical nighttime experience. The park features millions of energy-saving LED lights arranged in stunning artistic installations, along with educational exhibits about sustainability and conservation.`,
    image: '/images/dubai-garden-glow.jpg',
    images: ['/images/dubai-garden-glow-1.jpg', '/images/dubai-garden-glow-2.jpg', '/images/dubai-garden-glow-3.jpg'],
    price: 65,
    rating: 4.6,
    latitude: 25.2384,
    longitude: 55.3003,
    duration: 180,
    bestTimeToVisit: 'Evening',
    tips: [
      'Visit after sunset for the best experience',
      'Bring a camera for night photography',
      'Plan to spend at least 2-3 hours'
    ],
    openingHours: { open: '16:00', close: '23:00' },
    popularTimes: {
      morning: 'Closed',
      afternoon: 'Moderate',
      evening: 'Very Busy'
    },
    affiliateInfo: defaultAffiliateInfo,
    location: 'Dubaj'
  },
  {
    id: 'al-fahidi',
    name: 'Al Fahidi Historical District',
    category: 'cultural',
    description: 'Zabytkowa dzielnica prezentująca tradycyjną architekturę arabską i kulturę dawnego Dubaju.',
    image: '/images/al-fahidi.jpg',
    price: 0,
    rating: 4.5,
    duration: 180,
    latitude: 25.2535,
    longitude: 55.2867,
    bestTimeToVisit: 'Morning',
    tips: [
      'Take a guided walking tour',
      'Visit Coffee Museum',
      'Explore art galleries'
    ],
    openingHours: { open: '09:00', close: '18:00' },
    location: 'Dubaj'
  },
  {
    id: 'dubai-museum',
    name: 'Dubai Museum',
    category: 'cultural',
    description: 'Muzeum w forcie Al Fahidi przedstawiające historię i dziedzictwo kulturowe Dubaju.',
    image: '/images/dubai-museum.jpg',
    price: 3,
    rating: 4.4,
    duration: 90,
    latitude: 25.2532,
    longitude: 55.2972,
    bestTimeToVisit: 'Morning',
    tips: [
      'Start at Al Fahidi Fort',
      'Visit underground galleries',
      'Combine with Creek tour'
    ],
    openingHours: { open: '09:00', close: '17:00' },
    location: 'Dubaj'
  },
  {
    id: 'sheikh-mohammed-centre',
    name: 'Sheikh Mohammed Centre',
    category: 'cultural',
    description: 'Centrum kulturowe promujące zrozumienie między różnymi kulturami.',
    image: '/images/sheikh-mohammed-centre.jpg',
    price: 0,
    rating: 4.6,
    duration: 120,
    latitude: 25.2477,
    longitude: 55.3009,
    bestTimeToVisit: 'Morning',
    tips: [
      'Join cultural programs',
      'Book Arabic classes',
      'Attend cultural events'
    ],
    openingHours: { open: '09:00', close: '16:00' },
    location: 'Dubaj'
  },
  {
    id: 'etihad-museum',
    name: 'Etihad Museum',
    category: 'cultural',
    description: 'Nowoczesne muzeum prezentujące historię powstania Zjednoczonych Emiratów Arabskich i ich konstytucji.',
    image: '/images/etihad-museum.jpg',
    price: 25,
    rating: 4.5,
    duration: 120,
    latitude: 25.2477,
    longitude: 55.2869,
    bestTimeToVisit: 'Morning',
    tips: [
      'Take guided tour',
      'Visit Union House',
      'See original constitution'
    ],
    openingHours: { open: '10:00', close: '20:00' },
    location: 'Dubaj'
  },
  {
    id: 'desert-conservation',
    name: 'Dubai Desert Conservation Reserve',
    category: 'parks',
    description: 'Rezerwat przyrody na pustyni oferujący safari, obserwację dzikich zwierząt i tradycyjne aktywności pustynne.',
    image: '/images/desert-conservation.jpg',
    price: 150,
    rating: 4.8,
    duration: 360,
    latitude: 24.8361,
    longitude: 55.6681,
    bestTimeToVisit: 'Early morning or late afternoon',
    tips: [
      'Book safari tour',
      'Watch wildlife',
      'Try desert activities'
    ],
    openingHours: { open: '00:00', close: '23:59' },
    location: 'Dubaj'
  },
  {
    id: 'ras-al-khor',
    name: 'Ras Al Khor Wildlife Sanctuary',
    category: 'parks',
    description: 'Rezerwat przyrody z rozległymi terenami podmokłymi, gdzie można obserwować flamingi i inne ptaki wodne.',
    image: '/images/ras-al-khor.jpg',
    price: 0,
    rating: 4.4,
    duration: 120,
    latitude: 25.1827,
    longitude: 55.3527,
    bestTimeToVisit: 'Morning',
    tips: [
      'Visit during winter',
      'Bring binoculars',
      'Check tide times'
    ],
    openingHours: { open: '09:00', close: '16:00' },
    location: 'Dubaj'
  },
  {
    id: 'dubai-safari',
    name: 'Dubai Safari Park',
    category: 'entertainment',
    description: 'Rozległy park safari z różnorodnymi gatunkami zwierząt i edukacyjnymi pokazami.',
    image: '/images/dubai-safari.jpg',
    price: 50,
    rating: 4.3,
    duration: 240,
    latitude: 25.1866,
    longitude: 55.4777,
    bestTimeToVisit: 'Morning',
    tips: [
      'Take guided tour',
      'Visit during feeding time',
      'Ride safari train'
    ],
    openingHours: { open: '09:00', close: '17:00' },
    location: 'Dubaj'
  },
  {
    id: 'zabeel-park',
    name: 'Zabeel Park',
    category: 'entertainment',
    description: 'Nowoczesny park z Dubai Frame, terenami rekreacyjnymi i technologicznymi atrakcjami.',
    image: '/images/zabeel-park.jpg',
    price: 5,
    rating: 4.4,
    duration: 180,
    latitude: 25.2284,
    longitude: 55.3052,
    bestTimeToVisit: 'Late afternoon',
    tips: [
      'Visit Dubai Frame',
      'Try Ripe Market',
      'Use jogging track'
    ],
    openingHours: { open: '08:00', close: '22:00' },
    location: 'Dubaj'
  },
  {
    id: 'jbr-beach',
    name: 'JBR Beach',
    category: 'beaches',
    description: 'Tętniąca życiem plaża miejska z licznymi restauracjami, sportami wodnymi i rozrywką.',
    image: '/images/jbr-beach.jpg',
    price: 0,
    rating: 4.6,
    duration: 180,
    latitude: 25.0799,
    longitude: 55.1347,
    bestTimeToVisit: 'Early morning or late afternoon',
    tips: [
      'Try water sports',
      'Visit The Beach mall',
      'Watch street performers'
    ],
    openingHours: { open: '00:00', close: '23:59' },
    location: 'Dubaj'
  },
  {
    id: 'kite-beach',
    name: 'Kite Beach',
    category: 'beaches',
    description: 'Plaża sportowa słynąca z kitesurfingu i innych sportów wodnych, z widokiem na Burj Al Arab.',
    image: '/images/kite-beach.jpg',
    price: 0,
    rating: 4.5,
    duration: 180,
    latitude: 25.1417,
    longitude: 55.1906,
    bestTimeToVisit: 'Morning',
    tips: [
      'Try kitesurfing',
      'Watch sunset',
      'Visit food trucks'
    ],
    openingHours: { open: '00:00', close: '23:59' },
    location: 'Dubaj'
  },
  {
    id: 'love-lakes',
    name: 'Love Lakes',
    category: 'entertainment',
    description: 'Malownicze jeziora w kształcie serc na pustyni Al Qudra, popularne miejsce do obserwacji zachodów słońca.',
    image: '/images/love-lakes.jpg',
    price: 0,
    rating: 4.5,
    duration: 120,
    latitude: 24.9837,
    longitude: 55.3639,
    bestTimeToVisit: 'Sunset',
    tips: [
      'Visit during sunset',
      'Bring picnic',
      'Watch wildlife'
    ],
    openingHours: { open: '00:00', close: '23:59' },
    location: 'Dubaj'
  },
  {
    id: 'view-palm',
    name: 'The View at The Palm',
    category: 'entertainment',
    description: 'Punkt widokowy oferujący 360° widok z Palm Jumeirah.',
    image: '/images/view-palm.jpg',
    price: 100,
    rating: 4.6,
    duration: 60,
    latitude: 25.1172,
    longitude: 55.1389,
    bestTimeToVisit: 'Sunset',
    tips: [
      'Book sunset slot',
      'Visit VR experience',
      'Take Palm Monorail'
    ],
    openingHours: { open: '10:00', close: '22:00' },
    location: 'Dubaj'
  },
  {
    id: 'green-planet',
    name: 'The Green Planet',
    category: 'entertainment',
    description: 'Biodome odtwarzający środowisko lasów deszczowych z różnorodną florą i fauną.',
    image: '/images/green-planet.jpg',
    price: 110,
    rating: 4.4,
    duration: 120,
    latitude: 25.2095,
    longitude: 55.2623,
    bestTimeToVisit: 'Morning',
    tips: [
      'Join animal encounters',
      'Watch feeding sessions',
      'Book guided tour'
    ],
    openingHours: { open: '10:00', close: '19:00' },
    location: 'Dubaj'
  },
  {
    id: 'la-mer',
    name: 'La Mer',
    category: 'beaches',
    description: 'Plaża nadmorska z centrum handlowym, restauracjami i rozrywką.',
    image: '/images/la-mer.jpg',
    price: 0,
    rating: 4.6,
    duration: 180,
    latitude: 25.2266,
    longitude: 55.2651,
    bestTimeToVisit: 'Late afternoon',
    tips: [
      'Try water activities',
      'Visit Laguna Waterpark',
      'Enjoy beachfront dining'
    ],
    openingHours: { open: '10:00', close: '24:00' },
    location: 'Dubaj'
  },
  {
    id: 'the-pointe',
    name: 'The Pointe',
    category: 'entertainment',
    description: 'Nadmorski kompleks gastronomiczno-rozrywkowy z fontanną Palm.',
    image: '/images/the-pointe.jpg',
    price: 0,
    rating: 4.5,
    duration: 180,
    latitude: 25.1172,
    longitude: 55.1389,
    bestTimeToVisit: 'Evening',
    tips: [
      'Watch Palm Fountain show',
      'Try waterfront dining',
      'Take Palm Monorail'
    ],
    openingHours: { open: '10:00', close: '24:00' },
    location: 'Dubaj'
  },
  {
    id: 'address-sky-view',
    name: 'Address Sky View',
    category: 'architecture',
    description: 'Luksusowy kompleks hotelowy z ekscytującym tarasem widokowym Sky Views Dubai i zjeżdżalnią szklaną.',
    image: '/images/address-sky-view.jpg',
    price: 149,
    rating: 4.7,
    duration: 90,
    latitude: 25.1972,
    longitude: 55.2744,
    bestTimeToVisit: 'Sunset',
    tips: [
      'Try glass slide',
      'Visit observation deck',
      'Book sunset timing'
    ],
    openingHours: { open: '10:00', close: '24:00' },
    location: 'Dubaj'
  },
  {
    id: 'sheikh-zayed-mosque',
    name: 'Wielki Meczet Sheikh Zayed',
    description: 'Największy meczet w Zjednoczonych Emiratach Arabskich',
    image: '/images/sheikh-zayed-mosque.jpg',
    category: 'cultural',
    location: 'Abu Dhabi',
    duration: 120,
    price: 0,
    route: '/abu-dhabi/sheikh-zayed-mosque'
  },
  {
    id: 'louvre-abu-dhabi',
    name: 'Luwr Abu Dhabi',
    description: 'Pierwsze uniwersalne muzeum w świecie arabskim',
    image: '/images/louvre-abu-dhabi.jpg',
    category: 'cultural',
    location: 'Abu Dhabi',
    duration: 180,
    price: 63,
    route: '/abu-dhabi/louvre-abu-dhabi',
    address: 'Saadiyat Cultural District, Saadiyat Island, Abu Dhabi'
  },
  {
    id: 'emirates-palace',
    name: 'Emirates Palace',
    description: 'Luksusowy hotel i symbol bogactwa Abu Dhabi',
    image: '/images/emirates-palace.jpg',
    category: 'architecture',
    location: 'Abu Dhabi',
    duration: 90,
    price: 0,
    route: '/abu-dhabi/emirates-palace'
  },
  {
    id: 'ferrari-world',
    name: 'Ferrari World',
    description: 'Największy zadaszony park rozrywki z motywem Ferrari',
    image: '/images/ferrari-world.jpg',
    category: 'entertainment',
    location: 'Abu Dhabi',
    duration: 300,
    price: 310,
    route: '/abu-dhabi/ferrari-world'
  },
  {
    id: 'yas-waterworld',
    name: 'Yas Waterworld',
    description: 'Ogromny aquapark z ponad 40 atrakcjami',
    image: '/images/yas-waterworld.jpg',
    category: 'entertainment',
    location: 'Abu Dhabi',
    duration: 240,
    price: 270,
    route: '/abu-dhabi/yas-waterworld'
  },
  {
    id: 'warner-bros-world',
    name: 'Warner Bros World',
    description: 'Zadaszony park rozrywki z postaciami Warner Bros',
    image: '/images/warner-bros-world.jpg',
    category: 'entertainment',
    location: 'Abu Dhabi',
    duration: 240,
    price: 295,
    route: '/abu-dhabi/warner-bros-world'
  },
  {
    id: 'yas-marina-circuit',
    name: 'Tor Yas Marina',
    description: 'Słynny tor Formuły 1, miejsce wyścigu o Grand Prix Abu Dhabi',
    image: '/images/yas-marina-circuit.jpg',
    category: 'entertainment',
    location: 'Abu Dhabi',
    duration: 120,
    price: 120,
    route: '/abu-dhabi/yas-marina-circuit'
  },
  {
    id: 'falcon-hospital',
    name: 'Falcon Hospital',
    category: 'cultural',
    description: 'Unikalne centrum medyczne dla sokołów, oferujące fascynujące wycieczki edukacyjne.',
    image: '/images/falcon-hospital.jpg',
    location: 'Abu Dhabi',
    duration: 120,
    price: 170,
    route: '/abu-dhabi/falcon-hospital'
  },
  {
    id: 'heritage-village',
    name: 'Heritage Village',
    category: 'cultural',
    description: 'Tradycyjna wioska prezentująca życie i zwyczaje dawnego Dubaju i regionu Zatoki Perskiej.',
    image: '/images/heritage-village.jpg',
    price: 0,
    rating: 4.2,
    duration: 90,
    latitude: 25.2977,
    longitude: 55.3131,
    bestTimeToVisit: 'Morning',
    tips: [
      'Watch craft demonstrations',
      'Try traditional activities',
      'Visit during winter'
    ],
    openingHours: { open: '09:00', close: '17:00' },
    location: 'Dubaj'
  },
  {
    id: 'desert-conservation',
    name: 'Dubai Desert Conservation Reserve',
    category: 'parks',
    description: 'Rezerwat przyrody na pustyni oferujący safari, obserwację dzikich zwierząt i tradycyjne aktywności pustynne.',
    image: '/images/desert-conservation.jpg',
    price: 150,
    rating: 4.8,
    duration: 360,
    latitude: 24.8361,
    longitude: 55.6681,
    bestTimeToVisit: 'Early morning or late afternoon',
    tips: [
      'Book safari tour',
      'Watch wildlife',
      'Try desert activities'
    ],
    openingHours: { open: '00:00', close: '23:59' },
    location: 'Dubaj'
  },
  {
    id: 'observation-deck',
    name: 'Observation Deck at 300',
    description: 'Punkt widokowy na 74. piętrze Etihad Towers',
    image: '/images/observation-deck.jpg',
    category: 'entertainment',
    location: 'Abu Dhabi',
    duration: 60,
    price: 95,
    route: '/abu-dhabi/observation-deck'
  },
  {
    id: 'emirates-palace',
    name: 'Emirates Palace',
    description: 'Luksusowy hotel i symbol bogactwa Abu Dhabi',
    image: '/images/emirates-palace.jpg',
    category: 'architecture',
    location: 'Abu Dhabi',
    duration: 90,
    price: 0,
    route: '/abu-dhabi/emirates-palace'
  },
  {
    id: 'emirates-auto-museum',
    name: 'Emirates National Auto Museum',
    description: 'Kolekcja ponad 200 klasycznych samochodów i pojazdów szejka Hamada',
    image: '/images/emirates-auto-museum.jpg',
    category: 'cultural',
    location: 'Abu Dhabi',
    duration: 120,
    price: 50,
    route: '/abu-dhabi/emirates-auto-museum'
  },
  {
    id: 'al-ain-zoo',
    name: 'Al Ain Zoo',
    description: 'Największe zoo w ZEA z bogatą kolekcją zwierząt pustynnych i programami ochrony gatunków',
    image: '/images/al-ain-zoo.jpg',
    category: 'entertainment',
    location: 'Abu Dhabi',
    duration: 180,
    price: 30,
    route: '/abu-dhabi/al-ain-zoo'
  },
  {
    id: 'mangrove-national-park',
    name: 'Mangrove National Park',
    category: 'parks',
    description: 'Rozległy park namorzynowy oferujący możliwość kajakowania i obserwacji dzikiej przyrody.',
    image: '/images/mangrove-national-park.jpg',
    location: 'Abu Dhabi',
    duration: 120,
    price: 0,
    route: '/abu-dhabi/mangrove-national-park'
  },
  {
    id: 'abu-dhabi-mall',
    name: 'Abu Dhabi Mall',
    description: 'Jedno z największych centrów handlowych w Abu Dhabi, oferujące szeroki wybór sklepów, restauracji i rozrywki',
    image: '/images/abu-dhabi-mall.jpg',
    category: 'shopping',
    location: 'Abu Dhabi',
    duration: 120,
    price: 0,
    route: '/abu-dhabi/abu-dhabi-mall',
    address: 'Tourist Club Area, Abu Dhabi'
  },
  {
    id: 'bollywood-parks',
    name: 'Bollywood Parks Dubai',
    category: 'entertainment',
    description: 'Pierwszy na świecie park tematyczny inspirowany magią kina Bollywood, oferujący spektakularne pokazy i atrakcje.',
    image: '/images/bollywood-parks.jpg',
    price: 295,
    rating: 4.5,
    duration: 240,
    location: 'Dubaj',
    openingHours: { open: '11:00', close: '20:00' }
  },
  {
    id: 'dubaj-skok-ze-spadochronem',
    name: 'Skok ze spadochronem w Dubaju',
    category: 'entertainment',
    description: 'Niezapomniana przygoda ze skokiem ze spadochronem nad Palm Jumeirah z widokiem na panoramę Dubaju.',
    image: '/images/skok-ze-spadochronem.jpg',
    price: 3000,
    rating: 4.9,
    duration: 180,
    location: 'Dubaj',
    openingHours: { open: '7:00', close: '18:00' }
  },
  {
    id: 'museum-of-future',
    name: 'Museum of the Future',
    category: 'entertainment',
    description: 'Futurystyczne muzeum prezentujące innowacyjne technologie i wizję przyszłości ludzkości.',
    image: '/images/museum-future.jpg',
    price: 145,
    rating: 4.8,
    duration: 120,
    location: 'Dubaj',
    openingHours: { open: '10:00', close: '18:00' }
  },
  {
    id: 'motiongate',
    name: 'Motiongate Dubai',
    category: 'entertainment',
    description: 'Największy park rozrywki na Bliskim Wschodzie inspirowany Hollywood, z atrakcjami opartymi na filmach DreamWorks, Columbia Pictures i Lionsgate.',
    image: '/images/motiongate.jpg',
    price: 295,
    rating: 4.7,
    duration: 360,
    location: 'Dubaj',
    openingHours: { open: '11:00', close: '20:00' }
  }
];

export default attractions;
