import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  organizationSchema,
  websiteSchema,
} from "@/components/seo/StructuredData";

const ShoppingAppHeroSection = dynamic(
  () => import("@/components/sections/ShoppingAppHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ShoppingAppCertificationPillars = dynamic(
  () => import("@/components/sections/ShoppingAppCertificationPillars"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ShoppingAppCertificationProcess = dynamic(
  () => import("@/components/sections/ShoppingAppCertificationProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ShoppingAppSecurityFeatures = dynamic(
  () => import("@/components/sections/ShoppingAppSecurityFeatures"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ShoppingAppBenefits = dynamic(
  () => import("@/components/sections/ShoppingAppBenefits"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ShoppingAppCompliance = dynamic(
  () => import("@/components/sections/ShoppingAppCompliance"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ShoppingAppTestingServices = dynamic(
  () => import("@/components/sections/ShoppingAppTestingServices"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ShoppingAppFAQs = dynamic(
  () => import("@/components/sections/ShoppingAppFAQs"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ShoppingAppCTA = dynamic(
  () => import("@/components/sections/ShoppingAppCTA"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

// Structured data for shopping apps certification service
const shoppingAppCertificationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopping Apps Certification",
  description:
    "Comprehensive certification program for e-commerce and shopping apps covering security, payment processing, performance optimization, user experience, and compliance standards.",
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
    name: "Shopping App Certification Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Security & Privacy Certification",
        description: "PCI DSS compliance, SSL/TLS encryption, data anonymization, GDPR compliance",
        category: "Security and Privacy",
      },
      {
        "@type": "Offer",
        name: "Payment Security Certification",
        description: "Payment tokenization, fraud detection, multi-gateway support, 3D Secure authentication",
        category: "Payment Security",
      },
      {
        "@type": "Offer",
        name: "Performance & Speed Certification",
        description: "Sub-3s load times, CDN optimization, auto-scaling, performance monitoring",
        category: "Performance and Speed",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "203",
    bestRating: "5",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is shopping app certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopping app certification is a comprehensive audit and certification program that ensures your e-commerce platform meets international standards for security, payment processing, performance, and user experience.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the shopping app certification process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The certification process typically takes 10-16 working days, including initial assessment, security testing, performance optimization, and final certificate issuance.",
      },
    },
    {
      "@type": "Question",
      name: "What standards do shopping apps need to comply with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopping apps must comply with PCI DSS for payment security, GDPR for privacy, ISO 27001 for information security, and various e-commerce industry standards for user experience and performance.",
      },
    },
  ],
};

export default function ShoppingAppsCertification() {
  return (
    <div>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={shoppingAppCertificationSchema} />
      <StructuredData data={faqSchema} />
      <MainLayout>
        <ShoppingAppHeroSection />
        <ShoppingAppCertificationPillars />
        <ShoppingAppCertificationProcess />
        <ShoppingAppSecurityFeatures />
        <ShoppingAppBenefits />
        <ShoppingAppCompliance />
        <ShoppingAppTestingServices />
        <ShoppingAppFAQs />
        <ShoppingAppCTA />
      </MainLayout>
    </div>
  );
}

