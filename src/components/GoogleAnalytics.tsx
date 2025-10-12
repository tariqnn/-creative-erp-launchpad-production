import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

export const GoogleAnalytics = ({ measurementId = 'G-XXXXXXXXXX' }: GoogleAnalyticsProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && measurementId) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      // Initialize Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href,
      });

      // Track page views on route changes
      const handleRouteChange = () => {
        gtag('config', measurementId, {
          page_title: document.title,
          page_location: window.location.href,
        });
      };

      // Listen for custom navigation events
      window.addEventListener('navigate', handleRouteChange);
      window.addEventListener('popstate', handleRouteChange);

      return () => {
        window.removeEventListener('navigate', handleRouteChange);
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, [measurementId]);

  return null;
};

// Helper functions for tracking events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  }
};

// Declare global gtag function
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
