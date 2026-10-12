import React from "react";
import { SEO } from "@/components/SEO";
import { LegalLayout, LegalSection, LegalList } from "@/components/LegalLayout";
import { Link } from "react-router-dom";

const ROWS = [
  { name: "Business Boost", monthly: "—", setup: "—", total: "$399 one-time" },
  { name: "Visibility", monthly: "$750 / month", setup: "$500 one-time", total: "$1,250 to start" },
  { name: "Growth", monthly: "$1,500 / month", setup: "$1,000 one-time", total: "$2,500 to start" },
  { name: "Dominance", monthly: "From $3,000 / month", setup: "$1,500 one-time", total: "From $4,500 to start" },
];

export const Billing: React.FC = () => (
  <>
    <SEO
      title="Billing, Cancellation & Refund Terms | Cruzian"
      description="How Cruzian bills: setup fee and first month upfront, monthly recurring thereafter, setup charged once. Cancellation, refunds, and what happens if a payment fails."
      canonical="https://www.thecruzian.com/billing"
    />
    <LegalLayout
      eyebrow="Billing"
      title="What you pay, when you pay it, and how to stop."
      updated="12 October 2026"
      intro="No surprises. This page sets out every charge, when it is taken, what happens if a payment fails, and how to cancel. Read it before you pay — if anything here is unclear, ask us first."
    >
      <LegalSection heading="What each package costs">
        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full min-w-[34rem] text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-slate-500 font-bold">Package</th>
                <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-slate-500 font-bold">Monthly</th>
                <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-slate-500 font-bold">Setup fee</th>
                <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-slate-500 font-bold">First payment</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.name} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-bold text-[#0B1B3D]">{r.name}</td>
                  <td className="px-4 py-3 font-mono text-slate-700">{r.monthly}</td>
                  <td className="px-4 py-3 font-mono text-slate-700">{r.setup}</td>
                  <td className="px-4 py-3 font-mono font-bold text-[#0B1B3D]">{r.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-600">
          Prices are in US dollars and exclude any applicable sales tax. Add-on projects are quoted
          separately and invoiced on their own terms, which we state in writing before work begins.
        </p>
      </LegalSection>

      <LegalSection heading="The setup fee is charged once">
        <p>
          Monthly packages carry a one-time setup fee. It covers onboarding, gathering and configuring
          account access, installing tracking and reporting, and the first build of your campaigns —
          the work that happens before anything can run.
        </p>
        <p>
          It is billed one time, together with your first month, and never again for as long as the
          engagement continues without interruption. Business Boost is a single one-time project and
          carries no setup fee. If an engagement is cancelled and later restarted, a new setup fee
          applies, because that work has to be done again.
        </p>
      </LegalSection>

      <LegalSection heading="When payments are taken">
        <LegalList
          items={[
            <><strong>Before work begins:</strong> the setup fee and your first month are collected together. Nothing starts until this payment clears.</>,
            <><strong>Every month after:</strong> the monthly fee recurs automatically on the same date, with your authorization, until you cancel.</>,
            <><strong>Every charge:</strong> an invoice and a receipt are emailed to you. You will never be charged an amount you have not already seen in writing.</>,
            <><strong>Card details:</strong> payments are handled by a PCI-compliant payment processor. Cruzian never sees or stores your full card or bank numbers.</>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="Your advertising budget is separate">
        <p>
          Where a package includes ad management, your advertising budget is <strong>not</strong> part
          of the fee. You decide the amount, it is paid directly to Google, Meta or whichever platform
          is running the campaign, and every dollar of it goes to that platform.
        </p>
        <p>
          Cruzian does not mark up ad spend and does not take a percentage of it. We will recommend a
          budget and tell you plainly what it can and cannot be expected to do, but the money is yours
          and it stays in your own platform accounts.
        </p>
      </LegalSection>

      <LegalSection heading="If a payment fails">
        <LegalList
          items={[
            "We email you the same day, and the payment is automatically retried over the following few days.",
            "You have seven days from the original due date to resolve it. Work continues normally during that window.",
            "After seven days past due, work pauses. Live campaigns are left running where possible so you do not lose momentum, but new work stops.",
            "After thirty days past due, we may close the engagement. Restarting later means a new setup fee.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="Cancelling">
        <p>
          Monthly packages run month to month. There is no long-term contract and no cancellation
          penalty. To cancel, email{" "}
          <a href="mailto:hello@thecruzian.com" className="text-amber-700 font-semibold underline underline-offset-4">
            hello@thecruzian.com
          </a>{" "}
          at least <strong>30 days before your next renewal date</strong>.
        </p>
        <p>
          We will finish and hand over the month you have already paid for, send you everything we hold
          — accounts, access, reporting, work in progress — and take no further payment. Cancelling
          with less than 30 days' notice means one more monthly charge, and that month is delivered in
          full.
        </p>
      </LegalSection>

      <LegalSection heading="Refunds">
        <LegalList
          items={[
            <><strong>Setup fee:</strong> refundable in full until onboarding begins. Once we have started that work it is non-refundable, because the time has been spent.</>,
            <><strong>Monthly fees:</strong> the current month is non-refundable once it has started. We do not pro-rate part-months, and we do not charge for months you have cancelled out of.</>,
            <><strong>Business Boost:</strong> refundable in full any time before the strategy session takes place. After the session, it is non-refundable — the audit and action plan are yours to keep.</>,
            <><strong>Advertising spend:</strong> paid to the platforms, not to us, so refunds are governed by their policies, not ours.</>,
          ]}
        />
        <p>
          If we have genuinely failed to deliver something a package commits to, say so and we will
          make it right or refund it. That is not a formal clause so much as how we intend to behave.
        </p>
      </LegalSection>

      <LegalSection heading="Onboarding delays">
        <p>
          Kickoff is within five business days of your first payment clearing and our receiving the
          access we need — typically your website, Google Business Profile, ad accounts and analytics.
        </p>
        <p>
          If that access is slow to arrive, the delivery schedule shifts by the length of the delay,
          but the billing date does not move. We will hold your slot and chase you for what we need. If
          we still cannot start 30 days after the first payment, we will either pause the engagement in
          writing or refund the unused months, whichever you prefer.
        </p>
      </LegalSection>

      <LegalSection heading="Price changes">
        <p>
          If package pricing changes, existing clients keep their current rate for at least 30 days
          after we notify them in writing. Nobody's price changes without an email first.
        </p>
      </LegalSection>

      <LegalSection heading="The rest of the agreement">
        <p>
          These billing terms sit alongside our{" "}
          <Link to="/terms" className="text-amber-700 font-semibold underline underline-offset-4">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-amber-700 font-semibold underline underline-offset-4">
            Privacy Policy
          </Link>
          . Where a signed service agreement says something different from this page, the signed
          agreement wins.
        </p>
      </LegalSection>
    </LegalLayout>
  </>
);
