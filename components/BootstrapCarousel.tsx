'use client';

import { useEffect } from 'react';

export default function BootstrapCarousel() {
  useEffect(() => {
    // Initialize Bootstrap carousel
    if (typeof window !== 'undefined') {
      const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min');
      const carousels = document.querySelectorAll('.carousel');
      carousels.forEach((carousel) => {
        new bootstrap.Carousel(carousel, {
          interval: 3000,
          ride: 'carousel'
        });
      });
    }
  }, []);

  return null;
}