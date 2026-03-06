'use client';

import { useEffect } from 'react';

export function GTMProvider() {
  useEffect(() => {
    // Ensure dataLayer is initialized before GTM script loads
    if (typeof window !== 'undefined') {
      if (!window.dataLayer) {
        window.dataLayer = [];
      }

      // Push initial data layer events
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
      });
    }
  }, []);

  return null;
}

// Extend Window type for TypeScript
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}
