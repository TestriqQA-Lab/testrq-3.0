import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  organizationSchema,
  websiteSchema,
} from "@/components/seo/StructuredData";

const MatrimonialAppHeroSection = dynamic(
  () => import("@/components/sections/MatrimonialAppHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MatrimonialAppCertificationPillars = dynamic(
  () => import("@/components/sections/MatrimonialAppCertificationPillars"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MatrimonialAppCertificationProcess = dynamic(
  () => import("@/components/sections/MatrimonialAppCertificationProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MatrimonialAppSecurityFeatures = dynamic(
  () => import("@/components/sections/MatrimonialAppSecurityFeatures"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MatrimonialAppBenefits = dynamic(
  () => import("@/components/sections/MatrimonialAppBenefits"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MatrimonialAppCompliance = dynamic(
  () => import("@/components/sections/MatrimonialAppCompliance"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MatrimonialAppTestingServices = dynamic(
  () => import("@/components/sections/MatrimonialAppTestingServices"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MatrimonialAppFAQs = dynamic(
  () => import("@/components/sections/MatrimonialAppFAQs"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MatrimonialAppCTA = dynamic(
  () => import("@/components/sections/MatrimonialAppCTA"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

// Structured data for matrimonial app certification service
const matrimonialAppCertificationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Matrimonial Apps Certification",
  description:
    "Comprehensive certification program for matrimonial apps covering security, privacy, quality assurance, user safety, and compliance with international standards.",
  provider: {
    "@type": "Organization",
    name: "TESTRIQ QA Lab",
    url: "https://testriq.com",
    logo: "https://testriq.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9004988859",
      contactType: "customer service",
    },
  },
  serviceType: "Quality Assurance and Certification",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Matrimonial App Certification Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Security Certification",
        description: "ISO 27001 compliance, data encryption, secure authentication",
        category: "Security and Privacy",
      },
      {
        "@type": "Offer",
        name: "Quality Assurance Certification",
        description: "ISTQB standards, comprehensive testing, performance optimization",
        category: "Quality Assurance",
      },
      {
        "@type": "Offer",
        name: "Privacy Compliance Certification",
        description: "GDPR compliance, data protection, privacy by design",
        category: "Privacy and Compliance",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "89",
    bestRating: "5",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is matrimonial app certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Matrimonial app certification is a comprehensive audit and certification program that ensures your matrimonial platform meets international standards for security, privacy, quality, and user safety.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the matrimonial app certification process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The certification process typically takes 12-18 working days, including initial assessment, testing phases, remediation support, and final certificate issuance.",
      },
    },
    {
      "@type": "Question",
      name: "What standards do you certify against?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We certify against ISO 27001 for security, GDPR for privacy, ISTQB standards for quality assurance, and industry-specific matrimonial app security guidelines.",
      },
    },
  ],
};

export default function MatrimonialAppsCertification() {
  return (
    <div>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={matrimonialAppCertificationSchema} />
      <StructuredData data={faqSchema} />
      <MainLayout>
        <MatrimonialAppHeroSection />
        <MatrimonialAppCertificationPillars />
        <MatrimonialAppCertificationProcess />
        <MatrimonialAppSecurityFeatures />
        <MatrimonialAppBenefits />
        <MatrimonialAppCompliance />
        <MatrimonialAppTestingServices />
        <MatrimonialAppFAQs />
        <MatrimonialAppCTA />
      </MainLayout>
    </div>
  );
}

