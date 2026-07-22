<<<<<<< HEAD
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Package } from '@/lib/types';
import { Clock, Map } from 'lucide-react';

=======
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, IndianRupee, ArrowRight } from "lucide-react";
import type { Package } from "@/lib/types";

/**
 * FeaturedPackages – Shows 4 featured tour packages on the home page.
 * Fetches data from the /api/packages endpoint.
 */
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
export default function FeaturedPackages() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
    const fetchPackages = async () => {
      try {
        const res = await fetch('/api/packages?featured=true');
        if (res.ok) {
          const data = await res.json();
          setPackages(data);
        }
      } catch (error) {
        console.error('Failed to fetch packages:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Featured Packages</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">Discover our most popular hand-picked itineraries across the Himalayas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-surface-card rounded-xl overflow-hidden shadow-card animate-pulse">
                <div className="h-48 skeleton"></div>
                <div className="p-5 space-y-4">
                  <div className="h-4 skeleton w-1/3"></div>
                  <div className="h-6 skeleton w-3/4"></div>
                  <div className="h-4 skeleton w-full"></div>
                  <div className="h-4 skeleton w-full"></div>
                  <div className="h-10 skeleton w-full mt-4 rounded-lg"></div>
                </div>
              </div>
            ))
          ) : (
            packages.slice(0, 4).map((pkg) => (
              <div key={pkg.id} className="bg-surface-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded text-xs font-semibold text-primary">
                    {pkg.region.toUpperCase()}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-primary text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                    <Clock size={12} /> {pkg.duration}
                  </div>
                </div>
                <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
                  <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">{pkg.title}</h3>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2 flex-grow">{pkg.shortDescription}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-text-muted flex items-center gap-1">
                      <Map size={14} /> {pkg.destination}
                    </div>
                    <div className="font-bold text-primary">
                      ₹{pkg.startingPrice}
                    </div>
                  </div>
                  <Link href={`/packages/${pkg.id}`} className="block w-full py-2 text-center bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                    View Details
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-12 text-center">
          <Link href="/packages" className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors duration-300">
            View All Packages
=======
    fetch("/api/packages?featured=true")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data.slice(0, 4));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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

        {/* Package cards grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-surface-card rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{ boxShadow: "var(--shadow-card)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Duration badge */}
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 text-primary text-xs font-semibold">
                    <Clock className="w-3 h-3" />
                    {pkg.duration}
                  </span>
                  {/* Region badge */}
                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-accent/90 text-primary-dark text-xs font-bold uppercase tracking-wider">
                    {pkg.region}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-text-primary mb-2 group-hover:text-primary-light transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4 line-clamp-2">
                    {pkg.shortDescription}
                  </p>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-surface-muted">
                    <div className="flex items-center gap-1 text-primary font-bold">
                      <IndianRupee className="w-4 h-4" />
                      <span className="text-lg">{pkg.startingPrice.toLocaleString("en-IN")}</span>
                      <span className="text-xs text-text-muted font-normal">/person</span>
                    </div>
                    <Link
                      href={`/packages/${pkg.id}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-light transition-colors"
                    >
                      Details
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
          </Link>
        </div>
      </div>
    </section>
  );
}
