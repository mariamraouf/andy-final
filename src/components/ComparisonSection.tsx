import React from "react";
import { ShieldCheck, TreePalm as PalmTree } from "lucide-react";

export const ComparisonSection: React.FC = () => {
  const comparisons = [
    {
      feature: "Client Care & Owner Mindset",
      cruzian: "We treat your business like our own. Driven by Cruzian pride & client loyalty.",
      typical: "Treats you like invoice #402. Hands you off to a junior intern.",
    },
    {
      feature: "Outreach Execution",
      cruzian: "Skilled human phone calls + verified Apollo prospect data + custom scripts.",
      typical: "Mass spammed automated emails that land in spam folders.",
    },
    {
      feature: "Missed-Call Recovery",
      cruzian: "Instant AI Text-Back in < 10s so busy contractors or clinics never lose a lead.",
      typical: "Call goes to voicemail. Lead calls a competitor immediately.",
    },
    {
      feature: "Communication & Tools",
      cruzian: "Direct WhatsApp & ClickUp access. Real-time updates & no gatekeeping.",
      typical: "Slow email ticketing system that takes 5 business days to reply.",
    },
    {
      feature: "Focus Metric",
      cruzian: "Actual converted appointments & revenue added to your bottom line.",
      typical: "Vanity impressions, clicks, and useless 'reach' charts.",
    },
  ];

  return (
    <section id="comparison" className="py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-bold text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300">
            <PalmTree className="w-3.5 h-3.5 text-amber-700" />
            <span>Unapologetic Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1B3D] tracking-tight">
            Why Business Owners Choose The Cruzian
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See why typical agencies fail small businesses and how our hands-on, competitive approach wins.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="mt-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
          <div className="grid grid-cols-12 bg-[#0B1B3D] text-white p-4 sm:p-6 border-b border-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div className="col-span-4 sm:col-span-4 text-slate-300 font-mono">Core Capability</div>
            <div className="col-span-4 sm:col-span-4 text-amber-400 font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>THE CRUZIAN ENGINE</span>
            </div>
            <div className="col-span-4 sm:col-span-4 text-slate-400 font-mono">Typical Marketing Agencies</div>
          </div>

          <div className="divide-y divide-slate-100">
            {comparisons.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 items-center text-xs sm:text-sm">
                
                {/* Feature Name */}
                <div className="col-span-4 sm:col-span-4 font-bold text-[#0B1B3D] pr-2">
                  {item.feature}
                </div>

                {/* The Cruzian Advantage */}
                <div className="col-span-4 sm:col-span-4 bg-amber-50 p-3 rounded-xl border border-amber-200 text-slate-900 font-semibold leading-relaxed flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-amber-500 text-[#0B1B3D] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    ✓
                  </div>
                  <span>{item.cruzian}</span>
                </div>

                {/* Typical Agency */}
                <div className="col-span-4 sm:col-span-4 p-3 text-slate-500 leading-relaxed flex items-start gap-2 pr-2">
                  <div className="w-4 h-4 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    ✕
                  </div>
                  <span>{item.typical}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};