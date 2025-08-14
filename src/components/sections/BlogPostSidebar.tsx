"use client";
import Image from "next/image";
import React from "react";
import {
  FaClock,
  FaEye,
  FaHeart,
  FaShare,
  FaArrowRight,
  FaDownload,
  FaBell,
} from "react-icons/fa";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  views: string;
  likes: number;
  shares: number;
  tags: string[];
}

interface BlogPostSidebarProps {
  post: BlogPost;
}

const BlogPostSidebar: React.FC<BlogPostSidebarProps> = ({ post }) => {
  const relatedPosts = [
    {
      title: "API Testing with Postman: Complete Guide",
      category: "API Testing",
      readTime: "7 min read",
      image: "/api/placeholder/150/100",
    },
    {
      title: "Cross-Browser Testing Strategies",
      category: "Web Testing",
      readTime: "5 min read",
      image: "/api/placeholder/150/100",
    },
    {
      title: "Cypress vs Playwright Comparison",
      category: "Test Automation",
      readTime: "9 min read",
      image: "/api/placeholder/150/100",
    },
  ];

  const popularTags = [
    "Selenium",
    "Test Automation",
    "WebDriver",
    "Java",
    "Testing",
    "Performance",
    "Security",
    "Mobile",
    "API",
    "CI/CD",
  ];

  const categories = [
    { name: "Test Automation", count: 42 },
    { name: "Performance Testing", count: 28 },
    { name: "Security Testing", count: 24 },
    { name: "Mobile Testing", count: 31 },
    { name: "Web Testing", count: 19 },
    { name: "API Testing", count: 16 },
  ];

  return (
    <aside className="space-y-8">
     

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <div className="text-center">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FaBell className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
          <p className="text-blue-100 text-sm mb-4">
            Get the latest testing insights delivered to your inbox weekly.
          </p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="your.email@company.com"
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="w-full px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-100 transition-colors">
              Subscribe Now
            </button>
          </div>
          <p className="text-xs text-blue-200 mt-3">
            Join 10,000+ QA professionals
          </p>
        </div>
      </div>


      {/* Related Posts */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Related Articles
        </h3>
        <div className="space-y-4">
          {relatedPosts.map((relatedPost, index) => (
            <Link
              key={index}
              href="#"
              className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <Image
                src={relatedPost.image}
                alt={relatedPost.title}
                width={400}
                height={250}
                className="w-16 h-12 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                  {relatedPost.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <span>{relatedPost.category}</span>
                  <span>•</span>
                  <span>{relatedPost.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/blog"
          className="flex items-center justify-center gap-2 mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
        >
          <span>View All Articles</span>
          <FaArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <Link
              key={index}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/blog/category/${category.name
                .toLowerCase()
                .replace(" ", "-")}`}
              className="flex items-center justify-between py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <span className="text-sm">{category.name}</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

    </aside>
  );
};

export default BlogPostSidebar;
