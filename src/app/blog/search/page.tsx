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
// Blog Search Hub - now only renders the search bar
const BlogSearchHub: React.FC<{ searchQuery: string; setSearchQuery: (value: string) => void; handleSearch: (e: React.FormEvent) => void }> = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
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
      <div className="py-12 px-4 sm:px-6 lg:px-8 animate-fade-in text-center max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Discover Expert QA Insights
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Use our <strong>software testing search</strong> to find <strong>QA blog search</strong> resources,
          including <strong>test automation best practices</strong>, <strong>Agile testing methodologies</strong>,
          and more. Explore suggested topics below to dive into Testriq&apos;s expert content.
        </p>
        
        {/* Enhanced Introduction Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12 text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Your Gateway to Comprehensive QA Knowledge</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Advanced Search Capabilities</h3>
              <p className="text-gray-700 mb-4">
                Our intelligent search system is designed to understand the nuances of software testing terminology and concepts. Whether you&apos;re looking for specific tools like Selenium WebDriver, methodologies like Behavior-Driven Development (BDD), or industry-specific testing approaches, our search engine delivers precisely what you need.
              </p>
              <p className="text-gray-700 mb-4">
                The search functionality goes beyond simple keyword matching. It understands synonyms, related concepts, and contextual relationships within the QA domain. For instance, searching for &quot;automation&quot; will also surface content about CI/CD integration, framework design, and test orchestration.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Curated Content Categories</h3>
              <p className="text-gray-700 mb-4">
                Our content is meticulously organized into categories that reflect the real-world structure of software testing projects. From foundational concepts for beginners to advanced techniques for seasoned professionals, every piece of content is tagged and categorized for maximum discoverability.
              </p>
              <p className="text-gray-700 mb-4">
                Each category contains in-depth articles, practical tutorials, case studies, and tool comparisons that provide comprehensive coverage of the topic. This systematic approach ensures that whether you&apos;re troubleshooting a specific issue or planning a complete testing strategy, you&apos;ll find relevant, actionable information.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto bg-white/10 border border-cyan-300/20 rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        <div className="flex items-center justify-center mb-8">
          <FaLightbulb className="w-10 h-10 text-cyan-500 mr-3" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
            Unlock QA Excellence with Testriq
          </h2>
        </div>
        
        <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
          Testriq&apos;s <strong className="text-cyan-600">software testing search</strong> hub is your go-to resource for <strong className="text-cyan-600">QA blog search</strong> and expert insights. Discover why our blog is trusted by professionals worldwide:
        </p>
        
        {/* Enhanced Features Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Testing Coverage</h3>
            <ul className="space-y-3 text-gray-700 text-base">
              <li>
                <span className="text-cyan-500 mr-2">•</span>
                Find <strong className="text-cyan-600">test automation best practices</strong> and tools like <Link href="/blog/search?q=selenium" className="text-cyan-600 hover:text-cyan-800 underline">Selenium</Link>, Cypress, and Playwright for streamlined QA workflows.
              </li>
              <li>
                <span className="text-cyan-500 mr-2">•</span>
                Explore <strong className="text-cyan-600">Agile testing methodologies</strong> and <strong className="text-cyan-600">best practices for QA search</strong> in CI/CD pipelines and DevOps environments.
              </li>
              <li>
                <span className="text-cyan-500 mr-2">•</span>
                Access actionable guides on <strong className="text-cyan-600">test-driven development (TDD)</strong>, <strong className="text-cyan-600">integration testing strategies</strong>, and performance testing tools like <Link href="/blog/search?q=jmeter" className="text-cyan-600 hover:text-cyan-800 underline">JMeter</Link>.
              </li>
              <li>
                <span className="text-cyan-500 mr-2">•</span>
                Dive into <strong className="text-cyan-600">search QA insights</strong> for <Link href="/blog/search?q=security" className="text-cyan-600 hover:text-cyan-800 underline">security testing</Link>, API testing, and AI-driven testing trends.
              </li>
            </ul>
          </div>
          
          <div className="bg-white/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry-Leading Expertise</h3>
            <ul className="space-y-3 text-gray-700 text-base">
              <li>
                <span className="text-cyan-500 mr-2">•</span>
                Content authored by ISTQB-certified professionals with extensive industry experience across multiple domains and technologies.
              </li>
              <li>
                <span className="text-cyan-500 mr-2">•</span>
                Real-world case studies and examples from successful testing implementations in fintech, healthcare, e-commerce, and enterprise software.
              </li>
              <li>
                <span className="text-cyan-500 mr-2">•</span>
                Up-to-date coverage of emerging trends including AI testing, IoT device testing, blockchain application testing, and cloud-native testing strategies.
              </li>
              <li>
                <span className="text-cyan-500 mr-2">•</span>
                Practical tutorials with step-by-step instructions, code examples, and downloadable resources for immediate implementation.
              </li>
            </ul>
          </div>
        </div>
        
        {/* Search Tips Section */}
        <div className="bg-white/30 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Maximize Your Search Results</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Effective Keywords</h4>
              <p className="text-gray-700 text-sm mb-3">
                Use specific terms like &quot;automation frameworks,&quot; &quot;manual testing tips,&quot; &quot;performance bottlenecks,&quot; or &quot;security vulnerabilities&quot; to find targeted content.
              </p>
              <div className="bg-gray-100 rounded p-3">
                <p className="text-xs text-gray-600 font-mono">
                  Examples: &quot;selenium grid setup&quot;, &quot;api testing postman&quot;, &quot;mobile testing appium&quot;
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Search Operators</h4>
              <p className="text-gray-700 text-sm mb-3">
                Use quotes for exact phrases, OR for multiple terms, and minus (-) to exclude terms from your search results.
              </p>
              <div className="bg-gray-100 rounded p-3">
                <p className="text-xs text-gray-600 font-mono">
                  &quot;test automation&quot; OR &quot;automated testing&quot; -manual
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Topic Categories</h4>
              <p className="text-gray-700 text-sm mb-3">
                Browse by categories like automation, performance, security, or mobile testing to discover comprehensive topic coverage.
              </p>
              <div className="bg-gray-100 rounded p-3">
                <p className="text-xs text-gray-600 font-mono">
                  Categories: Tools, Methodologies, Best Practices
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-700 mb-8 text-center">
          Optimize your <strong className="text-cyan-600">QA blog search</strong> experience by combining specific keywords with our advanced filtering options. Whether you&apos;re looking for beginner tutorials, advanced techniques, or industry-specific solutions, our comprehensive search system will connect you with the most relevant and valuable content.
        </p>
        
        {/* Popular Search Terms */}
        <div className="bg-white/20 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Popular Search Terms</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'selenium automation',
              'api testing',
              'performance testing',
              'mobile testing',
              'security testing',
              'test automation frameworks',
              'agile testing',
              'continuous testing',
              'test data management',
              'defect management',
              'test planning',
              'regression testing'
            ].map((term, index) => (
              <Link
                key={index}
                href={`/blog/search?q=${encodeURIComponent(term)}`}
                className="bg-cyan-100 hover:bg-cyan-200 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium transition-colors"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/blog" className="inline-block bg-cyan-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 hover:shadow-lg mr-4">
            Explore More QA Insights
          </Link>
          <Link href="/case-studies" className="inline-block bg-gray-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-700 transition-all duration-300 hover:shadow-lg">
            View Success Stories
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