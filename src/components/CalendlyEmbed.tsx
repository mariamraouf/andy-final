import React, { useEffect, useRef, useState } from "react";
import { trackBookCall, trackLeadGeneration } from "@/utils/analytics";

const CALENDLY_URL = "https://calendly.com/thecruzian/cruzian-discovery-call";
const WIDGET_SRC = "https://assets.calendly.com/assets/external/widget.js";

interface CalendlyEmbedProps {
  /** Where on the site this embed appears — recorded with the conversion. */
  location: string;
  /** Package or industry the visitor came from, prefilled into the booking. */
  context?: string;
  height?: number;
}

/** Load the Calendly widget script once per page, not once per embed. */
const loadWidget = (): Promise<void> => {
  if (typeof window === "undefined") return Promise.resolve();
  const w = window as unknown as { __cruzianCalendly?: Promise<void> };
  if (w.__cruzianCalendly) return w.__cruzianCalendly;

  w.__cruzianCalendly = new Promise<void>((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      if ((existing as HTMLScriptElement & { dataset: DOMStringMap }).dataset.loaded) resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = WIDGET_SRC;
    s.async = true;
    s.onload = () => {
      s.dataset.loaded = "true";
      resolve();
    };
    // A blocked or failed script must not leave the panel spinning forever.
    s.onerror = () => resolve();
    document.head.appendChild(s);
  });

  return w.__cruzianCalendly;
};

/**
 * Calendly inline booking.
 *
 * This replaced the old form-based booking flow. The conversions Google Ads
 * listens for used to fire on form submit, so they are re-fired here from
 * Calendly's own postMessage event — without this, booking a call would stop
 * counting as a conversion and the ad reporting would quietly go to zero.
 */
export const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({
  location,
  context,
  height = 700,
}) => {
  const holder = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    // An ad blocker or a slow network can leave the script pending forever.
    // Rather than hold a tall empty panel open, fall back to a plain link.
    const giveUp = window.setTimeout(() => {
      if (!cancelled) setFailed((f) => f || true);
    }, 8000);

    loadWidget().then(() => {
      if (cancelled) return;
      const api = (window as unknown as { Calendly?: { initInlineWidget: (o: unknown) => void } })
        .Calendly;
      if (!api || !holder.current) {
        setFailed(true);
        return;
      }
      const url = new URL(CALENDLY_URL);
      url.searchParams.set("hide_gdpr_banner", "1");
      if (context) url.searchParams.set("a1", context);

      api.initInlineWidget({ url: url.toString(), parentElement: holder.current });
      window.clearTimeout(giveUp);
      setFailed(false);
      setReady(true);
    });

    const onMessage = (e: MessageEvent) => {
      if (typeof e.origin !== "string" || !e.origin.includes("calendly.com")) return;
      const data = e.data as { event?: string } | null;
      if (data && data.event === "calendly.event_scheduled") {
        trackBookCall(location);
        trackLeadGeneration(location);
      }
    };
    window.addEventListener("message", onMessage);

    return () => {
      cancelled = true;
      window.clearTimeout(giveUp);
      window.removeEventListener("message", onMessage);
    };
  }, [location, context]);

  return (
    <div className="w-full min-w-0">
      <div
        ref={holder}
        style={{ height: ready ? height : 0 }}
        className="rounded-xl overflow-hidden"
        aria-label="Booking calendar"
      />
      {!ready && !failed && (
        <p className="text-center text-sm text-slate-500 py-10">Loading the calendar…</p>
      )}
      {failed && (
        <div className="text-center text-sm text-slate-600 py-6 space-y-2">
          <p>The calendar didn't load. You can book directly instead:</p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-amber-700 underline underline-offset-4"
          >
            Open the booking page
          </a>
          <p className="text-slate-500">
            Or email{" "}
            <a href="mailto:hello@thecruzian.com" className="underline underline-offset-4">
              hello@thecruzian.com
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export { CALENDLY_URL };
