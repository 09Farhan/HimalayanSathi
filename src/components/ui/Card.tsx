'use client';

import React from 'react';
import Image from 'next/image';
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
        </div>
      </div>
    </div>
  );
}
