import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  createBreadcrumbSchema,
  organizationSchema,
  shoppingAppCertificationSchema,
  websiteSchema,
} from "@/components/seo/StructuredData";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:  "Shopping App Certification",
   
  description: "Get your shopping and e-commerce apps certified for security, performance, and global compliance. Testriq’s PCI DSS, GDPR, and CCPA-aligned testing ensures trust, data safety, and conversion optimization.",
  keywords: [
    "shopping app certification",
    "e-commerce app testing",
    "secure payment gateway testing",
    "PCI DSS compliance",
    "GDPR e-commerce compliance",
    "data protection testing",
    "checkout optimization",
    "mobile app compliance testing",
    "fraud detection",
    "certified shopping apps",
    "e-commerce platform security"
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
    canonical: 'https://testrq-3-0.vercel.app/shopping-apps-certification',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testrq-3-0.vercel.app/shopping-apps-certification',
    siteName: 'Testriq - Shopping App Certification Services',
    title: 'Shopping App Certification | Secure E-Commerce Testing & PCI Compliance | Testriq',
    description: 'Get your shopping and e-commerce apps certified for security, performance, and global compliance. Testriq’s PCI DSS, GDPR, and CCPA-aligned testing ensures trust, data safety, and conversion optimization.',
    images: [
      {
        url: '/OG/shopping-app-certification-og-img.webp',
        width: 1200,
        height: 630,
        alt: 'Shopping App Certification - Secure Testing & Compliance',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Shopping App Certification | Secure E-Commerce Testing & PCI Compliance | Testriq',
    description: 'Get your shopping and e-commerce apps certified for security, performance, and global compliance. Testriq’s PCI DSS, GDPR, and CCPA-aligned testing ensures trust, data safety, and conversion optimization.',
    images: ['/OG/shopping-app-certification-twitter-img.webp'],
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
 const breadcrumbItems= [
   { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testrq-3-0.vercel.app/shopping-apps-certification" },
    { name: "Shopping App Certification ", url: "https://testrq-3-0.vercel.app/shopping-apps-certification" }
   ];
  return (
    <div>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={shoppingAppCertificationSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
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

