import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema, securityTestingServiceSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Security Testing Services & Pen-testing Services | Testriq",
  description: "Protect your digital assets with Testriq's elite VAPT and Security Testing services. We leverage ISO 29119 standards for 2026 to ensure global resilience against evolving cyber threats.",
  keywords: [
    "Security Testing Services",
    "Pen-testing Services",
    "VAPT",
    "Application Security Testing",
    "ISO 29119 Security",
    "API Security Testing 2026",
    "Shift-Left Security CI/CD",
    "Digital Resilience",
    "SaaS Security Audit",
    "Cloud Infrastructure Security"
  ],
  openGraph: {
    title: "Security Testing Services & Pen-testing Services | Testriq",
    description: "Ensure your systems withstand modern cyber attacks with Testriq's comprehensive VAPT and Application Security Testing solutions.",
    url: "https://www.testriq.com/security-testing",
    type: "website",
    images: [
      {
        url: "/OG/Security-Testing-Og.webp",
        width: 1200,
        height: 630,
        alt: "Security Testing Services by Testriq",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Testing Services & Pen-testing Services | Testriq",
    description: "Ensure your systems withstand modern cyber attacks with Testriq's comprehensive VAPT and Application Security Testing solutions.",
    images: ["/OG/Security-Testing-Twitter.webp"],
  },
  metadataBase: new URL('https://www.testriq.com/'),
  alternates: {
    canonical: "https://www.testriq.com/security-testing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import SecurityTestingHeroSection from "@/components/sections/SecurityTestingHeroSection"


const SecurityTestingReadyToEnsureQuality = dynamic(
  () => import("@/components/sections/SecurityTestingReadyToEnsureQuality"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const SecurityTestingChallenges = dynamic(
  () => import("@/components/sections/SecurityTestingChallenges"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const SecurityTestingComprehensiveSlider = dynamic(
  () => import("@/components/sections/SecurityTestingComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const SecureGuardFramework = dynamic(
  () => import("@/components/sections/SecureGuardFramework"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const SecurityTestingWhyChooseTestriq = dynamic(
  () => import("@/components/sections/SecurityTestingWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const TestriqTCoE = dynamic(
  () => import("@/components/sections/TestriqTCoE"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const SecurityTestingToolsFramework = dynamic(
  () => import("@/components/sections/SecurityTestingToolsFramework"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const SecurityTestingROISection = dynamic(
  () => import("@/components/sections/SecurityTestingROISection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const SecurityTestingCaseStudies = dynamic(
  () => import("@/components/sections/SecurityTestingCaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const SecurityTestingFAQs = dynamic(() => import("@/components/sections/SecurityTestingFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});


export default function SecurityTestingPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "Services", url: "https://www.testriq.com/security-testing" },
    { name: "Security Testing", url: "https://www.testriq.com/security-testing" }
  ];



  return (
    <div>
      <StructuredData data={securityTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <SecurityTestingHeroSection />
        <SecurityTestingChallenges />
        <SecurityTestingComprehensiveSlider />
        <SecureGuardFramework />
        <SecurityTestingROISection />
        <SecurityTestingWhyChooseTestriq />
        <TestriqTCoE />
        <SecurityTestingToolsFramework />
        <SecurityTestingCaseStudies />
        <SecurityTestingFAQs />
        <SecurityTestingReadyToEnsureQuality />
      </MainLayout>
    </div>
  );
}

