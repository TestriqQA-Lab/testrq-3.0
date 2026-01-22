
import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  automationTestingServiceSchema,
  createBreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { HeroLoader, ContentLoader, FAQLoader } from "@/components/ui/Loaders";

export const metadata: Metadata = {
  title: "Expert Test Automation Services | Speed and Accuracy for Every Release",
  description:
    "Accelerate your software delivery with Testriq's automation testing services. We use top frameworks like Selenium, Playwright, and Appium for robust, scalable QA.",
  keywords: [
    "automation testing services",
    "test automation company",
    "selenium testing services",
    "playwright automation",
    "appium mobile automation",
    "CI/CD integration",
    "regression automation",
    "automated functional testing",
    "quality assurance automation",
    "software test automation",
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
    siteName: "Testriq - Automation Testing Services",
    title: "Expert Test Automation Services - Speed and Accuracy for Every Release",
    description:
      "Accelerate your software delivery with Testriq's automation testing services. We use top frameworks like Selenium, Playwright, and Appium for robust, scalable QA.",
    images: [
      {
        url: "/OG/Automation-Testing-Services-og.webp",
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
    title: "Expert Test Automation Services - Speed and Accuracy for Every Release",
    description:
      "Accelerate your software delivery with Testriq's automation testing services. We use top frameworks like Selenium, Playwright, and Appium for robust, scalable QA.",
    images: ["/OG/Automation-Testing-Services-Twitter.webp"],
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

const AutomationTestingHeroSection = dynamic(
  () => import("@/components/sections/AutomationTestingHeroSection"),
  { ssr: true, loading: () => <HeroLoader /> }
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

const AutomationTestingReadyToEnsureQuality = dynamic(
  () => import("@/components/sections/AutomationTestingReadyToEnsureQuality"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const ManualTestingFrameworkArchitecture = dynamic(
  () => import("@/components/sections/ManualTestingFrameworkArchitecture"),
  { ssr: true, loading: () => <ContentLoader /> }
);

export default function AutomationTestingServices() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    {
      name: "Services",
      url: "https://www.testriq.com/automation-testing-services",
    },
    {
      name: "Automation Testing Services",
      url: "https://www.testriq.com/automation-testing-services",
    },
  ];

  return (
    <div>
      <StructuredData data={automationTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <AutomationTestingHeroSection />
        <AutomationTestingReadyToEnsureQuality />
        <AutomationTestingComprehensiveSlider />
        <AutomationTestingProvenTestingProcess />
        <ManualTestingFrameworkArchitecture />
        <AutomationTestingToolsFramework />
        <AutomationTestingCaseStudies />
        <AutomationTestingFAQs />
      </MainLayout>
    </div>
  );
}
