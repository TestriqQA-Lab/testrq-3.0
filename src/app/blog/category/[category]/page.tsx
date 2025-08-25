import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAdaptedCategoryData } from "@/lib/wordpress-data-adapter";

const CategoryHeroSection = dynamic(
  () => import("@/components/sections/CategoryHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CategoryPostsGrid = dynamic(
  () => import("@/components/sections/CategoryPostsGrid"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CategorySidebar = dynamic(
  () => import("@/components/sections/CategorySidebar"),
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
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = await getAdaptedCategoryData(category, 1);

  if (!categoryData) {
    return {
      title: "Category Not Found | Testriq Blog",
      description: "The requested blog category could not be found.",
    };
  }

  return {
    title: categoryData.category.seo.title,
    description: categoryData.category.seo.description,
    keywords: categoryData.category.seo.keywords,
    openGraph: {
      title: categoryData.category.seo.title,
      description: categoryData.category.seo.description,
      type: "website",
      url: `/blog/category/${category}`,
    },
    twitter: {
      card: "summary_large_image",
      title: categoryData.category.seo.title,
      description: categoryData.category.seo.description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = await getAdaptedCategoryData(category, 50);

  if (!categoryData) {
    notFound();
  }

  return (
    <div>
      <MainLayout>
        <CategoryHeroSection category={categoryData.category} />
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <CategoryPostsGrid category={categoryData.category} posts={categoryData.posts} />
            </div>
            <div className="lg:col-span-1">
              <CategorySidebar category={categoryData.category} />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

