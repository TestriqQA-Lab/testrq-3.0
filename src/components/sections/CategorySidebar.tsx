"use client";

import React, { useState } from "react";
import { FaRss, FaBell, FaDownload, FaArrowRight, FaTags, FaFire, FaStar, FaSpinner } from "react-icons/fa";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  postCount: number;
  subscribers: number;
  tags: string[];
  featuredTools: string[];
}

interface CategorySidebarProps {
  category: Category;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ category }) => {
  const relatedCategories = [
    {
      name: "Performance Testing",
      slug: "performance-testing",
      icon: "⚡",
      color: "from-green-500 to-green-600",
      postCount: 28
    },
    {
      name: "Security Testing",
      slug: "security-testing",
      icon: "🛡️",
      color: "from-red-500 to-red-600",
      postCount: 24
    },
    {
      name: "Mobile Testing",
      slug: "mobile-testing",
      icon: "📱",
      color: "from-purple-500 to-purple-600",
      postCount: 31
    },
    {
      name: "API Testing",
      slug: "api-testing",
      icon: "🔗",
      color: "from-indigo-500 to-indigo-600",
      postCount: 19
    }
  ].filter(cat => cat.slug !== category.id);

  const popularPosts = [
    {
      title: "Complete Guide to Test Automation with Selenium WebDriver",
      readTime: "8 min read",
      views: "12.5K"
    },
    {
      title: "Cypress vs Playwright: Framework Comparison",
      readTime: "9 min read",
      views: "11.4K"
    },
    {
      title: "Building Robust Test Automation Frameworks",
      readTime: "12 min read",
      views: "9.8K"
    },
    {
      title: "Advanced Selenium Techniques for Complex Elements",
      readTime: "10 min read",
      views: "8.9K"
    }
  ];

  const learningResources = [
    {
      title: `${category.name} Cheat Sheet`,
      type: "PDF",
      size: "2.3 MB",
      downloads: "5.2K"
    },
    {
      title: "Framework Templates",
      type: "ZIP",
      size: "4.1 MB",
      downloads: "3.8K"
    },
    {
      title: "Best Practices Guide",
      type: "PDF",
      size: "1.9 MB",
      downloads: "7.1K"
    }
  ];

  // Newsletter state
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError("Email is required");
      return;
    }

    setNewsletterLoading(true);
    setError("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribed(true);
        setEmail("");
        
        setTimeout(() => {
          setSubscribed(false);
        }, 5000);
      } else {
        setError(data.error || "Subscription failed");
      }
    } catch (err) {
      console.error("Subscription error:", err);
      setError("Network error. Please try again.");
    } finally {
      setNewsletterLoading(false);
    }
  };

  return (
    <aside className="space-y-8">

 {/* Newsletter Signup */}
      <div className={`bg-gradient-to-br ${category.color} rounded-xl p-6 text-white`}>
        <div className="text-center">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FaBell className={`w-6 h-6 text-${category.color.split('-')[1]}-700`} />
          </div>
          <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
          <p className="text-white text-opacity-90 text-sm mb-4">
            Get the latest {category.name.toLowerCase()} insights delivered weekly.
          </p>
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="space-y-3">
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-2 text-red-200 text-xs">
                  {error}
                </div>
              )}
              <input
                type="email"
                placeholder="your.email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-white/90 border border-white/90 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                disabled={newsletterLoading}
              />
              <button
                type="submit"
                disabled={newsletterLoading}
                className="w-full px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {newsletterLoading ? (
                  <>
                    <FaSpinner className="w-4 h-4 animate-spin" />
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <span>Subscribe Now</span>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-lg">✓</span>
              </div>
              <h3 className="text-md font-bold text-white mb-1">
                Subscribed!
              </h3>
              <p className="text-gray-100 text-sm">
                Thank you for joining!
              </p>
            </div>
          )}
          <p className="text-xs text-white text-opacity-70 mt-3">
            Join {(category.subscribers / 1000).toFixed(1)}K+ subscribers
          </p>
        </div>
      </div>

      {/* Related Categories */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Related Categories</h3>
        <div className="space-y-3">
          {relatedCategories.slice(0, 3).map((relatedCategory, index) => (
            <Link
              key={index}
              href={`/blog/category/${relatedCategory.slug}`}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div className={`w-10 h-10 bg-gradient-to-r ${relatedCategory.color} rounded-lg flex items-center justify-center text-white`}>
                <span className="text-lg">{relatedCategory.icon}</span>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 group-hover:text-[theme(color.brand.blue)] transition-colors">
                  {relatedCategory.name}
                </div>
                <div className="text-sm text-gray-500">{relatedCategory.postCount} articles</div>
              </div>
              <FaArrowRight className="w-3 h-3 text-gray-400 group-hover:text-[theme(color.brand.blue)] transition-colors" />
            </Link>
          ))}
        </div>
        <Link
          href="/blog"
          className="block mt-4 text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
        >
          View All Categories
        </Link>
      </div>

     

      {/* Category Tags */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FaTags className="w-5 h-5 text-gray-500" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {category.tags.map((tag, index) => (
            <Link
              key={index}
              href={`/blog/tag/${tag.toLowerCase().replace(" ", "-")}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[theme(color.brand.blue)] hover:text-white transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

    </aside>
  );
};

export default CategorySidebar;