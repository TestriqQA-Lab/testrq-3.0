"use client";

import React from "react";
import { FaRss, FaBell, FaDownload, FaArrowRight, FaTags, FaFire, FaStar } from "react-icons/fa";
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

  return (
    <aside className="space-y-8">
      {/* Category Stats */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="text-center">
          <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4`}>
            {category.icon}
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
          <p className="text-gray-600 text-sm mb-6">{category.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{category.postCount}</div>
              <div className="text-gray-500 text-sm">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{(category.subscribers / 1000).toFixed(1)}K</div>
              <div className="text-gray-500 text-sm">Followers</div>
            </div>
          </div>

          <div className="space-y-3">
            <button className={`w-full flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-r ${category.color} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity`}>
              <FaRss className="w-4 h-4" />
              Follow Category
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              <FaBell className="w-4 h-4" />
              Get Notifications
            </button>
          </div>
        </div>
      </div>

      {/* Featured Tools */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FaStar className="w-5 h-5 text-yellow-500" />
          Featured Tools
        </h3>
        <div className="space-y-3">
          {category.featuredTools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white text-sm font-bold`}>
                  {tool.charAt(0)}
                </div>
                <span className="font-medium text-gray-900">{tool}</span>
              </div>
              <FaArrowRight className="w-3 h-3 text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Learning Resources */}
      <div className="bg-green-50 rounded-xl p-6 border border-green-200">
        <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
          <FaDownload className="w-5 h-5" />
          Free Resources
        </h3>
        <div className="space-y-3">
          {learningResources.map((resource, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-200 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <FaDownload className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-green-900 text-sm">{resource.title}</div>
                <div className="text-xs text-green-700">
                  {resource.type} • {resource.size} • {resource.downloads} downloads
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-sm">
          Download All Resources
        </button>
      </div>

      {/* Popular in Category */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FaFire className="w-5 h-5 text-red-500" />
          Popular in {category.name}
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <Link
              key={index}
              href="#"
              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm group-hover:text-[theme(color.brand.blue)] transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.views} views</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
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

      {/* Newsletter Signup */}
      <div className={`bg-gradient-to-br ${category.color} rounded-xl p-6 text-white`}>
        <div className="text-center">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FaBell className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
          <p className="text-white text-opacity-90 text-sm mb-4">
            Get the latest {category.name.toLowerCase()} insights delivered weekly.
          </p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="your.email@company.com"
              className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button className="w-full px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe Now
            </button>
          </div>
          <p className="text-xs text-white text-opacity-70 mt-3">
            Join {(category.subscribers / 1000).toFixed(1)}K+ subscribers
          </p>
        </div>
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
              href={`/blog/tag/${tag.toLowerCase().replace(' ', '-')}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[theme(color.brand.blue)] hover:text-white transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Advertisement Space */}
      <div className="bg-gray-100 rounded-xl p-6 text-center">
        <div className="text-gray-500 text-sm mb-2">Advertisement</div>
        <div className="bg-white rounded-lg p-8 border-2 border-dashed border-gray-300">
          <div className="text-gray-400 text-sm">
            Your Ad Here
            <br />
            300x250
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CategorySidebar;

