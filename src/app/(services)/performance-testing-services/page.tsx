import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  createBreadcrumbSchema,
  performanceTestingServiceSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Stress Testing Services | Performance Testing Services",
  description: "Testriq ensures your platforms remain resilient, responsive, and ready for global scale. Elite performance engineering and load testing using ISO 29119 standards for 2026.",
  keywords: [
    "Performance Testing Services",
    "Load Testing Solutions",
    "Stress Testing Services",
    "Scalability Testing 2026",
    "Endurance Testing QA",
    "CI/CD Performance Integration",
    "ISO 29119 Performance Testing",
    "Testriq Performance Lab",
    "Global Distributed Load Generation"
  ],
  openGraph: {
    title: "Performance Testing Services | Load & Stress Testing | Testriq",
    description: "Ensure your platforms remain resilient and ready for global scale with Testriq's 2026 Performance Engineering solutions.",
    url: "/services/performance-testing-services",
    type: "website",
    images: [
      {
        url: "/OG/Performance-Testing-Og.webp",
        width: 1200,
        height: 630,
        alt: "Performance Testing Services by Testriq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Testing Services | Load & Stress Testing | Testriq",
    description: "Ensure your platforms remain resilient and ready for global scale with Testriq's 2026 Performance Engineering solutions.",
    images: ["/OG/Performance-Testing-Twitter.webp"],
  },
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/performance-testing-services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import PerformanceTestingHeroSection from "@/components/sections/PerformanceTestingHeroSection";

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

const PerformanceTestingChallenges = dynamic(
  () => import("@/components/sections/PerformanceTestingChallenges"),
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

const PerformanceTestingFAQs = dynamic(
  () => import("@/components/sections/PerformanceTestingFAQs"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

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
    { name: "Home", url: "https://www.testriq.com/" },
    {
      name: "Services",
      url: "https://www.testriq.com/performance-testing-services",
    },
    {
      name: "Performance Testing",
      url: "https://www.testriq.com/performance-testing-services",
    },
  ];

  return (
    <div>
      <StructuredData data={performanceTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <PerformanceTestingHeroSection />
        <PerformanceTestingChallenges />
        <PerformanceTestingComprehensiveSlider />
        <PerformanceTestingProvenTestingProcess />
        <PerformanceTestingWhyChooseTestriq />
        <PerformanceTestingToolsFramework />
        <PerformanceTestingFAQs />
        <PerformanceTestingReadyToEnsureQuality />
      </MainLayout>
    </div>
  );
}
