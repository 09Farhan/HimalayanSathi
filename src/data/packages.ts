import { Package } from '@/lib/types';

export const packages: Package[] = [
  {
<<<<<<< HEAD
    id: 'darjeeling-weekend',
    title: 'Darjeeling Weekend Getaway',
    destination: 'Darjeeling',
    region: 'darjeeling',
    duration: '3 Days / 2 Nights',
    durationCategory: 'weekend',
    type: 'family',
    priceRange: '₹8,000 - ₹12,000',
    startingPrice: 8500,
    shortDescription: 'A quick escape to the Queen of Hills covering major tourist spots and tea gardens.',
    itinerary: [
      { day: 1, title: 'Arrival in Darjeeling', description: 'Arrive at Bagdogra Airport/NJP Railway Station. Transfer to Darjeeling. Check-in and evening free for leisure at the Mall.' },
      { day: 2, title: 'Darjeeling Sightseeing', description: 'Early morning visit to Tiger Hill for sunrise. Later visit Batasia Loop, Ghoom Monastery, and Himalayan Mountaineering Institute.' },
      { day: 3, title: 'Departure', description: 'After breakfast, check-out and transfer to Bagdogra Airport/NJP Railway Station for your onward journey.' }
    ],
    inclusions: ['Accommodation', 'Breakfast', 'Transportation', 'Sightseeing as per itinerary'],
    exclusions: ['Airfare/Train fare', 'Personal expenses', 'Entry fees', 'Meals not mentioned'],
    image: '/images/darjeeling.jpg',
    gallery: ['/images/darjeeling.jpg'],
    featured: false
  },
  {
    id: 'darjeeling-gangtok-delight',
    title: 'Darjeeling Gangtok Delight',
    destination: 'Darjeeling & Gangtok',
    region: 'darjeeling',
    duration: '6 Days / 5 Nights',
    durationCategory: '4-6 days',
    type: 'family',
    priceRange: '₹18,000 - ₹25,000',
    startingPrice: 19500,
    shortDescription: 'Experience the best of Darjeeling and Sikkim with this comprehensive tour package.',
    itinerary: [
      { day: 1, title: 'Arrival at NJP/Bagdogra & Transfer to Gangtok', description: 'Meet our representative and transfer to Gangtok. Evening free to explore MG Marg.' },
      { day: 2, title: 'Gangtok Sightseeing', description: 'Full day sightseeing in Gangtok covering Tsomgo Lake and Baba Mandir.' },
      { day: 3, title: 'Transfer to Darjeeling', description: 'Morning transfer to Darjeeling via Peshok Tea Gardens.' },
      { day: 4, title: 'Darjeeling Local Sightseeing', description: 'Tiger Hill sunrise, Batasia Loop, Ghoom Monastery, and Peace Pagoda.' },
      { day: 5, title: 'Mirik Excursion', description: 'Day trip to Mirik, enjoying the lake and tea gardens.' },
      { day: 6, title: 'Departure', description: 'Transfer to airport/railway station.' }
    ],
    inclusions: ['Accommodation', 'Breakfast & Dinner', 'Private Cab', 'Permits'],
    exclusions: ['Flights', 'Lunch', 'Entry fees to monuments'],
    image: '/images/darjeeling.jpg',
    gallery: ['/images/darjeeling.jpg', '/images/sikkim.jpg'],
    featured: true
  },
  {
    id: 'kalimpong-darjeeling-honeymoon',
    title: 'Romantic Kalimpong & Darjeeling',
    destination: 'Kalimpong & Darjeeling',
    region: 'darjeeling',
    duration: '5 Days / 4 Nights',
    durationCategory: '4-6 days',
    type: 'honeymoon',
    priceRange: '₹16,000 - ₹22,000',
    startingPrice: 17500,
    shortDescription: 'A serene and romantic getaway in the peaceful hills of Kalimpong and Darjeeling.',
    itinerary: [
      { day: 1, title: 'Arrival & Transfer to Kalimpong', description: 'Arrive at NJP/IXB and transfer to Kalimpong. Relax in your resort.' },
      { day: 2, title: 'Kalimpong Sightseeing', description: 'Visit Deolo Hill, Pine View Nursery, and Zang Dhok Palri Phodang.' },
      { day: 3, title: 'Transfer to Darjeeling', description: 'Scenic drive to Darjeeling. Evening stroll at the Chowrasta Mall.' },
      { day: 4, title: 'Darjeeling Romance', description: 'Toy train ride (optional) and local sightseeing.' },
      { day: 5, title: 'Departure', description: 'Check out and transfer for onward journey.' }
    ],
    inclusions: ['Premium Accommodation', 'Meals', 'Private Cab', 'Candlelight dinner'],
    exclusions: ['Airfare', 'Personal expenses'],
    image: '/images/darjeeling.jpg',
    gallery: ['/images/darjeeling.jpg'],
    featured: false
  },
  {
    id: 'sikkim-bliss',
    title: 'Sikkim Bliss Tour',
    destination: 'Gangtok, Lachen, Lachung',
    region: 'sikkim',
    duration: '7 Days / 6 Nights',
    durationCategory: '7+ days',
    type: 'adventure',
    priceRange: '₹22,000 - ₹30,000',
    startingPrice: 24500,
    shortDescription: 'Explore the high-altitude wonders of North Sikkim including Yumthang Valley and Gurudongmar Lake.',
    itinerary: [
      { day: 1, title: 'Arrival in Gangtok', description: 'Transfer to Gangtok and check-in to your hotel.' },
      { day: 2, title: 'Tsomgo Lake & Baba Mandir', description: 'Excursion to the beautiful Tsomgo Lake and Baba Mandir.' },
      { day: 3, title: 'Gangtok to Lachen', description: 'Drive to Lachen. Evening free to explore the village.' },
      { day: 4, title: 'Gurudongmar Lake & Transfer to Lachung', description: 'Early morning visit to Gurudongmar Lake. Later drive to Lachung.' },
      { day: 5, title: 'Yumthang Valley', description: 'Excursion to Yumthang Valley (Valley of Flowers) and return to Gangtok.' },
      { day: 6, title: 'Gangtok Local Sightseeing', description: 'Visit Rumtek Monastery, Do Drul Chorten, and Namgyal Institute of Tibetology.' },
      { day: 7, title: 'Departure', description: 'Transfer to NJP/Bagdogra for onward journey.' }
    ],
    inclusions: ['Accommodation', 'All Meals in North Sikkim', 'Breakfast elsewhere', 'Transport', 'Permits'],
    exclusions: ['Flights', 'Zero Point excursion cost', 'Personal expenses'],
    image: '/images/sikkim.jpg',
    gallery: ['/images/sikkim.jpg'],
    featured: true
  },
  {
    id: 'sikkim-family-retreat',
    title: 'Sikkim Family Retreat',
    destination: 'Gangtok & Pelling',
    region: 'sikkim',
    duration: '6 Days / 5 Nights',
    durationCategory: '4-6 days',
    type: 'family',
    priceRange: '₹19,000 - ₹26,000',
    startingPrice: 21000,
    shortDescription: 'A perfect family vacation covering the cultural hub of Gangtok and scenic Pelling.',
    itinerary: [
      { day: 1, title: 'Arrival in Gangtok', description: 'Arrive at Bagdogra/NJP and transfer to Gangtok.' },
      { day: 2, title: 'Gangtok Sightseeing', description: 'Visit Tsomgo Lake and Baba Mandir.' },
      { day: 3, title: 'Transfer to Pelling', description: 'Drive to Pelling via Ravangla, visit Buddha Park.' },
      { day: 4, title: 'Pelling Sightseeing', description: 'Visit Kanchenjunga Falls, Khecheopalri Lake, and Pemayangtse Monastery.' },
      { day: 5, title: 'Pelling to Gangtok', description: 'Return to Gangtok. Evening shopping at MG Marg.' },
      { day: 6, title: 'Departure', description: 'Transfer to airport/railway station.' }
    ],
    inclusions: ['Accommodation', 'Breakfast & Dinner', 'Private Cab', 'Sightseeing'],
    exclusions: ['Flights', 'Lunch', 'Entry fees'],
    image: '/images/sikkim.jpg',
    gallery: ['/images/sikkim.jpg'],
    featured: false
  },
  {
    id: 'gangtok-short-break',
    title: 'Gangtok Short Break',
    destination: 'Gangtok',
    region: 'sikkim',
    duration: '4 Days / 3 Nights',
    durationCategory: '4-6 days',
    type: 'group',
    priceRange: '₹12,000 - ₹16,000',
    startingPrice: 12500,
    shortDescription: 'A quick and rejuvenating getaway to the vibrant capital of Sikkim.',
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Transfer to Gangtok and relax.' },
      { day: 2, title: 'Tsomgo Lake Excursion', description: 'Full day trip to Tsomgo Lake and Baba Mandir.' },
      { day: 3, title: 'Gangtok Local', description: 'Half day city tour including Rumtek Monastery and Flower Show.' },
      { day: 4, title: 'Departure', description: 'Transfer for onward journey.' }
    ],
    inclusions: ['Accommodation', 'Breakfast', 'Cab'],
    exclusions: ['Airfare', 'Nathula Pass permit'],
    image: '/images/sikkim.jpg',
    gallery: ['/images/sikkim.jpg'],
    featured: false
  },
  {
    id: 'bhutan-cultural-tour',
    title: 'Bhutan Cultural Tour',
    destination: 'Thimphu, Punakha, Paro',
    region: 'bhutan',
    duration: '7 Days / 6 Nights',
    durationCategory: '7+ days',
    type: 'family',
    priceRange: '₹45,000 - ₹60,000',
    startingPrice: 48000,
    shortDescription: 'Discover the Land of the Thunder Dragon with its majestic Dzongs and serene monasteries.',
    itinerary: [
      { day: 1, title: 'Arrival in Paro, Transfer to Thimphu', description: 'Arrive in Paro and drive to Thimphu. Check-in and relax.' },
      { day: 2, title: 'Thimphu Sightseeing', description: 'Visit Buddha Dordenma, Tashichho Dzong, and Memorial Chorten.' },
      { day: 3, title: 'Thimphu to Punakha', description: 'Drive to Punakha via Dochula Pass. Visit Punakha Dzong.' },
      { day: 4, title: 'Punakha to Paro', description: 'Drive back to Paro. Visit National Museum.' },
      { day: 5, title: 'Tiger\'s Nest Hike', description: 'Hike to the iconic Taktsang Monastery (Tiger\'s Nest).' },
      { day: 6, title: 'Paro Local Sightseeing', description: 'Visit Kyichu Lhakhang and explore Paro town.' },
      { day: 7, title: 'Departure', description: 'Transfer to Paro Airport for onward flight.' }
    ],
    inclusions: ['Accommodation (3 Star)', 'All Meals', 'English Speaking Guide', 'Transport', 'SDF (Sustainable Development Fee) for Indians'],
    exclusions: ['Flights', 'Drinks/Alcohol', 'Travel Insurance'],
    image: '/images/bhutan.jpg',
    gallery: ['/images/bhutan.jpg'],
    featured: true
  },
  {
    id: 'bhutan-honeymoon-special',
    title: 'Bhutan Honeymoon Special',
    destination: 'Paro & Thimphu',
    region: 'bhutan',
    duration: '5 Days / 4 Nights',
    durationCategory: '4-6 days',
    type: 'honeymoon',
    priceRange: '₹35,000 - ₹45,000',
    startingPrice: 38000,
    shortDescription: 'A romantic getaway amidst the tranquil and pristine environment of Bhutan.',
    itinerary: [
      { day: 1, title: 'Arrival in Paro', description: 'Arrive at Paro. Evening stroll around the town.' },
      { day: 2, title: 'Transfer to Thimphu', description: 'Drive to Thimphu. Visit local attractions and enjoy a quiet evening.' },
      { day: 3, title: 'Thimphu Sightseeing', description: 'Explore Thimphu valley and its cultural heritage.' },
      { day: 4, title: 'Return to Paro', description: 'Drive back to Paro. Optional visit to nearby monasteries.' },
      { day: 5, title: 'Departure', description: 'Transfer to airport.' }
    ],
    inclusions: ['Boutique Accommodation', 'Meals', 'Private Cab', 'Guide'],
    exclusions: ['Airfare', 'Personal expenses'],
    image: '/images/bhutan.jpg',
    gallery: ['/images/bhutan.jpg'],
    featured: false
  },
  {
    id: 'bhutan-short-trip',
    title: 'Bhutan Short Trip',
    destination: 'Paro',
    region: 'bhutan',
    duration: '4 Days / 3 Nights',
    durationCategory: '4-6 days',
    type: 'group',
    priceRange: '₹28,000 - ₹35,000',
    startingPrice: 29500,
    shortDescription: 'Experience the essence of Bhutan with a short stay in Paro.',
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Arrive in Paro. Acclimatization and rest.' },
      { day: 2, title: 'Tiger\'s Nest Hike', description: 'Full day hike to Taktsang Monastery.' },
      { day: 3, title: 'Paro Sightseeing', description: 'Visit Rinpung Dzong and National Museum.' },
      { day: 4, title: 'Departure', description: 'Flight back home.' }
    ],
    inclusions: ['Accommodation', 'Meals', 'Guide', 'Transport'],
    exclusions: ['Flights'],
    image: '/images/bhutan.jpg',
    gallery: ['/images/bhutan.jpg'],
    featured: false
  },
  {
    id: 'meghalaya-explorer',
    title: 'Meghalaya Explorer',
    destination: 'Shillong, Cherrapunji, Dawki',
    region: 'northeast',
    duration: '6 Days / 5 Nights',
    durationCategory: '4-6 days',
    type: 'adventure',
    priceRange: '₹20,000 - ₹28,000',
    startingPrice: 22000,
    shortDescription: 'Discover the Abode of Clouds, living root bridges, and crystal clear rivers.',
    itinerary: [
      { day: 1, title: 'Arrival in Guwahati & Transfer to Shillong', description: 'Arrive at Guwahati Airport/Station. Drive to Shillong.' },
      { day: 2, title: 'Shillong to Cherrapunji', description: 'Drive to Cherrapunji. Visit Elephant Falls and Mawkdok Dympep Valley View Point.' },
      { day: 3, title: 'Cherrapunji Sightseeing', description: 'Visit Nohkalikai Falls, Seven Sisters Falls, and Mawsmai Cave.' },
      { day: 4, title: 'Dawki & Mawlynnong', description: 'Visit Asia\'s cleanest village Mawlynnong and the crystal clear Umngot River in Dawki.' },
      { day: 5, title: 'Return to Shillong', description: 'Drive back to Shillong. Local sightseeing including Ward\'s Lake.' },
      { day: 6, title: 'Departure', description: 'Transfer to Guwahati for onward journey.' }
    ],
    inclusions: ['Accommodation', 'Breakfast', 'Private Cab', 'Sightseeing'],
    exclusions: ['Flights', 'Boating charges', 'Entry fees'],
    image: '/images/northeast.jpg',
    gallery: ['/images/northeast.jpg'],
    featured: true
  },
  {
    id: 'tawang-monastery-tour',
    title: 'Tawang Monastery Tour',
    destination: 'Tawang, Bomdila, Dirang',
    region: 'northeast',
    duration: '8 Days / 7 Nights',
    durationCategory: '7+ days',
    type: 'pilgrimage',
    priceRange: '₹30,000 - ₹40,000',
    startingPrice: 32000,
    shortDescription: 'A spiritual and scenic journey to the majestic Tawang Monastery in Arunachal Pradesh.',
    itinerary: [
      { day: 1, title: 'Arrival in Guwahati & Nameri', description: 'Transfer to Nameri National Park.' },
      { day: 2, title: 'Nameri to Dirang', description: 'Drive to Dirang. Visit Dirang Dzong.' },
      { day: 3, title: 'Dirang to Tawang', description: 'Drive via Sela Pass. Witness the beautiful Sela Lake.' },
      { day: 4, title: 'Tawang Local', description: 'Visit Tawang Monastery and War Memorial.' },
      { day: 5, title: 'Bumla Pass Excursion', description: 'Day trip to Bumla Pass (subject to permit).' },
      { day: 6, title: 'Tawang to Bomdila', description: 'Drive to Bomdila.' },
      { day: 7, title: 'Bomdila to Guwahati', description: 'Long drive back to Guwahati.' },
      { day: 8, title: 'Departure', description: 'Transfer to airport.' }
    ],
    inclusions: ['Accommodation', 'Breakfast & Dinner', 'Transport', 'ILP Permits'],
    exclusions: ['Flights', 'Bumla Pass local cab fare'],
    image: '/images/northeast.jpg',
    gallery: ['/images/northeast.jpg'],
    featured: false
  },
  {
    id: 'northeast-kaziranga-wildlife',
    title: 'Kaziranga Wildlife Safari',
    destination: 'Kaziranga National Park',
    region: 'northeast',
    duration: '4 Days / 3 Nights',
    durationCategory: '4-6 days',
    type: 'family',
    priceRange: '₹15,000 - ₹20,000',
    startingPrice: 16500,
    shortDescription: 'Encounter the one-horned rhinoceros in the wild plains of Assam.',
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Arrive in Guwahati, transfer to Kaziranga.' },
      { day: 2, title: 'Jeep Safari', description: 'Morning and afternoon jeep safaris in different ranges.' },
      { day: 3, title: 'Elephant Safari & Local Village', description: 'Early morning elephant safari. Visit tea gardens.' },
      { day: 4, title: 'Departure', description: 'Drive back to Guwahati.' }
    ],
    inclusions: ['Accommodation', 'Meals', '1 Jeep Safari', '1 Elephant Safari'],
    exclusions: ['Airfare', 'Camera fees'],
    image: '/images/northeast.jpg',
    gallery: ['/images/northeast.jpg'],
