import React from "react";
import { SEO } from "@/components/SEO";
import { LegalLayout, LegalSection, LegalList } from "@/components/LegalLayout";
import { Link } from "react-router-dom";

export const Privacy: React.FC = () => (
  <>
    <SEO
      title="Privacy Policy | Cruzian"
      description="What Cruzian collects when you use thecruzian.com or become a client, why we collect it, who we share it with, and how to ask us to delete it."
      canonical="https://www.thecruzian.com/privacy"
    />
    <LegalLayout
      eyebrow="Privacy"
      title="What we collect, and what we do with it."
      updated="12 October 2026"
      intro="Written to be read rather than skimmed past. We collect very little, we do not sell any of it, and you can ask us to delete it at any time."
    >
      <LegalSection heading="Who we are">
        <p>
          Cruzian is a B2B marketing and lead generation agency based in Jacksonville, Florida. For
          anything in this policy, contact us at{" "}
          <a href="mailto:hello@thecruzian.com" className="text-amber-700 font-semibold underline underline-offset-4">
            hello@thecruzian.com
          </a>{" "}
          or +1 888-619-3580.
        </p>
      </LegalSection>

      <LegalSection heading="What you give us">
        <p>When you submit a form on this site, we receive what you typed into it:</p>
        <LegalList
          items={[
            "Your name and your business name",
            "Your email address, and your phone number if you provide one",
            "Which package or service you are interested in",
            "Whatever you write in the message field",
          ]}
        />
        <p>
          If you become a client, we also hold what the work requires: access to the accounts and
          platforms you give us, the content and materials you send us, and our records of the work
          and of billing.
        </p>
      </LegalSection>

      <LegalSection heading="What we collect automatically">
        <p>
          Like most websites, this one records basic technical information when you visit: your IP
          address, the browser and device you are using, the pages you looked at, how long you stayed,
          and the site or ad that sent you here. This comes from cookies and similar technologies.
        </p>
      </LegalSection>

      <LegalSection heading="The services we use">
        <LegalList
          items={[
            <><strong>Google Analytics 4</strong> — to see which pages and traffic sources work. It sets cookies and records the activity described above.</>,
            <><strong>Google Ads</strong> — to measure which ads produce enquiries, and for remarketing. This means Google may show you Cruzian ads elsewhere after you have visited this site.</>,
            <><strong>Formspree</strong> — delivers form submissions to our inbox and stores them briefly in transit.</>,
            <><strong>Vercel</strong> — hosts the website and keeps standard server logs.</>,
            <><strong>Our payment processor</strong> — handles card and bank payments for clients. They receive your payment details directly; we never see or store full card numbers.</>,
          ]}
        />
        <p>
          Each of these has its own privacy policy governing what it does with the data it receives.
        </p>
      </LegalSection>

      <LegalSection heading="Why we hold any of it">
        <LegalList
          items={[
            "To reply to your enquiry and, if it goes that way, to deliver the work you hire us for",
            "To send invoices, receipts and service communications",
            "To understand which marketing is working, so we spend our own budget sensibly",
            "To keep the records tax and company law require us to keep",
          ]}
        />
        <p>
          We do not use your enquiry to add you to a marketing list without asking. If we ever start a
          newsletter, joining it will be a separate, deliberate decision on your part.
        </p>
      </LegalSection>

      <LegalSection heading="We do not sell your data">
        <p>
          We have never sold personal information and have no plans to. We share it only with the
          service providers listed above, strictly so they can do their job for us, and where the law
          requires us to hand something over.
        </p>
      </LegalSection>

      <LegalSection heading="Turning off the tracking">
        <LegalList
          items={[
            <>Google's own <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-amber-700 font-semibold underline underline-offset-4">Ads Settings</a> let you turn off ad personalization across the sites you visit.</>,
            <>Google publishes a <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-amber-700 font-semibold underline underline-offset-4">browser add-on</a> that opts you out of Google Analytics entirely.</>,
            "Your browser settings can block or clear cookies, which stops most of this at source.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="How long we keep it">
        <p>
          Enquiries that do not become work are kept for up to 24 months and then deleted. Client
          records are kept for as long as the relationship lasts and for seven years afterwards, which
          is what tax and contract law require. Analytics data follows Google's own retention settings.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>
          Email{" "}
          <a href="mailto:hello@thecruzian.com" className="text-amber-700 font-semibold underline underline-offset-4">
            hello@thecruzian.com
          </a>{" "}
          and you can ask us to show you what we hold about you, correct anything wrong, or delete it.
          We will respond within 30 days, and we will not charge you or treat you differently for
          asking.
        </p>
        <p>
          Residents of states with their own privacy laws — California, Colorado, Connecticut,
          Virginia and others — have these rights in statute, including the right to opt out of the
          sale or sharing of personal information. Since we do not sell or share it for cross-context
          advertising beyond the Google remarketing described above, the practical answer is the same:
          email us and we will act on it.
        </p>
      </LegalSection>

      <LegalSection heading="Security">
        <p>
          The site runs over HTTPS, access to client accounts is limited to the people doing the work,
          and payment details never touch our systems. No system is perfectly secure, and we will not
          pretend otherwise — but we do not hold the kind of data that makes us an interesting target.
        </p>
      </LegalSection>

      <LegalSection heading="Children">
        <p>
          This is a business-to-business service. It is not directed at children, and we do not
          knowingly collect information from anyone under 18. If you believe a child has sent us
          something, tell us and we will delete it.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>
          If we change how any of this works, we will update this page and change the date at the top.
          Material changes affecting existing clients get an email as well.
        </p>
        <p>
          See also our{" "}
          <Link to="/terms" className="text-amber-700 font-semibold underline underline-offset-4">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/billing" className="text-amber-700 font-semibold underline underline-offset-4">
            billing terms
          </Link>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  </>
);
