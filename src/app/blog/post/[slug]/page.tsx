import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/wordpress-graphql";
import { adaptWordPressPost } from "@/lib/wordpress-data-adapter";
import { extractStructuredData } from "@/lib/utils";

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
// function PostStructuredData({ structuredData }: { structuredData: unknown[] }) {
//   if (!structuredData || structuredData.length === 0) {
//     return null;
//   }

//   return (
//     <>
//       {structuredData.map((data, index) => (
//         <script
//           key={`structured-data-${index}`}
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(data, null, 0)
//           }}
//         />
//       ))}
//     </>
//   );
// }

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const wpPost = await getPostBySlug(slug);

  if (!wpPost) {
    return {
      title: "Post Not Found | Testriq Blog",
      description: "The requested blog post could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const post = adaptWordPressPost(wpPost);

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    authors: [{ name: post.author }],
    creator: "Testriq QA Lab",
    publisher: "Testriq QA Lab",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://www.testriq.com/blog/post/${post.slug}`,
      languages: {
        'en-US': `https://www.testriq.com/blog/post/${post.slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || post.seo.description,
      type: "article",
      publishedTime: wpPost.date,
      modifiedTime: wpPost.modified,
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
  const wpPost = await getPostBySlug(slug);

  if (!wpPost) {
    notFound();
  }

  // Adapt WordPress post to match your component's expected interface
  const post = adaptWordPressPost(wpPost);
  
  // Extract structured data from WordPress content
  const structuredData = extractStructuredData(wpPost.content);

  return (
    <div className="min-h-screen bg-gray-50">
      <MainLayout>
        {/* Custom Structured Data from WordPress */}
        {/* <PostStructuredData structuredData={structuredData} /> */}
        
        {/* Blog Post Header */}
        <BlogPostHeader post={post} />
        <div className="max-w-7xl mx-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-8 md:px-12 lg:px-8">
            <div className="lg:col-span-2">
              <BlogPostContent post={post} />
              {/* <BlogPostComments postId={post.id} /> */}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <BlogPostSidebar post={post} />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}