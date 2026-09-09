import React from "react";
import { ArrowRight, TrendingUp, CheckCircle2, Star, Quote, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

interface SuccessStoriesProps {
  onOpenAudit: () => void;
}

export const SuccessStories: React.FC<SuccessStoriesProps> = ({ onOpenAudit }) => {
  const stories = [
    {
      client: "Jacksonville Dental Specialist",
      category: "Specialty Healthcare",
      metrics: "+142% Inbound Consultations",
      timeline: "90 Days",
      summary:
        "Went from relying on sporadic referrals to a predictable pipeline of high-ticket cosmetic and implant cases through local SEO, automated SMS reminders, and Google Ads.",
      outcomes: [
        "28 new booked patient consults per month",
        "No-show rate dropped from 31% to under 6%",
        "$68,000+ added monthly procedure revenue",
      ],
    },
    {
      client: "First Coast Commercial Roofing",
      category: "Contractor & Construction",
      metrics: "$320K Added Pipeline",
      timeline: "60 Days",
      summary:
        "Deployed Apollo decision-maker sourcing and instant missed-call text-backs for property managers and commercial HOAs in the Greater Jacksonville radius.",
      outcomes: [
        "14 commercial roof inspection proposals delivered",
        "Average deal size of $28,500 closed",
        "Sub-8 second response time captured emergency calls",
      ],
    },
    {
      client: "Riverside Hospitality & Catering",
      category: "Restaurant & Food Service",
      metrics: "3.8x Corporate Accounts",
      timeline: "45 Days",
      summary:
        "Executed direct B2B corporate catering outreach to nearby office parks and launched a VIP SMS dining club for slow Tuesday/Wednesday nights.",
      outcomes: [
        "12 recurring corporate luncheon accounts booked",
        "450+ opt-in VIP diners for mid-week promotions",
        "Over $18,000 in catering contracts secured",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Client Results & Case Studies | Cruzian"
        description="Real outcomes from Cruzian growth systems — recovered missed calls, booked sales calls, and pipelines built for local B2B businesses."
        canonical="https://www.thecruzian.com/success-stories"
      />
      <div className="bg-white py-20 text-slate-900 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-bold text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300 font-mono">
            <TrendingUp className="w-3.5 h-3.5 text-amber-700" />
            <span>Proven Client Results</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#0B1B3D] tracking-tight">
            Success Stories
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Real outcomes from local businesses that partnered with Cruzian to capture market share and scale revenue.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg hover:bg-white transition-all"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">
                    {story.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono font-semibold">{story.timeline}</span>
                </div>

                <h3 className="text-xl font-bold text-[#0B1B3D]">{story.client}</h3>
                
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block font-mono">Primary Outcome</span>
                  <span className="text-xl font-black text-emerald-700 font-mono">{story.metrics}</span>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {story.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200">
                  {story.outcomes.map((item, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={onOpenAudit}
                className="w-full bg-[#0B1B3D] hover:bg-slate-800 text-white font-bold text-xs py-5 rounded-xl flex items-center justify-center gap-2"
              >
                <span>Get Similar Results</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-[#0B1B3D] text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-black">
            Ready to Become the Obvious Choice in Your Market?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Book a free 45-minute strategy call with our team. We'll identify your highest-impact opportunities and draft a custom roadmap.
          </p>
          <Button
            onClick={onOpenAudit}
            className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black px-8 py-6 rounded-xl text-base shadow-lg"
          >
            Book a Free Strategy Call
          </Button>
        </div>

      </div>
    </div>
    </>
  );
};