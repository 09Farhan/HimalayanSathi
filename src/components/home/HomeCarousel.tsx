'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { GalleryImage } from '@/lib/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HomeCarousel({ images }: { images: GalleryImage[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds per requirement
    
    return () => clearInterval(interval);
  }, [images.length, isHovered, nextSlide]);

  if (!images || images.length === 0) {
    return null; // hide section if no images
  }

  return (
    <section className="py-16 md:py-24 bg-surface px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4 animate-fade-in-up">
            Traveller <span className="text-accent">Stories</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg animate-fade-in-up">
            See real snaps of the faces who believed in us, in return we gave them priceless experience and memories.
          </p>
        </div>

        <div className="flex justify-center items-center w-full px-4">
          <div 
            className="relative rounded-3xl shadow-2xl bg-surface animate-fade-in-up group inline-flex"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Images */}
            {images.map((img, index) => (
              <div 
                key={img.id || index}
                className={`transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={img.url}
                  alt={img.alt || `Gallery Image ${index + 1}`}
                  className={`rounded-3xl block max-w-[90vw] md:max-w-[75vw] max-h-[60vh] md:max-h-[70vh] w-auto h-auto ${index === currentIndex ? '' : 'w-full h-full object-cover'}`}
                />
                {/* Optional Caption Overlay */}
                {img.alt && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-16 rounded-b-3xl">
                    <p className="text-white text-lg md:text-xl font-medium">{img.alt}</p>
                  </div>
                )}
              </div>
            ))}

          {/* Controls - Only show if multiple images */}
          {images.length > 1 && (
            <>
              {/* Left Arrow */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Right Arrow */}
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`transition-all duration-300 rounded-full ${index === currentIndex ? 'w-8 h-2.5 bg-accent' : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}
