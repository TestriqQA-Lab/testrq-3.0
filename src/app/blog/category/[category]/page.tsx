import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import BlogStructuredData from "@/components/seo/BlogStructuredData";
import Breadcrumb from "@/components/ui/Breadcrumb";
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

const RelatedCategories = dynamic(
  () => import("@/components/sections/RelatedCategories"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-32 bg-gray-100">
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

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "Categories", href: "/blog/categories" },
    { label: categoryName }
  ];

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
        
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <CategoryHeroSection category={categoryData.category} />
        
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <CategoryPostsGrid category={categoryData.category} posts={categoryData.posts} />
              
              {/* Internal linking section */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Explore More Testing Topics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <a href="/blog/category/mobile-application-testing" className="text-sm text-brand-blue hover:text-blue-700 transition-colors">
                    Mobile App Testing
                  </a>
                  <a href="/blog/category/api-testing" className="text-sm text-brand-blue hover:text-blue-700 transition-colors">
                    API Testing
                  </a>
                  <a href="/blog/category/performance-testing-services" className="text-sm text-brand-blue hover:text-blue-700 transition-colors">
                    Performance Testing
                  </a>
                  <a href="/blog/category/qa-testing" className="text-sm text-brand-blue hover:text-blue-700 transition-colors">
                    QA Testing
                  </a>
                  <a href="/blog/category/best-practices" className="text-sm text-brand-blue hover:text-blue-700 transition-colors">
                    Best Practices
                  </a>
                  <a href="/blog/category/software-testing-tools" className="text-sm text-brand-blue hover:text-blue-700 transition-colors">
                    Testing Tools
                  </a>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a href="/blog" className="text-sm font-medium text-brand-blue hover:text-blue-700 transition-colors">
                    View All Blog Categories →
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <CategorySidebar category={categoryData.category} />
            </div>
          </div>
        </div>

        {/* Related Categories Section */}
        <RelatedCategories currentCategory={category} />
      </MainLayout>
    </div>
  );
}

