import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { sanityGetPostBySlug, sanityGetRelatedPosts, sanityGetCategories, sanityGetAllPostSlugs, Post } from "@/lib/sanity-data-adapter";
import { extractHeadings } from "@/lib/utils";
import StructuredData, { createBreadcrumbSchema } from "@/components/seo/StructuredData";

import { Suspense } from "react";
import RelatedPosts from "@/components/sections/RelatedPosts";
import BlogPostHeroSection from "@/components/sections/BlogPostHeroSection";
import ResourceSidebar from "@/components/sections/ResourceSidebar";
import VisualTableOfContents from "@/components/sections/VisualTableOfContents";

export const revalidate = 60; // Revalidate every minute
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
  // F-46: enrich BlogPosting.author with @id (page-local entity ref) and any
  // additional Person fields Sanity gave us (image, description/bio, sameAs
  // LinkedIn) so author is more than a bare {Person, name}. Full author-page
  // entities with stable URLs come in F-52 (E-E-A-T author authority); this
  // is the safe interim that doesn't require new routes.
  const postUrl = `https://www.testriq.com/blog/post/${post.slug}`;
  const isPlaceholderAuthorImage =
    !post.authorImage || post.authorImage.includes("placehold.co");
  const author = {
    "@type": "Person",
    "@id": `${postUrl}#author`,
    name: post.author,
    ...(isPlaceholderAuthorImage ? {} : { image: post.authorImage }),
    ...(post.authorBio ? { description: post.authorBio } : {}),
    ...(post.authorLinkedin
      ? { url: post.authorLinkedin, sameAs: [post.authorLinkedin] }
      : {}),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.seo.description,
    "image": post.image ? [post.image] : [],
    "datePublished": post.dateISO,
    "dateModified": post.modifiedISO,
    "author": [author],
    "publisher": {
      "@type": "Organization",
      // F-46: link publisher to the canonical site Organization @id (the
      // same anchor used by JobPosting.hiringOrganization in F-40, and the
      // anchor organizationSchema-side work in F-46.1 will need to define).
      "@id": "https://www.testriq.com/#organization",
      "name": "Testriq QA Lab",
      "logo": {
        "@type": "ImageObject",
        // F-46: was /logo.png → 404 in production. /testriq-logo.png returns
        // 200. F-46.1 tracks the broader site-wide logo-URL audit (the same
        // broken /logo.png appears in organizationSchema + several other
        // schemas in StructuredData.tsx and BlogStructuredData.tsx).
        "url": "https://www.testriq.com/testriq-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    }
  };

  return <StructuredData data={articleSchema} />;
}

// F-42: BreadcrumbList for blog post pages.
// Chain: Home → Blog → {category} → {post}. The category step is skipped when
// the post has no real Sanity categories — the adapter falls back to a
// "technology-stack" slug for category-less posts, but that route 404s in
// production, so emitting it as a breadcrumb item would point Google at a
// dead URL. We only include the category step when post.categories[0] is a
// real entry from Sanity.
function PostBreadcrumbStructuredData({ post }: { post: Post }) {
  const items: Array<{ name: string; url: string }> = [
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "Blog", url: "https://www.testriq.com/blog" },
  ];

  const primaryCategory = post.categories?.[0];
  if (primaryCategory?.slug && primaryCategory?.name) {
    items.push({
      name: primaryCategory.name,
      url: `https://www.testriq.com/blog/category/${primaryCategory.slug}`,
    });
  }

  items.push({
    name: post.title,
    url: `https://www.testriq.com/blog/post/${post.slug}`,
  });

  return <StructuredData data={createBreadcrumbSchema(items)} />;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // F-64: when draftMode is enabled (editor preview session), fetch via the
  // preview client so the metadata matches the draft body the page renders.
  const { isEnabled: draft } = await draftMode();
  const post = await sanityGetPostBySlug(slug, draft);

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
    keywords: post.seo.keywords,
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
      creator: "@testriq",
      site: "@testriq",
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
  // F-64: route through the preview client when in draftMode so editors see
  // the unpublished draft instead of (or in absence of) the published doc.
  const { isEnabled: isDraft } = await draftMode();
  const post = await sanityGetPostBySlug(slug, isDraft);

  if (!post) {
    notFound();
  }

  // Fetch sidebar data
  const relatedPosts = await sanityGetRelatedPosts(post.id, 4);
  const categories = await sanityGetCategories();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* F-64: visible-only-to-editors banner when draftMode is active.
          Server-rendered (no client JS), so it shows on initial paint. The
          "Exit preview" link hits /api/draft-mode/disable to clear the
          cookie. Slug ?slug=... so the user lands back here after exit. */}
      {isDraft && (
        <div className="sticky top-0 z-50 bg-amber-500 text-amber-950 text-sm font-medium px-4 py-2 flex items-center justify-center gap-3 shadow-md">
          <span aria-hidden="true">📝</span>
          <span>
            Preview mode active — you&apos;re viewing the latest draft from Sanity, not the published version.
          </span>
          <a
            href={`/api/draft-mode/disable?slug=/blog/post/${post.slug}`}
            className="ml-2 inline-block rounded bg-amber-950 px-3 py-1 text-xs font-semibold text-amber-50 hover:bg-amber-800 transition-colors"
          >
            Exit preview
          </a>
        </div>
      )}
      <MainLayout>
        {/* Custom Structured Data from WordPress */}
        <PostStructuredData post={post} />
        <PostBreadcrumbStructuredData post={post} />

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
