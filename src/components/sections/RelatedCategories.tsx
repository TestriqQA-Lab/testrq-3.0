"use client";
import Link from "next/link";
import { ArrowRight, FileText, TrendingUp } from "lucide-react";

interface Category {
  name: string;
  slug: string;
  description: string;
  postCount: number;
  icon?: React.ReactNode;
}

interface RelatedCategoriesProps {
  currentCategory?: string;
  className?: string;
}

const RelatedCategories = ({ currentCategory, className = "" }: RelatedCategoriesProps) => {
  const categories: Category[] = [
    {
      name: "Mobile Application Testing",
      slug: "mobile-application-testing",
      description: "Comprehensive mobile app testing strategies and best practices",
      postCount: 25,
      icon: <FileText className="h-5 w-5" />
    },
    {
      name: "API Testing",
      slug: "api-testing", 
      description: "API testing methodologies, tools, and automation techniques",
      postCount: 18,
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      name: "Performance Testing Services",
      slug: "performance-testing-services",
      description: "Load testing, stress testing, and performance optimization",
      postCount: 22,
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      name: "QA Testing",
      slug: "qa-testing",
      description: "Quality assurance fundamentals and advanced testing concepts",
      postCount: 30,
      icon: <FileText className="h-5 w-5" />
    },
    {
      name: "Best Practices",
      slug: "best-practices",
      description: "Industry best practices and proven testing methodologies",
      postCount: 35,
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      name: "Software Testing Tools",
      slug: "software-testing-tools",
      description: "Reviews and guides for testing tools and frameworks",
      postCount: 28,
      icon: <FileText className="h-5 w-5" />
    },
    {
      name: "IoT Device Testing",
      slug: "iot-device-testing",
      description: "IoT testing strategies for connected devices and systems",
      postCount: 15,
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      name: "AI Application Testing",
      slug: "ai-application-testing",
      description: "Testing AI and machine learning applications effectively",
      postCount: 12,
      icon: <FileText className="h-5 w-5" />
    }
  ];

  // Filter out current category and limit to 6
  const relatedCategories = categories
    .filter(cat => cat.slug !== currentCategory)
    .slice(0, 6);

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore More Testing Topics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover expert insights across different testing domains and enhance your QA knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/blog/category/${category.slug}`}
              className="group bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-brand-blue/10 rounded-lg text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-brand-blue transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.postCount} articles
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {category.description}
              </p>
              
              <div className="flex items-center text-brand-blue group-hover:text-blue-700 transition-colors">
                <span className="text-sm font-medium">Explore Articles</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View All Blog Categories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedCategories;

