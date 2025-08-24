import React from 'react';
import DataAnalysisHeroSection from '@/components/sections/DataAnalysisHeroSection';
import DataAnalysisComprehensiveSlider from '@/components/sections/DataAnalysisComprehensiveSlider';
import DataAnalysisProvenTestingProcess from '@/components/sections/DataAnalysisProvenTestingProcess';
import DataAnalysisWhyChooseTestriq from '@/components/sections/DataAnalysisWhyChooseTestriq';
import DataAnalysisToolsFramework from '@/components/sections/DataAnalysisToolsFramework';
import DataAnalysisCaseStudies from '@/components/sections/DataAnalysisCaseStudies';
import DataAnalysisFAQs from '@/components/sections/DataAnalysisFAQs';
import DataAnalysisReadyToEnsureQuality from '@/components/sections/DataAnalysisReadyToEnsureQuality';
import { Metadata } from 'next';
import StructuredData, { createBreadcrumbSchema, dataAnalysisServiceSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title:"Data Analysis Services for QA Teams ",
   
  description: "Testriq offers expert data analysis services for QA teams—unlock trends, optimize testing, and drive strategic decisions with actionable insights.",
  keywords: [
    "data analysis services",
    "data analytics",
    "predictive analytics",
    "data insights",
    "business intelligence",
    "data visualization",
    "machine learning models",
    "analytics services",
    "real-time analytics",
    "descriptive analytics"
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
    canonical: 'https://testriq.com/data-analysis-services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/data-analysis-services',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Professional Data Analysis Services - Analytics, Insights & Reporting | Testriq',
    description: 'Transform your raw data into actionable business insights with Testriq\'s professional data analysis services. We deliver descriptive, predictive, and prescriptive analytics using advanced tools and expert data scientists.',
    images: [
      {
        url: '/OG/Data-Analysis-Service-Og.webp',
        width: 1200,
        height: 630,
        alt: 'Testriq - Professional Data Analysis Services',
        type: 'image/webp',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Professional Data Analysis Services - Analytics, Insights & Reporting | Testriq',
    description: 'Transform your raw data into actionable business insights with Testriq\'s professional data analysis services. We deliver descriptive, predictive, and prescriptive analytics using advanced tools and expert data scientists.',
    images: ['/OG/Data-Analysis-Service-Twitter.webp'],
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


const DataAnalysisPage = () => {
   const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/data-analysis-services" },
    { name: "Data Analysis Services", url: "https://testriq.com/data-analysis-services" }
  ];
  return (
    <div className="min-h-screen bg-white">
        <StructuredData data={dataAnalysisServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <DataAnalysisHeroSection />
      <DataAnalysisComprehensiveSlider />
      <DataAnalysisProvenTestingProcess />
      <DataAnalysisWhyChooseTestriq />
      <DataAnalysisToolsFramework />
      <DataAnalysisCaseStudies />
      <DataAnalysisFAQs />
      <DataAnalysisReadyToEnsureQuality />
    </div>
  );
};

export default DataAnalysisPage;

