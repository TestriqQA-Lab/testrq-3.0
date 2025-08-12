import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";

const BlogHeroSection = dynamic(
  () => import("@/components/sections/BlogHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const BlogPostsGrid = dynamic(
  () => import("@/components/sections/BlogPostsGrid"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const BlogCategories = dynamic(
  () => import("@/components/sections/BlogCategories"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const BlogNewsletter = dynamic(
  () => import("@/components/sections/BlogNewsletter"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "Software Testing Blog | Expert QA Insights & Best Practices | Testriq",
  description: "Discover expert insights on software testing, QA automation, performance testing, security testing, and mobile app testing. Stay updated with latest testing trends and best practices.",
  keywords: "software testing blog, QA insights, testing best practices, automation testing, performance testing, security testing, mobile testing, test automation",
  openGraph: {
    title: "Software Testing Blog | Expert QA Insights & Best Practices | Testriq",
    description: "Discover expert insights on software testing, QA automation, performance testing, security testing, and mobile app testing.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <MainLayout>
      <BlogHeroSection />
      <BlogCategories />
      <BlogPostsGrid />
      <BlogNewsletter />
    </MainLayout>
  );
}

