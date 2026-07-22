<<<<<<< HEAD
'use client';

import { useRef } from 'react';
import { testimonials } from '@/data/testimonials';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-surface-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">What Our Guests Say</h2>
            <p className="text-text-secondary">Read stories from travellers who explored the Himalayas with us.</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button onClick={() => scroll('left')} className="p-2 rounded-full bg-white text-primary shadow hover:bg-primary hover:text-white transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="p-2 rounded-full bg-white text-primary shadow hover:bg-primary hover:text-white transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-[300px] md:min-w-[400px] bg-white rounded-2xl p-8 shadow-sm snap-center shrink-0 flex flex-col">
              <div className="flex gap-1 mb-4 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill={i < testimonial.rating ? "currentColor" : "none"} className={i >= testimonial.rating ? "text-gray-300" : ""} />
                ))}
              </div>
              <p className="text-text-secondary italic mb-6 line-clamp-4 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-xs text-text-muted">{testimonial.tripType} • {testimonial.location}</p>
                </div>
=======
"use client";

import { useEffect, useState, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/lib/types";

/**
 * TestimonialsSection – Horizontal scrollable carousel of customer reviews.
 */
export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Import testimonials data directly (static data)
    import("@/data/testimonials").then((mod) => {
      setTestimonials(mod.testimonials);
    });
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 380;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            Traveller Stories
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
            What Our <span className="text-primary-light">Travellers</span> Say
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Real stories from real travellers who explored the Himalayas with us.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Carousel controls */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white border border-surface-muted hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Scroll testimonials left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white border border-surface-muted hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Scroll testimonials right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-none w-[340px] sm:w-[380px] snap-start bg-white rounded-2xl p-6 relative transition-all duration-500 hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Decorative quote */}
              <Quote className="absolute top-4 right-4 w-10 h-10 text-accent/15" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < t.rating
                        ? "text-accent fill-accent"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-text-secondary italic text-sm leading-relaxed mb-6 line-clamp-4">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-surface-muted">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-sm">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-text-primary text-sm">
                    {t.name}
                  </p>
                  <p className="text-text-muted text-xs">{t.location}</p>
                </div>
                <span className="ml-auto px-2 py-1 rounded-full bg-secondary-light/10 text-secondary-light text-xs font-medium">
                  {t.tripType}
                </span>
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
