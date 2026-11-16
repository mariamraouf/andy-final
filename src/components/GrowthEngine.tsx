import React from "react";
import { UserCheck, PhoneIncoming, MessageSquare, ArrowRight } from "lucide-react";

export const GrowthEngine: React.FC = () => {
  const pillars = [
    {
      num: "01",
      icon: UserCheck,
      title: "Direct Prospect Sourcing",
      desc: "We extract and pre-verify direct mobile contacts for high-value decision makers in your exact local radius. No dead phone lists.",
    },
    {
      num: "02",
      icon: PhoneIncoming,
      title: "Human Sales Outreach",
      desc: "Skilled callers open real consultative conversations using non-robotic scripts, qualifying buyers and placing appointments onto your calendar.",
    },
    {
      num: "03",
      icon: MessageSquare,
      title: "Instant Missed-Call Recovery",
      desc: "When job site noise or front desk duties cause a missed call, our system automatically texts the caller in seconds to lock in their request.",
    },
  ];

  return (
    <section id="engine" className="py-20 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B3D] tracking-tight">
            Cruzian Growth System
          </h2>
          <p className="text-slate-600 text-base">
            Three core pillars focused strictly on booked consultations and new revenue.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/60 rounded-3xl p-8 border border-slate-200/80 space-y-5 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1B3D] text-amber-400 font-mono font-black text-base flex items-center justify-center">
                    {item.num}
                  </div>
                  <Icon className="w-6 h-6 text-amber-600" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0B1B3D] group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};