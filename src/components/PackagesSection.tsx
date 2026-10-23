import React from "react";
import { Check, ArrowRight, Zap, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { NoCommitment } from "@/components/NoCommitment";

// GoDaddy Payments links. The three monthly tiers charge the one-time setup fee
// and the first month together, which is why the amounts differ from the
// monthly price shown on the card.
const PAY_BASE = "https://6485926f-23fe-4f60-9256-f96a24d10999.paylinks.godaddy.com";

interface PackagesProps {
  onOpenAudit: (packageName?: string) => void;
}

export const packagesData = [
  {
    name: "Business Boost",
    guarantee: false,
    payNow: "$399",
    paySlug: "business-boost",
    badge: "One-Time Jumpstart",
    price: "$399",
    billing: "One-Time",
    setup: null,
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
    guarantee: true,
    payNow: "$1,250",
    paySlug: "visibility-start",
    badge: "Consistent Inbound",
    price: "$750",
    billing: "per month",
    setup: "$500",
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
    guarantee: true,
    payNow: "$2,500",
    paySlug: "growth-start",
    badge: "Ready to Scale",
    price: "$1,500",
    billing: "per month",
    setup: "$1,000",
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
    guarantee: true,
    payNow: "$4,500",
    paySlug: "dominance-start",
    badge: "Full Partnership",
    price: "$3,000+",
    billing: "per month (starting at)",
    setup: "$1,500",
    description: "A fully managed growth partnership.",
    features: [
      "Everything in Growth, plus:",
      "Complete marketing management",
      "Multi-platform advertising management (ad spend not included)",
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
    cta: "Start Dominance",
  },
];

export const addOnsData = [
  { name: "Website Design / Redesign", price: "Starting at $1,500", desc: "Custom, conversion-focused responsive website." },
  { name: "Branding Package", price: "Starting at $1,000", desc: "Full visual identity, typography, guidelines, and assets." },
  { name: "Logo Design", price: "Starting at $500", desc: "Professional high-resolution logo with vectors and variations." },
  { name: "CRM Setup and Automation", price: "Starting at $750", desc: "Sales pipeline configuration in your CRM, with automated SMS and email follow-up." },
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
            Straightforward pricing that fits your stage of growth. Every monthly package comes with
            seven days to change your mind.
          </p>
          <NoCommitment className="justify-center pt-1" />
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
                  <p className={`mt-1.5 text-[11px] font-mono font-bold uppercase tracking-wider ${
                    pkg.popular ? "text-amber-400" : "text-amber-700"
                  }`}>
                    {pkg.setup ? `+ ${pkg.setup} one-time setup` : "No setup fee"}
                  </p>
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

              <div className="pt-6 space-y-2.5">
                {/* Straight to checkout. The amount is on the button because the
                    monthly tiers charge setup + first month together, and nobody
                    should meet that number for the first time on a payment page. */}
                <a
                  href={`${PAY_BASE}/${pkg.paySlug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full font-bold text-xs py-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? "bg-amber-500 hover:bg-amber-600 text-[#0B1B3D]"
                      : "bg-[#0B1B3D] hover:bg-slate-800 text-white"
                  }`}
                >
                  <span>{pkg.cta} &mdash; {pkg.payNow}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => onOpenAudit(pkg.name)}
                  className={`block w-full text-center text-[11px] font-semibold underline underline-offset-4 transition-colors ${
                    pkg.popular
                      ? "text-slate-300 hover:text-amber-400"
                      : "text-slate-500 hover:text-amber-700"
                  }`}
                >
                  Not sure yet? Book a free call first
                </button>

                {pkg.guarantee && (
                  <p
                    className={`flex items-start justify-center gap-1.5 text-center text-[11px] leading-snug pt-1 ${
                      pkg.popular ? "text-amber-400" : "text-emerald-700"
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0 mt-px" />
                    <span>7 days to change your mind &mdash; full refund</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* What the price covers, and what it doesn't */}
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-2">
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-700">
              One-time setup fee
            </p>
            <h4 className="text-base font-black text-[#0B1B3D]">Charged once, with your first month</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              The setup fee covers onboarding, account and platform access, tracking and reporting
              setup, and the first build of your campaigns. It is billed one time at the start of the
              engagement and never again. Business Boost is a one-time project and has no setup fee.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-2">
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-700">
              Advertising budget
            </p>
            <h4 className="text-base font-black text-[#0B1B3D]">Separate, and entirely yours</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Where a package includes ad management, your advertising budget is not part of the fee.
              You set the amount, it is paid directly to Google or Meta, and every dollar of it goes to
              the platforms. Cruzian takes no percentage of ad spend.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-2">
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-700">
              How billing works
            </p>
            <h4 className="text-base font-black text-[#0B1B3D]">Setup plus first month, then monthly</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              The setup fee and your first month are collected together before work begins. Monthly
              billing then recurs on the same date, with your authorization, until you cancel. If a
              monthly package is not right for you, cancel within 7 days of that first payment and we
              refund it in full &mdash; setup fee included.
            </p>
            <Link
              to="/billing"
              className="inline-block text-xs font-bold text-[#0B1B3D] underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-amber-700 transition-colors"
            >
              Billing, cancellation &amp; refund terms
            </Link>
          </div>
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
              className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-bold px-6 sm:px-8 py-5 rounded-xl text-sm max-w-full whitespace-normal h-auto"
            >
              Discuss Custom Add-Ons on Strategy Call
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};