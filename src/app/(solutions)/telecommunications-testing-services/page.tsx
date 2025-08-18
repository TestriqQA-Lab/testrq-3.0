import React from "react";
import TelecomHeroSection from "@/components/sections/TelecomHeroSection";
import TelecomChallengesSection from "@/components/sections/TelecomChallengesSection";
import TelecomTestingServicesSection from "@/components/sections/TelecomTestingServicesSection";
import TelecomToolsFrameworksSection from "@/components/sections/TelecomToolsFrameworksSection";
import TelecomNetworkTestingSection from "@/components/sections/TelecomNetworkTestingSection";
import TelecomCaseStudiesSection from "@/components/sections/TelecomCaseStudiesSection";
import TelecomROISection from "@/components/sections/TelecomROISection";
import TelecomFAQSection from "@/components/sections/TelecomFAQSection";
import TelecomContactSection from "@/components/sections/TelecomContactSection";
import { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema, telecommunicationTestingSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Telecommunication Testing Services",
  description: "Comprehensive telecommunication testing services including 5G, IoT, VoIP, network security, NFV/SDN, and performance optimization.Ensure seamless connectivity with Testriq’s telecom testing services: performance, security, and compliance testing for telecom systems.",
  keywords: [
    "telecommunication testing",
    "5G network testing",
    "VoIP testing",
    "IoT connectivity testing",
    "network performance testing",
    "NFV testing",
    "SDN testing",
    "network security testing",
    "latency optimization",
    "mobile network QA"
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
    canonical: 'https://testriq.com/telecommunications-testing-services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/telecommunications-testing-services',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Telecommunication Testing Solutions | 5G & Network QA Services | Testriq',
    description: 'Comprehensive telecommunication testing services including 5G, IoT, VoIP, network security, NFV/SDN, and performance optimization. Ensure seamless connectivity and superior network performance with Testriq.',
    images: [
      {
        url: '/OG/Telecommunication-Testing-Service-Og.webp',
        width: 1200,
        height: 630,
        alt: 'Telecommunication Testing Solutions by Testriq',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Telecommunication Testing Solutions | 5G & Network QA Services | Testriq',
    description: 'Comprehensive telecommunication testing services including 5G, IoT, VoIP, network security, NFV/SDN, and performance optimization. Ensure seamless connectivity and superior network performance with Testriq.',
    images: ['/OG/Telecommunication-Testing-Service-Twitter.webp'],
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



const TelecommunicationTestingPage: React.FC = () => {
  const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/telecommunications-testing-services" },
    { name: "Telecommunication Testing ", url: "https://testriq.com/telecommunications-testing-services" }
  ];
  return (
    <div>
            <StructuredData data={telecommunicationTestingSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
    <main className="min-h-screen bg-white">
      <TelecomHeroSection />
      <TelecomChallengesSection />
      <TelecomTestingServicesSection />
      <TelecomToolsFrameworksSection />
      <TelecomNetworkTestingSection />
      {/* <TelecomCaseStudiesSection /> */}
      <TelecomROISection />
      <TelecomFAQSection />
      <TelecomContactSection />
    </main>
    </div>
  );
};

export default TelecommunicationTestingPage;

