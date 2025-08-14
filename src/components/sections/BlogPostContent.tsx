"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaHeart,
  FaShare,
  FaBookmark,
  FaPrint,
  FaFont,
  FaEye,
} from "react-icons/fa";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  authorImage: string;
  authorBio: string;
  likes: number;
  shares: number;
}

interface BlogPostContentProps {
  post: BlogPost;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ post }) => {
  const [fontSize, setFontSize] = useState("text-base");
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const fontSizes = [
    { label: "Small", value: "text-sm" },
    { label: "Medium", value: "text-base" },
    { label: "Large", value: "text-lg" },
    { label: "Extra Large", value: "text-xl" },
  ];

  const formatContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <h1
            key={index}
            className="text-3xl font-bold text-gray-900 mb-6 mt-8"
          >
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="text-2xl font-bold text-gray-900 mb-4 mt-6"
          >
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-bold text-gray-900 mb-3 mt-5">
            {line.substring(4)}
          </h3>
        );
      } else if (line.trim() === "") {
        return <br key={index} />;
      } else {
        return (
          <p
            key={index}
            className={`${fontSize} text-gray-800 mb-4 leading-relaxed`}
          >
            {line}
          </p>
        );
      }
    });
  };

  return (
    <article className="bg-white">
      {/* Reading Controls */}
      <div className="sticky top-20 z-10 bg-white border-b border-gray-200 p-4 mb-8 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaFont className="w-4 h-4 text-gray-600" />
              <select
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                className="text-sm border border-gray-300 rounded px-2 py-1 text-gray-800"
              >
                {fontSizes.map((size) => (
                  <option key={size.value} value={size.value}>
                    {size.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaEye className="w-4 h-4" />
              <span>Reading time: 8 min</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            

            <button className="flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-50 transition-colors">
              <FaShare className="w-4 h-4" />
              <span>{post.shares}</span>
            </button>

            

            
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-800">
        {formatContent(post.content)}
      </div>

      

     

   

      {/* Author Bio */}
      <div className="bg-gray-50 rounded-xl p-8 my-12">
        <div className="flex items-start gap-6">
          <Image
            src={post.authorImage}
            alt={post.author}
            width={400}
            height={250}
            className="w-20 h-20 rounded-full border-4 border-white shadow-md"
          />
          <div className="flex-1">
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              About {post.author}
            </h4>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {post.authorBio}
            </p>
            
          </div>
        </div>
      </div>

      

      {/* Social Share */}
      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6 my-8">
        <div className="text-center">
          <h4 className="text-lg font-bold text-gray-900 mb-3">
            Found this article helpful?
          </h4>
          <p className="text-gray-700 mb-4">Share it with your team!</p>
          <div className="flex justify-center gap-3 flex-wrap">
            {[
              { name: "Twitter", icon: "🐦", color: "bg-blue-500" },
              { name: "LinkedIn", color: "bg-blue-700", icon: "💼" },
              { name: "Facebook", color: "bg-blue-800", icon: "📘" },
              { name: "Reddit", color: "bg-orange-600", icon: "🔗" },
            ].map((social) => (
              <button
                key={social.name}
                className={`${social.color} text-white px-4 py-2 rounded-lg hover:brightness-110 transition-transform flex items-center gap-2`}
              >
                <span>{social.icon}</span>
                <span>{social.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostContent;
