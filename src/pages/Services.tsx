import React from "react";
import { SEO } from "@/components/SEO";
import { ServicesSection } from "@/components/ServicesSection";
import { OurProcessSection } from "@/components/OurProcessSection";
import { PackagesSection } from "@/components/PackagesSection";

interface ServicesProps {
  onOpenAudit: (pkg?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenAudit }) => {
  return (
    <div className="bg-white">
      <SEO
        title="Services | Cruzian B2B Growth & Lead Systems"
        description="Explore Cruzian's 9 integrated growth services: B2B Lead Generation, Sales Systems, Digital Marketing, Brand Authority, Web Design, SEO, Paid Ads, Social Media, and Consulting."
        canonical="https://cruzian.com/services"
      />
      <ServicesSection onOpenAudit={onOpenAudit} />
      <OurProcessSection onOpenAudit={onOpenAudit} />
      <PackagesSection onOpenAudit={onOpenAudit} />
    </div>
  );
};