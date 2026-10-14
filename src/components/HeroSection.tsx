import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GrowthAssessment } from "@/components/GrowthAssessment";

interface HeroProps {
  onOpenAudit: () => void;
  onExploreSolutions: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenAudit, onExploreSolutions }) => {

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

          {/* Right: the growth assessment */}
          <GrowthAssessment onOpenAudit={onOpenAudit} />
        </div>
      </div>
    </section>
  );
};
