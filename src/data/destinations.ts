import { Destination } from '@/lib/types';

export const destinations: Destination[] = [
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    region: 'darjeeling',
    tagline: 'Queen of the Hills',
    description: 'Darjeeling is a town in India\'s West Bengal state, in the Himalayan foothills. Once a summer resort for the British Raj elite, it remains the terminus of the narrow-gauge Darjeeling Himalayan Railway, or "Toy Train," completed in 1881.',
    highlights: ['Tiger Hill Sunrise', 'Batasia Loop', 'Tea Gardens', 'Himalayan Mountaineering Institute'],
    bestTimeToVisit: 'March to May and September to November',
    image: '/images/darjeeling.jpg'
  },
  {
    id: 'kurseong',
    name: 'Kurseong',
    region: 'darjeeling',
    tagline: 'Land of White Orchids',
    description: 'Kurseong is a quiet hill station situated in Darjeeling district. It is known for its beautiful tea gardens, scenic viewpoints, and pleasant climate throughout the year.',
    highlights: ['Eagle\'s Craig Viewpoint', 'Makaibari Tea Estate', 'Dow Hill', 'Netaji Subhas Chandra Bose Museum'],
    bestTimeToVisit: 'March to Mid-June and September to December',
    image: '/images/darjeeling.jpg'
  },
  {
    id: 'kalimpong',
    name: 'Kalimpong',
    region: 'darjeeling',
    tagline: 'A Serene Hill Station',
    description: 'Kalimpong is a bustling hill station in the Indian state of West Bengal. It is famous for its panoramic valley views, Buddhist monasteries, and Tibetan handicrafts.',
    highlights: ['Deolo Hill', 'Zang Dhok Palri Phodang', 'Pine View Nursery', 'MacFarlane Memorial Church'],
    bestTimeToVisit: 'March to May and September to November',
    image: '/images/darjeeling.jpg'
  },
  {
    id: 'mirik',
    name: 'Mirik',
    region: 'darjeeling',
    tagline: 'Nestled in Nature',
    description: 'Mirik is a picturesque tourist spot nestled in the serene hills of Darjeeling district. The centerpiece of the town is the Sumendu Lake, surrounded by a garden and pine trees.',
    highlights: ['Sumendu Lake', 'Bokar Monastery', 'Tingling Viewpoint', 'Orange Orchards'],
    bestTimeToVisit: 'March to Mid-June and September to December',
    image: '/images/darjeeling.jpg'
  },
  {
    id: 'gangtok',
    name: 'Gangtok',
    region: 'sikkim',
    tagline: 'The Cosmopolitan Capital',
    description: 'Gangtok is the capital of the mountainous northern Indian state of Sikkim. Established as a Buddhist pilgrimage site in the 1840s, the city became capital of an independent monarchy after British rule ended.',
    highlights: ['MG Marg', 'Rumtek Monastery', 'Tsomgo Lake', 'Nathula Pass'],
    bestTimeToVisit: 'Late September to mid-December and March to May',
    image: '/images/sikkim.jpg'
  },
  {
    id: 'pelling',
    name: 'Pelling',
    region: 'sikkim',
    tagline: 'Gateway to Khangchendzonga',
    description: 'Pelling is a small town in the northeastern Indian state of Sikkim, at the foothills of Mount Khangchendzonga. It is renowned for its magnificent views of the snow-capped Himalayan peaks.',
    highlights: ['Pemayangtse Monastery', 'Rabdentse Ruins', 'Khecheopalri Lake', 'Kanchenjunga Falls'],
    bestTimeToVisit: 'Mid-February to May and September to December',
    image: '/images/sikkim.jpg'
  },
  {
    id: 'north-sikkim',
    name: 'North Sikkim (Lachung/Lachen)',
    region: 'sikkim',
    tagline: 'Valley of Flowers',
    description: 'North Sikkim is the northern district of the Indian state of Sikkim. It is famous for its stunning alpine valleys, frozen lakes, and vibrant rhododendron blooms during the spring season.',
    highlights: ['Yumthang Valley', 'Gurudongmar Lake', 'Zero Point', 'Chopta Valley'],
    bestTimeToVisit: 'April to June and September to November',
    image: '/images/sikkim.jpg'
  },
  {
    id: 'paro',
    name: 'Paro',
    region: 'bhutan',
    tagline: 'The Historic Valley',
    description: 'Paro is a historic town with many sacred sites and historical buildings scattered through the area. It is home to Bhutan\'s only international airport and the iconic Tiger\'s Nest Monastery.',
    highlights: ['Tiger\'s Nest (Taktsang) Monastery', 'Paro Dzong', 'National Museum of Bhutan', 'Kyichu Lhakhang'],
    bestTimeToVisit: 'March to May and September to November',
    image: '/images/bhutan.jpg'
  },
  {
    id: 'thimphu',
    name: 'Thimphu',
    region: 'bhutan',
    tagline: 'The Heart of Bhutan',
    description: 'Thimphu is the capital and largest city of Bhutan. It is unique as a capital city for having no traffic lights, blending modern development with ancient traditions.',
    highlights: ['Tashichho Dzong', 'Buddha Dordenma', 'Folk Heritage Museum', 'Motithang Takin Preserve'],
    bestTimeToVisit: 'March to May and September to November',
    image: '/images/bhutan.jpg'
  },
  {
    id: 'punakha',
    name: 'Punakha',
    region: 'bhutan',
    tagline: 'The Old Capital',
    description: 'Punakha served as the capital of Bhutan and seat of government until 1955. Located in a beautiful valley, it is famous for the stunning Punakha Dzong situated at the confluence of two rivers.',
    highlights: ['Punakha Dzong', 'Chimi Lhakhang', 'Punakha Suspension Bridge', 'Khamsum Yulley Namgyal Chorten'],
    bestTimeToVisit: 'Spring (March to May) and Autumn (September to November)',
    image: '/images/bhutan.jpg'
  },
  {
    id: 'tawang',
    name: 'Tawang',
    region: 'northeast',
    tagline: 'Land of Dawn-lit Mountains',
    description: 'Tawang is a town situated at an elevation of about 3,048 metres in the northwestern part of Arunachal Pradesh of India. It is famous for its 400-year-old monastery and natural beauty.',
    highlights: ['Tawang Monastery', 'Sela Pass', 'Madhuri Lake', 'Nuranang Falls'],
    bestTimeToVisit: 'March to October',
    image: '/images/northeast.jpg'
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    region: 'northeast',
    tagline: 'Abode of Clouds',
    description: 'Meghalaya is a hilly state in northeastern India. The name means "the abode of clouds" in Sanskrit, and it is known for its lush green landscapes, living root bridges, and mesmerizing waterfalls.',
    highlights: ['Living Root Bridges', 'Mawlynnong Village', 'Nohkalikai Falls', 'Dawki River'],
    bestTimeToVisit: 'October to April',
    image: '/images/northeast.jpg'
  }
];
