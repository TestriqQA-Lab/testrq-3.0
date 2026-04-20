import React from 'react';
import QADocumentationHeroSection from '@/components/sections/QADocumentationHeroSection';
import QADocumentationChallenges from '@/components/sections/QADocumentationChallenges';
import QADocumentationComprehensiveSlider from '@/components/sections/QADocumentationComprehensiveSlider';
import QADocumentationProvenTestingProcess from '@/components/sections/QADocumentationProvenTestingProcess';
import QADocumentationWhyChooseTestriq from '@/components/sections/QADocumentationWhyChooseTestriq';
import QADocumentationToolsFramework from '@/components/sections/QADocumentationToolsFramework';
import QADocumentationCaseStudies from '@/components/sections/QADocumentationCaseStudies';
import QADocumentationFAQs from '@/components/sections/QADocumentationFAQs';
import QADocumentationReadyToEnsureQuality from '@/components/sections/QADocumentationReadyToEnsureQuality';
import { Metadata } from 'next';
import StructuredData, { createBreadcrumbSchema, qaDocumentationServiceSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: "Analyze Data to Improve QA Team Performance",
  description: "Testriq provides professional QA documentation services. We bridge the gap between rapid deployment and quality assurance with audit-ready, scalable systems aligning with ISO/IEC/IEEE 29119-3 standards.",
  keywords: [
    "QA documentation services",
    "test management",
    "ISO/IEC/IEEE 29119-3",
    "test case writing",
    "test plan strategy",
    "compliance documentation",
    "traceability gap",
    "Testriq QA documentation"
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
    canonical: 'https://www.testriq.com/qa-documentation-services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.testriq.com/qa-documentation-services',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Analyze Data to Improve QA Team Performance | Testriq',
    description: 'Enterprise-grade QA documentation services. Bridge the gap between rapid deployment and quality assurance with audit-ready, scalable systems.',
    images: [
      {
        url: '/OG/QA-Documentation-Service-Og.webp',
        width: 1200,
        height: 630,
        alt: 'QA Documentation Services by Testriq',
        type: 'image/webp',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Analyze Data to Improve QA Team Performance | Testriq',
    description: 'Enterprise-grade QA documentation services. Bridge the gap between rapid deployment and quality assurance with audit-ready, scalable systems.',
    images: ['/OG/QA-Documentation-service-Twitter.webp'],
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



const QADocumentationServicesPage = () => {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "Services", url: "https://www.testriq.com/qa-documentation-services" },
    { name: "QA Documentation Services", url: "https://www.testriq.com/qa-documentation-services" }
  ];
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={qaDocumentationServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <QADocumentationHeroSection />
      <QADocumentationChallenges />
      <QADocumentationComprehensiveSlider />
      <QADocumentationProvenTestingProcess />
      <QADocumentationWhyChooseTestriq />
      <QADocumentationToolsFramework />
      <QADocumentationCaseStudies />
      <QADocumentationFAQs />
      <QADocumentationReadyToEnsureQuality />
    </div>
  );
};

export default QADocumentationServicesPage;

