"use client";

import React from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";

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

// Function to clean and render HTML content properly
const renderContent = (content: string) => {
  // Clean up the content and fix common WordPress issues
  const cleanContent = content
    // Remove excessive line breaks and normalize spacing
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    // Fix image tags to ensure proper src attributes
    .replace(/<img([^>]*?)src=["']([^"']*?)["']([^>]*?)>/gi, (match, before, src, after) => {
      // Ensure the image has proper attributes
      const altMatch = match.match(/alt=["']([^"']*?)["']/i);
      const alt = altMatch ? altMatch[1] : '';
      return `<img${before}src="${src}"${after} alt="${alt}" style="max-width: 100%; height: auto; margin: 1rem 0; border-radius: 8px;">`;
    })
    // Fix paragraph spacing
    .replace(/<p>/g, '<p style="margin-bottom: 1rem; line-height: 1.7;">')
    // Fix heading spacing
    .replace(/<h1>/g, '<h1 style="font-size: 2rem; font-weight: bold; margin: 2rem 0 1rem 0; color: #1f2937;">')
    .replace(/<h2>/g, '<h2 style="font-size: 1.75rem; font-weight: bold; margin: 1.75rem 0 1rem 0; color: #1f2937;">')
    .replace(/<h3>/g, '<h3 style="font-size: 1.5rem; font-weight: bold; margin: 1.5rem 0 0.75rem 0; color: #1f2937;">')
    .replace(/<h4>/g, '<h4 style="font-size: 1.25rem; font-weight: bold; margin: 1.25rem 0 0.75rem 0; color: #1f2937;">')
    .replace(/<h5>/g, '<h5 style="font-size: 1.125rem; font-weight: bold; margin: 1.125rem 0 0.5rem 0; color: #1f2937;">')
    .replace(/<h6>/g, '<h6 style="font-size: 1rem; font-weight: bold; margin: 1rem 0 0.5rem 0; color: #1f2937;">')
    // Fix list spacing
    .replace(/<ul>/g, '<ul style="margin: 1rem 0; padding-left: 1.5rem;">')
    .replace(/<ol>/g, '<ol style="margin: 1rem 0; padding-left: 1.5rem;">')
    .replace(/<li>/g, '<li style="margin-bottom: 0.5rem; line-height: 1.6;">')
    // Fix blockquote styling
    .replace(/<blockquote>/g, '<blockquote style="border-left: 4px solid #3b82f6; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #4b5563;">')
    // Fix figure and figcaption
    .replace(/<figure>/g, '<figure style="margin: 1.5rem 0; text-align: center;">')
    .replace(/<figcaption>/g, '<figcaption style="margin-top: 0.5rem; font-size: 0.875rem; color: #6b7280; font-style: italic;">')
    // Fix code blocks
    .replace(/<pre>/g, '<pre style="background-color: #1f2937; color: #f9fafb; padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1rem 0;">')
    .replace(/<code>/g, '<code style="background-color: #f3f4f6; color: #1f2937; padding: 0.25rem 0.5rem; border-radius: 4px; font-family: monospace; font-size: 0.875rem;">')
    // Fix table styling
    .replace(/<table>/g, '<table style="width: 100%; border-collapse: collapse; margin: 1rem 0; border: 1px solid #e5e7eb;">')
    .replace(/<th>/g, '<th style="padding: 0.75rem; background-color: #f9fafb; border: 1px solid #e5e7eb; font-weight: bold; text-align: left;">')
    .replace(/<td>/g, '<td style="padding: 0.75rem; border: 1px solid #e5e7eb;">')
    // Fix links
    .replace(/<a([^>]*?)>/g, '<a$1 style="color: #3b82f6; text-decoration: underline; hover:color: #2563eb;">');

  return cleanContent;
};


const CategoryHeroSection: React.FC<CategoryHeroSectionProps> = ({
  category,
}) => {

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

        <Breadcrumb
          variant="dark"
          items={[
            { label: "Blog", href: "/blog" },
            { label: category.name },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Category Icon and Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-2xl`}
              >
                {category.icon}
              </div>
              <span
                className={`px-4 py-2 bg-gradient-to-r ${category.color} text-white text-sm font-semibold rounded-full`}
              >
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
            <p className="text-xl text-gray-300 mb-8 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: renderContent(category.description) }}
            >

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
                <h3 className="text-3xl font-bold text-white mb-2">
                  Deep Insights
                </h3>
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
