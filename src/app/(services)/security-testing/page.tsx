import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Security Testing Services - Comprehensive Cybersecurity Testing | Testriq",
  description: "Professional security testing services including penetration testing, vulnerability assessment, SAST, DAST, security code review, and compliance testing. Protect your applications from cyber threats with advanced security validation.",
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
    url: "https://testrq-3-0.vercel.app/security-testing",
    type: "website",
    images: [
      {
        url: "/security-testing-og.jpg",
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
    images: ["/security-testing-twitter.jpg"],
  },
  alternates: {
    canonical: "/security-testing",
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

const SecurityTestingComprehensiveSection = dynamic(
  () => import("@/components/sections/SecurityTestingComprehensiveSection"),
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

const SecurityTestingAnyQuestions = dynamic(
  () => import("@/components/sections/SecurityTestingAnyQuestions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function SecurityTestingPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://testrq-3-0.vercel.app" },
    { name: "Services", url: "https://testrq-3-0.vercel.app/services" },
    { name: "Security Testing", url: "https://testrq-3-0.vercel.app/security-testing" }
  ];

  const securityTestingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Security Testing Services",
    "description": "Professional security testing services including penetration testing, vulnerability assessment, SAST, DAST, security code review, and compliance testing.",
    "provider": {
      "@type": "Organization",
      "name": "Testriq",
      "url": "https://testrq-3-0.vercel.app"
    },
    "serviceType": "Software Testing",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Security Testing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Penetration Testing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vulnerability Assessment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Security Code Review"
          }
        }
      ]
    }
  };

  return (
    <div>
      <StructuredData data={securityTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <SecurityTestingHeroSection />
        <SecurityTestingComprehensiveSection />
        <SecurityTestingComprehensiveSlider />
        <SecurityTestingProvenTestingProcess />
        <SecurityTestingWhyChooseTestriq />
        <SecurityTestingToolsFramework />
        <SecurityTestingCaseStudies />
        <SecurityTestingFAQs />
        <SecurityTestingReadyToEnsureQuality />
      </MainLayout>
    </div>
  );
}

