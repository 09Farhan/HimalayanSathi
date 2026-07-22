// ============================================================
// Core TypeScript interfaces for Himalayan Sathi Tours & Travels
// ============================================================

/** A travel destination (region or specific place) */
export interface Destination {
  id: string;
  name: string;
  region: "darjeeling" | "sikkim" | "bhutan" | "northeast";
  tagline: string;
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  image: string;
}

/** A bookable tour package */
export interface Package {
  id: string;
  title: string;
  destination: string;
  region: "darjeeling" | "sikkim" | "bhutan" | "northeast";
  duration: string;
  durationCategory: "weekend" | "4-6 days" | "7+ days";
  type: "family" | "honeymoon" | "adventure" | "pilgrimage" | "group";
  priceRange: string;
  startingPrice: number;
  shortDescription: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  image: string;
  gallery: string[];
  featured: boolean;
}

/** A single day in a tour itinerary */
export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

/** A blog post / travel guide */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
}

/** A customer testimonial */
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
  tripType: string;
}

/** A frequently asked question */
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

/** Contact form submission data */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  travelDates: string;
  travellers: string;
  message: string;
}

/** Vehicle type for cab services */
export interface Vehicle {
  id: string;
  name: string;
  type: string;
  capacity: string;
  description: string;
  pricePerDay: string;
  image: string;
  features: string[];
}

/** Team member */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}
