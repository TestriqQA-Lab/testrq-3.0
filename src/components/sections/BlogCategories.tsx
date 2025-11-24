//Blog categories

"use client";

import React, { useState, useEffect } from "react";
import { FaCog, FaShieldAlt, FaRocket, FaMobile, FaDesktop, FaCloud, FaCode, FaChartLine } from "react-icons/fa";
import Link from "next/link";
import { getCategories } from "@/lib/wordpress-graphql";
import { adaptWordPressCategory, Category } from "@/lib/wordpress-data-adapter";

// Custom hook for incrementing animation
const useCountUp = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (end === start) return;

    const increment = (end - start) / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, start]);

  return count;
};

// Component for animated category card
const AnimatedCategoryCard: React.FC<{
  category: Category;
  activeCategory: string;
  setActiveCategory: (id: string) => void;
  delay?: number;
}> = ({ category, activeCategory, setActiveCategory, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedCount = useCountUp(isVisible ? category.postCount : 0, 1500, 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

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

  return (
    <Link
      href={category.id === "all" ? "/blog" : `/blog/category/${category.id}`}
      onClick={() => setActiveCategory(category.id)}
      className={`group relative p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 block ${activeCategory === category.id
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

        {/* Animated Post Count */}
        <div className="text-sm text-gray-500">
          <span className={`${isVisible ? 'animate-pulse' : ''}`}>
            {isVisible ? animatedCount : 0}
          </span> articles
        </div>
      </div>

      {/* Active Indicator */}
      {activeCategory === category.id && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center">
          <span className="text-white text-xs">✓</span>
        </div>
      )}
    </Link>
  );
};

const BlogCategories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

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
    <section id="blog-categories" className="bg-white py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Testing{" "}
            <span className="text-[theme(color.brand.blue)]">Categories</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-6xl mx-auto">
            Browse our comprehensive collection of software testing articles organized by testing types,
            tools, and methodologies to find exactly what you need. Our categories cover everything from basic principles to advanced techniques, helping you navigate the complex world of quality assurance with ease. Whether you're focusing on specific testing domains or exploring cross-cutting concerns, you'll find curated content to support your QA journey.
          </p>
        </div>

        {/* Categories Grid with Staggered Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-12">
          {categories.slice(0, 100).map((category, index) => (
            <AnimatedCategoryCard
              key={category.id}
              category={category}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              delay={index * 100} // Stagger animation by 100ms for each card
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/blog/categories" // Assuming this is the categories landing page
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[theme(color.brand.blue)] hover:bg-[theme(color.brand.blue)]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[theme(color.brand.blue)]"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;