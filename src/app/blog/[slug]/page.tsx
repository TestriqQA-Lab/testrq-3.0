import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/wordpress-graphql";
import { adaptWordPressPost } from "@/lib/wordpress-data-adapter";

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

const BlogPostComments = dynamic(
  () => import("@/components/sections/BlogPostComments"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-32 bg-gray-50">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-48"></div>
        </div>
      </div>
    ),
  }
);

const RelatedPosts = dynamic(
  () => import("@/components/sections/RelatedPosts"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-50">
        <div className="animate-pulse grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    ),
  }
);

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
    };
  }

  const post = adaptWordPressPost(wpPost);

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt || post.seo.description,
      type: "article",
      publishedTime: wpPost.date,
      authors: [post.author],
      tags: post.tags,
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
    },
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

  return (
    <div className="min-h-screen bg-gray-50">
      <MainLayout>
        {/* Blog Post Header */}
        <BlogPostHeader post={post} />
        
        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8 mb-8">
                <BlogPostContent post={post} />
              </div>
              
              {/* Comments Section */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
                <BlogPostComments postId={post.id} />
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <BlogPostSidebar post={post} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Posts */}
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <RelatedPosts currentPost={post} />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

