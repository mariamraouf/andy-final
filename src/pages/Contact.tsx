import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Phone, Mail, User, Building, ShieldCheck, Sparkles, MapPin, Clock, Calendar, Loader2 } from "lucide-react";
import { showSuccess, showError } from "@/utils/toast";

export const Contact: React.FC = () => {
  const [packageInterest, setPackageInterest] = useState("Growth — $1,500/month");
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xrpzrqkg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          source: "Contact Page Form",
          packageInterest,
          businessName,
          ownerName,
          email,
          phone,
          message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        showSuccess("Strategy Call Request Received! Our team will reach out directly within 12 hours.");
      } else {
        const data = await response.json().catch(() => ({}));
        showError(data?.error || "There was an issue submitting your message. Please try again.");
      }
    } catch (err) {
      showError("Connection error. Please try again or call us at +1 888-619-3580.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
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
                    <a href="mailto:hello@cruzian.com" className="text-sm font-mono text-slate-700 hover:text-amber-600 font-bold">
                      hello@cruzian.com
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

          {/* Right Form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1B3D]">Strategy Call Request Received!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-amber-700">{ownerName || "Business Owner"}</strong>. Our team is reviewing <strong className="text-[#0B1B3D]">{businessName}</strong> and will reach out via phone or email within 12 hours.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-bold px-6 py-3 rounded-xl"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase font-mono">Package / Service of Interest</label>
                  <select
                    value={packageInterest}
                    onChange={(e) => setPackageInterest(e.target.value)}
                    className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl p-3 text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="Business Boost (One-Time) — $399">Business Boost (One-Time) — $399</option>
                    <option value="Visibility — $750/month">Visibility — $750/month</option>
                    <option value="Growth — $1,500/month">Growth — $1,500/month (Most Popular)</option>
                    <option value="Dominance — Starting at $3,000/month">Dominance — Starting at $3,000/month</option>
                    <option value="Custom Project / Add-On">Custom Project / Add-On</option>
                    <option value="Not Sure — Need Recommendations">Not Sure — Need Recommendations</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase font-mono">Company / Business Name</label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <Input
                        required
                        placeholder="e.g. Apex Health Clinic"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="pl-10 bg-white border-slate-200 text-slate-900 rounded-xl py-5 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase font-mono">Your Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <Input
                        required
                        placeholder="Sarah Miller"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        className="pl-10 bg-white border-slate-200 text-slate-900 rounded-xl py-5 text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase font-mono">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <Input
                        required
                        type="email"
                        placeholder="you@business.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 bg-white border-slate-200 text-slate-900 rounded-xl py-5 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase font-mono">Phone Number</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <Input
                        required
                        placeholder="(904) 555-0192"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="pl-10 bg-white border-slate-200 text-slate-900 rounded-xl py-5 text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase font-mono">Current Business Challenge / Goals</label>
                  <Textarea
                    placeholder="Tell us what you're looking to achieve (e.g., more B2B leads, local SEO visibility, Google Ads scaling)..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-white border-slate-200 text-slate-900 rounded-xl text-sm h-24"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#0B1B3D] hover:bg-slate-800 text-amber-400 font-black py-6 rounded-xl shadow-md flex items-center justify-center gap-2 text-base"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-amber-400" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 text-amber-400" />
                      <span>Book Free 45-Minute Strategy Call</span>
                    </>
                  )}
                </Button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Confidential. We never sell or spam client contact information.</span>
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};