'use client';

import { useEffect } from 'react';

export function GTMDebugger() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (process.env.NODE_ENV !== 'development') return;

    window.dataLayer = window.dataLayer || [];

    const originalPush = window.dataLayer.push.bind(window.dataLayer);

    window.dataLayer.push = (obj: any) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('[GTM Event]', obj);
      }
      return originalPush(obj);
    };
  }, []);

  return null;
}
