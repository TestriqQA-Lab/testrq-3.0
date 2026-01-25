import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import StructuredData, {
  createBreadcrumbSchema,
  mobileAppTestingSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Ship Faster with Expert Mobile Test Automation | Testriq",
  description:
    "Expert-led global mobile app testing services for iOS and Android. Specialized in 5G optimization, security penetration testing, and ISO 29119 compliance for the 2026 mobile landscape.",
  keywords: [
    "Global Mobile Application Testing Services",
    "Mobile App QA 2026",
    "iOS 19 Testing",
    "Android 15 Testing",
    "5G Mobile Performance Testing",
    "Mobile App Security Penetration Testing",
    "ISO 29119-3 Compliance",
    "Automated Mobile Testing Appium",
    "Fintech Mobile QA Checklist",
    "OWASP Mobile Top 10",
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
    canonical: "https://www.testriq.com/mobile-application-testing",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/mobile-application-testing",
    siteName: "Testriq - Global Mobile App Testing",
    title: "Ship Faster with Expert Mobile Test Automation | Testriq",
    description:
      "Safeguard your digital presence with comprehensive mobile app quality assurance. Expert JS/Android testing for 24,000+ device combinations.",
    images: [
      {
        url: "/OG/Mobile_Application-Services-og.webp",
        width: 1200,
        height: 630,
        alt: "Global Mobile App Testing Services - Testriq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "Ship Faster with Expert Mobile Test Automation | Testriq",
    description:
      "Expert-led mobile app testing for the 2026 landscape. Specialized in 5G, Security, and ISO 29119 compliance.",
    images: ["/OG/Mobile_Application-Services-Twitter.webp"],
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

// const MobileCaseStudies = dynamic(
//   () => import("@/components/sections/MobileCaseStudies"),
//   {
//     ssr: true,
//     loading: () => (
//       <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
//         <p className="text-gray-500">Loading...</p>
//       </div>
//     ),
//   }
// );

const MobileFAQs = dynamic(() => import("@/components/sections/MobileFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

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
    { name: "Home", url: "https://www.testriq.com/" },
    {
      name: "Services",
      url: "https://www.testriq.com/mobile-application-testing-services",
    },
    {
      name: "Web Application Testing",
      url: "https://www.testriq.com/mobile-application-testing-services",
    },
  ];
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
        {/* <MobileCaseStudies /> */}
        <MobileFAQs />
      </MainLayout>
    </div>
  );
}
