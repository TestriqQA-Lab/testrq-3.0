import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema, regressionTestingServiceSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Best Regression Testing Services Company",
  description: "Ensure your app's reliability with Testriq's Regression Testing Services. Catch bugs early and maintain stability across every release cycle.",
  keywords: [
    "regression testing",
    "regression test suite",
    "automated regression testing",
    "manual regression testing",
    "CI/CD regression testing",
    "software stability testing",
    "test optimization",
    "quality assurance services",
    "risk-based testing",
    "software quality assurance"
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
    canonical: 'https://testriq.com/regression-testing',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/regression-testings',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Regression Testing Services - Comprehensive Quality Assurance | Testriq',
    description: 'Ensure software stability with expert regression testing services from Testriq. Identify issues early, prevent functionality breaks, and accelerate releases using automated and risk-based testing strategies.',
    images: [
      {
        url: '/OG/regression-testing-og.webp',
        width: 1200,
        height: 630,
        alt: 'Regression Testing Services - Testriq',
        type: 'image/webp',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Regression Testing Services - Comprehensive Quality Assurance | Testriq',
    description: 'Ensure software stability with expert regression testing services from Testriq. Identify issues early, prevent functionality breaks, and accelerate releases using automated and risk-based testing strategies.',
    images: ['/OG/regression-testing-twitter.webp'],
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


const RegressionTestingHeroSection = dynamic(
  () => import("@/components/sections/RegressionTestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);


const RegressionTestingReadyToEnsureQuality = dynamic(
  () => import("@/components/sections/RegressionTestingReadyToEnsureQuality"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const RegressionTestingComprehensiveSlider = dynamic(
  () => import("@/components/sections/RegressionTestingComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const RegressionTestingProvenTestingProcess = dynamic(
  () => import("@/components/sections/RegressionTestingProvenTestingProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const RegressionTestingWhyChooseTestriq = dynamic(
  () => import("@/components/sections/RegressionTestingWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const RegressionTestingToolsFramework = dynamic(
  () => import("@/components/sections/RegressionTestingToolsFramework"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const RegressionTestingROISection = dynamic(
  () => import("@/components/sections/RegressionTestingROISection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const RegressionTestingCaseStudies = dynamic(
  () => import("@/components/sections/RegressionTestingCaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const RegressionTestingFAQs = dynamic(() => import("@/components/sections/RegressionTestingFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const RegressionTestingAnyQuestions = dynamic(
  () => import("@/components/sections/RegressionTestingAnyQuestions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function RegressionTestingPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/regression-testing" },
    { name: "Regression Testing", url: "https://testriq.com/regression-testing" }
  ];

  return (
    <div>
      <StructuredData data={regressionTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <RegressionTestingHeroSection />
        <RegressionTestingComprehensiveSlider />
        <RegressionTestingROISection/>
        <RegressionTestingProvenTestingProcess />
        <RegressionTestingWhyChooseTestriq />
        <RegressionTestingToolsFramework />
        <RegressionTestingCaseStudies/>
        <RegressionTestingReadyToEnsureQuality />
        <RegressionTestingFAQs/>
        <RegressionTestingAnyQuestions/>
      </MainLayout>
    </div>
  );
}

