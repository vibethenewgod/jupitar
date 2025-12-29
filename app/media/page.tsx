'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Media() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Generate gallery images array (you can add more images as needed)
  const galleryImages = Array.from({ length: 100 }, (_, i) => `/assets/gallery/galleria${i + 1}.jpg`);

  return (
    <main>
      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-5 py-12">
        <h1 className="text-[2.65rem] font-extrabold text-[#000e40] uppercase tracking-wider text-center leading-relaxed">
          Gallery of Dr. Peters Ike Adonu
        </h1>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-5 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="cursor-pointer hover:opacity-80 transition-opacity overflow-hidden rounded-lg shadow-lg"
              onClick={() => {
                setCurrentSlide(idx);
                setLightboxOpen(true);
              }}
            >
              <Image
                src={img}
                alt={`Gallery ${idx + 1}`}
                width={300}
                height={300}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Hide images that don't exist
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-5 right-8 text-white text-5xl font-bold hover:text-gray-300 z-10"
            onClick={() => setLightboxOpen(false)}
          >
            &times;
          </button>
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={galleryImages[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              width={1200}
              height={800}
              className="max-w-[90%] max-h-[90%] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button
            className="absolute left-5 text-white text-4xl font-bold hover:text-gray-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide((currentSlide - 1 + galleryImages.length) % galleryImages.length);
            }}
          >
            &#10094;
          </button>
          <button
            className="absolute right-5 text-white text-4xl font-bold hover:text-gray-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide((currentSlide + 1) % galleryImages.length);
            }}
          >
            &#10095;
          </button>
        </div>
      )}
    </main>
  );
}
