import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import BlogStructuredData from "@/components/seo/BlogStructuredData";
import { Metadata } from "next";
import { getCategories } from "@/lib/wordpress-graphql";
import { adaptWordPressCategory } from "@/lib/wordpress-data-adapter";
import FeaturedCategoriesSection from "@/components/sections/FeaturedCategoriesSection";

const CategoriesHeroSection = dynamic(
  () => import("@/components/sections/CategoriesHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="h-[600px] bg-slate-900 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    ),
  }
);

const CategoriesGrid = dynamic(
  () => import("@/components/sections/CategoriesGrid"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-slate-50">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
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
        url: "/OG/Blog-OG-Img.webp",
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
    images: ["/OG/Blog-Twitter-Img.webp"],
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
    <div className="min-h-screen bg-slate-50">
      <MainLayout>
        <BlogStructuredData
          type="category"
          title="Testing Categories | Software Testing & QA Topics | Testriq Blog"
          description="Explore comprehensive testing and QA categories on Testriq Blog. Find expert guides, tutorials, and best practices for test automation, performance testing, security testing, mobile testing, API testing, and more."
          url="https://www.testriq.com/blog/categories"
          postCount={categories.length}
        />

        {/* Hero Section */}
        <CategoriesHeroSection />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 lg:-mt-10 z-20 pb-20">
          {/* Featured Section - Elevated */}
          {categories.length > 0 && (
            <div className="mb-16">
              <FeaturedCategoriesSection categories={categories} />
            </div>
          )}

          {/* Main Categories Grid */}
          <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-xl border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">All Categories</h2>
                <p className="text-slate-500">Browse our complete collection of testing topics</p>
              </div>
            </div>
            <CategoriesGrid categories={categories} />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}