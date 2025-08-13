"use client";
import Image from "next/image";
import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaArrowLeft,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaLink,
} from "react-icons/fa";
import Link from "next/link";

interface BlogPost {
  id: string;
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
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const shareLinks = [
    {
      name: "Twitter",
      icon: FaTwitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
      color: "hover:bg-blue-500 hover:text-white"
    },
    {
      name: "LinkedIn", 
      icon: FaLinkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-blue-700 hover:text-white"
    },
    {
      name: "Facebook",
      icon: FaFacebook, 
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      name: "Copy Link",
      icon: FaLink,
      url: "#",
      color: "hover:bg-gray-600 hover:text-white"
    }
  ];

  const handleShare = (url: string, name: string) => {
    if (name === "Copy Link") {
      navigator.clipboard.writeText(shareUrl);
      // You could add a toast notification here
      return;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 py-4 border-b border-gray-100">
          <Link
            href="/blog"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <FaArrowLeft className="w-3 h-3" />
            <span>Back to Blog</span>
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-blue-600">{post.category}</span>
        </nav>

        {/* Main Header Content */}
        <div className="py-8 lg:py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Category Badge */}
            <div className="mb-6">
              <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800`}>
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="w-4 h-4" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="text-sm">
                <span>{post.views} views</span>
              </div>
            </div>

            {/* Author Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-2 border-gray-200"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{post.author}</div>
                  <div className="text-sm text-gray-600">Author</div>
                </div>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-sm text-gray-600 mr-2">Share:</span>
              {shareLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={social.name}
                    onClick={() => handleShare(social.url, social.name)}
                    className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 transition-all duration-200 ${social.color}`}
                    title={`Share on ${social.name}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="pb-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg max-w-5xl mx-auto">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="pb-8 border-b border-gray-200">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Tags:</span>
                {post.tags.map((tag, index) => (
                  <Link
                    key={index}
                    href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default BlogPostHeader;

