import React from "react";
import HealthcareHeroSection from "@/components/sections/HealthcareHeroSection";
import HealthcareChallengesSection from "@/components/sections/HealthcareChallengesSection";
import HealthcareTestingServicesSection from "@/components/sections/HealthcareTestingServicesSection";
import HealthcareTestingProcessSection from "@/components/sections/HealthcareTestingProcessSection";
import HealthcareComplianceSection from "@/components/sections/HealthcareComplianceSection";
import HealthcareToolsFrameworkSection from "@/components/sections/HealthcareToolsFrameworkSection";
import HealthcareROISection from "@/components/sections/HealthcareROISection";
import HealthcareFAQSection from "@/components/sections/HealthcareFAQSection";
import HealthcareContactSection from "@/components/sections/HealthcareContactSection";
import { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema, healthcareTestingServiceSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Healthcare Testing Solutions ",
  description: "Ensure your healthcare software is secure, compliant, and user-friendly. Testriq offers end-to-end healthcare testing services aligned with HIPAA and FDA standards.",
  keywords: [
    "Healthcare Software Testing",
    "HIPAA Compliance Testing",
    "FDA Validation Support",
    "EHR Testing",
    "Medical Device Testing",
    "Telemedicine App Testing",
    "Patient Data Security",
    "Healthcare Cybersecurity",
    "Medical Software QA",
    "Healthcare QA Services"
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
    canonical: 'https://testriq.com/healthcare-testing-services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/healthcare-testing-services',
    siteName: 'Testriq - Healthcare QA Services',
    title: 'Healthcare Testing Solutions | Medical Software QA & HIPAA Compliance | Testriq',
    description: 'Secure your healthcare software with Testriq’s expert QA testing services. Ensure HIPAA compliance, FDA validation, EHR integration, and patient data security.',
    images: [
      {
        url: '/OG/Healthcare-Testing-Service-Og.webp',
        width: 1200,
        height: 630,
        alt: 'Testriq - Healthcare Software Testing Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Healthcare Testing Solutions | Medical Software QA & HIPAA Compliance | Testriq',
    description: 'Secure your healthcare software with Testriq’s expert QA testing services. Ensure HIPAA compliance, FDA validation, EHR integration, and patient data security.',
    images: ['/OG/Healthcare-Testing-Service-Twitter.webp'],
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

const HealthcareTestingPage: React.FC = () => {
    const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/healthcare-testing-services" },
    { name: "Healthcare Testing Service", url: "https://testriq.com/healthcare-testing-services" }
  ];
  return (
    <div>
          <StructuredData data={ healthcareTestingServiceSchema} />
          <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />

    <main className="min-h-screen bg-white">
      <HealthcareHeroSection />
      <HealthcareChallengesSection />
      <HealthcareTestingServicesSection />
      <HealthcareTestingProcessSection />
      <HealthcareComplianceSection />
      <HealthcareToolsFrameworkSection />
      {/* <HealthcareCaseStudiesSection /> */}
      <HealthcareROISection />
      <HealthcareFAQSection />
      <HealthcareContactSection />
    </main>
    </div>
  );
};

export default HealthcareTestingPage;

