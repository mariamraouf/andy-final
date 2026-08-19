import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, ShieldCheck, Phone, Mail, User, Building, Sparkles, Loader2, Lock } from "lucide-react";
import { showSuccess, showError } from "@/utils/toast";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedIndustry?: string;
}

export const AuditBookingModal: React.FC<ModalProps> = ({ isOpen, onClose, preselectedIndustry }) => {
  const [packageInterest, setPackageInterest] = useState("Growth — $1,500/month");
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Human Verification State
  const [num1, setNum1] = useState(4);
  const [num2, setNum2] = useState(3);
  const [userMathAnswer, setUserMathAnswer] = useState("");
  const [mathError, setMathError] = useState(false);

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 8) + 2;
    const n2 = Math.floor(Math.random() * 8) + 1;
    setNum1(n1);
    setNum2(n2);
    setUserMathAnswer("");
    setMathError(false);
  };

  useEffect(() => {
    if (isOpen) {
      generateCaptcha();
    }
  }, [isOpen]);

  useEffect(() => {
    if (preselectedIndustry) {
      setPackageInterest(preselectedIndustry);
    }
  }, [preselectedIndustry]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verify Math Answer
    const correctAnswer = num1 + num2;
    if (parseInt(userMathAnswer.trim(), 10) !== correctAnswer) {
      setMathError(true);
      showError("Human verification answer is incorrect. Please try again.");
      return;
    }

    setMathError(false);
    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xrpzrqkg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          source: "Pop-out Strategy Call Modal",
          packageInterest,
          businessName,
          ownerName,
          email,
          phone,
          message,
          verificationPassed: true,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        showSuccess("Strategy Call Request Received! Our team will reach out within 12 hours.");
      } else {
        const data = await response.json().catch(() => ({}));
        showError(data?.error || "There was an issue submitting your request. Please try again.");
      }
    } catch (err) {
      showError("Connection error. Please try again or call us at +1 888-619-3580.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={resetAndClose}>
      <DialogContent className="bg-white border border-slate-200 text-slate-900 max-w-xl p-6 sm:p-8 rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-mono text-xs uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-300 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Direct Strategy Consultation</span>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight">
            Claim Your Free Strategy Call
          </DialogTitle>
          <DialogDescription className="text-slate-600 text-sm">
            We will analyze your local market, inspect lead acquisition bottlenecks, and deliver a tailored growth plan.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#0B1B3D]">Your Strategy Call Is Queued!</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-amber-700">{ownerName || "Business Owner"}</strong>. Our team is reviewing <strong className="text-[#0B1B3D]">{businessName || "your business"}</strong> and will reach out within 12 hours.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1.5 text-left">
              <p className="font-bold text-[#0B1B3D]">What happens next?</p>
              <p>1. We conduct a local competitor and organic visibility audit.</p>
              <p>2. We draft a custom outbound and paid acquisition blueprint.</p>
              <p>3. We schedule your 45-minute growth consultation.</p>
            </div>
            <Button
              onClick={resetAndClose}
              className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-bold px-8 py-3 rounded-xl"
            >
              Done & Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase font-mono">
                Package / Service of Interest
              </label>
              <select
                value={packageInterest}
                onChange={(e) => setPackageInterest(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl p-3 focus:outline-none focus:border-amber-500"
              >
                <option value="Business Boost (One-Time) — $399">Business Boost (One-Time) — $399</option>
                <option value="Visibility — $750/month">Visibility — $750/month</option>
                <option value="Growth — $1,500/month">Growth — $1,500/month (Most Popular)</option>
                <option value="Dominance — Starting at $3,000/month">Dominance — Starting at $3,000/month</option>
                <option value="Custom Project / Add-On">Custom Project / Add-On</option>
                <option value="Not Sure — Need Recommendations">Not Sure — Need Recommendations</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase font-mono">
                  Company / Business Name
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <Input
                    required
                    placeholder="e.g. Coastal Roofing"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="pl-10 bg-slate-50 border-slate-200 text-slate-900 rounded-xl py-5 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase font-mono">
                  Your Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <Input
                    required
                    placeholder="e.g. Sarah Miller"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    className="pl-10 bg-slate-50 border-slate-200 text-slate-900 rounded-xl py-5 text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase font-mono">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <Input
                    required
                    type="email"
                    placeholder="you@business.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-slate-50 border-slate-200 text-slate-900 rounded-xl py-5 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase font-mono">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <Input
                    required
                    placeholder="(904) 555-0192"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-10 bg-slate-50 border-slate-200 text-slate-900 rounded-xl py-5 text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase font-mono">
                What is your primary marketing goal or bottleneck?
              </label>
              <Textarea
                placeholder="Tell us what you'd like to improve (e.g. consistent inbound inquiries, SEO rankings, automated follow-ups)..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-slate-50 border-slate-200 text-slate-900 rounded-xl text-sm h-20"
              />
            </div>

            {/* Human Verification Box */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#0B1B3D] uppercase font-mono flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Human Verification: What is {num1} + {num2}?</span>
                </label>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="text-[10px] text-slate-500 hover:text-[#0B1B3D] underline"
                >
                  New Question
                </button>
              </div>
              <Input
                required
                type="number"
                placeholder="Enter answer"
                value={userMathAnswer}
                onChange={(e) => setUserMathAnswer(e.target.value)}
                className={`bg-white border text-sm rounded-xl py-4 ${
                  mathError ? "border-rose-500 text-rose-600" : "border-slate-300 text-slate-900"
                }`}
              />
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#0B1B3D] hover:bg-slate-800 text-amber-400 font-black py-6 rounded-xl flex items-center justify-center gap-2 shadow-lg mt-2"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                  <span>Submitting to Strategy Team...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Request Free Strategy Call</span>
                </>
              )}
            </Button>

            <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1 font-medium pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Confidential. We never sell or spam client contact information.</span>
            </p>
          </form>
        )}

      </DialogContent>
    </Dialog>
  );
};