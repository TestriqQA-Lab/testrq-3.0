// src/app/blog/category/[category]/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Category Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The category you're looking for doesn't exist.
        </p>
        <Link
          href="/blog"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
}