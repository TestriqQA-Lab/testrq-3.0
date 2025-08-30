"use client";

import React, { useMemo } from "react";
import { FaChartBar, FaTrophy, FaFire, FaStar } from "react-icons/fa";
import { WordPressTag } from "@/lib/wordpress-graphql";

interface TagsStatsSectionProps {
  tags: WordPressTag[];
}

const TagsStatsSection: React.FC<TagsStatsSectionProps> = ({ tags }) => {
  const stats = useMemo(() => {
    const totalPosts = tags.reduce((sum, tag) => sum + tag.count, 0);
    const averagePostsPerTag = Math.round(totalPosts / tags.length);
    const mostPopularTag = tags.reduce((prev, current) => 
      (prev.count > current.count) ? prev : current
    );
    const topTags = tags
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return {
      totalPosts,
      averagePostsPerTag,
      mostPopularTag,
      topTags,
    };
  }, [tags]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tag Statistics & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most popular topics and trending areas in software testing
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center border border-blue-200">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4">
              <FaChartBar className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-blue-900 mb-2">{stats.totalPosts}</div>
            <div className="text-blue-700 font-medium">Total Articles</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center border border-purple-200">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-4">
              <FaTrophy className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-purple-900 mb-2">{stats.averagePostsPerTag}</div>
            <div className="text-purple-700 font-medium">Avg. per Tag</div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center border border-orange-200">
            <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-2xl mx-auto mb-4">
              <FaFire className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-orange-900 mb-2">{stats.mostPopularTag.count}</div>
            <div className="text-orange-700 font-medium">Most Popular</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center border border-green-200">
            <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-4">
              <FaStar className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-green-900 mb-2">{tags.length}</div>
            <div className="text-green-700 font-medium">Unique Tags</div>
          </div>
        </div>

        {/* Top Tags */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🏆 Most Popular Tags
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {stats.topTags.map((tag, index) => (
              <div
                key={tag.id}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm
                    ${index === 0 ? 'bg-yellow-500' : 
                      index === 1 ? 'bg-gray-400' : 
                      index === 2 ? 'bg-orange-500' : 
                      'bg-blue-500'}
                  `}>
                    {index + 1}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                  {tag.name}
                </h4>
                <div className="text-2xl font-bold text-gray-700 mb-1">
                  {tag.count}
                </div>
                <div className="text-xs text-gray-500">articles</div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Tag Highlight */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            🔥 Trending Topic: {stats.mostPopularTag.name}
          </h3>
          <p className="text-blue-100 text-lg mb-6">
            Our most popular tag with <span className="font-bold">{stats.mostPopularTag.count} articles</span> covering comprehensive insights and best practices
          </p>
          <a
            href={`/blog/tag/${stats.mostPopularTag.slug}`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
          >
            Explore {stats.mostPopularTag.name} Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default TagsStatsSection;

