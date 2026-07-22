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
  );
}
