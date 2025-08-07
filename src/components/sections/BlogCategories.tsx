"use client";

import React, { useState, useEffect } from "react";
import { FaCog, FaShieldAlt, FaRocket, FaMobile, FaDesktop, FaCloud, FaCode, FaChartLine } from "react-icons/fa";
import Link from "next/link";
import { getCategories } from "@/lib/wordpress-graphql";
import { adaptWordPressCategory, Category } from "@/lib/wordpress-data-adapter";

const BlogCategories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // Icon mapping for categories
  const categoryIcons: Record<string, React.ReactElement> = {
    'test automation': <FaCode className="w-5 h-5" />,
    'automation': <FaCode className="w-5 h-5" />,
    'performance testing': <FaRocket className="w-5 h-5" />,
    'performance': <FaRocket className="w-5 h-5" />,
    'security testing': <FaShieldAlt className="w-5 h-5" />,
    'security': <FaShieldAlt className="w-5 h-5" />,
    'mobile testing': <FaMobile className="w-5 h-5" />,
    'mobile': <FaMobile className="w-5 h-5" />,
    'web testing': <FaDesktop className="w-5 h-5" />,
    'web': <FaDesktop className="w-5 h-5" />,
    'cloud testing': <FaCloud className="w-5 h-5" />,
    'cloud': <FaCloud className="w-5 h-5" />,
    'qa analytics': <FaChartLine className="w-5 h-5" />,
    'analytics': <FaChartLine className="w-5 h-5" />,
    'api testing': <FaCode className="w-5 h-5" />,
    'api': <FaCode className="w-5 h-5" />,
    'default': <FaCog className="w-5 h-5" />
  };

  const getCategoryIcon = (categoryName: string): React.ReactElement => {
    const lowerName = categoryName.toLowerCase();
    for (const [key, icon] of Object.entries(categoryIcons)) {
      if (lowerName.includes(key)) {
        return icon;
      }
    }
    return categoryIcons.default;
  };

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        const wpCategories = await getCategories();
        const adaptedCategories = wpCategories.map(adaptWordPressCategory);
        
        // Calculate total posts for "All Posts" category
        const totalPosts = adaptedCategories.reduce((sum, cat) => sum + cat.postCount, 0);
        
        // Add "All Posts" category at the beginning
        const allCategory: Category = {
          id: "all",
          name: "All Posts",
          description: "Browse all our testing articles",
          color: "from-gray-500 to-gray-600",
          icon: "🏷️",
          postCount: totalPosts,
          subscribers: Math.floor(totalPosts * 25), // Estimate subscribers
          tags: ["All", "Testing", "QA"],
          featuredTools: ["All Testing Tools"],
          seo: {
            title: "All Testing Articles | Testriq Blog",
            description: "Browse all our comprehensive testing articles and tutorials",
            keywords: "testing, qa, software testing, all articles"
          }
        };

        setCategories([allCategory, ...adaptedCategories]);
      } catch (error) {
        console.error("Error fetching categories:", error);
        // Fallback to static categories if WordPress is not available
        setCategories([
          {
            id: "all",
            name: "All Posts",
            description: "Browse all our testing articles",
            color: "from-gray-500 to-gray-600",
            icon: "🏷️",
            postCount: 156,
            subscribers: 3900,
            tags: ["All", "Testing", "QA"],
            featuredTools: ["All Testing Tools"],
            seo: {
              title: "All Testing Articles | Testriq Blog",
              description: "Browse all our comprehensive testing articles and tutorials",
              keywords: "testing, qa, software testing, all articles"
            }
          }
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-16 px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading categories...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
          {categories.slice(0, 8).map((category) => (
            <Link
              key={category.id}
              href={category.id === "all" ? "/blog" : `/blog/category/${category.id}`}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 block ${
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
                  {getCategoryIcon(category.name)}
                </div>
                
                {/* Category Name */}
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[theme(color.brand.blue)] transition-colors">
                  {category.name}
                </h3>
                
                {/* Post Count */}
                <div className="text-sm text-gray-500">
                  {category.postCount} articles
                </div>
              </div>

              {/* Active Indicator */}
              {activeCategory === category.id && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </Link>
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
            { 
              number: categories.reduce((sum, cat) => sum + cat.postCount, 0).toString() + "+", 
              label: "Total Articles", 
              icon: "📚" 
            },
            { 
              number: categories.length.toString(), 
              label: "Categories", 
              icon: "🏷️" 
            },
            { 
              number: Math.floor(categories.reduce((sum, cat) => sum + cat.subscribers, 0) / 1000) + "K+", 
              label: "Monthly Readers", 
              icon: "👥" 
            },
            { 
              number: "Weekly", 
              label: "New Content", 
              icon: "🚀" 
            }
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