import React from "react";
import ETLTestingHeroSection from "@/components/sections/ETLTestingHeroSection";
import ETLComprehensiveSlider from "@/components/sections/ETLComprehensiveSlider";
import ETLProvenTestingProcess from "@/components/sections/ETLProvenTestingProcess";
import ETLWhyChooseTestriq from "@/components/sections/ETLWhyChooseTestriq";
import ETLToolsFramework from "@/components/sections/ETLToolsFramework";
import ETLCaseStudies from "@/components/sections/ETLCaseStudies";
import ETLFAQs from "@/components/sections/ETLFAQs";
import ETLAnyQuestions from "@/components/sections/ETLAnyQuestions";
import { Metadata } from "next";
import StructuredData, {
  createBreadcrumbSchema,
  etlTestingSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "ETL Testing Services Company",

  description:
    "We are one of the best ETL Testing Services Company in Mumbai. With expertise in testing Web applications and mobile apps. Contact Us Now!",
  keywords: [
    "ETL testing",
    "data pipeline testing",
    "data validation",
    "ETL QA services",
    "data transformation testing",
    "ETL performance testing",
    "ETL data quality assurance",
    "ETL automation",
    "data loading validation",
    "ETL testing company",
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
    canonical: "https://testriq.com/etl-testing-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://testriq.com/etl-testing-services",
    siteName: "Testriq - ETL Testing Services",
    title:
      "ETL Testing Services - Data Pipeline Validation & Quality Assurance | Testriq",
    description:
      "End-to-end ETL testing services covering extraction, transformation, and loading. Ensure pipeline performance, data accuracy, and regulatory compliance with Testriq.",
    images: [
      {
        url: "/OG/ETL-Testing-Service-Og.webp",
        width: 1200,
        height: 630,
        alt: "ETL Testing Services - Testriq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title:
      "ETL Testing Services - Data Pipeline Validation & Quality Assurance | Testriq",
    description:
      "End-to-end ETL testing services covering extraction, transformation, and loading. Ensure pipeline performance, data accuracy, and regulatory compliance with Testriq.",
    images: ["/OG/ETL-TesTing-Service-Twitter.webp"],
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

export default function ETLTestingPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/etl-testing-services" },
    { name: "ETL Testing", url: "https://testriq.com/etl-testing-services" },
  ];
  return (
    <main className="min-h-screen bg-white">
      <StructuredData data={etlTestingSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <ETLTestingHeroSection />
      <ETLComprehensiveSlider />
      <ETLProvenTestingProcess />
      <ETLWhyChooseTestriq />
      <ETLToolsFramework />
      <ETLCaseStudies />
      <ETLFAQs />
      <ETLAnyQuestions />
    </main>
  );
}
