/**
 * Every form on the site posts through here.
 *
 * Keeping the endpoint in one place means switching how submissions are
 * delivered later is a one-line change, and no page has to know anything
 * about where its data goes.
 */
const ENDPOINT = "https://formspree.io/f/xrpzrqkg";

export type FormPayload = Record<string, string>;

/**
 * `subject` becomes the subject line of the notification email, so the inbox
 * is scannable without opening anything.
 */
export const submitForm = async (subject: string, payload: FormPayload): Promise<void> => {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ _subject: subject, ...payload }),
  });

  if (!res.ok) {
    // Surface the real reason when there is one; fall back to the status code.
    let reason = String(res.status);
    try {
      const body = await res.json();
      if (Array.isArray(body?.errors) && body.errors.length) {
        reason = body.errors.map((e: { message?: string }) => e.message).filter(Boolean).join(", ");
      }
    } catch {
      /* response wasn't JSON — the status code is all we have */
    }
    throw new Error(reason);
  }
};
