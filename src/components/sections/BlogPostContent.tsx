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
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-colors ${
                isLiked
                  ? "bg-red-100 text-red-600"
                  : "bg-gray-100 text-gray-700 hover:bg-red-50"
              }`}
            >
              <FaHeart className="w-4 h-4" />
              <span>{post.likes + (isLiked ? 1 : 0)}</span>
            </button>

            <button className="flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-50 transition-colors">
              <FaShare className="w-4 h-4" />
              <span>{post.shares}</span>
            </button>

            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-colors ${
                isSaved
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50"
              }`}
            >
              <FaBookmark className="w-4 h-4" />
              <span>{isSaved ? "Saved" : "Save"}</span>
            </button>

            <button className="flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <FaPrint className="w-4 h-4" />
              <span>Print</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-800">
        {formatContent(post.content)}
      </div>

      {/* Code Block */}
      <div className="bg-gray-900 text-green-400 p-6 rounded-lg my-8 overflow-x-auto">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-400">Java</span>
          <button className="text-sm text-blue-400 hover:text-blue-300">
            Copy Code
          </button>
        </div>
        <pre className="text-sm">
          {`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
// ... rest of code
`}
        </pre>
      </div>

      {/* Key Takeaways */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <h4 className="text-lg font-bold text-blue-900 mb-3">
          🔑 Key Takeaways
        </h4>
        <ul className="space-y-2 text-blue-900 font-medium">
          <li>• Selenium WebDriver is essential for automation</li>
          <li>• POM improves maintainability</li>
          <li>• Use explicit waits for dynamic content</li>
          <li>• Integrate with CI/CD for quality</li>
          <li>• Follow best practices to stay robust</li>
        </ul>
      </div>

      {/* Warning Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
        <h4 className="text-lg font-bold text-yellow-900 mb-3">
          ⚠️ Important Note
        </h4>
        <p className="text-yellow-900 font-medium">
          Always use <code>driver.quit()</code> to close your WebDriver to
          prevent memory leaks, especially in CI/CD.
        </p>
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
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Follow Author
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                View All Posts
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Navigation */}
      <div className="flex items-center justify-between py-8 border-t border-gray-200">
        <button className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
          <span className="text-2xl">←</span>
          <div className="text-left">
            <div className="text-sm text-gray-500">Previous Article</div>
            <div className="font-semibold">API Testing with Postman</div>
          </div>
        </button>
        <button className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
          <div className="text-right">
            <div className="text-sm text-gray-500">Next Article</div>
            <div className="font-semibold">
              Cross-Browser Testing Strategies
            </div>
          </div>
          <span className="text-2xl">→</span>
        </button>
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
