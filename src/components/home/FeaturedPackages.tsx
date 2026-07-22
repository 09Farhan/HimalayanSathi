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
          </Link>
        </div>
      </div>
    </section>
  );
}
