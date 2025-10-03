"use client";

import { useEffect } from 'react';

export function DOMOptimizer() {
  useEffect(() => {
    // Reduce DOM complexity by removing unnecessary elements
    const optimizeDOM = () => {
      // Remove duplicate IDs (SEO issue and DOM bloat)
      const elementsWithIds = document.querySelectorAll('[id]');
      const idMap = new Map<string, Element[]>();

      elementsWithIds.forEach(el => {
        const id = el.id;
        if (id) {
          if (!idMap.has(id)) {
            idMap.set(id, []);
          }
          idMap.get(id)!.push(el);
        }
      });

      // Remove duplicate IDs (keep first occurrence)
      idMap.forEach((elements) => {
        if (elements.length > 1) {
          elements.slice(1).forEach(el => el.removeAttribute('id'));
        }
      });

      // Optimize images that aren't using Next.js Image component
      const regularImages = document.querySelectorAll('img:not([data-next-image])');
      regularImages.forEach(img => {
        const htmlImg = img as HTMLImageElement;
        // Add loading="lazy" if not present
        if (!htmlImg.loading) {
          htmlImg.loading = 'lazy';
        }

        // Add decoding="async" for better performance
        if (!htmlImg.decoding) {
          htmlImg.decoding = 'async';
        }
      });

      // Remove empty elements that add no value
      const emptyElements = document.querySelectorAll('div:empty, span:empty, p:empty');
      emptyElements.forEach(el => {
        const htmlEl = el as HTMLElement;
        // Only remove if they have no classes, styles, or event listeners
        if (!htmlEl.className && !htmlEl.style.cssText && !el.attributes.length) {
          el.remove();
        }
      });

      // Optimize event listeners - use passive listeners where appropriate
      const scrollElements = document.querySelectorAll('[onscroll]');
      scrollElements.forEach(() => {
        // This is a basic optimization - in a real app you'd want to refactor to use addEventListener with passive: true
      });

    };

    // Virtualize large lists if they exist
    const virtualizeLists = () => {
      const lists = document.querySelectorAll('ul, ol');
      lists.forEach(list => {
        const items = list.children;
        if (items.length > 20) {
          // Add virtualization class for potential future implementation
          list.classList.add('virtualized-list');
        }
      });
    };

    // Debounce expensive operations
    const debounce = (func: Function, wait: number) => {
      let timeout: NodeJS.Timeout;
      return (...args: any[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(null, args), wait);
      };
    };

    // Optimize resize and scroll handlers
    const handleResize = debounce(() => {
      // Throttled resize handling
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, 100);

    const handleScroll = debounce(() => {
      // Throttled scroll handling for performance
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
    }, 16); // ~60fps

    // Add optimized event listeners
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Run optimizations
    optimizeDOM();
    virtualizeLists();

    // Set CSS custom properties for better performance
    const setCSSProperties = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      document.documentElement.style.setProperty('--scroll-y', '0px');
    };

    setCSSProperties();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}