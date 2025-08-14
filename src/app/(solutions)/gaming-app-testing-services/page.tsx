import React from "react";
import GamingHeroSection from "@/components/sections/GamingHeroSection";
import GamingChallengesSection from "@/components/sections/GamingChallengesSection";
import GamingTestingServicesSection from "@/components/sections/GamingTestingServicesSection";
import GamingTestingProcessSection from "@/components/sections/GamingTestingProcessSection";
import GamingPlatformsSection from "@/components/sections/GamingPlatformsSection";
import GamingToolsFrameworkSection from "@/components/sections/GamingToolsFrameworkSection";
import GamingCaseStudiesSection from "@/components/sections/GamingCaseStudiesSection";
import GamingROISection from "@/components/sections/GamingROISection";
import GamingFAQSection from "@/components/sections/GamingFAQSection";
import GamingContactSection from "@/components/sections/GamingContactSection";
import { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema, gamingTestingServiceSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Gaming App Testing Services" ,
  description: "Launch flawless, secure, and immersive games. Testriq offers expert gaming app testing services across platforms for peak performance and player satisfaction.",
  keywords: [
    "game testing services",
    "mobile game QA",
    "console game testing",
    "VR game testing",
    "multiplayer testing",
    "performance testing",
    "anti-cheat testing",
    "AR game testing",
    "cloud game QA",
    "game launch readiness"
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
    canonical: 'https://testriq.com/gaming-app-testing-services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/gaming-app-testing-services',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Gaming App Testing Solutions | Mobile Game QA & Performance Testing | Testriq',
    description: 'Testriq offers specialized game QA for mobile, console, and VR games—ensuring flawless gameplay, performance, and player retention. Trusted by 500+ gaming studios.',
    images: [
      {
        url: '/OG/Gaming-App-Testing-Service-Og.webp',
        width: 1200,
        height: 630,
        alt: 'Gaming QA Testing Services | Testriq'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Gaming App Testing Solutions | Mobile Game QA & Performance Testing | Testriq',
    description: 'Deliver immersive, bug-free gaming experiences with Testriq’s expert QA testing—covering mobile, console, VR, and multiplayer games.',
    images: ['/OG/Gaming-App-Testing-Service-Twitter.webp'],
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



const GamingTestingPage: React.FC = () => {
   const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/gaming-app-testing-services" },
    { name: "Gaming Testing Service", url: "https://testriq.com/gaming-app-testing-services" }
  ];
  return (
    <div>  
      <StructuredData data={gamingTestingServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
    <main className="min-h-screen bg-white">
      <GamingHeroSection />
      <GamingChallengesSection />
      <GamingTestingServicesSection />
      <GamingTestingProcessSection />
      <GamingPlatformsSection />
      <GamingToolsFrameworkSection />
      {/* <GamingCaseStudiesSection /> */}
      <GamingROISection />
      <GamingFAQSection />
      <GamingContactSection />
    </main>
    </div>
  );
};

export default GamingTestingPage;

