"use client";

import React, { useState, useEffect } from "react";
import { FaClock, FaArrowRight, FaFire, FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { getPosts, getPostsByCategory } from "@/lib/wordpress-graphql";
import { adaptWordPressPost } from "@/lib/wordpress-data-adapter";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  views: string;
  tags: string[];
  slug: string;
  excerpt: string;
  authorImage: string;
  trending: boolean;
  featured: boolean;
}

interface RelatedPostsProps {
  currentPost: BlogPost;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPost }) => {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [popularPosts, setPopularPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedData = async () => {
      try {
        // Fetch posts from the same category
        const categoryPostsResponse = await getPostsByCategory(
          currentPost.category.toLowerCase().replace(/\s+/g, '-'),
          10
        );
        
        // Filter out current post and adapt the data
        const categoryPosts = categoryPostsResponse.posts
          .filter(post => post.slug !== currentPost.id)
          .map(adaptWordPressPost)
          .slice(0, 3);

        // If we don't have enough posts from the same category, fetch more general posts
        let finalRelatedPosts = categoryPosts;
        if (categoryPosts.length < 3) {
          const generalPostsResponse = await getPosts(20);
          const generalPosts = generalPostsResponse.posts
            .filter(post => 
              post.slug !== currentPost.id && 
              !categoryPosts.some(cp => cp.id === post.slug)
            )
            .map(adaptWordPressPost)
            .filter(post => 
              // Try to find posts with similar tags
              post.tags.some(tag => currentPost.tags.includes(tag))
            )
            .slice(0, 3 - categoryPosts.length);

          finalRelatedPosts = [...categoryPosts, ...generalPosts];
        }

        setRelatedPosts(finalRelatedPosts);

        // Fetch popular posts (most recent posts as a proxy for popular)
        const allPostsResponse = await getPosts(20);
        const allPosts = allPostsResponse.posts
          .filter(post => post.slug !== currentPost.id)
          .map(adaptWordPressPost)
          .sort((a, b) => {
            // Sort by a combination of views and recency
            const aScore = parseInt(a.views.replace('K', '000').replace(',', '')) + 
                          (new Date(a.date).getTime() / 1000000);
            const bScore = parseInt(b.views.replace('K', '000').replace(',', '')) + 
                          (new Date(b.date).getTime() / 1000000);
            return bScore - aScore;
          })
          .slice(0, 4);

        setPopularPosts(allPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching related posts:', error);
        setLoading(false);
      }
    };

    fetchRelatedData();
  }, [currentPost.id, currentPost.category, currentPost.tags]);

  if (loading) {
    return (
      <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Related Articles */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FaStar className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900">
              Related Articles
            </h2>
            <span className="text-gray-500">Based on your reading</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.length > 0 ? (
              relatedPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
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
                    {post.trending && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <FaFire className="w-2 h-2" />
                        HOT
                      </div>
                    )}
                    {post.featured && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
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
                          <FaClock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                      >
                        Read More
                        <FaArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No related articles found.</p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Browse All Articles
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Popular This Week */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <FaFire className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-gray-900">
                Popular This Week
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularPosts.length > 0 ? (
                popularPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.views} views</span>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500">No popular posts available.</p>
                </div>
              )}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white h-fit">
            <h3 className="text-xl font-bold mb-4">Never Miss an Update</h3>
            <p className="text-blue-100 mb-6">
              Get the latest testing insights and tutorials delivered directly
              to your inbox.
            </p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="your.email@company.com"
                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button className="w-full px-4 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Subscribe Now
              </button>
            </div>

            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white border-opacity-20">
              <div className="text-center">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-xs text-blue-200">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Weekly</div>
                <div className="text-xs text-blue-200">Updates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-xs text-blue-200">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Browse More */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Want to explore more testing topics?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Browse our comprehensive collection of software testing articles,
            tutorials, and best practices to enhance your QA skills and stay
            updated with the latest industry trends.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/blog"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse All Articles
            </Link>
            <Link
              href="/blog/categories"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;

