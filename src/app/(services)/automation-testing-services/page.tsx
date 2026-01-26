import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  automationTestingServiceSchema,
  createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const revalidate = 3600; // ISR: Revalidate every hour

export const metadata: Metadata = {
  title: "Automation Testing | ISO 29119-5 & SOC2 Certified | Testriq",

  description:
    "Global automation solutions using Playwright, Selenium, and Cypress. We leverage ISO 29119-5 standards to deliver high-ROI, secure, and scalable QA for enterprise software across the US, UK, EU, and Asia.",
  keywords: [
    "Automation Testing Services",
    "ISO 29119-5:2024 Compliance",
    "SOC2 Certified QA Automation",
    "Selenium Automation Frameworks",
    "Playwright Testing Experts",
    "Cypress QA Automation",
    "AI-Augmented Testing Solutions",
    "Enterprise Test Automation Strategy",
    "Mobile Automation Appium",
    "Continuous Testing CI/CD",
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
    siteName: "Testriq - Global Automation & QA",
    title:
      "Automation Testing | ISO 29119-5 & SOC2 Certified | Testriq",
    description:
      "Global automation solutions using Playwright, Selenium, and Cypress. We leverage ISO 29119-5 standards to deliver high-ROI, secure, and scalable QA.",
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
      "Automation Testing | ISO 29119-5 & SOC2 Certified | Testriq",
    description:
      "Global automation solutions using Playwright, Selenium, and Cypress. We leverage ISO 29119-5 standards to deliver high-ROI, secure, and scalable QA.",
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

const AutomationTestingROISection = dynamic(
  () => import("@/components/sections/AutomationTestingROISection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-[500px] bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AutomationComplianceTable = dynamic(
  () => import("@/components/sections/AutomationComplianceTable"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-[400px] bg-[theme(color.background)]">
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
        <AutomationComplianceTable />
        <AutomationTestingROISection />
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
