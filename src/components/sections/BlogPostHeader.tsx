// /home/ubuntu/updated_BlogPostHeader.tsx
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
import { stripHtmlTags } from "@/lib/wordpress-graphql"; // Import the utility function

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
  tags: string[]; // Added missing tags property
}

interface BlogPostHeaderProps {
  post: BlogPost;
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ post }) => {
  const cleanExcerpt = stripHtmlTags(post.excerpt); // Strip HTML tags from the excerpt

  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 text-white py-16 px-8 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 bg-opacity-20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 bg-opacity-15 rounded-full blur-xl"></div>
      </div>

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

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {cleanExcerpt}
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
                
              </div>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
            </div>

 
            
          </div>
        )}

        

       
      </div>
    </header>
  );
};

export default BlogPostHeader;

