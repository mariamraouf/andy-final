import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/utils/analytics";

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Delay slightly so document title is updated by react-helmet-async
    const timer = setTimeout(() => {
      trackPageView(location.pathname + location.search, document.title);
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);
};