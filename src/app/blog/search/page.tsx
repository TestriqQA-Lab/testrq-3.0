"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";
import BlogStructuredData from "@/components/seo/BlogStructuredData";
import { searchPosts } from "@/lib/wordpress-graphql";
import type { WordPressPost } from "@/lib/wordpress-graphql";
import Link from "next/link";
import { FaSearch, FaCalendar, FaUser, FaTag, FaArrowRight, FaLightbulb } from "react-icons/fa";

// Loading component
const SearchResultsLoading = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

// Function to clean and render HTML content properly
const renderContent = (content: string) => {
  // Clean up the content and fix common WordPress issues
  const cleanContent = content
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
// Blog Search Hub component - Unchanged
const BlogSearchHub: React.FC<{ searchQuery: string; setSearchQuery: (value: string) => void; handleSearch: (e: React.FormEvent) => void }> = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 text-center leading-tight">
          Discover Expert QA Insights
        </h2>
        <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto text-center">
          Use our <strong>software testing search</strong> to find <strong>QA blog search</strong> resources, including <strong>test automation best practices</strong>, <strong>Agile testing methodologies</strong>, and more. Explore suggested topics below to dive into Testriq’s expert content.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-cyan-300 transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-white mb-3">Automation Testing Search</h3>
            <p className="text-gray-300 mb-4">Search for <strong>test automation best practices</strong> and tools like Selenium to streamline QA processes.</p>
            <Link href="/blog/search?q=automation" className="inline-flex items-center text-cyan-300 hover:text-cyan-100 font-medium transition-colors">
              Search Now <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-cyan-300 transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-white mb-3">Best Practices QA Search</h3>
            <p className="text-gray-300 mb-4">Explore <strong>best practices for QA search</strong> in CI/CD and Agile environments.</p>
            <Link href="/blog/category/best-practices" className="inline-flex items-center text-cyan-300 hover:text-cyan-100 font-medium transition-colors">
              View Category <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-cyan-300 transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-white mb-3">Security Testing Resources</h3>
            <p className="text-gray-300 mb-4">Conduct a <strong>search QA insights</strong> for vulnerability detection and secure coding.</p>
            <Link href="/blog/search?q=security" className="inline-flex items-center text-cyan-300 hover:text-cyan-100 font-medium transition-colors">
              Search Now <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
        {/* Second Search Bar */}
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
        
      </div>
    </div>
  );
};

// Search Insights component - Unchanged
const SearchInsights: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0B0F1C]/10 to-[#1B2A5A]/10 backdrop-blur-md animate-fade-in">
      <div className="max-w-7xl mx-auto bg-white/10 border border-cyan-300/20 rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        <div className="flex items-center justify-center mb-6">
          <FaLightbulb className="w-10 h-10 text-cyan-500 mr-3" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
            Unlock QA Excellence with Testriq
          </h2>
        </div>
        <p className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
          Testriq’s <strong className="text-cyan-600">software testing search</strong> hub is your go-to resource for <strong className="text-cyan-600">QA blog search</strong> and expert insights. Discover why our blog is trusted by professionals:
        </p>
        <ul className="space-y-4 mb-8 text-gray-700 text-base md:text-lg">
          <li>
            <span className="text-cyan-500 mr-2">•</span>
            Find&nbsp; <strong className="text-cyan-600">test automation best practices</strong>&nbsp; and tools like &nbsp;<Link href="/blog/search?q=selenium" className="text-cyan-600 hover:text-cyan-800 underline">Selenium</Link> &nbsp;for streamlined QA workflows.
          </li>
          <li>
            <span className="text-cyan-500 mr-2">•</span>
            Explore &nbsp;<strong className="text-cyan-600">Agile testing methodologies</strong>&nbsp; and &nbsp;<strong className="text-cyan-600">best practices for QA search</strong>&nbsp; in CI/CD pipelines
          </li>
          <li>
            <span className="text-cyan-500 mr-2">•</span>
            Access actionable guides on <strong className="text-cyan-600">test-driven development (TDD)</strong>, <strong className="text-cyan-600">integration testing strategies</strong>, and tools like <Link href="/blog/search?q=jmeter" className="text-cyan-600 hover:text-cyan-800 underline">JMeter</Link>.
          </li>
          <li>
            <span className="text-cyan-500 mr-2">•</span>
            Dive into <strong className="text-cyan-600">search QA insights</strong> for <Link href="/blog/search?q=security" className="text-cyan-600 hover:text-cyan-800 underline">security testing</Link> and AI-driven testing trends.
          </li>
        </ul>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Optimize your <strong className="text-cyan-600">QA blog search</strong> with keywords like “automation frameworks” or “manual testing tips” to uncover tutorials and case studies from industry experts.
        </p>
        <div className="text-center">
          <Link href="/blog" className="inline-block bg-cyan-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 hover:shadow-lg">
            Explore More QA Insights
          </Link>
        </div>
      </div>
    </div>
  );
};

