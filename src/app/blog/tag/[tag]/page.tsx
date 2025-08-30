import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import BlogStructuredData from "@/components/seo/BlogStructuredData";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostsByTag, getTags } from "@/lib/wordpress-graphql";
import { adaptWordPressPost } from "@/lib/wordpress-data-adapter";

export async function generateStaticParams() {
  const { tags } = await getTags();
  return tags.map((tag) => ({
    tag: tag.slug,
  }));
}

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
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const tagName = tagData.tag.name;
  const tagDescription = tagData.tag.description || `Explore all articles tagged with ${tagName}. Find comprehensive guides, tutorials, and best practices related to ${tagName} from Testriq\'s ISTQB certified experts.`;

  return {
    title: `${tagName} Articles | Expert Testing Insights & Best Practices | Testriq`,
    description: tagDescription,
    keywords: `${tagName.toLowerCase()}, ${tagName.toLowerCase()} testing, ${tagName.toLowerCase()} qa, software testing, ${tagName.toLowerCase()} best practices, ${tagName.toLowerCase()} tutorials, testing guides, qa insights, ISTQB certified experts`,
    authors: [{ name: "Testriq QA Lab" }],
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
    openGraph: {
      title: `${tagName} Articles | Expert Testing Insights & Best Practices | Testriq`,
      description: tagDescription,
      url: `https://www.testriq.com/blog/tag/${tag}`,
      siteName: "Testriq",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `https://www.testriq.com/images/tags/${tag}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${tagName} Articles - Testriq Blog`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tagName} Articles | Expert Testing Insights & Best Practices | Testriq`,
      description: tagDescription,
      images: [`https://www.testriq.com/images/tags/${tag}-twitter.jpg`],
      creator: "@testriqlab",
      site: "@testriqlab",
    },
    alternates: {
      canonical: `https://www.testriq.com/blog/tag/${tag}`,
    },
    category: "Technology",
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const tagData = await getPostsByTag(tag, 50);
  if (!tagData.tag) {
    notFound();
  }

  const adaptedPosts = tagData.posts.map(adaptWordPressPost);
  const tagName = tagData.tag.name;
  const tagDescription = tagData.tag.description || `Explore all articles tagged with ${tagName}. Find comprehensive guides, tutorials, and best practices related to ${tagName} from Testriq\'s ISTQB certified experts.`;

  if (adaptedPosts.length === 0) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Articles Found for #{tagName}</h2>
            <p className="text-gray-600 mb-6">It looks like there are no posts associated with this tag yet. Please check back later!</p>
            <a href="/blog/tags" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
              Browse All Tags
            </a>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MainLayout>
        <BlogStructuredData
          type="tag"
          title={`${tagName} Articles | Expert Testing Insights & Best Practices | Testriq`}
          description={tagDescription}
          url={`https://www.testriq.com/blog/tag/${tag}`}
          tagName={tagName}
          postCount={adaptedPosts.length}
        />
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