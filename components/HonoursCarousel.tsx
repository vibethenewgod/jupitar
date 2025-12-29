"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  label?: string;
  detail?: string;
};

type HonoursCarouselProps = {
  slides: Slide[];
  autoAdvanceMs?: number;
};

export default function HonoursCarousel({ slides, autoAdvanceMs = 7000 }: HonoursCarouselProps) {
  const validSlides = useMemo(() => slides.filter((s) => !!s.src), [slides]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || validSlides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % validSlides.length);
    }, autoAdvanceMs);
    return () => clearInterval(id);
  }, [paused, validSlides.length, autoAdvanceMs]);

  const goTo = (next: number) => {
    if (!validSlides.length) return;
    const total = validSlides.length;
    const wrapped = (next + total) % total;
    setIndex(wrapped);
  };

  const current = validSlides[index] ?? validSlides[0];

  return (
    <section
      className="w-full bg-[#f9f7f2] text-[#0f162b] border-b border-[#e7e0d2]"
      aria-label="Honours and professional recognition carousel"
    >
      <div
        className="max-w-6xl mx-auto px-5 py-10 flex flex-col gap-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative overflow-hidden rounded-xl bg-white ring-1 ring-[#e6dfd1] focus-within:ring-2 focus-within:ring-[#0f162b]" aria-live="polite">
          {validSlides.map((slide, i) => {
            const isActive = i === index;
            return (
              <div
                key={slide.src + i}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100" : "opacity-0"}`}
                aria-hidden={!isActive}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  className="object-contain md:object-cover bg-[#fcfbf7]"
                  priority={i === 0}
                />
                {(slide.label || slide.detail) && (
                  <div className="absolute bottom-4 left-4 max-w-sm rounded-lg bg-white/88 text-[#0f162b] px-4 py-3 shadow-sm ring-1 ring-[#e6dfd1]">
                    <div className="text-base font-semibold tracking-tight">{slide.label}</div>
                    {slide.detail && <p className="text-sm text-[#2c3550] mt-1 leading-relaxed">{slide.detail}</p>}
                  </div>
                )}
              </div>
            );
          })}

          <div className="relative aspect-[16/7] md:aspect-[16/6]">
            {/* spacer for height; slides are absolutely positioned */}
          </div>

          {validSlides.length > 1 && (
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 pointer-events-none">
              <button
                type="button"
                className="pointer-events-auto h-10 w-10 grid place-items-center rounded-full bg-white/85 text-[#0f162b] ring-1 ring-[#dcd5c6] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f162b]"
                onClick={() => goTo(index - 1)}
                aria-label="Previous recognition"
              >
                <span aria-hidden>‹</span>
              </button>
              <button
                type="button"
                className="pointer-events-auto h-10 w-10 grid place-items-center rounded-full bg-white/85 text-[#0f162b] ring-1 ring-[#dcd5c6] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f162b]"
                onClick={() => goTo(index + 1)}
                aria-label="Next recognition"
              >
                <span aria-hidden>›</span>
              </button>
            </div>
          )}

          {validSlides.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {validSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`h-2 w-6 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-[#0f162b] ${i === index ? "bg-[#0f162b]" : "bg-[#d9d2c3] hover:bg-[#cfc7b8]"}`}
                  aria-label={`Go to recognition ${i + 1}`}
                  aria-pressed={i === index}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0f162b]">Honours &amp; Professional Recognition</h2>
          <p className="text-base md:text-lg text-[#1f2a44]">Acknowledging a career of distinguished service, integrity, and excellence at the Bar.</p>
        </div>
      </div>
    </section>
  );
}
