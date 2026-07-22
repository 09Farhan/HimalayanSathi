<<<<<<< HEAD
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/lib/types";
=======
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';
import { Destination } from '@/lib/types';
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
  const [activeRegion, setActiveRegion] = useState("all");

  useEffect(() => {
    document.title = "Destinations | Himalayan Sathi Tours & Travels";
    fetchDestinations("all");
  }, []);

  const fetchDestinations = async (region: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/destinations?region=${region}`);
      const data = await res.json();
      setDestinations(data);
    } catch (error) {
      console.error("Failed to fetch destinations:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegionChange = (region: string) => {
    setActiveRegion(region);
    fetchDestinations(region);
  };

  const regions = [
    { id: "all", name: "All Destinations" },
    { id: "darjeeling", name: "Darjeeling" },
    { id: "sikkim", name: "Sikkim" },
    { id: "bhutan", name: "Bhutan" },
    { id: "northeast", name: "North East" },
  ];

  return (
    <main className="min-h-screen py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading font-bold text-primary mb-4">Explore Destinations</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the breathtaking beauty of the Himalayas. From lush tea gardens to snow-capped peaks, find your perfect getaway.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => handleRegionChange(region.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeRegion === region.id
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {region.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 animate-pulse">
              <div className="h-64 bg-gray-200" />
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded w-2/3 mb-4" />
                <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                <div className="h-4 bg-gray-200 rounded w-4/5 mb-6" />
                <div className="h-10 bg-gray-200 rounded w-1/3" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dest.image || "/images/darjeeling-pkg.jpg"}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {dest.region}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">{dest.name}</h3>
                <p className="text-sm font-medium text-secondary mb-4">{dest.tagline}</p>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{dest.description}</p>
                
                <div className="mt-auto">
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Best Time to Visit</p>
                    <p className="text-sm text-gray-800">{dest.bestTimeToVisit}</p>
                  </div>
                  <Link 
                    href={`/packages?region=${dest.region}`}
                    className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors"
                  >
                    View Packages
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {!loading && destinations.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-2xl font-semibold text-gray-600 mb-2">No destinations found</h3>
          <p className="text-gray-500">Try selecting a different region.</p>
        </div>
      )}
=======
  const [activeRegion, setActiveRegion] = useState<string>('all');

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        // Fallback or API call
        const res = await fetch('/api/destinations');
        if (!res.ok) {
          // If API doesn't exist yet, import statically for demo
          const { destinations: staticDestinations } = await import('@/data/destinations');
          setDestinations(staticDestinations);
        } else {
          const data = await res.json();
          setDestinations(data);
        }
      } catch (error) {
        console.error('Failed to fetch destinations', error);
        // Fallback
        const { destinations: staticDestinations } = await import('@/data/destinations');
        setDestinations(staticDestinations);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const regions = [
    { id: 'all', label: 'All Destinations' },
    { id: 'darjeeling', label: 'Darjeeling' },
    { id: 'sikkim', label: 'Sikkim' },
    { id: 'bhutan', label: 'Bhutan' },
    { id: 'northeast', label: 'Northeast India' }
  ];

  const filteredDestinations = activeRegion === 'all' 
    ? destinations 
    : destinations.filter(d => d.region === activeRegion);

  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center gradient-hero">
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-heading font-bold shadow-sm">
            Explore Our Destinations
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium">
            Discover the majestic beauty and hidden gems of the Eastern Himalayas.
          </p>
        </div>
      </section>

      <SectionContainer className="py-12 md:py-20">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeRegion === region.id
                  ? 'gradient-primary text-white shadow-md'
                  : 'bg-white text-text-secondary border border-surface-muted hover:border-primary/30 hover:bg-surface-muted'
              }`}
            >
              {region.label}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-surface-card rounded-2xl overflow-hidden shadow-card h-[500px] flex flex-col">
                <div className="h-64 skeleton w-full"></div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="h-8 skeleton w-3/4 rounded"></div>
                  <div className="h-4 skeleton w-1/2 rounded"></div>
                  <div className="h-20 skeleton w-full rounded mt-2"></div>
                  <div className="flex gap-2 mt-auto">
                    <div className="h-6 skeleton w-20 rounded-full"></div>
                    <div className="h-6 skeleton w-24 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Destinations Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {filteredDestinations.map((destination) => (
              <div 
                key={destination.id} 
                className="group bg-surface-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80" />
                  <Image
                    src={destination.image || "/images/darjeeling.jpg"}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-accent/90 backdrop-blur-sm text-primary-dark text-xs font-bold rounded-full uppercase tracking-wider">
                      {destination.region}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-1">
                    {destination.name}
                  </h3>
                  <p className="text-accent font-medium text-sm mb-4">
                    {destination.tagline}
                  </p>
                  <p className="text-text-secondary text-sm line-clamp-3 mb-6 leading-relaxed flex-1">
                    {destination.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <span 
                          key={idx} 
                          className="px-2.5 py-1 bg-surface-muted text-text-secondary text-xs font-medium rounded-full border border-gray-100"
                        >
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 3 && (
                        <span className="px-2.5 py-1 bg-surface-muted text-text-secondary text-xs font-medium rounded-full border border-gray-100">
                          +{destination.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-surface-muted flex items-center text-sm text-text-secondary">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-medium">Best time:</span>
                    <span className="ml-1 truncate">{destination.bestTimeToVisit}</span>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredDestinations.length === 0 && (
              <div className="col-span-full text-center py-20">
                <p className="text-text-muted text-lg">No destinations found for this region.</p>
              </div>
            )}
          </div>
        )}
      </SectionContainer>
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
    </main>
  );
}
