import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema, securityTestingServiceSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Security Testing Services | Penetration Testing ",
  description: "We are one of the best Security Testing Services services companies in Mumbai. With expertise in Penetration Testing Services too. Protect your applications from cyber threats with advanced security validation.",
  keywords: [
    "security testing",
    "security testing services",
    "penetration testing",
    "vulnerability assessment",
    "SAST testing",
    "DAST testing",
    "security code review",
    "application security testing",
    "web security testing",
    "mobile security testing",
    "API security testing",
    "network security testing",
    "compliance testing",
    "OWASP testing",
    "ethical hacking",
    "security audit",
    "cybersecurity testing",
    "security scanning",
    "threat modeling",
    "security risk assessment"
  ],
  openGraph: {
    title: "Security Testing Services - Comprehensive Cybersecurity Testing | Testriq",
    description: "Professional security testing services including penetration testing, vulnerability assessment, SAST, DAST, security code review, and compliance testing. Protect your applications from cyber threats with advanced security validation.",
    url: "https://testriq.com/security-testing",
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
  metadataBase: new URL('https://testrq-3-0.vercel.app/'),
  alternates: {
    canonical: "https://testriq.com/security-testing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const SecurityTestingHeroSection = dynamic(
  () => import("@/components/sections/SecurityTestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);


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

const SecurityTestingProvenTestingProcess = dynamic(
  () => import("@/components/sections/SecurityTestingProvenTestingProcess"),
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
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/security-testing" },
    { name: "Security Testing", url: "https://testriq.com/security-testing" }
  ];



  return (
    <div>
      <StructuredData data={securityTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <SecurityTestingHeroSection />
        <SecurityTestingComprehensiveSlider />
        <SecurityTestingProvenTestingProcess />
        <SecurityTestingROISection/>
        <SecurityTestingWhyChooseTestriq />
        <SecurityTestingToolsFramework />
        <SecurityTestingCaseStudies />
        <SecurityTestingFAQs />
        <SecurityTestingReadyToEnsureQuality />
      </MainLayout>
    </div>
  );
}

