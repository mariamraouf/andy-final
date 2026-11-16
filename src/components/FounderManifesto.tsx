import React from "react";
import { Quote, TreePalm as PalmTree, ShieldCheck, Zap } from "lucide-react";

export const FounderManifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-20 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Quote Block on White Canvas */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200 space-y-6">
            <Quote className="w-10 h-10 text-amber-500" />
            <blockquote className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed italic">
              "A lot of agencies out there are just taking your retainer money and blowing it while treating client businesses like numbers. We started <span className="text-amber-700 font-bold not-italic">Cruzian</span> because we genuinely care. We play to win, and we want to be the last one standing for our clients."
            </blockquote>

            <div className="pt-4 border-t border-slate-200 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B1B3D] text-amber-400 font-black text-xl flex items-center justify-center shadow-xs">
                C
              </div>
              <div>
                <h3 className="font-bold text-[#0B1B3D]">Cruzian Leadership</h3>
                <p className="text-xs text-amber-700 font-mono font-bold">Client Growth Strategists</p>
              </div>
            </div>
          </div>

          {/* St. Croix Narrative & Visuals */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-[#0B1B3D] rounded-full px-3.5 py-1 text-xs font-bold">
              <PalmTree className="w-4 h-4 text-amber-600" />
              <span>St. Croix Heritage & Unyielding Grit</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B3D] tracking-tight">
              Why We Call Ourselves "Cruzian"
            </h2>

            <p className="text-slate-600 leading-relaxed text-base font-normal">
              <strong>Cruzian</strong> refers to the proud native people of St. Croix in the U.S. Virgin Islands—a community built on strength, resilience, and standing tall through hardship.
            </p>

            <p className="text-slate-600 leading-relaxed text-base font-normal">
              When we brought this identity to marketing, the standard was set: no automated laziness, no junior handoffs, and clear, dedicated communication. Every client dollar is treated with the exact same respect as our own.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-[#0B1B3D]">100% Retainer Accountability</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center gap-3">
                <Zap className="w-6 h-6 text-amber-600 shrink-0" />
                <span className="text-xs font-bold text-[#0B1B3D]">Direct Line: +1 888-619-3580</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};