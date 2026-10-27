import React from "react";
import { Users } from "lucide-react";

const TEAM = [
  {
    name: "Andy",
    role: "Managing Director",
    photo: "/team/andy.jpg",
    line: "Sets the strategy and stays on the account — not just the first call.",
  },
  {
    name: "Mariam",
    role: "Head of Client Services & Operations",
    photo: "/team/mariam.jpg",
    line: "Runs the work day to day, so nothing waits on a handover.",
  },
  {
    name: "Marcy",
    role: "Client Care Lead",
    photo: "/team/marcy.jpg",
    line: "Picks up the phone and answers the email. Usually the same day.",
  },
];

/**
 * Faces, on a page that otherwise asks people to trust a company name.
 *
 * Small agencies lose work to the suspicion that the person on the call
 * will never be seen again. Three names and three photographs answer that
 * more cheaply than another paragraph claiming it.
 */
export const TeamSection: React.FC = () => (
  <div className="space-y-10">
    <div className="text-center max-w-2xl mx-auto space-y-3">
      <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-mono text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
        <Users className="w-3.5 h-3.5 text-amber-700" />
        <span>The Team</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B3D] tracking-tight">
        The people you'll actually deal with.
      </h2>
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
        Not a call centre and not a rotating cast. The same three people who answer the
        phone are the ones doing the work.
      </p>
    </div>

    <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 max-w-4xl mx-auto">
      {TEAM.map((person) => (
        <div key={person.name} className="min-w-0 text-center">
          <img
            src={person.photo}
            alt={`${person.name}, ${person.role} at Cruzian`}
            width={600}
            height={600}
            loading="lazy"
            decoding="async"
            className="w-40 sm:w-full max-w-[180px] aspect-square mx-auto rounded-full object-cover"
          />
          <h3 className="mt-4 text-lg font-black text-[#0B1B3D] tracking-tight">
            {person.name}
          </h3>
          <p className="mt-0.5 text-[12px] font-mono font-bold uppercase tracking-[.12em] text-amber-700">
            {person.role}
          </p>
          <p className="mt-2.5 text-[13.5px] text-slate-600 leading-relaxed">
            {person.line}
          </p>
        </div>
      ))}
    </div>
  </div>
);
