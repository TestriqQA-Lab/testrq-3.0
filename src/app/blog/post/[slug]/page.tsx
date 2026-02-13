import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityGetPostBySlug, sanityGetRelatedPosts, sanityGetCategories, sanityGetAllPostSlugs, Post } from "@/lib/sanity-data-adapter";
import { extractHeadings } from "@/lib/utils";
import StructuredData from "@/components/seo/StructuredData";

import { Suspense } from "react";
import RelatedPosts from "@/components/sections/RelatedPosts";
import BlogPostHeroSection from "@/components/sections/BlogPostHeroSection";
import ResourceSidebar from "@/components/sections/ResourceSidebar";
import VisualTableOfContents from "@/components/sections/VisualTableOfContents";

export const revalidate = 3600; // Revalidate every hour
export const dynamicParams = true; // Allow rendering of new posts not generated at build time

export async function generateStaticParams() {
  const slugs = await sanityGetAllPostSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

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
    description: post.seo.description,
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
    alternates: {
      canonical: post.seo.canonicalUrl || `https://www.testriq.com/blog/post/${post.slug}`,
      languages: {
        'en-US': post.seo.canonicalUrl || `https://www.testriq.com/blog/post/${post.slug}`,
      },
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await sanityGetPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Fetch sidebar data
  const relatedPosts = await sanityGetRelatedPosts(post.id, 4);
  const categories = await sanityGetCategories();

  return (
    <div className="min-h-screen bg-slate-50">
      <MainLayout>
        {/* Custom Structured Data from WordPress */}
        <PostStructuredData post={post} />

        {/* Blog Post Hero Section with dynamic post data */}
        <BlogPostHeroSection post={post} />

        {/* Main Content - Three Column Layout */}
        <div id="main-content" className="relative max-w-[1600px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            {/* Left: Visual TOC */}
            <div className="xl:col-span-3">
              <div className="sticky top-24">
                <VisualTableOfContents headings={extractHeadings(post.content)} />
              </div>
            </div>

            {/* Center: Content */}
            <div className="xl:col-span-6">
              <BlogPostContent post={post} />
            </div>

            {/* Right: Resource Sidebar */}
            <div className="xl:col-span-3">
              <ResourceSidebar
                tags={post.tags}
                relatedPosts={relatedPosts}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                categories={categories.map((c: any) => ({
                  name: c.name,
                  count: c.postCount || 0,
                  color: c.color,
                  slug: c.id
                }))}
              />
            </div>
          </div>
        </div>


      </MainLayout>
    </div>
  );
}
