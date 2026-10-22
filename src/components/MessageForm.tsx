import React, { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { FORM_ID } from "@/utils/forms";
import { trackLeadGeneration } from "@/utils/analytics";

interface MessageFormProps {
  /** Passed to GA4 so enquiries can be told apart by where they came from. */
  location: string;
}

const errorClass = "block mt-1 text-[12px] font-semibold text-red-600";

/**
 * For the visitor who wants to write rather than book a 45-minute call.
 *
 * Booking a call is a much larger ask than typing three lines, and until now
 * the only alternative on the site was a mailto link — which costs a lead
 * every time someone is on a phone with no mail client set up.
 */
export const MessageForm: React.FC<MessageFormProps> = ({ location }) => {
  const [state, handleSubmit] = useForm(FORM_ID);
  const [name, setName] = useState("");
  const [botField, setBotField] = useState("");
  const counted = useRef(false);

  // Fire the conversion once and only once, however often this re-renders.
  useEffect(() => {
    if (state.succeeded && !counted.current) {
      counted.current = true;
      trackLeadGeneration(location);
    }
  }, [state.succeeded, location]);

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

  if (state.succeeded) {
    return (
      <div className="bg-white border border-emerald-300 rounded-lg p-6 text-center">
        <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
        <p className="mt-3 font-black text-[#0B1B3D]">Message sent.</p>
        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
          We read every one of these ourselves and usually reply the same working day. If it's
          urgent, call{" "}
          <a href="tel:+18886193580" className="font-semibold text-amber-700 underline underline-offset-4">
            +1 888-619-3580
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Makes the notification email readable without opening it */}
      <input type="hidden" name="_subject" value={`New enquiry from ${name || "the website"}`} />
      <input type="hidden" name="source" value="Website enquiry" />

      {/* Honeypot — hidden from people, irresistible to bots */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={botField}
        onChange={(e) => setBotField(e.target.value)}
        className="hidden"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label} htmlFor="mf-name">Your name</label>
          <input
            id="mf-name"
            name="ownerName"
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
          />
          <ValidationError prefix="Name" field="ownerName" errors={state.errors} className={errorClass} />
        </div>
        <div>
          <label className={label} htmlFor="mf-business">Business name</label>
          <input
            id="mf-business"
            name="business"
            className={field}
            autoComplete="organization"
            placeholder="Optional"
          />
          <ValidationError prefix="Business" field="business" errors={state.errors} className={errorClass} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label} htmlFor="mf-email">Email</label>
          <input
            id="mf-email"
            name="email"
            type="email"
            className={field}
            required
            autoComplete="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className={errorClass} />
        </div>
        <div>
          <label className={label} htmlFor="mf-phone">Phone</label>
          <input
            id="mf-phone"
            name="phone"
            type="tel"
            className={field}
            autoComplete="tel"
            placeholder="Optional"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className={errorClass} />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="mf-message">What do you need help with?</label>
        <textarea
          id="mf-message"
          name="message"
          className={`${field} min-h-[110px] resize-y`}
          required
          placeholder="A sentence or two is plenty — where leads are coming from today, and what you wish was different."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className={errorClass} />
      </div>

      {/* Anything the server rejected that wasn't tied to a single field */}
      <ValidationError errors={state.errors} className={errorClass} />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-[#0B1B3D] hover:bg-slate-800 disabled:opacity-60 text-white font-bold text-sm px-6 py-3.5 rounded-md inline-flex items-center justify-center gap-2 transition-colors"
      >
        {state.submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {state.submitting ? "Sending…" : "Send message"}
      </button>

      <p className="text-[11px] text-slate-500 leading-relaxed">
        Goes straight to hello@thecruzian.com. We never sell or share your details, and you
        won't be added to a mailing list.
      </p>
    </form>
  );
};
