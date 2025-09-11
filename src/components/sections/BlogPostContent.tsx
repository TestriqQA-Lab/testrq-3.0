"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaShare,
  FaFont,
  FaEye,
  FaLinkedin,
  FaFacebook,
  FaReddit,
  FaCopy,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import CustomImageRenderer from "../client-wrappers/CustomImageRenderer";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  authorImage: string;
  authorBio: string;
  likes: number;
  shares: number;
  slug: string;
}

interface BlogPostContentProps {
  post: BlogPost;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ post }) => {
  const [fontSize, setFontSize] = useState("text-base");
  const [showShareMenu, setShowShareMenu] = useState(false);

  const fontSizes = [
    { label: "Small", value: "text-sm" },
    { label: "Medium", value: "text-base" },
    { label: "Large", value: "text-lg" },
    { label: "Extra Large", value: "text-xl" },
  ];

  // Social sharing functions
  const shareOnX = () => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    const text = `Check out this article: ${post.title}`;
    window.open(
      `https://X.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnReddit = () => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    const title = post.title;
    window.open(
      `https://reddit.com/submit?url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(title)}`,
      "_blank"
    );
  };

  const copyToClipboard = async () => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <article className="bg-white">
      {/* Reading Controls */}
      <div className="hidden md:block sticky top-20 z-10 bg-white border-b border-gray-200 p-4 mb-8 rounded-lg shadow-sm">
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
            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <FaShare className="w-4 h-4" />
                <span>{post.shares}</span>
              </button>

              {showShareMenu && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-20">
                  <button
                    onClick={shareOnX}
                    className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 rounded"
                  >
                    <FaSquareXTwitter className="w-4 h-4 text-black" />
                    X(Twitter)
                  </button>
                  <button
                    onClick={shareOnLinkedIn}
                    className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 rounded"
                  >
                    <FaLinkedin className="w-4 h-4 text-blue-600" />
                    LinkedIn
                  </button>
                  <button
                    onClick={shareOnFacebook}
                    className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 rounded"
                  >
                    <FaFacebook className="w-4 h-4 text-blue-800" />
                    Facebook
                  </button>
                  <button
                    onClick={shareOnReddit}
                    className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 rounded"
                  >
                    <FaReddit className="w-4 h-4 text-orange-600" />
                    Reddit
                  </button>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 rounded"
                  >
                    <FaCopy className="w-4 h-4 text-gray-600" />
                    Copy
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={`prose prose-lg px-6 max-w-none text-gray-800 ${fontSize}`}
      >
        <CustomImageRenderer content={post.content} />
      </div>

      {/* Author Bio */}
      <div className="bg-gray-50 rounded-xl p-8 my-12">
        <div className="flex items-start gap-6">
          <Image
            title={post.author}
            src={post.authorImage}
            alt={post.author}
            width={80}
            height={80}
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
            <button
              onClick={shareOnX}
              className="bg-black text-white px-4 py-2 rounded-lg hover:brightness-110 transition-transform flex items-center gap-2"
            >
              <FaSquareXTwitter />
              <span>X (Twitter)</span>
            </button>
            <button
              onClick={shareOnLinkedIn}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:brightness-110 transition-transform flex items-center gap-2"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </button>
            <button
              onClick={shareOnFacebook}
              className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:brightness-110 transition-transform flex items-center gap-2"
            >
              <FaFacebook />
              <span>Facebook</span>
            </button>
            <button
              onClick={shareOnReddit}
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:brightness-110 transition-transform flex items-center gap-2"
            >
              <FaReddit />
              <span>Reddit</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostContent;
