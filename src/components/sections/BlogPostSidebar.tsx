"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  FaClock,
  FaArrowRight,
  FaBell,
  FaList,
  FaTags,
  FaBookOpen,
} from "react-icons/fa";
import Link from "next/link";
import { getPosts, getCategories } from "@/lib/wordpress-graphql";
import { adaptWordPressPost, adaptWordPressCategory } from "@/lib/wordpress-data-adapter";

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
        console.error('Error fetching sidebar data:', error);
        setLoading(false);
      }
    };

    fetchSidebarData();
  }, [post.id, post.category, post.tags]);

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
      {/* Table of Contents */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <FaList className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Table of Contents</h3>
        </div>
        <nav className="space-y-2">
          {tableOfContents.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className={`block text-sm hover:text-blue-600 transition-colors py-1 ${
                item.level === 1 
                  ? "font-medium text-gray-900" 
                  : "text-gray-600 ml-4"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <div className="text-center">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FaBell className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
          <p className="text-blue-100 text-sm mb-4">
            Get the latest testing insights and best practices delivered weekly.
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          ) : (
            <div className="bg-white/20 rounded-lg p-4">
              <p className="text-sm">✅ Thank you for subscribing!</p>
            </div>
          )}
          
          <p className="text-xs text-blue-200 mt-3">
            Join 10,000+ QA professionals
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Table of Contents
        </h3>
        <nav className="space-y-2">
          {[
            "Introduction",
            "Getting Started",
            "Best Practices",
            "Advanced Techniques",
            "Integration Tips",
            "Common Challenges",
            "Conclusion",
          ].map((item, index) => (
            <a
              key={index}
              href={`#section-${index + 1}`}
              className="block text-gray-700 hover:text-blue-600 transition-colors py-1 text-sm"
            >
              {index + 1}. {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Download Resources */}
      <div className="bg-green-50 rounded-xl p-6 border border-green-200">
        <h3 className="text-lg font-bold text-green-900 mb-4">
          Free Resources
        </h3>
        <div className="space-y-3">
          {["Testing Cheat Sheet", "Best Practices Guide"].map(
            (label, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-200"
              >
                <FaDownload className="w-4 h-4 text-green-600" />
                <div className="flex-1">
                  <div className="font-semibold text-green-900 text-sm">
                    {label}
                  </div>
                  <div className="text-xs text-green-700">
                    {idx === 0 ? "PDF • 2.3 MB" : "ZIP • 1.8 MB"}
                  </div>
                </div>
              </div>
            )
          )}
          <button className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-sm">
            Download All Resources
          </button>
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
          className="flex items-center justify-center gap-2 mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
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
                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
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

      {/* Reading Progress (Optional - would need JavaScript to work) */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Reading Progress</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium text-gray-900">25%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>~6 min remaining</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default BlogPostSidebar;

