'use client';

import React from 'react';
import Image from 'next/image';
<<<<<<< HEAD
import Link from 'next/link';
import { Package } from '@/lib/types';

interface CardProps {
  pkg: Package;
}

export function Card({ pkg }: CardProps) {
  return (
    <div className="bg-surface-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group flex flex-col h-full hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          {pkg.featured && (
            <span className="bg-accent text-primary-dark text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </span>
          )}
          <span className="bg-primary/90 text-white backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            {pkg.destination}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-heading font-bold text-primary mb-2 line-clamp-2">
            {pkg.title}
          </h3>
        </div>
        
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {pkg.shortDescription}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-text-muted mb-6">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {pkg.duration}
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {pkg.type}
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-surface-muted flex items-center justify-between">
          <div>
            <span className="text-xs text-text-muted block">Starting from</span>
            <span className="text-lg font-bold text-primary">₹{pkg.startingPrice.toLocaleString('en-IN')}</span>
          </div>
          <Link href={`/packages/${pkg.id}`} className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 focus-ring gradient-primary text-white px-4 py-2 text-sm shadow-md hover:shadow-lg">
            View Details
          </Link>
=======
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
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
        </div>
      </div>
    </div>
  );
}
