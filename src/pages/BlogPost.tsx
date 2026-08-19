import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { blogPostsData } from "@/data/blogData";
import { ArrowLeft, Calendar, Clock, User, CheckCircle2, Sparkles, ArrowRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPostProps {
  onOpenAudit: () => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ onOpenAudit }) => {
  const { id } = useParams<{ id: string }>();
  const post = blogPostsData.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="bg-white text-slate-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Link */}
        <div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-<dyad-write path="src/pages/BlogPost.tsx" description="Dedicated full article reader page">
import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { blogPostsData } from "@/data/blogData";
import { ArrowLeft, Calendar, Clock, User, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPostProps {
  onOpenAudit: () => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ onOpenAudit }) => {
  const { id } = useParams<{ id: string }>();
  const post = blogPostsData.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="bg-white text-slate-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Link */}
        <div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#0B1B3D] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-amber-600" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-[#0B1B3D] border border-amber-300 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#0B1B3D] tracking-tight leading-[1.2]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 font-mono border-b border-slate-200 pb-6">
            <span className="flex items-center gap-1.5 font-bold text-slate-700">
              <User className="w-4 h-4 text-amber-600" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-600" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-600" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Cover Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-72 sm:h-96">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="space-y-10 text-slate-700 leading-relaxed text-base sm:text-lg">
          {/* Introduction Quote / Lead */}
          <div className="p-6 sm:p-8 bg-slate-50 border-l-4 border-amber-500 rounded-r-2xl text-slate-800 font-medium text-lg leading-relaxed shadow-xs">
            {post.content.introduction}
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1B3D] tracking-tight">
                  {section.heading}
                </h2>
                
                {section.body.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-slate-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 mt-4">
                    <p className="text-xs font-mono font-bold uppercase text-[#0B1B3D]">Key Implementation Steps:</p>
                    <div className="space-y-2">
                      {section.bulletPoints.map((bp, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3 text-sm text-slate-800 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="pt-6 border-t border-slate-200 space-y-3">
            <h3 className="text-xl font-bold text-[#0B1B3D]">Summary & Next Steps</h3>
            <p className="text-slate-600 font-normal">
              {post.content.conclusion}
            </p>
          </div>
        </div>

        {/* Strategy Consultation Box */}
        <div className="bg-[#0B1B3D] text-white rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Ready for Implementation?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Apply This Exact Blueprint to Your Business
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Book a free 45-minute strategy call with our team. We'll audit your local presence and configure an automated pipeline tailored for your business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={onOpenAudit}
              className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black px-8 py-6 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Book a Free Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Link to="/blog">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 font-bold px-6 py-6 rounded-xl text-sm"
              >
                Explore More Articles
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
};