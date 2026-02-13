"use client";

import React, { useState, useEffect } from "react";
import { FaTag, FaArrowRight, FaBell, FaSpinner } from "react-icons/fa";
import Link from "next/link";
import { sanityGetTags as getTags, Tag } from "@/lib/sanity-data-adapter";

interface TagSidebarProps {
  tag: Tag;
}

interface RelatedTag {
  name: string;
  slug: string;
  count: number;
}

const TagSidebar: React.FC<TagSidebarProps> = ({ tag }) => {
  const [relatedTags, setRelatedTags] = useState<RelatedTag[]>([]);
  const [popularTags, setPopularTags] = useState<RelatedTag[]>([]);
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
        // Fetch all tags from Sanity
        const allTags = await getTags();

        // Filter out current tag and get related/popular tags
        const otherTags = (allTags as RelatedTag[])
          .filter((t: RelatedTag) => t.slug !== tag.slug)
          .map((t: RelatedTag) => ({
            name: t.name,
            slug: t.slug,
            count: t.count
          }));

        // Sort by count for popular tags
        const popular = otherTags
          .sort((a: RelatedTag, b: RelatedTag) => b.count - a.count)
          .slice(0, 20);

        setPopularTags(popular);
        setRelatedTags(popular.slice(0, 8)); // Use same as related for now
      } catch (error) {
        console.error("Error fetching sidebar data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSidebarData();
  }, [tag.slug]);

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
      {/* Tag Information */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
            <FaTag className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">#{tag.name}</h3>
            <p className="text-sm text-gray-600">{tag.count} articles</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          This tag covers articles related to {tag.name} in software testing and quality assurance.
          Explore comprehensive guides, tutorials, and best practices.
        </p>
      </div>

      {/* Related Tags */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Related Tags</h3>
        <div className="space-y-3">
          {relatedTags.length > 0 ? (
            relatedTags.map((relatedTag, index) => (
              <Link
                key={index}
                href={`/blog/tag/${encodeURIComponent(relatedTag.slug)}`}
                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-purple-50 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <FaTag className="w-3 h-3 text-purple-500" />
                  <span className="text-sm text-gray-700 group-hover:text-purple-600">
                    #{relatedTag.name}
                  </span>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {relatedTag.count}
                </span>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No related tags found.</p>
          )}
        </div>
        <Link
          href="/blog/categories"
          className="flex items-center justify-center gap-2 mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
        >
          <span>Browse All Categories</span>
          <FaArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.length > 0 ? (
            popularTags.map((popularTag, index) => (
              <Link
                key={index}
                href={`/blog/tag/${encodeURIComponent(popularTag.slug)}`}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-purple-600 hover:text-white transition-colors"
              >
                #{popularTag.name}
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No tags available.</p>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <Link
            href="/blog"
            className="flex items-center justify-between py-2 px-3 bg-white rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            <span className="text-gray-700">Browse All Articles</span>
            <FaArrowRight className="w-3 h-3 text-gray-400" />
          </Link>
          <Link
            href="/blog/categories"
            className="flex items-center justify-between py-2 px-3 bg-white rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            <span className="text-gray-700">View Categories</span>
            <FaArrowRight className="w-3 h-3 text-gray-400" />
          </Link>
          <Link
            href="/blog/search"
            className="flex items-center justify-between py-2 px-3 bg-white rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            <span className="text-gray-700">Search Articles</span>
            <FaArrowRight className="w-3 h-3 text-gray-400" />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default TagSidebar;

