import { BlogHeroSection, BlogPostsGrid, BlogCategories, BlogQAKnowledgeHub, BlogNewsletter } from "@/components/client-wrappers/BlogClientComponents";
import MainLayout from "@/components/layout/MainLayout";
import BlogStructuredData from "@/components/seo/BlogStructuredData";
import { Metadata } from "next";

export const metadata: Metadata = {
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
    canonical: "https://www.testriq.com/blog",
  },
  category: "Technology",
};

export default function BlogPage() {
  return (
    <MainLayout>
      <BlogStructuredData
        type="blog"
        title="Software Testing Blog | Expert QA Insights & Best Practices | Testriq"
        description="Stay updated with the latest trends, insights, and best practices in software testing and QA. Explore expert articles, tutorials, and industry news from Testriq's ISTQB certified experts."
        url="https://www.testriq.com/blog"
      />
      <BlogHeroSection />
      <BlogPostsGrid />
      <BlogCategories />
      <BlogQAKnowledgeHub/>
      <BlogNewsletter />
    </MainLayout>
  );
}