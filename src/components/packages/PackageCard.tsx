import Link from 'next/link';
import { Clock, MapPin, IndianRupee } from 'lucide-react';
import { Package } from '@/lib/types';

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div 
      className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-transparent hover:border-accent/20 group flex flex-col hover:-translate-y-2"
    >
      <div className="relative h-60 overflow-hidden">
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2 pr-12">
          <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
            {pkg.region}
          </span>
          {pkg.type && (
            <span className="bg-white/90 backdrop-blur-md text-primary-dark text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg truncate max-w-[150px]">
              {Array.isArray(pkg.type) ? pkg.type.join(' & ') : pkg.type}
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-white/95 backdrop-blur-md text-primary text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
            <Clock className="w-3.5 h-3.5 text-accent" />
            {pkg.duration}
          </span>
        </div>
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
      </div>
      
      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-heading text-primary-dark mb-3 line-clamp-1 group-hover:text-primary transition-colors">
          {pkg.title}
        </h3>
        <div className="flex items-center text-text-muted text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1.5 text-accent" />
          <span className="line-clamp-1 font-medium">{pkg.destination}</span>
        </div>
        <p className="text-text-secondary text-sm mb-6 line-clamp-2 flex-grow leading-relaxed">
          {pkg.shortDescription}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-5 border-t border-surface-muted">
          <div>
            <span className="text-xs text-text-muted font-medium block mb-1">Starting from</span>
            <div className="flex items-center text-xl font-bold text-primary-dark">
              <IndianRupee className="w-4 h-4 mr-0.5" />
              {pkg.startingPrice.toLocaleString('en-IN')}
            </div>
          </div>
          <Link 
            href={`/packages/${pkg.slug}`}
            className="px-6 py-2.5 bg-surface-muted text-primary hover:bg-primary hover:text-white rounded-xl font-semibold transition-colors duration-300 text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
