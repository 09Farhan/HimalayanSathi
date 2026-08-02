import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FeaturedPackages from "@/components/home/FeaturedPackages";
import HotelPartners from "@/components/home/HotelPartners";
import UnionList from "@/components/home/UnionList";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactStrip from "@/components/home/ContactStrip";


import HomeCarousel from "@/components/home/HomeCarousel";
import JourneyPriority from "@/components/home/JourneyPriority";

export const metadata: Metadata = {
  title: "Sikkim Darjeeling Bhutan Tour Package | Himalayan Sathi",
  description:
    "Book the best Sikkim Darjeeling Bhutan tour package with Himalayan Sathi. Your trusted Sikkim tour operator for Gangtok, Darjeeling, and North Sikkim tour packages.",
  keywords: [
    "Sikkim Darjeeling Bhutan tour package",
    "Sikkim tour operator",
    "Darjeeling tour operator",
    "Sikkim tour package",
    "Darjeeling tour package",
    "Bhutan tour package from India",
    "Siliguri travel agency",
    "Himalayan Sathi",
  ],
};

import { db } from "@/lib/db";

/**
 * Home page – The main landing page for Himalayan Sathi Tours & Travels.
 * Composes hero, featured packages, gallery, why-choose-us, testimonials, and contact strip.
 */
export default async function HomePage() {
  const [packages, galleryImages] = await Promise.all([
    db.getPackages(),
    db.getGalleryImages()
  ]);
  
  const totalPackages = packages.length;

  return (
    <>
      <HeroSection totalPackages={totalPackages} />
      <FeaturedPackages />
      <HomeCarousel images={galleryImages} />
      <HotelPartners />
      <UnionList />
      <WhyChooseUs totalPackages={totalPackages} />
      <JourneyPriority />

      <TestimonialsSection />
      <ContactStrip />
    </>
  );
}
