import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  webAppTestingServiceSchema,
  createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Web Application Testing Services - Comprehensive QA Solutions",
  description:
    "Professional web application testing services including functional testing, performance testing, security testing, and cross-browser compatibility. Ensure your web apps deliver exceptional user experiences.",
  keywords: [
    "web application testing",
    "web app testing services",
    "functional testing",
    "performance testing",
    "security testing",
    "cross-browser testing",
    "responsive testing",
    "web QA services",
    "web application quality assurance",
    "UI testing",
    "UX testing",
    "web testing automation",
  ],
  openGraph: {
    title: "Web Application Testing Services - Comprehensive QA Solutions | Testriq",
    description: "Professional web application testing services including functional testing, performance testing, security testing, and cross-browser compatibility. Ensure your web apps deliver exceptional user experiences.",
    url: "https://testriq.com/web-application-testing-services",
    type: "website",
    images: [
      {
        url: "/OG/Web-Application-Service-Og.webp",
        width: 1200,
        height: 630,
        alt: "Web Application Testing Services by Testriq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Application Testing Services Company ",
    description: "Professional web application testing services including functional testing, performance testing, security testing, and cross-browser compatibility. Ensure your web apps deliver exceptional user experiences.",
    images: ["/OG/Web-Application_Testing_Twitter.webp"],
  },
   metadataBase: new URL('https://testrq-3-0.vercel.app/'),
  alternates: {
    canonical: 'https://testriq.com/web-application-testing-servicess',
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

const WebappTestingHeroSection = dynamic(
  () => import("@/components/sections/WebappTestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const WebappProvenTestingProcess = dynamic(
  () => import("@/components/sections/WebappProvenTestingProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const WebappWhyChooseTestriq = dynamic(
  () => import("@/components/sections/WebappWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const WebappROISection = dynamic(
  () => import("@/components/sections/WebappROISection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const WebappCaseStudies = dynamic(
  () => import("@/components/sections/WebappCaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const WebappFAQs = dynamic(() => import("@/components/sections/WebappFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const WebappAnyQuestions = dynamic(
  () => import("@/components/sections/WebappAnyQuestions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const WebappComprehensiveSlider = dynamic(
  () => import("@/components/sections/WebappComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CardSlider = dynamic(
  () => import("@/components/sections/WebAppCardSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function WebAppTesting() {
  const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/web-application-testing-services" },
    { name: "Web Application Testing", url: "https://testriq.com/web-application-testing-services" }
  ];

  return (
    <div>
      <StructuredData data={webAppTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <WebappTestingHeroSection />
        <WebappComprehensiveSlider />
        <CardSlider />
        <WebappProvenTestingProcess />
        <WebappWhyChooseTestriq />
        <WebappROISection />
        <WebappCaseStudies />
        <WebappFAQs />
        <WebappAnyQuestions />
      </MainLayout>
    </div>
  );
}
