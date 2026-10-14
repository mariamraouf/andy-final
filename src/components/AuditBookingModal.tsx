import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sparkles } from "lucide-react";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedIndustry?: string;
}

/**
 * Every "book a call" button on the site opens this. It used to hold a form
 * that posted to Formspree; it now embeds Calendly so visitors pick a real
 * slot instead of waiting for someone to reply.
 *
 * The package or industry the visitor clicked from is passed through to
 * Calendly as an answer on the booking, so the call starts with that context.
 * Conversion tracking lives in CalendlyEmbed and fires on a completed booking.
 */
export const AuditBookingModal: React.FC<ModalProps> = ({ isOpen, onClose, preselectedIndustry }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="bg-white border border-slate-200 text-slate-900 max-w-2xl p-6 sm:p-8 rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto">
      <DialogHeader className="space-y-2 text-left">
        <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-mono text-xs uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-300 w-fit">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>Direct Strategy Consultation</span>
        </div>
        <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight">
          Book Your Free Strategy Call
        </DialogTitle>
        <DialogDescription className="text-slate-600 text-sm">
          Pick a time that suits you. We will look at your local market, where inquiries are
          currently being lost, and what the fastest route to more of them looks like.
          {preselectedIndustry ? (
            <>
              {" "}
              You are enquiring about <strong className="text-[#0B1B3D]">{preselectedIndustry}</strong>.
            </>
          ) : null}
        </DialogDescription>
      </DialogHeader>

      <div className="pt-2">
        <CalendlyEmbed location="audit_modal" context={preselectedIndustry} height={660} />
      </div>
    </DialogContent>
  </Dialog>
);
