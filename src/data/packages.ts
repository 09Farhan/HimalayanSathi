import { Package } from '@/lib/types';

export const packages: Package[] = [
  {
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
    featured: false
  }
];
