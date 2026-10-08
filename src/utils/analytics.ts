// Analytics helpers.
//
// gtag.js is loaded once in index.html for GA4 (G-5LYS1V3QKB). Google Ads
// rides on that same script: it needs its own gtag('config', 'AW-…') call and
// its own conversion events, which is what the block below handles.
//
// ─────────────────────────────────────────────────────────────────────────────
// TO SWITCH GOOGLE ADS ON: paste the conversion ID into GOOGLE_ADS_ID, and the
// conversion labels into ADS_CONVERSIONS. Both are in Google Ads under
// Tools → Conversions → (your action) → Tag setup → Install the tag yourself.
//
// The ID looks like "AW-123456789". A label looks like "AbC-D_efGhIjKlMnOp".
// Leave them empty and every Ads call below becomes a no-op — nothing breaks,
// nothing fires, and GA4 carries on exactly as it does now.
// ─────────────────────────────────────────────────────────────────────────────

export const GOOGLE_ADS_ID = "AW-18436643903";

export const ADS_CONVERSIONS = {
  // Someone submitted the audit or contact form.
  lead: "",
  // Someone tapped the phone number.
  phoneCall: "",
} as const;

export const adsConfigured = GOOGLE_ADS_ID.startsWith("AW-");

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const hasGtag = () => typeof window !== "undefined" && typeof window.gtag === "function";

// Registers the Ads account with the already-loaded gtag.js. Safe to call more
// than once; gtag de-duplicates its own config calls. Does nothing until an ID
// is set, so this is inert on the live site right now.
export const initGoogleAds = () => {
  if (!adsConfigured || !hasGtag()) return;
  window.gtag!("config", GOOGLE_ADS_ID);
};

// Fires a Google Ads conversion. `label` is one of ADS_CONVERSIONS.
const trackAdsConversion = (label: string, params?: Record<string, any>) => {
  if (!adsConfigured || !label || !hasGtag()) return;
  window.gtag!("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    ...params,
  });
};

export const trackPageView = (path: string, title?: string) => {
  if (!hasGtag()) return;
  window.gtag!("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: title || document.title,
  });
};

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (!hasGtag()) return;
  window.gtag!("event", eventName, eventParams);
};

// A form submission. Reports to GA4 always, and to Google Ads once configured.
export const trackLeadGeneration = (location: string) => {
  trackEvent("generate_lead", {
    form_location: location,
    value: 0,
    currency: "USD",
  });
  trackAdsConversion(ADS_CONVERSIONS.lead, { value: 0, currency: "USD" });
};

export const trackPhoneClick = () => {
  trackEvent("contact_click_phone", {
    phone_number: "+18886193580",
  });
  trackAdsConversion(ADS_CONVERSIONS.phoneCall);
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
