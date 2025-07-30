import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import StructuredData, { 
  createBreadcrumbSchema,
  mobileAppTestingSchema } from "@/components/seo/StructuredData";



export const metadata: Metadata = {
  title:  "Mobile Automation Application Testing Services Company",
  description: "A thorough guide on mobile app testing strategies, tools, platforms, and best practices. Learn how to ensure quality across Android and iOS devices.",
  keywords: [
    "mobile app testing",
    "iOS testing",
    "Android testing",
    "cross-platform app testing",
    "mobile performance testing",
    "mobile security testing",
    "mobile usability testing",
    "app store compliance",
    "automated mobile testing",
    "mobile regression testing"
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
    canonical: 'https://testriq.com/mobile-application-testing-services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/mobile-application-testing-services',
    siteName: 'Testriq - Mobile App Testing Services',
    title: 'Mobile Application Testing Services - iOS & Android QA | Testriq',
    description: 'Get expert-led mobile app testing for iOS and Android. Validate your app’s performance, usability, and security before launch. Trusted by 500+ clients worldwide.',
    images: [
      {
        url: '/OG/Mobile_Application-Services-og.webp',
        width: 1200,
        height: 630,
        alt: 'Mobile App Testing Services - Testriq',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Mobile Application Testing Services - iOS & Android QA | Testriq',
    description: 'Get expert-led mobile app testing for iOS and Android. Validate your app’s performance, usability, and security before launch. Trusted by 500+ clients worldwide.',
    images: ['/OG/Mobile_Application-Services-Twitter.webp'],
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


const MobileTestingHeroSection = dynamic(
  () => import("@/components/sections/MobileTestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileComprehensiveSection = dynamic(
  () => import("@/components/sections/MobileComprehensive"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileReadyToEnsureQuality = dynamic(
  () => import("@/components/sections/MobileReadyToEnsureQuality"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileProvenTestingProcess = dynamic(
  () => import("@/components/sections/MobileProvenTestingProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileWhyChooseTestriq = dynamic(
  () => import("@/components/sections/MobileWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileROISection = dynamic(
  () => import("@/components/sections/MobileROISection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileCaseStudies = dynamic(
  () => import("@/components/sections/MobileCaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileFAQs = dynamic(() => import("@/components/sections/MobileFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const MobileAnyQuestions = dynamic(
  () => import("@/components/sections/MobileAnyQuestions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileComprehensiveSlider = dynamic(
  () => import("@/components/sections/MobileComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileCardSlider = dynamic(
  () => import("@/components/sections/MobileCardSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function MobileAppTesting() {
    const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/mobile-application-testing-services" },
    { name: "Web Application Testing", url: "https://testriq.com/mobile-application-testing-services" }
    ]
  return (
    <div>
            <StructuredData data={mobileAppTestingSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <MobileTestingHeroSection />
        <MobileComprehensiveSection />
        <MobileReadyToEnsureQuality />
        <MobileComprehensiveSlider />
        <MobileCardSlider />
        <MobileProvenTestingProcess />
        <MobileWhyChooseTestriq />
        <MobileROISection />
        <MobileCaseStudies />
        <MobileFAQs />
        <MobileAnyQuestions />
      </MainLayout>
    </div>
  );
}

