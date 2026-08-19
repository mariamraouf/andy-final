import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export const Footer: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <footer className="bg-[#0B1B3D] text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" onClick={handleScrollTop} className="inline-block">
              <Logo size="lg" variant="plain" />
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm font-normal">
              We help overlooked businesses become impossible to ignore. Growth strategy, digital marketing, and brand authority built for ambitious local businesses.
            </p>

            <div className="pt-2">
              <span className="inline-block text-amber-400 font-mono text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">
                Growth. Authority. Results.
              </span>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 font-medium">
              <li><Link to="/about" onClick={handleScrollTop} className="hover:text-amber-400 transition-colors">About</Link></li>
              <li><Link to="/services" onClick={handleScrollTop} className="hover:text-amber-400 transition-colors">Services</Link></li>
              <li><Link to="/packages" onClick={handleScrollTop} className="hover:text-amber-400 transition-colors">Packages</Link></li>
              <li><Link to="/industries" onClick={handleScrollTop} className="hover:text-amber-400 transition-colors">Industries We Serve</Link></li>
              <li><Link to="/success-stories" onClick={handleScrollTop} className="hover:text-amber-400 transition-colors">Success Stories</Link></li>
              <li><Link to="/blog" onClick={handleScrollTop} className="hover:text-amber-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" onClick={handleScrollTop} className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* All 9 Services */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
              Services
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300 font-medium">
              <li><Link to="/services#lead-generation" className="hover:text-amber-400 transition-colors">Lead Generation</Link></li>
              <li><Link to="/services#sales-systems" className="hover:text-amber-400 transition-colors">Sales Systems</Link></li>
              <li><Link to="/services#digital-marketing" className="hover:text-amber-400 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services#brand-authority" className="hover:text-amber-400 transition-colors">Brand Authority</Link></li>
              <li><Link to="/services#website-design" className="hover:text-amber-400 transition-colors">Website Design</Link></li>
              <li><Link to="/services#seo" className="hover:text-amber-400 transition-colors">SEO</Link></li>
              <li><Link to="/services#paid-advertising" className="hover:text-amber-400 transition-colors">Paid Advertising</Link></li>
              <li><Link to="/services#social-media" className="hover:text-amber-400 transition-colors">Social Media Management</Link></li>
              <li><Link to="/services#business-consulting" className="hover:text-amber-400 transition-colors">Business Consulting</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="space-y-1">
                <span className="text-xs text-slate-400 block font-mono">Email</span>
                <a href="mailto:hello@cruzian.com" className="font-bold text-white hover:text-amber-400 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>hello@cruzian.com</span>
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-slate-400 block font-mono">Phone</span>
                <a href="tel:18886193580" className="font-bold text-white hover:text-amber-400 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>+1 888-619-3580</span>
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-slate-400 block font-mono">Headquarters</span>
                <p className="text-xs text-slate-300 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Jacksonville, FL • Serving Clients Nationwide</span>
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={handleScrollTop}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  <span>Book a Strategy Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Cruzian. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" onClick={handleScrollTop} className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" onClick={handleScrollTop} className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};