import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ArrowUp, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

interface NavbarProps {
  onOpenAudit: () => void;
}

const HINT_SEEN = "cruzian.menuHintSeen";

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const location = useLocation();

  /**
   * A one-time pointer at the menu button on phones.
   *
   * Not everyone reads a header as something to explore, and the pages that
   * sell hardest sit behind that button. It appears a moment after the page
   * settles rather than on top of the first impression, and never returns
   * once someone has opened the menu — a hint that keeps nagging stops being
   * help and becomes clutter.
   */
  useEffect(() => {
    let seen = false;
    try {
      seen = window.localStorage.getItem(HINT_SEEN) === "1";
    } catch {
      /* private browsing or blocked storage — show it, it is only a hint */
    }
    if (seen) return;
    const show = window.setTimeout(() => setShowHint(true), 1400);
    const hide = window.setTimeout(() => setShowHint(false), 13000);
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, []);

  const dismissHint = () => {
    setShowHint(false);
    try {
      window.localStorage.setItem(HINT_SEEN, "1");
    } catch {
      /* nothing to do — the hint simply shows again next visit */
    }
  };

  const toggleMenu = () => {
    dismissHint();
    setMobileMenuOpen((open) => !open);
  };

  // Personal services leads the list: it is the half of the business people
  // are least likely to know Cruzian does, so it gains most from being first.
  const navLinks = [
    { name: "Personal Services", path: "/personal-services" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/packages" },
    { name: "Industries", path: "/industries" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Points at the menu button, for anyone who would not have opened it */}
      {showHint && !mobileMenuOpen && (
        <button
          type="button"
          onClick={toggleMenu}
          className="lg:hidden absolute right-4 top-full mt-2.5 z-40 bg-amber-400 hover:bg-amber-300 text-[#0B1B3D] text-[12.5px] font-black px-3.5 py-2 rounded-lg shadow-lg flex items-center gap-1.5"
        >
          <span
            aria-hidden="true"
            className="absolute -top-1.5 right-7 w-3 h-3 bg-amber-400 rotate-45 rounded-[2px]"
          />
          {/* Only the arrow moves, so the tap target itself never shifts */}
          <ArrowUp className="w-3.5 h-3.5 animate-nudge" />
          Click here for all services
        </button>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo with Dark Pill for High Contrast */}
        {/* Smaller on phones, so the labelled menu button has room beside it */}
        <Link to="/" onClick={handleLinkClick} className="flex items-center group shrink-0">
          <Logo size="sm" variant="badge" className="lg:hidden" />
          <Logo size="md" variant="badge" className="hidden lg:inline-flex" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleLinkClick}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                isActive(link.path)
                  ? "text-[#0B1B3D] bg-amber-50 font-bold border border-amber-200"
                  : "text-slate-600 hover:text-[#0B1B3D] hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Phone & Strategy Call CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <Button
            onClick={onOpenAudit}
            className="bg-[#0B1B3D] hover:bg-[#132752] text-amber-400 hover:text-amber-300 font-black px-6 py-3 rounded-xl text-sm shadow-md flex items-center gap-2"
          >
            <span>Book a Free Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile Menu Button — labelled, because a bare icon hides the whole
            site behind a symbol people do not reliably read as a control */}
        <button
          onClick={toggleMenu}
          className="lg:hidden shrink-0 flex items-center gap-1.5 pl-3.5 pr-2.5 py-2 rounded-xl bg-[#0B1B3D] text-amber-400 font-bold text-[13px] shadow-md"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu: all services and pages"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span>{mobileMenuOpen ? "Close" : "All Services"}</span>
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <p className="text-[11px] font-mono font-bold uppercase tracking-[.16em] text-amber-700">
            Everything we do
          </p>
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive(link.path)
                    ? "bg-[#0B1B3D] text-amber-400 font-bold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-3">
            <a
              href="tel:18886193580"
              className="flex items-center gap-2 text-sm font-bold text-slate-800"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>+1 888-619-3580</span>
            </a>

            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full bg-[#0B1B3D] text-amber-400 font-bold py-3.5 rounded-xl text-sm shadow-md"
            >
              Book a Free Strategy Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};