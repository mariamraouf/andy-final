import React from "react";
import { ShieldCheck, XCircle, RotateCcw } from "lucide-react";

/**
 * The seven-day guarantee, stated the same way wherever it appears.
 *
 * Three facts rather than a slogan: a window, a refund, and no contract.
 * They are the three objections that stop someone buying a retainer, and
 * every one of them is backed by the refund terms on /billing - nothing
 * here promises more than that page delivers.
 */

const POINTS = [
  { icon: ShieldCheck, text: "7 days to change your mind" },
  { icon: RotateCcw, text: "Full refund, setup fee included" },
  { icon: XCircle, text: "No long-term contract" },
];

interface Props {
  /** "dark" sits on the navy hero, "light" on white sections. */
  tone?: "dark" | "light";
  className?: string;
}

export const NoCommitment: React.FC<Props> = ({ tone = "light", className = "" }) => {
  const label = tone === "dark" ? "text-slate-200" : "text-slate-600";
  const mark = tone === "dark" ? "text-amber-400" : "text-emerald-600";

  return (
    <ul
      className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`}
      aria-label="Our guarantee"
    >
      {POINTS.map(({ icon: Icon, text }) => (
        <li key={text} className={`flex items-center gap-1.5 text-[13px] font-semibold ${label}`}>
          <Icon className={`w-4 h-4 shrink-0 ${mark}`} />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
};

/** Compact single-line version for tight spaces. */
export const NoCommitmentLine: React.FC<{ tone?: "dark" | "light"; className?: string }> = ({
  tone = "light",
  className = "",
}) => (
  <p
    className={`flex items-start gap-1.5 text-[12px] leading-snug font-semibold ${
      tone === "dark" ? "text-amber-400" : "text-emerald-700"
    } ${className}`}
  >
    <ShieldCheck className="w-3.5 h-3.5 shrink-0 mt-px" />
    <span>7 days to change your mind — full refund, no contract</span>
  </p>
);
