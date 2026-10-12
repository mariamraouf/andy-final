import React from "react";
import { SEO } from "@/components/SEO";
import { LegalLayout, LegalSection, LegalList } from "@/components/LegalLayout";
import { Link } from "react-router-dom";

export const Terms: React.FC = () => (
  <>
    <SEO
      title="Terms of Service | Cruzian"
      description="The terms that govern Cruzian's marketing services and this website: what we commit to, what we need from you, who owns the work, and the limits of our liability."
      canonical="https://www.thecruzian.com/terms"
    />
    <LegalLayout
      eyebrow="Terms of Service"
      title="The agreement between us."
      updated="12 October 2026"
      intro="These terms apply when you use this website and when you hire Cruzian. They are written in plain English on purpose — an agreement nobody can read is not much of an agreement."
    >
      <LegalSection heading="Who these terms are with">
        <p>
          Cruzian, a marketing and lead generation agency based in Jacksonville, Florida. In these
          terms, "we" and "us" mean Cruzian; "you" means the person or business using this site or
          buying our services.
        </p>
        <p>
          Using this website means you accept these terms. Paying for a package means you accept these
          terms and our{" "}
          <Link to="/billing" className="text-amber-700 font-semibold underline underline-offset-4">
            billing terms
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection heading="What we agree to do">
        <p>
          We deliver what the package you bought says it delivers, at the quantities and frequency
          stated on the pricing page or in the proposal we sent you. Where a proposal, statement of
          work or signed service agreement describes the scope in more detail, that document governs.
        </p>
        <p>
          Work outside the agreed scope is quoted separately and started only once you approve it in
          writing. We will not do unrequested work and then bill you for it.
        </p>
      </LegalSection>

      <LegalSection heading="What we need from you">
        <LegalList
          items={[
            "Access to the accounts and platforms the work requires, provided promptly.",
            "Accurate information about your business, and materials you actually have the right to use.",
            "Decisions and approvals within a reasonable time — a week is reasonable, a month stalls the work.",
            "A named person who can answer questions and sign things off.",
          ]}
        />
        <p>
          Where delays come from your side, delivery timelines move by the length of the delay. Billing
          does not pause automatically; see the{" "}
          <Link to="/billing" className="text-amber-700 font-semibold underline underline-offset-4">
            billing terms
          </Link>{" "}
          for how we handle that.
        </p>
      </LegalSection>

      <LegalSection heading="Who owns the work">
        <p>
          Once you have paid for it in full, the finished deliverables are yours — the website pages,
          the copy, the creative, the campaign structures, the accounts. We will hand over access
          whenever you ask, including when you leave.
        </p>
        <p>
          We keep ownership of our own tools, templates, processes and general know-how, and of
          anything we built before working with you. Unless you ask us not to, we may describe the work
          and show examples of it in our portfolio and case studies.
        </p>
      </LegalSection>

      <LegalSection heading="Things we cannot promise">
        <p>
          Marketing is not a machine with a guaranteed output. We do not promise specific rankings,
          lead volumes, conversion rates or revenue, and you should be wary of any agency that does.
          What we do promise is that the work in your package gets done properly, that the numbers we
          report are real, and that we tell you when something is not working.
        </p>
        <p>
          We also depend on platforms we do not control. Google, Meta and others set their own rules,
          prices and algorithms, and can change or suspend accounts for reasons of their own. We are
          not liable for their decisions, though we will do what we can to resolve them with you.
        </p>
      </LegalSection>

      <LegalSection heading="Confidentiality">
        <p>
          We keep what we learn about your business confidential, and we expect the same about our
          methods and pricing. This survives the end of the engagement. It does not cover information
          that is already public or that we are legally required to disclose.
        </p>
      </LegalSection>

      <LegalSection heading="Limits on liability">
        <p>
          Where the law allows us to limit it, our total liability for any claim arising from our
          services is capped at the fees you paid us in the three months before the claim arose. We are
          not liable for indirect or consequential losses — lost profit, lost opportunity, loss of
          data — and you are not liable to us for those either.
        </p>
        <p>
          Nothing here limits liability for fraud, or for anything that cannot lawfully be limited.
        </p>
      </LegalSection>

      <LegalSection heading="Ending the agreement">
        <p>
          Monthly packages run month to month and either of us can end them with 30 days' written
          notice. The{" "}
          <Link to="/billing" className="text-amber-700 font-semibold underline underline-offset-4">
            billing terms
          </Link>{" "}
          set out notice, final payments and refunds in full.
        </p>
        <p>
          We may end an engagement immediately if payment is more than 30 days overdue, or if we are
          asked to do something unlawful or deceptive. That has not happened yet, and we would rather
          it stayed that way.
        </p>
      </LegalSection>

      <LegalSection heading="This website">
        <p>
          The content, branding and design of thecruzian.com belong to Cruzian. You are welcome to read,
          quote and link to it; please do not copy it wholesale. Anything on the site about results,
          benchmarks or industry figures is provided for information and should not be treated as a
          forecast for your business.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These terms are governed by the laws of the State of Florida, and any dispute that cannot be
          settled between us goes to the state or federal courts serving Duval County, Florida.
        </p>
      </LegalSection>

      <LegalSection heading="Changes">
        <p>
          We may update these terms. The date at the top of this page always shows when they last
          changed, and existing clients get an email about anything material. Continuing to use our
          services after a change means you accept the updated terms.
        </p>
      </LegalSection>
    </LegalLayout>
  </>
);
