"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaClock,
  FaArrowRight,
  FaBell,
  FaList,
  FaTags,
  FaBookOpen,
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
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would typically send the email to your backend
    }
  };

  const tableOfContents = [
    { id: "introduction", title: "What is Selenium WebDriver?", level: 1 },
    { id: "getting-started", title: "Getting Started with Selenium", level: 1 },
    { id: "setup", title: "Environment Setup", level: 2 },
    { id: "first-test", title: "Writing Your First Test", level: 2 },
    { id: "best-practices", title: "Best Practices", level: 1 },
    { id: "page-object-model", title: "Page Object Model", level: 2 },
    { id: "waits", title: "Handling Waits", level: 2 },
    { id: "advanced", title: "Advanced Techniques", level: 1 },
    { id: "ci-cd", title: "Integration with CI/CD", level: 1 },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ];

  const relatedPosts = [
    {
      id: "1",
      title: "API Testing with Postman: Complete Guide",
      category: "API Testing",
      readTime: "7 min read",
      image: "/api/placeholder/300/200",
      slug: "api-testing-postman-guide"
    },
    {
      id: "2", 
      title: "Cross-Browser Testing Strategies",
      category: "Web Testing",
      readTime: "5 min read",
      image: "/api/placeholder/300/200",
      slug: "cross-browser-testing-strategies"
    },
    {
      id: "3",
      title: "Cypress vs Playwright: Which to Choose?",
      category: "Test Automation", 
      readTime: "9 min read",
      image: "/api/placeholder/300/200",
      slug: "cypress-vs-playwright"
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

  return (
    <aside className="space-y-8">
      {/* Table of Contents */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <FaList className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Table of Contents</h3>
        </div>
        <nav className="space-y-2">
          {tableOfContents.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className={`block text-sm hover:text-blue-600 transition-colors py-1 ${
                item.level === 1 
                  ? "font-medium text-gray-900" 
                  : "text-gray-600 ml-4"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <div className="text-center">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FaBell className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
          <p className="text-blue-100 text-sm mb-4">
            Get the latest testing insights and best practices delivered weekly.
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          ) : (
            <div className="bg-white/20 rounded-lg p-4">
              <p className="text-sm">✅ Thank you for subscribing!</p>
            </div>
          )}
          
          <p className="text-xs text-blue-200 mt-3">
            Join 10,000+ QA professionals
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <FaBookOpen className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Related Articles</h3>
        </div>
        <div className="space-y-4">
          {relatedPosts.map((relatedPost) => (
            <Link
              key={relatedPost.id}
              href={`/blog/${relatedPost.slug}`}
              className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <Image
                src={relatedPost.image}
                alt={relatedPost.title}
                width={80}
                height={60}
                className="w-20 h-15 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                  {relatedPost.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>{relatedPost.category}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <FaClock className="w-3 h-3" />
                    <span>{relatedPost.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/blog"
          className="flex items-center justify-center gap-2 mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          <span>View All Articles</span>
          <FaArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <FaTags className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Popular Tags</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <Link
              key={index}
              href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-gray-200">
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Need Professional Testing?
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Get expert QA services tailored to your project needs.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <span>Get Free Quote</span>
            <FaArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Reading Progress (Optional - would need JavaScript to work) */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Reading Progress</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium text-gray-900">25%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>~6 min remaining</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default BlogPostSidebar;

