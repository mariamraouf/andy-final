/**
 * The year-end offer, in one place.
 *
 * Nothing about the offer is written into a component: every price, date, rule
 * and checkout link lives here, so changing a number is a one-line edit rather
 * than a hunt through the pages that show it.
 *
 * The rates below are the agreed ones. `enabled` is the single switch that
 * takes the whole offer off the site again, and `offerReady()` still refuses
 * to render anything if a rate is ever blanked out.
 */

export interface OfferPlan {
  name: string;
  /** The standard monthly rate, shown struck through. */
  regular: number;
  /** The introductory monthly rate for the first three paid months. */
  intro: number | null;
  /** The rate for the first three paid months if they started with Business Boost. */
  upgrade: number | null;
  /** The one-time setup fee, deferred to paid month four. */
  setup: number;
  /** Stripe checkout, 7-day trial, card taken at signup. Null = book a call. */
  link: string | null;
  /** Stripe checkout for the Business Boost upgrade rate. */
  upgradeLink: string | null;
}

export const OFFER = {
  /** The one switch that takes the offer off the site. */
  enabled: true,

  closes: "December 31, 2026",
  tagline: "You run your business. We handle the marketing.",

  trialDays: 7,
  /** Paid months at the introductory rate before the price steps up. */
  introMonths: 3,
  /** The month the deferred setup fee and the regular rate both land. */
  stepUpMonth: 4,

  boost: {
    name: "Business Boost",
    regular: 399,
    price: 199,
    note: "One-time project. No setup fee, no subscription.",
    link: "https://buy.stripe.com/6oUfZj63K02sfEhaTB43S04",
  },

  plans: [
    {
      name: "Visibility",
      regular: 750,
      intro: 565,
      upgrade: 400,
      setup: 500,
      link: "https://buy.stripe.com/bJe4gBdwc7uU3VzbXF43S00",
      upgradeLink: "https://buy.stripe.com/8x2cN7bo46qQbo12n543S02",
    },
    {
      name: "Growth",
      regular: 1500,
      intro: 1000,
      upgrade: 800,
      setup: 1000,
      link: "https://buy.stripe.com/6oU5kF1Nu3eE63Hd1J43S01",
      upgradeLink: "https://buy.stripe.com/cNi9AVak0eXm2RvbXF43S03",
    },
    {
      /**
       * Dominance is quoted from $3,000, so there is no single price to put
       * behind a button. It stays a conversation: the rates are real, but they
       * are agreed on the call, not at a checkout.
       */
      name: "Dominance",
      regular: 3000,
      intro: 2500,
      upgrade: 2000,
      setup: 1500,
      link: null,
      upgradeLink: null,
    },
  ] as OfferPlan[],
};

/** True only when the offer is switched on and every rate is filled in. */
export const offerReady = (): boolean =>
  OFFER.enabled && OFFER.plans.every((p) => typeof p.intro === "number");

export const planFor = (name: string): OfferPlan | undefined =>
  OFFER.plans.find((p) => p.name === name);

export const money = (n: number): string => `$${n.toLocaleString("en-US")}`;
