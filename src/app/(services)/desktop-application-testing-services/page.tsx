import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import StructuredData, {
  desktopAppTestingSchema,
  createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Desktop App Testing & QA Services | Testriq",

  description:
    "Secure your enterprise with Testriq's desktop application testing services. We specialize in Windows, macOS, and Linux compatibility, .EXE/.MSI installer testing, and performance optimization for high-availability enterprise software.",
  keywords: [
    "Desktop Application Testing",
    "Desktop App QA Services",
    "Windows App Testing",
    "macOS Application Testing",
    "Linux Desktop Testing",
    "Cross-Platform Desktop Testing",
    "WPF and WinForms Testing",
    "Desktop Performance Testing",
    "EXE and MSI Installer Testing",
    "Offline Functionality Testing",
    "Desktop Security Testing",
    "Enterprise Software QA",
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
    canonical: "https://www.testriq.com/desktop-application-testing-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/desktop-application-testing-services",
    siteName: "Testriq - Desktop Application Testing",
    title: "Desktop App Testing & QA Services | Testriq",
    description:
      "Secure your enterprise with Testriq's desktop application testing services. We specialize in Windows, macOS, and Linux compatibility, .EXE/.MSI installer testing, and performance optimization for high-availability enterprise software.",
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
    title: "Desktop App Testing & QA Services | Testriq",
    description:
      "Secure your enterprise with Testriq's desktop application testing services. We specialize in Windows, macOS, and Linux compatibility, .EXE/.MSI installer testing, and performance optimization for high-availability enterprise software.",
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

const DesktopChallenges = dynamic(
  () => import("@/components/sections/DesktopChallenges"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DesktopCompliance = dynamic(
  () => import("@/components/sections/DesktopCompliance"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DesktopTechStack = dynamic(
  () => import("@/components/sections/DesktopTechStack"),
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

const DesktopFAQs = dynamic(() => import("@/components/sections/DesktopFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

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
    { name: "Home", url: "https://www.testriq.com/" },
    {
      name: "Services",
      url: "https://www.testriq.com/desktop-application-testing-services",
    },
    {
      name: "Desktop Application Service",
      url: "https://www.testriq.com/desktop-application-testing-services",
    },
  ];

  return (
    <div>
      <StructuredData data={desktopAppTestingSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <DesktopTestingHeroSection />
        <DesktopChallenges />
        <DesktopCompliance />
        <DesktopTechStack />
        <DesktopCardSlider />
        <DesktopWhyChooseTestriq />
        <DesktopFAQs />
      </MainLayout>
    </div>
  );
}
