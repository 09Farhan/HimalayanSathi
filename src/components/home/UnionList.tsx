import Image from "next/image";
import { unionList } from "@/data/unionList";

/**
 * UnionList Component
 * Displays a fixed, center-aligned grid/row of union partners.
 * Completely static with no scrolling animations.
 */
export default function UnionList() {
  return (
    <section className="py-16 md:py-24 bg-surface-muted border-t border-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
            Our Union <span className="text-primary-light">Partners</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Center aligned wrap container */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
          {unionList.map((partner) => {
            const Content = (
              <div
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 shrink-0 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
                style={{ borderRadius: '20%', overflow: 'hidden' }}
              >
                <Image
                  src={partner.logoUrl}
                  alt={partner.name}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                />
              </div>
            );

            return partner.website ? (
              <a
                key={partner.id}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
                title={partner.name}
              >
                {Content}
              </a>
            ) : (
              <div key={partner.id} className="shrink-0" title={partner.name}>
                {Content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
