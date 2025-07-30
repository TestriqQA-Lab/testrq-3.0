import React from 'react';
import QADocumentationHeroSection from '@/components/sections/QADocumentationHeroSection';
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
  title:"QA Documentation Services | Test Case Writing Services",
    
  description: "Get expert QA documentation services from Testriq QA Lab—test plans, test cases, traceability matrix & more for complete software testing clarity and quality.",
  keywords: [
    "QA documentation services",
    "test case documentation",
    "test plan writing",
    "quality assurance documentation",
    "requirements documentation",
    "software QA docs",
    "technical documentation",
    "compliance documentation",
    "UAT documentation",
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
  metadataBase: new URL('https://testrq-3-0.vercel.app/'),
  alternates: {
    canonical: 'https://testriq.com/qa-documentation-services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/qa-documentation-services',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'QA Documentation Services - Professional QA Docs | Testriq',
    description: 'Professional QA documentation services including test plans, test cases, requirements docs, and compliance-ready deliverables. Ensure quality, streamline processes, and accelerate testing.',
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
    title: 'QA Documentation Services - Professional QA Docs | Testriq',
    description: 'Professional QA documentation services including test plans, test cases, requirements docs, and compliance-ready deliverables. Ensure quality, streamline processes, and accelerate testing.',
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
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/qa-documentation-services" },
    { name: "QA Documentation Services", url: "https://testriq.com/qa-documentation-services" }
  ];
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={qaDocumentationServiceSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <QADocumentationHeroSection />
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

