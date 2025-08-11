"use client";
import Image from "next/image";
import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaEye,
  FaHeart,
  FaShare,
  FaBookmark,
  FaArrowLeft,
} from "react-icons/fa";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  author: string;
  authorImage: string;
  authorBio: string;
  date: string;
  readTime: string;
  image: string;
  views: string;
  likes: number;
  shares: number;
  tags: string[];
}

interface BlogPostHeaderProps {
  post: BlogPost;
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ post }) => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 text-white py-16 px-8 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 bg-opacity-20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 bg-opacity-15 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-blue-200 mb-8 text-sm">
          <Link
            href="/blog"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          <span>/</span>
          <span className="text-white/60">{post.category}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span
              className={`inline-block px-4 py-2 bg-gradient-to-r ${post.categoryColor} text-white text-sm font-semibold rounded-full mb-6`}
            >
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              {post.title}
            </h1>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author + Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={400}
                  height={250}
                  className="w-12 h-12 rounded-full border-2 border-blue-400"
                />
                <div>
                  <div className="font-semibold text-white">{post.author}</div>
                  <div className="text-sm text-blue-200">Author</div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEye className="w-4 h-4" />
                  <span>{post.views} views</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition">
                <FaHeart className="w-4 h-4" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition">
                <FaShare className="w-4 h-4" />
                <span>{post.shares}</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition">
                <FaBookmark className="w-4 h-4" />
                <span>Save</span>
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition">
                  <span className="text-2xl">▶</span>
                </button>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-blue-600">
                {post.views}
              </div>
              <div className="text-sm text-gray-700">Total Views</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">{post.likes}</div>
              <div className="text-sm">Likes</div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-blue-200 font-medium">Tags:</span>
            {post.tags.map((tag, index) => (
              <Link
                key={index}
                href={`/blog/tag/${tag.toLowerCase()}`}
                className="px-3 py-1 bg-white/10 text-blue-200 text-sm rounded-full hover:bg-white/20 transition"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-blue-200">Share this article:</span>
            <div className="flex gap-3">
              {[
                { name: "Twitter", icon: "🐦", color: "bg-blue-400" },
                { name: "LinkedIn", icon: "💼", color: "bg-blue-600" },
                { name: "Facebook", icon: "📘", color: "bg-blue-700" },
                { name: "Copy Link", icon: "🔗", color: "bg-gray-600" },
              ].map((social) => (
                <button
                  key={social.name}
                  className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center text-white hover:scale-110 transition`}
                  title={`Share on ${social.name}`}
                >
                  <span className="text-sm">{social.icon}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="text-blue-200 text-sm">Published on {post.date}</div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostHeader;
