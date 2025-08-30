"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { FaTag, FaSearch, FaFilter, FaSortAmountDown, FaSortAmountUp, FaBookOpen } from "react-icons/fa";
import Link from "next/link";
import { WordPressTag, WordPressPageInfo, getTags } from "@/lib/wordpress-graphql";

interface TagsGridSectionProps {
  initialTags: WordPressTag[];
  initialPageInfo: WordPressPageInfo;
}

type SortOption = 'name-asc' | 'name-desc' | 'count-desc' | 'count-asc';

const TagsGridSection: React.FC<TagsGridSectionProps> = ({
  initialTags,
  initialPageInfo,
}) => {
  const [tags, setTags] = useState<WordPressTag[]>(initialTags);
  const [pageInfo, setPageInfo] = useState<WordPressPageInfo>(initialPageInfo);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("count-desc");
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedTags = useMemo(() => {
    let filtered = tags.filter(tag =>
      tag.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    switch (sortBy) {
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "count-desc":
        filtered.sort((a, b) => b.count - a.count);
        break;
      case "count-asc":
        filtered.sort((a, b) => a.count - b.count);
        break;
    }

    return filtered;
  }, [tags, searchTerm, sortBy]);

  const getTagColor = (index: number) => {
    const colors = [
      "from-blue-500 to-blue-600",
      "from-purple-500 to-purple-600",
      "from-green-500 to-green-600",
      "from-orange-500 to-orange-600",
      "from-pink-500 to-pink-600",
      "from-indigo-500 to-indigo-600",
      "from-red-500 to-red-600",
      "from-teal-500 to-teal-600",
      "from-yellow-500 to-yellow-600",
      "from-cyan-500 to-cyan-600",
    ];
    return colors[index % colors.length];
  };

  const getTagSize = (count: number, maxCount: number) => {
    const ratio = count / maxCount;
    if (ratio > 0.8) return "text-lg font-bold";
    if (ratio > 0.6) return "text-base font-semibold";
    if (ratio > 0.4) return "text-sm font-medium";
    return "text-sm font-normal";
  };

  const maxCount = useMemo(() => Math.max(...tags.map(tag => tag.count)), [tags]);

  const loadMoreTags = useCallback(async () => {
    if (!pageInfo.hasNextPage || loading) return;

    setLoading(true);
    setError(null);

    try {
      const { tags: newTags, pageInfo: newPageInfo } = await getTags(
        100, // Fetch 100 tags at a time
        pageInfo.endCursor
      );
      setTags((prevTags) => [...prevTags, ...newTags]);
      setPageInfo(newPageInfo);
    } catch (err) {
      console.error("Failed to load more tags:", err);
      setError("Failed to load more tags. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [pageInfo, loading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && pageInfo.hasNextPage && !loading) {
          loadMoreTags();
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 1.0,
      }
    );

    const loader = document.getElementById("tags-loader");
    if (loader) {
      observer.observe(loader);
    }

    return () => {
      if (loader) {
        observer.unobserve(loader);
      }
    };
  }, [loadMoreTags, pageInfo.hasNextPage, loading]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse All Tags
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click on any tag to explore related articles and dive deep into specific testing topics
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 border border-gray-200">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Sort and Filter */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <FaFilter className="w-4 h-4" />
                <span>Filters</span>
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="count-desc">Most Popular</option>
                <option value="count-asc">Least Popular</option>
                <option value="name-asc">A to Z</option>
                <option value="name-desc">Z to A</option>
              </select>
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700 mr-4">Quick Filters:</span>
                <button
                  onClick={() => setSearchTerm("automation")}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                >
                  Automation
                </button>
                <button
                  onClick={() => setSearchTerm("performance")}
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm hover:bg-green-200 transition-colors"
                >
                  Performance
                </button>
                <button
                  onClick={() => setSearchTerm("security")}
                  className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200 transition-colors"
                >
                  Security
                </button>
                <button
                  onClick={() => setSearchTerm("mobile")}
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm hover:bg-purple-200 transition-colors"
                >
                  Mobile
                </button>
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredAndSortedTags.length}</span> of{" "}
            <span className="font-semibold">{tags.length}</span> tags
            {searchTerm && (
              <span> matching "<span className="font-semibold">{searchTerm}</span>"</span>
            )}
          </p>
        </div>

        {/* Tags Grid */}
        {filteredAndSortedTags.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredAndSortedTags.map((tag, index) => (
              <Link
                key={tag.id}
                href={`/blog/tag/${tag.slug}`}
                className="group block"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
                  {/* Tag Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`
                      flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${getTagColor(index)} shadow-lg
                    `}>
                      <FaTag className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">articles</div>
                      <div className="text-lg font-bold text-gray-900">{tag.count}</div>
                    </div>
                  </div>

                  {/* Tag Name */}
                  <h3 className={`
                    text-gray-900 mb-2 group-hover:text-blue-600 transition-colors
                    ${getTagSize(tag.count, maxCount)}
                  `}>
                    {tag.name}
                  </h3>

                  {/* Tag Description */}
                  {tag.description && (
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {tag.description}
                    </p>
                  )}

                  {/* Explore Button */}
                  <div className="flex items-center gap-2 text-blue-600 text-sm font-medium group-hover:text-blue-700">
                    <FaBookOpen className="w-4 h-4" />
                    <span>Explore Articles</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6">
              <FaSearch className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No tags found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or clearing the filters
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSortBy("count-desc");
              }}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 mt-8">
            <p>{error}</p>
          </div>
        )}

        {loading && (
          <div className="text-center mt-8">
            <p className="text-gray-600">Loading more tags...</p>
          </div>
        )}

        {!loading && pageInfo.hasNextPage && (
          <div id="tags-loader" className="text-center mt-8">
            <button
              onClick={loadMoreTags}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Load More
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-blue-100 text-lg mb-6">
            Explore our comprehensive categories or search through all our articles
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blog/categories"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
            >
              Browse Categories
            </Link>
            <Link
              href="/blog/search"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Search Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TagsGridSection;


