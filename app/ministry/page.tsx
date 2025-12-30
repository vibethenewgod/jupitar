"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Carousel from '@/components/Carousel';

export default function Ministry() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    '/assets/ministry/IM (12).jpg',
    '/assets/ministry/IM (17).jpg',
    '/assets/ministry/IM (1).jpg',
    '/assets/ministry/IM (10).jpg',
    '/assets/ministry/IM (11).jpg',
    '/assets/ministry/IM (13).jpg',
    '/assets/ministry/IM (14).jpg',
    '/assets/ministry/IM (15).jpg',
    '/assets/ministry/IM (16).jpg',
    '/assets/ministry/IM (18).jpg',
    '/assets/ministry/IM (19).jpg',
    '/assets/ministry/IM (20).jpg',
  ];

  return (
    <main>
      {/* Carousel with Logo Overlay */}
      <div className="mb-8 relative">
        {/* Custom Carousel component */}
        <Carousel
          images={['/assets/ministry/CC (1).jpg', '/assets/ministry/CC (4).jpg', '/assets/ministry/CC (6).jpg', '/assets/ministry/CC22.jpg', '/assets/ministry/CC30.jpg']}
          interval={4000}
          heightClass="h-96"
        />
        {/* Zion's Chamber Logo Overlay */}
        <div className="absolute top-4 left-4 z-10 bg-white/90 p-3 rounded-lg shadow-lg">
          <Image
            src="/assets/zions logo.png"
            alt="Zions Chamber Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>

      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-5 py-8">
        <h1 className="text-[2.65rem] font-extrabold text-[#000e40] uppercase tracking-wider text-center leading-relaxed">
          Peters Ike Adonu Global Outreach
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-5 py-8">
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="overflow-hidden">
            <p className="text-justify leading-relaxed mb-4">
              Peters Adonu Global Outreach, under the leadership of Pastor Peters Ikechukwu Adonu, is a dynamic ministry dedicated to spreading faith and uplifting communities on a global scale. Dr. Peters, an accomplished pastor and international evangelist, has been invited to minister in churches across multiple continents, delivering messages of hope and spiritual growth. The ministry is renowned for its vibrant approach to preaching and its commitment to nurturing spiritual development in diverse communities.
            </p>
            <p className="text-justify leading-relaxed mb-4">
              Through Peters Adonu Global Outreach, Dr. Peters combines his extensive experience and deep passion for faith to effect meaningful global change. The ministry not only addresses the spiritual needs of congregations but also engages in philanthropic efforts, aiming to bring support and positive transformation to those in need. This dual focus on spiritual guidance and outreach underscores Dr. Peters' dedication to serving others and advancing faith-based missions.
            </p>
            <p className="text-justify leading-relaxed">
              In addition to his roles in law and business, Dr. Peters also serves as the regional director of Chaplaincy (Nigeria Region) under the Covenant International University and Seminary Board in Texas, USA, a position accredited by the United Nations. As President of Peters Adonu Global Outreach, with registration in both Atlanta, USA, and Nigeria, he has ministered in over 17 countries, reflecting his unwavering commitment to spreading messages of hope and faith worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="cursor-pointer hover:opacity-80 transition-opacity"
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
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Subscribe Section */}
      <section className="bg-[#000e40] text-white text-center py-12 px-5">
        <h2 className="text-[2rem] mb-2.5 font-medium">Get the insights that matter</h2>
        <p className="text-base mb-8">Keep up to date with events and updates, now and in the future.</p>
        <Link href="/contact">
          <button className="py-2.5 px-5 text-xl font-bold text-white bg-[#cc7514] border-none rounded-md cursor-pointer transition-all duration-500 hover:scale-105 hover:rounded-none">
            GET IN TOUCH
          </button>
        </Link>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
          <button className="absolute top-5 right-8 text-white text-5xl font-bold hover:text-gray-300" onClick={() => setLightboxOpen(false)}>
            &times;
          </button>
          <Image
            src={galleryImages[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            width={1200}
            height={800}
            className="max-w-[90%] max-h-[90%] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute left-5 text-white text-4xl font-bold hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide((currentSlide - 1 + galleryImages.length) % galleryImages.length);
            }}
          >
            &#10094;
          </button>
          <button
            className="absolute right-5 text-white text-4xl font-bold hover:text-gray-300"
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
