// Global GA4 helper declaration
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const trackPageView = (path: string, title?: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title: title || document.title,
    });
  }
};

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>,
) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }
};

export const trackLeadGeneration = (location: string) => {
  trackEvent("generate_lead", {
    form_location: location,
    value: 0,
    currency: "USD",
  });
};

export const trackPhoneClick = () => {
  trackEvent("contact_click_phone", {
    phone_number: "+18886193580",
  });
};

export const trackEmailClick = () => {
  trackEvent("contact_click_email", {
    email_address: "hello@thecruzian.com",
  });
};

export const trackCalculatorComplete = (projectedRevenue: number) => {
  trackEvent("calculator_complete", {
    projected_revenue: projectedRevenue,
  });
};

export const trackBookCall = (ctaLocation: string) => {
  trackEvent("book_call", {
    cta_location: ctaLocation,
  });
};