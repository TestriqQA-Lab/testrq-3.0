// src/app/blog/page.tsx
import { Suspense } from 'react';
import { getPosts, getCategories } from '@/lib/wordpress';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogGridSkeleton from '@/components/blog/BlogGridSkeleton';
import Pagination from '@/components/blog/Pagination';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Testriq',
  description: 'Latest insights, tutorials, and updates from the Testriq team.',
  openGraph: {
    title: 'Blog | Testriq',
    description: 'Latest insights, tutorials, and updates from the Testriq team.',
    type: 'website',
  },
};

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = parseInt(searchParams.page || '1');
  const postsPerPage = 9;

  // Fetch posts and categories in parallel
  const [postsData, categories] = await Promise.all([
    getPosts(currentPage, postsPerPage),
    getCategories(),
  ]);

  const { posts, totalPages, totalPosts } = postsData;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Testriq Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Insights, tutorials, and updates from our team
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {totalPosts} Articles
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {categories.length} Categories
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      {categories.length > 0 && (
        <section className="bg-white border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap gap-2 justify-center">
              <a
                href="/blog"
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors duration-200"
              >
                All Posts
              </a>
              {categories.slice(0, 8).map((category) => (
                <a
                  key={category.id}
                  href={`/blog/category/${category.slug}`}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
                >
                  {category.name} ({category.count})
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Suspense fallback={<BlogGridSkeleton count={postsPerPage} />}>
            <BlogGrid posts={posts} />
          </Suspense>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/blog"
          />
        </div>
      </section>
    </div>
  );
}