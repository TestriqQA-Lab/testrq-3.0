//Hero section

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import {
  getTotalPostCount,
  getTotalCategoryCount,
} from "@/lib/wordpress-graphql";

// Custom hook for smooth incrementing animation
const useCountUp = (
  end: number,
  duration: number = 2000,
  start: number = 0
) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (end === start) return;

    const increment = (end - start) / (duration / 16); // Aim for 60fps
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

const BlogHeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [totalArticles, setTotalArticles] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  // Animated counters
  const animatedArticles = useCountUp(totalArticles, 2000);
  const animatedCategories = useCountUp(totalCategories, 2000);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const articlesCount = await getTotalPostCount();
        const categoriesCount = await getTotalCategoryCount();

        setTotalArticles(articlesCount);
        setTotalCategories(categoriesCount);
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to fetch counts:", error);
        // Set fallback values
        setTotalArticles(0);
        setTotalCategories(0);
      } finally {
        setIsLoaded(true);
      }
    };

    fetchCounts();
  }, []);

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        // Navigate to search results page with query parameter
        router.push(`/blog/search?q=${encodeURIComponent(searchQuery.trim())}`);
      }
    },
    [searchQuery, router]
  );

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSearch(e);
      }
    },
    [handleSearch]
  );

  return (
    <section className="bg-gradient-to-br from-[#0B0F1C] via-[#112042] to-[#0B0F1C] text-white py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Blur Circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 bg-opacity-30 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-400 bg-opacity-25 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500 bg-opacity-20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Tagline */}
        <span className="inline-block bg-blue-600/10 text-blue-300 text-sm px-6 py-2 rounded-full mb-6 border border-blue-500/20 tracking-wide">
          Expert QA Insights & Best Practices
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Latest Insights in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Software Testing
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-7xl mx-auto leading-relaxed">
          Stay ahead in the evolving world of software testing with expert QA insights, best practices for automation, and up-to-date guidance on performance, security, and API testing. Our comprehensive blog covers test automation frameworks like Selenium and Appium, in-depth guides on mobile and web application QA, as well as strategies for integrating CI/CD and effective bug tracking. Explore cutting-edge trends in AI-driven software testing, load and stress testing, cloud-native QA, and security vulnerabilities, empowering your development teams to deliver robust, scalable, and secure digital solutions. Whether you&lsquo;re a beginner or an experienced professional, our content is designed to help you improve your testing skills and stay current with industry standards. Dive deeper into topics like regression testing, usability evaluation, and accessibility compliance to ensure your applications meet the highest quality benchmarks.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                window.innerWidth < 600
                  ? "Search topics..."
                  : "Search testing topics, tools, or best practices..."
              }
              className="w-full pl-12 pr-32 py-4 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-medium transition"
            >
              Search
            </button>
          </form>
        </div>

        {/* Stats with Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          {[
            {
              number: isLoaded ? animatedArticles : "Loading...",
              label: "Expert Articles",
              isAnimated: true,
            },
            { number: "50K+", label: "Monthly Readers" },
            {
              number: isLoaded ? animatedCategories : "Loading...",
              label: "Testing Categories",
              isAnimated: true,
            },
            { number: "Weekly", label: "New Content" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`text-2xl md:text-3xl font-bold text-cyan-300 mb-1 ${stat.isAnimated && isLoaded ? "" : ""
                  }`}
              >
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Icons */}
      <div className="hidden lg:block absolute top-1/4 left-10">
        <div className="w-16 h-16 bg-blue-600/20 rounded-lg border border-blue-400/30 backdrop-blur-sm flex items-center justify-center">
          <span className="text-blue-300 font-bold text-lg">QA</span>
        </div>
      </div>

      <div className="hidden lg:block absolute top-1/3 right-10">
        <div className="w-12 h-12 bg-cyan-500/20 rounded-full border border-cyan-400/30 backdrop-blur-sm flex items-center justify-center">
          <span className="text-cyan-300 text-sm">✓</span>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-1/3 left-1/5">
        <div className="w-14 h-14 bg-purple-500/20 rounded-lg border border-purple-400/30 backdrop-blur-sm flex items-center justify-center">
          <span className="text-purple-300 text-xl">🔧</span>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;