import React, { useState } from "react";
import { Stethoscope, Home, Trees, Utensils, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SolutionsProps {
  onSelectIndustry: (industry: string) => void;
}

export const IndustrySolutions: React.FC<SolutionsProps> = ({ onSelectIndustry }) => {
  const [activeTab, setActiveTab] = useState("medical");

  const industries = [
    {
      id: "medical",
      title: "Medical Clinics",
      icon: Stethoscope,
      heading: "High-Ticket Patient Consultations & Zero No-Shows",
      description:
        "Specialty medical and dental practices need high trust and reliable volume. We handle pre-consultation lead qualification and SMS appointment confirmations.",
      deliverables: [
        "Patient consultation booking sequences",
        "Automated deposit & SMS reminder flows",
        "Targeted local radius patient acquisition",
      ],
    },
    {
      id: "roofing",
      title: "Roofing & Construction",
      icon: Home,
      heading: "Commercial Contracts & Storm Quote Requests",
      description:
        "Contractors need rapid response. When roof replacement requests come in, our instant text-back locks them in before they reach out to another contractor.",
      deliverables: [
        "High-ticket estimate bookings",
        "Direct outreach to commercial property managers",
        "Instant call text-back when crews are on job sites",
      ],
    },
    {
      id: "landscaping",
      title: "Landscaping & Grounds",
      icon: Trees,
      heading: "Recurring HOA & Commercial Maintenance Retainers",
      description:
        "Build a recurring monthly revenue engine. We help landscaping companies win lucrative HOA and commercial property maintenance retainers.",
      deliverables: [
        "Commercial HOA decision maker outreach",
        "Neighborhood route-density campaigns",
        "Predictable monthly maintenance retainers",
      ],
    },
    {
      id: "restaurants",
      title: "Restaurants & Catering",
      icon: Utensils,
      heading: "Corporate Catering Accounts & VIP Dining Clubs",
      description:
        "Pack tables on slow nights and secure corporate catering orders. We perform direct B2B office outreach and build local VIP dining clubs.",
      deliverables: [
        "B2B corporate catering direct outreach",
        "VIP SMS loyalty club for repeat diners",
        "Hyper-local social dining campaigns",
      ],
    },
    {
      id: "startups",
      title: "Startups & Local SMBs",
      icon: Rocket,
      heading: "0-to-1 Customer Acquisition & Sales Scripts",
      description:
        "Build a predictable customer acquisition strategy from scratch with verified prospect sourcing and founder-led sales scripts.",
      deliverables: [
        "First 500-1,000 verified decision maker list",
        "Custom consultative sales scripting",
        "Initial 10 paying client acquisition playbook",
      ],
    },
  ];

  const current = industries.find((i) => i.id === activeTab) || industries[0];

  return (
    <section id="solutions" className="py-20 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
            Industry Focus
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B3D] tracking-tight">
            Tailored Growth Playbooks
          </h2>
          <p className="text-slate-600 text-base">
            Select your industry to view the exact customer acquisition blueprint.
          </p>
        </div>

        {/* Clean Nav Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {industries.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#0B1B3D] text-amber-400 shadow-md"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Playbook Content Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm grid lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1B3D]">
              {current.heading}
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium text-base">
              {current.description}
            </p>

            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0B1B3D]">
                Key Deliverables:
              </p>
              <div className="space-y-2">
                {current.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-800 text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button
                onClick={() => onSelectIndustry(current.title)}
                className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black px-7 py-5 rounded-xl shadow-md flex items-center gap-2"
              >
                <span>Build My {current.title} Plan</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white text-slate-900 border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
            <span className="text-xs font-mono font-bold text-amber-700 uppercase">Growth Workflow</span>
            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-[#0B1B3D]">1. Verified Sourcing:</span> Local decision maker lists.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-[#0B1B3D]">2. Human Outreach:</span> Consultative phone calls.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-[#0B1B3D]">3. Smart Recovery:</span> Sub-10s missed call SMS text-back.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};