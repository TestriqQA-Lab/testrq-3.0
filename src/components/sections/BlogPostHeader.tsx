"use client";
// /home/ubuntu/updated_BlogPostHeader.tsx
import Image from "next/image";
import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaArrowLeft,
} from "react-icons/fa";
import Link from "next/link";
import { stripHtmlTags } from "@/lib/wordpress-graphql"; // Import the utility function
import { decodeHtmlEntities } from "@/lib/utils"; // Import the new utility function

interface BlogPost {
  id: string; // Changed from number to string
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
  const cleanExcerpt = decodeHtmlEntities(stripHtmlTags(post.excerpt)); // Strip HTML tags and decode entities from the excerpt
  const decodedTitle = decodeHtmlEntities(post.title); // Decode HTML entities from the title

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

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span
              className={`inline-block px-4 py-2 bg-gradient-to-r ${post.categoryColor} text-white text-sm font-semibold rounded-full mb-6`}
            >
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              {decodedTitle}
            </h1>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {cleanExcerpt}
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
                
              </div>
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
                
              </div>
            </div>

          </div>
        </div>

        

       
        
      </div>
    </section>
  );
};

export default BlogPostHeader;

