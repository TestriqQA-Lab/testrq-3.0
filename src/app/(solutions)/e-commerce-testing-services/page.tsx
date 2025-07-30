import React from "react";
import EcommerceHeroSection from "@/components/sections/EcommerceHeroSection";
import EcommerceChallengesSection from "@/components/sections/EcommerceChallengesSection";
import EcommerceTestingServicesSection from "@/components/sections/EcommerceTestingServicesSection";
import EcommerceTestingProcessSection from "@/components/sections/EcommerceTestingProcessSection";
import EcommercePlatformsSection from "@/components/sections/EcommercePlatformsSection";
import EcommerceCaseStudiesSection from "@/components/sections/EcommerceCaseStudiesSection";
import EcommerceROISection from "@/components/sections/EcommerceROISection";
import EcommerceFAQSection from "@/components/sections/EcommerceFAQSection";
import EcommerceContactSection from "@/components/sections/EcommerceContactSection";
import { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema, ecommerceTestingServiceSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title:"E-Commerce Testing Services",
  description: "Ensure your e-commerce platform is secure, fast, and error-free. Testriq offers expert QA testing services tailored to Magento, Shopify, WooCommerce & more.",
  keywords: [
    "e-commerce testing",
    "online store QA",
    "shopping cart testing",
    "payment gateway testing",
    "mobile commerce testing",
    "ecommerce security testing",
    "cross-browser testing",
    "load testing",
    "GDPR PCI DSS compliance",
    "ecommerce QA services"
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
    canonical: 'https://testriq.com/e-commerce-testing-services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/e-commerce-testing-services',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'E-Commerce Testing Services - Boost Conversions & Security | Testriq',
    description: 'Ensure flawless shopping experiences, secure transactions, and high performance with Testriq\'s e-commerce testing services. Improve conversions, reduce cart abandonment, and meet compliance standards across all major platforms.',
    images: [
      {
        url: '/OG/E-commerce-Testing-Service-Og.webp',
        width: 1200,
        height: 630,
        alt: 'E-Commerce Testing Services - Testriq',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'E-Commerce Testing Services - Boost Conversions & Security | Testriq',
    description: 'Ensure flawless shopping experiences, secure transactions, and high performance with Testriq\'s e-commerce testing services. Improve conversions, reduce cart abandonment, and meet compliance standards across all major platforms.',
    images: ['/OG/E-commerce-Testing-Service-Twitter.webp'],
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


const EcommerceTestingPage: React.FC = () => {
  const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/e-commerce-testing-services" },
    { name: "E-Commerce Testing", url: "https://testriq.com/e-commerce-testing-services" }
  ];
  return (
    <div>
        <StructuredData data={ecommerceTestingServiceSchema} />
        <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
    <main className="min-h-screen bg-white">
      <EcommerceHeroSection />
      <EcommerceChallengesSection />
      <EcommerceTestingServicesSection />
      <EcommerceTestingProcessSection />
      <EcommercePlatformsSection />
      <EcommerceCaseStudiesSection />
      <EcommerceROISection />
      <EcommerceFAQSection />
      <EcommerceContactSection />
    </main>
    </div>
  );
};

export default EcommerceTestingPage;

