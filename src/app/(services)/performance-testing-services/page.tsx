import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Performance Testing Services - Load & Stress Testing Solutions | Testriq",
  description: "Professional performance testing services including load testing, stress testing, spike testing, endurance testing, and scalability testing. Ensure your applications perform optimally under any conditions with comprehensive performance validation.",
  keywords: [
    "performance testing",
    "performance testing services",
    "load testing",
    "stress testing",
    "spike testing",
    "endurance testing",
    "scalability testing",
    "volume testing",
    "performance testing tools",
    "JMeter testing",
    "LoadRunner testing",
    "Gatling testing",
    "performance monitoring",
    "application performance testing",
    "web performance testing",
    "mobile performance testing",
    "API performance testing",
    "database performance testing",
    "cloud performance testing",
    "performance test automation"
  ],
  openGraph: {
    title: "Performance Testing Services - Load & Stress Testing Solutions | Testriq",
    description: "Professional performance testing services including load testing, stress testing, spike testing, endurance testing, and scalability testing. Ensure your applications perform optimally under any conditions with comprehensive performance validation.",
    url: "https://testrq-3-0.vercel.app/performance-testing",
    type: "website",
    images: [
      {
        url: "/performance-testing-og.jpg",
        width: 1200,
        height: 630,
        alt: "Performance Testing Services by Testriq",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Testing Services - Load & Stress Testing Solutions | Testriq",
    description: "Professional performance testing services including load testing, stress testing, spike testing, endurance testing, and scalability testing. Ensure your applications perform optimally under any conditions with comprehensive performance validation.",
    images: ["/performance-testing-twitter.jpg"],
  },
  alternates: {
    canonical: "/performance-testing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PerformanceTestingHeroSection = dynamic(
  () => import("@/components/sections/PerformanceTestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);


const PerformanceTestingComprehensiveSlider = dynamic(
  () => import("@/components/sections/PerformanceTestingComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const PerformanceTestingProvenTestingProcess = dynamic(
  () => import("@/components/sections/PerformanceTestingProvenTestingProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const PerformanceTestingWhyChooseTestriq = dynamic(
  () => import("@/components/sections/PerformanceTestingWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const PerformanceTestingToolsFramework = dynamic(
  () => import("@/components/sections/PerformanceTestingToolsFramework"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const PerformanceTestingCaseStudies = dynamic(
  () => import("@/components/sections/PerformanceTestingCaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const PerformanceTestingFAQs = dynamic(() => import("@/components/sections/PerformanceTestingFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const PerformanceTestingReadyToEnsureQuality = dynamic(
  () => import("@/components/sections/PerformanceTestingReadyToEnsureQuality"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function PerformanceTestingPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://testrq-3-0.vercel.app" },
    { name: "Services", url: "https://testrq-3-0.vercel.app/services" },
    { name: "Performance Testing", url: "https://testrq-3-0.vercel.app/performance-testing" }
  ];

  const performanceTestingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Performance Testing Services",
    "description": "Professional performance testing services including load testing, stress testing, spike testing, endurance testing, and scalability testing.",
    "provider": {
      "@type": "Organization",
      "name": "Testriq",
      "url": "https://testrq-3-0.vercel.app"
    },
    "serviceType": "Software Testing",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Performance Testing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Load Testing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stress Testing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Scalability Testing"
          }
        }
      ]
    }
  };

  return (
    <div>
      <StructuredData data={performanceTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <PerformanceTestingHeroSection />
        <PerformanceTestingComprehensiveSlider />
        <PerformanceTestingProvenTestingProcess />
        <PerformanceTestingWhyChooseTestriq />
        <PerformanceTestingToolsFramework />
        <PerformanceTestingCaseStudies />
        <PerformanceTestingFAQs />
        <PerformanceTestingReadyToEnsureQuality />
      </MainLayout>
    </div>
  );
}

