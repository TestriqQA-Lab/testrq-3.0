import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import BlogStructuredData from "@/components/seo/BlogStructuredData";
import { Metadata } from "next";
import { getCategories } from "@/lib/wordpress-graphql";
import { adaptWordPressCategory } from "@/lib/wordpress-data-adapter";

const CategoriesHeroSection = dynamic(
  () => import("@/components/sections/CategoriesHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CategoriesGrid = dynamic(
  () => import("@/components/sections/CategoriesGrid"),
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
  title: "Testing Categories | Software Testing & QA Topics | Testriq Blog",
  description: "Explore comprehensive testing and QA categories on Testriq Blog. Find expert guides, tutorials, and best practices for test automation, performance testing, security testing, mobile testing, API testing, and more.",
  keywords: "testing categories, qa categories, software testing topics, test automation guides, performance testing tutorials, security testing best practices, mobile testing resources, API testing guides, regression testing, manual testing categories",
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
    title: "Testing Categories | Software Testing & QA Topics | Testriq Blog",
    description: "Explore comprehensive testing and QA categories on Testriq Blog. Find expert guides, tutorials, and best practices for test automation, performance testing, security testing, mobile testing, API testing, and more.",
    url: "https://www.testriq.com/blog/categories",
    siteName: "Testriq",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.testriq.com/images/testriq-categories-og.jpg",
        width: 1200,
        height: 630,
        alt: "Testriq Blog Categories - Software Testing & QA Topics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Testing Categories | Software Testing & QA Topics | Testriq Blog",
    description: "Explore comprehensive testing and QA categories on Testriq Blog. Find expert guides, tutorials, and best practices for test automation, performance testing, security testing, mobile testing, API testing, and more.",
    images: ["https://www.testriq.com/images/testriq-categories-twitter.jpg"],
    creator: "@testriqlab",
    site: "@testriqlab",
  },
  alternates: {
    canonical: "https://www.testriq.com/blog/categories",
  },
  category: "Technology",
};

export default async function CategoriesPage() {
  const wpCategories = await getCategories();
  const categories = wpCategories
    .filter(cat => cat.count > 0)
    .map(adaptWordPressCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <MainLayout>
        <BlogStructuredData
          type="category"
          title="Testing Categories | Software Testing & QA Topics | Testriq Blog"
          description="Explore comprehensive testing and QA categories on Testriq Blog. Find expert guides, tutorials, and best practices for test automation, performance testing, security testing, mobile testing, API testing, and more."
          url="https://www.testriq.com/blog/categories"
          postCount={categories.length}
        />
        <CategoriesHeroSection />
        <div className="max-w-7xl mx-auto py-12 px-8 md:px-12">
          <CategoriesGrid categories={categories} />
        </div>
      </MainLayout>
    </div>
  );
}