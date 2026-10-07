import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Search, LayoutTemplate, ChevronRight } from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
  onExploreSolutions: () => void;
}

// The three starting points a visitor can pick from. Each one answers the
// same question — "what would move your business forward?" — and routes them
// to the part of the offer that matches, rather than dropping everyone into
// the same generic pitch.
const GOALS = [
  {
    id: "customers",
    icon: Users,
    label: "More customers",
    answer:
      "Lead generation and paid acquisition, set up so every inquiry is traceable to the ad, page or post that produced it.",
  },
  {
    id: "visibility",
    icon: Search,
    label: "Better Google visibility",
    answer:
      "Local SEO, Google Business Profile and the technical work that gets your pages indexed, ranked and clicked.",
  },
  {
    id: "website",
    icon: LayoutTemplate,
    label: "A website that converts",
    answer:
      "A site designed around one conversion goal per page — fast on a phone and obvious to contact from.",
  },
] as const;

export const HeroSection: React.FC<HeroProps> = ({ onOpenAudit, onExploreSolutions }) => {
  const [activeGoal, setActiveGoal] = useState<string>("customers");
  const current = GOALS.find((g) => g.id === activeGoal) ?? GOALS[0];

  return (
    <section className="relative isolate overflow-hidden bg-[#0B1B3D] text-white">
      {/* Photograph: St. Croix coastline at golden hour, from the brand's own
          banner artwork. Decorative, so it carries an empty alt. */}
      <img
        src="/hero-st-croix.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover [object-position:58%_38%] saturate-[.9] brightness-[.92] contrast-[1.04]"
      />
      {/* Navy wash: heavy on the left so the headline stays legible, clearing
          toward the right so the sunset still reads. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,20,46,.93)_0%,rgba(8,20,46,.78)_26%,rgba(8,20,46,.36)_50%,rgba(8,20,46,.10)_74%,rgba(8,20,46,.04)_100%),linear-gradient(180deg,rgba(8,20,46,.45)_0%,rgba(8,20,46,0)_30%,rgba(8,20,46,.28)_100%)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-10 lg:gap-14 items-center py-14 sm:py-20 lg:py-24">
          {/* Left: the thesis */}
          <div>
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[.24em] text-slate-200">
              For businesses ready to be found
            </p>

            <h1 className="mt-5 mb-5 font-black tracking-[-.04em] leading-[.95] text-[clamp(2.75rem,8.4vw,5.75rem)]">
              Impossible
              <span className="block text-amber-400">to ignore.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-100 font-medium max-w-xl leading-relaxed">
              You built a business worth finding. We help the right customers find it.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button
                onClick={onOpenAudit}
                className="bg-amber-500 hover:bg-amber-400 text-[#0B1B3D] font-bold text-sm sm:text-base px-7 py-6 rounded-md shadow-lg shadow-amber-500/20 flex items-center gap-2 group"
              >
                <span>Explore My Growth Options</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <button
                type="button"
                onClick={onExploreSolutions}
                className="font-bold text-sm sm:text-base text-white border-b-2 border-amber-400 pb-1 hover:text-amber-300 transition-colors"
              >
                See Our Services
              </button>
            </div>
          </div>

          {/* Right: the goal picker */}
          <aside className="bg-white text-[#0B1B3D] rounded-lg shadow-2xl shadow-[#040c1e]/40 p-6 sm:p-7">
            <h2 className="text-xl sm:text-2xl font-black tracking-[-.025em] leading-tight">
              What would move your business forward?
            </h2>
            <p className="mt-2 text-sm text-slate-500">Start with your biggest priority.</p>

            <div className="mt-5 flex flex-col gap-2.5" role="group" aria-label="Choose a goal">
              {GOALS.map((goal) => {
                const Icon = goal.icon;
                const selected = goal.id === activeGoal;
                return (
                  <button
                    key={goal.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActiveGoal(goal.id)}
                    className={`w-full grid grid-cols-[auto_1fr_auto] items-center gap-3.5 text-left rounded-md px-4 py-3.5 transition-colors ${
                      selected
                        ? "border-2 border-amber-500 bg-white"
                        : "border border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <Icon className="w-5 h-5 text-[#0B1B3D]" />
                    <span className="font-semibold text-[15px] tracking-[-.01em]">{goal.label}</span>
                    <ChevronRight
                      className={`w-4 h-4 ${selected ? "text-amber-600" : "text-slate-400"}`}
                    />
                  </button>
                );
              })}
            </div>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed min-h-[3.5rem]" aria-live="polite">
              {current.answer}
            </p>

            <p className="mt-4 pt-3.5 border-t border-slate-200 text-center text-xs text-slate-400">
              Choose a goal. See where to start.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};
