import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Automation Testing Services - Advanced Test Automation Solutions | Testriq",
  description: "Professional automation testing services including test automation frameworks, CI/CD integration, Selenium testing, API automation, and mobile test automation. Accelerate your testing cycles with cutting-edge automation solutions.",
  keywords: [
    "automation testing",
    "test automation",
    "automation testing services",
    "selenium testing",
    "test automation framework",
    "CI/CD testing",
    "API automation",
    "mobile test automation",
    "web automation testing",
    "automated regression testing",
    "continuous testing",
    "DevOps testing",
    "test automation tools",
    "automated functional testing",
    "keyword driven testing",
    "data driven testing",
    "hybrid automation framework",
    "test automation strategy",
    "automated performance testing",
    "cross browser testing automation"
  ],
  openGraph: {
    title: "Automation Testing Services - Advanced Test Automation Solutions | Testriq",
    description: "Professional automation testing services including test automation frameworks, CI/CD integration, Selenium testing, API automation, and mobile test automation. Accelerate your testing cycles with cutting-edge automation solutions.",
    url: "https://testrq-3-0.vercel.app/automation-testing",
    type: "website",
    images: [
      {
        url: "/automation-testing-og.jpg",
        width: 1200,
        height: 630,
        alt: "Automation Testing Services by Testriq",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation Testing Services - Advanced Test Automation Solutions | Testriq",
    description: "Professional automation testing services including test automation frameworks, CI/CD integration, Selenium testing, API automation, and mobile test automation. Accelerate your testing cycles with cutting-edge automation solutions.",
    images: ["/automation-testing-twitter.jpg"],
  },
  alternates: {
    canonical: "/automation-testing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const AutomationTestingHeroSection = dynamic(
  () => import("@/components/sections/AutomationTestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);


const AutomationTestingReadyToEnsureQuality = dynamic(
  () => import("@/components/sections/AutomationTestingReadyToEnsureQuality"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AutomationTestingComprehensiveSlider = dynamic(
  () => import("@/components/sections/AutomationTestingComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AutomationTestingProvenTestingProcess = dynamic(
  () => import("@/components/sections/AutomationTestingProvenTestingProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AutomationTestingWhyChooseTestriq = dynamic(
  () => import("@/components/sections/AutomationTestingWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AutomationTestingToolsFramework = dynamic(
  () => import("@/components/sections/AutomationTestingToolsFramework"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AutomationTestingROISection = dynamic(
  () => import("@/components/sections/AutomationTestingROISection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AutomationTestingCaseStudies = dynamic(
  () => import("@/components/sections/AutomationTestingCaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AutomationTestingFAQs = dynamic(() => import("@/components/sections/AutomationTestingFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const AutomationTestingAnyQuestions = dynamic(
  () => import("@/components/sections/AutomationTestingAnyQuestions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function AutomationTestingPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://testrq-3-0.vercel.app" },
    { name: "Services", url: "https://testrq-3-0.vercel.app/services" },
    { name: "Automation Testing", url: "https://testrq-3-0.vercel.app/automation-testing" }
  ];

  const automationTestingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automation Testing Services",
    "description": "Professional automation testing services including test automation frameworks, CI/CD integration, Selenium testing, API automation, and mobile test automation.",
    "provider": {
      "@type": "Organization",
      "name": "Testriq",
      "url": "https://testrq-3-0.vercel.app"
    },
    "serviceType": "Software Testing",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Automation Testing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Selenium Testing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "API Automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Test Automation"
          }
        }
      ]
    }
  };

  return (
    <div>
      <StructuredData data={automationTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <AutomationTestingHeroSection />
        <AutomationTestingComprehensiveSlider />
        <AutomationTestingProvenTestingProcess />
        <AutomationTestingWhyChooseTestriq />
        <AutomationTestingToolsFramework />
        <AutomationTestingReadyToEnsureQuality />
      </MainLayout>
    </div>
  );
}

