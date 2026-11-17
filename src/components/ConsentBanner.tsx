import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    CRUZIAN_NEEDS_CONSENT?: boolean;
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

type Choice = "granted" | "denied";

/**
 * The consent bar, shown to the people the law actually asks us to ask.
 *
 * index.html has already set Consent Mode v2 defaults before any tag fired:
 * denied for the EEA, the UK and Switzerland, granted everywhere else. Google
 * enforces that list itself through the `region` parameter. Meta has no
 * equivalent, so index.html pauses the pixel for the same visitors using the
 * browser's time zone — which needs no third-party lookup and sends nothing
 * about the visitor anywhere.
 *
 * The practical effect: a visitor in Jacksonville sees nothing and is measured
 * exactly as before. A visitor in Europe sees this, and nothing is sent until
 * they answer.
 */
export const ConsentBanner: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Read it after mount so the prerendered HTML never contains the bar.
    if (window.CRUZIAN_NEEDS_CONSENT) setOpen(true);
  }, []);

  const decide = (choice: Choice) => {
    try {
      localStorage.setItem("cruzian_consent", choice);
    } catch {
      // Private browsing, or storage blocked. The choice still applies to this
      // page load; they will simply be asked again next time.
    }

    window.gtag?.("consent", "update", {
      ad_storage: choice,
      ad_user_data: choice,
      ad_personalization: choice,
      analytics_storage: choice,
    });

    // Meta only has the two states, and only grant does anything useful here:
    // the pixel is already revoked for everyone who sees this bar.
    if (choice === "granted") window.fbq?.("consent", "grant");

    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie choices"
      className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4"
    >
      <div className="mx-auto max-w-3xl bg-[#0B1B3D] text-white rounded-xl shadow-2xl border border-white/10 p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-slate-200">
          We use cookies to measure how this site is used and how well our ads work. You can
          accept or decline — declining does not change anything you can do here. Our{" "}
          <a
            href="/privacy"
            className="font-semibold text-amber-400 underline underline-offset-4 hover:text-amber-300"
          >
            privacy notice
          </a>{" "}
          explains what each one does.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            onClick={() => decide("granted")}
            className="bg-amber-500 hover:bg-amber-400 text-[#0B1B3D] font-black text-sm px-6 py-3 rounded-md transition-colors"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => decide("denied")}
            className="bg-transparent border border-white/30 hover:border-white/60 text-white font-bold text-sm px-6 py-3 rounded-md transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};
