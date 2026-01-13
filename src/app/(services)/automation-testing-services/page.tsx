import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  automationTestingServiceSchema,
  createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const revalidate = 3600; // ISR: Revalidate every hour

export const metadata: Metadata = {
  title: "Test Automation Services | Selenium, Playwright & CI/CD Experts",

  description:
    "Accelerate releases with scalable Test Automation Frameworks. We build self-healing scripts using Selenium, Cypress, and Playwright integrated into your CI/CD.",
  keywords: [
    "test automation framework architecture",
    "selenium webdriver services",
    "playwright automation",
    "api test automation",
    "ci/cd pipeline testing",
    "automated regression testing",
    "mobile automation testing"
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
    canonical: "https://www.testriq.com/automation-testing-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/automation-testing-services",
    siteName: "Testriq - Professional Software Testing Services",
    title:
      "Automation Testing Services - Advanced Test Automation Solutions | Testriq",
    description:
      "Accelerate your QA process with advanced automation testing services from Testriq. Our test automation experts deliver 80% faster cycles, high coverage, and CI/CD integration using Selenium, API, and mobile frameworks.",
    images: [
      {
        url: "/OG/Automation-Testing-Service-Og.webp",
        width: 1200,
        height: 630,
        alt: "Automation Testing Services - Testriq",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title:
      "Automation Testing Services - Advanced Test Automation Solutions | Testriq",
    description:
      "Accelerate your QA process with advanced automation testing services from Testriq. Our test automation experts deliver 80% faster cycles, high coverage, and CI/CD integration using Selenium, API, and mobile frameworks.",
    images: ["/OG/Automation-testing-Services-Twitter.webp"],
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

import AutomationTestingHeroSection from "@/components/sections/AutomationTestingHeroSection"

const AutomationTestingReadyToEnsureQuality = dynamic(
  () => import("@/components/sections/AutomationTestingReadyToEnsureQuality"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-[400px] bg-[theme(color.background)]">
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
      <div className="flex items-center justify-center h-[800px] bg-[theme(color.background)]">
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
      <div className="flex items-center justify-center h-[600px] bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingFrameworkArchitecture = dynamic(
  () => import("@/components/sections/ManualTestingFrameworkArchitecture"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-[700px] bg-[theme(color.background)]">
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
      <div className="flex items-center justify-center h-[500px] bg-[theme(color.background)]">
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
      <div className="flex items-center justify-center h-[600px] bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AutomationTestingFAQs = dynamic(
  () => import("@/components/sections/AutomationTestingFAQs"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-[600px] bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function AutomationTestingPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com" },
    {
      name: "Services",
      url: "https://www.testriq.com/automation-testing-services",
    },
    {
      name: "Automation Testing",
      url: "https://www.testriq.com/automation-testing-services",
    },
  ];

  return (
    <div>
      <StructuredData data={automationTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <AutomationTestingHeroSection />
        <AutomationTestingComprehensiveSlider />
        <AutomationTestingProvenTestingProcess />
        <ManualTestingFrameworkArchitecture />
        <AutomationTestingToolsFramework />
        <AutomationTestingCaseStudies />
        <AutomationTestingFAQs />
        <AutomationTestingReadyToEnsureQuality />
      </MainLayout>
    </div>
  );
}
