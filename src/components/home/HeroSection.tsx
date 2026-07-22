"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MapPin, Calendar, Users } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * HeroSection – Full-viewport hero with animated tagline,
 * parallax-style background, and dual CTA buttons.
 */
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-banner.jpg"
          alt="Breathtaking Himalayan mountains at golden hour"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 gradient-hero" />
        {/* Subtle animated particles / floating dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      {/* Content — add pt-24 to clear the fixed navbar */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-28">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/90 text-sm font-medium mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <MapPin className="w-4 h-4 text-accent" />
          Based in Siliguri • Serving Sikkim, Darjeeling & Bhutan
        </div>

        {/* Main heading */}
        <h1
          className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Explore the{" "}
          <span className="text-accent">Himalayas</span> &{" "}
          <span className="text-accent">Bhutan</span>
          <br className="hidden sm:block" />
          <span className="text-white/90"> Beyond Ordinary</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Your trusted travel companion for unforgettable journeys through
          Sikkim, Darjeeling, Bhutan & the Eastern Himalayas. Curated tours,
          local expertise, and memories that last a lifetime.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-accent-light text-primary-dark font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Calendar className="w-5 h-5" />
            View Packages
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <Users className="w-5 h-5" />
            Plan Your Trip
          </Link>
        </div>

        {/* Quick stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "20+", label: "Years Experience" },
            { value: "5000+", label: "Happy Travellers" },
            { value: "50+", label: "Tour Packages" },
            { value: "4.8★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl px-4 py-3 text-center">
              <p className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</p>
              <p className="text-xs sm:text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
}
