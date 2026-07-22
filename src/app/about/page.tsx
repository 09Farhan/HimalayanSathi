import React from 'react';
import Image from 'next/image';
import { Target, Eye, Heart, Users, UsersRound, Briefcase } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';

export const metadata = {
  title: 'About Us | Himalayan Sathi Tours & Travels',
  description: 'Learn about Himalayan Sathi Tours & Travels, your trusted travel companion for the Eastern Himalayas. Over 20 years of experience in creating unforgettable journeys.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center gradient-hero">
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-heading font-bold shadow-sm">
            About Himalayan Sathi
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium">
            Your most trusted travel companion for the Eastern Himalayas.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <SectionContainer className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed text-lg">
              <p>
                Himalayan Sathi started its journey in Siliguri over 20 years ago with a simple 
                yet profound mission: to showcase the breathtaking beauty of the Eastern Himalayas 
                to the world. What began as a small, passionate team of local guides has blossomed 
                into a premier travel agency.
              </p>
              <p>
                The word &quot;Sathi&quot; means companion. True to our name, we strive to be more 
                than just a tour operator. We are your friends in the mountains, dedicated to making 
                your Himalayan travel accessible, comfortable, and absolutely unforgettable.
              </p>
              <p>
                Our deep-rooted local expertise and commitment to personalized service have allowed us 
                to guide thousands of travelers through the hidden gems of Darjeeling, Sikkim, Bhutan, 
                and Northeast India.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] w-full animate-fade-in-right rounded-2xl overflow-hidden shadow-card">
            <Image
              src="/images/hero-banner.jpg"
              alt="Himalayan Sathi Story"
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

      {/* Team Section */}
      <section className="bg-surface-muted py-16 md:py-24">
        <SectionContainer>
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              The passionate individuals behind your unforgettable journeys.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {[
              { name: "Rajesh Sharma", role: "Founder & Director", desc: "20+ years of exploring the Himalayas.", init: "RS" },
              { name: "Karma Sherpa", role: "Head of Operations", desc: "Ensures seamless travel experiences.", init: "KS" },
              { name: "Priya Tamang", role: "Tour Coordinator", desc: "Crafts personalized itineraries.", init: "PT" },
              { name: "Tenzing Dorji", role: "Senior Guide", desc: "Expert in local history and trails.", init: "TD" }
            ].map((member, idx) => (
              <div key={idx} className="bg-surface-card rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-24 h-24 mx-auto rounded-full gradient-primary flex items-center justify-center mb-4 shadow-md">
                  <span className="text-2xl font-bold text-white tracking-wider">{member.init}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-text-secondary text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>
    </main>
  );
}
