import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import { OFFER, offerReady, money } from "@/config/offer";

const DISMISSED = "cruzian.offerDismissed";

/**
 * The offer, once per visit.
 *
 * `sessionStorage` is exactly the right store here: it is cleared when the
 * browser session ends, so a visitor who dismisses the popup does not see it
 * again while they browse, and does see it when they come back another day.
 * That is the behaviour asked for, without tracking anyone.
 *
 * It waits a moment before appearing so it lands after the page has drawn
 * rather than on top of a blank screen, and it can always be closed with
 * Escape, the cross, or the backdrop.
 */
export const OfferPopup: React.FC = () => {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!offerReady()) return;
    let dismissed = false;
    try {
      dismissed = window.sessionStorage.getItem(DISMISSED) === "1";
    } catch {
      /* storage blocked: show it, it is only a promotion */
    }
    if (dismissed) return;
    const t = window.setTimeout(() => setOpen(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      window.sessionStorage.setItem(DISMISSED, "1");
    } catch {
      /* nothing to do: it simply shows again next page view */
    }
  };

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  const cheapest = OFFER.plans.reduce((a, b) =>
    (a.intro as number) <= (b.intro as number) ? a : b
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-labelledby="offer-title"
      onClick={close}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 p-2 rounded-full text-slate-500 hover:text-[#0B1B3D] hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-[#07122A] text-white px-6 py-7 sm:px-8">
          <p className="text-[11px] font-mono font-bold uppercase tracking-[.18em] text-amber-400">
            Enrollment closes {OFFER.closes}
          </p>
          <h2 id="offer-title" className="mt-2 text-2xl sm:text-3xl font-black tracking-[-.03em] leading-tight text-balance">
            {OFFER.tagline}
          </h2>
        </div>

        <div className="px-6 py-6 sm:px-8 space-y-4">
          <p className="text-[15px] text-slate-700 leading-relaxed">
            {OFFER.trialDays} days free, then from{" "}
            <span className="font-black text-[#0B1B3D]">{money(cheapest.intro as number)}</span> a
            month for your first {OFFER.introMonths} paid months.{" "}
            <span className="font-bold text-[#0B1B3D]">$0 upfront</span>, with the setup fee deferred
            to paid month {OFFER.stepUpMonth}.
          </p>

          <ul className="text-[13.5px] text-slate-600 space-y-1.5">
            <li>Card at signup. Nothing is charged during the {OFFER.trialDays} days.</li>
            <li>Cancel inside the trial and you are not charged at all.</li>
            <li>{OFFER.boost.name} is {money(OFFER.boost.price)} one time, with no subscription.</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Link
              to="/start"
              onClick={close}
              className="flex-1 text-center bg-amber-500 hover:bg-amber-400 text-[#0B1B3D] font-bold text-sm py-3.5 rounded-md inline-flex items-center justify-center gap-2 transition-colors"
            >
              See the offer
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={close}
              className="sm:w-auto px-5 py-3.5 text-sm font-semibold text-slate-500 hover:text-[#0B1B3D] transition-colors"
            >
              Not now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