// Search results component - Unchanged UI
const SearchResults: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(query);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 20;

  useEffect(() => {
    const performSearch = async () => {
      if (!query.trim()) {
        setSearchResults([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const results = await searchPosts(query.trim());
        setSearchResults(results);
        setCurrentPage(1);
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

  const totalResults = searchResults.length;
  const totalPages = Math.ceil(totalResults / postsPerPage);
  const currentPosts = searchResults.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <MainLayout>
      <BlogStructuredData
        type="search"
        title={query ? `Search Results for "${query}" | Testriq Blog` : "Search Software Testing Insights | Testriq Blog"}
        description={query
          ? `Find articles, tutorials, and insights on "${query}" at Testriq Blog. Explore software testing search, QA best practices, test automation tools, and more.`
          : "Search Testriq's blog for software testing search, QA blog search, and expert insights on test automation, best practices for QA search, and Agile testing methodologies."
        }
        url={`https://www.testriq.com/blog/search${query ? `?q=${encodeURIComponent(query)}` : ''}`}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Search Header */}
        <div className="bg-gradient-to-br from-[#0B0F1C] via-[#112042] to-[#1B2A5A] text-white py-8 px-6 md:px-12 lg:px-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('/images/noise-pattern.png')]"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Blog Search Hub - Contains the remaining search bar */}
            <BlogSearchHub searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
          </div>
        </div>

        {/* Search Results - Unchanged UI */}
        <div className="max-w-7xl mx-auto py-16">
          {query && (
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {loading ? "Searching..." : `${totalResults} Results Found for "${query}"`}
            </h2>
          )}
          {loading ? (
            <SearchResultsLoading />
          ) : (
            <>
              {currentPosts.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {currentPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
                    >
                      <div className="p-6">
                        {post.categories?.nodes && post.categories.nodes.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.categories.nodes.slice(0, 2).map((category) => (
                              <Link
                                key={category.id}
                                href={`/blog/category/${category.slug}`}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800 hover:bg-cyan-200 transition-colors"
                              >
                                <FaTag className="w-3 h-3 mr-1" />
                                {category.name}
                              </Link>
                            ))}
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-cyan-600 transition-colors">
                          <Link href={`/blog/post/${post.slug}`}>
                            {stripHtml(post.title)}
                          </Link>
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center">
                            <FaCalendar className="w-4 h-4 mr-2 text-cyan-500" />
                            {formatDate(post.date)}
                          </div>
                          <div className="flex items-center">
                            <FaUser className="w-4 h-4 mr-2 text-cyan-500" />
                            {post.author?.node?.name || "Unknown Author"}
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: renderContent(post.excerpt) }}
                        >
                          
                        </p>
                        <Link
                          href={`/blog/post/${post.slug}`}
                          className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium transition-colors"
                        >
                          Read More <FaArrowRight className="ml-2" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : query ? (
                <div className="text-center py-20 bg-white rounded-2xl shadow-xl max-w-2xl mx-auto">
                  <FaSearch className="w-16 h-16 text-cyan-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    No Results Found
                  </h3>
                  <p className="text-gray-600 mb-6 px-8">
                    We couldn&apos;t find any articles matching &quot;{query}&quot;. Try different keywords or explore our categories below.
                  </p>
                  <Link
                    href="/blog"
                    className="inline-block bg-cyan-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300"
                  >
                    Browse All Articles
                  </Link>
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-2xl shadow-xl max-w-2xl mx-auto">
                  <FaSearch className="w-16 h-16 text-cyan-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Start Your Search
                  </h3>
                  <p className="text-gray-600 px-8">
                    Enter keywords in the search bar above to discover our comprehensive collection of software testing articles and QA insights.
                  </p>
                </div>
              )}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center gap-2 bg-white rounded-full shadow-md p-2">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-full text-gray-600 hover:bg-cyan-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Previous
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 rounded-full font-semibold transition-colors ${currentPage === index + 1
                            ? "bg-cyan-500 text-white"
                            : "text-gray-600 hover:bg-cyan-100"
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
                      className="px-4 py-2 rounded-full text-gray-600 hover:bg-cyan-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Search Insights - Unchanged */}
        <SearchInsights />
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