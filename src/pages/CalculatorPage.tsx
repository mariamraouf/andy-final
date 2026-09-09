import React from "react";
import { RevenueCalculator } from "@/components/RevenueCalculator";
import { SEO } from "@/components/SEO";

interface CalculatorPageProps {
  onOpenAudit: () => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onOpenAudit }) => {
  return (
    <>
      <SEO
        title="Revenue Calculator | See What Missed Leads Cost You | Cruzian"
        description="Work out what unanswered calls and slow follow-up are costing your business each month, and what a working lead system would return."
        canonical="https://www.thecruzian.com/calculator"
      />
      <div className="py-12">
      <RevenueCalculator onOpenAudit={onOpenAudit} />
    </div>
    </>
  );
};