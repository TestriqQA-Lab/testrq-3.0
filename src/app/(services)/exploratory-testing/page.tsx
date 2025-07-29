import React from "react";
import ExploratoryTestingHeroSection from "@/components/sections/ExploratoryTestingHeroSection";
import ExploratoryComprehensiveSlider from "@/components/sections/ExploratoryComprehensiveSlider";
import ExploratoryProvenTestingProcess from "@/components/sections/ExploratoryProvenTestingProcess";
import ExploratoryWhyChooseTestriq from "@/components/sections/ExploratoryWhyChooseTestriq";
import ExploratoryToolsFramework from "@/components/sections/ExploratoryToolsFramework";
import ExploratoryROISection from "@/components/sections/ExploratoryROISection";
import ExploratoryCaseStudies from "@/components/sections/ExploratoryCaseStudies";
import ExploratoryFAQs from "@/components/sections/ExploratoryFAQs";
import ExploratoryAnyQuestions from "@/components/sections/ExploratoryAnyQuestions";
import { Metadata } from "next";
import StructuredData, {
  exploratoryTestingSchema,
  createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Exploratory Testing Services | Testriq QA Lab",
  description: "Empower your company with exploratory testing, our key to delivering flawless applications from day one. Gain a competitive edge with quality assurance.",
  keywords: [
    "exploratory testing",
    "exploratory testing services",
    "session-based testing",
    "usability testing",
    "user journey testing",
    "heuristic evaluation",
    "persona-based testing",
    "manual exploratory testing",
    "edge case testing",
    "UX testing"
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://testrq-3-0.vercel.app/'),
  alternates: {
    canonical: 'https://testriq.com/exploratory-testing',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/exploratory-testing',
    siteName: 'Testriq - Exploratory Testing Services',
    title: 'Exploratory Testing Services - Discover Hidden Issues | Testriq',
    description: 'Explore your software like a real user. Our expert exploratory testing helps detect hidden issues, improve UX, and prevent post-release failures.',
    images: [
      {
        url: '/OG/Exploratory-Testing-OG.webp',
        width: 1200,
        height: 630,
        alt: 'Exploratory Testing Services - Testriq',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Exploratory Testing Services - Discover Hidden Issues | Testriq',
    description: 'Explore your software like a real user. Our expert exploratory testing helps detect hidden issues, improve UX, and prevent post-release failures.',
    images: ['/OG/Exploratory-Testing-Twitter.webpp'],
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
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};


export default function ExploratoryTestingPage() {
   const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/web-application-testing-services" },
    { name: "Web Application Testing", url: "https://testriq.com/web-application-testing-services" }
  ];
  return (
    <div className="min-h-screen bg-white">
         <StructuredData data={exploratoryTestingSchema} />
         <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <ExploratoryTestingHeroSection />
      <ExploratoryComprehensiveSlider />
      <ExploratoryProvenTestingProcess />
      <ExploratoryWhyChooseTestriq />
      <ExploratoryToolsFramework />
      <ExploratoryROISection />
      <ExploratoryCaseStudies />
      <ExploratoryFAQs />
      <ExploratoryAnyQuestions />
    </div>
  );
}
