import Link from "next/link";
import { MapPin, Percent, IndianRupee, ChevronRight } from "lucide-react";

export default function JourneyPriority() {
  return (
    <section className="py-16 md:py-24 bg-surface px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="gradient-primary rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl"></div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight relative z-10 animate-fade-in-up drop-shadow-md">
            Himalayan Sathi - Your Journey, Our Priority!
          </h2>
          
          {/* Divider */}
          <div className="w-full max-w-md mx-auto h-px bg-white/20 mb-12 relative z-10"></div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12 relative z-10">
            {/* Feature 1 */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-white text-primary-dark flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Guidance</h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Travel with experienced professionals and local experts who know the Himalayas inside out.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-white text-primary-dark flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Percent className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Deals & Discounts</h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Get exclusive discounts on perfectly curated flight, hotel, and tour packages.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-white text-primary-dark flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <IndianRupee className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Saves Money</h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Avoid hidden fees & tourist traps. Enjoy budget-friendly, multi-destination itineraries.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-dark font-bold text-lg hover:bg-accent transition-colors duration-300 shadow-xl group"
            >
              Explore All Tours
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
