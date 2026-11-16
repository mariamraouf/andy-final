import React, { useState } from "react";
import { SEO } from "@/components/SEO";
import { ServicesSection } from "@/components/ServicesSection";
import { OurProcessSection } from "@/components/OurProcessSection";
import { PackagesSection } from "@/components/PackagesSection";
import { AuditBookingModal } from "@/components/AuditBookingModal";
import { ServiceInquiryModal } from "@/components/ServiceInquiryModal";

interface ServicesProps {
  onOpenAudit: (pkg?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenAudit }) => {
  const [inquiryService, setInquiryService] = useState<string | undefined>(undefined);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isCallOpen, setIsCallOpen] = useState(false);

  const handleInquire = (service: string) => {
    setInquiryService(service);
    setIsInquiryOpen(true);
  };

  return (
    <div className="bg-white">
      <SEO
        title="Services | Cruzian B2B Growth & Lead Systems"
        description="Explore Cruzian's 9 integrated growth services: B2B Lead Generation, Sales Systems, Digital Marketing, Brand Authority, Web Design, SEO, Paid Ads, Social Media, and Consulting."
        canonical="https://www.thecruzian.com/services"
      />
      <ServicesSection onInquire={handleInquire} />
      <OurProcessSection onOpenAudit={onOpenAudit} />
      <PackagesSection onOpenAudit={onOpenAudit} />

      <ServiceInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        service={inquiryService}
        onBookCall={() => setIsCallOpen(true)}
      />
      <AuditBookingModal
        isOpen={isCallOpen}
        onClose={() => setIsCallOpen(false)}
        preselectedIndustry={inquiryService}
      />
    </div>
  );
};
