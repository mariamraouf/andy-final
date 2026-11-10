import React, { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2, Loader2, ArrowRight, CalendarClock, ShieldCheck, XCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { FORM_ID } from "@/utils/forms";
import { trackLeadGeneration } from "@/utils/analytics";
import { OFFER, offerReady, money } from "@/config/offer";

const PACKAGES = ["Visibility", "Growth", "Dominance"];
const errorClass = "block mt-1 text-[12px] font-semibold text-red-600";

const STEPS = [
  {
    icon: ArrowRight,
    title: "Today",
    body: "You pick a package and start the trial. Your card is held to reserve the slot, and nothing is charged.",
  },
  {
    icon: CalendarClock,
    title: "This week",
    body: "We get started — onboarding, access, tracking, and the first build. You see the work before you have paid for it.",
  },
  {
    icon: ShieldCheck,
    title: "Day eight",
    body: "Your first month bills at the introductory rate. Cancel inside the seven days and you are not charged at all. The setup fee waits until paid month four.",
  },
];

export const Start: React.FC = () => {
  const [params] = useSearchParams();
  const requested = params.get("package");
  const [state, handleSubmit] = useForm(FORM_ID);
  const [pkg, setPkg] = useState(PACKAGES.includes(requested ?? "") ? (requested as string) : "Growth");
  const [name, setName] = useState("");
  const [botField, setBotField] = useState("");
  const counted = useRef(false);

  useEffect(() => {
    if (state.succeeded && !counted.current) {
      counted.current = true;
      trackLeadGeneration("start_signup");
    }
  }, [state.succeeded]);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    if (botField) {
      e.preventDefault(); // honeypot
      return;
    }
    handleSubmit(e);
  };

  const field =
    "w-full bg-white border border-slate-300 rounded-md px-3.5 py-2.5 text-[15px] text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition";
  const label = "block text-[13px] font-bold text-[#0B1B3D] mb-1.5";

  return (
    <>
      <SEO
        title="Start with Cruzian | Pay Nothing for Seven Days"
        description="Pick a package and we start work straight away. Seven days free, nothing charged until day eight, and no long-term contract."
        canonical="https://www.thecruzian.com/start"
      />

      <header className="bg-[#0B1B3D] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <p className="flex w-fit items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-[.18em] text-amber-400">
            <XCircle className="w-3.5 h-3.5" />
            {OFFER.trialDays} days free &middot; Cancel anytime
          </p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-black tracking-[-.035em] leading-[1.05] text-balance">
            Start today. Pay nothing for seven days.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            We begin the work before you are charged anything. If it isn't right by day seven,
            cancel and you are not charged at all — no invoice, nothing owed.
          </p>
        </div>
      </header>

      <section className="bg-white py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-5">
            {STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="min-w-0 border border-slate-200 rounded-lg p-5">
                  <Icon className="w-5 h-5 text-amber-600" />
                  <h2 className="mt-3 text-base font-black text-[#0B1B3D]">{s.title}</h2>
                  <p className="mt-1.5 text-[13.5px] text-slate-600 leading-relaxed">{s.body}</p>
                </div>
              );
            })}
          </div>

          {offerReady() && (
            <div className="mt-10 border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-[#07122A] text-white px-5 py-4">
                <h2 className="text-lg font-black tracking-[-.02em]">Start it now</h2>
                <p className="mt-1 text-[13px] text-slate-300">
                  {OFFER.trialDays} days free, then your introductory rate for{" "}
                  {OFFER.introMonths} months. Nothing is charged today.
                </p>
              </div>
              <ul className="divide-y divide-slate-200">
                {OFFER.plans.map((plan) => (
                  <li
                    key={plan.name}
                    className="px-5 py-4 flex flex-wrap items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <p className="font-black text-[#0B1B3D]">{plan.name}</p>
                      <p className="text-[13px] text-slate-600">
                        {money(plan.intro as number)} / month for your first {OFFER.introMonths}{" "}
                        paid months, then {money(plan.regular)}
                      </p>
                    </div>
                    {plan.link ? (
                      <a
                        href={plan.link}
                        className="shrink-0 bg-amber-500 hover:bg-amber-400 text-[#0B1B3D] font-bold text-sm px-5 py-2.5 rounded-md transition-colors"
                      >
                        Start free
                      </a>
                    ) : (
                      <a
                        href="#signup"
                        className="shrink-0 border border-slate-300 hover:border-[#0B1B3D] text-[#0B1B3D] font-bold text-sm px-5 py-2.5 rounded-md transition-colors"
                      >
                        Talk to us
                      </a>
                    )}
                  </li>
                ))}
                <li className="px-5 py-4 flex flex-wrap items-center justify-between gap-3 bg-slate-50">
                  <div className="min-w-0">
                    <p className="font-black text-[#0B1B3D]">{OFFER.boost.name}</p>
                    <p className="text-[13px] text-slate-600">
                      {money(OFFER.boost.price)} once. {OFFER.boost.note}
                    </p>
                  </div>
                  <a
                    href={OFFER.boost.link}
                    className="shrink-0 border border-slate-300 hover:border-[#0B1B3D] text-[#0B1B3D] font-bold text-sm px-5 py-2.5 rounded-md transition-colors"
                  >
                    Buy now
                  </a>
                </li>
              </ul>
              <p className="px-5 py-3 text-[12px] text-slate-500 border-t border-slate-200">
                Card taken at signup to hold your slot. Cancel inside the {OFFER.trialDays} days
                and you are not charged. Setup fee is deferred to paid month {OFFER.stepUpMonth}.
              </p>
            </div>
          )}
        </div>
      </section>

      <section id="signup" className="bg-slate-50 border-t border-slate-200 py-14 sm:py-16 scroll-mt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {state.succeeded ? (
            <div className="text-center space-y-5 py-10">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-[#0B1B3D]">You're in — nothing to pay.</h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
                We'll be in touch today to get started and send you the checkout link for your
                package. Your {OFFER.trialDays} free days begin when you start it, and nothing is
                charged until they are up.
              </p>
              <p className="text-slate-600 text-sm">
                Anything urgent:{" "}
                <a href="tel:+18886193580" className="font-semibold text-amber-700 underline underline-offset-4">
                  +1 888-619-3580
                </a>
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1B3D] tracking-tight">
                Tell us where to start
              </h2>
              <p className="mt-2 text-slate-600 text-sm">
                Under a minute, and no payment details.
              </p>

              <form onSubmit={submit} className="mt-7 space-y-4">
                <input type="hidden" name="_subject" value={`New signup — ${pkg} (pay in 7 days)`} />
                <input type="hidden" name="source" value="Start page sign-up" />

                <div>
                  <label className={label} htmlFor="st-package">Package</label>
                  <select
                    id="st-package"
                    name="package"
                    value={pkg}
                    onChange={(e) => setPkg(e.target.value)}
                    className={field}
                  >
                    {PACKAGES.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={label} htmlFor="st-name">Your name</label>
                    <input
                      id="st-name"
                      name="ownerName"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={field}
                    />
                    <ValidationError prefix="Name" field="ownerName" errors={state.errors} className={errorClass} />
                  </div>
                  <div>
                    <label className={label} htmlFor="st-business">Business name</label>
                    <input id="st-business" name="business" required autoComplete="organization" className={field} />
                    <ValidationError prefix="Business" field="business" errors={state.errors} className={errorClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={label} htmlFor="st-email">Email</label>
                    <input id="st-email" name="email" type="email" required autoComplete="email" className={field} />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className={errorClass} />
                  </div>
                  <div>
                    <label className={label} htmlFor="st-phone">Phone</label>
                    <input id="st-phone" name="phone" type="tel" required autoComplete="tel" className={field} />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className={errorClass} />
                  </div>
                </div>

                <div>
                  <label className={label} htmlFor="st-website">Website</label>
                  <input id="st-website" name="website" placeholder="Optional" className={field} />
                </div>

                <div>
                  <label className={label} htmlFor="st-notes">What do you want this to fix?</label>
                  <textarea
                    id="st-notes"
                    name="message"
                    rows={4}
                    placeholder="Where leads come from today, and what you wish was different."
                    className={field}
                  />
                  <ValidationError prefix="Notes" field="message" errors={state.errors} className={errorClass} />
                </div>

                {/* Honeypot — hidden from people, irresistible to bots */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={botField}
                  onChange={(e) => setBotField(e.target.value)}
                  className="hidden"
                />

                <ValidationError errors={state.errors} className={errorClass} />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-[#0B1B3D] font-bold text-sm py-3.5 rounded-md flex items-center justify-center gap-2 transition-colors"
                >
                  {state.submitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                  ) : (
                    <>Start {pkg} — nothing to pay <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 leading-relaxed">
                  No card is taken here. Your first invoice is emailed separately and falls due in
                  seven days.{" "}
                  <Link to="/billing" className="font-semibold text-amber-700 underline underline-offset-4">
                    Billing &amp; cancellation terms
                  </Link>
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
};
