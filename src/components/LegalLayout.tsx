import React from "react";
import { Link } from "react-router-dom";

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  children: React.ReactNode;
}

/**
 * Shared shell for the three policy pages (Billing, Privacy, Terms).
 * Plain, readable, narrow measure — these exist to be understood, not admired.
 */
export const LegalLayout: React.FC<LegalLayoutProps> = ({
  eyebrow,
  title,
  updated,
  intro,
  children,
}) => (
  <div className="bg-white">
    <header className="bg-[#0B1B3D] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <p className="text-[11px] font-mono font-bold uppercase tracking-[.2em] text-amber-400">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight text-balance">{title}</h1>
        <p className="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed">{intro}</p>
        <p className="mt-6 text-xs text-slate-400 font-mono">Last updated: {updated}</p>
      </div>
    </header>

    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
      <div className="legal-prose space-y-10 text-slate-700 text-[15px] leading-relaxed">
        {children}
      </div>

      <div className="mt-14 pt-8 border-t border-slate-200 text-sm text-slate-600">
        <p className="font-bold text-[#0B1B3D]">Questions about any of this?</p>
        <p className="mt-1">
          Email{" "}
          <a href="mailto:hello@thecruzian.com" className="text-amber-700 font-semibold underline underline-offset-4">
            hello@thecruzian.com
          </a>{" "}
          or call{" "}
          <a href="tel:+18886193580" className="text-amber-700 font-semibold underline underline-offset-4">
            +1 888-619-3580
          </a>
          . You can also{" "}
          <Link to="/contact" className="text-amber-700 font-semibold underline underline-offset-4">
            send us a message
          </Link>
          .
        </p>
      </div>
    </main>
  </div>
);

/** A numbered section inside a policy page. */
export const LegalSection: React.FC<{ id?: string; heading: string; children: React.ReactNode }> = ({
  id,
  heading,
  children,
}) => (
  <section id={id} className="space-y-3 scroll-mt-28">
    <h2 className="text-xl sm:text-2xl font-black text-[#0B1B3D] tracking-tight">{heading}</h2>
    {children}
  </section>
);

/** Bulleted list with the brand's amber markers. */
export const LegalList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="space-y-2.5 pl-0">
    {items.map((item, i) => (
      <li key={i} className="relative pl-5">
        <span aria-hidden="true" className="absolute left-0 top-[0.6em] w-2 h-2 bg-amber-500 rounded-xs" />
        {item}
      </li>
    ))}
  </ul>
);
