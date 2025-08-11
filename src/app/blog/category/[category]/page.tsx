import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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

// Category data (in a real app, this would come from a CMS or database)
const categories = {
  "test-automation": {
    id: "test-automation",
    name: "Test Automation",
    description: "Comprehensive guides and tutorials on test automation frameworks, tools, and best practices for efficient software testing.",
    color: "from-blue-500 to-blue-600",
    icon: "🤖",
    postCount: 42,
    subscribers: 2500,
    tags: ["Selenium", "Cypress", "Playwright", "WebDriver", "Automation"],
    featuredTools: ["Selenium WebDriver", "Cypress", "Playwright", "TestComplete", "Robot Framework"],
    seo: {
      title: "Test Automation Articles & Tutorials | Testriq Blog",
      description: "Learn test automation with comprehensive guides on Selenium, Cypress, Playwright, and other automation frameworks. Expert tutorials and best practices.",
      keywords: "test automation, selenium, cypress, playwright, automation testing, webdriver, test frameworks"
    }
  },
  "performance-testing": {
    id: "performance-testing",
    name: "Performance Testing",
    description: "Learn performance testing methodologies, load testing strategies, and optimization techniques for scalable applications.",
    color: "from-green-500 to-green-600",
    icon: "⚡",
    postCount: 28,
    subscribers: 1800,
    tags: ["JMeter", "LoadRunner", "K6", "Gatling", "Performance"],
    featuredTools: ["Apache JMeter", "LoadRunner", "K6", "Gatling", "BlazeMeter"],
    seo: {
      title: "Performance Testing Guides & Best Practices | Testriq Blog",
      description: "Master performance testing with JMeter, LoadRunner, and other tools. Learn load testing, stress testing, and performance optimization techniques.",
      keywords: "performance testing, load testing, jmeter, loadrunner, stress testing, performance optimization"
    }
  },
  "security-testing": {
    id: "security-testing",
    name: "Security Testing",
    description: "Discover security testing methodologies, vulnerability assessment techniques, and penetration testing best practices.",
    color: "from-red-500 to-red-600",
    icon: "🛡️",
    postCount: 24,
    subscribers: 1600,
    tags: ["OWASP", "Penetration Testing", "Security", "Vulnerability", "SAST"],
    featuredTools: ["OWASP ZAP", "Burp Suite", "Nessus", "Veracode", "Checkmarx"],
    seo: {
      title: "Security Testing & Vulnerability Assessment | Testriq Blog",
      description: "Learn security testing with OWASP guidelines, penetration testing techniques, and vulnerability assessment best practices.",
      keywords: "security testing, penetration testing, owasp, vulnerability assessment, security audit"
    }
  },
  "mobile-testing": {
    id: "mobile-testing",
    name: "Mobile Testing",
    description: "Comprehensive mobile app testing guides covering iOS, Android, cross-platform testing, and mobile automation strategies.",
    color: "from-purple-500 to-purple-600",
    icon: "📱",
    postCount: 31,
    subscribers: 2100,
    tags: ["iOS Testing", "Android Testing", "Appium", "Mobile Automation", "Cross-platform"],
    featuredTools: ["Appium", "Espresso", "XCUITest", "Detox", "TestComplete Mobile"],
    seo: {
      title: "Mobile App Testing Guides & Automation | Testriq Blog",
      description: "Master mobile testing for iOS and Android apps. Learn Appium automation, device testing, and mobile QA best practices.",
      keywords: "mobile testing, ios testing, android testing, appium, mobile automation, mobile app testing"
    }
  },
  "api-testing": {
    id: "api-testing",
    name: "API Testing",
    description: "Master API testing with comprehensive guides on REST, GraphQL, microservices testing, and automation strategies.",
    color: "from-indigo-500 to-indigo-600",
    icon: "🔗",
    postCount: 19,
    subscribers: 1400,
    tags: ["REST API", "GraphQL", "Postman", "API Automation", "Microservices"],
    featuredTools: ["Postman", "REST Assured", "SoapUI", "Insomnia", "Newman"],
    seo: {
      title: "API Testing Tutorials & Automation Guides | Testriq Blog",
      description: "Learn API testing with Postman, REST Assured, and other tools. Master REST, GraphQL, and microservices testing.",
      keywords: "api testing, rest api testing, postman, rest assured, api automation, microservices testing"
    }
  }
};

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = categories[category as keyof typeof categories];
  
  if (!categoryData) {
    return {
      title: "Category Not Found | Testriq Blog",
      description: "The requested blog category could not be found.",
    };
  }

  return {
    title: categoryData.seo.title,
    description: categoryData.seo.description,
    keywords: categoryData.seo.keywords,
    openGraph: {
      title: categoryData.seo.title,
      description: categoryData.seo.description,
      type: "website",
      url: `/blog/category/${category}`,
    },
    twitter: {
      card: "summary_large_image",
      title: categoryData.seo.title,
      description: categoryData.seo.description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = categories[category as keyof typeof categories];

  if (!categoryData) {
    notFound();
  }

  return (
    <div>
      <MainLayout>
        <CategoryHeroSection category={categoryData} />
        <div className="max-w-7xl mx-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <CategoryPostsGrid category={categoryData} />
            </div>
            <div className="lg:col-span-1">
              <CategorySidebar category={categoryData} />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }));
}

