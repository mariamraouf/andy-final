import React, { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { SEO } from "@/components/SEO";
import { Link, useLocation } from "react-router-dom";
import {
  Leaf, Droplets, Car, Wrench, Home as HomeIcon,
  MapPin, Phone, Mail, CheckCircle2, Loader2, ArrowRight, ShieldCheck,
} from "lucide-react";
import { FORM_ID } from "@/utils/forms";
import {
  trackLeadGeneration, trackPhoneClick, trackEmailClick, trackNewsletterSignup,
} from "@/utils/analytics";

const errorClass = "block mt-1 text-[12px] font-semibold text-red-600";

const SERVICES = [
  {
    icon: Leaf,
    name: "Lawn care & landscaping",
    desc: "Mowing, edging, clean-ups and seasonal tidying — one visit or on a schedule.",
  },
  {
    icon: Droplets,
    name: "Pressure washing",
    desc: "Driveways, siding, decks, patios and fencing brought back to how they looked.",
  },
  {
    icon: Car,
    name: "Car washing & detailing",
    desc: "Interior and exterior detailing, done at your home or your office.",
  },
  {
    icon: Wrench,
    name: "Vehicle maintenance",
    desc: "Routine servicing arranged and coordinated so you are not chasing a garage.",
  },
  {
    icon: HomeIcon,
    name: "Home & vehicle care",
    desc: "The odd jobs around the house that never quite reach the top of the list.",
  },
];

/**
 * Budget bands, not a price list.
 *
 * Asking for a number scares people off a quote form; asking for nothing leaves
 * the provider quoting blind. A band is the compromise, and "Need a quote" is
 * first so that nobody feels obliged to guess.
 */
const BUDGETS = [
  "Need a quote",
  "Under $100",
  "$100 – $250",
  "$250 – $500",
  "$500 – $1,000",
  "$1,000+",
];

const HOW = [
  { n: "1", t: "Tell us what you need", d: "The form below takes under a minute. No account, no obligation." },
  { n: "2", t: "Cruzian Network", d: "We match you with a vetted provider in your area." },
  { n: "3", t: "You get a quote", d: "Priced by the provider who would do the work. You decide whether to go ahead." },
];

export const PersonalServices: React.FC = () => {
  const [state, handleSubmit] = useForm(FORM_ID);
  const [service, setService] = useState("Not sure — need advice");
  const [budget, setBudget] = useState(BUDGETS[0]);
  const [botField, setBotField] = useState("");
  const counted = useRef(false);

  // The mailing list is a second, independent submission to the same endpoint.
  const [news, handleNews] = useForm(FORM_ID);
  const [newsBot, setNewsBot] = useState("");
  const newsCounted = useRef(false);
  const location = useLocation();

  /**
   * Let an ad land on the service it advertised.
   *
   * A lawn care ad that drops someone on a form reading "Not sure — need
   * advice" has thrown away the one thing it already knew about them.
   * /personal-services?service=lawn preselects it; anything unrecognised is
   * ignored rather than guessed at.
   */
  useEffect(() => {
    const wanted = new URLSearchParams(location.search).get("service");
    if (!wanted) return;
    const needle = wanted.trim().toLowerCase();
    const hit = SERVICES.find(
      (s) => s.name.toLowerCase() === needle || s.name.toLowerCase().startsWith(needle),
    );
    if (hit) setService(hit.name);
  }, [location.search]);

  useEffect(() => {
    if (news.succeeded && !newsCounted.current) {
      newsCounted.current = true;
      trackNewsletterSignup("personal_services");
    }
  }, [news.succeeded]);

  // Fire the conversion once and only once, however often this re-renders.
  useEffect(() => {
    if (state.succeeded && !counted.current) {
      counted.current = true;
      trackLeadGeneration("home_services_quote");
    }
  }, [state.succeeded]);

  /**
   * Picking a service from a card should do the whole job: set the dropdown,
   * move to the form, and put the cursor in the first field the visitor still
   * has to fill in. Scrolling them to a form they then have to re-answer is
   * the sort of thing that loses the enquiry.
   */
  const chooseService = (name: string) => {
    setService(name);
    const quote = document.getElementById("quote");
    quote?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      document.getElementById("hs-zip")?.focus({ preventScroll: true });
    }, 600);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    if (botField) {
      e.preventDefault(); // honeypot: only a bot fills this
      return;
    }
    handleSubmit(e);
  };

  const submitNews = (e: React.FormEvent<HTMLFormElement>) => {
    if (newsBot) {
      e.preventDefault();
      return;
    }
    handleNews(e);
  };

  const field =
    "w-full bg-white border border-slate-300 rounded-md px-3.5 py-2.5 text-[15px] text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition";

  return (
    <>
      <SEO
        title="Personal Services in Jacksonville | Lawn, Washing & Vehicle Care | Cruzian"
        description="Lawn care, pressure washing, car detailing and vehicle maintenance in Jacksonville and Orange Park. Tell us what you need and we'll match you with a vetted local provider."
        canonical="https://www.thecruzian.com/personal-services"
        keywords="lawn care Jacksonville, pressure washing Jacksonville, car detailing Orange Park, vehicle maintenance Jacksonville, home services Jacksonville FL"
      />

      {/* Header */}
      <header className="bg-[#0B1B3D] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            to="/"
            className="flex w-fit items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors"
          >
            ← Looking for business marketing instead?
          </Link>
          <p className="mt-6 flex w-fit items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-[.18em] text-amber-400">
            <MapPin className="w-3.5 h-3.5" />
            Jacksonville &amp; Orange Park
          </p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-black tracking-[-.035em] leading-[1.05] text-balance">
            The jobs around the house you keep meaning to book.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Lawn care, pressure washing, detailing and vehicle servicing. Tell us what you need
            once, and we line up a vetted local provider to do it — so you are not ringing round
            for quotes.
          </p>
          <a
            href="#quote"
            className="mt-7 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0B1B3D] font-bold text-sm px-6 py-3.5 rounded-md transition-colors"
          >
            Request a quote
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Services */}
      <section className="bg-white py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B1B3D] tracking-tight">
            What we can arrange
          </h2>
          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => chooseService(s.name)}
                  aria-label={`Request a quote for ${s.name}`}
                  className="text-left border border-slate-200 rounded-lg p-5 hover:border-amber-400 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-all flex flex-col"
                >
                  <span className="w-10 h-10 rounded-md bg-amber-100 border border-amber-200 grid place-items-center">
                    <Icon className="w-5 h-5 text-amber-700" />
                  </span>
                  <h3 className="mt-3.5 font-bold text-[#0B1B3D] text-[15px]">{s.name}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-amber-700">
                    Request a quote
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 border-y border-slate-200 py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B1B3D] tracking-tight">
            How it works
          </h2>
          <div className="mt-7 grid sm:grid-cols-3 gap-5">
            {HOW.map((h) => (
              <div key={h.n} className="bg-white border border-slate-200 rounded-lg p-5">
                <span className="font-mono font-black text-amber-700 text-sm">{h.n}</span>
                <h3 className="mt-2 font-bold text-[#0B1B3D]">{h.t}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{h.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 flex items-start gap-2 text-sm text-slate-600 max-w-2xl">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              Cruzian coordinates these services through vetted providers in our network.
            </span>
          </p>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="bg-white py-14 sm:py-16 scroll-mt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {state.succeeded ? (
            <div className="space-y-6 py-10">
              <div className="text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-black text-[#0B1B3D]">Got it — thank you.</h2>
              </div>

              {/*
                What happens next, with no clock on it. The old copy promised a
                quote "usually the same day", which is a promise the provider
                network has to keep, not us.
              */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 sm:p-6 max-w-md mx-auto">
                <p className="text-[11px] font-mono font-bold uppercase tracking-[.16em] text-amber-700">
                  What happens now
                </p>
                <ol className="mt-3.5 space-y-3 text-sm text-slate-700 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="font-mono font-black text-amber-700 shrink-0">1</span>
                    <span>A person reads your request. It does not sit in a queue.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono font-black text-amber-700 shrink-0">2</span>
                    <span>We match you with a vetted provider who covers your ZIP and does this work.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono font-black text-amber-700 shrink-0">3</span>
                    <span>
                      They price the job, and we come back to you by phone or email with the
                      quote. You decide whether to go ahead. Asking costs nothing.
                    </span>
                  </li>
                </ol>
              </div>

              <div className="text-center">
                <p className="text-sm text-slate-600">Would rather not wait?</p>
                <a
                  href="tel:+18886193580"
                  onClick={trackPhoneClick}
                  className="mt-1.5 inline-flex items-center gap-2 font-bold text-[#0B1B3D] underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-amber-700 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call +1 888-619-3580
                </a>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1B3D] tracking-tight">
                Get your free quote
              </h2>
              <p className="mt-2 text-slate-600 text-sm">
                Five answers, under a minute. No obligation, and your details go to nobody except
                the provider who quotes.
              </p>

              <form onSubmit={submit} className="mt-7 space-y-4">
                {/* Makes the notification email readable without opening it */}
                <input type="hidden" name="_subject" value={`Quote request — ${service}`} />
                <input type="hidden" name="source" value="Personal services quote request" />

                <div>
                  <label htmlFor="hs-service" className="block text-sm font-semibold text-[#0B1B3D] mb-1.5">
                    What do you need?
                  </label>
                  <select
                    id="hs-service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={field}
                  >
                    {SERVICES.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option>Something else</option>
                    <option>Not sure — need advice</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="hs-budget" className="block text-sm font-semibold text-[#0B1B3D] mb-1.5">
                    Rough budget
                  </label>
                  <select
                    id="hs-budget"
                    name="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className={field}
                  >
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1.5 text-[12px] text-slate-500">
                    A band is plenty. Pick &ldquo;Need a quote&rdquo; if you would rather not say.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hs-zip" className="block text-sm font-semibold text-[#0B1B3D] mb-1.5">
                      ZIP code
                    </label>
                    <input
                      id="hs-zip"
                      name="zip"
                      required
                      inputMode="numeric"
                      autoComplete="postal-code"
                      pattern="[0-9]{5}"
                      maxLength={5}
                      placeholder="32073"
                      className={field}
                    />
                    <ValidationError prefix="ZIP" field="zip" errors={state.errors} className={errorClass} />
                  </div>
                  <div>
                    <label htmlFor="hs-phone" className="block text-sm font-semibold text-[#0B1B3D] mb-1.5">
                      Phone
                    </label>
                    <input
                      id="hs-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="(904) 555-0123"
                      className={field}
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className={errorClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hs-name" className="block text-sm font-semibold text-[#0B1B3D] mb-1.5">
                      Your name
                    </label>
                    <input id="hs-name" name="ownerName" required autoComplete="name" className={field} />
                    <ValidationError prefix="Name" field="ownerName" errors={state.errors} className={errorClass} />
                  </div>
                  <div>
                    <label htmlFor="hs-email" className="block text-sm font-semibold text-[#0B1B3D] mb-1.5">
                      Email
                    </label>
                    <input id="hs-email" name="email" type="email" required autoComplete="email" className={field} />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className={errorClass} />
                  </div>
                </div>

                {/*
                  Unchecked by default and uncontrolled, so it cannot be opted in
                  by a re-render. Consent has to be an act, not a default.
                */}
                <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    name="marketingOptIn"
                    value="Yes"
                    className="mt-0.5 w-4 h-4 shrink-0 accent-amber-500"
                  />
                  <span className="text-[13px] text-slate-600 leading-relaxed">
                    Email me occasional tips and offers from Cruzian. Monthly at most, and you can
                    unsubscribe from any of them.
                  </span>
                </label>

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

                {/* Anything the server rejected that was not tied to a single field */}
                <ValidationError errors={state.errors} className={errorClass} />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-[#0B1B3D] font-black text-base py-4 rounded-md flex items-center justify-center gap-2 transition-colors"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Get My Free Quote <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* The direct-call option, given the same weight as the form */}
              <div className="mt-5 bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 flex flex-wrap items-center justify-between gap-3">
                <span className="text-sm text-slate-600">Would rather just talk to someone?</span>
                <a
                  href="tel:+18886193580"
                  onClick={trackPhoneClick}
                  className="inline-flex items-center gap-2 bg-white border border-slate-300 hover:border-amber-400 rounded-md px-4 py-2.5 text-sm font-bold text-[#0B1B3D] transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-600" /> Call +1 888-619-3580
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Mailing list */}
      <section className="bg-[#0B1B3D] text-white py-12 sm:py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Join the Cruzian Community
          </h2>
          <p className="mt-2.5 text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
            Seasonal reminders for the jobs that creep up on you, and the occasional offer worth
            knowing about. Monthly at most.
          </p>

          {news.succeeded ? (
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-300">
              <CheckCircle2 className="w-4 h-4" /> You are on the list. Thank you.
            </p>
          ) : (
            <form onSubmit={submitNews} className="mt-6 flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
              <input type="hidden" name="_subject" value="Newsletter signup" />
              <input type="hidden" name="source" value="Cruzian Community signup" />
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={newsBot}
                onChange={(e) => setNewsBot(e.target.value)}
                className="hidden"
              />
              <label htmlFor="news-email" className="sr-only">
                Email address
              </label>
              <input
                id="news-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="flex-1 bg-white/10 border border-white/25 rounded-md px-3.5 py-3 text-[15px] text-white placeholder:text-slate-400 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition"
              />
              <button
                type="submit"
                disabled={news.submitting}
                className="bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-[#0B1B3D] font-black text-sm px-6 py-3 rounded-md transition-colors whitespace-nowrap"
              >
                {news.submitting ? "Joining…" : "Join"}
              </button>
            </form>
          )}

          <p className="mt-4 text-[12px] text-slate-400">
            Unsubscribe any time — reply to any email and we take you straight off the list.
          </p>

          <ValidationError errors={news.errors} className="mt-2 block text-[12px] font-semibold text-red-300" />
        </div>
      </section>

      {/* Reach us directly */}
      <section className="bg-white py-8 border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
          <a href="tel:+18886193580" onClick={trackPhoneClick} className="inline-flex items-center gap-1.5 hover:text-amber-700">
            <Phone className="w-4 h-4" /> +1 888-619-3580
          </a>
          <a href="mailto:hello@thecruzian.com" onClick={trackEmailClick} className="inline-flex items-center gap-1.5 hover:text-amber-700">
            <Mail className="w-4 h-4" /> hello@thecruzian.com
          </a>
        </div>
      </section>
    </>
  );
};
