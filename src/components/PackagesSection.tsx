import React from "react";
import { Check, ArrowRight, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PackagesProps {
  onOpenAudit: (packageName?: string) => void;
}

export const packagesData = [
  {
    name: "Business Boost",
    badge: "One-Time Jumpstart",
    price: "$399",
    billing: "One-Time",
    description: "Perfect for businesses that need a quick jumpstart.",
    features: [
      "Marketing and online presence audit",
      "Google Business Profile optimization",
      "Basic SEO recommendations",
      "Social media profile optimization",
      "Competitor analysis",
      "30-day action plan",
      "60-minute strategy session",
    ],
    popular: false,
    cta: "Get Business Boost",
  },
  {
    name: "Visibility",
    badge: "Consistent Inbound",
    price: "$750",
    billing: "per month",
    description: "For businesses that need consistent visibility and lead generation.",
    features: [
      "Local SEO management",
      "Google Business Profile management",
      "Website updates (up to 2 hours/month)",
      "Social media management (8 posts/month)",
      "Monthly performance report",
      "Email support",
      "Monthly strategy call",
    ],
    popular: false,
    cta: "Choose Visibility",
  },
  {
    name: "Growth",
    badge: "Ready to Scale",
    price: "$1,500",
    billing: "per month",
    description: "For businesses ready to aggressively grow.",
    features: [
      "Everything in Visibility, plus:",
      "Advanced SEO",
      "Google Ads management (ad spend not included)",
      "Landing page optimization",
      "Social media management (16 posts/month)",
      "Lead generation campaigns",
      "Basic email marketing",
      "Conversion tracking and analytics",
      "Bi-weekly strategy calls",
      "Priority support",
    ],
    popular: true,
    cta: "Choose Growth",
  },
  {
    name: "Dominance",
    badge: "Full Partnership",
    price: "$3,000+",
    billing: "per month (starting at)",
    description: "A fully managed growth partnership.",
    features: [
      "Everything in Growth, plus:",
      "Complete marketing management",
      "Multi-platform advertising",
      "Advanced lead generation systems",
      "CRM optimization and automation",
      "Reputation management",
      "Sales funnel creation and optimization",
      "Ongoing website optimization",
      "Custom reporting dashboard",
      "Weekly strategy meetings",
      "Priority implementation",
      "Dedicated account manager",
    ],
    popular: false,
    cta: "Partner for Dominance",
  },
];

export const addOnsData = [
  { name: "Website Design / Redesign", price: "Starting at $1,500", desc: "Custom, conversion-focused responsive website." },
  { name: "Branding Package", price: "Starting at $1,000", desc: "Full visual identity, typography, guidelines, and assets." },
  { name: "Logo Design", price: "Starting at $500", desc: "Professional high-resolution logo with vectors and variations." },
  { name: "CRM Setup and Automation", price: "Starting at $750", desc: "HubSpot or GoHighLevel pipeline configuration with SMS and email flows." },
  { name: "Custom Landing Pages", price: "Starting at $500 / page", desc: "High-converting standalone landing pages for campaigns." },
  { name: "Professional Photography and Video", price: "Custom Quote", desc: "On-site local photo and video production if needed." },
];

export const PackagesSection: React.FC<PackagesProps> = ({ onOpenAudit }) => {
  return (
    <section id="packages" className="py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-bold text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300 font-mono">
            <Zap className="w-3.5 h-3.5 text-amber-700" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1B3D] tracking-tight">
            Simple, Scalable Packages
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Straightforward pricing that fits your stage of growth. Built to deliver positive ROI from day one.
          </p>
        </div>

        {/* 4 Core Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {packagesData.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all relative ${
                pkg.popular
                  ? "bg-[#0B1B3D] text-white shadow-2xl lg:scale-105 border-2 border-amber-400 z-10 mt-5 lg:mt-0 pt-9"
                  : "bg-slate-50 text-slate-900 border border-slate-200 hover:shadow-lg hover:bg-white"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-max max-w-[92%] bg-gradient-to-r from-amber-500 to-amber-400 text-[#0B1B3D] font-mono text-[12px] sm:text-[13px] font-black uppercase tracking-wider px-5 py-2 rounded-full shadow-lg border-2 border-white flex items-center gap-2">
                  <Star className="w-4 h-4 fill-[#0B1B3D] shrink-0" />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                    pkg.popular ? "text-amber-400" : "text-amber-700"
                  }`}>
                    {pkg.badge}
                  </span>
                  <h3 className="text-2xl font-black">{pkg.name}</h3>
                  <p className={`text-xs leading-relaxed font-normal ${
                    pkg.popular ? "text-slate-300" : "text-slate-600"
                  }`}>
                    {pkg.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/40">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black font-mono tracking-tight">
                      {pkg.price}
                    </span>
                    <span className={`text-xs font-semibold ${
                      pkg.popular ? "text-slate-300" : "text-slate-500"
                    }`}>
                      {pkg.billing}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-3">
                  <p className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                    pkg.popular ? "text-amber-400" : "text-slate-500"
                  }`}>
                    Included Deliverables:
                  </p>
                  <div className="space-y-2">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs leading-tight">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                          pkg.popular ? "text-amber-400" : "text-emerald-600"
                        }`} />
                        <span className={pkg.popular ? "text-slate-200" : "text-slate-700"}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  onClick={() => onOpenAudit(pkg.name)}
                  className={`w-full font-bold text-xs py-5 rounded-xl transition-all flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? "bg-amber-500 hover:bg-amber-600 text-[#0B1B3D]"
                      : "bg-[#0B1B3D] hover:bg-slate-800 text-white"
                  }`}
                >
                  <span>{pkg.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Add-On Services */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B1B3D]">
              Optional Add-On Services
            </h3>
            <p className="text-slate-600 text-sm">
              Customizable project deliverables to pair with any core monthly package.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {addOnsData.map((addon, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-[#0B1B3D] text-sm">{addon.name}</h4>
                </div>
                <p className="text-amber-700 font-mono text-xs font-bold">{addon.price}</p>
                <p className="text-slate-600 text-xs leading-relaxed">{addon.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Button
              onClick={() => onOpenAudit("Custom Add-On Package")}
              className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-bold px-8 py-5 rounded-xl text-sm"
            >
              Discuss Custom Add-Ons on Strategy Call
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};