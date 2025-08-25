import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostsByTag } from "@/lib/wordpress-graphql";
import { adaptWordPressPost } from "@/lib/wordpress-data-adapter";

const TagHeroSection = dynamic(
  () => import("@/components/sections/TagHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const TagPostsGrid = dynamic(
  () => import("@/components/sections/TagPostsGrid"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const TagSidebar = dynamic(
  () => import("@/components/sections/TagSidebar"),
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
  params: Promise<{ tag: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const tagData = await getPostsByTag(tag, 1);

  if (!tagData.tag) {
    return {
      title: "Tag Not Found | Testriq Blog",
      description: "The requested blog tag could not be found.",
    };
  }

  const tagName = tagData.tag.name;

  return {
    title: `${tagName} Articles | Testriq Blog`,
    description: `Explore all articles tagged with ${tagName}. Find comprehensive guides, tutorials, and best practices related to ${tagName}.`,
    keywords: `${tagName}, testing, qa, software testing, ${tag}`,
    openGraph: {
      title: `${tagName} Articles | Testriq Blog`,
      description: `Explore all articles tagged with ${tagName}. Find comprehensive guides, tutorials, and best practices related to ${tagName}.`,
      type: "website",
      url: `/blog/tag/${tag}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${tagName} Articles | Testriq Blog`,
      description: `Explore all articles tagged with ${tagName}. Find comprehensive guides, tutorials, and best practices related to ${tagName}.`,
    },
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const tagData = await getPostsByTag(tag, 50);

  if (!tagData.tag || tagData.posts.length === 0) {
    notFound();
  }

  const adaptedPosts = tagData.posts.map(adaptWordPressPost);

  return (
    <div className="min-h-screen bg-gray-50">
      <MainLayout>
        <TagHeroSection tag={tagData.tag} postCount={adaptedPosts.length} />
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <TagPostsGrid tag={tagData.tag} posts={adaptedPosts} />
            </div>
            <div className="lg:col-span-1">
              <TagSidebar tag={tagData.tag} />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

