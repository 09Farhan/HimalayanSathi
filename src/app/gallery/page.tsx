"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { galleryPhotos } from "@/data/gallery";

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof galleryPhotos[0] | null>(null);

  useEffect(() => {
    document.title = "Gallery | Himalayan Sathi Tours & Travels";
  }, []);

  return (
    <main className="min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto bg-surface">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Our Travel Gallery</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Glimpses of beautiful moments captured by our travellers across the Himalayas.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryPhotos.map((photo) => (
          <div 
            key={photo.id} 
            className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all"
            onClick={() => setSelectedPhoto(photo)}
          >
            {/* Some photos might need a min-height for masonry to look good, using object-cover with fixed sizes or dynamic heights if images had width/height props. We use a responsive wrapper here. */}
            <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:min-h-[250px]">
              <Image 
                src={photo.src || "/images/darjeeling-pkg.jpg"} 
                alt={photo.alt} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p className="text-white font-bold text-lg mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {photo.location}
              </p>
              <p className="text-gray-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                By {photo.traveller}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
            onClick={() => setSelectedPhoto(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          
          <div 
            className="max-w-5xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] md:h-[75vh]">
              <Image 
                src={selectedPhoto.src || "/images/darjeeling-pkg.jpg"} 
                alt={selectedPhoto.alt} 
                fill 
                className="object-contain" 
              />
            </div>
            <div className="bg-black text-white p-6 text-center">
              <p className="text-xl font-bold mb-2">{selectedPhoto.caption}</p>
              <p className="text-gray-400">
                {selectedPhoto.location} • {selectedPhoto.date} • Captured by {selectedPhoto.traveller}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
