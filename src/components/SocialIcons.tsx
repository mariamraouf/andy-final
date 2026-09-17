import React from "react";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { SOCIALS } from "@/config/site";

// lucide has no X or TikTok mark, so those two are inline.
const XMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.9 2H22l-7.2 8.3L23.3 22h-6.7l-5.2-6.9L5.4 22H2.3l7.7-8.9L1 2h6.8l4.7 6.3L18.9 2Zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20Z" />
  </svg>
);

const TikTokMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M16.6 5.8a4.8 4.8 0 0 1-1-2.8h-3v12.2a2.6 2.6 0 1 1-2.6-2.6c.27 0 .53.04.78.12V9.6a5.7 5.7 0 0 0-.78-.06 5.67 5.67 0 1 0 5.67 5.67V9.1a7.8 7.8 0 0 0 4.55 1.46V7.5a4.8 4.8 0 0 1-3.62-1.7Z" />
  </svg>
);

const ICONS: Record<string, React.FC<{ className?: string }>> = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Facebook: Facebook,
  X: XMark,
  TikTok: TikTokMark,
};

interface Props {
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
}

export const SocialIcons: React.FC<Props> = ({
  className = "",
  itemClassName = "",
  iconClassName = "w-4 h-4",
}) => {
  if (SOCIALS.length === 0) return null;
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {SOCIALS.map(({ name, url }) => {
        const Icon = ICONS[name];
        if (!Icon) return null;
        return (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Cruzian on ${name}`}
            title={`Cruzian on ${name}`}
            className={itemClassName}
          >
            <Icon className={iconClassName} />
          </a>
        );
      })}
    </div>
  );
};
