// src/components/blog/BlogGrid.tsx
import { WordPressPost } from '@/lib/wordpress';
import BlogCard from './BlogCard';

interface BlogGridProps {
  posts: WordPressPost[];
  className?: string;
}

export default function BlogGrid({ posts, className = '' }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No posts found</h3>
        <p className="text-gray-500">Check back later for new content.</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}