import React from "react";
import { SEO } from "@/components/SEO";
import { PackagesSection } from "@/components/PackagesSection";
import { OurProcessSection } from "@/components/OurProcessSection";

interface PackagesPageProps {
  onOpenAudit: (pkg?: string) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onOpenAudit }) => {
  return (
    <div className="bg-white">
      <SEO
        title="Pricing & Packages | Cruzian B2B Growth"
        description="Simple, transparent marketing packages: Business Boost ($399), Visibility ($750/mo), Growth ($1,500/mo), and Dominance ($3,000+/mo). Positive ROI from day one."
        canonical="https://cruzian.com/packages"
      />
      <PackagesSection onOpenAudit={onOpenAudit} />
      <OurProcessSection onOpenAudit={onOpenAudit} />
    </div>
  );
};