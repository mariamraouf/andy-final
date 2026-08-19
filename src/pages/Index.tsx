import React, { useState } from "react";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { OurProcessSection } from "@/components/OurProcessSection";
import { PackagesSection } from "@/components/PackagesSection";
import { FounderManifesto } from "@/components/FounderManifesto";
import { RevenueCalculator } from "@/components/RevenueCalculator";
import { ComparisonSection } from "@/components/ComparisonSection";
import { AuditBookingModal } from "@/components/AuditBookingModal";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const Index: React.FC = () => {
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);

  const handleOpenAudit = (pkg?: string) => {
    if (pkg) {
      setSelectedPackage(pkg);
    }
    setIsAuditOpen(true);
  };

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      <SEO
        title="Cruzian | B2B Growth, Lead Generation & Digital Systems"
        description="We help overlooked businesses become impossible to ignore. Predictable lead pipelines, modern websites, and paid ads in Jacksonville, FL."
        canonical="https://cruzian.com/"
      />

      {/* Hero Section with Interactive Desk */}
      <HeroSection
        onOpenAudit={() => handleOpenAudit()}
        onExploreSolutions={scrollToServices}
      />

      {/* Complete 01-09 Cruzian Growth Services */}
      <ServicesSection onOpenAudit={() => handleOpenAudit()} />

      {/* How We Deliver Results 4-Step Process */}
      <OurProcessSection onOpenAudit={() => handleOpenAudit()} />

      {/* All 4 Packages & Add-Ons ($399, $750/mo, $1,500/mo, $3,000/mo) */}
      <PackagesSection onOpenAudit={(pkg) => handleOpenAudit(pkg)} />

      {/* Founder Manifesto & Cruzian Heritage */}
      <FounderManifesto />

      {/* Interactive Revenue Yield Simulator */}
      <RevenueCalculator onOpenAudit={() => handleOpenAudit()} />

      {/* Side-by-Side Comparison Table */}
      <ComparisonSection />

      {/* Final High-Impact CTA Strip */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 text-slate-900 rounded-3xl p-8 sm:p-14 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-200 relative overflow-hidden">
            <div className="space-y-3 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 text-[#0B1B3D] bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Zero Pressure • Free 45-Minute Call</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0B1B3D]">
                Ready to Make Your Business Impossible to Ignore?
              </h2>
              <p className="text-slate-600 max-w-xl text-sm sm:text-base font-normal">
                Book a free strategy call with Andy. We'll identify the highest-impact services for your specific business in Jacksonville and beyond.
              </p>
            </div>

            <Button
              onClick={() => handleOpenAudit()}
              className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black px-8 py-6 rounded-2xl text-base shadow-lg shrink-0 z-10 flex items-center gap-2"
            >
              <span>Book a Free Strategy Call</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Dialog Modal */}
      <AuditBookingModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        preselectedIndustry={selectedPackage}
      />
    </div>
  );
};

export default Index;