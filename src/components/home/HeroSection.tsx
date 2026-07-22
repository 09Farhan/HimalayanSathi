'use client';

import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
      >
        <div className="absolute inset-0 gradient-hero z-10" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-white rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-28 flex flex-col items-center text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white text-sm md:text-base mb-6">
          <MapPin size={16} className="text-accent" />
          <span>Based in Siliguri • Serving Sikkim, Darjeeling & Bhutan</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 max-w-4xl leading-tight drop-shadow-lg">
          Explore the Himalayas & Bhutan <span className="text-accent">Beyond Ordinary</span>
        </h1>
        
        <p className="text-lg md:text-xl text-text-inverse opacity-90 max-w-2xl mb-10 drop-shadow">
          Your trusted travel partner in the region, offering tailor-made tours, expert local guides, and unforgettable experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
          <Link href="/packages" className="px-8 py-3 bg-accent text-primary-dark font-semibold rounded-lg hover:bg-accent-light transition-colors duration-300 shadow-card text-center">
            View Packages
          </Link>
          <Link href="/contact" className="px-8 py-3 glass text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-300 shadow-card text-center">
            Plan Your Trip
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 text-white border-t border-white/20 pt-8 w-full max-w-4xl stagger-children">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">20+</span>
            <span className="text-sm opacity-80">Years Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">5000+</span>
            <span className="text-sm opacity-80">Happy Travellers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">50+</span>
            <span className="text-sm opacity-80">Tour Packages</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">4.8★</span>
            <span className="text-sm opacity-80">Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
