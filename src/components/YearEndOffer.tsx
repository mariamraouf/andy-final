import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarClock, CreditCard, Tag, XCircle } from "lucide-react";
import { OFFER, offerReady, money } from "@/config/offer";

/**
 * The offer, straight under the hero.
 *
 * The section is in the site's own colours — navy headings, amber buttons, the
 * same white cards as everywhere else — so it reads as part of Cruzian rather
 * than a banner someone pasted in. Red appears exactly twice: the campaign tag
 * and the closing date. That is the flag that catches the eye; the rest of the
 * page is still the brand.
 *
 * The numbers underneath are honest on purpose. It states what they pay now
 * (nothing), what they pay for three months, and what happens after. Hiding the
 * step-up would win a few more signups and lose them again at month four.
 */
export const YearEndOffer: React.FC = () => {
  if (!offerReady()) return null;

  return (
    <section
      id={OFFER.anchor}
      className="scroll-mt-20 bg-slate-50 border-y border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="flex w-fit items-center gap-2 bg-[#D7263D] text-white px-3 py-1 rounded-full text-[11px] font-mono font-black uppercase tracking-[.18em]">
              <Tag className="w-3.5 h-3.5" />
              {OFFER.badge}
            </p>
            <p className="flex w-fit items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-[.14em] text-[#D7263D]">
              <CalendarClock className="w-3.5 h-3.5" />
              Closes {OFFER.closes}
            </p>
          </div>

          <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-[-.035em] leading-[1.05] text-balance text-[#0B1B3D]">
            {OFFER.tagline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Start with {OFFER.trialDays} days free. Keep your introductory rate for the first{" "}
            {OFFER.introMonths} paid months, and pay nothing up front: the setup fee is deferred to
            paid month {OFFER.stepUpMonth}.
          </p>
        </div>

        {/* The three plans, with what changes and when */}
        <div className="mt-9 grid sm:grid-cols-3 gap-4">
          {OFFER.plans.map((p) => (
            <div
              key={p.name}
              className="min-w-0 bg-white border border-slate-200 rounded-lg p-5 flex flex-col shadow-sm"
            >
              <h3 className="text-sm font-mono font-bold uppercase tracking-[.14em] text-[#0B1B3D]">
                {p.name}
              </h3>

              <p className="mt-3 flex items-baseline gap-2 flex-wrap">
                <span className="text-slate-400 line-through text-base">{money(p.regular)}</span>
                <span className="text-3xl font-black tracking-[-.03em] text-[#0B1B3D]">
                  {money(p.intro as number)}
                </span>
                <span className="text-slate-500 text-sm">/mo</span>
              </p>
              <p className="text-[12.5px] text-slate-500">
                for your first {OFFER.introMonths} paid months
              </p>

              <p className="mt-3 flex items-baseline gap-2 flex-wrap text-[13px]">
                <span className="text-slate-400 line-through">{money(p.setup)} setup</span>
                <span className="font-bold text-amber-700">$0 upfront</span>
              </p>
              <p className="text-[12.5px] text-slate-500">
                deferred to paid month {OFFER.stepUpMonth}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[12.5px] text-slate-500 space-y-1">
                <p>
                  Month {OFFER.stepUpMonth}: {money(p.regular)} + {money(p.setup)} setup
                </p>
                <p>
                  Month {OFFER.stepUpMonth + 1} onward: {money(p.regular)} / month
                </p>
                {typeof p.upgrade === "number" && (
                  <p className="text-[#0B1B3D] font-semibold">
                    Came from {OFFER.boost.name}? {money(p.upgrade)} / month instead
                  </p>
                )}
              </div>

              {p.link ? (
                <a
                  href={p.link}
                  className="mt-5 block text-center bg-amber-500 hover:bg-amber-400 text-[#0B1B3D] font-black text-sm py-3 rounded-md shadow-sm transition-colors"
                >
                  Start {p.name} free
                </a>
              ) : (
                <Link
                  to={`/start?package=${encodeURIComponent(p.name)}`}
                  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}
                  className="mt-5 block text-center bg-white hover:bg-slate-50 border border-slate-300 text-[#0B1B3D] font-bold text-sm py-3 rounded-md transition-colors"
                >
                  Discuss {p.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Business Boost sits outside the monthly arrangement entirely */}
        <div className="mt-4 bg-white border border-slate-200 rounded-lg p-5 grid sm:grid-cols-[1fr_auto] gap-4 items-center shadow-sm">
          <div className="min-w-0">
            <h3 className="text-sm font-mono font-bold uppercase tracking-[.14em] text-[#0B1B3D]">
              {OFFER.boost.name}
            </h3>
            <p className="mt-2 flex items-baseline gap-2 flex-wrap">
              <span className="text-slate-400 line-through text-base">{money(OFFER.boost.regular)}</span>
              <span className="text-2xl font-black tracking-[-.03em] text-[#0B1B3D]">
                {money(OFFER.boost.price)}
              </span>
              <span className="text-slate-500 text-sm">one time</span>
            </p>
            <p className="mt-1 text-[12.5px] text-slate-500">{OFFER.boost.note}</p>
          </div>
          <a
            href={OFFER.boost.link}
            className="bg-[#0B1B3D] hover:bg-[#13295a] text-white font-bold text-sm px-6 py-3.5 rounded-md inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
          >
            Get {OFFER.boost.name}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* The terms people would otherwise find out about at month four */}
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[12.5px] text-slate-500">
          <li className="flex items-center gap-1.5">
            <CreditCard className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            Card at signup, nothing charged during the {OFFER.trialDays} days
          </li>
          <li className="flex items-center gap-1.5">
            <XCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            Cancel in the trial and you are not charged at all
          </li>
          <li className="flex items-center gap-1.5">
            <CalendarClock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            {OFFER.introMonths}-month commitment once billing starts
          </li>
        </ul>
        <p className="mt-2 text-[12px] text-slate-500 leading-relaxed max-w-3xl">
          Advertising budget is separate from our fees and is paid directly to the platforms.{" "}
          <Link to="/billing" className="underline underline-offset-4 hover:text-[#0B1B3D]">
            Full billing and cancellation terms
          </Link>
        </p>

      </div>
    </section>
  );
};
