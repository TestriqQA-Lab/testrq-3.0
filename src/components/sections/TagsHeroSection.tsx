"use client";

import React from "react";
import { FaTags, FaSearch, FaArrowLeft, FaBookOpen } from "react-icons/fa";
import Link from "next/link";

interface TagsHeroSectionProps {
  tagCount: number;
}

const TagsHeroSection: React.FC<TagsHeroSectionProps> = ({ tagCount }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569-13.431-30-30-30v30h30z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-blue-200">
            <Link 
              href="/blog" 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <FaBookOpen className="w-3 h-3" />
              Blog
            </Link>
            <span>/</span>
            <span className="text-white font-medium">All Tags</span>
          </nav>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          {/* Main Icon */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl">
                <FaTags className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-gray-900">{tagCount}</span>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Explore All Tags
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Discover {tagCount} carefully curated tags covering every aspect of 
            <span className="font-semibold text-white"> software testing</span> and 
            <span className="font-semibold text-white"> quality assurance</span>
          </p>

          {/* Description */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-10">
            <p className="text-blue-100 text-lg leading-relaxed">
              Navigate through our comprehensive collection of testing topics, methodologies, tools, and frameworks. 
              Each tag represents a gateway to expert insights, practical tutorials, and industry best practices 
              crafted by our <span className="font-semibold text-white">ISTQB certified experts</span>.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blog"
              className="flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <FaArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>
            <Link
              href="/blog/categories"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaSearch className="w-5 h-5" />
              <span>Browse Categories</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">{tagCount}+</div>
              <div className="text-blue-200">Unique Tags</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200">Expert Articles</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-200">Testing Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TagsHeroSection;

