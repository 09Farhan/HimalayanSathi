import React from 'react';
<<<<<<< HEAD
=======
import Image from 'next/image';
import { Star } from 'lucide-react';
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
import { Testimonial as TestimonialType } from '@/lib/types';

interface TestimonialProps {
  testimonial: TestimonialType;
}

<<<<<<< HEAD
export function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <div className="bg-surface-card p-8 rounded-2xl shadow-[var(--shadow-card)] relative mt-8">
      <div className="absolute -top-6 left-8 text-6xl text-primary/20 font-heading">
        "
      </div>
      
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent' : 'text-surface-muted'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <p className="text-text-secondary italic mb-6 relative z-10">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center justify-between border-t border-surface-muted pt-4 mt-auto">
        <div>
          <h4 className="font-bold text-primary">{testimonial.name}</h4>
          <p className="text-sm text-text-muted">{testimonial.location}</p>
        </div>
        <span className="bg-surface-muted text-primary text-xs font-semibold px-2 py-1 rounded">
          {testimonial.tripType}
        </span>
=======
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
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
      </div>
    </div>
  );
}
