'use client';

import { galleryPhotos } from '@/data/gallery';
import Link from 'next/link';

export default function TravellerGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Traveller Gallery</h2>
          <p className="text-text-secondary">Real moments captured by our travellers</p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 mb-12">
          {galleryPhotos.map((photo) => (
            <div key={photo.id} className="relative rounded-2xl overflow-hidden group break-inside-avoid">
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <p className="font-bold text-lg">{photo.caption}</p>
                <p className="text-sm opacity-90">{photo.traveller}</p>
                <p className="text-xs opacity-75">{photo.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors duration-300">
            Share Your Story
          </Link>
        </div>
      </div>
    </section>
  );
}
