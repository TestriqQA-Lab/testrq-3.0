import React from "react";
import ETLTestingHeroSection from "@/components/sections/ETLTestingHeroSection";
import ETLComprehensiveSlider from "@/components/sections/ETLComprehensiveSlider";
import ETLProvenTestingProcess from "@/components/sections/ETLProvenTestingProcess";
import ETLWhyChooseTestriq from "@/components/sections/ETLWhyChooseTestriq";
import ETLToolsFramework from "@/components/sections/ETLToolsFramework";
import ETLCaseStudies from "@/components/sections/ETLCaseStudies";
import ETLFAQs from "@/components/sections/ETLFAQs";
import ETLAnyQuestions from "@/components/sections/ETLAnyQuestions";
import ETLComplianceTable from "@/components/sections/ETLComplianceTable";
import { Metadata } from "next";
import StructuredData, {
  createBreadcrumbSchema,
  etlTestingSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Cloud ETL Testing Services & Data Integrity USA | Testriq",

  description:
    "Expert-led ETL testing services for the 2026 zettabyte era. Specialized in ISO 8000-1:2022 compliance, cloud data migration (Snowflake, Databricks), high-velocity ETL automation, and performance testing for zero-defect pipelines.",
  keywords: [
    "Cloud ETL Testing Services",
    "Data Integrity USA",
    "ISO 8000-1:2022 Compliance",
    "ETL Automation Testing",
    "Snowflake Data Migration Validation",
    "Source-to-Target Mapping QA",
    "Big Data Performance Testing",
    "Data Warehouse Testing Services",
    "ETL Performance Benchmarking",
    "Enterprise Data Quality Assurance",
    "iCEDQ & QuerySurge Validation",
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/etl-testing-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/etl-testing-services",
    siteName: "Testriq - Cloud ETL & Data Testing",
    title:
      "Cloud ETL Testing Services & Data Integrity USA | Testriq",
    description:
      "Expert-led ETL testing services for the 2026 zettabyte era. Specialized in ISO 8000-1:2022 compliance, cloud data migration, and automated data validation.",
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
      "Cloud ETL Testing Services & Data Integrity USA | Testriq",
    description:
      "Expert-led ETL testing services for the 2026 zettabyte era. Specialized in ISO 8000-1:2022 compliance, cloud data migration, and automated data validation.",
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
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "Services", url: "https://www.testriq.com/etl-testing-services" },
    { name: "ETL Testing", url: "https://www.testriq.com/etl-testing-services" },
  ];
  return (
    <main className="min-h-screen bg-white">
      <StructuredData data={etlTestingSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <ETLTestingHeroSection />
      <ETLComplianceTable />
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
