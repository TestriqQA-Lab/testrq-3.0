import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Regression Testing Services - Comprehensive Quality Assurance | Testriq",
  description: "Professional regression testing services including automated regression testing, selective regression testing, progressive regression testing, and corrective regression testing. Ensure your software updates don't break existing functionality.",
  keywords: [
    "regression testing",
    "regression testing services",
    "automated regression testing",
    "selective regression testing",
    "progressive regression testing",
    "corrective regression testing",
    "partial regression testing",
    "complete regression testing",
    "regression test automation",
    "regression testing tools",
    "continuous regression testing",
    "regression testing strategy",
    "regression test suite",
    "regression testing best practices",
    "software regression testing",
    "web regression testing",
    "mobile regression testing",
    "API regression testing",
    "visual regression testing",
    "database regression testing"
  ],
  openGraph: {
    title: "Regression Testing Services - Comprehensive Quality Assurance | Testriq",
    description: "Professional regression testing services including automated regression testing, selective regression testing, progressive regression testing, and corrective regression testing. Ensure your software updates don't break existing functionality.",
    url: "https://testrq-3-0.vercel.app/regression-testing",
    type: "website",
    images: [
      {
        url: "/regression-testing-og.jpg",
        width: 1200,
        height: 630,
        alt: "Regression Testing Services by Testriq",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regression Testing Services - Comprehensive Quality Assurance | Testriq",
    description: "Professional regression testing services including automated regression testing, selective regression testing, progressive regression testing, and corrective regression testing. Ensure your software updates don't break existing functionality.",
    images: ["/regression-testing-twitter.jpg"],
  },
  alternates: {
    canonical: "/regression-testing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const RegressionTestingHeroSection = dynamic(
  () => import("@/components/sections/RegressionTestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);


const RegressionTestingReadyToEnsureQuality = dynamic(
  () => import("@/components/sections/RegressionTestingReadyToEnsureQuality"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const RegressionTestingComprehensiveSlider = dynamic(
  () => import("@/components/sections/RegressionTestingComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const RegressionTestingProvenTestingProcess = dynamic(
  () => import("@/components/sections/RegressionTestingProvenTestingProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const RegressionTestingWhyChooseTestriq = dynamic(
  () => import("@/components/sections/RegressionTestingWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const RegressionTestingToolsFramework = dynamic(
  () => import("@/components/sections/RegressionTestingToolsFramework"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const RegressionTestingROISection = dynamic(
  () => import("@/components/sections/RegressionTestingROISection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const RegressionTestingCaseStudies = dynamic(
  () => import("@/components/sections/RegressionTestingCaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const RegressionTestingFAQs = dynamic(() => import("@/components/sections/RegressionTestingFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const RegressionTestingAnyQuestions = dynamic(
  () => import("@/components/sections/RegressionTestingAnyQuestions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function RegressionTestingPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://testrq-3-0.vercel.app" },
    { name: "Services", url: "https://testrq-3-0.vercel.app/services" },
    { name: "Regression Testing", url: "https://testrq-3-0.vercel.app/regression-testing" }
  ];

  const regressionTestingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Regression Testing Services",
    "description": "Professional regression testing services including automated regression testing, selective regression testing, progressive regression testing, and corrective regression testing.",
    "provider": {
      "@type": "Organization",
      "name": "Testriq",
      "url": "https://testrq-3-0.vercel.app"
    },
    "serviceType": "Software Testing",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Regression Testing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automated Regression Testing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Selective Regression Testing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Progressive Regression Testing"
          }
        }
      ]
    }
  };

  return (
    <div>
      <StructuredData data={regressionTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <RegressionTestingHeroSection />
        <RegressionTestingComprehensiveSlider />
        <RegressionTestingProvenTestingProcess />
        <RegressionTestingWhyChooseTestriq />
        <RegressionTestingToolsFramework />
        <RegressionTestingReadyToEnsureQuality />
      </MainLayout>
    </div>
  );
}

