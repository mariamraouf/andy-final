import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, ShieldCheck, Zap, BarChart3, Users, PhoneCall } from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
  onExploreSolutions: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenAudit, onExploreSolutions }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white text-slate-900 pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Status Capsule */}
            <div className="inline-flex items-center gap-2 bg-amber-100/70 border border-amber-300/80 text-[#0B1B3D] rounded-full px-3.5 py-1.5 text-xs font-semibold shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-bold">Jacksonville, FL B2B Growth Agency</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#0B1B3D] tracking-tight leading-[1.1]">
                We Help Overlooked Businesses Become{" "}
                <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent underline decoration-amber-300/50 underline-offset-8">
                  Impossible to Ignore.
                </span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Predictable lead pipelines, modern conversion websites, and high-impact digital marketing designed to put paying customers on your calendar.
              </p>
            </div>

            {/* Bullet Proof Points */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              {[
                "Targeted B2B Lead Pipelines",
                "Conversion-Focused Web Design",
                "Google & Meta Paid Advertising",
                "Dedicated Strategy & Direct Support",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-slate-800 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                onClick={onOpenAudit}
                className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black text-sm px-8 py-6 rounded-2xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-3 group"
              >
                <span>BOOK A FREE STRATEGY CALL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0B1B3D]" />
              </Button>

              <Button
                onClick={onExploreSolutions}
                variant="outline"
                className="border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-6 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-xs"
              >
                <Zap className="w-4 h-4 text-amber-600" />
                <span>View Our 9 Services</span>
              </Button>
            </div>

            {/* Micro proof bar */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-700 font-semibold">Transparent Monthly ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-slate-700 font-semibold">Direct Call: +1 888-619-3580</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Business Growth Showcase */}
          <div className="lg:col-span-6">
            <div className="relative">
              
              {/* Main Visual Image Card */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative bg-white">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80"
                  alt="Business growth strategy consultation"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 bg-white space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-amber-700 uppercase">Growth Engine</span>
                      <h4 className="text-lg font-bold text-[#0B1B3D]">Full-Spectrum Digital Acquisition</h4>
                    </div>
                    <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                      Active Campaign
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                      <p className="text-[11px] text-slate-500 font-medium">Qualified Leads</p>
                      <p className="text-[13px] font-bold text-[#0B1B3D] mt-0.5 leading-tight">Tracked to source</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                      <p className="text-[11px] text-slate-500 font-medium">Cost per Client</p>
                      <p className="text-[13px] font-bold text-emerald-700 mt-0.5 leading-tight">Not cost per click</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                      <p className="text-[11px] text-slate-500 font-medium">Follow-up</p>
                      <p className="text-[13px] font-bold text-amber-700 mt-0.5 leading-tight">Automated, not manual</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0B1B3D]">Missed-Call Recovery</p>
                  <p className="text-[10px] text-slate-500">Instant text-back, day one</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-5 -right-4 bg-[#0B1B3D] text-white p-4 rounded-2xl shadow-xl border border-slate-800 flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-[#0B1B3D] flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-300">HubSpot & Quo Connected</p>
                  <p className="text-[10px] text-slate-300">Live Sales Automation</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};