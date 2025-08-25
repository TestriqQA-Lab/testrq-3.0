import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import StructuredData, {
  desktopAppTestingSchema,
  createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Desktop Application Testing Services Company",

  description:
    "We are one of the best desktop application testing services companies in Mumbai. With expertise in testing Web applications and mobile apps. Contact Us!",
  keywords: [
    "desktop application testing",
    "Windows app testing",
    "macOS app testing",
    "Linux desktop testing",
    "performance testing",
    "cross-platform QA",
    "usability testing",
    "security testing",
    "regression testing",
    "functional desktop testing",
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://testriq.com/"),
  alternates: {
    canonical: "https://testriq.com/desktop-application-testing-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://testriq.com/desktop-application-testing-services",
    siteName: "Testriq - Desktop Application Testing Services",
    title:
      "Desktop Application Testing Services - Secure & Reliable QA | Testriq",
    description:
      "Desktop app QA experts. Ensure bug-free releases with security, performance, regression, and cross-platform compatibility testing for Windows, macOS, and Linux.",
    images: [
      {
        url: "/OG/Desktop-Application-Service-OG.webp",
        width: 1200,
        height: 630,
        alt: "Desktop Application Testing Services - Testriq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title:
      "Desktop Application Testing Services - Secure & Reliable QA | Testriq",
    description:
      "Desktop app QA experts. Ensure bug-free releases with security, performance, regression, and cross-platform compatibility testing for Windows, macOS, and Linux.",
    images: ["/OG/Desktop-Application-Service-Twitter.webp"],
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

const DesktopTestingHeroSection = dynamic(
  () => import("@/components/sections/DesktopTestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DesktopComprehensiveSection = dynamic(
  () => import("@/components/sections/DesktopComprehensive"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DesktopReadyToEnsureQuality = dynamic(
  () => import("@/components/sections/DesktopReadyToEnsureQuality"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DesktopWhyChooseTestriq = dynamic(
  () => import("@/components/sections/DesktopWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

// const DesktopCaseStudies = dynamic(
//   () => import("@/components/sections/DesktopCaseStudies"),
//   {
//     ssr: true,
//     loading: () => (
//       <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
//         <p className="text-gray-500">Loading...</p>
//       </div>
//     ),
//   }
// );

const DesktopFAQs = dynamic(() => import("@/components/sections/DesktopFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const DesktopComprehensiveSlider = dynamic(
  () => import("@/components/sections/DesktopComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DesktopCardSlider = dynamic(
  () => import("@/components/sections/DesktopCardSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function DesktopAppTesting() {
  const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    {
      name: "Services",
      url: "https://testriq.com/desktop-application-testing-services",
    },
    {
      name: "Desktop Application Service",
      url: "https://testriq.com/desktop-application-testing-services",
    },
  ];

  return (
    <div>
      <StructuredData data={desktopAppTestingSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <DesktopTestingHeroSection />
        <DesktopComprehensiveSection />
        <DesktopReadyToEnsureQuality />
        <DesktopComprehensiveSlider />
        <DesktopCardSlider />
        <DesktopWhyChooseTestriq />
        {/* <DesktopCaseStudies /> */}
        <DesktopFAQs />
      </MainLayout>
    </div>
  );
}
