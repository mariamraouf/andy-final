import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

const SERVICES = [
  "Lawn care & landscaping",
  "Pressure washing",
  "Car washing & detailing",
  "Vehicle maintenance",
];

/**
 * The other half of Cruzian, on the homepage but below the pricing.
 *
 * It belongs here because people who already know the name should find it
 * without hunting through the nav — but not above the hero, where it would
 * compete with the business pitch for the first screen and leave a visitor
 * wondering which company they had actually landed on.
 */
export const PersonalServicesBand: React.FC = () => (
  <section className="bg-[#F7F5EF] border-t-4 border-amber-500 py-14 sm:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
        <div>
          <p className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-[.16em] text-amber-700">
            <MapPin className="w-3.5 h-3.5" />
            Also from Cruzian &middot; Jacksonville &amp; Orange Park
          </p>
          <h2 className="mt-2.5 text-2xl sm:text-3xl font-black text-[#0B1B3D] tracking-[-.025em]">
            Personal services, arranged.
          </h2>
          <p className="mt-2.5 text-slate-600 text-[15px] leading-relaxed max-w-xl">
            One number for the jobs around the house and the car. We line up a vetted local
            provider, you get a quote, and nothing is booked until you say so.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <span
                key={s}
                className="bg-white border border-[#E0DACB] rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold text-[#0B1B3D]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <Link
          to="/personal-services"
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}
          className="bg-[#0B1B3D] hover:bg-slate-800 text-white font-bold text-sm px-6 py-4 rounded-md inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
        >
          See personal services
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);
