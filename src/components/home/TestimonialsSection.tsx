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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
