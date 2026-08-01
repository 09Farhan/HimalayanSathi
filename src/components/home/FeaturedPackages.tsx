"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, IndianRupee, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { Package } from "@/lib/types";

/**
 * FeaturedPackages – Shows featured tour packages on the home page in a carousel.
 * Fetches data from the /api/packages endpoint.
 */
export default function FeaturedPackages() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/packages?featured=true")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="featured-packages" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            Popular Tours
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Featured <span className="text-primary-light">Tour Packages</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Handpicked journeys through the most stunning landscapes of the
            Eastern Himalayas. Every trip is a story waiting to be told.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Carousel controls */}
        {!loading && packages.length > 1 && (
          <div className="flex justify-end gap-3 mb-6 pr-2">
            <button 
              onClick={() => scroll('left')} 
              className="p-3 rounded-full bg-white text-primary shadow-md hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 active:scale-95" 
              aria-label="Previous packages"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="p-3 rounded-full bg-white text-primary shadow-md hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 active:scale-95" 
              aria-label="Next packages"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Package cards carousel */}
        {loading ? (
          <div className="flex gap-6 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="min-w-[100%] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] xl:min-w-[calc(25%-18px)] rounded-2xl overflow-hidden shrink-0">
                <div className="skeleton h-52 w-full" />
                <div className="p-5 space-y-3 bg-white">
                  <div className="skeleton h-6 w-3/4" />
                  <div className="skeleton h-4 w-full" />
                  <div className="skeleton h-4 w-2/3" />
                  <div className="skeleton h-10 w-full mt-4" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mt-4 px-4 -mx-4 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="shrink-0 snap-start min-w-[100%] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] xl:min-w-[calc(25%-18px)] group bg-surface-card rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-accent/20"
                style={{ boxShadow: "var(--shadow-card)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  {/* Duration badge */}
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-primary text-xs font-bold shadow-lg">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    {pkg.duration}
                  </span>
                  {/* Region badge */}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    {pkg.region}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-heading text-xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors line-clamp-1">
                    {pkg.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-6 line-clamp-2 leading-relaxed">
                    {pkg.shortDescription}
                  </p>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-5 border-t border-surface-muted">
                    <div>
                      <span className="text-xs text-text-muted font-medium block mb-1">Starting from</span>
                      <div className="flex items-center gap-1 text-primary-dark font-bold text-xl">
                        <IndianRupee className="w-4 h-4 mr-[-4px]" />
                        <span>{pkg.startingPrice.toLocaleString("en-IN")}</span>
                      </div>
                    </div>
                    <Link
                      href={`/packages/${pkg.slug}`}
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-surface-muted text-primary hover:bg-primary hover:text-white rounded-xl text-sm font-semibold transition-colors duration-300 group/btn"
                    >
                      Details
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-primary text-white font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            View All Packages
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
