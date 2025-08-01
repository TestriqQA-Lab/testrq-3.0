"use client";

import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaEye, FaHeart, FaShare, FaArrowRight, FaFilter, FaSort } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface Category {
  id: string;
  name: string;
  color: string;
}

interface CategoryPostsGridProps {
  category: Category;
}

const CategoryPostsGrid: React.FC<CategoryPostsGridProps> = ({ category }) => {
  const [sortBy, setSortBy] = useState("latest");
  const [filterBy, setFilterBy] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Sample posts data for the category (in a real app, this would be fetched from API)
  const categoryPosts = [
    {
      id: 1,
      title: "Complete Guide to Test Automation with Selenium WebDriver in 2025",
      excerpt: "Master Selenium WebDriver with our comprehensive guide covering setup, best practices, advanced techniques, and real-world examples for web application testing.",
      author: "Sarah Johnson",
      authorImage: "/api/placeholder/40/40",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      views: "12.5K",
      likes: 245,
      shares: 89,
      difficulty: "Intermediate",
      featured: true,
      trending: true,
      tags: ["Selenium", "WebDriver", "Java", "Automation"]
    },
    {
      id: 2,
      title: "Cypress vs Playwright: Choosing the Right E2E Testing Framework",
      excerpt: "Detailed comparison of Cypress and Playwright for end-to-end testing, covering features, performance, ecosystem, and use case recommendations.",
      author: "Lisa Wang",
      authorImage: "/api/placeholder/40/40",
      date: "Jan 3, 2025",
      readTime: "9 min read",
      image: "/api/placeholder/400/250",
      views: "11.4K",
      likes: 198,
      shares: 67,
      difficulty: "Advanced",
      featured: false,
      trending: true,
      tags: ["Cypress", "Playwright", "E2E Testing", "Comparison"]
    },
    {
      id: 3,
      title: "Building Robust Test Automation Frameworks: Best Practices",
      excerpt: "Learn how to design and implement scalable test automation frameworks that are maintainable, reliable, and efficient for long-term success.",
      author: "Michael Chen",
      authorImage: "/api/placeholder/40/40",
      date: "Dec 28, 2024",
      readTime: "12 min read",
      image: "/api/placeholder/400/250",
      views: "9.8K",
      likes: 156,
      shares: 45,
      difficulty: "Advanced",
      featured: true,
      trending: false,
      tags: ["Framework", "Architecture", "Best Practices", "Scalability"]
    },
    {
      id: 4,
      title: "Getting Started with TestComplete: A Beginner's Guide",
      excerpt: "Step-by-step guide to getting started with TestComplete for desktop, web, and mobile application testing automation.",
      author: "Emma Rodriguez",
      authorImage: "/api/placeholder/40/40",
      date: "Dec 20, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      views: "7.2K",
      likes: 89,
      shares: 23,
      difficulty: "Beginner",
      featured: false,
      trending: false,
      tags: ["TestComplete", "Beginner", "Desktop Testing", "Mobile Testing"]
    },
    {
      id: 5,
      title: "Advanced Selenium Techniques: Handling Complex Web Elements",
      excerpt: "Master advanced Selenium techniques for handling dynamic content, shadow DOM, iframes, and complex user interactions.",
      author: "David Kim",
      authorImage: "/api/placeholder/40/40",
      date: "Dec 15, 2024",
      readTime: "10 min read",
      image: "/api/placeholder/400/250",
      views: "8.9K",
      likes: 134,
      shares: 56,
      difficulty: "Advanced",
      featured: false,
      trending: true,
      tags: ["Selenium", "Advanced", "Dynamic Content", "Shadow DOM"]
    },
    {
      id: 6,
      title: "Robot Framework Tutorial: Keyword-Driven Testing Made Easy",
      excerpt: "Comprehensive tutorial on Robot Framework for keyword-driven test automation with practical examples and best practices.",
      author: "Anna Petrov",
      authorImage: "/api/placeholder/40/40",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      views: "6.5K",
      likes: 78,
      shares: 34,
      difficulty: "Intermediate",
      featured: false,
      trending: false,
      tags: ["Robot Framework", "Keyword-Driven", "Python", "BDD"]
    }
  ];

  const sortOptions = [
    { value: "latest", label: "Latest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "popular", label: "Most Popular" },
    { value: "trending", label: "Trending" }
  ];

  const filterOptions = [
    { value: "all", label: "All Posts" },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
    { value: "featured", label: "Featured" },
    { value: "trending", label: "Trending" }
  ];

  // Filter and sort posts
  let filteredPosts = categoryPosts;
  
  if (filterBy !== "all") {
    filteredPosts = categoryPosts.filter(post => {
      switch (filterBy) {
        case "featured":
          return post.featured;
        case "trending":
          return post.trending;
        default:
          return post.difficulty.toLowerCase() === filterBy;
      }
    });
  }

  // Sort posts
  filteredPosts.sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.views.localeCompare(a.views);
      case "trending":
        return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      default: // latest
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div>
      {/* Header with Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {category.name} Articles ({filteredPosts.length})
          </h2>
          <p className="text-gray-600">
            Discover expert insights and tutorials on {category.name.toLowerCase()}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {/* Filter Dropdown */}
          <div className="relative">
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent"
            >
              {filterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <FaFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[theme(color.brand.blue)] focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <FaSort className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 mb-12">
        {currentPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-1/3 relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className={`px-3 py-1 bg-gradient-to-r ${category.color} text-white text-sm font-semibold rounded-full`}>
                    {category.name}
                  </span>
                  {post.featured && (
                    <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                  )}
                  {post.trending && (
                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                      TRENDING
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(post.difficulty)}`}>
                    {post.difficulty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[theme(color.brand.blue)] transition-colors line-clamp-2">
                  <Link href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
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
                      <FaCalendarAlt className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="flex items-center gap-2 text-[theme(color.brand.blue)] hover:text-blue-600 font-semibold text-sm transition-colors"
                  >
                    Read More
                    <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <FaEye className="w-3 h-3" />
                    <span>{post.views}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <FaHeart className="w-3 h-3" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <FaShare className="w-3 h-3" />
                    <span>{post.shares}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  currentPage === index + 1
                    ? 'bg-[theme(color.brand.blue)] text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📝</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your filters or check back later for new content.
          </p>
          <button
            onClick={() => {
              setFilterBy("all");
              setSortBy("latest");
            }}
            className="px-6 py-3 bg-[theme(color.brand.blue)] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryPostsGrid;

