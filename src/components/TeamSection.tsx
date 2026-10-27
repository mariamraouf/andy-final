import React from "react";

const TEAM = [
  { name: "Andy", role: "Managing Director", photo: "/team/andy.jpg" },
  { name: "Mariam", role: "Head of Client Services & Operations", photo: "/team/mariam.jpg" },
  { name: "Marcy", role: "Client Care Lead", photo: "/team/marcy.jpg" },
];

/**
 * Three faces, opening the page.
 *
 * No heading, no chrome around them — the portraits already carry the
 * brand's ring and wordmark, so anything drawn behind them would be a
 * second frame around a frame.
 */
export const TeamSection: React.FC = () => (
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
        <h2 className="mt-5 text-2xl font-black text-[#0B1B3D] tracking-tight">
          {person.name}
        </h2>
        <p className="mt-1 text-[12.5px] font-mono font-bold uppercase tracking-[.12em] text-amber-700">
          {person.role}
        </p>
      </div>
    ))}
  </div>
);
