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
  );
}
