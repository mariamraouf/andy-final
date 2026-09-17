// Single source of truth for contact details and social profiles.
// Adding a network is one line here — it then appears in the top bar,
// the footer, and the Schema.org sameAs data automatically.

export const CONTACT = {
  phoneDisplay: "+1 888-619-3580",
  phoneHref: "tel:+18886193580",
  email: "hello@thecruzian.com",
  emailHref: "mailto:hello@thecruzian.com",
  location: "Jacksonville, FL",
} as const;

export interface SocialLink {
  name: string;
  url: string;
}

// Only verified profiles are listed. To add one, uncomment and paste the URL.
export const SOCIALS: SocialLink[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/company/thecruzian" },
  { name: "Instagram", url: "https://www.instagram.com/cruzian__" },
  // { name: "X", url: "https://x.com/<handle>" },
  // { name: "TikTok", url: "https://www.tiktok.com/@<handle>" },
  // { name: "Facebook", url: "https://www.facebook.com/<page>" },
];
