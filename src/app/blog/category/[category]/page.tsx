import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import BlogStructuredData from "@/components/seo/BlogStructuredData";
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
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const categoryName = categoryData.category.name;
  const categoryDescription = categoryData.category.description || `Explore expert articles and insights about ${categoryName} testing. Learn best practices, tutorials, and industry insights from Testriq's ISTQB certified experts.`;

  return {
    title: `${categoryName} | Insights & Best Practices`,
    description: categoryDescription,
    keywords: `${categoryName.toLowerCase()} testing, ${categoryName.toLowerCase()} qa, software testing, ${categoryName.toLowerCase()} best practices, ${categoryName.toLowerCase()} tutorials, testing guides, qa insights, ISTQB certified experts`,
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
      title: `${categoryName} Testing Articles | Expert Insights & Best Practices | Testriq`,
      description: categoryDescription,
      url: `https://www.testriq.com/blog/category/${category}`,
      siteName: "Testriq",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `https://www.testriq.com/images/categories/${category}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${categoryName} Testing Articles - Testriq Blog`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} Testing Articles | Expert Insights & Best Practices | Testriq`,
      description: categoryDescription,
      images: [`https://www.testriq.com/images/categories/${category}-twitter.jpg`],
      creator: "@testriqlab",
      site: "@testriqlab",
    },
    alternates: {
      canonical: `https://www.testriq.com/blog/category/${category}`,
    },
    category: "Technology",
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = await getAdaptedCategoryData(category, 50);

  if (!categoryData) {
    notFound();
  }

  const categoryName = categoryData.category.name;
  const categoryDescription = categoryData.category.description || `Explore expert articles and insights about ${categoryName} testing. Learn best practices, tutorials, and industry insights from Testriq's ISTQB certified experts.`;

  return (
    <div>
      <MainLayout>
        <BlogStructuredData
          type="category"
          title={`${categoryName} Testing Articles | Expert Insights & Best Practices | Testriq`}
          description={categoryDescription}
          url={`https://www.testriq.com/blog/category/${category}`}
          categoryName={categoryName}
          postCount={categoryData.posts.length}
        />
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