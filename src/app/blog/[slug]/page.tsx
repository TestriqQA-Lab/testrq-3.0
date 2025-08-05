// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getPostBySlug, getFeaturedImageUrl, getAuthorName, getCategoryNames, stripHtmlTags } from '@/lib/wordpress';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | Testriq Blog',
    };
  }

  const excerpt = stripHtmlTags(post.excerpt.rendered);
  const featuredImage = getFeaturedImageUrl(post);

  return {
    title: `${post.title.rendered} | Testriq Blog`,
    description: excerpt || 'Read this article on Testriq Blog',
    openGraph: {
      title: post.title.rendered,
      description: excerpt || 'Read this article on Testriq Blog',
      type: 'article',
      publishedTime: post.date,
      images: featuredImage ? [{ url: featuredImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title.rendered,
      description: excerpt || 'Read this article on Testriq Blog',
      images: featuredImage ? [featuredImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const featuredImage = getFeaturedImageUrl(post);
  const authorName = getAuthorName(post);
  const categories = getCategoryNames(post);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

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
            <span className="text-gray-900 truncate">{post.title.rendered}</span>
          </div>
        </div>
      </nav>

      <article className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              {categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors duration-200"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}

              <h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              <div className="flex items-center justify-between text-gray-600 mb-6">
                <div className="flex items-center space-x-4">
                  <span>By {authorName}</span>
                  <span>•</span>
                  <time dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                </div>
              </div>

              {featuredImage && (
                <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
                  <Image
                    src={featuredImage}
                    alt={post.title.rendered}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </div>
              )}
            </header>

            {/* Article Content */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-gray-900 prose-headings:font-bold
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900
                  prose-ul:text-gray-700 prose-ol:text-gray-700
                  prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:rounded
                  prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                  prose-pre:bg-gray-900 prose-pre:text-gray-100
                  prose-img:rounded-lg prose-img:shadow-md"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}