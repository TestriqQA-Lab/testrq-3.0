import React from 'react';
import SoftwareTestingGuideHeroSection from '@/components/sections/SoftwareTestingGuideHeroSection';
import SoftwareTestingGuideComprehensiveSlider from '@/components/sections/SoftwareTestingGuideComprehensiveSlider';
import SoftwareTestingGuideProvenTestingProcess from '@/components/sections/SoftwareTestingGuideProvenTestingProcess';
import SoftwareTestingGuideWhyChooseTestriq from '@/components/sections/SoftwareTestingGuideWhyChooseTestriq';
import SoftwareTestingGuideToolsFramework from '@/components/sections/SoftwareTestingGuideToolsFramework';
import SoftwareTestingGuideCaseStudies from '@/components/sections/SoftwareTestingGuideCaseStudies';
import SoftwareTestingGuideFAQs from '@/components/sections/SoftwareTestingGuideFAQs';
import SoftwareTestingGuideReadyToEnsureQuality from '@/components/sections/SoftwareTestingGuideReadyToEnsureQuality';
import { Metadata } from 'next';
import StructuredData, { completeTestingGuideSchema, createBreadcrumbSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: "Software Testing Guide - Best Software Testing Company",
  description: "Explore a complete guide to software testing services including manual, automation, performance, security, and API testing. Testriq QA Lab delivers ISO-certified QA solutions for startups and enterprises.",
  keywords: [
    "Software Testing Guide",
    "Manual Testing",
    "Automation Testing",
    "Performance Testing",
    "Security Testing",
    "API Testing",
    "Testing Tools",
    "QA Best Practices",
    "Testing Types",
    "Testing Methodologies"
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
    canonical: 'https://testriq.com/software-testing-guide',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/software-testing-guide',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Complete Software Testing Guide - Best Practices, Types & Methodologies | Testriq',
    description: 'Master software testing with our complete guide. Learn manual, automation, performance, and security testing best practices, tools, and methodologies.',
    images: [
      {
        url: '/OG/Software-Testing-Guid-OG.webp',
        width: 1200,
        height: 630,
        alt: 'Complete Software Testing Guide | Testriq',
        type: 'image/webp',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Complete Software Testing Guide - Best Practices, Types & Methodologies | Testriq',
    description: 'Master software testing with our complete guide. Learn manual, automation, performance, and security testing best practices, tools, and methodologies.',
    images: ['/OG/Software-Testing-Guild-Twitter.webp'],
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



const SoftwareTestingGuidePage = () => {
  const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/software-testing-guide" },
    { name: "Software Testing Guide", url: "https://testriq.com/software-testing-guide" }
  ];

  return (
    <div className="min-h-screen bg-white">
       <StructuredData data={completeTestingGuideSchema} />
       <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <SoftwareTestingGuideHeroSection />
      <SoftwareTestingGuideComprehensiveSlider />
      <SoftwareTestingGuideProvenTestingProcess />
      <SoftwareTestingGuideWhyChooseTestriq />
      <SoftwareTestingGuideToolsFramework />
      <SoftwareTestingGuideCaseStudies />
      <SoftwareTestingGuideFAQs />
      <SoftwareTestingGuideReadyToEnsureQuality />
    </div>
  );
};

export default SoftwareTestingGuidePage;

