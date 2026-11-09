/**
 * The year-end offer, in one place.
 *
 * Nothing about the offer is written into a component: every price, date and
 * rule lives here, so changing a number is a one-line edit rather than a hunt
 * through the pages that show it.
 *
 * TWO SAFETY CATCHES, both deliberate:
 *
 *   1. `enabled` is false until the offer is signed off.
 *   2. `intro` is null on every plan until the introductory rates are
 *      confirmed. `offerReady()` returns false while any of them is missing,
 *      and nothing renders. The site cannot advertise a price nobody agreed.
 */

export interface OfferPlan {
  name: string;
  /** The standard monthly rate, shown struck through. */
  regular: number;
  /** The introductory monthly rate for the first three paid months. */
  intro: number | null;
  /** The one-time setup fee, deferred to paid month four. */
  setup: number;
}

export const OFFER = {
  /** Flip to true only once the rates below are confirmed and checked. */
  enabled: false,

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
  },

  plans: [
    { name: "Visibility", regular: 750, intro: null, setup: 500 },
    { name: "Growth", regular: 1500, intro: null, setup: 1000 },
    { name: "Dominance", regular: 3000, intro: null, setup: 1500 },
  ] as OfferPlan[],
};

/** True only when the offer is switched on and every rate is filled in. */
export const offerReady = (): boolean =>
  OFFER.enabled && OFFER.plans.every((p) => typeof p.intro === "number");

export const planFor = (name: string): OfferPlan | undefined =>
  OFFER.plans.find((p) => p.name === name);

export const money = (n: number): string => `$${n.toLocaleString("en-US")}`;
