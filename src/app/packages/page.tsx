'use client';
import { IMAGES } from '@/data/images';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Package } from '@/lib/types';
import PackageCard from '@/components/packages/PackageCard';
import { Clock, MapPin, IndianRupee, Search, SlidersHorizontal } from 'lucide-react';

function PackagesContent() {
  const searchParams = useSearchParams();
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    destination: searchParams.get('destination') || 'all',
    duration: 'all',
    type: 'all'
  });

  useEffect(() => {
    document.title = 'Sikkim Darjeeling Tour Packages | Himalayan Sathi';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore affordable Sikkim tour package cost, Darjeeling honeymoon package, and Sikkim family tour package. Best time to visit Sikkim is now!');
    }
  }, []);

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams();
        if (filters.destination !== 'all') queryParams.append('region', filters.destination);
        if (filters.duration !== 'all') queryParams.append('duration', filters.duration);
        if (filters.type !== 'all') queryParams.append('type', filters.type);
        
        const res = await fetch(`/api/packages?${queryParams.toString()}`);
        if (!res.ok) throw new Error('Failed to fetch packages');
        const data = await res.json();
        setPackages(data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const activeFilterCount = Object.values(filters).filter(v => v !== 'all').length;

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 z-10"></div>
        <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('/images/hero-banner.jpg')] bg-cover bg-center"></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Sikkim & Darjeeling Tour Packages
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Discover the perfect itinerary for your Himalayan adventure.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* SEO Quick Links */}
        <div className="mb-8 flex flex-wrap gap-3">
          <Link href="/packages/region/darjeeling" className="px-5 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-gray-700 hover:text-primary hover:shadow-md transition-all border border-gray-100">
            Darjeeling Packages
          </Link>
          <Link href="/packages/region/sikkim" className="px-5 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-gray-700 hover:text-primary hover:shadow-md transition-all border border-gray-100">
            Sikkim Packages
          </Link>
          <Link href="/packages/region/bhutan" className="px-5 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-gray-700 hover:text-primary hover:shadow-md transition-all border border-gray-100">
            Bhutan Packages
          </Link>
          <Link href="/packages/region/northeast" className="px-5 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-gray-700 hover:text-primary hover:shadow-md transition-all border border-gray-100">
            North East Packages
          </Link>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-10 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2 text-primary font-medium">
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filter Packages</span>
              {activeFilterCount > 0 && (
                <span className="bg-accent text-white text-xs px-2 py-0.5 rounded-full">
                  {activeFilterCount}
                </span>
              )}
            </div>
            <div className="text-sm text-gray-500 font-medium">
              Showing {loading ? '...' : packages.length} results
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label htmlFor="destination" className="text-sm font-medium text-gray-700">Destination</label>
              <select
                id="destination"
                name="destination"
                value={filters.destination}
                onChange={handleFilterChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50"
              >
                <option value="all">All Destinations</option>
                <option value="darjeeling">Darjeeling</option>
                <option value="sikkim">Sikkim</option>
                <option value="bhutan">Bhutan</option>
                <option value="northeast">Northeast India</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label htmlFor="duration" className="text-sm font-medium text-gray-700">Duration</label>
              <select
                id="duration"
                name="duration"
                value={filters.duration}
                onChange={handleFilterChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50"
              >
                <option value="all">All Durations</option>
                <option value="4N/5D">4N/5D</option>
                <option value="5N/6D">5N/6D</option>
                <option value="6N/7D">6N/7D</option>
                <option value="7N/8D">7N/8D</option>
                <option value="8N/9D">8N/9D</option>
                <option value="9N/10D">9N/10D</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label htmlFor="type" className="text-sm font-medium text-gray-700">Tour Type</label>
              <select
                id="type"
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50"
              >
                <option value="all">All Types</option>
                <option value="family">Family</option>
                <option value="honeymoon">Honeymoon</option>
                <option value="adventure">Adventure</option>
                <option value="group">Group</option>
              </select>
            </div>
          </div>
        </div>

        {/* Package Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
                <div className="h-56 bg-gray-200"></div>
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <div className="h-5 bg-gray-200 rounded w-24"></div>
                    <div className="h-5 bg-gray-200 rounded w-20"></div>
                  </div>
                  <div className="h-7 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-10 bg-gray-200 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : packages.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No packages found</h3>
            <p className="text-gray-500 mb-6">We couldn't find any packages matching your current filters.</p>
            <button 
              onClick={() => setFilters({ destination: 'all', duration: 'all', type: 'all' })}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default function PackagesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface flex items-center justify-center">Loading packages...</div>}>
      <PackagesContent />
    </Suspense>
  );
}
