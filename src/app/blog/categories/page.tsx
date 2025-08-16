import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
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
  title: "All Categories | Testriq Blog",
  description: "Explore all testing and QA categories on Testriq Blog. Find comprehensive guides, tutorials, and best practices for software testing.",
  keywords: "testing categories, qa categories, software testing, test automation, performance testing, security testing",
  openGraph: {
    title: "All Categories | Testriq Blog",
    description: "Explore all testing and QA categories on Testriq Blog. Find comprehensive guides, tutorials, and best practices for software testing.",
    type: "website",
    url: "/blog/categories",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Categories | Testriq Blog",
    description: "Explore all testing and QA categories on Testriq Blog. Find comprehensive guides, tutorials, and best practices for software testing.",
  },
};

export default async function CategoriesPage() {
  const wpCategories = await getCategories();
  const categories = wpCategories
    .filter(cat => cat.count > 0)
    .map(adaptWordPressCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <MainLayout>
        <CategoriesHeroSection />
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <CategoriesGrid categories={categories} />
        </div>
      </MainLayout>
    </div>
  );
}

