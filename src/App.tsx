import React, { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuditBookingModal } from "@/components/AuditBookingModal";
import { ScrollToTop } from "@/components/ScrollToTop";
import { usePageTracking } from "@/hooks/usePageTracking";

// Pages
import Index from "@/pages/Index";
import { About } from "@/pages/About";
import { Services } from "@/pages/Services";
import { PackagesPage } from "@/pages/PackagesPage";
import { Industries } from "@/pages/Industries";
import { CalculatorPage } from "@/pages/CalculatorPage";
import { Blog } from "@/pages/Blog";
import { BlogPost } from "@/pages/BlogPost";
import { Contact } from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

// Ensure clean basename without trailing slash or relative dots
const rawBase = import.meta.env.BASE_URL || "/";
const cleanBasename =
  rawBase === "./" || rawBase === "." ? "/" : rawBase.replace(/\/$/, "") || "/";

const AppContent = () => {
  usePageTracking();
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);

  const handleOpenAudit = (item?: string) => {
    if (item) {
      setSelectedItem(item);
    }
    setIsAuditOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      <ScrollToTop />
      {/* Header Navbar */}
      <Navbar onOpenAudit={() => handleOpenAudit()} />

      {/* Route Content Pages */}
      <main className="flex-1 bg-white">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About onOpenAudit={() => handleOpenAudit()} />} />
          <Route path="/services" element={<Services onOpenAudit={(pkg) => handleOpenAudit(pkg)} />} />
          <Route path="/packages" element={<PackagesPage onOpenAudit={(pkg) => handleOpenAudit(pkg)} />} />
          <Route path="/industries" element={<Industries onOpenAudit={(ind) => handleOpenAudit(ind)} />} />
          <Route path="/calculator" element={<CalculatorPage onOpenAudit={() => handleOpenAudit()} />} />
          <Route path="/blog" element={<Blog onOpenAudit={() => handleOpenAudit()} />} />
          <Route path="/blog/:id" element={<BlogPost onOpenAudit={() => handleOpenAudit()} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Strategy Call Booking Dialog Modal */}
      <AuditBookingModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        preselectedIndustry={selectedItem}
      />
    </div>
  );
};

// Providers shared by the browser entry and the build-time prerender entry.
// `helmetContext` is only passed on the server.
export const AppProviders = ({
  children,
  helmetContext,
}: {
  children: React.ReactNode;
  helmetContext?: Record<string, unknown>;
}) => (
  <HelmetProvider context={helmetContext}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export { AppContent, cleanBasename };

const App = () => {
  return (
    <AppProviders>
      <BrowserRouter basename={cleanBasename === "/" ? undefined : cleanBasename}>
        <AppContent />
      </BrowserRouter>
    </AppProviders>
  );
};

export default App;