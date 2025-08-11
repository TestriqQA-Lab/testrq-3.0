import React from "react";
import CareersHeroSection from "@/components/sections/CareersHeroSection";
import CareersValuesSection from "@/components/sections/CareersValuesSection";
import CareersOpenPositions from "@/components/sections/CareersOpenPositions";
import CareersBenefitsSection from "@/components/sections/CareersBenefitsSection";
import CareersApplicationProcessSection from "@/components/sections/CareersApplicationProcessSection";
import CareersCultureSection from "@/components/sections/CareersCultureSection";
import { Metadata } from "next";
import StructuredData, { careersPageSchema, createBreadcrumbSchema } from "@/components/seo/StructuredData";


export const metadata: Metadata = {
  title:"Careers | Join Our QA Testing Team at Testriq",

  description: "Discover a workplace that values growth, collaboration, and excellence. Unleash your potential with testriq Careers.. Enjoy remote-first work, growth opportunities, top-tier benefits, and a culture of innovation.",
  keywords: [
    "QA careers",
    "software testing jobs",
    "automation testing jobs",
    "remote QA jobs",
    "QA engineer openings",
    "join Testriq",
    "QA hiring",
    "manual testing jobs",
    "performance testing roles",
    "AI testing jobs",
    "Testriq jobs",
    "QA analyst jobs"
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
    canonical: 'https://testriq.com/careers',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/careers',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Careers | Join Our QA Testing Team at Testriq | Testriq',
    description: 'Explore QA career opportunities at Testriq. Join a global team of software testing professionals. Enjoy remote-first work, growth opportunities, top-tier benefits, and a culture of innovation.',
    images: [
      {
        url: '/OG/Careers-Og.webp',
        width: 1200,
        height: 630,
        alt: 'Careers at Testriq - QA Testing Jobs',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Careers | Join Our QA Testing Team at Testriq | Testriq',
    description: 'Explore QA career opportunities at Testriq. Join a global team of software testing professionals. Enjoy remote-first work, growth opportunities, top-tier benefits, and a culture of innovation.',
    images: ['/OG/Careers-Twitter.webp'],
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


const CareersPage: React.FC = () => {
   const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Careers Page", url: "https://testriq.com/careers" }
  ];
  return (
    <div>
      <StructuredData data={careersPageSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
    <main className="min-h-screen bg-gray-50">
      <CareersHeroSection />
      <CareersValuesSection />
      <CareersOpenPositions />
      <CareersBenefitsSection />
      <CareersCultureSection />
      <CareersApplicationProcessSection />
    </main>
    </div>
  );
};

export default CareersPage;

