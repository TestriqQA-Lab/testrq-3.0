import React from "react";
import ElearningHeroSection from "@/components/sections/ElearningHeroSection";
import ElearningChallengesSection from "@/components/sections/ElearningChallengesSection";
import ElearningTestingServicesSection from "@/components/sections/ElearningTestingServicesSection";
import ElearningPlatformsSection from "@/components/sections/ElearningPlatformsSection";
import ElearningAccessibilitySection from "@/components/sections/ElearningAccessibilitySection";
import ElearningPerformanceSection from "@/components/sections/ElearningPerformanceSection";
import ElearningFAQSection from "@/components/sections/ElearningFAQSection";
import ElearningContactSection from "@/components/sections/ElearningContactSection";
import { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema, elearningTestingServiceSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "E-Learning Testing Services",
  description:
    "Deliver a flawless online learning experience. Testriq’s e-learning testing services ensure your LMS is functional, secure, accessible, and high-performing.",
  keywords: [
    "e-learning testing",
    "LMS testing services",
    "educational platform QA",
    "online course testing",
    "virtual classroom testing",
    "mobile learning QA",
    "SCORM testing",
    "WCAG 2.1 accessibility testing",
    "xAPI testing",
    "GDPR compliance in education",
    "FERPA security testing",
    "video content QA",
    "multi-device learning testing",
    "education application testing",
    "e-learning QA company"
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.testriq.com/'),
  alternates: {
    canonical: "https://www.testriq.com/e-learning-testing-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/e-learning-testing-services",
    siteName: "Testriq - Professional Software Testing Services",
    title: "E-Learning Testing Services | LMS & Educational Platform QA | Testriq",
    description:
      "Deliver inclusive, scalable, and high-performing learning platforms with Testriq's e-learning testing services. We ensure compliance, security, mobile usability, and engaging learning experiences across devices.",
    images: [
      {
        url: "/OG/E-Learing-Testing-Service-Og.webp",
        width: 1200,
        height: 630,
        alt: "E-Learning Testing Services - Testriq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "E-Learning Testing Services | LMS & Educational Platform QA | Testriq",
    description:
      "Comprehensive e-learning QA including LMS testing, WCAG accessibility, SCORM/xAPI validation, performance optimization, and secure educational platforms.",
    images: ["/OG/E-Learing-Testing-Service-Twitter.webp"],
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
  google: 'LXeSv6xxgAa1jB9JlWwO9ysJ1FNvWzgN3i3GyQs2AD0',
    yandex: 'ff703971283d110e',
    yahoo: '0A67349B8CD11BF71173B38572028507',
  },
};

const ElearningTestingPage: React.FC = () => {
   const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "Services", url: "https://www.testriq.com/e-learning-testing-servicess" },
    { name: "E-Learning Testing", url: "https://www.testriq.com/e-learning-testing-services" }
  ];
  return (
    <div>
      <StructuredData data={ elearningTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
    <main className="min-h-screen bg-white">
      <ElearningHeroSection />
      <ElearningChallengesSection />
      <ElearningTestingServicesSection />
      <ElearningPlatformsSection />
      <ElearningAccessibilitySection />
      <ElearningPerformanceSection />
      {/* <ElearningCaseStudiesSection /> */}
      <ElearningFAQSection />
      <ElearningContactSection />
    </main>
    </div>
  );
};

export default ElearningTestingPage;

