"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { MessageCircle, FileText, ArrowRight, Sparkles } from "lucide-react";

const CategoriesCTASection: React.FC = () => {
    const ref = useRef(null);    return (
        <section
            ref={ref}
            className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0">
                {/* Gradient orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <div
      className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-blue-300 text-sm font-medium mb-8"
    >
                    <Sparkles className="w-4 h-4" />
                    Ready to Get Started?
                </div>

                {/* Heading */}
                <h2
      className="text-4xl lg:text-5xl font-bold text-white mb-6"
    >
                    Let&apos;s Make Your Software{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
                        Flawless
                    </span>
                </h2>

                {/* Description */}
                <p
      className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
    >
                    Partner with our ISTQB-certified experts and experience enterprise-grade
                    quality assurance that delivers results.
                </p>

                {/* CTA Buttons */}
                <div
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
                    {/* Primary CTA */}
                    <Link
                        href="/contact-us"
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <MessageCircle className="relative w-5 h-5" />
                        <span className="relative">Talk to Expert</span>
                        <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Secondary CTA */}
                    <Link
                        href="/contact-us"
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
                    >
                        <FileText className="w-5 h-5" />
                        <span>Request Quote</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Trust indicators */}
                <div
      className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400"
    >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <span>24h Response Time</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-violet-400 rounded-full" />
                        <span>No Commitment Required</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesCTASection;
