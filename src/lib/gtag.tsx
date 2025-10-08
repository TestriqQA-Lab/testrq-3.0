// lib/gtag.tsx

declare global {
  // Extend the Window interface to include gtag
  interface Window {
    gtag: (
      command: string,
      eventName: string,
      params: Gtag.ControlParams | Gtag.EventParams | Gtag.ConfigParams | Gtag.CustomParams
    ) => void;
  }
}

// Ensure gtag is defined globally by including the Google Analytics script in your layout
// The Gtag namespace is typically available after the gtag.js script loads.

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string ) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID as string, {
      page_path: url,
    });
  }
};

interface GTagEvent {
  action: string;
  category: string;
  label: string;
  value: number;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent ) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
