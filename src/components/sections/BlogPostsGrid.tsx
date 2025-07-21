"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaArrowRight, FaFire, FaStar, FaEye } from "react-icons/fa";

const BlogPostsGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Test Automation with Selenium WebDriver in 2025",
      excerpt: "Master Selenium WebDriver with our comprehensive guide covering setup, best practices, advanced techniques, and real-world examples for web application testing.",
      category: "Test Automation",
      categoryColor: "from-blue-500 to-blue-600",
      author: "Sarah Johnson",
      authorImage: "/api/placeholder/40/40",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      featured: true,
      trending: true,
      views: "12.5K"
    },
    {
      id: 2,
      title: "Performance Testing Best Practices: Load Testing with JMeter",
      excerpt: "Learn how to conduct effective performance testing using Apache JMeter, including test planning, execution, and result analysis for optimal application performance.",
      category: "Performance Testing",
      categoryColor: "from-green-500 to-green-600",
      author: "Mike Chen",
      authorImage: "/api/placeholder/40/40",
      date: "Jan 12, 2025",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      featured: false,
      trending: true,
      views: "8.2K"
    },
    {
      id: 3,
      title: "Mobile App Security Testing: Protecting iOS and Android Applications",
      excerpt: "Comprehensive guide to mobile app security testing covering OWASP Mobile Top 10, penetration testing techniques, and security best practices.",
      category: "Security Testing",
      categoryColor: "from-red-500 to-red-600",
      author: "Alex Rodriguez",
      authorImage: "/api/placeholder/40/40",
      date: "Jan 10, 2025",
      readTime: "10 min read",
      image: "/api/placeholder/400/250",
      featured: true,
      trending: false,
      views: "15.3K"
    },
    {
      id: 4,
      title: "API Testing with Postman: From Basics to Advanced Automation",
      excerpt: "Master API testing with Postman including collection creation, environment variables, automated testing, and CI/CD integration for robust API validation.",
      category: "API Testing",
      categoryColor: "from-purple-500 to-purple-600",
      author: "Emily Davis",
      authorImage: "/api/placeholder/40/40",
      date: "Jan 8, 2025",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      featured: false,
      trending: true,
      views: "9.7K"
    },
    {
      id: 5,
      title: "Cross-Browser Testing Strategies for Modern Web Applications",
      excerpt: "Ensure your web applications work flawlessly across all browsers with our comprehensive cross-browser testing strategies and tools comparison.",
      category: "Web Testing",
      categoryColor: "from-indigo-500 to-indigo-600",
      author: "David Kim",
      authorImage: "/api/placeholder/40/40",
      date: "Jan 5, 2025",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      featured: false,
      trending: false,
      views: "6.1K"
    },
    {
      id: 6,
      title: "Cypress vs Playwright: Choosing the Right E2E Testing Framework",
      excerpt: "Detailed comparison of Cypress and Playwright for end-to-end testing, covering features, performance, ecosystem, and use case recommendations.",
      category: "Test Automation",
      categoryColor: "from-blue-500 to-blue-600",
      author: "Lisa Wang",
      authorImage: "/api/placeholder/40/40",
      date: "Jan 3, 2025",
      readTime: "9 min read",
      image: "/api/placeholder/400/250",
      featured: false,
      trending: true,
      views: "11.4K"
    },
    {
      id: 7,
      title: "Cloud Testing Strategies: Testing in AWS, Azure, and GCP",
      excerpt: "Learn effective cloud testing strategies for major cloud platforms including infrastructure testing, scalability testing, and cost optimization.",
      category: "Cloud Testing",
      categoryColor: "from-cyan-500 to-cyan-600",
      author: "Robert Taylor",
      authorImage: "/api/placeholder/40/40",
      date: "Dec 30, 2024",
      readTime: "12 min read",
      image: "/api/placeholder/400/250",
      featured: true,
      trending: false,
      views: "7.8K"
    },
    {
      id: 8,
      title: "Test Data Management: Best Practices for QA Teams",
      excerpt: "Comprehensive guide to test data management including data generation, masking, provisioning, and compliance considerations for effective testing.",
      category: "QA Management",
      categoryColor: "from-orange-500 to-orange-600",
      author: "Jennifer Brown",
      authorImage: "/api/placeholder/40/40",
      date: "Dec 28, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      featured: false,
      trending: false,
      views: "5.3K"
    },
    {
      id: 9,
      title: "Accessibility Testing: Ensuring Inclusive Web Applications",
      excerpt: "Learn how to conduct thorough accessibility testing to ensure your web applications are usable by everyone, including users with disabilities.",
      category: "Accessibility Testing",
      categoryColor: "from-teal-500 to-teal-600",
      author: "Mark Wilson",
      authorImage: "/api/placeholder/40/40",
      date: "Dec 25, 2024",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      featured: false,
      trending: false,
      views: "4.9K"
    }
  ];

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const currentPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const featuredPosts = blogPosts.filter(post => post.featured);
  const trendingPosts = blogPosts.filter(post => post.trending);

  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Featured Posts Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FaStar className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${post.categoryColor} text-white text-sm font-semibold rounded-full`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[theme(color.brand.blue)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          className="w-6 h-6 rounded-full"
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
                    
                    <button className="flex items-center gap-2 text-[theme(color.brand.blue)] hover:text-blue-600 font-semibold transition-colors">
                      Read More
                      <FaArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Trending Posts Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FaFire className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingPosts.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 bg-gradient-to-r ${post.categoryColor} text-white text-xs font-semibold rounded-full`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <FaFire className="w-2 h-2" />
                    HOT
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[theme(color.brand.blue)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <div className="flex items-center gap-1">
                      <FaEye className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  
                  <button className="text-[theme(color.brand.blue)] hover:text-blue-600 font-semibold text-sm transition-colors">
                    Read Article →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Posts Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${post.categoryColor} text-white text-sm font-semibold rounded-full`}>
                      {post.category}
                    </span>
                  </div>
                  {post.trending && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      TRENDING
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
                          className="w-5 h-5 rounded-full"
                        />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <button className="text-[theme(color.brand.blue)] hover:text-blue-600 font-semibold text-sm transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
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
        </div>
      </div>
    </section>
  );
};

export default BlogPostsGrid;

