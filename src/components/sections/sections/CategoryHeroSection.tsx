"use client";

import React from "react";
import { FaArrowLeft, FaTags, FaRss, FaBell } from "react-icons/fa";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  postCount: number;
  subscribers: number;
  tags: string[];
  featuredTools: string[];
}

interface CategoryHeroSectionProps {
  category: Category;
}

const CategoryHeroSection: React.FC<CategoryHeroSectionProps> = ({ category }) => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white py-16 px-8 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 bg-opacity-20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 bg-opacity-15 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-600 bg-opacity-10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-blue-200 mb-8">
          <Link href="/blog" className="flex items-center gap-2 hover:text-white transition-colors">
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          <span>/</span>
          <span className="text-gray-400">Categories</span>
          <span>/</span>
          <span className="text-white">{category.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Category Icon and Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-2xl`}>
                {category.icon}
              </div>
              <span className={`px-4 py-2 bg-gradient-to-r ${category.color} text-white text-sm font-semibold rounded-full`}>
                {category.name} Category
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {category.name}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Insights
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {category.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300 mb-1">
                  {category.postCount}
                </div>
                <div className="text-gray-400 text-sm">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300 mb-1">
                  {category.subscribers.toLocaleString()}
                </div>
                <div className="text-gray-400 text-sm">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300 mb-1">
                  {category.tags.length}
                </div>
                <div className="text-gray-400 text-sm">Topics</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-3 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
                <FaRss className="w-4 h-4" />
                Subscribe to Category
              </button>
              <button className="flex items-center justify-center gap-3 px-8 py-3 border-2 border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-colors">
                <FaBell className="w-4 h-4" />
                Get Notifications
              </button>
            </div>
          </div>

          {/* Right Content - Category Visualization */}
          <div className="relative">
            {/* Main Category Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="text-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-blue-200 text-sm">Expert Knowledge Hub</p>
              </div>

              {/* Featured Tools */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 text-center">Featured Tools & Frameworks</h4>
                <div className="grid grid-cols-2 gap-2">
                  {category.featuredTools.slice(0, 4).map((tool, index) => (
                    <div
                      key={index}
                      className="bg-white bg-opacity-10 text-blue-200 text-xs px-3 py-2 rounded-lg text-center border border-white border-opacity-20"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white bg-opacity-10 rounded-lg p-3 border border-white border-opacity-20">
                  <div className="text-lg font-bold text-white">{category.postCount}</div>
                  <div className="text-xs text-blue-200">Articles</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-3 border border-white border-opacity-20">
                  <div className="text-lg font-bold text-white">{(category.subscribers / 1000).toFixed(1)}K</div>
                  <div className="text-xs text-blue-200">Followers</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500 bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm border border-yellow-400 border-opacity-30">
              <span className="text-yellow-300 text-2xl">⭐</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-400 border-opacity-30">
              <span className="text-green-300 text-lg">✓</span>
            </div>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="mt-12 pt-8 border-t border-white border-opacity-20">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-blue-200 font-medium">
              <FaTags className="w-4 h-4" />
              <span>Popular Topics:</span>
            </div>
            {category.tags.map((tag, index) => (
              <Link
                key={index}
                href={`/blog/tag/${tag.toLowerCase().replace(' ', '-')}`}
                className="px-4 py-2 bg-white bg-opacity-10 text-blue-200 text-sm rounded-full hover:bg-opacity-20 transition-colors border border-white border-opacity-20"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Category Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-blue-200">Explore other categories:</span>
            <div className="flex gap-3">
              {[
                { name: "Performance", icon: "⚡", slug: "performance-testing" },
                { name: "Security", icon: "🛡️", slug: "security-testing" },
                { name: "Mobile", icon: "📱", slug: "mobile-testing" },
                { name: "API", icon: "🔗", slug: "api-testing" }
              ].filter(cat => cat.slug !== category.id).slice(0, 3).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog/category/${cat.slug}`}
                  className="flex items-center gap-2 px-3 py-2 bg-white bg-opacity-10 text-blue-200 text-sm rounded-lg hover:bg-opacity-20 transition-colors border border-white border-opacity-20"
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-blue-200 text-sm">
            Last updated: Today
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHeroSection;

