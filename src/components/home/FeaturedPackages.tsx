'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Package } from '@/lib/types';
import { Clock, Map } from 'lucide-react';

export default function FeaturedPackages() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
          </Link>
        </div>
      </div>
    </section>
  );
}
