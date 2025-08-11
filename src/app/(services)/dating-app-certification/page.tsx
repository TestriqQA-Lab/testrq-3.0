import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  createBreadcrumbSchema,
  datingAppCertificationSchema,
  organizationSchema,
  websiteSchema,
} from "@/components/seo/StructuredData";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:  "Dating App Certification",
   
  description: "Get your dating app certified for security, privacy, algorithm fairness, and compliance. Testriq’s certification improves trust, boosts downloads, and meets GDPR, CCPA, and ISO 27001 standards.",
  keywords: [
    "Dating App Certification",
    "dating app security",
    "privacy compliance",
    "GDPR for dating apps",
    "CCPA for dating platforms",
    "ISO 27001 dating app",
    "user trust badge",
    "certification for dating apps",
    "secure dating platforms",
    "algorithm fairness dating apps"
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://testrq-3-0.vercel.app/'),
  alternates: {
    canonical: 'https://testrq-3-0.vercel.app/dating-app-certification',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testrq-3-0.vercel.app/dating-app-certification',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Dating App Certification | Security, Privacy, Trust Compliance - Testriq',
    description: 'Get your dating app certified for security, privacy, algorithm fairness, and compliance. Testriq’s certification improves trust, boosts downloads, and meets GDPR, CCPA, and ISO 27001 standards.',
    images: [
      {
        url:'/OG/Dating-App-Certification-Og.webp',
        width: 1200,
        height: 630,
        alt: 'Dating App Certification - Testriq QA Lab',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Dating App Certification | Security, Privacy, Trust Compliance - Testriq',
    description: 'Get your dating app certified for security, privacy, algorithm fairness, and compliance. Testriq’s certification improves trust, boosts downloads, and meets GDPR, CCPA, and ISO 27001 standards.',
    images: ['/OG/Dating-App-Certification-Twiiter.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'LXeSv6xxgAa1jB9JlWwO9ysJ1FNvWzgN3i3GyQs2AD0',
    yandex: 'ff703971283d110e',
    yahoo: '0A67349B8CD11BF71173B38572028507',
  },
};


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
   const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testrq-3-0.vercel.app/dating-app-certification" },
    { name: "Dating App Certification", url: "https://testrq-3-0.vercel.app/dating-app-certification" }
   ];
  return (
    <div>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={datingAppCertificationSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
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
