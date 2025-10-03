"use client";

import { useEffect } from 'react';

export function PerformanceOptimizerV2() {
  useEffect(() => {
    // Critical resource preloading
    const preloadResources = () => {
      const resources = [
        { href: '/images/light logo.svg', as: 'image' },
      ];

      resources.forEach(({ href, as }) => {
        if (!document.querySelector(`link[href="${href}"]`)) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = href;
          link.as = as;
          document.head.appendChild(link);
        }
      });
    };

    // Lazy load non-critical images
    const lazyLoadImages = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
              }
            }
          });
        }, { rootMargin: '50px', threshold: 0.1 });

        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    // Optimize animations
    const optimizeAnimations = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      }
    };

    // Memory cleanup
    const cleanupUnusedResources = () => {
      // Remove unused event listeners
      const unusedElements = document.querySelectorAll('[data-cleanup="true"]');
      unusedElements.forEach(el => el.remove());
    };

    preloadResources();
    lazyLoadImages();
    optimizeAnimations();
    
    const cleanup = setTimeout(cleanupUnusedResources, 5000);

    return () => clearTimeout(cleanup);
  }, []);

  return null;
}