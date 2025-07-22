"use client";

import React, { useState } from "react";
import { FaCog, FaShieldAlt, FaRocket, FaMobile, FaDesktop, FaCloud, FaCode, FaChartLine } from "react-icons/fa";

const BlogCategories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    {
      id: "all",
      name: "All Posts",
      icon: <FaCog className="w-5 h-5" />,
      count: 156,
      color: "from-gray-500 to-gray-600"
    },
    {
      id: "automation",
      name: "Test Automation",
      icon: <FaCode className="w-5 h-5" />,
      count: 42,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "performance",
      name: "Performance Testing",
      icon: <FaRocket className="w-5 h-5" />,
      count: 28,
      color: "from-green-500 to-green-600"
    },
    {
      id: "security",
      name: "Security Testing",
      icon: <FaShieldAlt className="w-5 h-5" />,
      count: 24,
      color: "from-red-500 to-red-600"
    },
    {
      id: "mobile",
      name: "Mobile Testing",
      icon: <FaMobile className="w-5 h-5" />,
      count: 31,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "web",
      name: "Web Testing",
      icon: <FaDesktop className="w-5 h-5" />,
      count: 19,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: "cloud",
      name: "Cloud Testing",
      icon: <FaCloud className="w-5 h-5" />,
      count: 15,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: "analytics",
      name: "QA Analytics",
      icon: <FaChartLine className="w-5 h-5" />,
      count: 12,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Testing{" "}
            <span className="text-[theme(color.brand.blue)]">Categories</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Browse our comprehensive collection of software testing articles organized by testing types, 
            tools, and methodologies to find exactly what you need.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'shadow-xl ring-2 ring-[theme(color.brand.blue)] ring-opacity-50'
                  : 'shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                
                {/* Category Name */}
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[theme(color.brand.blue)] transition-colors">
                  {category.name}
                </h3>
                
                {/* Post Count */}
                <div className="text-sm text-gray-500">
                  {category.count} articles
                </div>
              </div>

              {/* Active Indicator */}
              {activeCategory === category.id && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Featured Categories Highlight */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaCode className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Test Automation</h4>
              <p className="text-gray-600 text-sm">
                Learn about Selenium, Cypress, Playwright, and other automation frameworks
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaRocket className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Performance Testing</h4>
              <p className="text-gray-600 text-sm">
                Master load testing, stress testing, and performance optimization techniques
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Security Testing</h4>
              <p className="text-gray-600 text-sm">
                Discover security testing methodologies and vulnerability assessment
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
          {[
            { number: "200+", label: "Total Articles", icon: "📚" },
            { number: "15", label: "Categories", icon: "🏷️" },
            { number: "50K+", label: "Monthly Readers", icon: "👥" },
            { number: "Weekly", label: "New Content", icon: "🚀" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-[theme(color.brand.blue)] mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;

