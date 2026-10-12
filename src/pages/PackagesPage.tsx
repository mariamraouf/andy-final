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
        description="Transparent marketing packages: Business Boost $399 one-time, Visibility $750/mo + $500 setup, Growth $1,500/mo + $1,000 setup, Dominance from $3,000/mo + $1,500 setup. Ad spend billed separately."
        canonical="https://www.thecruzian.com/packages"
      />
      <PackagesSection onOpenAudit={onOpenAudit} />
      <OurProcessSection onOpenAudit={onOpenAudit} />
    </div>
  );
};