import Link from 'next/link';
import { Clock, MapPin, IndianRupee } from 'lucide-react';
import { Package } from '@/lib/types';

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div 
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
            href={`/packages/${pkg.slug}`}
            className="px-5 py-2.5 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-colors text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
