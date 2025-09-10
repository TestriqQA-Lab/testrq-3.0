import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title:
    "Corporate QA Training Services - Professional Software Testing",
  description:
    "Transform your team with comprehensive Corporate QA Training services. Expert-led training programs covering manual testing, automation, performance testing, and quality assurance best practices.",
  keywords: [
    "corporate qa training",
    "software testing training",
    "qa team training",
    "quality assurance training",
    "testing methodology training",
    "automation testing training",
    "manual testing training",
    "performance testing training",
    "qa certification training",
    "corporate training programs",
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/corporate-qa-training",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/corporate-qa-training",
    siteName: "Testriq - Professional Software Testing Services",
    title:
      "Corporate QA Training Services - Professional Software Testing Training | Testriq",
    description:
      "Transform your team with Testriq's comprehensive Corporate QA Training services. Expert-led training programs covering manual testing, automation, performance testing, and quality assurance best practices.",
    images: [
      {
        url: "/OG/Corporate QA traing OG img.webp",
        width: 1200,
        height: 630,
        alt: "Testriq Corporate QA Training Services",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title:
      "Corporate QA Training Services - Professional Software Testing Training | Testriq",
    description:
      "Transform your team with Testriq's comprehensive Corporate QA Training services. Expert-led training programs covering manual testing, automation, performance testing, and quality assurance best practices.",
    images: ["/OG/Corporate QA traing OG twitter.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "LXeSv6xxgAa1jB9JlWwO9ysJ1FNvWzgN3i3GyQs2AD0",
    yandex: "ff703971283d110e",
    yahoo: "0A67349B8CD11BF71173B38572028507",
  },
};

const CorporateQATrainingHeroSection = dynamic(
  () => import("@/components/sections/CorporateQATrainingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CorporateQATrainingReadyToTransform = dynamic(
  () => import("@/components/sections/CorporateQATrainingReadyToTransform"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CorporateQATrainingComprehensiveSlider = dynamic(
  () => import("@/components/sections/CorporateQATrainingComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CorporateQATrainingProvenProcess = dynamic(
  () => import("@/components/sections/CorporateQATrainingProvenProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CorporateQATrainingWhyChooseTestriq = dynamic(
  () => import("@/components/sections/CorporateQATrainingWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CorporateQATrainingModules = dynamic(
  () => import("@/components/sections/CorporateQATrainingModules"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CorporateQATrainingFAQs = dynamic(
  () => import("@/components/sections/CorporateQATrainingFAQs"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const corporateQATrainingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Corporate QA Training Services",
  description:
    "Comprehensive corporate QA training programs covering manual testing, automation, performance testing, and quality assurance best practices.",
  provider: {
    "@type": "Organization",
    name: "Testriq QA Lab",
    url: "https://www.testriq.com",
  },
  serviceType: "Corporate Training",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Corporate QA Training Programs",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Manual Testing Training",
          description:
            "Comprehensive manual testing methodologies and best practices",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automation Testing Training",
          description: "Advanced automation testing frameworks and tools",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Performance Testing Training",
          description:
            "Performance testing strategies and optimization techniques",
        },
      },
    ],
  },
};

export default function CorporateQATrainingPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com" },
    { name: "Services", url: "https://www.testriq.com/corporate-qa-training" },
    {
      name: "Corporate QA Training",
      url: "https://www.testriq.com/corporate-qa-training",
    },
  ];

  return (
    <div>
      <StructuredData data={corporateQATrainingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <CorporateQATrainingHeroSection />
        <CorporateQATrainingComprehensiveSlider />
        <CorporateQATrainingProvenProcess />
        <CorporateQATrainingWhyChooseTestriq />
        <CorporateQATrainingModules />
        <CorporateQATrainingFAQs />
        <CorporateQATrainingReadyToTransform />
      </MainLayout>
    </div>
  );
}
