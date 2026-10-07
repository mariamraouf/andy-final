import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalculatorProps {
  onOpenAudit: () => void;
}

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

// Deliberately the simplest arithmetic we can show: average sale times extra
// customers. It is a framing device, not a projection, and the fine print
// says so — we don't publish numbers we can't stand behind.
export const RevenueCalculator: React.FC<CalculatorProps> = ({ onOpenAudit }) => {
  const [avgSale, setAvgSale] = useState<number>(2000);
  const [addCustomers, setAddCustomers] = useState<number>(5);

  const monthly = Math.max(0, avgSale) * Math.max(0, addCustomers);

  return (
    <section id="calculator" className="relative overflow-hidden bg-[#0B1B3D] text-white py-14 sm:py-16 lg:py-20">
      {/* Palm watermark, echoing the brand mark */}
      <svg
        viewBox="0 0 200 200"
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -top-5 w-56 opacity-[.07]"
        fill="none"
      >
        <g stroke="#E9BF62" strokeWidth="7" strokeLinecap="round">
          <path d="M100 200 C100 130 104 90 112 62" />
          <path d="M112 62 C140 30 175 24 196 40" />
          <path d="M112 62 C106 22 124 -8 154 -20" />
          <path d="M112 62 C76 40 40 48 16 78" />
          <path d="M112 62 C88 22 52 6 16 16" />
        </g>
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.05fr_1.1fr_auto_1fr] items-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-black tracking-[-.035em] leading-[1.08] text-balance max-w-[16ch]">
            Put your growth goal in perspective.
          </h2>

          <div className="flex flex-wrap gap-4 sm:gap-5">
            <div className="flex flex-col gap-2 flex-1 min-w-[140px]">
              <label htmlFor="calc-avg-sale" className="text-[13.5px] text-slate-300 font-medium">
                Average sale
              </label>
              <input
                id="calc-avg-sale"
                type="number"
                inputMode="numeric"
                min={0}
                step={100}
                value={avgSale}
                onChange={(e) => setAvgSale(Number(e.target.value))}
                className="w-full bg-white text-[#0B1B3D] rounded-md px-3.5 py-3 text-base font-semibold tabular-nums outline-none focus:ring-4 focus:ring-amber-400/60"
              />
            </div>

            <div className="flex flex-col gap-2 flex-1 min-w-[140px]">
              <label htmlFor="calc-add-customers" className="text-[13.5px] text-slate-300 font-medium">
                Additional customers
              </label>
              <input
                id="calc-add-customers"
                type="number"
                inputMode="numeric"
                min={0}
                step={1}
                value={addCustomers}
                onChange={(e) => setAddCustomers(Number(e.target.value))}
                className="w-full bg-white text-[#0B1B3D] rounded-md px-3.5 py-3 text-base font-semibold tabular-nums outline-none focus:ring-4 focus:ring-amber-400/60"
              />
            </div>
          </div>

          <div aria-hidden="true" className="hidden lg:block w-px self-stretch min-h-[90px] bg-white/15" />

          <div>
            <p className="text-[2.4rem] sm:text-5xl font-black text-amber-400 tracking-[-.04em] leading-none tabular-nums">
              {money.format(monthly)}
            </p>
            <p className="mt-2 text-base font-semibold">Illustrative additional revenue</p>
            <p className="mt-1.5 text-[12.5px] text-slate-400 max-w-xs leading-relaxed">
              Based on your inputs. Not a forecast or guarantee.
            </p>
            <Button
              onClick={onOpenAudit}
              variant="outline"
              className="mt-4 border-2 border-amber-400 bg-transparent text-amber-400 hover:bg-amber-400 hover:text-[#0B1B3D] font-bold px-6 py-5 rounded-md flex items-center gap-2 group"
            >
              <span>Discuss My Goals</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
