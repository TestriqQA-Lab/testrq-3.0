"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaClock, FaUser, FaCalendar, FaBookOpen, FaChartLine, FaAward, FaCheckCircle, FaShare, FaBookmark, FaPrint } from "react-icons/fa";

const BlogDemoHeroSection = () => {
    const scrollToContent = () => {
        const element = document.getElementById("introduction");
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };
    return (
        <>
            {/* Hero Section with Banner Image */}
            <section className="relative bg-slate-900 overflow-hidden">
                {/* Large Banner Image with Overlay */}
                <div className="relative h-[500px] lg:h-[600px]">
                    {/* Replace with actual blog post image */}
                    <Image
                        src="/blog-demo/hero_performance_dashboard_1769850360523.png"
                        alt="Performance Testing Guide"
                        fill
                        className="object-cover"
                        priority
                    />


                    {/* Sophisticated Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent" />

                    {/* Subtle Pattern Overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255, 255, 255) 1px, transparent 0)`,
                            backgroundSize: '32px 32px',
                        }}
                    />

                    {/* Content Over Image */}
                    <div className="relative h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Top Navigation Bar */}
                        <div className="absolute top-0 left-0 right-0 z-10">
                            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
                                <div className="flex items-center justify-between">
                                    <Link
                                        href="/blog"
                                        className="inline-flex items-center gap-2 text-white hover:text-blue-600 transition-colors"
                                    >
                                        <FaArrowLeft className="w-4 h-4" />
                                        <span className="text-sm font-semibold">Back to Resources</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col h-full pt-20">
                            <div className="max-w-4xl">
                                {/* Category & Status Badges */}
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <span className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg backdrop-blur-sm">
                                        Performance Testing
                                    </span>
                                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-sm font-semibold rounded-lg border border-white/20">
                                        Expert Guide
                                    </span>
                                    <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-lg">
                                        <FaCheckCircle className="w-3 h-3" />
                                        <span>Verified by ISTQB Experts</span>
                                    </div>
                                </div>

                                {/* Main Title */}
                                <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6 drop-shadow-2xl">
                                    The Complete Guide to Performance Testing
                                </h1>

                                {/* Description */}
                                <p className="text-lg lg:text-xl text-slate-200 leading-relaxed mb-8 max-w-3xl drop-shadow-lg">
                                    Master enterprise-grade performance testing with proven methodologies, industry best practices,
                                    and real-world strategies trusted by Fortune 500 companies.
                                </p>

                                {/* Author & Meta */}
                                <div className="flex flex-wrap items-center gap-6 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center ring-2 ring-white/30">
                                            <span className="text-white font-bold">TQ</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">Testriq QA Team</div>
                                            <div className="text-xs text-slate-300">ISTQB Certified Professionals</div>
                                        </div>
                                    </div>

                                    <div className="hidden sm:block w-px h-10 bg-white/20" />

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                                        <div className="flex items-center gap-2">
                                            <FaCalendar className="w-4 h-4 text-slate-400" />
                                            <span>January 31, 2026</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaClock className="w-4 h-4 text-slate-400" />
                                            <span>21 min read</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaBookOpen className="w-4 h-4 text-slate-400" />
                                            <span>8 Chapters</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div>
                                    <button
                                        onClick={scrollToContent}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all shadow-xl cursor-pointer"
                                    >
                                        <FaBookOpen className="w-5 h-5" />
                                        <span>Start Reading</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section Below Hero */}
            <section className="bg-gradient-to-b from-white via-slate-50 to-white pt-24 lg:pt-32 pb-16">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Main Content Area */}
                        <div className="lg:col-span-8">
                            {/* What You'll Learn */}
                            <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 lg:p-10 mb-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                                        <FaBookOpen className="w-5 h-5 text-white" />
                                    </div>
                                    What You&apos;ll Learn
                                </h2>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        'Load Testing Fundamentals & Methodology',
                                        'Performance Testing Tool Selection',
                                        'Metrics Analysis & Interpretation',
                                        'Best Practices for Enterprise Apps',
                                        'Scalability Planning & Strategy',
                                        'Real-World Case Studies',
                                        'Common Pitfalls & Solutions',
                                        'Advanced Optimization Techniques'
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                                            <FaCheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-700 font-medium text-sm leading-relaxed">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* Expertise Level */}
                            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sticky top-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                                    <FaAward className="w-5 h-5 text-blue-600" />
                                    Expertise Breakdown
                                </h3>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-slate-700">Beginner</span>
                                            <span className="text-sm font-bold text-slate-900">40%</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full w-[40%] bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-slate-700">Intermediate</span>
                                            <span className="text-sm font-bold text-slate-900">45%</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full w-[45%] bg-gradient-to-r from-violet-500 to-violet-600 rounded-full" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-slate-700">Advanced</span>
                                            <span className="text-sm font-bold text-slate-900">15%</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full w-[15%] bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full" />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-5 border-t border-slate-200">
                                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                                        <div className="flex items-start gap-3">
                                            <FaAward className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-900 mb-1">
                                                    Industry Certified
                                                </h4>
                                                <p className="text-xs text-slate-600 leading-relaxed">
                                                    Reviewed by ISTQB-certified professionals with 16+ years of experience
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Proof */}
                            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-5">Article Stats</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                                        <span className="text-sm text-slate-600">Total Readers</span>
                                        <span className="text-lg font-bold text-slate-900">2,431</span>
                                    </div>
                                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                                        <span className="text-sm text-slate-600">Shares</span>
                                        <span className="text-lg font-bold text-slate-900">156</span>
                                    </div>
                                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                                        <span className="text-sm text-slate-600">Bookmarks</span>
                                        <span className="text-lg font-bold text-slate-900">89</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-slate-600">Average Rating</span>
                                        <div className="flex items-center gap-2">
                                            <div className="flex gap-0.5">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <svg key={star} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <span className="text-lg font-bold text-slate-900">4.8</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDemoHeroSection;