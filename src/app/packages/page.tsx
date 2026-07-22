<<<<<<< HEAD
"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Package } from "@/lib/types";

function PackagesContent() {
  const searchParams = useSearchParams();
  const initialRegion = searchParams.get("region") || "all";

  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [region, setRegion] = useState(initialRegion);
  const [duration, setDuration] = useState("all");
  const [type, setType] = useState("all");

  useEffect(() => {
    document.title = "Tour Packages | Himalayan Sathi Tours & Travels";
    fetchPackages();
  }, [region, duration, type]);

  const fetchPackages = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (region !== "all") query.append("region", region);
      if (duration !== "all") query.append("duration", duration);
      if (type !== "all") query.append("type", type);
      
      const res = await fetch(`/api/packages?${query.toString()}`);
      const data = await res.json();
      setPackages(data);
    } catch (error) {
      console.error("Failed to fetch packages:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading font-bold text-primary mb-4">Tour Packages</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find the perfect holiday package for your next Himalayan adventure.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
          <select 
            value={region} 
            onChange={(e) => setRegion(e.target.value)}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary py-2 px-3 border"
          >
            <option value="all">All Regions</option>
            <option value="darjeeling">Darjeeling</option>
            <option value="sikkim">Sikkim</option>
            <option value="bhutan">Bhutan</option>
            <option value="northeast">North East</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
          <select 
            value={duration} 
            onChange={(e) => setDuration(e.target.value)}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary py-2 px-3 border"
          >
            <option value="all">Any Duration</option>
            <option value="weekend">Weekend (1-3 Days)</option>
            <option value="4-6 days">4-6 Days</option>
            <option value="7+ days">7+ Days</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
          <select 
            value={type} 
            onChange={(e) => setType(e.target.value)}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary py-2 px-3 border"
          >
            <option value="all">Any Type</option>
            <option value="family">Family</option>
            <option value="honeymoon">Honeymoon</option>
            <option value="adventure">Adventure</option>
            <option value="group">Group</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 animate-pulse">
              <div className="h-64 bg-gray-200" />
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
                <div className="h-4 bg-gray-200 rounded w-full mb-6" />
                <div className="flex justify-between items-center">
                  <div className="h-6 bg-gray-200 rounded w-1/3" />
                  <div className="h-10 bg-gray-200 rounded w-1/3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={pkg.image || "/images/darjeeling-pkg.jpg"}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {pkg.duration}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 line-clamp-1">{pkg.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{pkg.destination}</p>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{pkg.shortDescription}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Starting from</p>
                    <p className="text-lg font-bold text-secondary">₹{pkg.startingPrice}</p>
                  </div>
                  <Link 
                    href={`/packages/${pkg.id}`}
                    className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && packages.length === 0 && (
        <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-600 mb-2">No packages found</h3>
          <p className="text-gray-500 mb-6">Try adjusting your filters to see more results.</p>
          <button 
            onClick={() => { setRegion("all"); setDuration("all"); setType("all"); }}
            className="text-primary font-medium hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </>
  );
}

export default function PackagesPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8 max-w-7xl mx-auto bg-surface">
      <Suspense fallback={<div className="text-center py-20">Loading packages...</div>}>
        <PackagesContent />
      </Suspense>
    </main>
=======
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Package } from '@/lib/types';
import { Clock, MapPin, IndianRupee, Search, SlidersHorizontal } from 'lucide-react';

export default function PackagesPage() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    destination: 'all',
    duration: 'all',
    type: 'all'
  });

  useEffect(() => {
    document.title = 'Tour Packages | Himalayan Sathi';
  }, []);

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      try {
        const query = new URLSearchParams({
          destination: filters.destination,
          duration: filters.duration,
          type: filters.type
        }).toString();
        
        const res = await fetch(`/api/packages?${query}`);
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
            Our Tour Packages
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Discover the perfect itinerary for your Himalayan adventure.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        
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
                <option value="weekend">Weekend (1-3 Days)</option>
                <option value="4-6 days">4-6 Days</option>
                <option value="7+ days">7+ Days</option>
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
                <option value="pilgrimage">Pilgrimage</option>
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
              <div 
                key={pkg.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                      {pkg.region}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <Clock className="w-3 h-3 text-accent" />
                      {pkg.duration}
                    </span>
                  </div>
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-heading text-gray-900 mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1 text-accent" />
                    <span className="line-clamp-1">{pkg.destination}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
                    {pkg.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-500 block mb-1">Starting from</span>
                      <div className="flex items-center text-lg font-bold text-gray-900">
                        <IndianRupee className="w-4 h-4 mr-0.5" />
                        {pkg.startingPrice.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <Link 
                      href={`/packages/${pkg.id}`}
                      className="px-5 py-2.5 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-colors text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
>>>>>>> c01344e331452a7d60e8be2138b2d7c89474120e
  );
}
