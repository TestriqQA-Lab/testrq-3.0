import React from "react";
import EcommerceHeroSection from "@/components/sections/EcommerceHeroSection";
import EcommerceChallengesSection from "@/components/sections/EcommerceChallengesSection";
import EcommerceTestingServicesSection from "@/components/sections/EcommerceTestingServicesSection";
import EcommerceTestingProcessSection from "@/components/sections/EcommerceTestingProcessSection";
import EcommercePlatformsSection from "@/components/sections/EcommercePlatformsSection";
import EcommerceFAQSection from "@/components/sections/EcommerceFAQSection";
import EcommerceContactSection from "@/components/sections/EcommerceContactSection";
import { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema, ecommerceTestingServiceSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "E-Commerce Testing |QA Testing | Testriq",
  description: "Optimizing conversions and security for e-commerce in 2026. Enterprise-grade testing for Magento, Shopify, and WooCommerce. PCI DSS 4.0 compliant QA for global digital commerce.",
  keywords: [
    "e-commerce testing",
    "online store QA",
    "shopping cart testing",
    "payment gateway testing",
    "mobile commerce testing",
    "ecommerce security testing",
    "cross-browser testing",
    "load testing",
    "PCI DSS 4.0 compliance",
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
  metadataBase: new URL('https://www.testriq.com/'),
  alternates: {
    canonical: 'https://www.testriq.com/e-commerce-testing-services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.testriq.com/e-commerce-testing-services',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'E-Commerce Testing |QA Testing | Testriq',
    description: 'Optimizing conversions and security for e-commerce in 2026. Enterprise-grade testing for Magento, Shopify, and WooCommerce. PCI DSS 4.0 compliant QA for global digital commerce.',
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
    title: 'E-Commerce Testing |QA Testing | Testriq',
    description: 'Optimizing conversions and security for e-commerce in 2026. Enterprise-grade testing for Magento, Shopify, and WooCommerce. PCI DSS 4.0 compliant QA for global digital commerce.',
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
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "Services", url: "https://www.testriq.com/e-commerce-testing-services" },
    { name: "E-Commerce Testing", url: "https://www.testriq.com/e-commerce-testing-services" }
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
        {/* <EcommerceCaseStudiesSection /> */}
        <EcommerceFAQSection />
        <EcommerceContactSection />
      </main>
    </div>
  );
};

export default EcommerceTestingPage;

