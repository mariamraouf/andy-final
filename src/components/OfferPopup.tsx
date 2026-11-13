import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X, ArrowRight, Tag } from "lucide-react";
import { OFFER, offerReady, money, savesOverIntro, boostSaving } from "@/config/offer";

const DISMISSED = "cruzian.offerDismissed";

/**
 * The offer, announced once per visit.
 *
 * It has to do two jobs that pull against each other: sell the free week in
 * one glance, and answer the question a careful buyer asks next, which is what
 * it costs and what it saves. So the free week is the headline, the three
 * rates sit under it as a short list rather than a grid of cards, and the
 * detail that would turn this into a leaflet lives in the offer section the
 * button scrolls to.
 *
 * `sessionStorage` is the right store here: cleared when the browser session
 * ends, so dismissing it holds for the visit and not forever.
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
   * Take them to the offer. On the homepage that is a scroll; from anywhere
   * else the route has to render before the section exists to scroll to.
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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-labelledby="offer-title"
      onClick={close}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 text-slate-400 hover:text-[#0B1B3D] hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="h-1.5 bg-[#D7263D]" />

        <div className="px-6 pt-6 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pr-10">
            <p className="flex items-center gap-2 bg-[#D7263D] text-white px-3 py-1 rounded-full text-[11px] font-mono font-black uppercase tracking-[.18em]">
              <Tag className="w-3.5 h-3.5" />
              {OFFER.badge}
            </p>
            <p className="text-[11px] font-mono font-bold uppercase tracking-[.14em] text-[#D7263D]">
              Enroll by {OFFER.closes}
            </p>
          </div>

          {/* The free week is the whole pitch, so it is the whole headline */}
          <h2
            id="offer-title"
            className="mt-3 text-4xl sm:text-5xl font-black tracking-[-.035em] leading-[1] text-[#0B1B3D]"
          >
            {OFFER.trialDays} days{" "}
            <span className="relative inline-block">
              <span className="relative z-10">free</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-[.14em] h-[.26em] bg-amber-400/70 rounded-sm"
              />
            </span>
            .
          </h2>
          <p className="mt-2.5 text-[15px] font-semibold text-[#0B1B3D] leading-snug">
            Nothing charged today. Cancel any time before day {OFFER.trialDays + 1} and you pay
            nothing at all.
          </p>
        </div>

        {/* The three rates, as a list. A grid of cards in a modal this size
            turns into the leaflet we are trying not to send. */}
        <div className="mt-5 px-6 sm:px-8">
          <p className="text-[11px] font-mono font-bold uppercase tracking-[.14em] text-slate-500">
            Then, for your first {OFFER.introMonths} paid months
          </p>
          <ul className="mt-2 divide-y divide-slate-100 border-y border-slate-100">
            {OFFER.plans.map((p) => (
              <li key={p.name} className="flex items-center justify-between gap-3 py-2.5">
                <div className="min-w-0">
                  <p className="text-sm font-black text-[#0B1B3D]">{p.name}</p>
                  <p className="text-[11.5px] text-slate-500">
                    {money(p.regular)} from month {OFFER.stepUpMonth + 1}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="flex items-baseline justify-end gap-1.5">
                    <span className="text-[12px] line-through tabular-nums text-slate-400">
                      {money(p.regular)}
                    </span>
                    <span className="text-lg font-black tabular-nums text-[#0B1B3D]">
                      {money(p.intro as number)}
                    </span>
                    <span className="text-[11px] text-slate-500">/mo</span>
                  </p>
                  <p className="text-[11px] font-bold text-emerald-700">
                    Save {money(savesOverIntro(p))}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-2.5 text-[12.5px] text-slate-600 leading-relaxed">
            <span className="font-bold text-amber-700">$0 upfront.</span> The setup fee is deferred
            to paid month {OFFER.stepUpMonth}, not waived. We email you{" "}
            {OFFER.reminderHours} hours before billing starts.
          </p>

          {/* Business Boost is a different shape of thing and reads better set apart */}
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-black text-[#0B1B3D]">{OFFER.boost.name}</p>
              <p className="text-[11.5px] text-slate-500">One time. No subscription.</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="flex items-baseline justify-end gap-1.5">
                <span className="text-[12px] line-through tabular-nums text-slate-400">
                  {money(OFFER.boost.regular)}
                </span>
                <span className="text-lg font-black tabular-nums text-[#0B1B3D]">
                  {money(OFFER.boost.price)}
                </span>
              </p>
              <p className="text-[11px] font-bold text-emerald-700">
                Save {money(boostSaving())}
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-5 sm:px-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={goToOffer}
              className="flex-1 text-center bg-amber-500 hover:bg-amber-400 text-[#0B1B3D] font-black text-sm py-3.5 rounded-md shadow-sm inline-flex items-center justify-center gap-2 transition-colors"
            >
              See the full offer
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
          <p className="mt-3 text-[11.5px] text-slate-500 leading-relaxed">
            Card at signup to hold your slot. {OFFER.introMonths}-month commitment once billing
            starts. Advertising budget is separate.
          </p>
        </div>
      </div>
    </div>
  );
};
