import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  createBreadcrumbSchema,
  manualTestingServiceSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Manual Testing Services for Software QA",
  description:
    "We are one of the best Manual QA Testing Services Companies in Mumbai. With expertise in web manual testing and manual mobile app testing. Contact Us Now!",
  keywords: [
    "manual testing services",
    "functional testing",
    "usability testing",
    "exploratory testing",
    "UAT testing",
    "accessibility testing",
    "QA testing solutions",
    "human-centered testing",
    "manual QA experts",
    "software quality assurance",
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
    canonical: "https://www.testriq.com/manual-testing",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/manual-testing",
    siteName: "Testriq - Professional Software Testing Services",
    title: "Manual Testing Services - Expert QA Testing Solutions | Testriq",
    description:
      "Explore Testriq's manual testing services for comprehensive functional, usability, compatibility, and accessibility QA. Delivered by ISTQB-certified professionals with a human-centered approach.",
    images: [
      {
        url: "/OG/Manual-Testing-Service-og.webp",
        width: 1200,
        height: 630,
        alt: "Testriq Manual Testing Services by QA Experts",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "Manual Testing Services - Expert QA Testing Solutions | Testriq",
    description:
      "Explore Testriq's manual testing services for comprehensive functional, usability, compatibility, and accessibility QA. Delivered by ISTQB-certified professionals with a human-centered approach.",
    images: ["/OG/Manual-Testing-Service-Twitter.webp"],
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

const ManualTestingHeroSection = dynamic(
  () => import("@/components/sections/ManualTestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingReadyToEnsureQuality = dynamic(
  () => import("@/components/sections/ManualTestingReadyToEnsureQuality"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingComprehensiveSlider = dynamic(
  () => import("@/components/sections/ManualTestingComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingProvenTestingProcess = dynamic(
  () => import("@/components/sections/ManualTestingProvenTestingProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingWhyChooseTestriq = dynamic(
  () => import("@/components/sections/ManualTestingWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingToolsFramework = dynamic(
  () => import("@/components/sections/ManualTestingToolsFramework"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingCaseStudies = dynamic(
  () => import("@/components/sections/ManualTestingCaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingFAQs = dynamic(
  () => import("@/components/sections/ManualTestingFAQs"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ManualTestingAnyQuestions = dynamic(
  () => import("@/components/sections/ManualTestingAnyQuestions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function ManualTestingPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com" },
    { name: "Services", url: "https://www.testriq.com/manual-testing" },
    { name: "Manual Testing", url: "https://www.testriq.com/manual-testing" },
  ];

  return (
    <div>
      <StructuredData data={manualTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <ManualTestingHeroSection />
        <ManualTestingComprehensiveSlider />
        <ManualTestingProvenTestingProcess />
        <ManualTestingWhyChooseTestriq />
        <ManualTestingToolsFramework />
        <ManualTestingCaseStudies />
        <ManualTestingFAQs />
        <ManualTestingReadyToEnsureQuality />
      </MainLayout>
    </div>
  );
}
