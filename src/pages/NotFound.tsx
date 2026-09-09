import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="Page Not Found | Cruzian"
        description="That page moved, or never existed. Head back to the homepage or book a free 45-minute growth audit."
        canonical="https://www.thecruzian.com/"
        noindex
      />
      <section className="bg-[#0B1B3D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl">
            <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Error 404
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
              That page moved, or never existed.
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Either way, you&apos;re one click from what you came for. Most people
              land here looking for what we actually do, or to book the free
              45-minute audit.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/">
                <Button className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black px-7 py-6 rounded-xl text-base flex items-center gap-2">
                  <span>Back to home</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  className="border-amber-500/45 bg-transparent text-amber-400 hover:bg-amber-500/10 hover:text-amber-300 font-bold px-7 py-6 rounded-xl text-base"
                >
                  See the services
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-amber-500/45 bg-transparent text-amber-400 hover:bg-amber-500/10 hover:text-amber-300 font-bold px-7 py-6 rounded-xl text-base"
                >
                  Book the free audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
