import React from "react";
import { Quote, Flame, Heart, Target, ShieldCheck, Award, ArrowRight, MapPin, Phone, Users, BarChart3, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

interface AboutProps {
  onOpenAudit: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAudit }) => {
  return (
    <>
      <SEO
        title="About Cruzian | B2B Growth Company in Jacksonville, FL"
        description="Cruzian is a B2B growth and marketing company in Jacksonville, FL. We help overlooked businesses become impossible to ignore with integrated, high-converting digital systems."
        canonical="https://www.thecruzian.com/about"
      />
      <div className="bg-white text-slate-900 py-16 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-mono text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
            <Flame className="w-3.5 h-3.5 text-amber-700" />
            <span>The Cruzian Mission</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#0B1B3D] tracking-tight">
            We Help Overlooked Businesses Become Impossible to Ignore.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Cruzian is a B2B growth and marketing company. We help businesses become more visible, attract more customers, and grow through integrated, high-converting digital systems.
          </p>
        </div>

        {/* Visual Showcase Gallery Grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 relative group">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
              alt="Cruzian strategy team collaborating"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
              <span className="text-white font-bold text-sm">Deep Strategic Collaboration</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 relative group">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80"
              alt="Data-driven marketing pipeline"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
              <span className="text-white font-bold text-sm">Data & Pipeline Precision</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 relative group">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80"
              alt="Local business partnership"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
              <span className="text-white font-bold text-sm">Hands-On Client Partnership</span>
            </div>
          </div>
        </div>

        {/* Founder Story Card */}
        <div className="grid lg:grid-cols-12 gap-10 items-center bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl bg-white p-8 border border-slate-200 space-y-4 shadow-sm">
              <Quote className="w-10 h-10 text-amber-500" />
              <blockquote className="text-base sm:text-lg font-medium text-slate-800 italic leading-relaxed">
                "A lot of agencies out there are just doing it for their own benefit, taking your retainer money and blowing it while treating client businesses like numbers. I started Cruzian because I genuinely care. I play to win, and I want to be the last one standing for our clients."
              </blockquote>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0B1B3D] text-amber-400 flex items-center justify-center font-black text-lg font-serif">
                  C
                </div>
                <div>
                  <h3 className="font-bold text-[#0B1B3D]">Cruzian Leadership</h3>
                  <p className="text-xs text-amber-700 font-mono font-bold">Growth & Marketing Team</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-black text-[#0B1B3D]">
              Built for Ambitious Local Businesses
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Our ideal clients are primarily small to mid-sized local businesses that want to grow but don't have a strong marketing presence. Right now we are focused on businesses in <strong>Jacksonville, FL</strong>, with the long-term vision to expand well beyond.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We know small business owners wear too many hats. You don't have time to manage 6 different freelancers or parse vanity metrics. You need real, paying clients, a full calendar, and an accountable partner who treats every marketing dollar as their own.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-[#0B1B3D] text-sm">Growth. Authority. Results.</h4>
                <p className="text-xs text-slate-600 mt-1">Every service is connected to measurable bottom-line revenue.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-amber-700 text-sm">Direct Phone & Dedicated Support</h4>
                <p className="text-xs text-slate-600 mt-1">Call us toll-free at +1 888-619-3580 for immediate answers.</p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#0B1B3D] text-white rounded-3xl p-10 sm:p-14 space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-black">Ready to Partner with Cruzian?</h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Book your free 45-minute strategy call. We'll analyze your market and build a custom growth roadmap.
          </p>
          <Button
            onClick={onOpenAudit}
            className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black px-8 py-6 rounded-xl text-base shadow-md"
          >
            Book a Free Strategy Call
          </Button>
        </div>

      </div>
    </div>
    </>
  );
};