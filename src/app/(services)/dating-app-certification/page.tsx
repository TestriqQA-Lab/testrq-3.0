import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  organizationSchema,
  websiteSchema,
} from "@/components/seo/StructuredData";

const DatingAppHeroSection = dynamic(
  () => import("@/components/sections/DatingAppHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DatingAppCaseStudies = dynamic(
  () => import("@/components/sections/DatingAppCaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DatingAppSixPillars = dynamic(
  () => import("@/components/sections/DatingAppSixPillars"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DatingAppChooseYourPlan = dynamic(
  () => import("@/components/sections/DatingAppChooseYourPlan"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DatingAppSecurityChallenges = dynamic(
  () => import("@/components/sections/DatingAppSecurityChallenges"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DatingAppOptimizationBenefits = dynamic(
  () => import("@/components/sections/DatingAppOptimizationBenefits"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DatingAppCompliance = dynamic(
  () => import("@/components/sections/DatingAppCompliance"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DatingAppCompetitiveAdvantage = dynamic(
  () => import("@/components/sections/DatingAppCompetitiveAdvantage"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DatingAppCertificationProcess = dynamic(
  () => import("@/components/sections/DatingAppCertificationProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DatingAppFAQs = dynamic(
  () => import("@/components/sections/DatingAppFAQs"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DatingAppReadyToBuild = dynamic(
  () => import("@/components/sections/DatingAppReadyToBuild"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

// Structured data for dating app certification service
const datingAppCertificationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dating App Trust Certification",
  description:
    "Comprehensive trust certification program for dating apps covering identity verification, user safety, content moderation, privacy compliance, and platform stability.",
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
    name: "Dating App Certification Tiers",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Basic Certification",
        description:
          "Platform Functionality + Privacy + Content Moderation Checklist",
        category: "New dating apps in MVP/early-launch phase",
      },
      {
        "@type": "Offer",
        name: "Advanced Certification",
        description: "Basic + Identity Verification + Messaging Audit",
        category: "Growth-stage or regionally scaling apps",
      },
      {
        "@type": "Offer",
        name: "Enterprise Certification",
        description:
          "All of the above + AI-based Matching Audit + Threat Modeling + Pen Testing",
        category: "Established or global dating platforms",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is dating app trust certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dating app trust certification is a third-party audit and certification program that reviews your dating app for identity verification, user safety controls, content moderation, data privacy protection, matchmaking algorithm fairness, and platform stability.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the certification process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The comprehensive audit process typically takes 10-15 working days, followed by remediation support and final certificate issuance.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of dating app certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Benefits include 35% increase in user retention, 2x conversion on app store listings, reduced legal and moderation risks, enhanced user trust perception, and improved investor confidence.",
      },
    },
  ],
};

export default function DatingAppCertification() {
  return (
    <div>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={datingAppCertificationSchema} />
      <StructuredData data={faqSchema} />
      <MainLayout>
        <DatingAppHeroSection />
        <DatingAppSixPillars />
        <DatingAppChooseYourPlan />
        <DatingAppCertificationProcess />
        <DatingAppCaseStudies />
        <DatingAppCompliance />
        <DatingAppSecurityChallenges />
        <DatingAppOptimizationBenefits />
        <DatingAppCompetitiveAdvantage />
        <DatingAppFAQs />
        <DatingAppReadyToBuild />
      </MainLayout>
    </div>
  );
}
