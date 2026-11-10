// Analytics helpers.
//
// index.html loads gtag.js once and configures two accounts on it:
//   GA4           G-5LYS1V3QKB
//   Google Ads    AW-18436643903   ("Cruzian" Google tag, also GT-MQJRBF37)
//
// ─── How conversions actually work in this account ──────────────────────────
// There are no conversion labels to paste. All three conversion actions in
// Google Ads are driven by EVENT NAMES rather than by a per-action snippet:
//
//   book_appointment   source: Website  — fires on a gtag event "book_appointment"
//   contact            source: Website  — fires on a gtag event "contact"
//   generate_lead      source: GA4      — imported from the GA4 property
//
// So the job of this file is to emit those three exact event names at the
// right moments. Renaming them breaks conversion tracking; the Google Ads
// conversion actions are matched on the string.
//
// The descriptive events below (book_call, contact_click_phone,
// contact_click_email) are kept alongside because GA4 already has history
// under those names and they carry more detail than the Ads ones.
// ─────────────────────────────────────────────────────────────────────────────

export const GOOGLE_ADS_ID = "AW-18436643903";

export const adsConfigured = GOOGLE_ADS_ID.startsWith("AW-");

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

/**
 * The Meta Pixel, where one is loaded.
 *
 * index.html only defines fbq on the production host, so this is a no-op on
 * staging, on previews and in development. Every call goes through here so
 * that a missing pixel can never throw into a click handler and swallow the
 * navigation the visitor was actually trying to make.
 */
export const trackMeta = (event: string, params?: Record<string, unknown>) => {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  try {
    window.fbq("track", event, params);
  } catch {
    /* an ad pixel is never worth breaking a page over */
  }
};

const hasGtag = () => typeof window !== "undefined" && typeof window.gtag === "function";

// index.html already calls gtag('config', …) for both accounts on first load.
// This re-asserts the Ads account for client-side route changes and is a
// no-op if gtag has not loaded. Safe to call repeatedly.
export const initGoogleAds = () => {
  if (!adsConfigured || !hasGtag()) return;
  window.gtag!("config", GOOGLE_ADS_ID, { send_page_view: false });
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

// ─── Conversions ────────────────────────────────────────────────────────────

// A form was submitted. "generate_lead" is the name the GA4 property records
// and Google Ads imports, so it has to stay exactly this.
export const trackLeadGeneration = (location: string) => {
  trackEvent("generate_lead", {
    form_location: location,
    value: 0,
    currency: "USD",
  });
  // Meta's standard name for the same thing. Matching the standard event
  // rather than inventing one is what lets Meta optimise delivery for it.
  trackMeta("Lead", { content_name: location });
};

/**
 * Someone clicked through to a Stripe checkout.
 *
 * Checkout happens on buy.stripe.com, which the pixel cannot reach, so this
 * click is the last thing we can see. It is the signal Meta optimises toward
 * until the Conversions API is wired up to report the completed sale.
 */
export const trackCheckoutStart = (packageName: string, value: number) => {
  trackEvent("begin_checkout", { items: [{ item_name: packageName }], value, currency: "USD" });
  trackMeta("InitiateCheckout", {
    content_name: packageName,
    value,
    currency: "USD",
  });
};

// Someone booked a call. Emits the Ads conversion name and the richer GA4 one.
export const trackBookCall = (ctaLocation: string) => {
  trackEvent("book_appointment", { cta_location: ctaLocation });
  trackEvent("book_call", { cta_location: ctaLocation });
};

// Someone reached out by phone. "contact" is the Ads conversion name.
export const trackPhoneClick = () => {
  trackEvent("contact", { method: "phone" });
  trackEvent("contact_click_phone", { phone_number: "+18886193580" });
};

// Someone reached out by email. Same "contact" conversion, different method.
export const trackEmailClick = () => {
  trackEvent("contact", { method: "email" });
  trackEvent("contact_click_email", { email_address: "hello@thecruzian.com" });
};

// ─── Engagement (GA4 only, not a conversion) ────────────────────────────────

export const trackCalculatorComplete = (projectedRevenue: number) => {
  trackEvent("calculator_complete", {
    projected_revenue: projectedRevenue,
  });
};
