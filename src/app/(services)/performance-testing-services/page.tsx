import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema, performanceTestingServiceSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Stress Testing Services | Performance Testing Services",
  description: "We are one of the best Load testing services and performance testing services Company services companies in Mumbai. Ensure your applications perform optimally under any conditions with comprehensive performance validation.",
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
    url: "/OG/Performance-Testing-Service-Og.webp",
    type: "website",
    images: [
      {
        url: "/OG/Performance-Testing-Service-Og.webp",
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
    images: ["/OG/Performance-Testing-Service-Twitter.webp"],
  },
  metadataBase: new URL('https://testriq.com/'),
  alternates: {
    canonical: "https://testriq.com/performance-testing-services",
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
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/performance-testing-services" },
    { name: "Performance Testing", url: "https://testriq.com/performance-testing-services" }
  ];

  

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

