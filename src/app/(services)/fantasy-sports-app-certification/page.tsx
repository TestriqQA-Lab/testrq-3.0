import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  organizationSchema,
  websiteSchema,
} from "@/components/seo/StructuredData";

const FantasyAppHeroSection = dynamic(
  () => import("@/components/sections/FantasyAppHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const FantasyAppCertificationPillars = dynamic(
  () => import("@/components/sections/FantasyAppCertificationPillars"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const FantasyAppCertificationProcess = dynamic(
  () => import("@/components/sections/FantasyAppCertificationProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const FantasyAppSecurityFeatures = dynamic(
  () => import("@/components/sections/FantasyAppSecurityFeatures"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const FantasyAppBenefits = dynamic(
  () => import("@/components/sections/FantasyAppBenefits"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const FantasyAppCompliance = dynamic(
  () => import("@/components/sections/FantasyAppCompliance"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const FantasyAppTestingServices = dynamic(
  () => import("@/components/sections/FantasyAppTestingServices"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const FantasyAppFAQs = dynamic(
  () => import("@/components/sections/FantasyAppFAQs"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const FantasyAppCTA = dynamic(
  () => import("@/components/sections/FantasyAppCTA"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

// Structured data for fantasy sports app certification service
const fantasyAppCertificationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fantasy Sports Apps Certification",
  description:
    "Comprehensive certification program for fantasy sports apps covering security, fair play, regulatory compliance, performance optimization, and user experience standards.",
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
    name: "Fantasy Sports App Certification Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Security & Privacy Certification",
        description: "End-to-end encryption, multi-factor authentication, PCI DSS and GDPR compliance",
        category: "Security and Privacy",
      },
      {
        "@type": "Offer",
        name: "Fair Play & Compliance Certification",
        description: "Regulatory compliance, anti-fraud detection, algorithm transparency, age verification",
        category: "Compliance and Fair Play",
      },
      {
        "@type": "Offer",
        name: "Performance & Reliability Certification",
        description: "Real-time data sync, 99.9% uptime SLA, load balancing, auto-scaling",
        category: "Performance and Reliability",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "156",
    bestRating: "5",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is fantasy sports app certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fantasy sports app certification is a comprehensive audit and certification program that ensures your fantasy sports platform meets international standards for security, fair play, regulatory compliance, and user experience.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the fantasy sports app certification process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The certification process typically takes 14-20 working days, including initial assessment, testing phases, compliance verification, and final certificate issuance.",
      },
    },
    {
      "@type": "Question",
      name: "What regulations do fantasy sports apps need to comply with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fantasy sports apps must comply with UIGEA regulations, state-specific gaming laws, GDPR for privacy, PCI DSS for payments, and various licensing requirements depending on the jurisdiction.",
      },
    },
  ],
};

export default function FantasySportsAppCertification() {
  return (
    <div>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={fantasyAppCertificationSchema} />
      <StructuredData data={faqSchema} />
      <MainLayout>
        <FantasyAppHeroSection />
        <FantasyAppCertificationPillars />
        <FantasyAppCertificationProcess />
        <FantasyAppSecurityFeatures />
        <FantasyAppBenefits />
        <FantasyAppCompliance />
        <FantasyAppTestingServices />
        <FantasyAppFAQs />
        <FantasyAppCTA />
      </MainLayout>
    </div>
  );
}

