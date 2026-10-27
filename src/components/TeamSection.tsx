import React from "react";
import { Users } from "lucide-react";

const TEAM = [
  { name: "Andy", role: "Managing Director", photo: "/team/andy.jpg" },
  { name: "Mariam", role: "Head of Client Services & Operations", photo: "/team/mariam.jpg" },
  { name: "Marcy", role: "Client Care Lead", photo: "/team/marcy.jpg" },
];

/**
 * The team, opening the about page.
 *
 * Nothing is drawn around the portraits — they already carry the ring and
 * the wordmark, so a card behind them would be a frame around a frame.
 */
export const TeamSection: React.FC = () => (
  <div className="space-y-12">
    <div className="text-center max-w-2xl mx-auto space-y-4">
      <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-mono text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
        <Users className="w-3.5 h-3.5 text-amber-700" />
        <span>Our Team</span>
      </div>
      <h2 className="text-3xl sm:text-5xl font-black text-[#0B1B3D] tracking-tight">
        The people you'll actually deal with.
      </h2>
      <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
        No call centre and no rotating cast. The same names answer the phone, send the
        reports and sit on the calls.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 max-w-5xl mx-auto">
      {TEAM.map((person) => (
        <div key={person.name} className="min-w-0 text-center">
          <img
            src={person.photo}
            alt={`${person.name}, ${person.role} at Cruzian`}
            width={600}
            height={600}
            loading="eager"
            decoding="async"
            className="w-full max-w-[280px] aspect-square mx-auto object-cover"
          />
          <h3 className="mt-5 text-2xl font-black text-[#0B1B3D] tracking-tight">
            {person.name}
          </h3>
          <p className="mt-1 text-[12.5px] font-mono font-bold uppercase tracking-[.12em] text-amber-700">
            {person.role}
          </p>
        </div>
      ))}
    </div>
  </div>
);
