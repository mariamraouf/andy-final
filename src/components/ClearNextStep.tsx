import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// The three things a visitor is usually trying to fix, in the order they
// normally hit them: nobody finds me, people find me but don't call, people
// call but don't trust me yet.
const TABS = [
  {
    id: "found",
    tab: "Get Found",
    heading: "Show up where they're already looking.",
    body: "Local SEO, a finished Google Business Profile and pages built so search engines can actually read them.",
    cta: "Explore SEO",
    to: "/services#seo",
  },
  {
    id: "inquiries",
    tab: "Get Inquiries",
    heading: "Make it easy to become your customer.",
    body: "Clear offers, useful pages and a simple way to contact you.",
    cta: "Explore Website Design",
    to: "/services#website-design",
  },
  {
    id: "trust",
    tab: "Build Trust",
    heading: "Look like the safe choice.",
    body: "A consistent brand, real proof of work and a presence that holds up when someone searches your name.",
    cta: "Explore Brand Authority",
    to: "/services#brand-authority",
  },
] as const;

export const ClearNextStep: React.FC = () => {
  const [active, setActive] = useState<string>("inquiries");
  const current = TABS.find((t) => t.id === active) ?? TABS[1];

  return (
    <section className="bg-[#F7F5EF] text-[#0B1B3D] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: the tabs */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-.035em] leading-[1.06]">
              A clear next step
              <br />
              for your business.
            </h2>

            <div
              className="mt-7 flex flex-wrap gap-1.5 border-b border-[#E3E0D7]"
              role="tablist"
              aria-label="Growth priorities"
            >
              {TABS.map((t) => {
                const selected = t.id === active;
                return (
                  <button
                    key={t.id}
                    role="tab"
                    id={`tab-${t.id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${t.id}`}
                    onClick={() => setActive(t.id)}
                    className={`px-5 sm:px-6 py-3 rounded-t-md text-[15px] font-semibold transition-colors ${
                      selected
                        ? "bg-[#0B1B3D] text-white"
                        : "text-slate-500 hover:text-[#0B1B3D]"
                    }`}
                  >
                    {t.tab}
                  </button>
                );
              })}
            </div>

            <div
              className="mt-7"
              role="tabpanel"
              id={`panel-${current.id}`}
              aria-labelledby={`tab-${current.id}`}
            >
              <h3 className="text-xl sm:text-2xl font-black tracking-[-.025em]">{current.heading}</h3>
              <p className="mt-2.5 text-slate-600 text-base sm:text-[17px] max-w-md leading-relaxed">
                {current.body}
              </p>
              <Link to={current.to}>
                <Button className="mt-6 bg-amber-500 hover:bg-amber-400 text-[#0B1B3D] font-bold px-6 py-5 rounded-md flex items-center gap-2 group">
                  <span>{current.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: before / after */}
          <div>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
              <div>
                <p className="text-[13px] font-bold text-slate-500 mb-2">Before</p>
                <div className="rounded-md overflow-hidden bg-white border border-slate-200">
                  <div className="h-5 bg-slate-100 border-b border-slate-200 flex items-center gap-1 px-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  </div>
                  <svg viewBox="0 0 300 200" className="block w-full" role="img" aria-label="A plain, generic website layout">
                    <rect width="300" height="200" fill="#fff" />
                    <text x="18" y="30" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#8A93A6">Your Business</text>
                    <rect x="18" y="44" width="120" height="6" rx="3" fill="#E4E7EC" />
                    <rect x="18" y="58" width="150" height="6" rx="3" fill="#E4E7EC" />
                    <rect x="18" y="72" width="100" height="6" rx="3" fill="#E4E7EC" />
                    <rect x="180" y="38" width="102" height="62" rx="4" fill="#D8DCE3" />
                    <rect x="18" y="112" width="180" height="6" rx="3" fill="#EAEDF1" />
                    <rect x="18" y="126" width="140" height="6" rx="3" fill="#EAEDF1" />
                    <rect x="18" y="146" width="78" height="40" rx="4" fill="#E4E7EC" />
                    <rect x="104" y="146" width="78" height="40" rx="4" fill="#E4E7EC" />
                    <rect x="190" y="146" width="92" height="40" rx="4" fill="#E4E7EC" />
                  </svg>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-500 text-[#0B1B3D] grid place-items-center shrink-0 shadow-md"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />
              </div>

              <div>
                <p className="text-[13px] font-bold text-[#0B1B3D] mb-2">After</p>
                <div className="rounded-md overflow-hidden bg-white border border-slate-200 shadow-xl shadow-[#0B1B3D]/10">
                  <div className="h-5 bg-[#0B1B3D] flex items-center gap-1 px-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  </div>
                  <svg viewBox="0 0 300 200" className="block w-full" role="img" aria-label="A branded, conversion-focused website layout">
                    <defs>
                      <linearGradient id="cnsMock" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#16274F" />
                        <stop offset="70%" stopColor="#8A6A45" />
                        <stop offset="100%" stopColor="#E0A85F" />
                      </linearGradient>
                    </defs>
                    <rect width="300" height="200" fill="#fff" />
                    <rect width="300" height="24" fill="#0B1B3D" />
                    <text x="14" y="16" fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="700" fill="#fff" letterSpacing="1">CRUZIAN</text>
                    <rect x="246" y="7" width="40" height="11" rx="2" fill="#E9BF62" />
                    <rect y="24" width="300" height="86" fill="url(#cnsMock)" />
                    <text x="16" y="62" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="800" fill="#fff">Services that</text>
                    <text x="16" y="78" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="800" fill="#fff">move you forward.</text>
                    <rect x="16" y="88" width="62" height="13" rx="2.5" fill="#E9BF62" />
                    <g fill="#EEF1F6">
                      <rect x="20" y="126" width="56" height="48" rx="5" />
                      <rect x="88" y="126" width="56" height="48" rx="5" />
                      <rect x="156" y="126" width="56" height="48" rx="5" />
                      <rect x="224" y="126" width="56" height="48" rx="5" />
                    </g>
                    <g fill="#E9BF62">
                      <circle cx="48" cy="140" r="5" />
                      <circle cx="116" cy="140" r="5" />
                      <circle cx="184" cy="140" r="5" />
                      <circle cx="252" cy="140" r="5" />
                    </g>
                    <g fill="#CBD2DE">
                      <rect x="30" y="152" width="36" height="4" rx="2" />
                      <rect x="98" y="152" width="36" height="4" rx="2" />
                      <rect x="166" y="152" width="36" height="4" rx="2" />
                      <rect x="234" y="152" width="36" height="4" rx="2" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-slate-400 mt-2.5">Sample design</p>
          </div>
        </div>
      </div>
    </section>
  );
};
