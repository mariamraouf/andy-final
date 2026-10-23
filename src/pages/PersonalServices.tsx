import React, { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import {
  Leaf, Droplets, Car, Wrench, Home as HomeIcon,
  MapPin, Phone, Mail, CheckCircle2, Loader2, ArrowRight, ShieldCheck,
} from "lucide-react";
import { FORM_ID } from "@/utils/forms";
import { trackLeadGeneration } from "@/utils/analytics";

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

const HOW = [
  { n: "1", t: "Tell us what you need", d: "The form below takes under a minute. No account, no obligation." },
  { n: "2", t: "We match a local provider", d: "Someone vetted, in your area, who actually does this work." },
  { n: "3", t: "You get a quote", d: "Usually the same day. You decide whether to go ahead." },
];

export const PersonalServices: React.FC = () => {
  const [state, handleSubmit] = useForm(FORM_ID);
  const [service, setService] = useState("Not sure — need advice");
  const [botField, setBotField] = useState("");
  const counted = useRef(false);

  // Fire the conversion once and only once, however often this re-renders.
  useEffect(() => {
    if (state.succeeded && !counted.current) {
      counted.current = true;
      trackLeadGeneration("home_services_quote");
    }
  }, [state.succeeded]);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    if (botField) {
      e.preventDefault(); // honeypot: only a bot fills this
      return;
    }
    handleSubmit(e);
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
                <div
                  key={s.name}
                  className="border border-slate-200 rounded-lg p-5 hover:border-amber-400 transition-colors"
                >
                  <span className="w-10 h-10 rounded-md bg-amber-100 border border-amber-200 grid place-items-center">
                    <Icon className="w-5 h-5 text-amber-700" />
                  </span>
                  <h3 className="mt-3.5 font-bold text-[#0B1B3D] text-[15px]">{s.name}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
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
              Cruzian coordinates these services through vetted local providers rather than
              carrying out the work itself. You will always know who is coming and what it costs
              before anything is booked.
            </span>
          </p>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="bg-white py-14 sm:py-16 scroll-mt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {state.succeeded ? (
            <div className="text-center space-y-5 py-10">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-[#0B1B3D]">Got it — thank you.</h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
                We have your request and will come back to you with a quote, usually the same day.
                If it is urgent, call{" "}
                <a href="tel:+18886193580" className="font-semibold text-amber-700 underline underline-offset-4">
                  +1 888-619-3580
                </a>
                .
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1B3D] tracking-tight">
                Tell us what you need
              </h2>
              <p className="mt-2 text-slate-600 text-sm">
                Under a minute. No obligation, and we never pass your details to anyone except the
                provider who quotes.
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

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hs-name" className="block text-sm font-semibold text-[#0B1B3D] mb-1.5">
                      Your name
                    </label>
                    <input id="hs-name" name="ownerName" required autoComplete="name" className={field} />
                    <ValidationError prefix="Name" field="ownerName" errors={state.errors} className={errorClass} />
                  </div>
                  <div>
                    <label htmlFor="hs-area" className="block text-sm font-semibold text-[#0B1B3D] mb-1.5">
                      Neighborhood or ZIP
                    </label>
                    <input id="hs-area" name="area" required placeholder="e.g. Orange Park, 32073" className={field} />
                    <ValidationError prefix="Area" field="area" errors={state.errors} className={errorClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hs-email" className="block text-sm font-semibold text-[#0B1B3D] mb-1.5">
                      Email
                    </label>
                    <input id="hs-email" name="email" type="email" required autoComplete="email" className={field} />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className={errorClass} />
                  </div>
                  <div>
                    <label htmlFor="hs-phone" className="block text-sm font-semibold text-[#0B1B3D] mb-1.5">
                      Phone
                    </label>
                    <input id="hs-phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" className={field} />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className={errorClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="hs-details" className="block text-sm font-semibold text-[#0B1B3D] mb-1.5">
                    Anything we should know?
                  </label>
                  <textarea id="hs-details" name="message" rows={4} placeholder="Size of the yard, how often, when suits you…" className={field} />
                  <ValidationError prefix="Details" field="message" errors={state.errors} className={errorClass} />
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

                {/* Anything the server rejected that wasn't tied to a single field */}
                <ValidationError errors={state.errors} className={errorClass} />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-[#0B1B3D] font-bold text-sm py-3.5 rounded-md flex items-center justify-center gap-2 transition-colors"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Request my quote <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            <a href="tel:+18886193580" className="inline-flex items-center gap-1.5 hover:text-amber-700">
              <Phone className="w-4 h-4" /> +1 888-619-3580
            </a>
            <a href="mailto:hello@thecruzian.com" className="inline-flex items-center gap-1.5 hover:text-amber-700">
              <Mail className="w-4 h-4" /> hello@thecruzian.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
