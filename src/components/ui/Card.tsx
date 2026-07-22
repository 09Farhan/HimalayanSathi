'use client';

import React from 'react';
import Image from 'next/image';
import { Clock, IndianRupee } from 'lucide-react';
import Button from './Button';

interface CardProps {
  image: string;
  title: string;
  description: string;
  badges?: string[];
  cta: { label: string; href: string };
  price?: string | number;
  duration?: string;
  className?: string;
}

export default function Card({
  image,
  title,
  description,
  badges = [],
  cta,
  price,
  duration,
  className = '',
}: CardProps) {
  return (
    <div className={`rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col ${className}`}>
      <div className="relative aspect-[4/3] w-full overflow-hidden group">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
        
        {badges.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            {badges.map((badge, idx) => (
              <span key={idx} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[var(--color-primary-dark)] text-xs font-semibold rounded-full">
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-heading font-bold mb-2 text-[var(--color-primary-dark)] line-clamp-1">{title}</h3>
        <p className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2 flex-grow">{description}</p>
        
        {(price || duration) && (
          <div className="flex items-center justify-between py-4 border-t border-gray-100 mb-2">
            {duration && (
              <div className="flex items-center text-sm text-[var(--color-text-secondary)]">
                <Clock className="w-4 h-4 mr-1.5 text-[var(--color-primary-light)]" />
                <span>{duration}</span>
              </div>
            )}
            {price && (
              <div className="flex items-center text-sm font-semibold text-[var(--color-primary-dark)]">
                <IndianRupee className="w-4 h-4 mr-0.5 text-[var(--color-primary-light)]" />
                <span>{price}</span>
              </div>
            )}
          </div>
        )}
        
        <div className="mt-auto pt-2">
          <Button href={cta.href} variant="outline" className="w-full">
            {cta.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
