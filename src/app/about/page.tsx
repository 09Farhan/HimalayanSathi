import { IMAGES } from '@/data/images';
import React from 'react';
import Image from 'next/image';
import { Target, Eye, Heart, Users, UsersRound, Briefcase } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';

import PageBanner from '@/components/sections/PageBanner';

export const metadata = {
  title: 'About Himalayan Sathi | Best Sikkim & Darjeeling Tour Operator',
  description: 'Learn about Himalayan Sathi, a trusted Sikkim and Darjeeling tour operator. Over 20 years of experience crafting Sikkim Darjeeling Bhutan tour packages.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PageBanner 
        title="About Your Sikkim Tour Operator" 
        subtitle="Himalayan Sathi: Your trusted travel companion for the Eastern Himalayas." 
      />

      {/* Story Section */}
      <SectionContainer className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              About Himalayan Sathi Tours & Travels
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed text-lg">
              <p>
                Welcome to Himalayan Sathi Tours & Travels — your trusted local travel partner for Darjeeling, Sikkim, Bhutan, and Northeast India tour packages.
              </p>
              <p>
                Our story didn&apos;t begin in an office — it began on the ground, in the hills of Darjeeling. I, Sandeep Mallick, worked as a manager at a property under Mahakal Group of Hotels, handling guests who came from across the country to experience Sikkim and Darjeeling tourism. Day after day, I noticed the same gap: travelers didn&apos;t just want a good hotel room — they wanted someone who understood their entire journey. The right route, the right timing, the hidden spots worth stopping at, and a travel experience that felt personal, not packaged.
              </p>
              <p>
                That realization became the foundation of Himalayan Sathi Tours & Travels, which my wife, Shilpi Mallick, and I started together — with one simple promise: to give every guest not just a booking, but a sathi (companion) for their Himalayan journey. No middlemen, no generic packages — just honest, on-ground local expertise.
              </p>
              <p>
                Today, Himalayan Sathi is an MSME-registered Destination Management Company (DMC) based in Darjeeling and Siliguri, specializing in:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Darjeeling tour packages</li>
                <li>Sikkim tour packages</li>
                <li>Bhutan tour packages</li>
                <li>Northeast India travel packages</li>
              </ul>
              <p>
                Every itinerary is planned in-house, every hotel and vehicle personally verified, and every guest treated like family visiting our own home. As a local Himalayan travel expert, we combine deep destination knowledge with genuine hospitality — so your trip feels effortless from planning to return.
              </p>
              <p className="font-semibold text-primary">
                Our vision is simple: the beauty of the Himalayas, delivered with the warmth of a companion.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full animate-fade-in-right rounded-2xl overflow-hidden shadow-card">
            <Image
              src="/images/about/sandeep-shilpi.jpg"
              alt="Sandeep Mallick and Shilpi Mallick - Founders of Himalayan Sathi Tours & Travels"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </SectionContainer>

      {/* Mission / Vision / Values Section */}
      <section className="bg-surface-muted py-16 md:py-24">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {/* Mission */}
            <div className="bg-surface-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-text-secondary leading-relaxed">
                Making Himalayan travel accessible, comfortable, and unforgettable. We aim to curate authentic experiences that connect travelers with the true spirit of the mountains.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-surface-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed">
                To be the most trusted travel companion for the Eastern Himalayas, recognized globally for our sustainable practices and unparalleled local expertise.
              </p>
            </div>

            {/* Values */}
            <div className="bg-surface-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Values</h3>
              <ul className="text-text-secondary space-y-2 font-medium">
                <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-accent mr-3"></span>Integrity</li>
                <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-accent mr-3"></span>Safety First</li>
                <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-accent mr-3"></span>Local Expertise</li>
                <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-accent mr-3"></span>Personalized Service</li>
              </ul>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Services Section */}
      <SectionContainer className="py-16 md:py-24">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">What We Offer</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Curated travel experiences tailored to your unique preferences and needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          <div className="bg-surface-card border border-surface-muted p-6 rounded-xl hover:shadow-card transition-shadow text-center group">
            <Users className="w-12 h-12 mx-auto text-primary mb-4 group-hover:text-accent transition-colors" />
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">Family Trips</h3>
            <p className="text-text-secondary text-sm">Comfortable and engaging itineraries for all ages.</p>
          </div>
          <div className="bg-surface-card border border-surface-muted p-6 rounded-xl hover:shadow-card transition-shadow text-center group">
            <Heart className="w-12 h-12 mx-auto text-primary mb-4 group-hover:text-accent transition-colors" />
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">Honeymoon Tours</h3>
            <p className="text-text-secondary text-sm">Romantic getaways amidst the serene mountains.</p>
          </div>
          <div className="bg-surface-card border border-surface-muted p-6 rounded-xl hover:shadow-card transition-shadow text-center group">
            <UsersRound className="w-12 h-12 mx-auto text-primary mb-4 group-hover:text-accent transition-colors" />
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">Group Tours</h3>
            <p className="text-text-secondary text-sm">Exciting and well-managed journeys for larger groups.</p>
          </div>
          <div className="bg-surface-card border border-surface-muted p-6 rounded-xl hover:shadow-card transition-shadow text-center group">
            <Briefcase className="w-12 h-12 mx-auto text-primary mb-4 group-hover:text-accent transition-colors" />
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">Corporate Trips</h3>
            <p className="text-text-secondary text-sm">Team building and professional retreats in nature.</p>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}
