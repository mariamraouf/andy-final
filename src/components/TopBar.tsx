import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT } from "@/config/site";
import { SocialIcons } from "@/components/SocialIcons";
import { trackPhoneClick, trackEmailClick } from "@/utils/analytics";

// Utility bar that sits above the navbar on every page.
// The phone number is the loudest element here on purpose: it is the fastest
// path to a conversation, and on mobile it stays visible rather than being
// buried in the hamburger menu.
export const TopBar: React.FC = () => (
  <div className="bg-[#0B1B3D] text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3">
      {/* Phone — primary, always visible */}
      <a
        href={CONTACT.phoneHref}
        onClick={trackPhoneClick}
        className="flex items-center gap-2 group shrink-0"
      >
        <span className="w-7 h-7 rounded-full bg-amber-500 text-[#0B1B3D] flex items-center justify-center shrink-0">
          <Phone className="w-3.5 h-3.5" />
        </span>
        <span className="flex flex-col leading-none">
          <span className="text-[9px] uppercase tracking-widest text-amber-400 font-bold hidden sm:block">
            Call us
          </span>
          <span className="text-sm sm:text-base font-black tracking-tight text-white group-hover:text-amber-300 transition-colors">
            {CONTACT.phoneDisplay}
          </span>
        </span>
      </a>

      {/* Email + location */}
      <div className="hidden md:flex items-center gap-5 text-xs">
        <a
          href={CONTACT.emailHref}
          onClick={trackEmailClick}
          className="flex items-center gap-1.5 font-semibold text-slate-200 hover:text-amber-300 transition-colors"
        >
          <Mail className="w-3.5 h-3.5 text-amber-400" />
          <span>{CONTACT.email}</span>
        </a>
        <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>{CONTACT.location}</span>
        </span>
      </div>

      {/* Socials */}
      <div className="flex items-center gap-3 shrink-0">
        <a
          href={CONTACT.emailHref}
          aria-label="Email Cruzian"
          className="md:hidden text-slate-200 hover:text-amber-300"
        >
          <Mail className="w-4 h-4" />
        </a>
        <SocialIcons
          itemClassName="w-7 h-7 rounded-full bg-white/10 hover:bg-amber-500 text-slate-200 hover:text-[#0B1B3D] flex items-center justify-center transition-colors"
          iconClassName="w-3.5 h-3.5"
        />
      </div>
    </div>
  </div>
);
