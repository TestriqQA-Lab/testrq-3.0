// src/app/blog/category/[category]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { getPostsByCategory } from '@/lib/wordpress';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogGridSkeleton from '@/components/blog/BlogGridSkeleton';
import Pagination from '@/components/blog/Pagination';

interface CategoryPageProps {
  params: {
    category: string;
  };
  searchParams: {
    page?: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryData = await getPostsByCategory(params.category, 1, 1);
  
  if (!categoryData.category) {
    return {
      title: 'Category Not Found | Testriq Blog',
    };
  }

  return {
    title: `${categoryData.category.name} | Testriq Blog`,
    description: categoryData.category.description || `Browse all posts in the ${categoryData.category.name} category.`,
    openGraph: {
      title: `${categoryData.category.name} | Testriq Blog`,
      description: categoryData.category.description || `Browse all posts in the ${categoryData.category.name} category.`,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const currentPage = parseInt(searchParams.page || '1');
  const postsPerPage = 9;

  const categoryData = await getPostsByCategory(params.category, currentPage, postsPerPage);
  const { posts, totalPages, totalPosts, category } = categoryData;

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">{category.name}</span>
          </div>
        </div>
      </nav>

      {/* Category Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {category.name}
            </h1>
            {category.description && (
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                {category.description}
              </p>
            )}
            <div className="flex justify-center">
              <span className="bg-white/20 px-4 py-2 rounded-full">
                {totalPosts} {totalPosts === 1 ? 'Article' : 'Articles'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Suspense fallback={<BlogGridSkeleton count={postsPerPage} />}>
            <BlogGrid posts={posts} />
          </Suspense>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath={`/blog/category/${params.category}`}
          />
        </div>
      </section>
    </div>
  );
}