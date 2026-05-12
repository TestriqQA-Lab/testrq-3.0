
import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  automationTestingServiceSchema,
  createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { HeroLoader, ContentLoader, FAQLoader } from "@/components/ui/Loaders";

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
        url: "https://www.testriq.com/OG/Automation-testing-service-og-image.webp",
        width: 1200,
        height: 630,
        alt: "Automation Testing Services - Testriq",
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
    images: ["https://www.testriq.com/OG/Automation-testing-service-og-image.webp"],
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
  { ssr: true, loading: () => <ContentLoader /> }
);

const AutomationTestingProvenTestingProcess = dynamic(
  () => import("@/components/sections/AutomationTestingProvenTestingProcess"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const AutomationTestingToolsFramework = dynamic(
  () => import("@/components/sections/AutomationTestingToolsFramework"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const AutomationTestingCaseStudies = dynamic(
  () => import("@/components/sections/AutomationTestingCaseStudies"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const AutomationTestingFAQs = dynamic(
  () => import("@/components/sections/AutomationTestingFAQs"),
  { ssr: true, loading: () => <FAQLoader /> }
);


const ManualTestingFrameworkArchitecture = dynamic(
  () => import("@/components/sections/ManualTestingFrameworkArchitecture"),
  { ssr: true, loading: () => <ContentLoader /> }
);

export default function AutomationTestingServices() {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL)
  // to 2 canonical items; URL now structurally derived from pathname.
  return (
    <div>
      <StructuredData data={automationTestingServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/automation-testing-services",
          "Automation Testing Services"
        )}
      />
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
