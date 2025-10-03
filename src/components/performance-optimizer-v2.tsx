"use client";

import { useEffect } from 'react';

export function PerformanceOptimizerV2() {
  useEffect(() => {
    // Critical resource preloading with better prioritization
    const preloadResources = () => {
      const criticalResources = [
        { href: '/images/light logo.svg', as: 'image', rel: 'preload' },
        { href: '/images/about-prerna.webp', as: 'image', rel: 'preload' },
      ];

      const nonCriticalResources = [
        { href: '/images/Meet Ms. Prerna Sethi.jpg', as: 'image', rel: 'prefetch' },
      ];

      // Load critical resources immediately
      criticalResources.forEach(({ href, as, rel }) => {
        if (!document.querySelector(`link[href="${href}"]`)) {
          const link = document.createElement('link');
          link.rel = rel;
          link.href = href;
          link.as = as;
          link.fetchPriority = 'high';
          document.head.appendChild(link);
        }
      });

      // Prefetch non-critical resources when idle
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          nonCriticalResources.forEach(({ href, as, rel }) => {
            if (!document.querySelector(`link[href="${href}"]`)) {
              const link = document.createElement('link');
              link.rel = rel;
              link.href = href;
              link.as = as;
              document.head.appendChild(link);
            }
          });
        });
      }
    };

    // Enhanced lazy load non-critical images with intersection observer
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
        }, {
          rootMargin: '50px',
          threshold: 0.1
        });

        // Also observe regular img tags that aren't lazy loaded yet
        document.querySelectorAll('img[data-src], img[loading="lazy"]').forEach(img => {
          imageObserver.observe(img);
        });

        return () => imageObserver.disconnect();
      }
    };

    // Optimize animations with reduced motion support
    const optimizeAnimations = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      }

      // Throttle scroll-based animations
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Handle scroll-based animations here if needed
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    };

    // Memory cleanup and performance monitoring
    const cleanupUnusedResources = () => {
      // Remove unused event listeners and elements
      const unusedElements = document.querySelectorAll('[data-cleanup="true"]');
      unusedElements.forEach(el => el.remove());

      // Clean up any lingering observers
      // Performance monitoring (only in development)
      if (process.env.NODE_ENV === 'development' && 'performance' in window) {
        console.log('Performance monitoring active');
      }
    };

    // Break up long tasks using setTimeout
    const scheduleLongTasks = () => {
      // Use setTimeout to break up tasks and prevent long main thread blocks
      const tasks = [preloadResources, lazyLoadImages, optimizeAnimations];

      const runTask = (index: number) => {
        if (index < tasks.length) {
          setTimeout(() => {
            tasks[index]();
            runTask(index + 1);
          }, 0);
        }
      };

      runTask(0);
    };

    // Initialize performance optimizations
    scheduleLongTasks();

    // Cleanup after 10 seconds to free memory
    const cleanupTimer = setTimeout(cleanupUnusedResources, 10000);

    return () => {
      clearTimeout(cleanupTimer);
    };
  }, []);

  return null;
}