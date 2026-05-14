
import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
  aiTestingServiceSchema,
  createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { HeroLoader, ContentLoader, FAQLoader } from "@/components/ui/Loaders";

export const revalidate = 3600;

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
        url: "https://www.testriq.com/OG/AI-Aplication-Tesing-Service-og.webp",
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
    images: ["https://www.testriq.com/OG/AI-Application-Testing-service-Twitter.webp"],
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
};

const AITestingHeroSection = dynamic(
  () => import("@/components/sections/AITestingHeroSection"),
  { ssr: true, loading: () => <HeroLoader /> }
);

const AIProvenTestingProcess = dynamic(
  () => import("@/components/sections/AIProvenTestingProcess"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const AIWhyChooseTestriq = dynamic(
  () => import("@/components/sections/AIWhyChooseTestriq"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const AICaseStudies = dynamic(
  () => import("@/components/sections/AICaseStudies"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const AIFAQs = dynamic(() => import("@/components/sections/AIFAQs"), {
  ssr: true,
  loading: () => <FAQLoader />,
});

const AIAnyQuestions = dynamic(
  () => import("@/components/sections/AIAnyQuestions"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const AIComprehensiveSlider = dynamic(
  () => import("@/components/sections/AIComprehensiveSlider"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const AICardSlider = dynamic(
  () => import("@/components/sections/AICardSlider"),
  { ssr: true, loading: () => <ContentLoader /> }
);

const AIToolsFramework = dynamic(
  () => import("@/components/sections/AIToolsFramework"),
  { ssr: true, loading: () => <ContentLoader /> }
);

export default function AIApplicationTesting() {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL)
  // to 2 canonical items; URL now structurally derived from pathname.
  return (
    <div>
      <StructuredData data={aiTestingServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/ai-application-testing",
          "AI Application Testing"
        )}
      />
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
