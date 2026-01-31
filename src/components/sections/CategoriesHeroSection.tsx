"use client";

import Link from "next/link";
import { FaSearch, FaBookOpen, FaUsers, FaRocket, FaChartLine, FaAward, FaShieldAlt, FaTrophy, FaHome, FaChevronRight } from "react-icons/fa";
import { getTotalPostCount, getTotalCategoryCount } from "@/lib/wordpress-graphql";
import { useEffect, useState } from "react";

// Custom hook for incrementing animation
const useCountUp = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (end === start) return;

    const increment = (end - start) / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, start]);

  return count;
};

const CategoriesHeroSection: React.FC = () => {
  const [totalArticles, setTotalArticles] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Animated counters
  const animatedArticles = useCountUp(totalArticles, 2500);
  const animatedCategories = useCountUp(totalCategories, 2500);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const articlesCount = await getTotalPostCount();
        const categoriesCount = await getTotalCategoryCount();

        setTotalArticles(articlesCount);
        setTotalCategories(categoriesCount);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching counts:", error);
        setTotalArticles(500);
        setTotalCategories(15);
        setIsLoaded(true);
      }
    };

    fetchCounts();
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden flex items-center">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Scan line effect */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-scan" />
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-violet-400 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center mb-8">
          <ol className="flex items-center gap-2 text-sm">
            {/* Home */}
            <li>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
              >
                <FaHome className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Home</span>
              </Link>
            </li>

            {/* Separator */}
            <li>
              <FaChevronRight className="w-3 h-3 text-white/20" />
            </li>

            {/* Blog */}
            <li>
              <Link
                href="/blog"
                className="text-white/60 hover:text-white transition-colors font-medium"
              >
                Blog
              </Link>
            </li>

            {/* Separator */}
            <li>
              <FaChevronRight className="w-3 h-3 text-white/20" />
            </li>

            {/* Current Page */}
            <li>
              <span className="text-white font-semibold">
                Categories
              </span>
            </li>
          </ol>
        </nav>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">

          {/* Left: Content Section */}
          <div className="text-center lg:text-left space-y-8 col-span-7">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 w-fit mx-auto lg:mx-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-lg opacity-50" />
                <div className="relative px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center gap-2 border border-blue-400/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                  </span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Knowledge Base</span>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                Explore Our{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 animate-gradient">
                    Testing Expertise
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C50 4 100 2 150 6C200 10 250 8 298 4" stroke="url(#gradient-line)" strokeWidth="3" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#60A5FA" />
                        <stop offset="50%" stopColor="#818CF8" />
                        <stop offset="100%" stopColor="#A78BFA" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Access comprehensive guides, proven methodologies, and industry best practices
                across all areas of software testing and quality assurance.
              </p>
            </div>

            {/* Feature List with Futuristic Design */}
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { text: 'Expert-Verified Content', icon: '✓' },
                { text: 'Real-World Case Studies', icon: '✓' },
                { text: 'Step-by-Step Tutorials', icon: '✓' },
                { text: 'Industry Standards', icon: '✓' }
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity" />
                  <div className="relative flex items-center gap-3 px-4 py-3 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-xl hover:border-blue-500/30 transition-all">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">{item.icon}</span>
                    </div>
                    <span className="font-semibold text-slate-200 text-sm">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#categories"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </span>
                <span className="relative">Browse Categories</span>
                <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Futuristic Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 col-span-5">
            {/* Article Count */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 lg:p-8 hover:border-blue-500/30 transition-all duration-500">
                <div className="flex flex-col h-full">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl blur-md opacity-40" />
                    <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                      <FaBookOpen className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className={`text-4xl lg:text-5xl font-black text-white mb-2 ${!isLoaded ? 'animate-pulse' : ''}`}>
                    {isLoaded ? formatNumber(animatedArticles) : '—'}
                  </div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Articles</div>
                  <div className="text-xs text-slate-500">Comprehensive guides</div>
                </div>
              </div>
            </div>

            {/* Categories Count */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-violet-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 lg:p-8 hover:border-violet-500/30 transition-all duration-500">
                <div className="flex flex-col h-full">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl blur-md opacity-40" />
                    <div className="relative w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <FaChartLine className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className={`text-4xl lg:text-5xl font-black text-white mb-2 ${!isLoaded ? 'animate-pulse' : ''}`}>
                    {isLoaded ? formatNumber(animatedCategories) : '—'}
                  </div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Categories</div>
                  <div className="text-xs text-slate-500">Specialized topics</div>
                </div>
              </div>
            </div>

            {/* Readers */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 lg:p-8 hover:border-emerald-500/30 transition-all duration-500">
                <div className="flex flex-col h-full">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl blur-md opacity-40" />
                    <div className="relative w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                      <FaUsers className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-white mb-2">50K+</div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Readers</div>
                  <div className="text-xs text-slate-500">Active monthly users</div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/30 to-orange-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 lg:p-8 hover:border-amber-500/30 transition-all duration-500">
                <div className="flex flex-col h-full">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl blur-md opacity-40" />
                    <div className="relative w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                      <FaRocket className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-white mb-2">100+</div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Tools</div>
                  <div className="text-xs text-slate-500">Technologies covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Futuristic Bottom Card */}
        <div className="relative">
          {/* Multi-layer glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-violet-500/20 rounded-[3rem] blur-3xl" />

          <div className="relative bg-gradient-to-br from-slate-900/80 via-blue-900/40 to-slate-900/80 backdrop-blur-2xl rounded-[2.5rem] border border-slate-700/50 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/20 via-indigo-500/10 to-transparent rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-violet-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-float-delayed" />

            <div className="relative z-10 p-8 lg:p-12">
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-center text-white">

                {/* Left: Main Message */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-xl blur-md opacity-50" />
                      <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                        <FaAward className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold">Enterprise-Grade Quality</h3>
                  </div>

                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    All content is created and verified by ISTQB-certified professionals with extensive
                    experience in Fortune 500 companies. We maintain the highest standards of accuracy
                    and practical applicability.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: 'Updated Weekly', color: 'green' },
                      { label: '100% Free Access', color: 'blue' },
                      { label: 'Expert Support', color: 'violet' }
                    ].map((badge, idx) => (
                      <div key={idx} className="relative group">
                        <div className={`absolute -inset-0.5 bg-${badge.color}-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity`} />
                        <div className="relative flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50">
                          <div className={`w-2 h-2 bg-${badge.color}-400 rounded-full animate-pulse`} />
                          <span className="text-sm font-semibold">{badge.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: 16+ Years Highlight */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl" />
                  <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
                    <div className="text-center mb-6">
                      <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-2">
                        16+
                      </div>
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-wide">Years of Service</div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                        <span className="text-slate-400">Client Satisfaction</span>
                        <span className="font-bold text-white">99%</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                        <span className="text-slate-400">Industry Awards</span>
                        <span className="font-bold text-white">12+</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-slate-400">Projects Delivered</span>
                        <span className="font-bold text-white">500+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-100px) translateX(50px); opacity: 1; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default CategoriesHeroSection;