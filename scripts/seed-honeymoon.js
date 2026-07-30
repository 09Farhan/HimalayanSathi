const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local manually
const envPath = path.resolve(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const uriMatch = envContent.match(/^MONGODB_URI=["']?(.*?)["']?$/m);
const uri = uriMatch ? uriMatch[1].trim() : null;

if (!uri) {
  console.error("Please set MONGODB_URI in your .env.local file");
  process.exit(1);
}

const honeymoonPackages = [
  {
    id: "sikkim-honeymoon-gangtok-pelling-5n6d",
    title: "Sikkim Honeymoon – Gangtok & Pelling",
    slug: "sikkim-honeymoon-gangtok-pelling-5n6d",
    destination: "Gangtok & Pelling",
    region: "sikkim",
    duration: "5 Nights / 6 Days",
    durationCategory: "4-6 days",
    type: ["honeymoon"],
    priceRange: "₹18,999 - ₹24,999",
    startingPrice: 18999,
    shortDescription: "A romantic retreat blending the vibrant culture of Gangtok with the serene, snowy peaks visible from Pelling. Perfect for couples seeking a mix of activity and relaxation.",
    itinerary: [
      { day: 1, title: "Arrival at NJP/Bagdogra & Transfer to Gangtok", description: "Arrive at the station/airport and enjoy a scenic drive to Gangtok. Check-in to your romantic stay, relax, and take an evening stroll hand-in-hand along MG Marg." },
      { day: 2, title: "Excursion to Tsomgo Lake & Baba Mandir", description: "Embark on a breathtaking journey to the glacial Tsomgo Lake. The mesmerizing alpine landscape sets a perfect romantic backdrop. (Nathula Pass optional, subject to permits)." },
      { day: 3, title: "Transfer to Pelling via Ravangla", description: "Drive to Pelling through beautiful tea gardens and valleys. Stop at the Buddha Park in Ravangla for serene moments before arriving at your cozy Pelling hotel." },
      { day: 4, title: "Pelling Sightseeing", description: "Visit the sacred Khecheopalri Lake, the stunning Rimbi Waterfalls, and the Pemayangtse Monastery. Enjoy sweeping views of Mt. Kanchenjunga." },
      { day: 5, title: "Pelling to Siliguri/NJP for Departure", description: "After a hearty breakfast with a view, begin your descent back to the plains with beautiful memories of your Himalayan honeymoon." }
    ],
    inclusions: [
      "Accommodation in premium romantic properties",
      "Daily Breakfast & Dinner",
      "Exclusive private vehicle for all transfers & sightseeing",
      "All necessary permits for restricted areas",
      "Honeymoon specials: Room decoration & one candlelight dinner"
    ],
    exclusions: [
      "Airfare / Train fare",
      "Nathula Pass permit costs",
      "Personal expenses (laundry, tips)",
      "Entry fees to monuments/parks"
    ],
    image: "https://images.unsplash.com/photo-1544253139-2b0e891391d8?auto=format&fit=crop&q=80&w=1200", // Generic Sikkim view
    gallery: [
      "https://images.unsplash.com/photo-1629851603525-4a00eb052b6f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1579739501538-4e892e85e7ba?auto=format&fit=crop&q=80&w=800"
    ],
    featured: true,
    seoTitle: "Sikkim Honeymoon Package: Gangtok & Pelling 5N/6D | Himalayan Sathi",
    seoDescription: "Book the perfect 5 Nights 6 Days Sikkim honeymoon package covering Gangtok and Pelling. Enjoy romantic stays, private cabs, and unforgettable mountain views.",
    faqs: [
      { question: "Is this package suitable for winters?", answer: "Yes! Winter (Dec-Feb) is very romantic with chances of snow near Tsomgo Lake, though you should pack heavy woolens.", category: "General" },
      { question: "Are honeymoon inclusions like candlelight dinners provided?", answer: "Yes, we arrange one special candlelight dinner and complimentary flower decoration in your room upon arrival.", category: "Honeymoon" }
    ]
  },
  {
    id: "sikkim-darjeeling-romantic-escape-6n7d",
    title: "Sikkim & Darjeeling Romantic Escape",
    slug: "sikkim-darjeeling-romantic-escape-6n7d",
    destination: "Gangtok & Darjeeling",
    region: "sikkim",
    duration: "6 Nights / 7 Days",
    durationCategory: "7+ days",
    type: ["honeymoon"],
    priceRange: "₹22,999 - ₹29,999",
    startingPrice: 22999,
    shortDescription: "The ultimate Himalayan honeymoon combining the world-famous tea gardens of Darjeeling with the mystical valleys of Sikkim.",
    itinerary: [
      { day: 1, title: "Arrival & Transfer to Darjeeling", description: "Arrive at NJP/Bagdogra. Drive through winding roads to the Queen of the Hills. Check in and relax." },
      { day: 2, title: "Darjeeling Sightseeing (Tiger Hill Sunrise)", description: "Wake up early for a spectacular sunrise over Mt. Kanchenjunga at Tiger Hill. Later, visit Batasia Loop, Ghoom Monastery, and the Himalayan Mountaineering Institute." },
      { day: 3, title: "Darjeeling to Gangtok", description: "Enjoy a scenic drive along the Teesta River into Sikkim. Check into your Gangtok hotel and enjoy a free evening." },
      { day: 4, title: "Tsomgo Lake Excursion", description: "Visit the stunning high-altitude Tsomgo Lake and the revered Baba Mandir. Spend a romantic afternoon by the glacial waters." },
      { day: 5, title: "Gangtok Local Sightseeing", description: "Explore the Rumtek Monastery, Banjhakri Falls, and enjoy a cable car ride offering panoramic views of the city." },
      { day: 6, title: "Leisure Day in Gangtok", description: "Spend the day at your own pace. Go souvenir shopping at MG Marg or simply enjoy the amenities of your resort." },
      { day: 7, title: "Departure", description: "Depart for NJP/Bagdogra with beautiful memories." }
    ],
    inclusions: [
      "Accommodation in top-rated romantic hotels",
      "Daily Breakfast & Dinner",
      "Private luxury cab for the entire trip",
      "All permits and tolls",
      "Toy Train ride assistance (tickets extra)"
    ],
    exclusions: [
      "Airfare / Train fare",
      "Personal expenses",
      "Lunch"
    ],
    image: "https://images.unsplash.com/photo-1544391698-0504f447783d?auto=format&fit=crop&q=80&w=1200",
    gallery: [],
    featured: true,
    seoTitle: "Sikkim & Darjeeling 6N/7D Romantic Escape | Himalayan Sathi",
    seoDescription: "Experience the ultimate 6 Nights 7 Days Sikkim and Darjeeling honeymoon. Tiger Hill sunrise, Tsomgo Lake, private cabs, and luxury stays.",
    faqs: [
      { question: "Is the toy train included?", answer: "We can arrange toy train tickets upon request, but the cost is not included in the base package.", category: "General" }
    ]
  },
  {
    id: "darjeeling-honeymoon-getaway-4n5d",
    title: "Darjeeling Honeymoon Getaway",
    slug: "darjeeling-honeymoon-getaway-4n5d",
    destination: "Darjeeling & Mirik",
    region: "darjeeling",
    duration: "4 Nights / 5 Days",
    durationCategory: "4-6 days",
    type: ["honeymoon"],
    priceRange: "₹14,999 - ₹19,999",
    startingPrice: 14999,
    shortDescription: "A short and sweet escape to the Queen of the Hills. Enjoy toy train rides, colonial charm, and cool mountain breezes.",
    itinerary: [
      { day: 1, title: "Arrival at NJP/IXB & Transfer to Darjeeling", description: "Welcome to the hills! Drive to Darjeeling, check in, and spend a cozy evening at the Mall Road." },
      { day: 2, title: "Darjeeling 7-Point Sightseeing", description: "Visit the Padmaja Naidu Himalayan Zoological Park, Peace Pagoda, Ropeway, and stroll through beautiful Tea Estates." },
      { day: 3, title: "Tiger Hill Sunrise & Mirik Excursion", description: "Experience the iconic Tiger Hill sunrise. Later in the day, drive to Mirik Lake for a romantic boating session." },
      { day: 4, title: "Leisure & Shopping", description: "A free day to explore local cafes, buy authentic Darjeeling tea, and relax in the crisp mountain air." },
      { day: 5, title: "Departure", description: "Transfer back to the airport/station." }
    ],
    inclusions: [
      "Accommodation for 4 nights",
      "Breakfast and Dinner",
      "Private vehicle",
      "Mirik Lake excursion"
    ],
    exclusions: [
      "Travel insurance",
      "Entry fees and boating charges",
      "Lunch"
    ],
    image: "https://images.unsplash.com/photo-1627850993540-025516a7f0de?auto=format&fit=crop&q=80&w=1200",
    gallery: [],
    featured: false,
    seoTitle: "Darjeeling Honeymoon 4N/5D Getaway | Himalayan Sathi",
    seoDescription: "Book a 4 Nights 5 Days Darjeeling honeymoon package. Includes Tiger Hill, Mirik Lake, and romantic stays in the Queen of the Hills.",
    faqs: []
  },
  {
    id: "bhutan-honeymoon-paro-thimphu-punakha-5n6d",
    title: "Bhutan Honeymoon – Paro, Thimphu & Punakha",
    slug: "bhutan-honeymoon-paro-thimphu-punakha-5n6d",
    destination: "Paro, Thimphu, Punakha",
    region: "bhutan",
    duration: "5 Nights / 6 Days",
    durationCategory: "4-6 days",
    type: ["honeymoon"],
    priceRange: "₹28,999 - ₹35,999",
    startingPrice: 28999,
    shortDescription: "Celebrate your union in the Land of the Thunder Dragon. Experience untouched nature, grand Dzongs, and spiritual bliss.",
    itinerary: [
      { day: 1, title: "Arrival in Paro & Transfer to Thimphu", description: "Arrive at Paro International Airport. Drive to Thimphu, the capital city. Check in and acclimatize." },
      { day: 2, title: "Thimphu Sightseeing", description: "Visit the Buddha Dordenma, Tashichho Dzong, and the National Memorial Chorten. Enjoy a peaceful evening walk." },
      { day: 3, title: "Thimphu to Punakha via Dochula Pass", description: "Drive to Punakha, stopping at the breathtaking Dochula Pass with its 108 chortens. Visit the majestic Punakha Dzong." },
      { day: 4, title: "Punakha to Paro", description: "Return to Paro. Visit the Rinpung Dzong and the National Museum." },
      { day: 5, title: "Tiger's Nest Hike", description: "Embark on an unforgettable, romantic hike to the iconic Paro Taktsang (Tiger's Nest) monastery." },
      { day: 6, title: "Departure from Paro", description: "Bid farewell to the happiest country in the world." }
    ],
    inclusions: [
      "Accommodation in 3-star equivalent hotels",
      "Breakfast and Dinner",
      "Sustainable Development Fee (SDF) and Visa assistance",
      "Private licensed Bhutanese guide",
      "Private transportation"
    ],
    exclusions: [
      "Airfare",
      "Monument entry fees",
      "Travel Insurance (Mandatory for Bhutan)"
    ],
    image: "https://images.unsplash.com/photo-1590240321262-d3a9df8be728?auto=format&fit=crop&q=80&w=1200",
    gallery: [],
    featured: true,
    seoTitle: "Bhutan Honeymoon Package 5N/6D: Paro, Thimphu, Punakha | Himalayan Sathi",
    seoDescription: "A romantic 5 Nights 6 Days Bhutan honeymoon package. Hike to Tiger's Nest, visit Dochula Pass, and experience the happiest country in the world.",
    faqs: [
      { question: "Is the SDF included?", answer: "Yes, the Sustainable Development Fee for Indian nationals is included in our premium packages.", category: "General" }
    ]
  },
  {
    id: "meghalaya-cloud-nine-honeymoon-4n5d",
    title: "Meghalaya Cloud-Nine Honeymoon",
    slug: "meghalaya-cloud-nine-honeymoon-4n5d",
    destination: "Shillong & Cherrapunjee",
    region: "northeast",
    duration: "4 Nights / 5 Days",
    durationCategory: "4-6 days",
    type: ["honeymoon"],
    priceRange: "₹17,999 - ₹23,999",
    startingPrice: 17999,
    shortDescription: "Dive into the Scotland of the East. Walk hand-in-hand through living root bridges and boat on crystal-clear waters.",
    itinerary: [
      { day: 1, title: "Arrival at Guwahati & Drive to Shillong", description: "Arrive at Guwahati and drive to Shillong. Stop at the beautiful Umiam Lake for romantic photos." },
      { day: 2, title: "Shillong to Cherrapunjee", description: "Drive to Cherrapunjee. Visit the spectacular Nohkalikai Falls, Seven Sisters Falls, and Mawsmai Cave." },
      { day: 3, title: "Living Root Bridge Trek", description: "Trek to the amazing Single Decker Living Root Bridge. An adventurous and highly rewarding day for active couples." },
      { day: 4, title: "Dawki & Mawlynnong Excursion", description: "Visit Asia's cleanest village, Mawlynnong. Later, enjoy a magical boat ride on the crystal-clear waters of the Umngot River in Dawki." },
      { day: 5, title: "Return to Guwahati for Departure", description: "Drive back to Guwahati with unforgettable memories." }
    ],
    inclusions: [
      "Accommodation for 4 nights",
      "Breakfast and Dinner",
      "Private dedicated vehicle",
      "Dawki boat ride"
    ],
    exclusions: [
      "Airfare / Train fare",
      "Entry fees to waterfalls and caves",
      "Lunch"
    ],
    image: "https://images.unsplash.com/photo-1598284534720-3023e100fce9?auto=format&fit=crop&q=80&w=1200",
    gallery: [],
    featured: false,
    seoTitle: "Meghalaya 4N/5D Honeymoon Package | Shillong & Dawki | Himalayan Sathi",
    seoDescription: "Book a romantic 4 Nights 5 Days Meghalaya honeymoon package. Visit Umiam Lake, Cherrapunjee waterfalls, and boat on the clear waters of Dawki.",
    faqs: []
  }
];

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db('himalayan_sathi');
    const collection = db.collection('packages');

    for (const pkg of honeymoonPackages) {
      // Upsert based on slug
      const result = await collection.updateOne(
        { slug: pkg.slug },
        { $set: pkg },
        { upsert: true }
      );
      if (result.upsertedCount > 0) {
        console.log(`Inserted package: ${pkg.title}`);
      } else {
        console.log(`Updated package: ${pkg.title}`);
      }
    }

    console.log("Database seeded successfully!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
