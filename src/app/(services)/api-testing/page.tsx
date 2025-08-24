import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import StructuredData, { apiTestingSchema, createBreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title:  "API Integration Testing Services Company ",
   
  description: "We are one of the best API Integration Testing Services Company in Mumbai. With expertise in testing Web applications and mobile apps. Contact Us Now!",
  keywords: [
    "API testing services",
    "REST API testing",
    "GraphQL testing",
    "SOAP testing",
    "API automation testing",
    "API performance testing",
    "API security testing",
    "integration testing",
    "microservices testing",
    "Testriq API QA"
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
    canonical: 'https://testriq.com/api-testing',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/api-testing',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'API Testing Services - Secure & Reliable Integrations | Testriq',
    description: 'Ensure your APIs deliver reliable, secure, and high-performance integrations with our comprehensive API testing services. From REST to GraphQL, SOAP to microservices – we test it all with precision.',
    images: [
      {
        url: '/OG/API-Testing-Service-Og.webp',
        width: 1200,
        height: 630,
        alt: 'API Testing Services by Testriq QA Lab',
        type: 'image/webp',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'API Testing Services - Secure & Reliable Integrations | Testriq',
    description: 'Ensure your APIs deliver reliable, secure, and high-performance integrations with our comprehensive API testing services. From REST to GraphQL, SOAP to microservices – we test it all with precision.',
    images: ['/OG/Automation-testing-Services-Twitter.webp'],
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


const ApiTestingHeroSection = dynamic(
  () => import("@/components/sections/ApiTestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ApiProvenTestingProcess = dynamic(
  () => import("@/components/sections/ApiProvenTestingProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ApiWhyChooseTestriq = dynamic(
  () => import("@/components/sections/ApiWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ApiCaseStudies = dynamic(
  () => import("@/components/sections/ApiCaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ApiFAQs = dynamic(() => import("@/components/sections/ApiFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const ApiAnyQuestions = dynamic(
  () => import("@/components/sections/ApiAnyQuestions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ApiComprehensiveSlider = dynamic(
  () => import("@/components/sections/ApiComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ApiCardSlider = dynamic(
  () => import("@/components/sections/ApiCardSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ApiToolsFramework = dynamic(
  () => import("@/components/sections/ApiToolsFramework"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function ApiTesting() {
    const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/api-testing" },
    { name: "API Testing", url: "https://testriq.com/api-testing" }
  ];
  return (
    <div>
      <StructuredData data={apiTestingSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <ApiTestingHeroSection />
        <ApiComprehensiveSlider />
        <ApiCardSlider />
        <ApiProvenTestingProcess />
        <ApiWhyChooseTestriq />
        <ApiToolsFramework />
        <ApiCaseStudies />
        <ApiFAQs />
        <ApiAnyQuestions />
      </MainLayout>
    </div>
  );
}