=======
    id: "darjeeling-delight-3n4d",
    title: "Darjeeling Delight",
    destination: "Darjeeling",
    region: "darjeeling",
    duration: "3 Nights / 4 Days",
    durationCategory: "weekend",
    type: "family",
    priceRange: "₹12,999 - ₹16,999",
    startingPrice: 12999,
    shortDescription: "A quick getaway to experience the best of Darjeeling, perfect for weekends and short family trips.",
    itinerary: [
      {
        day: 1,
        title: "Arrival at NJP / Bagdogra & Transfer to Darjeeling",
        description: "Upon arrival at New Jalpaiguri Railway Station (NJP) or Bagdogra Airport (IXB), our representative will meet you and transfer you to Darjeeling. Enjoy the scenic drive through winding hill roads and tea gardens. Check-in to your hotel and spend the evening at leisure exploring the Mall Road."
      },
      {
        day: 2,
        title: "Darjeeling Local Sightseeing",
        description: "Early morning (around 4:00 AM) drive to Tiger Hill to witness the spectacular sunrise over Mt. Kanchenjunga. On the way back, visit Ghoom Monastery and Batasia Loop. After breakfast, visit the Himalayan Mountaineering Institute, PNZ Zoological Park (closed on Thursday), Tenzing Rock, Tibetan Refugee self-help Centre, Tea Garden (outer view), Ropeway and Japanese Temple."
      },
      {
        day: 3,
        title: "Mirik Excursion",
        description: "After breakfast, proceed for a full day excursion to Mirik Lake via the Indo-Nepal border (Pashupati Market). Enjoy the beautiful drive through pine forests and tea estates. You can enjoy boating at the Sumendu Lake or take a walk around the lake. Return to Darjeeling in the evening."
      },
      {
        day: 4,
        title: "Departure from Darjeeling",
        description: "After breakfast, check out from the hotel and transfer to NJP / Bagdogra for your onward journey with sweet memories of the Queen of Hills."
      }
    ],
    inclusions: [
      "Accommodation in standard hotels for 3 nights",
      "Breakfast on all days",
      "Private vehicle for transfers and sightseeing",
      "Driver allowance, toll, parking",
      "Assistance upon arrival and departure"
    ],
    exclusions: [
      "Airfare/Train fare",
      "Lunch and dinner",
      "Entry fees to monuments and parks",
      "Personal expenses like laundry, telephone calls, tips",
      "Any activities not mentioned in inclusions"
    ],
    image: "/images/darjeeling.jpg",
    gallery: ["/images/darjeeling.jpg", "/images/darjeeling.jpg", "/images/darjeeling.jpg"],
    featured: false
  },
  {
    id: "north-bengal-explorer-5n6d",
    title: "North Bengal Explorer",
    destination: "Darjeeling & Kalimpong",
    region: "darjeeling",
    duration: "5 Nights / 6 Days",
    durationCategory: "4-6 days",
    type: "group",
    priceRange: "₹18,500 - ₹24,000",
    startingPrice: 18500,
    shortDescription: "Discover the distinct flavors of Darjeeling and the serene charm of Kalimpong in this comprehensive tour.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Transfer to Darjeeling",
        description: "Meet and greet at the airport/station and transfer to Darjeeling. Check into your hotel and relax."
      },
      {
        day: 2,
        title: "Darjeeling Sightseeing (Tiger Hill & Mix Tour)",
        description: "Early morning visit to Tiger Hill. Later cover major sights including HMI, Zoo, and Tea Gardens."
      },
      {
        day: 3,
        title: "Darjeeling to Kalimpong via Lamahatta",
        description: "Drive to Kalimpong with a stopover at the beautiful Lamahatta Eco Park. Check into Kalimpong hotel."
      },
      {
        day: 4,
        title: "Kalimpong Sightseeing",
        description: "Explore Deolo Hill, Science City, Durpin Monastery, and the vibrant local nurseries of Kalimpong."
      },
      {
        day: 5,
        title: "Day trip to Lava & Lolegaon",
        description: "Visit the quaint hamlets of Lava and Lolegaon. Experience the canopy walk and pristine pine forests."
      },
      {
        day: 6,
        title: "Departure",
        description: "Transfer to NJP/IXB for your return journey."
      }
    ],
    inclusions: [
      "5 Nights accommodation",
      "Daily breakfast and dinner",
      "Exclusive vehicle for the entire trip",
      "All permits and taxes"
    ],
    exclusions: [
      "Any personal expenses",
      "Entry fees to parks and museums",
      "Lunch",
      "Guide charges"
    ],
    image: "/images/darjeeling.jpg",
    gallery: ["/images/darjeeling.jpg", "/images/darjeeling.jpg", "/images/darjeeling.jpg"],
    featured: true
  },
  {
    id: "darjeeling-honeymoon-4n5d",
    title: "Darjeeling Honeymoon",
    destination: "Darjeeling & Kurseong",
    region: "darjeeling",
    duration: "4 Nights / 5 Days",
    durationCategory: "4-6 days",
    type: "honeymoon",
    priceRange: "₹22,000 - ₹30,000",
    startingPrice: 22000,
    shortDescription: "A romantic retreat featuring luxury stays, candle-light dinners, and leisurely walks in the hills.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome to Kurseong",
        description: "Transfer to Kurseong. Enjoy a romantic evening amidst the tea gardens. Special honeymoon setup in room."
      },
      {
        day: 2,
        title: "Kurseong to Darjeeling",
        description: "Morning visit to Makaibari Tea Estate. Later transfer to Darjeeling. Evening stroll on the Mall Road."
      },
      {
        day: 3,
        title: "Darjeeling Romantic Day Out",
        description: "Leisurely sightseeing including a joyride on the toy train. Candlelight dinner in the evening."
      },
      {
        day: 4,
        title: "Excursion to Mirik",
        description: "A scenic drive to Mirik. Enjoy boating on the lake and private time in the pine forests."
      },
      {
        day: 5,
        title: "Departure",
        description: "Morning breakfast and transfer to the airport/station."
      }
    ],
    inclusions: [
      "Premium accommodation",
      "Daily breakfast and candlelight dinner",
      "Honeymoon cake and floral decoration",
      "Toy train joyride tickets",
      "Luxury private vehicle"
    ],
    exclusions: [
      "Airfare/Train fare",
      "Lunch",
      "Personal expenses"
    ],
    image: "/images/darjeeling.jpg",
    gallery: ["/images/darjeeling.jpg", "/images/darjeeling.jpg", "/images/darjeeling.jpg"],
    featured: false
  },
  {
    id: "sikkim-serenity-5n6d",
    title: "Sikkim Serenity",
    destination: "Gangtok & Pelling",
    region: "sikkim",
    duration: "5 Nights / 6 Days",
    durationCategory: "4-6 days",
    type: "family",
    priceRange: "₹20,000 - ₹28,000",
    startingPrice: 20000,
    shortDescription: "Experience the tranquility of Sikkim with views of Kanchenjunga and peaceful monasteries.",
    itinerary: [
      {
        day: 1,
        title: "Arrival at Bagdogra/NJP & Transfer to Gangtok",
        description: "Arrive at the airport/station and transfer to Gangtok. Evening free to explore MG Marg."
      },
      {
        day: 2,
        title: "Tsomgo Lake & Baba Mandir Excursion",
        description: "Full day excursion to the high-altitude Tsomgo Lake and the sacred Baba Harbhajan Singh Mandir."
      },
      {
        day: 3,
        title: "Gangtok to Pelling via Ravangla",
        description: "Transfer to Pelling. Enroute visit the Buddha Park at Ravangla. Check-in to Pelling hotel."
      },
      {
        day: 4,
        title: "Pelling Local Sightseeing",
        description: "Visit Pemayangtse Monastery, Rabdentse Ruins, Khecheopalri Lake, and the Kanchenjunga waterfalls."
      },
      {
        day: 5,
        title: "Pelling to Namchi & Return to Gangtok/Siliguri",
        description: "Visit Char Dham in Namchi. Later transfer to a convenient location for next day's departure."
      },
      {
        day: 6,
        title: "Departure",
        description: "Check out and proceed for your onward journey."
      }
    ],
    inclusions: [
      "5 Nights hotel accommodation",
      "Breakfast and Dinner",
      "All transfers in dedicated vehicle",
      "Permits for Tsomgo Lake"
    ],
    exclusions: [
      "Nathu La Pass permit (extra cost)",
      "Entry fees to monuments",
      "Personal expenses",
      "Airfare"
    ],
    image: "/images/sikkim.jpg",
    gallery: ["/images/sikkim.jpg", "/images/sikkim.jpg", "/images/sikkim.jpg"],
    featured: true
  },
  {
    id: "north-sikkim-adventure-6n7d",
    title: "North Sikkim Adventure",
    destination: "Lachen, Lachung & Gangtok",
    region: "sikkim",
    duration: "6 Nights / 7 Days",
    durationCategory: "4-6 days",
    type: "adventure",
    priceRange: "₹28,000 - ₹35,000",
    startingPrice: 28000,
    shortDescription: "A thrilling journey to the rugged terrains of North Sikkim, including Gurudongmar Lake and Yumthang Valley.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Gangtok",
        description: "Transfer to Gangtok and acclimatize to the altitude. Evening walk at MG Marg."
      },
      {
        day: 2,
        title: "Gangtok to Lachen",
        description: "Drive to Lachen in North Sikkim. Enroute visit Seven Sister Waterfalls. Check-in and rest."
      },
      {
        day: 3,
        title: "Gurudongmar Lake & Transfer to Lachung",
        description: "Early morning drive to the breathtaking Gurudongmar Lake. Return to Lachen, pack, and transfer to Lachung."
      },
      {
        day: 4,
        title: "Yumthang Valley & Return to Gangtok",
        description: "Visit Yumthang Valley (Valley of Flowers). Optional visit to Zero Point. Drive back to Gangtok."
      },
      {
        day: 5,
        title: "Gangtok Local Sightseeing",
        description: "Explore Gangtok: Rumtek Monastery, Banjhakri Falls, Do-Drul Chorten, and Namgyal Institute of Tibetology."
      },
      {
        day: 6,
        title: "Tsomgo Lake Excursion",
        description: "Day trip to Tsomgo Lake and Baba Mandir."
      },
      {
        day: 7,
        title: "Departure",
        description: "Transfer back to Bagdogra/NJP."
      }
    ],
    inclusions: [
      "Accommodation for 6 Nights",
      "All meals in Lachen and Lachung",
      "Breakfast in Gangtok",
      "All restricted area permits",
      "Exclusive vehicle"
    ],
    exclusions: [
      "Zero Point excursion (direct payment to driver)",
      "Personal expenses",
      "Entry fees to museums"
    ],
    image: "/images/sikkim.jpg",
    gallery: ["/images/sikkim.jpg", "/images/sikkim.jpg", "/images/sikkim.jpg"],
    featured: false
  },
  {
    id: "east-west-sikkim-complete-7n8d",
    title: "East-West Sikkim Complete",
    destination: "Gangtok, Pelling, Namchi",
    region: "sikkim",
    duration: "7 Nights / 8 Days",
    durationCategory: "7+ days",
    type: "pilgrimage",
    priceRange: "₹32,000 - ₹45,000",
    startingPrice: 32000,
    shortDescription: "An extensive tour covering the cultural, spiritual, and natural highlights of East and West Sikkim.",
    itinerary: [
      {
        day: 1,
        title: "Arrival to Gangtok",
        description: "Transfer to Gangtok. Relax and prep for the long tour."
      },
      {
        day: 2,
        title: "East Sikkim Excursion",
        description: "Visit Tsomgo Lake, Baba Mandir, and optional Nathula Pass."
      },
      {
        day: 3,
        title: "Gangtok Monasteries & Stupas",
        description: "Full day covering Rumtek, Enchey Monastery, Do-Drul Chorten and local crafts centers."
      },
      {
        day: 4,
        title: "Gangtok to Pelling via Ravangla",
        description: "Drive to West Sikkim. Stop at Tathagata Tsal (Buddha Park)."
      },
      {
        day: 5,
        title: "Pelling Sightseeing",
        description: "Visit Pemayangtse Monastery, Sky Walk, and Khecheopalri sacred lake."
      },
      {
        day: 6,
        title: "Pelling to Namchi (South Sikkim)",
        description: "Transfer to Namchi. Visit the massive Siddhesvara Dhaam (Char Dham)."
      },
      {
        day: 7,
        title: "Namchi to Siliguri",
        description: "Relaxed morning. Transfer to Siliguri for the final night stay."
      },
      {
        day: 8,
        title: "Departure",
        description: "Transfer to NJP/IXB."
      }
    ],
    inclusions: [
      "7 Nights accommodation",
      "Daily breakfast and dinner",
      "Private transportation",
      "All necessary permits"
    ],
    exclusions: [
      "Lunch",
      "Camera fees",
      "Tips and porterage"
    ],
    image: "/images/sikkim.jpg",
    gallery: ["/images/sikkim.jpg", "/images/sikkim.jpg", "/images/sikkim.jpg"],
    featured: false
  },
  {
    id: "bhutan-highlights-5n6d",
    title: "Bhutan Highlights",
    destination: "Paro & Thimphu",
    region: "bhutan",
    duration: "5 Nights / 6 Days",
    durationCategory: "4-6 days",
    type: "family",
    priceRange: "₹35,000 - ₹45,000",
    startingPrice: 35000,
    shortDescription: "A perfect introduction to the Land of the Thunder Dragon, covering major sights in Thimphu and Paro.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paro & Transfer to Thimphu",
        description: "Land at Paro International Airport. Enjoy the scenic drive to Thimphu. Evening visit to the Tashichho Dzong."
      },
      {
        day: 2,
        title: "Thimphu Sightseeing",
        description: "Visit Buddha Dordenma, National Memorial Chorten, Simply Bhutan Museum, and the Folk Heritage Museum."
      },
      {
        day: 3,
        title: "Thimphu to Paro",
        description: "Drive back to Paro. Visit the National Museum of Bhutan and Paro Dzong. Evening stroll in Paro town."
      },
      {
        day: 4,
        title: "Tiger's Nest Hike",
        description: "Embark on a thrilling hike to the iconic Taktsang Palphug (Tiger's Nest) Monastery. Return to hotel for a relaxing evening."
      },
      {
        day: 5,
        title: "Chele La Pass Excursion",
        description: "Drive to Chele La Pass, the highest motorable road in Bhutan, offering stunning views of Mt. Jomolhari. Visit Kyichu Lhakhang on return."
      },
      {
        day: 6,
        title: "Departure",
        description: "Transfer to Paro Airport for your onward journey."
      }
    ],
    inclusions: [
      "Accommodation in 3-star certified hotels",
      "All meals (Breakfast, Lunch, Dinner)",
      "Bhutan Sustainable Development Fee (SDF)",
      "English-speaking local guide",
      "Private transportation"
    ],
    exclusions: [
      "Airfare to/from Paro",
      "Travel insurance",
      "Alcoholic beverages",
      "Tips for guide and driver"
    ],
    image: "/images/bhutan.jpg",
    gallery: ["/images/bhutan.jpg", "/images/bhutan.jpg", "/images/bhutan.jpg"],
    featured: true
  },
  {
    id: "bhutan-cultural-immersion-7n8d",
    title: "Bhutan Cultural Immersion",
    destination: "Paro, Thimphu, Punakha",
    region: "bhutan",
    duration: "7 Nights / 8 Days",
    durationCategory: "7+ days",
    type: "group",
    priceRange: "₹48,000 - ₹60,000",
    startingPrice: 48000,
    shortDescription: "Dive deep into Bhutan's rich heritage with visits to ancient dzongs, rural villages, and vibrant markets.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paro",
        description: "Welcome to Bhutan. Check into your hotel and explore Paro town in the evening."
      },
      {
        day: 2,
        title: "Paro to Thimphu via Dochula Pass",
        description: "Drive to Thimphu. Stop at Dochula Pass for panoramic Himalayan views and the 108 chortens."
      },
      {
        day: 3,
        title: "Thimphu Full Day Tour",
        description: "Extensive tour of Thimphu including the Weekend Market, Textile Museum, and Zorig Chusum (School of Traditional Arts)."
      },
      {
        day: 4,
        title: "Thimphu to Punakha",
        description: "Drive to the warmer Punakha valley. Visit the stunning Punakha Dzong at the river confluence."
      },
      {
        day: 5,
        title: "Punakha to Paro",
        description: "Visit Chimi Lhakhang (Temple of Fertility) and then drive back to Paro."
      },
      {
        day: 6,
        title: "Tiger's Nest Hike",
        description: "Full day dedicated to the hike to Tiger's Nest Monastery."
      },
      {
        day: 7,
        title: "Haa Valley Day Trip",
        description: "Excursion to the pristine and less-visited Haa Valley via Chele La Pass."
      },
      {
        day: 8,
        title: "Departure",
        description: "Farewell to Bhutan and departure from Paro Airport."
      }
    ],
    inclusions: [
      "7 Nights accommodation",
      "All meals",
      "Bhutan SDF and visa processing",
      "Licensed guide",
      "Monument entry fees"
    ],
    exclusions: [
      "Flights",
      "Personal expenses",
      "Optional activities like hot stone bath"
    ],
    image: "/images/bhutan.jpg",
    gallery: ["/images/bhutan.jpg", "/images/bhutan.jpg", "/images/bhutan.jpg"],
    featured: false
  },
  {
    id: "bhutan-honeymoon-special-5n6d",
    title: "Bhutan Honeymoon Special",
    destination: "Paro & Punakha",
    region: "bhutan",
    duration: "5 Nights / 6 Days",
    durationCategory: "4-6 days",
    type: "honeymoon",
    priceRange: "₹55,000 - ₹75,000",
    startingPrice: 55000,
    shortDescription: "A romantic escapade in the Himalayas with luxury stays, private dinners, and serene landscapes.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paro",
        description: "Receive a traditional welcome. Transfer to a luxury resort in Paro. Romantic dinner setup."
      },
      {
        day: 2,
        title: "Paro to Punakha",
        description: "Scenic drive to Punakha. Visit the Punakha Suspension Bridge. Relax at the resort."
      },
      {
        day: 3,
        title: "Punakha Sightseeing & Riverside Picnic",
        description: "Visit Punakha Dzong followed by a private romantic picnic lunch by the Mo Chhu river."
      },
      {
        day: 4,
        title: "Punakha to Paro & Hot Stone Bath",
        description: "Drive back to Paro. In the evening, enjoy a traditional Bhutanese Hot Stone Bath together."
      },
      {
        day: 5,
        title: "Tiger's Nest Hike",
        description: "Hike to Tiger's Nest. Celebrate the achievement with a special farewell dinner."
      },
      {
        day: 6,
        title: "Departure",
        description: "Transfer to the airport."
      }
    ],
    inclusions: [
      "Luxury hotel accommodation",
      "All meals including special romantic dinners",
      "Traditional hot stone bath experience",
      "Private luxury vehicle",
      "Bhutan SDF"
    ],
    exclusions: [
      "International flights",
      "Alcoholic beverages",
      "Personal shopping"
    ],
    image: "/images/bhutan.jpg",
    gallery: ["/images/bhutan.jpg", "/images/bhutan.jpg", "/images/bhutan.jpg"],
    featured: false
  },
  {
    id: "meghalaya-magic-5n6d",
    title: "Meghalaya Magic",
    destination: "Shillong & Cherrapunji",
    region: "northeast",
    duration: "5 Nights / 6 Days",
    durationCategory: "4-6 days",
    type: "family",
    priceRange: "₹22,000 - ₹30,000",
    startingPrice: 22000,
    shortDescription: "Explore the abode of clouds, witnessing living root bridges, crystal clear rivers, and majestic waterfalls.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Guwahati & Transfer to Shillong",
        description: "Arrive at Guwahati and drive to Shillong. Enroute visit Umiam Lake. Check into hotel and relax."
      },
      {
        day: 2,
        title: "Shillong to Cherrapunji",
        description: "Drive to Cherrapunji. Visit Elephant Falls, Shillong Peak, Mawkdok Dympep Valley Viewpoint, and Wah Kaba Falls."
      },
      {
        day: 3,
        title: "Cherrapunji Sightseeing & Root Bridge",
        description: "Visit Nohkalikai Falls, Seven Sisters Falls, Mawsmai Cave, and take a short hike to a Living Root Bridge."
      },
      {
        day: 4,
        title: "Dawki & Mawlynnong Excursion",
        description: "Drive to Mawlynnong (Cleanest Village in Asia) and then to Dawki to experience boating on the crystal-clear Umngot River. Return to Shillong."
      },
      {
        day: 5,
        title: "Shillong Local Sightseeing",
        description: "Visit Don Bosco Museum, Ward's Lake, and explore Police Bazaar in the evening."
      },
      {
        day: 6,
        title: "Departure",
        description: "Drive back to Guwahati. Visit Kamakhya Temple if time permits, then transfer to airport/station."
      }
    ],
    inclusions: [
      "5 Nights accommodation",
      "Breakfast on all days",
      "Private cab for transfers and sightseeing",
      "Boating at Dawki"
    ],
    exclusions: [
      "Air/Train fare",
      "Lunch and dinner",
      "Entry tickets to caves and museums",
      "Guide charges"
    ],
    image: "/images/northeast.jpg",
    gallery: ["/images/northeast.jpg", "/images/northeast.jpg", "/images/northeast.jpg"],
    featured: true
  },
  {
    id: "tawang-explorer-6n7d",
    title: "Tawang Explorer",
    destination: "Tawang, Dirang, Bomdila",
    region: "northeast",
    duration: "6 Nights / 7 Days",
    durationCategory: "4-6 days",
    type: "adventure",
    priceRange: "₹30,000 - ₹40,000",
    startingPrice: 30000,
    shortDescription: "Journey through high mountain passes to the remote and culturally rich Tawang valley in Arunachal Pradesh.",
    itinerary: [
      {
        day: 1,
        title: "Guwahati to Bhalukpong",
        description: "Arrive in Guwahati and drive to Bhalukpong on the Assam-Arunachal border."
      },
      {
        day: 2,
        title: "Bhalukpong to Dirang",
        description: "Drive to Dirang. Visit the Tipi Orchidarium and Dirang Dzong."
      },
      {
        day: 3,
        title: "Dirang to Tawang via Sela Pass",
        description: "Cross the majestic Sela Pass (13,700 ft). Stop at Sela Lake and Jaswant Garh War Memorial. Arrive in Tawang."
      },
      {
        day: 4,
        title: "Tawang Local Sightseeing",
        description: "Visit the massive Tawang Monastery, Urgelling Monastery, and the Tawang War Memorial."
      },
      {
        day: 5,
        title: "Tawang to Bomdila",
        description: "Start return journey. Drive to Bomdila. Visit Bomdila Monastery and view point."
      },
      {
        day: 6,
        title: "Bomdila to Guwahati",
        description: "Long drive back to the plains of Guwahati. Check in and rest."
      },
      {
        day: 7,
        title: "Departure",
        description: "Transfer to Guwahati airport for departure."
      }
    ],
    inclusions: [
      "6 Nights accommodation",
      "Breakfast and dinner",
      "Inner Line Permit (ILP) for Arunachal Pradesh",
      "Dedicated SUV for the entire trip"
    ],
    exclusions: [
      "Bumla Pass excursion (requires separate local vehicle and permit)",
      "Lunch",
      "Camera fees"
    ],
    image: "/images/northeast.jpg",
    gallery: ["/images/northeast.jpg", "/images/northeast.jpg", "/images/northeast.jpg"],
    featured: false
  },
  {
    id: "northeast-grand-tour-9n10d",
    title: "Northeast Grand Tour",
    destination: "Assam, Meghalaya, Arunachal",
    region: "northeast",
    duration: "9 Nights / 10 Days",
    durationCategory: "7+ days",
    type: "group",
    priceRange: "₹50,000 - ₹70,000",
    startingPrice: 50000,
    shortDescription: "The ultimate expedition covering Kaziranga rhinos, Meghalaya waterfalls, and Assam tea gardens.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Guwahati",
        description: "Welcome to Assam. Evening cruise on the Brahmaputra river."
      },
      {
        day: 2,
        title: "Guwahati to Kaziranga",
        description: "Drive to Kaziranga National Park. Evening cultural show."
      },
      {
        day: 3,
        title: "Kaziranga Safari",
        description: "Early morning Elephant Safari. Afternoon Jeep Safari to spot the One-Horned Rhino."
      },
      {
        day: 4,
        title: "Kaziranga to Shillong",
        description: "Drive to the hills of Meghalaya. Check into Shillong."
      },
      {
        day: 5,
        title: "Shillong & Cherrapunji",
        description: "Full day tour of Cherrapunji waterfalls and caves."
      },
      {
        day: 6,
        title: "Dawki & Mawlynnong",
        description: "Visit the clean village and crystal clear river."
      },
      {
        day: 7,
        title: "Shillong to Guwahati",
        description: "Drive back and visit Kamakhya Temple."
      },
      {
        day: 8,
        title: "Guwahati to Majuli",
        description: "Travel to the largest river island, Majuli. Experience Vaishnavite culture."
      },
      {
        day: 9,
        title: "Majuli to Jorhat",
        description: "Ferry back to mainland. Visit historical sites in Sibsagar/Jorhat."
      },
      {
        day: 10,
        title: "Departure",
        description: "Fly out from Jorhat or drive back to Guwahati for departure."
      }
    ],
    inclusions: [
      "9 Nights accommodation",
      "Breakfast and Dinner",
      "One Elephant Safari & One Jeep Safari in Kaziranga",
      "Ferry tickets for Majuli",
      "Private transport"
    ],
    exclusions: [
      "Airfare",
      "Lunch",
      "Any additional safaris",
      "Guide fees"
    ],
    image: "/images/northeast.jpg",
    gallery: ["/images/northeast.jpg", "/images/northeast.jpg", "/images/northeast.jpg"],
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
    featured: false
  }
];
