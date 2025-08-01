"use client";

import React from "react";
import { FaSearch, FaRss, FaBell } from "react-icons/fa";

const BlogHeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#0B0F1C] via-[#112042] to-[#0B0F1C] text-white py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Blur Circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 bg-opacity-30 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-400 bg-opacity-25 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500 bg-opacity-20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Tagline */}
        <span className="inline-block bg-blue-600/10 text-blue-300 text-sm px-6 py-2 rounded-full mb-6 border border-blue-500/20 tracking-wide">
          Expert QA Insights & Best Practices
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Latest Insights in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Software Testing
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Discover expert insights on test automation, performance testing,
          security testing, mobile app testing, and QA best practices to
          accelerate your testing excellence.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search testing topics, tools, or best practices..."
              className="w-full pl-12 pr-32 py-4 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-medium transition">
              Search
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
            <FaRss className="w-4 h-4" />
            Subscribe to RSS
          </button>
          <button className="flex items-center justify-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-300 hover:bg-cyan-600 hover:text-white font-semibold rounded-lg transition">
            <FaBell className="w-4 h-4" />
            Get Notifications
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "200+", label: "Expert Articles" },
            { number: "50K+", label: "Monthly Readers" },
            { number: "15+", label: "Testing Categories" },
            { number: "Weekly", label: "New Content" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-300 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Icons */}
      <div className="hidden lg:block absolute top-1/4 left-10">
        <div className="w-16 h-16 bg-blue-600/20 rounded-lg border border-blue-400/30 backdrop-blur-sm flex items-center justify-center">
          <span className="text-blue-300 font-bold text-lg">QA</span>
        </div>
      </div>

      <div className="hidden lg:block absolute top-1/3 right-10">
        <div className="w-12 h-12 bg-cyan-500/20 rounded-full border border-cyan-400/30 backdrop-blur-sm flex items-center justify-center">
          <span className="text-cyan-300 text-sm">✓</span>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-1/4 left-1/4">
        <div className="w-14 h-14 bg-purple-500/20 rounded-lg border border-purple-400/30 backdrop-blur-sm flex items-center justify-center">
          <span className="text-purple-300 text-xl">🔧</span>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;
