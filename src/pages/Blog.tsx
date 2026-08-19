import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPostsData } from "@/data/blogData";

interface BlogProps {
  onOpenAudit: () => void;
}

export const Blog: React.FC<BlogProps> = ({ onOpenAudit }) => {
  return (
    <div className="bg-white py-16 text-slate-900 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-[#0B1B3D] font-mono text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span>Cruzian Growth Insights</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#0B1B3D] tracking-tight">
            Marketing & Growth Playbooks
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Practical strategies for small and mid-sized businesses looking to capture local market share.
          </p>
        </div>

        {/* 2 Featured Blog Posts */}
        <div className="grid md:grid-cols-2 gap-10">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <Link to={`/blog/${post.id}`} className="block relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#0B1B3D] text-amber-400 text-xs font-mono font-bold px-3 py-1.5 rounded-full shadow-md">
                    {post.category}
                  </div>
                </Link>

                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link to={`/blog/${post.id}`} className="block">
                    <h2 className="text-2xl font-black text-[#0B1B3D] group-hover:text-amber-600 transition-colors leading-snug">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="pt-3 border-t border-slate-200 space-y-2">
                    <p className="text-xs font-bold text-[#0B1B3D] uppercase font-mono">Key Takeaways:</p>
                    <div className="space-y-1.5">
                      {post.content.sections.map((sec, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{sec.heading}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 flex flex-col sm:flex-row gap-3">
                <Link to={`/blog/${post.id}`} className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full bg-white hover:bg-slate-100 text-[#0B1B3D] font-bold py-5 rounded-xl text-xs flex items-center justify-center gap-2 border-slate-300"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>

                <Button
                  onClick={onOpenAudit}
                  className="bg-[#0B1B3D] hover:bg-slate-800 text-amber-400 font-bold py-5 rounded-xl text-xs px-5"
                >
                  Apply Strategy
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="bg-[#0B1B3D] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black">
            Want a Custom Growth Roadmap for Your Market?
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Book a free 45-minute strategy call. We'll identify your highest-leverage opportunities and show you how to execute.
          </p>
          <Button
            onClick={onOpenAudit}
            className="bg-amber-500 hover:bg-amber-600 text-[#0B1B3D] font-black px-8 py-6 rounded-xl text-base shadow-lg"
          >
            Book a Free Strategy Call
          </Button>
        </div>

      </div>
    </div>
  );
};