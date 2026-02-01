import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityGetPostBySlug, Post } from "@/lib/sanity-data-adapter";
import StructuredData from "@/components/seo/StructuredData";

import { Suspense } from "react";
import RelatedPosts from "@/components/sections/RelatedPosts";

const BlogPostHeader = dynamic(
  () => import("@/components/sections/BlogPostHeader"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-50">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
          <div className="h-8 bg-gray-200 rounded w-64"></div>
        </div>
      </div>
    ),
  }
);

const BlogPostContent = dynamic(
  () => import("@/components/sections/BlogPostContent"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-50">
        <div className="animate-pulse space-y-4 w-full">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    ),
  }
);

const BlogPostSidebar = dynamic(
  () => import("@/components/sections/BlogPostSidebar"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-50">
        <div className="animate-pulse space-y-4 w-full">
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="h-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    ),
  }
);

// Custom Structured Data Component for Individual Posts
function PostStructuredData({ post }: { post: Post }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.seo.description,
    "image": post.image ? [post.image] : [],
    "datePublished": post.dateISO,
    "dateModified": post.modifiedISO,
    "author": [{
      "@type": "Person",
      "name": post.author,
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Testriq QA Lab",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testriq.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.testriq.com/blog/post/${post.slug}`
    }
  };

  return <StructuredData data={articleSchema} />;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityGetPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Testriq Blog",
      // ...
    };
  }

  // post is already adapted
  // use post....
  return {
    title: post.seo.title,
    // ...
    openGraph: {
      title: post.title,
      description: post.excerpt || post.seo.description,
      type: "article",
      publishedTime: post.dateISO,
      modifiedTime: post.modifiedISO,
      authors: [post.author],
      tags: post.tags,
      url: `https://www.testriq.com/blog/post/${post.slug}`,
      siteName: "Testriq",
      locale: "en_US",
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.seo.description,
      images: post.image ? [post.image] : [],
      creator: "@testriqlab",
      site: "@testriqlab",
    },
    category: "Technology",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await sanityGetPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <MainLayout>
        {/* Custom Structured Data from WordPress */}
        <PostStructuredData post={post} />

        {/* Blog Post Header */}
        <BlogPostHeader post={post} />

        {/* Main Content Area */}
        <div className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 via-indigo-100/30 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-violet-100/40 via-purple-100/30 to-transparent rounded-full blur-3xl" />
            {/* Dot Pattern */}
            <div
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 1) 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8">
              {/* Main Content - More Space */}
              <div className="lg:col-span-7 xl:col-span-8">
                <BlogPostContent post={post} />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-5 xl:col-span-4">
                <div className="sticky top-8">
                  <BlogPostSidebar post={post} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts Section with Suspense */}
        <Suspense fallback={
          <div className="bg-gradient-to-b from-white via-slate-50 to-blue-50 py-20">
            <div className="max-w-7xl mx-auto px-8">
              <div className="text-center mb-12">
                <div className="h-6 bg-slate-200 rounded-full w-32 mx-auto mb-4 animate-pulse" />
                <div className="h-12 bg-slate-100 rounded-2xl w-64 mx-auto animate-pulse" />
              </div>
              <div className="grid grid-cols-12 gap-6 auto-rows-[200px]">
                <div className="col-span-12 md:col-span-8 row-span-2 bg-slate-100 rounded-[2rem] animate-pulse" />
                <div className="col-span-12 md:col-span-4 bg-slate-100 rounded-[2rem] animate-pulse" />
                <div className="col-span-12 md:col-span-4 bg-slate-100 rounded-[2rem] animate-pulse" />
              </div>
            </div>
          </div>
        }>
          <RelatedPosts currentPost={post} />
        </Suspense>
      </MainLayout>
    </div>
  );
}
