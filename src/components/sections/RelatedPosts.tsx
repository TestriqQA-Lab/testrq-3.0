"use client";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface RelatedPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  featuredImage?: string;
  publishedAt: string;
  readingTime?: string;
  category: {
    name: string;
    slug: string;
  };
}

interface RelatedPostsProps {
  posts: RelatedPost[];
  currentPostId?: string;
  title?: string;
  className?: string;
}

const RelatedPosts = ({ 
  posts, 
  currentPostId, 
  title = "Related Articles",
  className = "" 
}: RelatedPostsProps) => {
  // Filter out current post and limit to 3 posts
  const filteredPosts = posts
    .filter(post => post.id !== currentPostId)
    .slice(0, 3);

  if (filteredPosts.length === 0) {
    return null;
  }

  return (
    <section className={`py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {title}
          </h2>
          <Link 
            href="/blog"
            className="flex items-center text-brand-blue hover:text-blue-700 transition-colors group"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {post.featuredImage && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <Link 
                    href={`/blog/category/${post.category.slug}`}
                    className="text-brand-blue hover:text-blue-700 transition-colors font-medium"
                  >
                    {post.category.name}
                  </Link>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                  {post.readingTime && (
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readingTime}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  <Link 
                    href={`/blog/post/${post.slug}`}
                    className="hover:text-brand-blue transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                <Link 
                  href={`/blog/post/${post.slug}`}
                  className="inline-flex items-center text-brand-blue hover:text-blue-700 transition-colors font-medium text-sm group"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;

