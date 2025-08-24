import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  createBreadcrumbSchema,
  matrimonialAppCertificationSchema,
  organizationSchema,
  websiteSchema,
} from "@/components/seo/StructuredData";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:  "Matrimonial App Certification  ",
   
  description: "Get your matrimonial app certified for privacy, security, and performance. Testriq’s certification ensures GDPR, ISO 27001, and CCPA compliance while boosting user trust and reducing security risks.",
  keywords: [
    "Matrimonial App Certification",
    "matrimonial platform security",
    "privacy compliance",
    "GDPR for matrimonial apps",
    "ISO 27001 certification",
    "secure matrimonial apps",
    "CCPA compliance",
    "app certification for matchmaking",
    "user trust for dating apps",
    "QA for matrimonial apps"
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://testriq.com/'),
  alternates: {
    canonical: 'https://testriq.com/matrimonial-apps-certification',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/matrimonial-apps-certification',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Matrimonial App Certification | Security, Privacy & Quality Compliance - Testriq',
    description: 'Get your matrimonial app certified for privacy, security, and performance. Testriq’s certification ensures GDPR, ISO 27001, and CCPA compliance while boosting user trust and reducing security risks.',
    images: [
      {
        url: '/OG/Matrimonial-App-Certification-OG.webp',
        width: 1200,
        height: 630,
        alt: 'Matrimonial App Certification - Testriq QA Lab',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Matrimonial App Certification | Security, Privacy & Quality Compliance - Testriq',
    description: 'Get your matrimonial app certified for privacy, security, and performance. Testriq’s certification ensures GDPR, ISO 27001, and CCPA compliance while boosting user trust and reducing security risks.',
    images: ['/OG/Matrimonial-App-Certification-Twitter.webp'],
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
    const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/matrimonial-apps-certification" },
    { name: "Matrimonial App Certification", url: "https://testriq.com/matrimonial-apps-certification" }
  ];
  return (
    <div>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={matrimonialAppCertificationSchema} />
       <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
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

