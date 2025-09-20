"use client";

import { useEffect } from 'react';

export function MobilePerformance() {
  useEffect(() => {
    // Reduce DOM complexity on mobile
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      // Lazy load non-critical images
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      }, { rootMargin: '50px' });

      images.forEach(img => imageObserver.observe(img));

      // Cleanup
      return () => {
        images.forEach(img => imageObserver.unobserve(img));
      };
    }
  }, []);

  return null;
}