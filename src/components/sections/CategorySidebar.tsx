"use client";

import React, { useState, useEffect } from "react";
import { FaBell, FaArrowRight, FaTags, FaSpinner } from "react-icons/fa";
import Link from "next/link";
import { getCategories, getTags } from "@/lib/wordpress-graphql"; // Import getTags
import { adaptWordPressCategory } from "@/lib/wordpress-data-adapter";

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

interface CategorySidebarProps {
  category: Category;
}

interface RelatedCategory {
  name: string;
  slug: string;
  icon: string;
  color: string;
  postCount: number;
}

interface PopularTag {
  name: string;
  slug: string;
  count: number;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ category }) => {
  const [relatedCategories, setRelatedCategories] = useState<RelatedCategory[]>([]);
  const [popularTags, setPopularTags] = useState<PopularTag[]>([]);
  const [loading, setLoading] = useState(true);

  // Newsletter state
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSidebarData = async () => {
      try {
        // Fetch all categories
        const wpCategories = await getCategories();
        const adaptedCategories = wpCategories
          .filter(cat => cat.count > 0 && cat.slug !== category.id) // Exclude current category
          .map(adaptWordPressCategory);

        // Sort by post count and take top 4 for related categories
        const sortedRelatedCategories = adaptedCategories
          .sort((a, b) => b.postCount - a.postCount)
          .slice(0, 4)
          .map(cat => ({
            name: cat.name,
            slug: cat.id, // Use the id which is the slug from adaptWordPressCategory
            icon: cat.icon,
            color: cat.color,
            postCount: cat.postCount
          }));
        setRelatedCategories(sortedRelatedCategories);

        // Fetch all tags from WordPress GraphQL
        const wpTags = await getTags(50);
        const sortedPopularTags = wpTags
          .sort((a, b) => b.count - a.count) // Sort by count to get popular tags
          .slice(0, 20) // Take top 20 popular tags
          .map(tag => ({
            name: tag.name,
            slug: tag.slug,
            count: tag.count
          }));

        setPopularTags(sortedPopularTags);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching sidebar data:", error);
        setLoading(false);
      }
    };

    fetchSidebarData();
  }, [category.id]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    setNewsletterLoading(true);
    setError("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribed(true);
        setEmail("");

        setTimeout(() => {
          setSubscribed(false);
        }, 5000);
      } else {
        setError(data.error || "Subscription failed");
      }
    } catch (err) {
      console.error("Subscription error:", err);
      setError("Network error. Please try again.");
    } finally {
      setNewsletterLoading(false);
    }
  };

  if (loading) {
    return (
      <aside className="space-y-8">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="space-y-3">
              <div className="h-3 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="space-y-8">

      {/* Newsletter Signup */}
      <div className={`bg-gradient-to-br ${category.color} rounded-xl p-6 text-white`}>
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br ${category.color} bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FaBell className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
          <p className="text-white text-opacity-90 text-sm mb-4">
            Get the latest {category.name.toLowerCase()} insights delivered weekly.
          </p>
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="space-y-3">
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-2 text-red-200 text-xs">
                  {error}
                </div>
              )}
              <input
                type="email"
                placeholder="your.email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-white/90 border border-white/90 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                disabled={newsletterLoading}
              />
              <button
                type="submit"
                disabled={newsletterLoading}
                className="w-full px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {newsletterLoading ? (
                  <>
                    <FaSpinner className="w-4 h-4 animate-spin" />
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <span>Subscribe Now</span>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-lg">✓</span>
              </div>
              <h3 className="text-md font-bold text-white mb-1">
                Subscribed!
              </h3>
              <p className="text-gray-100 text-sm">
                Thank you for joining!
              </p>
            </div>
          )}
          <p className="text-xs text-white text-opacity-70 mt-3">
            Join {(category.subscribers / 1000).toFixed(1)}K+ subscribers
          </p>
        </div>
      </div>

      {/* Related Categories */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Related Categories</h3>
        <div className="space-y-3">
          {relatedCategories.length > 0 ? (
            relatedCategories.map((relatedCategory, index) => (
              <Link
                key={index}
                href={`/blog/category/${relatedCategory.slug}`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${relatedCategory.color} rounded-lg flex items-center justify-center text-white`}>
                  <span className="text-lg">{relatedCategory.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 group-hover:text-[theme(color.brand.blue)] transition-colors">
                    {relatedCategory.name}
                  </div>
                  <div className="text-sm text-gray-500">{relatedCategory.postCount} articles</div>
                </div>
                <FaArrowRight className="w-3 h-3 text-gray-400 group-hover:text-[theme(color.brand.blue)] transition-colors" />
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No related categories found.</p>
          )}
        </div>
        <Link
          href="/blog/categories"
          className="block mt-4 text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
        >
          View All Categories
        </Link>
      </div>



      {/* Popular Tags */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FaTags className="w-5 h-5 text-gray-500" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.length > 0 ? (
            popularTags.map((tag, index) => (
              <Link
                key={index}
                href={`/blog/tag/${tag.slug}`}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[theme(color.brand.blue)] hover:text-white transition-colors"
              >
                #{tag.name}
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No popular tags available.</p>
          )}
        </div>
      </div>

    </aside>
  );
};

export default CategorySidebar;

