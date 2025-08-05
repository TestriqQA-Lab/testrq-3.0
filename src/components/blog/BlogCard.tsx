// src/components/blog/BlogCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { WordPressPost, getFeaturedImageUrl, getAuthorName, getCategoryNames, stripHtmlTags, truncateText } from '@/lib/wordpress';

interface BlogCardProps {
  post: WordPressPost;
  showExcerpt?: boolean;
  className?: string;
}

export default function BlogCard({ post, showExcerpt = true, className = '' }: BlogCardProps) {
  const featuredImage = getFeaturedImageUrl(post);
  const authorName = getAuthorName(post);
  const categories = getCategoryNames(post);
  const excerpt = stripHtmlTags(post.excerpt.rendered);
  const truncatedExcerpt = truncateText(excerpt, 150);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {featuredImage && (
        <div className="relative h-48 w-full">
          <Image
            src={featuredImage}
            alt={post.title.rendered}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      
      <div className="p-6">
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((category, index) => (
              <span
                key={index}
                className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        )}
        
        <h2 className="text-xl font-bold mb-3 line-clamp-2">
          <Link 
            href={`/blog/${post.slug}`}
            className="hover:text-blue-600 transition-colors duration-200"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </h2>
        
        {showExcerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {truncatedExcerpt}
          </p>
        )}
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>By {authorName}</span>
          <time dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>
        
        <Link
          href={`/blog/${post.slug}`}
          className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}