"use client";

import React from "react";
import { FaTag, FaBookOpen, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { WordPressTag } from "@/lib/wordpress-graphql";
import Breadcrumb from "@/components/ui/Breadcrumb";

interface TagHeroSectionProps {
  tag: WordPressTag;
  postCount: number;
}

const TagHeroSection: React.FC<TagHeroSectionProps> = ({ tag, postCount }) => {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb
            variant="dark"
            items={[
              { label: "Blog", href: "/blog" },
              { label: tag.name },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Tag Info */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                <FaTag className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  #{tag.name}
                </h1>
                <p className="text-purple-200 text-lg">
                  Explore articles tagged with {tag.name}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-purple-200">
              <div className="flex items-center gap-2">
                <FaBookOpen className="w-5 h-5" />
                <span className="text-lg">
                  {postCount} {postCount === 1 ? 'Article' : 'Articles'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaTag className="w-5 h-5" />
                <span className="text-lg">
                  {tag.count} Total Posts
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
            <Link
              href="/blog/categories"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Browse Categories
            </Link>
          </div>
        </div>

        {/* Tag Description */}
        <div className="mt-8 max-w-3xl">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-purple-100 leading-relaxed">
              Discover comprehensive guides, tutorials, and best practices related to{" "}
              <span className="font-semibold text-white">{tag.name}</span>.
              Our expert-written articles cover everything from basic concepts to advanced techniques,
              helping you master this important aspect of software testing and quality assurance.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-purple-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-pink-400/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-indigo-400/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default TagHeroSection;

