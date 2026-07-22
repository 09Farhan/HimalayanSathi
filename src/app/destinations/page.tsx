"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/lib/types";

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
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
    </main>
  );
}
