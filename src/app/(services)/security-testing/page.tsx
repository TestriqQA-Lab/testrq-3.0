import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema, securityTestingServiceSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Security Testing Company | VAPT Services & SecureGuard™ Framework",
  description: "Leading Security Testing Company (TCoE). Our Certified Ethical Hackers (CEH/OSCP) perform VAPT, GDPR Audits, and Source Code Review using the Testriq SecureGuard™ methodology",
  keywords: [
    "security testing company",
    "vapt services",
    "penetration testing service",
    "security center of excellence",
    "owasp top 10 testing",
    "mobile app security testing",
    "gdpr compliance audit"
  ],
  openGraph: {
    title: "Security Testing Services - Comprehensive Cybersecurity Testing | Testriq",
    description: "Professional security testing services including penetration testing, vulnerability assessment, SAST, DAST, security code review, and compliance testing. Protect your applications from cyber threats with advanced security validation.",
    url: "https://www.testriq.com/security-testing",
    type: "website",
    images: [
      {
        url: "/OG/Security-Testing-Service-Og.webp",
        width: 1200,
        height: 630,
        alt: "Security Testing Services by Testriq",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Testing Services - Comprehensive Cybersecurity Testing | Testriq",
    description: "Professional security testing services including penetration testing, vulnerability assessment, SAST, DAST, security code review, and compliance testing. Protect your applications from cyber threats with advanced security validation.",
    images: ["/OG/Security-Testing-Service-Twitter.webp"],
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

