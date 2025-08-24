import React from "react";
import TradingAppHeroSection from "@/components/sections/TradingAppHeroSection";
import TradingAppCertificationPillars from "@/components/sections/TradingAppCertificationPillars";
import TradingAppCertificationProcess from "@/components/sections/TradingAppCertificationProcess";
import TradingAppSecurityFeatures from "@/components/sections/TradingAppSecurityFeatures";
import TradingAppBenefits from "@/components/sections/TradingAppBenefits";
import TradingAppTestingServices from "@/components/sections/TradingAppTestingServices";
import TradingAppFAQs from "@/components/sections/TradingAppFAQs";
import TradingAppCTA from "@/components/sections/TradingAppCTA";
import { Metadata } from "next";
import StructuredData, {
  createBreadcrumbSchema,
  organizationSchema,
  tradingAppCertificationSchema,
  websiteSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Trading App Certification",

  description:
    "Get your trading app certified with Testriq's comprehensive QA services. Ensure regulatory compliance (FINRA, SEC, MiFID II), algorithm validation, low-latency performance, and data security. Trusted by 500+ trading platforms.",
  keywords: [
    "Trading App Certification",
    "Trading platform compliance testing",
    "FINRA trading app compliance",
    "MiFID II certification",
    "low latency testing",
    "algorithmic trading testing",
    "SEC compliance validation",
    "trading app QA services",
    "financial app testing",
    "data security for trading platforms",
    "KYC AML verification",
    "trading API testing",
    "regulatory reporting testing",
    "PCI DSS trading compliance",
    "Testriq trading app certification",
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://testriq.com/"),
  alternates: {
    canonical: "https://testriq.com/trading-apps-certification",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://testriq.com/trading-apps-certification",
    siteName: "Testriq - Professional Software Testing Services",
    title:
      "Trading App Certification | Secure & Compliant Trading Platform Testing | Testriq",
    description:
      "Certify your trading platform for security, performance, and global regulatory compliance. Trusted by 500+ apps for FINRA, SEC, MiFID II, and PCI DSS standards.",
    images: [
      {
        url: "/OG/Trading-App-Certification-Og.webp",
        width: 1200,
        height: 630,
        alt: "Trading App Certification by Testriq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title:
      "Trading App Certification | Secure & Compliant Trading Platform Testing | Testriq",
    description:
      "Get your trading app certified for security, compliance, and performance. FINRA, MiFID II, SEC, GDPR compliant QA for fintech leaders.",
    images: ["/OG/Trading-App-Certification-Twitter.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "LXeSv6xxgAa1jB9JlWwO9ysJ1FNvWzgN3i3GyQs2AD0",
    yandex: "ff703971283d110e",
    yahoo: "0A67349B8CD11BF71173B38572028507",
  },
};

export default function TradingAppsCertificationPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    {
      name: "Services",
      url: "https://testriq.com/trading-apps-certification",
    },
    {
      name: "Trading App Certification ",
      url: "https://testriq.com/trading-apps-certification",
    },
  ];
  return (
    <div>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={tradingAppCertificationSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />

      <main className="min-h-screen bg-white">
        <TradingAppHeroSection />
        <TradingAppCertificationPillars />
        <TradingAppCertificationProcess />
        <TradingAppSecurityFeatures />
        <TradingAppBenefits />
        <TradingAppTestingServices />
        <TradingAppFAQs />
        <TradingAppCTA />
      </main>
    </div>
  );
}
