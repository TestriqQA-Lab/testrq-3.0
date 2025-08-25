"use client";

import React from "react";
import { FaArrowLeft } from "react-icons/fa";
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

interface CategoryHeroSectionProps {
  category: Category;
}

const CategoryHeroSection: React.FC<CategoryHeroSectionProps> = ({ category }) => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white py-13 px-8 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 bg-opacity-20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 bg-opacity-15 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-600 bg-opacity-10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-blue-200 mb-8">
          <Link href="/blog" className="flex items-center gap-2 hover:text-white transition-colors">
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          <span>/</span>
          <span className="text-gray-400">Categories</span>
          <span>/</span>
          <span className="text-white">{category.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Category Icon and Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-2xl`}>
                {category.icon}
              </div>
              <span className={`px-4 py-2 bg-gradient-to-r ${category.color} text-white text-sm font-semibold rounded-full`}>
                {category.name} Category
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {category.name}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Insights
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {category.description}
            </p>
          </div>


          {/* Right Content - Abstract Insight Visualization */}
          <div className="relative flex items-center justify-center p-2">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-blue-700 to-blue-900 shadow-2xl flex items-center justify-center animate-fade-in">
              {/* Central glowing orb */}
              <div className="absolute w-24 h-24 bg-cyan-400 rounded-full mix-blend-screen blur-xl opacity-70 animate-pulse-slow"></div>

              {/* Abstract shapes and lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-2 border-blue-400 rounded-full animate-spin-slow opacity-30"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/2 h-1/2 border-2 border-blue-300 rounded-full animate-spin-reverse-slow opacity-20"></div>
              </div>

              {/* Data points/nodes */}
              <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-300 rounded-full shadow-lg"></div>
              <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-cyan-300 rounded-full shadow-lg"></div>
              <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-blue-400 rounded-full shadow-lg"></div>
              <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-cyan-400 rounded-full shadow-lg"></div>

              {/* Text overlay */}
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold text-white mb-2">Deep Insights</h3>
                <p className="text-blue-200 text-lg">Unlocking Knowledge</p>
              </div>
            </div>
          </div>
        </div>
    
        
      </div>
    </section>
  );
};

export default CategoryHeroSection;

