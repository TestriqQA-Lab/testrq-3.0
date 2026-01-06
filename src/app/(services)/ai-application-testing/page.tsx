import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  aiTestingServiceSchema,
  createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Global AI Testing Services | Reliable Systems for the Future",
  description:
    "At Testriq, our AI Application Testing Services help you make sure your models are safe, fair, and compliant. We connect ML Ops with Quality Assurance for high-stakes AI.",
  keywords: [
    "AI application testing",
    "AI testing services",
    "machine learning model testing",
    "AI bias detection",
    "AI security testing",
    "AI model validation",
    "AI performance testing",
    "generative AI testing",
    "AI explainability",
    "ethical AI testing",
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
    canonical: "https://www.testriq.com/ai-application-testing",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/ai-application-testing",
    siteName: "Testriq - AI Testing Services",
    title: "AI Application Testing Services - Accurate, Fair, and Reliable ",
    description:
      "Ensure your AI models are accurate, unbiased, explainable, and secure with our expert AI testing services. Trusted by 150+ companies.",
    images: [
      {
        url: "/OG/AI-Aplication-Tesing-Service-og.webp",
        width: 1200,
        height: 630,
        alt: "AI Application Testing Services - Testriq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "AI Application Testing Services - Accurate, Fair, and Reliable",
    description:
      "Ensure your AI models are accurate, unbiased, explainable, and secure with our expert AI testing services. Trusted by 150+ companies.",
    images: ["/OG/AI-Application-Testing-service-Twitter.webp"],
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

const AITestingHeroSection = dynamic(
  () => import("@/components/sections/AITestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AIProvenTestingProcess = dynamic(
  () => import("@/components/sections/AIProvenTestingProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AIWhyChooseTestriq = dynamic(
  () => import("@/components/sections/AIWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AICaseStudies = dynamic(
  () => import("@/components/sections/AICaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AIFAQs = dynamic(() => import("@/components/sections/AIFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const AIAnyQuestions = dynamic(
  () => import("@/components/sections/AIAnyQuestions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AIComprehensiveSlider = dynamic(
  () => import("@/components/sections/AIComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AICardSlider = dynamic(
  () => import("@/components/sections/AICardSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AIToolsFramework = dynamic(
  () => import("@/components/sections/AIToolsFramework"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function AIApplicationTesting() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "Services", url: "https://www.testriq.com/ai-application-testing" },
    {
      name: "AI Application Testing",
      url: "https://www.testriq.com/ai-application-testing",
    },
  ];
  return (
    <div>
      <StructuredData data={aiTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <AITestingHeroSection />
        <AIComprehensiveSlider />
        <AICardSlider />
        <AIProvenTestingProcess />
        <AIWhyChooseTestriq />
        <AIToolsFramework />
        <AICaseStudies />
        <AIFAQs />
        <AIAnyQuestions />
      </MainLayout>
    </div>
  );
}
