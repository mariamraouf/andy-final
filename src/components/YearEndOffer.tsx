import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarClock, CreditCard, Tag, XCircle, BellRing } from "lucide-react";
import {
  OFFER,
  offerReady,
  money,
  savesOverIntro,
  savesWithBoost,
  boostSaving,
} from "@/config/offer";
import { trackCheckoutStart } from "@/utils/analytics";

/**
 * The offer, straight under the hero.
 *
 * This is the long version, and it is meant to be: the popup sells the free
 * week in a glance and sends people here, where every number that decides
 * whether someone signs up is written down. What the intro rate saves, what
 * starting with Business Boost saves on top, what lands in month four, and the
 * four terms that would otherwise be discovered on a statement.
 *
 * It stays in Cruzian's colours. Red is the campaign flag and nothing else;
 * the savings are green because that is the one place a second colour earns
 * its keep.
 */

const Term: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="min-w-0">
    <h4 className="text-[13px] font-black text-[#0B1B3D]">{title}</h4>
    <p className="mt-1 text-[12.5px] text-slate-600 leading-relaxed">{children}</p>
  </div>
);

export const YearEndOffer: React.FC = () => {
  if (!offerReady()) return null;

  return (
    <section id={OFFER.anchor} className="scroll-mt-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="flex w-fit items-center gap-2 bg-[#D7263D] text-white px-3 py-1 rounded-full text-[11px] font-mono font-black uppercase tracking-[.18em]">
              <Tag className="w-3.5 h-3.5" />
              {OFFER.badge}
            </p>
            <p className="flex w-fit items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-[.14em] text-[#D7263D]">
              <CalendarClock className="w-3.5 h-3.5" />
              Enroll by {OFFER.closes}
            </p>
          </div>

          <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-[-.035em] leading-[1.05] text-balance text-[#0B1B3D]">
            {OFFER.tagline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {OFFER.trialDays} days free, then your introductory rate for the first{" "}
            {OFFER.introMonths} paid months. Nothing up front: the setup fee is deferred to paid
            month {OFFER.stepUpMonth}.
          </p>
        </div>

        {/* The three plans, with what changes and when */}
        <div className="mt-9 grid sm:grid-cols-3 gap-4">
          {OFFER.plans.map((p) => (
            <div
              key={p.name}
              className="min-w-0 bg-white border border-slate-200 rounded-lg p-5 flex flex-col shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-mono font-bold uppercase tracking-[.14em] text-[#0B1B3D]">
                  {p.name}
                </h3>
                <span className="shrink-0 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10.5px] font-bold px-2 py-0.5">
                  Save {money(savesOverIntro(p))}
                </span>
              </div>

              <div className="mt-3 flex items-baseline gap-2 min-h-[2.75rem]">
                <span className="text-base line-through tabular-nums text-slate-400">
                  {money(p.regular)}
                </span>
                <span className="text-4xl font-black tracking-[-.03em] tabular-nums text-[#0B1B3D]">
                  {money(p.intro as number)}
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-500">per month</p>
              <p className="mt-1 text-[12.5px] text-slate-500">
                for your first {OFFER.introMonths} paid months
              </p>

              <p className="mt-3 flex items-baseline gap-2 text-[11px] font-mono font-bold uppercase tracking-wider">
                <span className="line-through text-slate-400">{money(p.setup)} setup</span>
                <span className="text-amber-700">$0 upfront</span>
              </p>
              <p className="text-[12.5px] text-slate-500">
                deferred to paid month {OFFER.stepUpMonth}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[12.5px] text-slate-500 space-y-1">
                <p>
                  Month {OFFER.stepUpMonth}: {money(p.regular + p.setup)}
                  <span className="text-slate-400">
                    {" "}
                    ({money(p.regular)} + {money(p.setup)} setup)
                  </span>
                </p>
                <p>
                  Month {OFFER.stepUpMonth + 1} onward: {money(p.regular)} / month
                </p>
              </div>

              {p.link ? (
                <a
                  href={p.link}
                  onClick={() => trackCheckoutStart(p.name, p.intro as number)}
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
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-mono font-bold uppercase tracking-[.14em] text-[#0B1B3D]">
                {OFFER.boost.name}
              </h3>
              <span className="rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10.5px] font-bold px-2 py-0.5">
                Save {money(boostSaving())}
              </span>
            </div>
            <p className="mt-2 flex items-baseline gap-2 flex-wrap">
              <span className="text-base line-through tabular-nums text-slate-400">
                {money(OFFER.boost.regular)}
              </span>
              <span className="text-2xl font-black tracking-[-.03em] tabular-nums text-[#0B1B3D]">
                {money(OFFER.boost.price)}
              </span>
              <span className="text-slate-500 text-sm">one time</span>
            </p>
            <p className="mt-1 text-[12.5px] text-slate-500">{OFFER.boost.note}</p>
          </div>
          <a
            href={OFFER.boost.link}
            onClick={() => trackCheckoutStart(OFFER.boost.name, OFFER.boost.price)}
            className="bg-[#0B1B3D] hover:bg-[#13295a] text-white font-bold text-sm px-6 py-3.5 rounded-md inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
          >
            Get {OFFER.boost.name}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* The Boost-first route. Worth its own block: it is the only way the
            monthly rate goes lower, and nobody would guess it exists. */}
        <div className="mt-8 rounded-xl border border-amber-300 bg-amber-50/60 p-5 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-black tracking-[-.02em] text-[#0B1B3D]">
            Start with {OFFER.boost.name}, and the monthly rate drops again.
          </h3>
          <p className="mt-1.5 text-[13.5px] text-slate-600 leading-relaxed max-w-3xl">
            Buy the {money(OFFER.boost.price)} audit first and these rates replace the ones above
            for your first {OFFER.introMonths} paid months. The saving is on top of the event
            pricing, not instead of it.
          </p>

          <div className="mt-5 grid sm:grid-cols-3 gap-3">
            {OFFER.plans.map((p) => (
              <div
                key={p.name}
                className="min-w-0 bg-white border border-amber-200 rounded-lg p-4 flex flex-col"
              >
                <p className="text-[11px] font-mono font-bold uppercase tracking-[.14em] text-amber-700">
                  {p.name} upgrade
                </p>
                <p className="mt-2 flex items-baseline gap-2">
                  <span className="text-[13px] line-through tabular-nums text-slate-400">
                    {money(p.intro as number)}
                  </span>
                  <span className="text-2xl font-black tracking-[-.03em] tabular-nums text-[#0B1B3D]">
                    {money(p.upgrade as number)}
                  </span>
                  <span className="text-[11px] text-slate-500">/mo</span>
                </p>
                <p className="mt-1 text-[12px] font-bold text-emerald-700">
                  A further {money(savesWithBoost(p))} over {OFFER.introMonths} months
                </p>
                {p.upgradeLink ? (
                  <a
                    href={p.upgradeLink}
                    onClick={() => trackCheckoutStart(`${p.name} (Boost upgrade)`, p.upgrade as number)}
                    className="mt-3 block text-center bg-white hover:bg-amber-50 border border-amber-400 text-[#0B1B3D] font-bold text-[13px] py-2.5 rounded-md transition-colors"
                  >
                    Start {p.name} free
                  </a>
                ) : (
                  <Link
                    to={`/start?package=${encodeURIComponent(p.name)}`}
                    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}
                    className="mt-3 block text-center bg-white hover:bg-amber-50 border border-amber-400 text-[#0B1B3D] font-bold text-[13px] py-2.5 rounded-md transition-colors"
                  >
                    Discuss {p.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* The four things people would otherwise find out at month four */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-black tracking-[-.02em] text-[#0B1B3D]">
            The terms, up front.
          </h3>
          <p className="mt-1.5 text-[13.5px] text-slate-600">
            These apply to both the monthly plans and the {OFFER.boost.name} route.
          </p>

          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Term title={`${OFFER.trialDays} days before your first payment`}>
              Your card is added at signup to hold the slot. Cancel before the {OFFER.trialDays}{" "}
              days are up and you are not charged at all. Otherwise the first month is charged
              automatically at the rate shown.
            </Term>
            <Term title="A reminder before you pay">
              We email you {OFFER.reminderHours} hours before the trial ends with the exact amount
              and date, and again before paid month {OFFER.stepUpMonth}. No charge should ever be
              the first you hear of it.
            </Term>
            <Term title={`${OFFER.introMonths}-month commitment once billing starts`}>
              The introductory rate is held for {OFFER.introMonths} paid months, and those months
              are committed. Cancelling early stops future renewals; it does not refund months
              already paid.
            </Term>
            <Term title="The setup fee is deferred, not waived">
              Setup work is done during the trial. If you cancel inside the {OFFER.trialDays} days
              you owe nothing for it. If you continue, it lands once on your paid month{" "}
              {OFFER.stepUpMonth} invoice and never again.
            </Term>
          </div>

          <ul className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-x-6 gap-y-2 text-[12.5px] text-slate-500">
            <li className="flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              Card at signup, nothing charged during the {OFFER.trialDays} days
            </li>
            <li className="flex items-center gap-1.5">
              <XCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              Cancel in the trial and you are not charged at all
            </li>
            <li className="flex items-center gap-1.5">
              <BellRing className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              Cancellations to{" "}
              <a
                href={`mailto:${OFFER.contactEmail}`}
                className="underline underline-offset-2 hover:text-[#0B1B3D]"
              >
                {OFFER.contactEmail}
              </a>
            </li>
          </ul>

          <p className="mt-3 text-[12px] text-slate-500 leading-relaxed max-w-3xl">
            Advertising budget is separate from our fees and is paid directly to the platforms.{" "}
            <Link to="/billing" className="underline underline-offset-4 hover:text-[#0B1B3D]">
              Full billing and cancellation terms
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
};
