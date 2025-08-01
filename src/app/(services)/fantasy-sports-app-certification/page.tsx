import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  fantasyAppCertificationSchema,
  organizationSchema,
  websiteSchema,
} from "@/components/seo/StructuredData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:  "Fantasy Sports App Certification",
  description: "Get your fantasy sports app certified for fair play, GDPR/CCPA compliance, ISO 27001, and real-time performance. Trusted by 200+ platforms to prevent fraud, increase user retention, and meet global standards.",
  keywords: [
    "Fantasy Sports App Certification",
    "fantasy app security",
    "fantasy app compliance testing",
    "fair play verification fantasy app",
    "GDPR CCPA fantasy platform",
    "ISO 27001 fantasy certification",
    "fantasy app testing services",
    "secure fantasy sports apps",
    "regulatory compliance for fantasy apps",
    "fantasy sports QA services"
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
    canonical: 'https://testrq-3-0.vercel.app/fantasy-sports-app-certification',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testrq-3-0.vercel.app/fantasy-sports-app-certification',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Fantasy Sports App Certification | Secure & Compliant Fantasy Platforms - Testriq',
    description: 'Get your fantasy sports app certified for fair play, GDPR/CCPA compliance, ISO 27001, and real-time performance. Trusted by 200+ platforms to prevent fraud, increase user retention, and meet global standards.',
    images: [
      {
        url: '/OG/Fantacy-Sport-certification-Og.webp',
        width: 1200,
        height: 630,
        alt: 'Fantasy App Certification - Testriq QA Lab',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Fantasy Sports App Certification | Secure & Compliant Fantasy Platforms - Testriq',
    description: 'Fantasy app certification for fair play, fraud prevention, security, GDPR/CCPA compliance, and ISO 27001. Trusted by 200+ fantasy apps globally.',
    images: ['/OG/Fantacy-Sport-certification-Twitter.webp'],
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
   const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testrq-3-0.vercel.app/fantasy-sports-app-certification" },
    { name: "Fantasy Sports App Certification", url: "https://testrq-3-0.vercel.app/fantasy-sports-app-certification" }
  ];
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

