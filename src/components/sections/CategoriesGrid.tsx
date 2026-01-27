"use client";

import React, { useState } from "react";
import { FaArrowRight, FaSearch, FaFilter } from "react-icons/fa";
import Link from "next/link";
import { Category } from "@/lib/wordpress-data-adapter";
import { decodeHtmlEntities } from "@/lib/utils";

interface CategoriesGridProps {
  categories: Category[];
}

const CategoriesGrid: React.FC<CategoriesGridProps> = ({ categories }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const sortOptions = [
    { value: "popular", label: "Most Popular" },
    { value: "posts", label: "Most Articles" },
    { value: "name", label: "Alphabetical" },
    { value: "subscribers", label: "Most Subscribers" }
  ];

  // Filter categories based on search term
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Function to clean and render HTML content properly
  const renderContent = (content: string) => {
    // Clean up the content and fix common WordPress issues
    const cleanContent = decodeHtmlEntities(content)
      // Remove excessive line breaks and normalize spacing
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      // Fix image tags to ensure proper src attributes
      .replace(/<img([^>]*?)src=["']([^"']*?)["']([^>]*?)>/gi, (match, before, src, after) => {
        // Ensure the image has proper attributes
        const altMatch = match.match(/alt=["']([^"']*?)["']/i);
        const alt = altMatch ? altMatch[1] : '';
        return `<img${before}src="${src}"${after} alt="${alt}" style="max-width: 100%; height: auto; margin: 1rem 0; border-radius: 8px;">`;
      })
      // Fix paragraph spacing
      .replace(/<p>/g, '<p style="margin-bottom: 1rem; line-height: 1.7;">')
      // Fix heading spacing
      .replace(/<h1>/g, '<h1 style="font-size: 2rem; font-weight: bold; margin: 2rem 0 1rem 0; color: #1f2937;">')
      .replace(/<h2>/g, '<h2 style="font-size: 1.75rem; font-weight: bold; margin: 1.75rem 0 1rem 0; color: #1f2937;">')
      .replace(/<h3>/g, '<h3 style="font-size: 1.5rem; font-weight: bold; margin: 1.5rem 0 0.75rem 0; color: #1f2937;">')
      .replace(/<h4>/g, '<h4 style="font-size: 1.25rem; font-weight: bold; margin: 1.25rem 0 0.75rem 0; color: #1f2937;">')
      .replace(/<h5>/g, '<h5 style="font-size: 1.125rem; font-weight: bold; margin: 1.125rem 0 0.5rem 0; color: #1f2937;">')
      .replace(/<h6>/g, '<h6 style="font-size: 1rem; font-weight: bold; margin: 1rem 0 0.5rem 0; color: #1f2937;">')
      // Fix list spacing
      .replace(/<ul>/g, '<ul style="margin: 1rem 0; padding-left: 1.5rem;">')
      .replace(/<ol>/g, '<ol style="margin: 1rem 0; padding-left: 1.5rem;">')
      .replace(/<li>/g, '<li style="margin-bottom: 0.5rem; line-height: 1.6;">')
      // Fix blockquote styling
      .replace(/<blockquote>/g, '<blockquote style="border-left: 4px solid #3b82f6; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #4b5563;">')
      // Fix figure and figcaption
      .replace(/<figure>/g, '<figure style="margin: 1.5rem 0; text-align: center;">')
      .replace(/<figcaption>/g, '<figcaption style="margin-top: 0.5rem; font-size: 0.875rem; color: #6b7280; font-style: italic;">')
      // Fix code blocks
      .replace(/<pre>/g, '<pre style="background-color: #1f2937; color: #f9fafb; padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1rem 0;">')
      .replace(/<code>/g, '<code style="background-color: #f3f4f6; color: #1f2937; padding: 0.25rem 0.5rem; border-radius: 4px; font-family: monospace; font-size: 0.875rem;">')
      // Fix table styling
      .replace(/<table>/g, '<table style="width: 100%; border-collapse: collapse; margin: 1rem 0; border: 1px solid #e5e7eb;">')
      .replace(/<th>/g, '<th style="padding: 0.75rem; background-color: #f9fafb; border: 1px solid #e5e7eb; font-weight: bold; text-align: left;">')
      .replace(/<td>/g, '<td style="padding: 0.75rem; border: 1px solid #e5e7eb;">')
      // Fix links
      .replace(/<a([^>]*?)>/g, '<a$1 style="color: #3b82f6; text-decoration: underline; hover:color: #2563eb;">');

    return cleanContent;
  };



  // Sort categories
  const sortedCategories = [...filteredCategories].sort((a, b) => {
    switch (sortBy) {
      case "posts":
        return b.postCount - a.postCount;
      case "name":
        return a.name.localeCompare(b.name);
      case "subscribers":
        return b.subscribers - a.subscribers;
      default: // popular
        return (b.postCount * 10 + b.subscribers) - (a.postCount * 10 + a.subscribers);
    }
  });

  return (
    <div>
      {/* Search and Filter Section */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <FaFilter className="w-4 h-4" />
              <span className="text-sm font-medium">Sort by:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-gray-600">
          Showing {sortedCategories.length} of {categories.length} categories
          {searchTerm && (
            <span className="ml-2">
              for &quot;<span className="font-semibold text-gray-900">{searchTerm}</span>&ldquo;
            </span>
          )}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {sortedCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
          >
            {/* Category Header */}
            <div className={`bg-gradient-to-r ${category.color} p-6 text-white relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{category.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{category.postCount}</div>
                    <div className="text-sm opacity-90">Articles</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-200 transition-colors">
                  {category.name}
                </h3>

                <p className="text-sm opacity-90 line-clamp-2"

                  dangerouslySetInnerHTML={{ __html: renderContent(category.description) }}
                >

                </p>
              </div>
            </div>

            {/* Category Content */}
            <div className="p-6">
              {/* Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">

                </div>
              </div>

              {/* Featured Tools */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Featured Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {category.featuredTools.slice(0, 3).map((tool, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                  {category.featuredTools.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{category.featuredTools.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Popular Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {category.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href={`/blog/category/${category.id}`}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors group"
              >
                <span>Explore Articles</span>
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {sortedCategories.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No categories found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search terms or browse all available categories.
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Our comprehensive testing blog covers everything from basic concepts to advanced techniques.
          Explore our latest articles or suggest a topic you&apos;d like us to cover.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Browse All Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesGrid;

