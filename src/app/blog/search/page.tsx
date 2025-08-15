"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaClock, FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import MainLayout from "@/components/layout/MainLayout";
import { getPosts } from "@/lib/wordpress-graphql";
import { adaptWordPressPost, Post } from "@/lib/wordpress-data-adapter";
import { stripHtmlTags } from "@/lib/wordpress-graphql";

const BlogSearchPage: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const performSearch = async () => {
      if (!query.trim()) {
        setSearchResults([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const postsData = await getPosts(100); // Fetch more posts for better search results
        const allPosts = postsData.posts.map(adaptWordPressPost);
        
        // Simple search implementation - filter posts by title, excerpt, content, tags, and category
        const filteredPosts = allPosts.filter(post => {
          const searchTerm = query.toLowerCase();
          return (
            post.title.toLowerCase().includes(searchTerm) ||
            stripHtmlTags(post.excerpt).toLowerCase().includes(searchTerm) ||
            post.category.toLowerCase().includes(searchTerm) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            post.author.toLowerCase().includes(searchTerm)
          );
        });

        setSearchResults(filteredPosts);
      } catch (error) {
        console.error("Error performing search:", error);
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

  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen">
        {/* Search Header */}
        <section className="bg-gradient-to-br from-[#0B0F1C] via-[#112042] to-[#0B0F1C] text-white py-12 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {/* Back to Blog */}
            <div className="mb-6">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors"
              >
                <FaArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Search Results
              {query && (
                <span className="block text-xl md:text-2xl text-blue-300 mt-2">
                  for &quot{query}&quot
                </span>
              )}
            </h1>

            {/* Search Bar */}
            <div className="max-w-2xl">
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
        </section>

        {/* Search Results */}
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Searching...</p>
                </div>
              </div>
            ) : (
              <>
                {/* Results Count */}
                <div className="mb-8">
                  <p className="text-gray-600">
                    {searchResults.length > 0
                      ? `Found ${searchResults.length} result${searchResults.length !== 1 ? 's' : ''}`
                      : query
                      ? `No results found for "${query}"`
                      : "Enter a search term to find articles"
                    }
                  </p>
                </div>

                {/* Results Grid */}
                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {searchResults.map((post) => (
                      <article
                        key={post.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                      >
                        <div className="relative">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span
                              className={`px-3 py-1 bg-gradient-to-r ${post.categoryColor} text-white text-sm font-semibold rounded-full`}
                            >
                              {post.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                            <Link href={`/blog/${post.id}`}>
                              {post.title}
                            </Link>
                          </h3>

                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {stripHtmlTags(post.excerpt)}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                              <div className="flex items-center gap-2">
                                <Image
                                  src={post.authorImage}
                                  alt={post.author}
                                  width={20}
                                  height={20}
                                  className="w-5 h-5 rounded-full"
                                />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <FaCalendarAlt className="w-3 h-3" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <FaClock className="w-3 h-3" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <Link
                              href={`/blog/${post.id}`}
                              className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                            >
                              Read More →
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : query ? (
                  <div className="text-center py-12">
                    <div className="text-gray-400 text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
                    <p className="text-gray-600 mb-6">
                      Try adjusting your search terms or browse our categories below.
                    </p>
                    
                    {/* Suggested Categories */}
                    <div className="max-w-2xl mx-auto">
                      <p className="text-gray-700 font-medium mb-4">Popular categories:</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {[
                          "Test Automation",
                          "Performance Testing",
                          "Security Testing",
                          "Mobile Testing",
                          "API Testing",
                          "Web Testing"
                        ].map((category) => (
                          <Link
                            key={category}
                            href={`/blog/search?q=${encodeURIComponent(category)}`}
                            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors text-sm"
                          >
                            {category}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </>
            )}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default BlogSearchPage;

