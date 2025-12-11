"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
  FaFire,
  FaStar,
} from "react-icons/fa";
import Link from "next/link";
import { getAllPosts } from "@/lib/wordpress-graphql"; // Changed to getAllPosts
import { adaptWordPressPost, Post } from "@/lib/wordpress-data-adapter";
import { stripHtmlTags } from "@/lib/wordpress-graphql";

const BlogPostsGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const postsPerPage = 9;

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const postsData = await getAllPosts(); // Fetch all posts
        const adaptedPosts = postsData.map(adaptWordPressPost);
        setBlogPosts(adaptedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        // Fallback to empty array if WordPress is not available
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // Function to decode HTML entities
  const decodeHtmlEntities = (html: string) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = html;
    return textarea.textContent;
  };

  // Helper function to clean excerpt and decode entities
  const cleanExcerpt = (excerpt: string) => {
    return decodeHtmlEntities(stripHtmlTags(excerpt));
  };

  if (loading) {
    return (
      <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading blog posts...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const currentPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const trendingPosts = blogPosts.filter((post) => post.trending);

  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FaStar className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-900">
                Featured Articles
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative">
                    <Image
                      title={post.title}
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Link href={`/blog/category/${post.categorySlug}`}>
                        <span
                          className={`px-3 py-1 bg-gradient-to-r ${post.categoryColor} text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity cursor-pointer`}
                        >
                          {post.category}
                        </span>
                      </Link>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[theme(color.brand.blue)] transition-colors line-clamp-2">
                      <Link href={`/blog/post/${post.id}`}>{post.title}</Link>
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {cleanExcerpt(post.excerpt)}
                    </p>


                    <div className="flex justify-between gap-4 text-sm text-gray-500">
                      <div className="flex flex-col gap-y-2">
                        <div className="flex items-center gap-4">
                          <Image
                            title={post.author}
                            src={post.authorImage}
                            alt={post.author}
                            width={24}
                            height={24}
                            className="w-6 h-6 rounded-full"
                          />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-4">
                        <div className="flex items-center gap-1">
                          <FaClock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                        <Link
                          href={`/blog/post/${post.id}`}
                          className="flex items-center gap-2 text-[theme(color.brand.blue)] hover:text-blue-600 font-semibold transition-colors"
                          aria-label={`Read more about ${post.title}`}
                        >
                          Read More
                          <FaArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Trending Posts Section */}
        {trendingPosts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FaFire className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingPosts.slice(0, 3).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative">
                    <Image
                      title={post.title}
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    <div className="absolute top-2 left-2">
                      <Link href={`/blog/category/${post.categorySlug}`}>
                        <span
                          className={`px-2 py-1 bg-gradient-to-r ${post.categoryColor} text-white text-xs font-semibold rounded-full hover:opacity-90 transition-opacity cursor-pointer`}
                        >
                          {post.category}
                        </span>
                      </Link>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <FaFire className="w-2 h-2" />
                      HOT
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[theme(color.brand.blue)] transition-colors line-clamp-2">
                      <Link href={`/blog/post/${post.id}`}>{post.title}</Link>
                    </h3>

                    <p className="text-gray-600 mb-3 line-clamp-2 text-sm">
                      {cleanExcerpt(post.excerpt)}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <div className="flex items-center gap-1">
                        <FaClock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/post/${post.id}`}
                      className="text-[theme(color.brand.blue)] hover:text-blue-600 font-semibold text-sm transition-colors"
                    >
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            All Articles
          </h2>

          {blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600">
                Please check back later for new content or ensure WordPress is
                properly configured.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="relative">
                      <Image
                        title={post.title}
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      <div className="absolute top-4 left-4">
                        <Link href={`/blog/category/${post.categorySlug}`}>
                          <span
                            className={`px-3 py-1 bg-gradient-to-r ${post.categoryColor} text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity cursor-pointer`}
                          >
                            {post.category}
                          </span>
                        </Link>
                      </div>
                      {post.trending && (
                        <div className="absolute bottom-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          TRENDING
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[theme(color.brand.blue)] transition-colors line-clamp-2">
                        <Link href={`/blog/post/${post.id}`}>{post.title}</Link>
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {cleanExcerpt(post.excerpt)}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Image
                              title={post.author}
                              src={post.authorImage}
                              alt={post.author}
                              width={20}
                              height={20}
                              className="w-5 h-5 rounded-full"
                            />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaClock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <Link
                          href={`/blog/post/${post.id}`}
                          className="text-[theme(color.brand.blue)] hover:text-blue-600 font-semibold text-sm transition-colors"
                          aria-label={`Read more about ${post.title}`}
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8 sm:mt-12">
                  <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      className="px-2 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    >
                      Previous
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-2 py-1 sm:px-4 sm:py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base ${currentPage === index + 1
                          ? "bg-[theme(color.brand.blue)] text-white"
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
                      className="px-2 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
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
    </section>
  );
};

export default BlogPostsGrid;
