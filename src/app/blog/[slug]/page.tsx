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
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const BlogPostContent = dynamic(
  () => import("@/components/sections/BlogPostContent"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const BlogPostSidebar = dynamic(
  () => import("@/components/sections/BlogPostSidebar"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const BlogPostComments = dynamic(
  () => import("@/components/sections/BlogPostComments"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const RelatedPosts = dynamic(
  () => import("@/components/sections/RelatedPosts"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
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
          width: 800,
          height: 400,
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
    <div>
      <MainLayout>
        <BlogPostHeader post={post} />
        <div className="max-w-7xl mx-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BlogPostContent post={post} />
              {/* <BlogPostComments postId={post.id} /> */}
            </div>
            <div className="lg:col-span-1">
              <BlogPostSidebar post={post} />
            </div>
          </div>
        </div>
        <RelatedPosts currentPost={post} />
      </MainLayout>
    </div>
  );
}

