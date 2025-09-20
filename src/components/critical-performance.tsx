"use client";

import { useEffect } from 'react';

export function CriticalPerformance() {
  useEffect(() => {
    // Eliminate render-blocking resources
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = 'https://fonts.googleapis.com/css2?family=Forum&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap';
    link.onload = () => {
      link.rel = 'stylesheet';
    };
    document.head.appendChild(link);

    // Minimize main thread work
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Defer non-critical JavaScript
        const scripts = document.querySelectorAll('script[data-defer]');
        scripts.forEach(script => {
          const newScript = document.createElement('script');
          newScript.src = script.getAttribute('data-src') || '';
          newScript.async = true;
          document.body.appendChild(newScript);
        });
      });
    }

    // Optimize images aggressively
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) img.loading = 'lazy';
      if (!img.decoding) img.decoding = 'async';
    });

  }, []);

  return null;
}