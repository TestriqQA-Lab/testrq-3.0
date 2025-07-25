import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  aiTestingServiceSchema,
  createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "AI Application Testing Services - Accurate, Fair, and Reliable | Testriq",
    template: "%s | Testriq"
  },
  description: "Comprehensive AI application testing services including model validation, bias detection, explainability, performance, and AI security testing. Ensure your intelligent systems are accurate, fair, and reliable.",
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
    "ethical AI testing"
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
    canonical: '',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/ai-application-testing',
    siteName: 'Testriq - AI Testing Services',
    title: 'AI Application Testing Services - Accurate, Fair, and Reliable | Testriq',
    description: 'Ensure your AI models are accurate, unbiased, explainable, and secure with our expert AI testing services. Trusted by 150+ companies.',
    images: [
      {
        url: '/OG/Ai-Application-Testing-OG.webp',
        width: 1200,
        height: 630,
        alt: 'AI Application Testing Services - Testriq',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'AI Application Testing Services - Accurate, Fair, and Reliable | Testriq',
    description: 'Ensure your AI models are accurate, unbiased, explainable, and secure with our expert AI testing services. Trusted by 150+ companies.',
    images: ['C:/OG/Ai-Application-Testing-Twitter.webp'],
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

const AIROISection = dynamic(
  () => import("@/components/sections/AIROISection"),
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
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/ai-application-testing" },
    { name: "AI Application Testing", url: "https://testriq.com/ai-application-testing" }
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
        <AIROISection />
        <AICaseStudies />
        <AIFAQs />
        <AIAnyQuestions />
      </MainLayout>
    </div>
  );
}
