import React from "react";
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { NoCommitment } from "@/components/NoCommitment";

export const Contact: React.FC = () => {

  return (
    <>
      <SEO
        title="Contact Cruzian | Book a Free 45-Minute Growth Audit"
        description="Talk to Cruzian about lead generation, paid ads and growth systems for your business. Book a free 45-minute audit — no pressure, no generic pitch."
        canonical="https://www.thecruzian.com/contact"
      />
      <div className="bg-white py-16 text-slate-900 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-mono text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
            <span>Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#0B1B3D] tracking-tight">
            Book a Free Strategy Call
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            We start with a free 45-minute call to understand your business, goals, and current challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-[#0B1B3D]">Direct Contact Details</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Connect with the Cruzian team. We use dedicated client communication channels and CRM pipelines for 100% transparent growth reporting.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-amber-100 text-amber-700 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0B1B3D] text-sm">Direct Agency Line</p>
                    <a href="tel:18886193580" className="text-sm font-mono text-slate-700 hover:text-amber-600 font-bold">
                      +1 888-619-3580
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 bg-blue-100 text-[#0B1B3D] rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0B1B3D] text-sm">Email Inquiries</p>
                    <a href="mailto:hello@thecruzian.com" className="text-sm font-mono text-slate-700 hover:text-amber-600 font-bold">
                      hello@thecruzian.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0B1B3D] text-sm">Headquarters</p>
                    <p className="text-xs text-slate-600">Jacksonville, FL • Serving Clients Nationwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 bg-purple-100 text-purple-700 rounded-xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0B1B3D] text-sm">Hours of Operation</p>
                    <p className="text-xs text-slate-600">Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
                <p className="font-bold text-[#0B1B3D] mb-1">Our Strategy Guarantee:</p>
                <span>"If we can't find clear ways to add revenue and qualified leads to your business, we'll tell you upfront."</span>
              </div>
            </div>

            {/* Visual consultation graphic card */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 text-white p-6 relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-[#0B1B3D] flex items-center justify-center font-bold">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">What Happens on the Call?</h4>
                  <p className="text-[11px] text-slate-400">45-min Zoom or phone consultation</p>
                </div>
              </div>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Deep dive into current lead bottlenecks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Local competitor positioning analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Custom revenue roadmap delivered</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: booking calendar */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="mb-5 space-y-1.5">
              <h2 className="text-2xl font-black text-[#0B1B3D] tracking-tight">
                Pick a time that suits you
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                A free 45-minute call. We look at your local market, where inquiries are being
                lost today, and the fastest route to more of them. No obligation, and no
                pressure on the call.
              </p>
              <NoCommitment className="pt-1" />
            </div>

            <CalendlyEmbed location="contact_page" height={700} />

            <p className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
              Prefer to write first? Email{" "}
              <a href="mailto:hello@thecruzian.com" className="font-semibold text-amber-700 underline underline-offset-4">
                hello@thecruzian.com
              </a>{" "}
              or call{" "}
              <a href="tel:+18886193580" className="font-semibold text-amber-700 underline underline-offset-4">
                +1 888-619-3580
              </a>
              . We never sell or share your details.
            </p>
          </div>

        </div>

      </div>
    </div>
    </>
  );
};