import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData from "@/components/seo/StructuredData";
import { Metadata } from "next";

// SEO metadata for the Tools page
export const metadata: Metadata = {
  title: "Testing Tools & Frameworks | Professional QA Automation Solutions",
  description: "Discover our comprehensive suite of testing tools and frameworks for web application testing, mobile testing, API testing, and healthcare software testing. Expert QA automation solutions with Selenium, Cypress, Playwright, and more.",
  keywords: [
    "testing tools",
    "test automation frameworks", 
    "QA tools",
    "selenium testing",
    "cypress framework",
    "playwright automation",
    "web application testing tools",
    "mobile testing frameworks",
    "API testing tools",
    "healthcare testing tools",
    "software testing automation",
    "quality assurance tools",
    "test management tools",
    "performance testing tools",
    "security testing frameworks",
    "CI/CD testing tools",
    "automated testing solutions",
    "testing infrastructure",
    "test orchestration",
    "continuous testing"
  ],
  openGraph: {
    title: "Testing Tools & Frameworks | Professional QA Automation Solutions",
    description: "Discover our comprehensive suite of testing tools and frameworks for web application testing, mobile testing, API testing, and healthcare software testing.",
    type: "website",
    url: "/tools",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testing Tools & Frameworks | Professional QA Automation Solutions", 
    description: "Discover our comprehensive suite of testing tools and frameworks for web application testing, mobile testing, API testing, and healthcare software testing.",
  },
  alternates: {
    canonical: "/tools",
  },
};

// Dynamic imports for better performance
const ToolsHeroSection = dynamic(
  () => import("@/components/sections/ToolsHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ToolsCategoriesSection = dynamic(
  () => import("@/components/sections/ToolsCategoriesSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ToolsFrameworksSection = dynamic(
  () => import("@/components/sections/ToolsFrameworksSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ToolsTechStackSection = dynamic(
  () => import("@/components/sections/ToolsTechStackSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ToolsIndustrySpecificSection = dynamic(
  () => import("@/components/sections/ToolsIndustrySpecificSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ToolsAutomationSection = dynamic(
  () => import("@/components/sections/ToolsAutomationSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ToolsPerformanceSection = dynamic(
  () => import("@/components/sections/ToolsPerformanceSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ToolsReadyToElevateSection = dynamic(
  () => import("@/components/sections/ToolsReadyToElevateSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

// Structured data for SEO
const toolsPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Testing Tools & Frameworks",
  "description": "Comprehensive suite of testing tools and frameworks for professional QA automation solutions",
  "url": "/tools",
  "mainEntity": {
    "@type": "ItemList",
    "name": "Testing Tools and Frameworks",
    "description": "Professional testing tools and frameworks used by Testriq for quality assurance",
    "itemListElement": [
      {
        "@type": "SoftwareApplication",
        "name": "Selenium WebDriver",
        "description": "Open-source web application testing framework",
        "applicationCategory": "Testing Tool"
      },
      {
        "@type": "SoftwareApplication", 
        "name": "Cypress",
        "description": "Modern end-to-end testing framework for web applications",
        "applicationCategory": "Testing Framework"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Playwright",
        "description": "Cross-browser automation framework for modern web applications",
        "applicationCategory": "Automation Framework"
      }
    ]
  }
};

export default function ToolsPage() {
  return (
    <div>
      <StructuredData data={toolsPageSchema} />
      <MainLayout>
        <ToolsHeroSection />
        <ToolsCategoriesSection />
        <ToolsFrameworksSection />
        <ToolsTechStackSection />
        <ToolsIndustrySpecificSection />
        <ToolsAutomationSection />
        <ToolsPerformanceSection />
        <ToolsReadyToElevateSection />
      </MainLayout>
    </div>
  );
}

