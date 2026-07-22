import { Destination } from '@/lib/types';

export const destinations: Destination[] = [
  {
    id: "darjeeling-town",
    name: "Darjeeling",
    region: "darjeeling",
    tagline: "The Queen of the Hills",
    description: "Nestled among the rolling mountains with the glistening Mt Kanchenjunga towering over the azure sky, Darjeeling fondly called 'Queen of the Hills', provides a perfect gateway for those seeking to be in harmony with nature. It is famous for its tea gardens, the Darjeeling Himalayan Railway (a UNESCO World Heritage Site), and spectacular sunrise views.",
    highlights: ["Tiger Hill Sunrise", "Batasia Loop", "Happy Valley Tea Estate", "Himalayan Mountaineering Institute", "Padmaja Naidu Himalayan Zoological Park"],
    bestTimeToVisit: "March to May and October to November",
    image: "/images/darjeeling.jpg"
  },
  {
    id: "kurseong",
    name: "Kurseong",
    region: "darjeeling",
    tagline: "The Land of White Orchids",
    description: "Kurseong is a quiet hill station situated on the way to Darjeeling from Siliguri. Known for its pleasant climate throughout the year, it offers stunning views of the Teesta valley, lush green tea gardens, and historical educational institutions.",
    highlights: ["Eagle's Craig Viewpoint", "Dow Hill", "Makaibari Tea Estate", "Ambotia Shiva Mandir", "Netaji Subhash Chandra Bose Museum"],
    bestTimeToVisit: "March to June and September to December",
    image: "/images/darjeeling.jpg"
  },
  {
    id: "kalimpong",
    name: "Kalimpong",
    region: "darjeeling",
    tagline: "A Peaceful Haven",
    description: "Kalimpong is renowned for its panoramic valley views, Buddhist monasteries, churches, and Tibetan handicrafts. Its mild climate makes it an ideal destination for a peaceful retreat away from the bustling crowds.",
    highlights: ["Deolo Hill", "Durpin Monastery", "Cactus Nursery", "Mangal Dham", "Morgan House"],
    bestTimeToVisit: "March to May and September to November",
    image: "/images/darjeeling.jpg"
  },
  {
    id: "mirik",
    name: "Mirik",
    region: "darjeeling",
    tagline: "The Lake Town",
    description: "Mirik is a picturesque tourist spot famous for its serene Sumendu Lake surrounded by a beautiful pine forest and a garden. It offers boating opportunities, scenic walks, and a calm atmosphere perfect for relaxation.",
    highlights: ["Sumendu Lake", "Bokar Monastery", "Tingling Viewpoint", "Orange Orchards", "Pashupati Market (Indo-Nepal border)"],
    bestTimeToVisit: "March to June and October to November",
    image: "/images/darjeeling.jpg"
  },
  {
    id: "gangtok",
    name: "Gangtok",
    region: "sikkim",
    tagline: "The Pristine Capital",
    description: "Gangtok, the capital of Sikkim, is a beautifully planned city with sweeping views of Mt. Kanchenjunga. It serves as the perfect base for exploring the state's monasteries, lakes, and high-altitude passes while offering a blend of modern amenities and traditional charm.",
    highlights: ["Tsomgo Lake", "Nathu La Pass", "Rumtek Monastery", "MG Marg", "Tashi View Point"],
    bestTimeToVisit: "September to June",
    image: "/images/sikkim.jpg"
  },
  {
    id: "pelling",
    name: "Pelling",
    region: "sikkim",
    tagline: "Close Encounters with Kanchenjunga",
    description: "Pelling offers the closest breathtaking views of the Kanchenjunga mountain range. It is a historical and culturally rich destination with ancient monasteries, beautiful waterfalls, and the famous Sky Walk.",
    highlights: ["Pemayangtse Monastery", "Rabdentse Ruins", "Kanchenjunga Falls", "Pelling Sky Walk", "Khecheopalri Lake"],
    bestTimeToVisit: "September to May",
    image: "/images/sikkim.jpg"
  },
  {
    id: "north-sikkim",
    name: "Lachung & Lachen",
    region: "sikkim",
    tagline: "The Untamed North",
    description: "North Sikkim is a high-altitude marvel offering raw and rugged natural beauty. From the vibrant Yumthang Valley (Valley of Flowers) to the sacred Gurudongmar Lake, it promises an unforgettable adventure for the intrepid traveler.",
    highlights: ["Yumthang Valley", "Gurudongmar Lake", "Zero Point (Yumesamdong)", "Chopta Valley", "Lachung Monastery"],
    bestTimeToVisit: "April to May and October to November",
    image: "/images/sikkim.jpg"
  },
  {
    id: "paro",
    name: "Paro",
    region: "bhutan",
    tagline: "Valley of the Tiger's Nest",
    description: "Paro is a historic town with many sacred sites and historical buildings set in a beautiful valley. It is home to Bhutan's only international airport and the iconic Taktsang Palphug (Tiger's Nest) Monastery, clinging to a cliff edge.",
    highlights: ["Tiger's Nest Monastery", "Paro Dzong", "National Museum", "Chele La Pass", "Kyichu Lhakhang"],
    bestTimeToVisit: "September to November and March to May",
    image: "/images/bhutan.jpg"
  },
  {
    id: "thimphu",
    name: "Thimphu",
    region: "bhutan",
    tagline: "The Modern Tradition",
    description: "Thimphu, the capital city of Bhutan, uniquely combines a modern development with ancient traditions. It is perhaps the only capital in the world without traffic lights, featuring magnificent Dzongs, museums, and a giant Buddha statue.",
    highlights: ["Buddha Dordenma", "Tashichho Dzong", "National Memorial Chorten", "Simply Bhutan Museum", "Folk Heritage Museum"],
    bestTimeToVisit: "September to November and March to May",
    image: "/images/bhutan.jpg"
  },
  {
    id: "punakha",
    name: "Punakha",
    region: "bhutan",
    tagline: "The Winter Capital",
    description: "Punakha, the former capital of Bhutan, lies at the confluence of the Pho Chhu and Mo Chhu rivers. Its lower altitude makes it warmer, and it houses the majestic Punakha Dzong, renowned as the most beautiful dzong in the country.",
    highlights: ["Punakha Dzong", "Punakha Suspension Bridge", "Chimi Lhakhang", "Khamsum Yulley Namgyal Chorten", "Sangchhen Dorji Lhuendrup Lhakhang"],
    bestTimeToVisit: "October to April",
    image: "/images/bhutan.jpg"
  },
  {
    id: "tawang",
    name: "Tawang",
    region: "northeast",
    tagline: "The Hidden Paradise",
    description: "Located in Arunachal Pradesh, Tawang is famous for its stunning landscapes, high-altitude passes, and the Tawang Monastery, the largest monastery in India. The region offers a deeply spiritual atmosphere and spectacular views of the Himalayas.",
    highlights: ["Tawang Monastery", "Sela Pass", "Bumla Pass", "Madhuri Lake (Shunga Tser)", "Nuranang Falls"],
    bestTimeToVisit: "March to May and September to October",
    image: "/images/northeast.jpg"
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    region: "northeast",
    tagline: "Abode of Clouds",
    description: "Meghalaya mesmerizes with its lush rolling hills, living root bridges, and numerous waterfalls. Shillong, the capital, blends colonial charm with vibrant culture, while Cherrapunji offers dramatic landscapes and some of the highest rainfall in the world.",
    highlights: ["Living Root Bridges", "Dawki River", "Nohkalikai Falls", "Mawsynram", "Umiam Lake"],
    bestTimeToVisit: "October to April",
    image: "/images/northeast.jpg"
  }
];
