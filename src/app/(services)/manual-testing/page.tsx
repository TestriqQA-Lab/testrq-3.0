import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Manual Testing Services - Expert QA Testing Solutions | Testriq",
  description: "Professional manual testing services including functional testing, usability testing, exploratory testing, and user acceptance testing. Ensure your software delivers exceptional user experiences with human-centered testing approaches.",
  keywords: [
    "manual testing",
    "manual testing services",
    "functional testing",
    "usability testing",
    "exploratory testing",
    "user acceptance testing",
    "black box testing",
    "white box testing",
    "grey box testing",
    "manual QA testing",
    "test case execution",
    "bug tracking",
    "quality assurance",
    "software testing",
    "manual test execution",
    "test planning",
    "test design",
    "regression testing",
    "smoke testing",
    "sanity testing"
  ],
  openGraph: {
    title: "Manual Testing Services - Expert QA Testing Solutions | Testriq",
    description: "Professional manual testing services including functional testing, usability testing, exploratory testing, and user acceptance testing. Ensure your software delivers exceptional user experiences with human-centered testing approaches.",
    url: "https://testrq-3-0.vercel.app/manual-testing",
    type: "website",
    images: [
      {
        url: "/manual-testing-og.jpg",
        width: 1200,
        height: 630,
        alt: "Manual Testing Services by Testriq",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manual Testing Services - Expert QA Testing Solutions | Testriq",
    description: "Professional manual testing services including functional testing, usability testing, exploratory testing, and user acceptance testing. Ensure your software delivers exceptional user experiences with human-centered testing approaches.",
    images: ["/manual-testing-twitter.jpg"],
  },
  alternates: {
    canonical: "/manual-testing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ManualTestingHeroSection = dynamic(
  () => import("@/components/sections/ManualTestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingReadyToEnsureQuality = dynamic(
  () => import("@/components/sections/ManualTestingReadyToEnsureQuality"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingComprehensiveSlider = dynamic(
  () => import("@/components/sections/ManualTestingComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingProvenTestingProcess = dynamic(
  () => import("@/components/sections/ManualTestingProvenTestingProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingWhyChooseTestriq = dynamic(
  () => import("@/components/sections/ManualTestingWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingToolsFramework = dynamic(
  () => import("@/components/sections/ManualTestingToolsFramework"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingROISection = dynamic(
  () => import("@/components/sections/ManualTestingROISection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingCaseStudies = dynamic(
  () => import("@/components/sections/ManualTestingCaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingFAQs = dynamic(() => import("@/components/sections/ManualTestingFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const ManualTestingAnyQuestions = dynamic(
  () => import("@/components/sections/ManualTestingAnyQuestions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function ManualTestingPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://testrq-3-0.vercel.app" },
    { name: "Services", url: "https://testrq-3-0.vercel.app/services" },
    { name: "Manual Testing", url: "https://testrq-3-0.vercel.app/manual-testing" }
  ];

  const manualTestingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Manual Testing Services",
    "description": "Professional manual testing services including functional testing, usability testing, exploratory testing, and user acceptance testing.",
    "provider": {
      "@type": "Organization",
      "name": "Testriq",
      "url": "https://testrq-3-0.vercel.app"
    },
    "serviceType": "Software Testing",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Manual Testing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Functional Testing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Usability Testing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Exploratory Testing"
          }
        }
      ]
    }
  };

  return (
    <div>
      <StructuredData data={manualTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <ManualTestingHeroSection />
        <ManualTestingComprehensiveSlider />
        <ManualTestingProvenTestingProcess />
        <ManualTestingWhyChooseTestriq />
        <ManualTestingToolsFramework />
        <ManualTestingCaseStudies />
        <ManualTestingFAQs />
        <ManualTestingReadyToEnsureQuality />
      </MainLayout>
    </div>
  );
}

