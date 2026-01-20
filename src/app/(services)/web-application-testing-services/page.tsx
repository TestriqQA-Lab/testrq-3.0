import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  webAppTestingServiceSchema,
  createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Web Application Testing Services | QA Company | Testriq",
  description:
    "Secure your digital future with Testriq's global web application testing services. We specialize in Next.js, cross-browser compatibility, ISO 29119 compliance, and automated testing for scalable, secure web apps.",
  keywords: [
    "Web Application Testing",
    "Web QA Services",
    "Cross-Browser Testing",
    "Web App Security Testing",
    "Next.js Testing",
    "ISO 29119 Web Testing",
    "SaaS Testing",
    "E-commerce Testing",
    "Playwright Automation",
    "Cypress Automation",
    "OWASP Top 10 Testing",
    "Performance Testing Services",
  ],
  openGraph: {
    title: "Web Application Testing Services | QA Company | Testriq",
    description:
      "Secure your digital future with Testriq's global web application testing services. We specialize in Next.js, cross-browser compatibility, ISO 29119 compliance, and automated testing for scalable, secure web apps.",
    url: "https://www.testriq.com/web-application-testing-services",
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
    title: "Web Application Testing Services | QA Company | Testriq",
    description:
      "Secure your digital future with Testriq's global web application testing services. We specialize in Next.js, cross-browser compatibility, ISO 29119 compliance, and automated testing for scalable, secure web apps.",
    images: ["/OG/Web-Application_Testing_Twitter.webp"],
  },
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/web-application-testing-services",
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

const WebappChallenges = dynamic(
  () => import("@/components/sections/WebappChallenges"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const WebappCompliance = dynamic(
  () => import("@/components/sections/WebappCompliance"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const WebappTechStack = dynamic(
  () => import("@/components/sections/WebappTechStack"),
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
    { name: "Home", url: "https://www.testriq.com/" },
    {
      name: "Services",
      url: "https://www.testriq.com/web-application-testing-services",
    },
    {
      name: "Web Application Testing",
      url: "https://www.testriq.com/web-application-testing-services",
    },
  ];

  return (
    <div>
      <StructuredData data={webAppTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <WebappTestingHeroSection />
        <WebappChallenges />
        <WebappCompliance />
        <WebappTechStack />
        <CardSlider />
        <WebappWhyChooseTestriq />
        <WebappFAQs />
        <WebappAnyQuestions />
      </MainLayout>
    </div>
  );
}
