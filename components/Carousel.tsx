"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  interval?: number;
  heightClass?: string;
};

export default function Carousel({ images, interval = 4000, heightClass = "h-48 md:h-64 lg:h-96" }: Props) {
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pointerStart = useRef<number | null>(null);
  const pointerDelta = useRef(0);

  useEffect(() => {
    start();
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function start() {
    stop();
    timer.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
  }

  function stop() {
    if (timer.current) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
  }

  function go(i: number) {
    setIndex(i);
  }

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${heightClass} w-full`}
      onMouseEnter={stop}
      onMouseLeave={start}
      onPointerDown={(e) => {
        pointerStart.current = e.clientX;
        pointerDelta.current = 0;
        stop();
      }}
      onPointerMove={(e) => {
        if (pointerStart.current === null) return;
        pointerDelta.current = e.clientX - pointerStart.current;
      }}
      onPointerUp={() => {
        if (pointerStart.current === null) return;
        const delta = pointerDelta.current;
        pointerStart.current = null;
        pointerDelta.current = 0;
        // threshold
        if (Math.abs(delta) > 50) {
          if (delta > 0) prev(); else next();
        }
        start();
      }}
    >
      <div className="absolute inset-0 flex transition-transform duration-600 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <div key={i} className={`w-full flex-shrink-0 ${heightClass} relative`}>
            <Image src={src} alt={`Slide ${i + 1}`} fill style={{ objectFit: "contain" }} sizes="100vw" />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`w-3 h-3 rounded-full transition ${i === index ? "bg-white" : "bg-white/40"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
