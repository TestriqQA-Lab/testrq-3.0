"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaBell,
  FaSpinner,
} from "react-icons/fa";
import Link from "next/link";
import { getPosts, getCategories } from "@/lib/wordpress-graphql";
import { adaptWordPressPost } from "@/lib/wordpress-data-adapter";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  views: string;
  likes: number;
  shares: number;
  tags: string[];
  slug: string;
}

interface BlogPostSidebarProps {
  post: BlogPost;
}

interface RelatedPost {
  title: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

interface Category {
  name: string;
  count: number;
  slug: string;
}

const BlogPostSidebar: React.FC<BlogPostSidebarProps> = ({ post }) => {
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [popularTags, setPopularTags] = useState<string[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // Newsletter state
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSidebarData = async () => {
      try {
        // Fetch related posts from the same category or with similar tags
        const postsResponse = await getPosts(20);
        const allPosts = postsResponse.posts.map(adaptWordPressPost);
        
        // Filter related posts based on category or tags
        const related = allPosts
          .filter(p => 
            p.id !== post.id && (
              p.category === post.category || 
              p.tags.some(tag => post.tags.includes(tag))
            )
          )
          .slice(0, 3)
          .map(p => ({
            title: p.title,
            category: p.category,
            readTime: p.readTime,
            image: p.image,
            slug: p.slug
          }));

        setRelatedPosts(related);

        // Extract popular tags from all posts
        const allTags = allPosts.flatMap(p => p.tags);
        const tagCounts = allTags.reduce((acc, tag) => {
          acc[tag] = (acc[tag] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);

        const sortedTags = Object.entries(tagCounts)
          .sort(([,a], [,b]) => b - a)
          .slice(0, 10)
          .map(([tag]) => tag);

        setPopularTags(sortedTags);

        // Fetch categories
        const wpCategories = await getCategories();
        const adaptedCategories = wpCategories
          .filter(cat => cat.count > 0)
          .map(cat => ({
            name: cat.name,
            count: cat.count,
            slug: cat.slug
          }))
          .slice(0, 6);

        setCategories(adaptedCategories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching sidebar data:", error);
        setLoading(false);
      }
    };

    fetchSidebarData();
  }, [post.id, post.category, post.tags]);

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
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <div className="text-center">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FaBell className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
          <p className="text-blue-100 text-sm mb-4">
            Get the latest testing insights delivered to your inbox weekly.
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
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white"
                disabled={newsletterLoading}
              />
              <button
                type="submit"
                disabled={newsletterLoading}
                className="w-full px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
          <p className="text-xs text-blue-200 mt-3">
            Join 10,000+ QA professionals
          </p>
        </div>
      </div>

      {/* Related Posts - Dynamic */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Related Articles
        </h3>
        <div className="space-y-4">
          {relatedPosts.length > 0 ? (
            relatedPosts.map((relatedPost, index) => (
              <Link
                key={index}
                href={`/blog/${relatedPost.slug}`}
                className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <Image
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  width={64}
                  height={48}
                  className="w-16 h-12 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <span>{relatedPost.category}</span>
                    <span>•</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No related articles found.</p>
          )}
        </div>
        <Link
          href="/blog"
          className="flex items-center justify-center gap-2 mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
        >
          <span>View All Articles</span>
          <FaArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Popular Tags - Dynamic */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.length > 0 ? (
            popularTags.map((tag, index) => (
              <Link
                key={index}
                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-600 hover:text-white transition-colors"
              >
                #{tag}
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No tags available.</p>
          )}
        </div>
      </div>

      {/* Categories - Dynamic */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <Link
                key={index}
                href={`/blog/category/${category.slug}`}
                className="flex items-center justify-between py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span className="text-sm">{category.name}</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No categories available.</p>
          )}
        </div>
      </div>

    </aside>
  );
};

export default BlogPostSidebar;