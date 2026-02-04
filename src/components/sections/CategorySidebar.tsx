"use client";

import React, { useState, useEffect } from "react";
import { FaBell, FaArrowRight, FaTags, FaSpinner } from "react-icons/fa";
import Link from "next/link";
import { sanityGetCategories as getCategories, sanityGetTags as getTags, Category } from "@/lib/sanity-data-adapter";

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
        setLoading(true);
        // Fetch all categories from Sanity
        const sanityCategories = await getCategories();
        const related = (sanityCategories as Category[])
          .filter((cat: Category) => cat.postCount > 0 && cat.id !== category.id)
          .sort((a: Category, b: Category) => b.postCount - a.postCount)
          .slice(0, 4)
          .map((cat: Category) => ({
            name: cat.name,
            slug: cat.id,
            icon: cat.icon,
            color: cat.color,
            postCount: cat.postCount
          }));
        setRelatedCategories(related);

        // Fetch tags from Sanity
        const tagsResult = await getTags();
        const sortedPopularTags = (tagsResult as PopularTag[])
          .sort((a: PopularTag, b: PopularTag) => b.count - a.count)
          .slice(0, 20);

        setPopularTags(sortedPopularTags);
      } catch (error) {
        console.error("Error fetching sidebar data:", error);
      } finally {
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

