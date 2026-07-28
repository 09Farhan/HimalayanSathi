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
export default function FeaturedPackages() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
                className="group bg-surface-card rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-accent/20"
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
