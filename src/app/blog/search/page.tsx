"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";
import { searchPosts } from "@/lib/wordpress-graphql";
import type { WordPressPost } from "@/lib/wordpress-graphql";
import Link from "next/link";
import { FaSearch, FaCalendar, FaUser, FaTag } from "react-icons/fa";

// Loading component
const SearchResultsLoading = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

// Search results component
const SearchResults: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(query);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 20; // Display 20 results per page

  useEffect(() => {
    const performSearch = async () => {
      if (!query.trim()) {
        setSearchResults([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        // Fetch all results by not passing the 'first' parameter
        const results = await searchPosts(query.trim());
        setSearchResults(results);
        setCurrentPage(1); // Reset to first page on new search
      } catch (error) {
        console.error("Search error:", error);
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/blog/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const stripHtml = (html: string) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = html;
    return textarea.textContent || "";
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  const totalResults = searchResults.length;
  const totalPages = Math.ceil(totalResults / postsPerPage);
  const currentPosts = searchResults.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Search Header */}
        <div className="bg-gradient-to-br from-[#0B0F1C] via-[#112042] to-[#0B0F1C] text-white py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Search Results
            </h1>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search testing topics, tools, or best practices..."
                  className="w-full pl-12 pr-32 py-4 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-medium transition"
                >
                  Search
                </button>
              </form>
            </div>

            {query && (
              <p className="text-center text-gray-300">
                {loading ? "Searching..." : `${totalResults} results found for "${query}"`}
              </p>
            )}
          </div>
        </div>

        {/* Search Results */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
          {loading ? (
            <SearchResultsLoading />
          ) : (
            <>
              {currentPosts.length > 0 ? (
                <div className="grid gap-8">
                  {currentPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    >
                      <div className="p-6">
                        {/* Categories */}
                        {post.categories?.nodes && post.categories.nodes.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.categories.nodes.slice(0, 2).map((category) => (
                              <Link
                                key={category.id}
                                href={`/blog/category/${category.slug}`}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                              >
                                <FaTag className="w-3 h-3 mr-1" />
                                {category.name}
                              </Link>
                            ))}
                          </div>
                        )}

                        {/* Title */}
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                          <Link href={`/blog/${post.slug}`}>
                            {stripHtml(post.title)}
                          </Link>
                        </h2>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center">
                            <FaCalendar className="w-4 h-4 mr-2" />
                            {formatDate(post.date)}
                          </div>
                          <div className="flex items-center">
                            <FaUser className="w-4 h-4 mr-2" />
                            {post.author?.node?.name || "Unknown Author"}
                          </div>
                        </div>

                        {/* Excerpt */}
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {post.excerpt 
                            ? truncateText(stripHtml(post.excerpt), 200)
                            : truncateText(stripHtml(post.content), 200)
                          }
                        </p>

                        {/* Read More Link */}
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        >
                          Read More
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : query ? (
                <div className="text-center py-20">
                  <div className="max-w-md mx-auto">
                    <FaSearch className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      No results found
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We couldn&apos;t find any articles matching &quot;{query}&quot;. Try different keywords or browse our categories.
                    </p>
                    <Link
                      href="/blog"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Browse All Articles
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="max-w-md mx-auto">
                    <FaSearch className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Start your search
                    </h3>
                    <p className="text-gray-600">
                      Enter keywords above to search our blog articles.
                    </p>
                  </div>
                </div>
              )}
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                          currentPage === index + 1
                            ? "bg-blue-600 text-white"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}

                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

// Main component with Suspense wrapper
export default function SearchPage() {
  return (
    <Suspense fallback={<SearchResultsLoading />}>
      <SearchResults />
    </Suspense>
  );
}