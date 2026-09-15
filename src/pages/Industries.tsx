import React, { useState } from "react";
import { Stethoscope, Home, Trees, Utensils, Rocket, ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

interface IndustriesProps {
  onOpenAudit: (industry?: string) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onOpenAudit }) => {
  const [selected, setSelected] = useState("medical");

  const playbooks = [
    {
      id: "medical",
      title: "Medical & Specialty Clinics",
      icon: Stethoscope,
      subtitle: "Cosmetic, Dental, Orthopedic & Wellness Practices",
      overview:
        "High-ticket medical procedures require maximum patient trust and tight appointment protection. We target local residents looking for care, pre-screen inquiries, and deploy automated SMS reminders to eliminate no-shows.",
      points: [
        "Pre-consultation phone screening by trained callers",
        "HIPAA-conscious lead capture forms & SMS consent",
        "High-value cosmetic & elective procedure radius targeting",
        "Automated deposit confirmations & reminder sequences",
      ],
    },
    {
      id: "roofing",
      title: "Roofing & Construction",
      icon: Home,
      subtitle: "Storm Damage, Residential & Commercial Roof Replacement",
      overview:
        "Roofing contractors need speed. When property owners request quote estimates or storm reports, our instant missed-call text-back locks them in before they call a rival contractor.",
      points: [
        "High-ticket inspection bookings",
        "Direct outreach to commercial property managers & HOAs",
        "Instant text-back when crews are busy on a roof",
        "Meta Lead Form Ads built for emergency inspection requests",
      ],
    },
    {
      id: "landscaping",
      title: "Landscaping & Grounds Care",
      icon: Trees,
      subtitle: "Residential Neighborhood Clusters & Commercial HOA Contracts",
      overview:
        "Build a predictable recurring revenue engine. We help landscaping companies win lucrative commercial property maintenance retainers and high-end neighborhood clusters.",
      points: [
        "Commercial HOA & Property Decision Maker enrichment via Apollo",
        "Route-density lead generation (targeting neighbors of current jobs)",
        "Predictable monthly retainer service agreements",
        "Automated estimate request scheduling",
      ],
    },
    {
      id: "restaurants",
      title: "Restaurants & Dining",
      icon: Utensils,
      subtitle: "Corporate Catering Outreach & VIP SMS Clubs",
      overview:
        "Pack seats on slow weeknights and build lucrative corporate catering accounts. We execute direct B2B outreach to local offices and set up VIP dining SMS clubs.",
      points: [
        "Direct B2B catering outreach to local corporate offices",
        "VIP SMS Loyalty Club (turning 1-time diners into regulars)",
        "Hyper-local social media video ads featuring signature dishes",
        "Google Business Profile optimization for 'near me' dining searches",
      ],
    },
    {
      id: "startups",
      title: "Startups & Local SMBs",
      icon: Rocket,
      subtitle: "0-to-1 Customer Engine & Sales Scripting",
      overview:
        "Starting a business without leads is terrifying. We set up your entire sales machine—from lead sourcing in Apollo to sales scripts and GoHighLevel CRM setup.",
      points: [
        "First 500-1,000 verified decision maker target list",
        "Custom, non-robotic cold call scripts written by sales leads",
        "Full GoHighLevel & ClickUp operational setup",
        "Founder-led strategy to close your initial 10 paying clients",
      ],
    },
  ];

  const current = playbooks.find((p) => p.id === selected) || playbooks[0];

  return (
    <>
      <SEO
        title="Industries We Serve | B2B Lead Generation by Sector | Cruzian"
        description="Lead generation and growth systems built for contractors, specialty clinics, professional services and local B2B companies in Jacksonville and across the US."
        canonical="https://www.thecruzian.com/industries"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 text-white">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">
          Tailored Market Playbooks
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
          Industry Growth Playbooks
        </h1>
        <p className="text-slate-300 text-base sm:text-lg">
          We don't use generic one-size-fits-all tactics. Select your industry to explore your custom customer acquisition engine.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-3 overflow-x-auto pb-4 no-scrollbar">
        {playbooks.map((p) => {
          const Icon = p.icon;
          const isActive = selected === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                isActive
                  ? "bg-amber-500 text-slate-950 shadow-lg scale-105"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{p.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Blueprint View */}
      <div className="bg-slate-900/90 rounded-3xl border border-amber-500/30 p-8 sm:p-12 shadow-2xl grid lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block bg-amber-500/20 text-amber-300 text-xs font-mono font-bold px-3 py-1 rounded-full border border-amber-500/30">
            {current.subtitle}
          </div>

          <h2 className="text-3xl font-black text-white">{current.title} Strategy</h2>
          <p className="text-slate-300 text-base leading-relaxed">{current.overview}</p>

          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono font-bold uppercase text-amber-400">Key System Deliverables:</h4>
            <div className="grid gap-2.5">
              {current.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Button
              onClick={() => onOpenAudit(current.title)}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black px-8 py-5 rounded-xl shadow-lg flex items-center gap-2"
            >
              <span>Build My {current.title} Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase">Growth Engine Workflow</span>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="font-bold text-amber-300">1. Sourcing:</span> Apollo enrichment filters verified local decision makers.
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="font-bold text-orange-300">2. Outreach:</span> Human sales leads execute calls & LinkedIn outreach.
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="font-bold text-emerald-300">3. Recovery:</span> Smart AI text-back captures missed calls instantly.
            </div>
          </div>
        </div>

      </div>

    </div>
    </>
  );
};