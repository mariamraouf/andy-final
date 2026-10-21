import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Home, MapPin, Globe } from "lucide-react";

/**
 * The front door.
 *
 * Cruzian sells two unrelated things to two unrelated buyers: marketing
 * retainers to businesses anywhere in the country, and home and vehicle care
 * coordinated around Jacksonville. Without a split at the top, a marketing
 * director scrolls past pressure washing and a homeowner scrolls past $3,000
 * retainers, and neither believes the page is for them.
 *
 * Both doors are given equal weight and say plainly who they are for, where
 * they operate, and what happens next.
 */

const SIDES = [
  {
    id: "business",
    icon: Briefcase,
    eyebrow: "For your business",
    title: "Marketing that brings customers in",
    blurb:
      "Lead generation, websites, SEO, paid advertising and social media — run as one system, with every inquiry traceable to what produced it.",
    bullets: ["Lead generation", "Websites & SEO", "Paid advertising", "Social media marketing"],
    reach: { icon: Globe, text: "Serving businesses nationwide" },
    cta: "See how we grow businesses",
    to: "#business",
    isAnchor: true,
  },
  {
    id: "personal",
    icon: Home,
    eyebrow: "For your home & vehicle",
    title: "The jobs you keep meaning to book",
    blurb:
      "Lawn care, pressure washing, detailing and vehicle maintenance — one number to call, and we line up a vetted local provider to do the work.",
    bullets: ["Lawn care & landscaping", "Pressure washing", "Car washing & detailing", "Vehicle maintenance"],
    reach: { icon: MapPin, text: "Jacksonville & Orange Park" },
    cta: "Request a quote",
    to: "/home-services",
    isAnchor: false,
  },
] as const;

export const AudienceSplit: React.FC = () => (
  <section className="bg-[#0B1B3D] text-white border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-[11px] font-mono font-bold uppercase tracking-[.2em] text-amber-400">
          Two sides of Cruzian
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-[-.03em] text-balance">
          What brings you here today?
        </h1>
        <p className="mt-3 text-slate-300 text-base leading-relaxed">
          We do two very different things well. Pick the one you came for and we will keep the
          other out of your way.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
        {SIDES.map((side) => {
          const Icon = side.icon;
          const Reach = side.reach.icon;
          const inner = (
            <>
              <div className="flex items-start justify-between gap-4">
                <span className="w-11 h-11 rounded-md bg-amber-500/15 border border-amber-400/30 grid place-items-center shrink-0">
                  <Icon className="w-5 h-5 text-amber-400" />
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
                  <Reach className="w-3 h-3" />
                  {side.reach.text}
                </span>
              </div>

              <div className="mt-5">
                <p className="text-[11px] font-mono font-bold uppercase tracking-[.16em] text-amber-400">
                  {side.eyebrow}
                </p>
                <h2 className="mt-2 text-xl sm:text-2xl font-black tracking-[-.025em] leading-tight text-balance">
                  {side.title}
                </h2>
                <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">{side.blurb}</p>
              </div>

              <ul className="mt-5 grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                {side.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-[13px] text-slate-200">
                    <span aria-hidden="true" className="w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <span className="mt-6 inline-flex items-center gap-2 font-bold text-sm text-amber-400 group-hover:gap-3 transition-all">
                {side.cta}
                <ArrowRight className="w-4 h-4" />
              </span>
            </>
          );

          const cls =
            "group flex flex-col rounded-lg border border-white/15 bg-white/[0.03] hover:bg-white/[0.06] hover:border-amber-400/50 p-6 sm:p-7 transition-colors";

          return side.isAnchor ? (
            <a key={side.id} href={side.to} className={cls}>
              {inner}
            </a>
          ) : (
            <Link key={side.id} to={side.to} className={cls}>
              {inner}
            </Link>
          );
        })}
      </div>

      <p className="mt-7 text-center text-xs text-slate-400">
        Personal services are coordinated through vetted local providers. Business services are
        delivered by the Cruzian team.
      </p>
    </div>
  </section>
);
