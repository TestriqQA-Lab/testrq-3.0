// src/components/blog/BlogCardSkeleton.tsx
export default function BlogCardSkeleton() {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-300"></div>
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          <div className="h-4 bg-gray-300 rounded-full w-16"></div>
          <div className="h-4 bg-gray-300 rounded-full w-20"></div>
        </div>
        <div className="h-6 bg-gray-300 rounded mb-3"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
        <div className="flex justify-between">
          <div className="h-4 bg-gray-300 rounded w-24"></div>
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </div>
      </div>
    </article>
  );
}