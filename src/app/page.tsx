<<<<<<< HEAD
import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import FeaturedPackages from '@/components/home/FeaturedPackages';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import TravellerGallery from '@/components/home/TravellerGallery';
import ContactStrip from '@/components/home/ContactStrip';

export const metadata: Metadata = {
  title: 'Himalayan Sathi Tours & Travels | Explore Darjeeling, Sikkim & Bhutan',
  description: 'Your trusted travel partner for unforgettable tours to Darjeeling, Sikkim, Bhutan, and Northeast India. Based in Siliguri with 20+ years of expertise.',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FeaturedPackages />
      <WhyChooseUs />
      <TravellerGallery />
      <TestimonialsSection />
      <ContactStrip />
    </main>
=======
import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FeaturedPackages from "@/components/home/FeaturedPackages";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactStrip from "@/components/home/ContactStrip";

export const metadata: Metadata = {
  title: "Himalayan Sathi Tours & Travels | Sikkim, Darjeeling & Bhutan Tours",
  description:
    "Explore Sikkim, Darjeeling, Bhutan & Northeast India with Himalayan Sathi — your trusted Siliguri-based travel companion. 20+ years of crafting unforgettable Himalayan journeys. Book tour packages, cab services, and custom itineraries.",
  keywords: [
    "Himalayan tours",
    "Sikkim tour packages",
    "Darjeeling tours",
    "Bhutan tour packages",
    "Northeast India travel",
    "Siliguri travel agency",
    "Himalayan Sathi",
  ],
};

/**
 * Home page – The main landing page for Himalayan Sathi Tours & Travels.
 * Composes hero, featured packages, why-choose-us, testimonials, and contact strip.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedPackages />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactStrip />
    </>
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
  );
}
