import React, { useState } from "react";
import { Calculator, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalculatorProps {
  onOpenAudit: () => void;
}

export const RevenueCalculator: React.FC<CalculatorProps> = ({ onOpenAudit }) => {
  const [currentRevenue, setCurrentRevenue] = useState<number>(25000);
  const [avgCustomerValue, setAvgCustomerValue] = useState<number>(1500);
  const [targetGrowth, setTargetGrowth] = useState<number>(40);

  // Calculations
  const newMonthlyRevenue = Math.round(currentRevenue * (1 + targetGrowth / 100));
  const monthlyRevenueGain = newMonthlyRevenue - currentRevenue;
  const additionalClientsNeeded = Math.max(1, Math.ceil(monthlyRevenueGain / avgCustomerValue));
  const requiredLeadsEstimated = additionalClientsNeeded * 12;

  return (
    <section id="calculator" className="py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-bold text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            <span>Interactive Revenue Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1B3D] tracking-tight">
            Calculate Your Growth Potential
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See how many extra high-ticket clients you need each month to reach your target revenue goals with The Cruzian Engine.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Slider 1: Current Revenue */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-bold text-[#0B1B3D]">Current Monthly Revenue:</label>
                <span className="font-mono text-[#0B1B3D] text-lg font-black bg-amber-100 px-3 py-1 rounded-lg border border-amber-300">
                  ${currentRevenue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="200000"
                step="5000"
                value={currentRevenue}
                onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>$5,000/mo</span>
                <span>$100,000/mo</span>
                <span>$200,000+/mo</span>
              </div>
            </div>

            {/* Slider 2: Average Customer / Job Value */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-bold text-[#0B1B3D]">Average Client / Job Value:</label>
                <span className="font-mono text-[#0B1B3D] text-lg font-black bg-amber-100 px-3 py-1 rounded-lg border border-amber-300">
                  ${avgCustomerValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="200"
                max="15000"
                step="100"
                value={avgCustomerValue}
                onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>$200 (Dining/Small)</span>
                <span>$3,000 (Medical)</span>
                <span>$15,000+ (Roofing)</span>
              </div>
            </div>

            {/* Slider 3: Target Growth Percentage */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-bold text-[#0B1B3D]">Desired Target Growth:</label>
                <span className="font-mono text-[#0B1B3D] text-lg font-black bg-blue-100 px-3 py-1 rounded-lg border border-blue-200">
                  +{targetGrowth}% Growth
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                step="5"
                value={targetGrowth}
                onChange={(e) => setTargetGrowth(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>+10% Moderate</span>
                <span>+50% Aggressive</span>
                <span>+150% Market Dominance</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-600 flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Illustrative only. These are your own inputs, not a forecast or a guarantee of results.</span>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-[#0B1B3D] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                PROJECTED MONTHLY OUTPUT
              </span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>

            {/* Result Stats */}
            <div className="space-y-4">
              
              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <p className="text-xs text-slate-400 font-medium">New Projected Monthly Revenue</p>
                <p className="text-3xl font-black text-amber-400 font-mono mt-1">
                  ${newMonthlyRevenue.toLocaleString()} <span className="text-xs text-emerald-400 font-sans font-semibold">/mo</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                  <p className="text-[11px] text-slate-400 font-medium">Monthly Gain</p>
                  <p className="text-xl font-bold text-emerald-400 font-mono mt-0.5">
                    +${monthlyRevenueGain.toLocaleString()}
                  </p>
                </div>

                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                  <p className="text-[11px] text-slate-400 font-medium">Extra Clients Needed</p>
                  <p className="text-xl font-bold text-amber-300 font-mono mt-0.5">
                    +{additionalClientsNeeded} /mo
                  </p>
                </div>
              </div>

              <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20 text-xs text-slate-200">
                <p className="font-bold text-amber-400 mb-1">Outreach Requirement:</p>
                <span>
                  To consistently book <strong className="text-white">{additionalClientsNeeded} new clients</strong>, we target roughly <strong className="text-white">{requiredLeadsEstimated} verified prospects/month</strong> via cold call + ad retargeting.
                </span>
              </div>

            </div>

            {/* CTA */}
            <Button
              onClick={onOpenAudit}
              className="w-full bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black py-6 rounded-xl shadow-lg flex items-center justify-center gap-2 text-base"
            >
              <span>Build Plan For ${newMonthlyRevenue.toLocaleString()}/mo</span>
              <ArrowRight className="w-5 h-5" />
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
};