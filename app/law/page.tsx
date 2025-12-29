'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Law() {
  const [readMore, setReadMore] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    '/assets/LAW1.jpg',
    '/assets/LAW2.jpg',
    '/assets/LAW3.jpg',
    '/assets/LAW4.jpg',
    '/assets/LAW5.jpg',
    '/assets/LAW7.jpg',
    '/assets/chamber1.jpg',
    '/assets/chamber2.jpg',
    '/assets/chamber3.jpg',
    '/assets/chamber4.jpg',
  ];

  return (
    <main>
      {/* Logo Section */}
      <div className="text-center py-10 bg-gray-50">
        <Image
          src="/assets/zions logo.png"
          alt="Zions Chamber Logo"
          width={270}
          height={270}
          className="mx-auto"
        />
      </div>

      {/* Carousel */}
      <div className="carousel slide mb-8" data-bs-ride="carousel">
        <div className="carousel-inner h-96">
          {[1, 2, 3, 4, 5, 6, 7, 8, 10].map((num, idx) => (
            <div key={num} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
              <Image
                src={`/assets/Zions Chambers/first${num}.jpg`}
                alt={`Slide ${num}`}
                width={1920}
                height={400}
                className="w-full h-96 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Founder Section */}
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="flex flex-wrap gap-8 items-center">
          <div className="flex-1 min-w-[300px]">
            <Image
              src="/assets/founder.jpg"
              alt="Dr. Peters Ikechukwu Adonu"
              width={400}
              height={500}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-3xl font-bold text-[#000e40] mb-2">
              Dr. Peters Ikechukwu Adonu
              <span className="block text-gray-600 text-base font-normal mt-2">Principal Partner</span>
            </h2>
            <p className="mb-2">Location: Ibadan, Nigeria</p>
            <p className="mb-4">
              Phone: <a href="tel:+2348033250313" className="text-[#cc7514] hover:underline">+234 803 325 0313</a>
            </p>
            <Link href="/contact">
              <button className="bg-[#cc7514] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#000f40] transition-colors">
                Get in touch
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-5 py-8">
        <div className="bg-gray-50 rounded-lg p-8">
          <div className={`overflow-hidden transition-all ${readMore ? 'max-h-full' : 'max-h-64'}`}>
            <p className="text-justify leading-relaxed mb-4">
              As the Principal Partner of Peters Ike Adonu & Co (Zion's Chamber) in Ibadan, Oyo State, Nigeria, Dr. Peters Ikechukwu Adonu leads a team of skilled legal professionals specializing in military and corporate law. The firm is recognized for its excellence in providing comprehensive and effective legal solutions across various areas, including criminal law, civil litigation, corporate law, and human rights advocacy. Dr. Peters' leadership has established Zion's Chamber as a reputable institution in the legal community.
            </p>
            <p className="text-justify leading-relaxed mb-4">
              Peters Ike Adonu & Co is known for its integrity and professionalism, offering tailored legal advice that addresses clients' specific needs. The firm's expertise is complemented by a compassionate approach to client service, ensuring justice and upholding the rule of law. With a team of highly skilled military attorneys and corporate solicitors, the firm delivers effective representation and practical business solutions.
            </p>
            <p className="text-justify leading-relaxed mb-4">
              The firm's services include filing annual returns, corporate advice, drafting deeds and agreements, mortgage perfection, legal documentation, and negotiation. Additionally, they handle company registrations, joint ventures, debentures, and the preparation of loan and mortgage agreements. Their approach involves in-depth research and collaboration with academicians to tackle complex legal challenges.
            </p>
            <p className="text-justify leading-relaxed">
              Leveraging Dr. Peters' extensive background as a military investigator, the firm also offers private investigation services. They handle a range of matters, from criminal investigations to private inquiries such as adultery and theft, applying rigorous methods honed from military experience.
            </p>
          </div>
          <button
            onClick={() => setReadMore(!readMore)}
            className="mt-4 bg-[#000f40] text-white px-6 py-2 rounded-md hover:bg-[#cc7514] transition-colors"
          >
            {readMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
