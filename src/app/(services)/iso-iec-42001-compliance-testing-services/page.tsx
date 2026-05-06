import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  iso42001ComplianceTestingSchema,
  createBreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { ContentLoader, FAQLoader } from "@/components/ui/Loaders";

export const metadata: Metadata = {
  title:
    "ISO/IEC 42001:2023 Compliance Testing Services | AI Governance & AIMS Certification | Testriq",
  description:
    "Expert ISO/IEC 42001:2023 compliance testing for AI Management Systems (AIMS). We help organizations achieve certification readiness with gap analysis, AI risk assessment, bias testing, explainability validation, and regulatory alignment with EU AI Act and NIST AI RMF.",
  keywords: [
    "ISO 42001 Compliance Testing",
    "ISO/IEC 42001:2023 Certification",
    "AI Management System Testing",
    "AIMS Compliance",
    "AI Governance Testing",
    "AI Risk Assessment Services",
    "AI Bias Testing",
    "AI Explainability Testing",
    "EU AI Act Compliance",
    "NIST AI RMF Alignment",
    "Responsible AI Testing",
    "AI Ethics Compliance",
    "Testriq AI Compliance",
    "AI Transparency Testing",
    "Annex A Controls Testing",
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
    canonical:
      "https://www.testriq.com/iso-iec-42001-compliance-testing-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/iso-iec-42001-compliance-testing-services",
    siteName: "Testriq - AI Compliance & QA Testing",
    title:
      "ISO/IEC 42001:2023 Compliance Testing | AI Governance & Certification | Testriq",
    description:
      "Achieve ISO/IEC 42001:2023 certification for your AI systems. Expert AIMS compliance testing covering risk assessment, bias detection, explainability, and regulatory alignment.",
    images: [
      {
        url: "https://www.testriq.com/OG/ISO-42001-Compliance-Testing-Og.webp",
        width: 1200,
        height: 630,
        alt: "ISO/IEC 42001:2023 Compliance Testing Services by Testriq QA Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title:
      "ISO/IEC 42001:2023 Compliance Testing | AI Governance & Certification | Testriq",
    description:
      "Achieve ISO/IEC 42001:2023 certification for your AI systems. Expert AIMS compliance testing covering risk assessment, bias detection, explainability, and regulatory alignment.",
    images: ["https://www.testriq.com/OG/ISO-42001-Compliance-Testing-Twitter.webp"],
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

import ISO42001HeroSection from "@/components/sections/ISO42001HeroSection";

const ISO42001WhatIsSection = dynamic(
  () => import("@/components/sections/ISO42001WhatIsSection"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const ISO42001ComprehensiveSlider = dynamic(
  () => import("@/components/sections/ISO42001ComprehensiveSlider"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const ISO42001ProvenTestingProcess = dynamic(
  () => import("@/components/sections/ISO42001ProvenTestingProcess"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const ISO42001WhyChooseTestriq = dynamic(
  () => import("@/components/sections/ISO42001WhyChooseTestriq"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const ISO42001ToolsFramework = dynamic(
  () => import("@/components/sections/ISO42001ToolsFramework"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const ISO42001ComplianceTable = dynamic(
  () => import("@/components/sections/ISO42001ComplianceTable"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const ISO42001FAQs = dynamic(
  () => import("@/components/sections/ISO42001FAQs"),
  { ssr: true, loading: () => <FAQLoader /> }
);

const ISO42001ReadyToStart = dynamic(
  () => import("@/components/sections/ISO42001ReadyToStart"),
  { ssr: true, loading: () => <ContentLoader /> }
);

export default function ISO42001ComplianceTestingServices() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    {
      name: "Services",
      url: "https://www.testriq.com/iso-iec-42001-compliance-testing-services",
    },
    {
      name: "ISO/IEC 42001 Compliance Testing",
      url: "https://www.testriq.com/iso-iec-42001-compliance-testing-services",
    },
  ];

  return (
    <div>
      <StructuredData data={iso42001ComplianceTestingSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <ISO42001HeroSection />
        <ISO42001WhatIsSection />
        <ISO42001ComprehensiveSlider />
        <ISO42001ComplianceTable />
        <ISO42001ProvenTestingProcess />
        <ISO42001WhyChooseTestriq />
        <ISO42001ToolsFramework />
        <ISO42001FAQs />
        <ISO42001ReadyToStart />
      </MainLayout>
    </div>
  );
}
