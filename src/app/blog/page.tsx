import { BlogHeroSection } from "@/components/client-wrappers/BlogClientComponents";
import BlogQAKnowledgeHub from "@/components/sections/BlogQAKnowledgeHub";
import BlogPostsGrid from "@/components/sections/BlogPostsGrid";
import MainLayout from "@/components/layout/MainLayout";
import BlogStructuredData from "@/components/seo/BlogStructuredData";
import { Metadata } from "next";
import { sanityGetPostsBySlugs, sanityGetAllPostSlugs, Post } from "@/lib/sanity-data-adapter";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams.page) || 1;
  const canonicalUrl = currentPage > 1
    ? `https://www.testriq.com/blog?page=${currentPage}`
    : "https://www.testriq.com/blog";

  return {
    title: "Software Testing Blog | QA Insights & Best Practices",
    description: "Stay updated with the latest trends, insights, and best practices in software testing and QA. Explore expert articles, tutorials, and industry news from Testriq's ISTQB certified experts.",
    keywords: "software testing blog, QA insights, test automation, performance testing, security testing, mobile testing, API testing, regression testing, manual testing, testing best practices, ISTQB certified experts, software quality assurance",
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
      title: "Software Testing Blog | Expert QA Insights & Best Practices | Testriq",
      description: "Stay updated with the latest trends, insights, and best practices in software testing and QA. Explore expert articles, tutorials, and industry news from Testriq's ISTQB certified experts.",
      url: "https://www.testriq.com/blog",
      siteName: "Testriq",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://www.testriq.com/images/testriq-blog-og.jpg",
          width: 1200,
          height: 630,
          alt: "Testriq Software Testing Blog - Expert QA Insights",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Software Testing Blog | Expert QA Insights & Best Practices | Testriq",
      description: "Stay updated with the latest trends, insights, and best practices in software testing and QA. Explore expert articles, tutorials, and industry news from Testriq's ISTQB certified experts.",
      images: ["https://www.testriq.com/images/testriq-blog-twitter.jpg"],
      creator: "@testriqlab",
      site: "@testriqlab",
    },
    alternates: {
      canonical: canonicalUrl,
    },
    category: "Technology",
  };
}
export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams.page) || 1;
  const postsPerPage = 9;

  let currentPosts: Post[] = [];
  let totalPages = 0;
  let featuredPosts: Post[] = [];
  let trendingPosts: Post[] = [];

  try {
    // 1. Get total count using lightweight slug fetch
    const allSlugs = await sanityGetAllPostSlugs();
    totalPages = Math.ceil(allSlugs.length / postsPerPage);

    // 2. Get slugs for current page
    const pageSlugs = allSlugs.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    // 3. Fetch posts by slugs - sanity adapter returns ADAPTED posts
    if (pageSlugs.length > 0) {
      currentPosts = await sanityGetPostsBySlugs(pageSlugs);
    }

    // 4. For Featured/Trending, we only try to fetch on Page 1 to save resources.
    if (currentPage === 1) {
      featuredPosts = currentPosts.filter(p => p.featured);
      trendingPosts = currentPosts.filter(p => p.trending);
    }

  } catch (error) {
    console.error("Error fetching paginated posts:", error);
  }

  return (
    <MainLayout>
      <BlogStructuredData
        type="blog"
        title="Software Testing Blog | Expert QA Insights & Best Practices | Testriq"
        description="Stay updated with the latest trends, insights, and best practices in software testing and QA. Explore expert articles, tutorials, and industry news from Testriq's ISTQB certified experts."
        url="https://www.testriq.com/blog"
      />
      <BlogHeroSection />

      <BlogPostsGrid
        initialPosts={currentPosts}
        currentPage={currentPage}
        totalPages={totalPages}
        featuredPosts={featuredPosts}
        trendingPosts={trendingPosts}
      />

      <BlogQAKnowledgeHub trendingPosts={trendingPosts} />
    </MainLayout>
  );
}