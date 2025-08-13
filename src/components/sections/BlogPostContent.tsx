"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaHeart,
  FaShare,
  FaBookmark,
  FaPrint,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaLink,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Link from "next/link";

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
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const shareLinks = [
    {
      name: "Twitter",
      icon: FaTwitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      name: "LinkedIn", 
      icon: FaLinkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "bg-blue-700 hover:bg-blue-800"
    },
    {
      name: "Facebook",
      icon: FaFacebook, 
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "bg-blue-600 hover:bg-blue-700"
    }
  ];

  const handleShare = (url: string, name: string) => {
    if (name === "Copy Link") {
      navigator.clipboard.writeText(shareUrl);
      return;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    // You could add a toast notification here
  };

  const formatContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <h1
            key={index}
            className="text-3xl font-bold text-gray-900 mb-6 mt-12 first:mt-0"
          >
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="text-2xl font-bold text-gray-900 mb-4 mt-10"
          >
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-bold text-gray-900 mb-3 mt-8">
            {line.substring(4)}
          </h3>
        );
      } else if (line.trim() === "") {
        return <div key={index} className="h-4" />;
      } else {
        return (
          <p
            key={index}
            className="text-lg text-gray-700 mb-6 leading-relaxed"
          >
            {line}
          </p>
        );
      }
    });
  };

  return (
    <article className="bg-white">
      {/* Main Content */}
      <div className="prose prose-lg prose-gray max-w-none">
        <div className="text-lg leading-relaxed text-gray-700 space-y-6">
          {formatContent(post.content)}
        </div>

        {/* Code Block Example */}
        <div className="my-8">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-3 text-sm text-gray-400">Java</span>
              </div>
              <button className="text-sm text-gray-400 hover:text-white transition-colors">
                Copy
              </button>
            </div>
            <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
              <code>{`import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class SeleniumExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("https://example.com");
        
        WebElement element = driver.findElement(By.id("submit"));
        element.click();
        
        driver.quit();
    }
}`}</code>
            </pre>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
            <span className="text-xl">💡</span>
            Key Takeaways
          </h4>
          <ul className="space-y-2 text-blue-900">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Selenium WebDriver is essential for web automation testing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Page Object Model (POM) improves test maintainability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Use explicit waits for handling dynamic content</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Integrate with CI/CD pipelines for continuous quality assurance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Follow best practices to maintain robust test suites</span>
            </li>
          </ul>
        </div>

        {/* Important Note */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
          <h4 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
            <span className="text-xl">⚠️</span>
            Important Note
          </h4>
          <p className="text-amber-900">
            Always use <code className="bg-amber-200 px-2 py-1 rounded text-sm">driver.quit()</code> to properly close your WebDriver instance and prevent memory leaks, especially in CI/CD environments.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-8 border-t border-gray-200 mt-12">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              isLiked
                ? "bg-red-100 text-red-600 border border-red-200"
                : "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600 border border-gray-200"
            }`}
          >
            <FaHeart className="w-4 h-4" />
            <span>{post.likes + (isLiked ? 1 : 0)}</span>
          </button>

          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              isSaved
                ? "bg-blue-100 text-blue-600 border border-blue-200"
                : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
            }`}
          >
            <FaBookmark className="w-4 h-4" />
            <span>{isSaved ? "Saved" : "Save"}</span>
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors border border-gray-200">
            <FaPrint className="w-4 h-4" />
            <span>Print</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Share:</span>
          {shareLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <button
                key={social.name}
                onClick={() => handleShare(social.url, social.name)}
                className={`w-9 h-9 rounded-lg ${social.color} text-white flex items-center justify-center transition-colors`}
                title={`Share on ${social.name}`}
              >
                <IconComponent className="w-4 h-4" />
              </button>
            );
          })}
          <button
            onClick={handleCopyLink}
            className="w-9 h-9 rounded-lg bg-gray-600 hover:bg-gray-700 text-white flex items-center justify-center transition-colors"
            title="Copy Link"
          >
            <FaLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Author Bio */}
      <div className="bg-gray-50 rounded-xl p-8 my-12">
        <div className="flex flex-col sm:flex-row items-start gap-6">
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
            <div className="flex flex-wrap items-center gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Follow Author
              </button>
              <Link
                href="/blog"
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                View All Posts
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Article Navigation */}
      <div className="flex flex-col sm:flex-row items-stretch justify-between gap-4 py-8 border-t border-gray-200">
        <Link
          href="#"
          className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group flex-1"
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <FaChevronLeft className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm text-gray-500 mb-1">Previous Article</div>
            <div className="font-semibold text-gray-900 truncate">API Testing with Postman: Complete Guide</div>
          </div>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group flex-1"
        >
          <div className="flex-1 min-w-0 text-right">
            <div className="text-sm text-gray-500 mb-1">Next Article</div>
            <div className="font-semibold text-gray-900 truncate">Cross-Browser Testing Strategies</div>
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <FaChevronRight className="w-4 h-4 text-gray-600" />
          </div>
        </Link>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 my-12 text-white text-center">
        <h4 className="text-2xl font-bold mb-3">Ready to Improve Your Testing?</h4>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Get expert testing services from Testriq. We help companies deliver high-quality software with comprehensive QA solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact-us"
            className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get Free Consultation
          </Link>
          <Link
            href="/services"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-colors"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPostContent;

