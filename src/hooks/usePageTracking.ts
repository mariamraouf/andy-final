import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView, initGoogleAds } from "@/utils/analytics";

export const usePageTracking = () => {
  const location = useLocation();

  // Register the Google Ads account with the gtag.js that index.html already
  // loads for GA4. No-op until a conversion ID is set in analytics.ts.
  useEffect(() => {
    initGoogleAds();
  }, []);

  useEffect(() => {
    // Delay slightly so document title is updated by react-helmet-async
    const timer = setTimeout(() => {
      trackPageView(location.pathname + location.search, document.title);
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);
};