import React from "react";
import { UserCheck, Workflow, Megaphone, ShieldCheck, LayoutTemplate, Search, DollarSign, Share2, Compass, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicesSectionProps {
  onOpenAudit: () => void;
}

export const servicesData = [
  {
    num: "01",
    id: "lead-generation",
    title: "Lead Generation",
    icon: UserCheck,
    description: "We build predictable pipelines of qualified leads using targeted outreach, paid acquisition, and conversion-optimized funnels. No more hoping the phone rings.",
    outcomes: ["Consistent inbound inquiries", "Qualified prospect pipelines", "Lower cost per acquisition"],
  },
  {
    num: "02",
    id: "sales-systems",
    title: "Sales Systems",
    icon: Workflow,
    description: "We design and implement sales processes that convert leads into clients: CRM setup, follow-up sequences, proposal frameworks, and closing scripts.",
    outcomes: ["Higher close rates", "Shorter sales cycles", "Scalable revenue processes"],
  },
  {
    num: "03",
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    description: "Full-spectrum digital marketing: email campaigns, content strategy, social media, and paid ads, all working together toward a single growth objective.",
    outcomes: ["Multi-channel presence", "Compounding brand awareness", "Measurable ROI"],
  },
  {
    num: "04",
    id: "brand-authority",
    title: "Brand Authority",
    icon: ShieldCheck,
    description: "We position your business as the obvious choice in your market through strategic messaging, visual identity, and thought leadership that builds lasting trust.",
    outcomes: ["Premium market positioning", "Increased perceived value", "Stronger client loyalty"],
  },
  {
    num: "05",
    id: "website-design",
    title: "Website Design",
    icon: LayoutTemplate,
    description: "High-converting websites built to turn visitors into leads. Every page is designed with a clear conversion goal, not just to look good.",
    outcomes: ["Higher conversion rates", "Professional first impression", "Mobile-optimized experience"],
  },
  {
    num: "06",
    id: "seo",
    title: "SEO",
    icon: Search,
    description: "Long-term organic visibility that compounds over time. We build the content, technical foundation, and authority signals that put you at the top of search results.",
    outcomes: ["First-page Google rankings", "Sustainable organic traffic", "Reduced paid ad dependency"],
  },
  {
    num: "07",
    id: "paid-advertising",
    title: "Paid Advertising",
    icon: DollarSign,
    description: "Precision-targeted ad campaigns on Google, Meta, and beyond. We manage every dollar to maximize return and scale what works.",
    outcomes: ["Immediate traffic and leads", "Optimized ad spend", "Scalable paid growth"],
  },
  {
    num: "08",
    id: "social-media",
    title: "Social Media Management",
    icon: Share2,
    description: "Consistent, on-brand social presence that builds community, drives engagement, and keeps your business top of mind with your ideal clients.",
    outcomes: ["Engaged audience growth", "Brand consistency", "Community trust"],
  },
  {
    num: "09",
    id: "business-consulting",
    title: "Business Consulting",
    icon: Compass,
    description: "Strategic advisory for business owners who want a clear-eyed outside perspective on growth, operations, and market positioning.",
    outcomes: ["Clarity on growth priorities", "Actionable strategic roadmap", "Expert accountability"],
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAudit }) => {
  return (
    <section id="services" className="py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-bold text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300 font-mono">
            <span>What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1B3D] tracking-tight">
            Every Service Built to Drive Growth
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We do not offer a menu of disconnected tactics. Every service we provide is part of an integrated growth system designed to make your business impossible to ignore.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.num}
                id={service.id}
                className="min-w-0 bg-slate-50/80 rounded-3xl p-8 border border-slate-200 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-black text-amber-600">
                      {service.num}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-white text-[#0B1B3D] border border-slate-200 flex items-center justify-center group-hover:bg-[#0B1B3D] group-hover:text-amber-400 transition-colors shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1B3D] group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {service.description}
                  </p>

                  <div className="pt-3 border-t border-slate-200/80 space-y-2">
                    <p className="text-[11px] font-mono font-bold uppercase text-slate-500 tracking-wider">
                      Outcomes
                    </p>
                    <div className="space-y-1.5">
                      {service.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Button
                  onClick={onOpenAudit}
                  variant="outline"
                  className="w-full min-w-0 whitespace-normal h-auto bg-white border-slate-200 text-slate-800 hover:bg-[#0B1B3D] hover:text-amber-400 font-bold text-xs py-5 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span>Inquire About {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};