import Image from "next/image";
import { hotelPartners } from "@/data/hotelPartners";

export interface HotelPartner {
  id: string;
  name: string;
  logoUrl: string;
}

/**
 * HotelPartners Ticker Component
 * Displays two continuously scrolling rows of hotel partner logos.
 * Features 40% border radius and hover-to-pause animations.
 */
export default function HotelPartners() {
  // We duplicate the logos array to ensure the marquee is long enough to loop seamlessly
  // If you only have a few logos, duplicating them makes the band look full.
  const row1Logos = [...hotelPartners, ...hotelPartners, ...hotelPartners, ...hotelPartners];
  
  // Reverse the second row so the logos appear in a different order
  const row2Logos = [...row1Logos].reverse();

  return (
    <section className="py-16 md:py-24 bg-surface overflow-hidden border-t border-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
          Trusted <span className="text-primary-light">Hotel Partners</span>
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </div>

      <div className="flex flex-col gap-10 relative">
        {/* Top Row - Scrolls Right (marquee-reverse) */}
        <div className="flex w-full overflow-hidden">
          <div className="flex shrink-0 min-w-full animate-marquee-reverse gap-6 sm:gap-10 pr-6 sm:pr-10">
            {row1Logos.map((partner, index) => (
              <div
                key={`row1-${partner.id}-${index}`}
                className="relative w-36 h-36 sm:w-48 sm:h-48 shrink-0 shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{ borderRadius: '40%', overflow: 'hidden' }}
              >
                <Image
                  src={partner.logoUrl}
                  alt={partner.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 144px, 192px"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless infinite loop */}
          <div className="flex shrink-0 min-w-full animate-marquee-reverse gap-6 sm:gap-10 pr-6 sm:pr-10" aria-hidden="true">
            {row1Logos.map((partner, index) => (
              <div
                key={`row1-dup-${partner.id}-${index}`}
                className="relative w-36 h-36 sm:w-48 sm:h-48 shrink-0 shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{ borderRadius: '40%', overflow: 'hidden' }}
              >
                <Image
                  src={partner.logoUrl}
                  alt={partner.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 144px, 192px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Scrolls Left (marquee) */}
        <div className="flex w-full overflow-hidden">
          <div className="flex shrink-0 min-w-full animate-marquee gap-6 sm:gap-10 pr-6 sm:pr-10">
            {row2Logos.map((partner, index) => (
              <div
                key={`row2-${partner.id}-${index}`}
                className="relative w-36 h-36 sm:w-48 sm:h-48 shrink-0 shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{ borderRadius: '40%', overflow: 'hidden' }}
              >
                <Image
                  src={partner.logoUrl}
                  alt={partner.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 144px, 192px"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless infinite loop */}
          <div className="flex shrink-0 min-w-full animate-marquee gap-6 sm:gap-10 pr-6 sm:pr-10" aria-hidden="true">
            {row2Logos.map((partner, index) => (
              <div
                key={`row2-dup-${partner.id}-${index}`}
                className="relative w-36 h-36 sm:w-48 sm:h-48 shrink-0 shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{ borderRadius: '40%', overflow: 'hidden' }}
              >
                <Image
                  src={partner.logoUrl}
                  alt={partner.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 144px, 192px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
