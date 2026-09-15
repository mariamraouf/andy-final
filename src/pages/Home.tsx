import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, ShieldCheck, TrendingUp, PhoneCall, Bot, Zap, CheckCircle2, Sparkles, Building2, Quote } from "lucide-react";

interface HomeProps {
  onOpenAudit: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenAudit }) => {
  return (
    <div className="space-y-20 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-900">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-transparent border border-amber-500/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-300">
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Virgin Islands Resilience & Unstoppable Grit</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                We Don't Just Run Ads. <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                  We Build Unstoppable Market Dominance.
                </span>
              </h1>

              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
                No generic fluff. No ghost leads. <strong className="text-white">The Cruzian</strong> helps medical practices, contractors, restaurants, and local businesses capture high-ticket buyers, execute cold outreach, and outlast every competitor.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Apollo Precision Lead Sourcing",
                  "Human Cold Calling That Converts",
                  "Smart AI Missed-Call Recovery",
                  "Direct WhatsApp & ClickUp Access",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-slate-200 font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Button
                  onClick={onOpenAudit}
                  className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-base px-8 py-6 rounded-xl shadow-xl shadow-amber-500/25 flex items-center justify-center gap-3 group"
                >
                  <span>CLAIM FREE GROWTH AUDIT</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Link to="/services">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold px-6 py-6 rounded-xl text-base flex items-center justify-center gap-2"
                  >
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>Explore Growth Stack</span>
                  </Button>
                </Link>
              </div>

            </div>

            {/* Visual Live Metric Dashboard */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 p-6 sm:p-8 shadow-2xl space-y-5">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Cruzian Active Pipeline
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">ST. CROIX • US</span>
                </div>

                <div className="space-y-3">
                  <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Monthly Verified Prospect Pool</p>
                      <p className="text-lg font-black text-amber-400 mt-0.5">Built per campaign</p>
                    </div>
                    <TrendingUp className="w-6 h-6 text-amber-400" />
                  </div>

                  <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Human Outreach Channel</p>
                      <p className="text-lg font-bold text-white font-mono mt-0.5">Phone + LinkedIn + SMS</p>
                    </div>
                    <PhoneCall className="w-6 h-6 text-orange-400" />
                  </div>

                  <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-4 border border-amber-500/20">
                    <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>Instant Call Recovery System</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Captures missed calls instantly and routes prospects to self-booking before they contact a competitor.
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-400 italic">
                  "I play to win and I want to be the last one standing for our clients." — The Cruzian
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK VALUE STATEMENT & FOUNDER QUOTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl border border-amber-500/30 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <Quote className="w-16 h-16 text-amber-500/20 absolute top-6 right-6 pointer-events-none" />
          
          <div className="max-w-3xl space-y-6">
            <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              A Word From Our Founder
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              "We treat your business like our own. No retainer burning, no junior handed-off accounts."
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Most agencies take your monthly check, throw automated bot templates at your market, and give you excuses when sales don't move. At <strong>The Cruzian</strong>, we perform the hard human work: cold calling decision makers, verifying lead quality, and configuring smart missed-call text-backs.
            </p>
            <div>
              <Link to="/about">
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-4 rounded-xl flex items-center gap-2">
                  <span>Read The Cruzian Story & Manifesto</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INDUSTRY NAVIGATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-black text-white">Targeted Industry Solutions</h2>
          <p className="text-slate-400 text-sm">
            Select your industry to view custom lead acquisition playbooks designed specifically for your customer buying behavior.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Medical & Healthcare", desc: "High-ticket patient consultation booking & no-show SMS prevention.", link: "/industries" },
            { name: "Roofing & Construction", desc: "Inspection quotes & instant missed-call text backs while on job sites.", link: "/industries" },
            { name: "Landscaping & Grounds", desc: "Commercial grounds retainers & HOA decision maker outreach.", link: "/industries" },
            { name: "Restaurants & Dining", desc: "Corporate catering outreach & SMS VIP dining clubs.", link: "/industries" },
            { name: "Startups & Local SMBs", desc: "0-to-1 customer acquisition, Apollo lead sourcing, & GoHighLevel.", link: "/industries" },
            { name: "Custom B2B & Services", desc: "Tailored cold calling & LinkedIn decision maker prospecting.", link: "/contact" },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 hover:border-amber-500/50 transition-all space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-lg group-hover:text-amber-300 transition-colors">{item.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              <Link to={item.link} className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold hover:underline pt-2">
                <span>View Strategy Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 rounded-3xl p-8 sm:p-12 text-slate-950 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Ready to Win Your Market?</h2>
            <p className="font-medium text-slate-900 max-w-xl text-sm sm:text-base">
              Get a personalized 30-day customer acquisition blueprint directly from the Cruzian team. No pressure, no generic sales pitch.
            </p>
          </div>
          <Button
            onClick={onOpenAudit}
            className="bg-slate-950 hover:bg-slate-900 text-amber-400 font-black px-8 py-6 rounded-xl text-base shadow-xl shrink-0"
          >
            Claim Free Audit Now
          </Button>
        </div>
      </section>

    </div>
  );
};