"use client";

import React from "react";
import { FaClock, FaArrowRight, FaFire, FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

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
}

interface RelatedPostsProps {
  currentPost: BlogPost;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({}) => {
  // In a real application, this would be fetched based on the current post's category and tags
  const relatedPosts = [
    {
      id: "2",
      title: "Performance Testing Best Practices: Load Testing with JMeter",
      excerpt:
        "Learn how to conduct effective performance testing using Apache JMeter for optimal application performance.",
      category: "Performance Testing",
      categoryColor: "from-green-500 to-green-600",
      author: "Mike Chen",
      authorImage: "/api/placeholder/40/40",
      date: "Jan 12, 2025",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      views: "8.2K",
      trending: true,
      featured: false,
    },
    {
      id: "3",
      title:
        "Mobile App Security Testing: Protecting iOS and Android Applications",
      excerpt:
        "Comprehensive guide to mobile app security testing covering OWASP Mobile Top 10 and penetration testing.",
      category: "Security Testing",
      categoryColor: "from-red-500 to-red-600",
      author: "Alex Rodriguez",
      authorImage: "/api/placeholder/40/40",
      date: "Jan 10, 2025",
      readTime: "10 min read",
      image: "/api/placeholder/400/250",
      views: "15.3K",
      trending: false,
      featured: true,
    },
    {
      id: "4",
      title: "API Testing with Postman: From Basics to Advanced Automation",
      excerpt:
        "Master API testing with Postman including collection creation, environment variables, and automated testing.",
      category: "API Testing",
      categoryColor: "from-purple-500 to-purple-600",
      author: "Emily Davis",
      authorImage: "/api/placeholder/40/40",
      date: "Jan 8, 2025",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      views: "9.7K",
      trending: true,
      featured: false,
    },
  ];

  const popularPosts = [
    {
      id: "5",
      title: "Cross-Browser Testing Strategies for Modern Web Applications",
      category: "Web Testing",
      readTime: "5 min read",
      views: "6.1K",
    },
    {
      id: "6",
      title: "Cypress vs Playwright: Choosing the Right E2E Testing Framework",
      category: "Test Automation",
      readTime: "9 min read",
      views: "11.4K",
    },
    {
      id: "7",
      title: "Cloud Testing Strategies: Testing in AWS, Azure, and GCP",
      category: "Cloud Testing",
      readTime: "12 min read",
      views: "7.8K",
    },
    {
      id: "8",
      title: "Test Data Management: Best Practices for QA Teams",
      category: "QA Management",
      readTime: "6 min read",
      views: "5.3K",
    },
  ];

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
            {relatedPosts.map((post) => (
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
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[theme(color.brand.blue)] transition-colors line-clamp-2">
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
                          width={400}
                          height={250}
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
                      href={`/blog/post-${post.id}`}
                      className="flex items-center gap-2 text-[theme(color.brand.blue)] hover:text-blue-600 font-semibold text-sm transition-colors"
                    >
                      Read More
                      <FaArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
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
              {popularPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blog/post-${post.id}`}
                  className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-[theme(color.brand.blue)] transition-colors line-clamp-2">
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
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-700 rounded-xl p-8 text-white h-fit">
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
              <button className="w-full px-4 py-3 bg-white text-[theme(color.brand.blue)] font-semibold rounded-lg hover:bg-blue-50 transition-colors">
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
              className="px-8 py-3 bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Browse All Articles
            </Link>
            <Link
              href="/blog/categories"
              className="px-8 py-3 border-2 border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
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
