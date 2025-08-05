// src/components/blog/BlogGridSkeleton.tsx
import BlogCardSkeleton from './BlogCardSkeleton';

interface BlogGridSkeletonProps {
  count?: number;
}

export default function BlogGridSkeleton({ count = 6 }: BlogGridSkeletonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
    </div>
  );
}