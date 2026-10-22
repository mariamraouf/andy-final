import React, { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { showError } from "@/utils/toast";
import { submitForm } from "@/utils/forms";
import { trackLeadGeneration } from "@/utils/analytics";

interface MessageFormProps {
  /** Passed to GA4 so enquiries can be told apart by where they came from. */
  location: string;
}

/**
 * For the visitor who wants to write rather than book a 45-minute call.
 *
 * Booking a call is a much larger ask than typing three lines, and until now
 * the only alternative on the site was a mailto link — which costs a lead
 * every time someone is on a phone with no mail client set up.
 */
export const MessageForm: React.FC<MessageFormProps> = ({ location }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [botField, setBotField] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (botField) return; // honeypot: only a bot fills this in
    setSending(true);
    try {
      await submitForm(`New enquiry from ${name || "the website"}`, {
        source: "Website enquiry",
        ownerName: name,
        email,
        phone,
        business,
        message,
      });
      trackLeadGeneration(location);
      setSent(true);
    } catch {
      showError("That didn't send. Please call +1 888-619-3580 and we'll sort it out.");
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full bg-white border border-slate-300 rounded-md px-3.5 py-2.5 text-[15px] text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition";
  const label = "block text-[13px] font-bold text-[#0B1B3D] mb-1.5";

  if (sent) {
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
    <form onSubmit={submit} className="space-y-4" noValidate={false}>
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
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
          />
        </div>
        <div>
          <label className={label} htmlFor="mf-business">Business name</label>
          <input
            id="mf-business"
            className={field}
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            autoComplete="organization"
            placeholder="Optional"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label} htmlFor="mf-email">Email</label>
          <input
            id="mf-email"
            type="email"
            className={field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>
        <div>
          <label className={label} htmlFor="mf-phone">Phone</label>
          <input
            id="mf-phone"
            type="tel"
            className={field}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            placeholder="Optional"
          />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="mf-message">What do you need help with?</label>
        <textarea
          id="mf-message"
          className={`${field} min-h-[110px] resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="A sentence or two is plenty — where leads are coming from today, and what you wish was different."
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-[#0B1B3D] hover:bg-slate-800 disabled:opacity-60 text-white font-bold text-sm px-6 py-3.5 rounded-md inline-flex items-center justify-center gap-2 transition-colors"
      >
        {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {sending ? "Sending…" : "Send message"}
      </button>

      <p className="text-[11px] text-slate-500 leading-relaxed">
        Goes straight to hello@thecruzian.com. We never sell or share your details, and you
        won't be added to a mailing list.
      </p>
    </form>
  );
};
