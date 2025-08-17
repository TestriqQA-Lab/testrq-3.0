"use client";

import React, { useState, useEffect } from "react";
import { FaSearch, FaBookOpen, FaUsers, FaRocket } from "react-icons/fa";
import { getTotalPostCount, getTotalCategoryCount } from "@/lib/wordpress-graphql";

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

const CategoriesHeroSection: React.FC = () => {
  const [totalArticles, setTotalArticles] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

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
        console.error("Error fetching counts:", error);
        // Set fallback values
        setTotalArticles(500);
        setTotalCategories(15);
        setIsLoaded(true);
      }
    };

    fetchCounts();
  }, []);

  // Format number for display (removed unnecessary rounding and K for exact numbers)
  const formatNumber = (num: number) => {
    return `${num}`;
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width=\'60\%’ height=\'60\%’ viewBox=\'0 0 60 60\%’ xmlns=\'http://www.w3.org/2000/svg\%\u2019%3E%3Cg fill=\'none\%’ fill-rule=\'evenodd\%’%3E%3Cg fill=\'\%23ffffff\%’ fill-opacity=\'0.1\%’%3E%3Ccircle cx=\'30\%’ cy=\'30\%’ r=\'2\%’%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/svg\%\u2019%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Explore All
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Testing Categories
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover comprehensive guides, tutorials, and best practices across all areas of software testing and quality assurance
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-3">
                <FaBookOpen className="w-6 h-6 text-white" />
              </div>
              <div className={`text-2xl font-bold text-white mb-1 ${
                isLoaded ? '' : 'animate-pulse'
              }`}>
                {isLoaded ? formatNumber(animatedArticles) : "Loading..."}
              </div>
              <div className="text-blue-200 text-sm">Articles</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-lg mx-auto mb-3">
                <FaUsers className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">50K+</div>
              <div className="text-blue-200 text-sm">Readers</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-3">
                <FaRocket className="w-6 h-6 text-white" />
              </div>
              <div className={`text-2xl font-bold text-white mb-1 ${
                isLoaded ? '' : 'animate-pulse'
              }`}>
                {isLoaded ? formatNumber(animatedCategories) : "Loading..."}
              </div>
              <div className="text-blue-200 text-sm">Categories</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-lg mx-auto mb-3">
                <FaSearch className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">100+</div>
              <div className="text-blue-200 text-sm">Tools Covered</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-blue-200 mb-6">
              From beginner guides to advanced techniques, find everything you need to excel in software testing
            </p>
            
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default CategoriesHeroSection;

