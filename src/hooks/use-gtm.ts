import { useEffect } from 'react';

interface PageViewEvent {
  event: string;
  page_path: string;
  page_title: string;
  [key: string]: any;
}

interface CustomEvent {
  event: string;
  [key: string]: any;
}

export function useGTM() {
  const pushEvent = (event: CustomEvent) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push(event);
    }
  };

  const trackPageView = (pagePath: string, pageTitle: string, additionalData?: Record<string, any>) => {
    const event: PageViewEvent = {
      event: 'page_view',
      page_path: pagePath,
      page_title: pageTitle,
      ...additionalData,
    };
    pushEvent(event);
  };

  const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
    const event: CustomEvent = {
      event: eventName,
      ...eventData,
    };
    pushEvent(event);
  };

  return {
    pushEvent,
    trackPageView,
    trackEvent,
  };
}

// Hook para rastrear cambios de ruta automáticamente
export function useGTMPageTracking(pathname: string, title?: string) {
  const { trackPageView } = useGTM();

  useEffect(() => {
    trackPageView(pathname, title || document.title);
  }, [pathname, title, trackPageView]);
}
