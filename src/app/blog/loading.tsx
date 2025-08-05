// src/app/blog/loading.tsx
import BlogGridSkeleton from '@/components/blog/BlogGridSkeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Skeleton */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="h-12 bg-white/20 rounded mb-4 mx-auto max-w-md animate-pulse"></div>
            <div className="h-6 bg-white/20 rounded mb-8 mx-auto max-w-lg animate-pulse"></div>
            <div className="flex justify-center gap-4">
              <div className="h-8 w-24 bg-white/20 rounded-full animate-pulse"></div>
              <div className="h-8 w-32 bg-white/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <BlogGridSkeleton count={9} />
        </div>
      </section>
    </div>
  );
}