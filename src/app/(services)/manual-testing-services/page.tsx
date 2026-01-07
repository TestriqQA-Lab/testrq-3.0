import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  createBreadcrumbSchema,
  manualTestingServiceSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Manual Testing Services & Software QA | Testriq",
  description:
    "Strategic manual testing for 2025. Use ISO 29119 standards and human intelligence to navigate complex micro-services and rapid CI/CD releases.",
  keywords: [
    "exploratory testing services",
    "managed UAT",
    "manual regression testing",
    "usability audit",
    "wcag accessibility testing",
    "manual mobile app testing",
    "ad-hoc testing"
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/manual-testing",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/manual-testing",
    siteName: "Testriq - Professional Software Testing Services",
    title: "Manual Testing Services - Expert QA Testing Solutions | Testriq",
    description:
      "Explore Testriq's manual testing services for comprehensive functional, usability, compatibility, and accessibility QA. Delivered by ISTQB-certified professionals with a human-centered approach.",
    images: [
      {
        url: "/OG/Manual-Testing-Service-og.webp",
        width: 1200,
        height: 630,
        alt: "Testriq Manual Testing Services by QA Experts",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "Manual Testing Services - Expert QA Testing Solutions | Testriq",
    description:
      "Explore Testriq's manual testing services for comprehensive functional, usability, compatibility, and accessibility QA. Delivered by ISTQB-certified professionals with a human-centered approach.",
    images: ["/OG/Manual-Testing-Service-Twitter.webp"],
  },
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
  verification: {
    google: "LXeSv6xxgAa1jB9JlWwO9ysJ1FNvWzgN3i3GyQs2AD0",
    yandex: "ff703971283d110e",
    yahoo: "0A67349B8CD11BF71173B38572028507",
  },
};

import ManualTestingHeroSection from "@/components/sections/ManualTestingHeroSection"

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

const ManualTestingHumanAdvantage = dynamic(
  () => import("@/components/sections/ManualTestingHumanAdvantage"),
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

const ManualTestingGlobalReach = dynamic(
  () => import("@/components/sections/ManualTestingGlobalReach"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingFAQs = dynamic(
  () => import("@/components/sections/ManualTestingFAQs"),
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
    { name: "Home", url: "https://www.testriq.com" },
    { name: "Services", url: "https://www.testriq.com/manual-testing" },
    { name: "Manual Testing", url: "https://www.testriq.com/manual-testing" },
  ];

  return (
    <div>
      <StructuredData data={manualTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <ManualTestingHeroSection />
        <ManualTestingComprehensiveSlider />
        <ManualTestingHumanAdvantage />
        <ManualTestingProvenTestingProcess />
        <ManualTestingWhyChooseTestriq />
        <ManualTestingToolsFramework />
        <ManualTestingGlobalReach />
        <ManualTestingCaseStudies />
        <ManualTestingFAQs />
        <ManualTestingReadyToEnsureQuality />
      </MainLayout>
    </div>
  );
}
