import React from "react";
import BankingHeroSection from "@/components/sections/BankingHeroSection";
import BankingChallengesSection from "@/components/sections/BankingChallengesSection";
import BankingTestingServicesSection from "@/components/sections/BankingTestingServicesSection";
import BankingToolsFrameworksSection from "@/components/sections/BankingToolsFrameworksSection";
import BankingComplianceSection from "@/components/sections/BankingComplianceSection";
import BankingROISection from "@/components/sections/BankingROISection";
import BankingFAQSection from "@/components/sections/BankingFAQSection";
import BankingContactSection from "@/components/sections/BankingContactSection";
import { Metadata } from "next";
import StructuredData, { bankingFinanceTestingServiceSchema, createBreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Banking App Testing Services ",
  description: "Get secure, scalable, and compliant banking app testing with TESTRIQ QA Lab. Ensure performance, security, and regulatory compliance in finance applications..",
  keywords: [
    "banking testing solutions",
    "BFSI QA services",
    "PCI DSS compliance testing",
    "core banking validation",
    "mobile banking QA",
    "financial software testing",
    "banking automation testing",
    "regulatory compliance testing",
    "financial QA services",
    "SOX testing",
    "GDPR testing",
    "security testing for banks"
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
    canonical: 'https://www.testriq.com/banking-finance-industry-testing-services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.testriq.com/banking-finance-industry-testing-services',
    siteName: 'Testriq - Banking & Finance QA Services',
    title: 'Banking & Finance Testing Solutions | BFSI QA Services | Testriq',
    description: 'Ensure secure, compliant, and high-performance banking platforms with Testriq’s comprehensive BFSI testing solutions. PCI DSS, SOX, GDPR compliant QA services.',
    images: [
      {
        url: '/OG/Banking-App-Testing-Services-og.webp',
        width: 1200,
        height: 630,
        alt: 'Banking & Finance Testing Solutions | Testriq',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Banking & Finance Testing Solutions | BFSI QA Services | Testriq',
    description: 'Secure your financial applications with Testriq’s expert BFSI testing services. Compliance, performance, and security all-in-one.',
    images: ['/OG/Banking-App-Testing-Services-Twitter.webp'],
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
}
};


const BankingFinanceTestingPage: React.FC = () => {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "Services", url: "https://www.testriq.com/banking-finance-industry-testing-services" },
    { name: "Banking FinanceTesting Service", url: "https://www.testriq.com/banking-finance-industry-testing-servicess" }
  ];
  return (
    <div>
           <StructuredData data={bankingFinanceTestingServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
    <main className="min-h-screen bg-white">
      <BankingHeroSection />
      <BankingChallengesSection />
      <BankingTestingServicesSection />
      <BankingToolsFrameworksSection />
      <BankingComplianceSection />
      {/* <BankingCaseStudiesSection /> */}
      <BankingROISection />
      <BankingFAQSection />
      <BankingContactSection />
    </main>
    </div>
  );
};

export default BankingFinanceTestingPage;

