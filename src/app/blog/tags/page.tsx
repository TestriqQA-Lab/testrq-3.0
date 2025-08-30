import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import BlogStructuredData from "@/components/seo/BlogStructuredData";
import { Metadata } from "next";
import { getTags } from "@/lib/wordpress-graphql";

const TagsHeroSection = dynamic(
  () => import("@/components/sections/TagsHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const TagsGridSection = dynamic(
  () => import("@/components/sections/TagsGridSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const TagsStatsSection = dynamic(
  () => import("@/components/sections/TagsStatsSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "All Tags | Software Testing Topics & Categories | Testriq Blog",
  description: "Explore all software testing tags and topics on Testriq Blog. Find articles organized by testing methodologies, tools, frameworks, and best practices from our ISTQB certified experts.",
  keywords: "software testing tags, QA topics, test automation tags, performance testing, security testing, mobile testing, API testing, testing categories, testing methodologies, ISTQB topics",
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
    title: "All Tags | Software Testing Topics & Categories | Testriq Blog",
    description: "Explore all software testing tags and topics on Testriq Blog. Find articles organized by testing methodologies, tools, frameworks, and best practices from our ISTQB certified experts.",
    url: "https://www.testriq.com/blog/tags",
    siteName: "Testriq",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.testriq.com/images/blog-tags-og.jpg",
        width: 1200,
        height: 630,
        alt: "Testriq Blog Tags - Software Testing Topics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Tags | Software Testing Topics & Categories | Testriq Blog",
    description: "Explore all software testing tags and topics on Testriq Blog. Find articles organized by testing methodologies, tools, frameworks, and best practices from our ISTQB certified experts.",
    images: ["https://www.testriq.com/images/blog-tags-twitter.jpg"],
    creator: "@testriqlab",
    site: "@testriqlab",
  },
  alternates: {
    canonical: "https://www.testriq.com/blog/tags",
  },
  category: "Technology",
};

export default async function TagsPage() {
  const { tags, pageInfo } = await getTags(100); // Fetch initial 100 tags

  return (
    <div className="min-h-screen bg-gray-50">
      <MainLayout>
        <BlogStructuredData
          type="tags"
          title="All Tags | Software Testing Topics & Categories | Testriq Blog"
          description="Explore all software testing tags and topics on Testriq Blog. Find articles organized by testing methodologies, tools, frameworks, and best practices from our ISTQB certified experts."
          url="https://www.testriq.com/blog/tags"
          tagCount={tags.length}
        />
        <TagsHeroSection tagCount={tags.length} />
        <TagsStatsSection tags={tags} />
        <TagsGridSection initialTags={tags} initialPageInfo={pageInfo} />
      </MainLayout>
    </div>
  );
}

