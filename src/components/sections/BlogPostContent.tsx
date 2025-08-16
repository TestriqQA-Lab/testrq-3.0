"use client";
import Image from "next/image";
import React, { useState } from "react";
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

  // Function to clean and render HTML content properly
  const renderContent = (content: string) => {
    // Clean up the content and fix common WordPress issues
    const cleanContent = content
      // Remove excessive line breaks and normalize spacing
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      // Fix image tags to ensure proper src attributes
      .replace(/<img([^>]*?)src=["']([^"']*?)["']([^>]*?)>/gi, (match, before, src, after) => {
        // Ensure the image has proper attributes
        const altMatch = match.match(/alt=["']([^"']*?)["']/i);
        const alt = altMatch ? altMatch[1] : '';
        return `<img${before}src="${src}"${after} alt="${alt}" style="max-width: 100%; height: auto; margin: 1rem 0; border-radius: 8px;">`;
      })
      // Fix paragraph spacing
      .replace(/<p>/g, '<p style="margin-bottom: 1rem; line-height: 1.7;">')
      // Fix heading spacing
      .replace(/<h1>/g, '<h1 style="font-size: 2rem; font-weight: bold; margin: 2rem 0 1rem 0; color: #1f2937;">')
      .replace(/<h2>/g, '<h2 style="font-size: 1.75rem; font-weight: bold; margin: 1.75rem 0 1rem 0; color: #1f2937;">')
      .replace(/<h3>/g, '<h3 style="font-size: 1.5rem; font-weight: bold; margin: 1.5rem 0 0.75rem 0; color: #1f2937;">')
      .replace(/<h4>/g, '<h4 style="font-size: 1.25rem; font-weight: bold; margin: 1.25rem 0 0.75rem 0; color: #1f2937;">')
      .replace(/<h5>/g, '<h5 style="font-size: 1.125rem; font-weight: bold; margin: 1.125rem 0 0.5rem 0; color: #1f2937;">')
      .replace(/<h6>/g, '<h6 style="font-size: 1rem; font-weight: bold; margin: 1rem 0 0.5rem 0; color: #1f2937;">')
      // Fix list spacing
      .replace(/<ul>/g, '<ul style="margin: 1rem 0; padding-left: 1.5rem;">')
      .replace(/<ol>/g, '<ol style="margin: 1rem 0; padding-left: 1.5rem;">')
      .replace(/<li>/g, '<li style="margin-bottom: 0.5rem; line-height: 1.6;">')
      // Fix blockquote styling
      .replace(/<blockquote>/g, '<blockquote style="border-left: 4px solid #3b82f6; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #4b5563;">')
      // Fix figure and figcaption
      .replace(/<figure>/g, '<figure style="margin: 1.5rem 0; text-align: center;">')
      .replace(/<figcaption>/g, '<figcaption style="margin-top: 0.5rem; font-size: 0.875rem; color: #6b7280; font-style: italic;">')
      // Fix code blocks
      .replace(/<pre>/g, '<pre style="background-color: #1f2937; color: #f9fafb; padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1rem 0;">')
      .replace(/<code>/g, '<code style="background-color: #f3f4f6; color: #1f2937; padding: 0.25rem 0.5rem; border-radius: 4px; font-family: monospace; font-size: 0.875rem;">')
      // Fix table styling
      .replace(/<table>/g, '<table style="width: 100%; border-collapse: collapse; margin: 1rem 0; border: 1px solid #e5e7eb;">')
      .replace(/<th>/g, '<th style="padding: 0.75rem; background-color: #f9fafb; border: 1px solid #e5e7eb; font-weight: bold; text-align: left;">')
      .replace(/<td>/g, '<td style="padding: 0.75rem; border: 1px solid #e5e7eb;">')
      // Fix links
      .replace(/<a([^>]*?)>/g, '<a$1 style="color: #3b82f6; text-decoration: underline; hover:color: #2563eb;">');

    return cleanContent;
  };

  // Social sharing functions
  const shareOnX = () => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    const text = `Check out this article: ${post.title}`;
    window.open(`https://X.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnReddit = () => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    const title = post.title;
    window.open(`https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
  };

  const copyToClipboard = async () => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
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
        dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
        style={{
          lineHeight: '1.7',
          fontSize: fontSize === 'text-sm' ? '14px' : 
                   fontSize === 'text-base' ? '16px' : 
                   fontSize === 'text-lg' ? '18px' : '20px'
        }}
      />

      {/* Author Bio */}
      <div className="bg-gray-50 rounded-xl p-8 my-12">
        <div className="flex items-start gap-6">
          <Image
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

