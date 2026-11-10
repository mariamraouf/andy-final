import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X, ArrowRight, Tag } from "lucide-react";
import { OFFER, offerReady, money } from "@/config/offer";

const DISMISSED = "cruzian.offerDismissed";

/**
 * The offer, announced once per visit.
 *
 * `sessionStorage` is exactly the right store here: it is cleared when the
 * browser session ends, so a visitor who dismisses the popup does not see it
 * again while they browse, and does see it when they come back another day.
 * That is the behaviour asked for, without tracking anyone.
 *
 * Its button does not sell anything by itself — it closes and takes them to the
 * offer section on the homepage, where the actual numbers are. A popup that
 * tried to be the offer would be a popup people close.
 */
export const OfferPopup: React.FC = () => {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  /**
   * Take them to the offer. If they are already on the homepage that is a
   * scroll; from anywhere else the route has to render first, so the scroll
   * waits a frame or two for the section to exist.
   */
  const goToOffer = () => {
    close();
    const scroll = () =>
      document
        .getElementById(OFFER.anchor)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });

    if (location.pathname === "/") {
      window.setTimeout(scroll, 60);
      return;
    }
    navigate("/");
    window.setTimeout(scroll, 320);
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
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/70"
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
          className="absolute top-3 right-3 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/15 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-[#A1070F] bg-[radial-gradient(ellipse_at_top_left,#D11420_0%,#A1070F_45%,#6E040B_100%)] text-white px-6 py-8 sm:px-8">
          <p className="flex w-fit items-center gap-2 bg-amber-400 text-[#6E040B] px-3 py-1 rounded-full text-[11px] font-mono font-black uppercase tracking-[.18em]">
            <Tag className="w-3.5 h-3.5" />
            {OFFER.badge}
          </p>
          <h2
            id="offer-title"
            className="mt-3 text-2xl sm:text-4xl font-black tracking-[-.03em] leading-[1.08] text-balance"
          >
            {OFFER.trialDays} days free, then {money(cheapest.intro as number)} a month.
          </h2>
          <p className="mt-2 text-[13px] font-mono font-bold uppercase tracking-[.14em] text-amber-300">
            Closes {OFFER.closes}
          </p>
        </div>

        <div className="px-6 py-6 sm:px-8 space-y-4">
          <p className="text-[15px] text-slate-700 leading-relaxed">
            Marketing handled for your first {OFFER.introMonths} paid months at the introductory
            rate, with <span className="font-bold text-[#A1070F]">$0 upfront</span> — the setup fee
            is deferred to paid month {OFFER.stepUpMonth}.
          </p>

          <ul className="text-[13.5px] text-slate-600 space-y-1.5">
            <li>Card at signup. Nothing is charged during the {OFFER.trialDays} days.</li>
            <li>Cancel inside the trial and you are not charged at all.</li>
            <li>{OFFER.boost.name} is {money(OFFER.boost.price)} one time, with no subscription.</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <button
              type="button"
              onClick={goToOffer}
              className="flex-1 text-center bg-[#A1070F] hover:bg-[#C01722] text-white font-black text-sm py-3.5 rounded-md inline-flex items-center justify-center gap-2 transition-colors"
            >
              See the {OFFER.badge} offers
              <ArrowRight className="w-4 h-4" />
            </button>
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
