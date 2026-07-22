import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Testimonial as TestimonialType } from '@/lib/types';

interface TestimonialProps {
  testimonial: TestimonialType;
}

export default function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <div className="glass p-8 rounded-2xl relative">
      <div className="absolute top-6 right-6 opacity-10">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 21L16.41 14.41H10.5V3H21V11.39L18.423 21H14.017ZM3.517 21L5.91 14.41H0V3H10.5V11.39L7.923 21H3.517Z" />
        </svg>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="italic text-lg mb-6 text-[var(--color-text-secondary)] line-clamp-4 relative z-10">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--color-primary-light)]">
          <Image 
            src={testimonial.avatar || '/placeholder-avatar.png'} 
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-[var(--color-text-primary)]">{testimonial.name}</h4>
          <p className="text-sm text-[var(--color-text-muted)]">{testimonial.location} • {testimonial.tripType}</p>
        </div>
      </div>
    </div>
  );
}
