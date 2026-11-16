import React, { useEffect, useRef, useState } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { useForm, ValidationError } from "@formspree/react";
import { CheckCircle2, Loader2, Send, CalendarClock } from "lucide-react";
import { FORM_ID } from "@/utils/forms";
import { trackLeadGeneration } from "@/utils/analytics";
import { servicesData } from "@/components/ServicesSection";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  /** The service the visitor clicked. Pre-selected in the dropdown. */
  service?: string;
  /** Opens the Calendly modal instead, for people who would rather talk. */
  onBookCall: () => void;
}

const errorClass = "block mt-1 text-[12px] font-semibold text-red-600";

/**
 * The short way to ask about one service.
 *
 * Every "Inquire About X" button used to open a 45-minute Calendly booking,
 * which is a large ask for someone who only wants to know whether we do a
 * thing and roughly what it costs. This is four fields and a send button, with
 * the service already filled in, and the call still offered underneath for
 * anyone who would rather have it.
 */
export const ServiceInquiryModal: React.FC<Props> = ({ isOpen, onClose, service, onBookCall }) => {
  const [state, handleSubmit] = useForm(FORM_ID);
  const [chosen, setChosen] = useState(service ?? servicesData[0].title);
  const [botField, setBotField] = useState("");
  const counted = useRef(false);

  // Follow the button that opened it, including when it is reopened on another
  // service without unmounting in between.
  useEffect(() => {
    if (service) setChosen(service);
  }, [service]);

  useEffect(() => {
    if (state.succeeded && !counted.current) {
      counted.current = true;
      trackLeadGeneration("service_inquiry");
    }
  }, [state.succeeded]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (botField) {
      e.preventDefault(); // honeypot: only a bot fills this in
      return;
    }
    handleSubmit(e);
  };

  const field =
    "w-full bg-white border border-slate-300 rounded-md px-3.5 py-2.5 text-[15px] text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition";
  const label = "block text-[13px] font-bold text-[#0B1B3D] mb-1.5";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white border border-slate-200 text-slate-900 max-w-lg p-6 sm:p-8 rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto">
        {state.succeeded ? (
          <div className="text-center space-y-4 py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <DialogTitle className="text-2xl font-black text-[#0B1B3D]">
              Thanks, that is with us.
            </DialogTitle>
            <DialogDescription className="text-slate-600 text-sm leading-relaxed">
              We read these ourselves and usually reply the same working day. If it is urgent,
              call{" "}
              <a
                href="tel:+18886193580"
                className="font-semibold text-amber-700 underline underline-offset-4"
              >
                +1 888-619-3580
              </a>
              .
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader className="space-y-2 text-left">
              <DialogTitle className="text-2xl sm:text-3xl font-black text-[#0B1B3D] tracking-tight">
                Ask about {chosen}
              </DialogTitle>
              <DialogDescription className="text-slate-600 text-sm">
                Four fields. Tell us what you are trying to fix and we will come back with
                whether we can help and what it would cost.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={onSubmit} className="mt-4 space-y-4">
              <input type="hidden" name="_subject" value={`Service enquiry — ${chosen}`} />
              <input type="hidden" name="source" value="Business services enquiry" />

              {/* Honeypot — hidden from people, irresistible to bots */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
                className="hidden"
                aria-hidden="true"
              />

              <div>
                <label htmlFor="si-service" className={label}>
                  Service
                </label>
                <select
                  id="si-service"
                  name="service"
                  value={chosen}
                  onChange={(e) => setChosen(e.target.value)}
                  className={field}
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option>Something else</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="si-name" className={label}>
                    Your name
                  </label>
                  <input id="si-name" name="name" required autoComplete="name" className={field} />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className={errorClass} />
                </div>
                <div>
                  <label htmlFor="si-email" className={label}>
                    Email
                  </label>
                  <input
                    id="si-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className={field}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className={errorClass} />
                </div>
              </div>

              <div>
                <label htmlFor="si-message" className={label}>
                  What do you need?
                </label>
                <textarea
                  id="si-message"
                  name="message"
                  rows={3}
                  required
                  placeholder="A sentence or two is plenty."
                  className={field}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className={errorClass} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-[#0B1B3D] font-black text-sm py-3.5 rounded-md inline-flex items-center justify-center gap-2 transition-colors"
              >
                {state.submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    Send enquiry
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* The call is still there for anyone who would rather talk */}
              <div className="pt-3 border-t border-slate-200 text-center">
                <p className="text-[13px] text-slate-600">Would rather talk it through?</p>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onBookCall();
                  }}
                  className="mt-1.5 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0B1B3D] underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-amber-700 transition-colors"
                >
                  <CalendarClock className="w-3.5 h-3.5" />
                  Book a free strategy call instead
                </button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
