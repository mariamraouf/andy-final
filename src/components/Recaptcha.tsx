import React, { useEffect, useRef, useState } from "react";

// Google reCAPTCHA v2 ("I'm not a robot" checkbox).
//
// The site key comes from VITE_RECAPTCHA_SITE_KEY. If it is not set, the widget
// is skipped and the form still works — a missing key must never break booking.
//
// Just as important: if Google's script cannot load (ad blocker, corporate
// firewall, network fault, or a region that blocks Google), we call
// onUnavailable so the form STOPS requiring a token. A visitor must never be
// locked out of the booking form by a third-party script that failed to load.
// The hidden honeypot in each form stays active in every one of these cases.
//
// NOTE: a token is only fully trustworthy once it is verified server-side with
// the secret key. Enable reCAPTCHA in the Formspree dashboard so Formspree
// checks the g-recaptcha-response field this component supplies.

export const RECAPTCHA_SITE_KEY: string =
  (import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined) ?? "";

export const recaptchaConfigured = RECAPTCHA_SITE_KEY.length > 0;

const LOAD_TIMEOUT_MS = 8000;

declare global {
  interface Window {
    grecaptcha?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => number;
      reset: (id?: number) => void;
    };
    onRecaptchaLoaded?: () => void;
  }
}

const SCRIPT_ID = "recaptcha-v2";
let scriptPromise: Promise<void> | null = null;

function loadRecaptcha(): Promise<void> {
  if (window.grecaptcha?.render) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error("reCAPTCHA timed out")),
      LOAD_TIMEOUT_MS,
    );
    const done = () => {
      clearTimeout(timer);
      resolve();
    };
    const fail = () => {
      clearTimeout(timer);
      scriptPromise = null; // allow a later retry
      reject(new Error("reCAPTCHA failed to load"));
    };

    if (document.getElementById(SCRIPT_ID)) return done();

    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.src =
      "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoaded&render=explicit";
    s.async = true;
    s.defer = true;
    window.onRecaptchaLoaded = done;
    s.onerror = fail;
    document.head.appendChild(s);
  });
  return scriptPromise;
}

interface Props {
  /** Fires with the token on success, and with "" when it expires. */
  onChange: (token: string) => void;
  /** Fires if the widget cannot load, so the form stops requiring a token. */
  onUnavailable: () => void;
  /** Bump to reset the widget (e.g. after a submit attempt). */
  resetSignal?: number;
}

export const Recaptcha: React.FC<Props> = ({
  onChange,
  onUnavailable,
  resetSignal = 0,
}) => {
  const holder = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!recaptchaConfigured) return;
    let cancelled = false;

    loadRecaptcha()
      .then(() => {
        if (cancelled || !holder.current || widgetId.current !== null) return;
        try {
          widgetId.current = window.grecaptcha!.render(holder.current, {
            sitekey: RECAPTCHA_SITE_KEY,
            callback: (token: string) => onChange(token),
            "expired-callback": () => onChange(""),
            "error-callback": () => onChange(""),
          });
        } catch {
          setFailed(true);
          onUnavailable();
        }
      })
      .catch(() => {
        if (cancelled) return;
        setFailed(true);
        onUnavailable();
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (resetSignal > 0 && widgetId.current !== null) {
      window.grecaptcha?.reset(widgetId.current);
      onChange("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetSignal]);

  if (!recaptchaConfigured || failed) return null;

  return <div ref={holder} className="flex justify-start" />;
};
