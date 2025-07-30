import React from "react";
import LaunchFastQAHeroSection from "@/components/sections/LaunchFastQAHeroSection";
import LaunchFastComprehensiveSlider from "@/components/sections/LaunchFastComprehensiveSlider";
import LaunchFastProvenTestingProcess from "@/components/sections/LaunchFastProvenTestingProcess";
import LaunchFastWhyChooseTestriq from "@/components/sections/LaunchFastWhyChooseTestriq";
import LaunchFastToolsFramework from "@/components/sections/LaunchFastToolsFramework";
import LaunchFastROISection from "@/components/sections/LaunchFastROISection";
import LaunchFastCaseStudies from "@/components/sections/LaunchFastCaseStudies";
import LaunchFastFAQs from "@/components/sections/LaunchFastFAQs";
import type { Metadata } from "next";
import StructuredData, {
  launchFastQASchema,
  createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title:"Launch-Fast QA Services for Companies ",

  description: "Empower your startup with LaunchFast QA, your key to delivering flawless applications from day one. Gain a competitive edge with robust quality assurance.",
  keywords: [
    "LaunchFast QA",
    "rapid QA services",
    "startup testing",
    "agile QA",
    "MVP testing",
    "fast product testing",
    "launch readiness",
    "QA for startups",
    "accelerated software testing",
    "go-to-market QA"
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
    canonical: 'https://testriq.com/launchfast-qa',
  },


  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/launchfast-qa',
    siteName: 'Testriq - LaunchFast QA Services',
    title: 'LaunchFast QA Services - Rapid Product Testing for Startups | Testriq',
    description: 'Fast-track your product launch with LaunchFast QA. Rapid testing cycles, agile integration, and 24/7 support designed for startups and high-velocity dev teams.',
    images: [
      {
        url: '/OG/Launch-Fast-QA-Service-og.webp',
        width: 1200,
        height: 630,
        alt: 'LaunchFast QA Services - Testriq',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'LaunchFast QA Services - Rapid Product Testing for Startups | Testriq',
    description: 'Fast-track your product launch with LaunchFast QA. Rapid testing cycles, agile integration, and 24/7 support designed for startups and high-velocity dev teams.',
    images: ['/OG/Launch_Fast_QA-Twitter.webp'],
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


export default function LaunchFastQAPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/launchfast-qa" },
    { name: "LanuchFast QA", url: "https://testriq.com/launchfast-qa" }
  ];
  return (
    <div className="min-h-screen bg-white">
            <StructuredData data={launchFastQASchema} />
            <StructuredData data={ createBreadcrumbSchema(breadcrumbItems)} />
      <LaunchFastQAHeroSection />
      <LaunchFastComprehensiveSlider />
      <LaunchFastProvenTestingProcess />
      <LaunchFastWhyChooseTestriq />
      <LaunchFastToolsFramework />
      <LaunchFastROISection />
      <LaunchFastCaseStudies />
      <LaunchFastFAQs />
    </div>
  );
}
