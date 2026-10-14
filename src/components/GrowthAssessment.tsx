import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { trackEvent } from "@/utils/analytics";
import { NoCommitmentLine } from "@/components/NoCommitment";

/**
 * Three questions that end in a recommendation.
 *
 * The hero used to hold a single goal picker: one click, a paragraph of copy,
 * and a jump down the page. It was labelled an assessment but assessed nothing.
 * This asks what actually decides which package fits - the bottleneck, how
 * customers arrive today, and what one customer is worth - and names a starting
 * point with the reasoning shown. No promises about results are made, because
 * none can be made honestly before a conversation.
 */

type Answers = { blocker?: string; channel?: string; value?: string };

const STEPS = [
  {
    key: "blocker" as const,
    question: "What is holding growth back right now?",
    options: [
      { id: "volume", label: "Not enough people find us" },
      { id: "conversion", label: "They find us but don't get in touch" },
      { id: "quality", label: "We get enquiries, but the wrong ones" },
      { id: "site", label: "Our website lets us down" },
    ],
  },
  {
    key: "channel" as const,
    question: "Where do customers come from today?",
    options: [
      { id: "referral", label: "Word of mouth and referrals" },
      { id: "organic", label: "Some search traffic" },
      { id: "ads", label: "We already run ads" },
      { id: "none", label: "Nothing consistent" },
    ],
  },
  {
    key: "value" as const,
    question: "What is one new customer worth to you?",
    options: [
      { id: "small", label: "Under $1,000" },
      { id: "mid", label: "$1,000 – $5,000" },
      { id: "large", label: "$5,000 – $25,000" },
      { id: "xl", label: "More than $25,000" },
    ],
  },
];

interface Result {
  pkg: string;
  price: string;
  why: string;
  first: string;
}

/**
 * Value decides how much machinery is worth building; the other two answers
 * decide where to point it. Someone with no consistent source of customers and
 * a low deal value should not be sold a $3,000 retainer.
 */
const recommend = (a: Answers): Result => {
  if (a.value === "small" || a.channel === "none") {
    return {
      pkg: "Business Boost",
      price: "$399 one-time",
      why: "Before committing to anything monthly, it is worth knowing exactly where you stand. This is a one-off audit and a 30-day plan — no retainer, no commitment.",
      first: "A marketing audit, your Google Business Profile fixed, and a plan you can act on yourself.",
    };
  }
  if (a.value === "xl" || (a.channel === "ads" && a.blocker === "quality")) {
    return {
      pkg: "Dominance",
      price: "from $3,000/month",
      why: "At that deal size, a single extra customer pays for months of work — which makes full management, not piecemeal help, the thing that actually moves the number.",
      first: "Complete marketing management, multi-platform advertising, CRM and reporting built around your sales process.",
    };
  }
  if (a.value === "large" || a.channel === "ads" || a.blocker === "conversion") {
    return {
      pkg: "Growth",
      price: "$1,500/month",
      why: "You have demand to work with. The job is converting more of it and buying more of it deliberately, which needs ads, landing pages and tracking working together.",
      first: "Advanced SEO, managed Google Ads, landing page work, and conversion tracking so every enquiry is traceable.",
    };
  }
  return {
    pkg: "Visibility",
    price: "$750/month",
    why: "The foundations come first: being findable, looking credible, and showing up consistently. That is what turns referrals into a steady flow.",
    first: "Local SEO, your Google Business Profile managed, monthly content, and a report that shows what changed.",
  };
};

interface Props {
  onOpenAudit: (context?: string) => void;
}

export const GrowthAssessment: React.FC<Props> = ({ onOpenAudit }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const done = step >= STEPS.length;
  const result = done ? recommend(answers) : null;

  const choose = (key: keyof Answers, id: string) => {
    const next = { ...answers, [key]: id };
    setAnswers(next);
    setStep((s) => s + 1);
    if (step + 1 >= STEPS.length) {
      trackEvent("assessment_complete", { ...next, recommended: recommend(next).pkg });
    }
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
  };

  return (
    <aside className="bg-white text-[#0B1B3D] rounded-lg shadow-2xl shadow-[#040c1e]/40 p-6 sm:p-7">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-5">
        {STEPS.map((s, i) => (
          <span
            key={s.key}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i < step ? "bg-amber-500" : "bg-slate-200"
            }`}
          />
        ))}
        <span className="ml-1 text-[11px] font-mono font-bold text-slate-400 tabular-nums">
          {done ? "Done" : `${step + 1}/${STEPS.length}`}
        </span>
      </div>

      {!done && result === null && (
        <>
          <p className="text-[11px] font-mono font-bold uppercase tracking-[.16em] text-amber-700">
            Growth assessment
          </p>
          <h2 className="mt-2 text-xl sm:text-2xl font-black tracking-[-.025em] leading-tight text-balance">
            {STEPS[step].question}
          </h2>

          <div className="mt-5 flex flex-col gap-2.5" role="group">
            {STEPS[step].options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => choose(STEPS[step].key, opt.id)}
                className="w-full grid grid-cols-[1fr_auto] items-center gap-3 text-left rounded-md px-4 py-3.5 border border-slate-200 hover:border-amber-500 hover:bg-amber-50/60 transition-colors"
              >
                <span className="font-semibold text-[15px] tracking-[-.01em]">{opt.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3.5 border-t border-slate-200 flex items-center justify-between">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0B1B3D] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>
            ) : (
              <span className="text-xs text-slate-400">Three questions. No email required.</span>
            )}
            <span className="text-xs text-slate-400">~20 seconds</span>
          </div>
        </>
      )}

      {result && (
        <>
          <p className="text-[11px] font-mono font-bold uppercase tracking-[.16em] text-amber-700">
            Where we would start
          </p>
          <h2 className="mt-2 flex items-baseline gap-2 flex-wrap">
            <span className="text-2xl sm:text-3xl font-black tracking-[-.03em]">{result.pkg}</span>
            <span className="text-sm font-semibold text-slate-500">{result.price}</span>
          </h2>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed">{result.why}</p>

          <div className="mt-4 rounded-md bg-slate-50 border border-slate-200 p-3.5">
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              What that includes
            </p>
            <p className="flex gap-2 text-[13px] text-slate-700 leading-relaxed">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{result.first}</span>
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => onOpenAudit(result.pkg)}
              className="w-full bg-amber-500 hover:bg-amber-400 text-[#0B1B3D] font-bold text-sm py-3.5 rounded-md flex items-center justify-center gap-2 transition-colors"
            >
              <span>Talk it through on a free call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/packages"
              className="w-full text-center border border-slate-200 hover:border-slate-300 text-[#0B1B3D] font-semibold text-sm py-3 rounded-md transition-colors"
            >
              See what {result.pkg} includes
            </Link>
          </div>

          {result.pkg !== "Business Boost" && <NoCommitmentLine className="mt-3.5 justify-center" />}

          <div className="mt-4 pt-3.5 border-t border-slate-200 flex items-center justify-between">
            <button
              type="button"
              onClick={restart}
              className="text-xs font-semibold text-slate-500 hover:text-[#0B1B3D] transition-colors"
            >
              Start over
            </button>
            <span className="text-xs text-slate-400">A starting point, not a quote.</span>
          </div>
        </>
      )}
    </aside>
  );
};
