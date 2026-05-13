import React from "react";
import type { Metadata } from "next";
import StructuredData, {
  createCanonicalBreadcrumb,
  etlTestingSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import ETLTestingHeroSection from "@/components/sections/ETLTestingHeroSection";
import ETLComprehensiveSlider from "@/components/sections/ETLComprehensiveSlider";
import ETLProvenTestingProcess from "@/components/sections/ETLProvenTestingProcess";
import ETLWhyChooseTestriq from "@/components/sections/ETLWhyChooseTestriq";
import ETLToolsFramework from "@/components/sections/ETLToolsFramework";
import ETLCaseStudies from "@/components/sections/ETLCaseStudies";
import ETLFAQs from "@/components/sections/ETLFAQs";
import ETLAnyQuestions from "@/components/sections/ETLAnyQuestions";
import ETLComplianceTable from "@/components/sections/ETLComplianceTable";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/etl-testing-services",
    title: "Cloud ETL Testing Services & Data Integrity | Testriq",
    description:
      "Validate cloud ETL pipelines with Testriq's testing services. ISO 8000-1 quality, source-to-target mapping QA, and Snowflake/Databricks migration validation.",
    ogImage: {
      url: "https://www.testriq.com/OG/ETL-Testing-Service-Og.webp",
      width: 1200,
      height: 630,
      alt: "ETL Testing Services - Testriq",
      type: "image/webp",
    },
    keywords: [
      "cloud etl testing services",
      "data integrity testing",
      "iso 8000-1 compliance",
      "etl automation testing",
      "snowflake data migration validation",
      "source-to-target mapping qa",
      "big data performance testing",
      "data warehouse testing services",
      "etl performance benchmarking",
      "enterprise data quality assurance",
      "icedq and querysurge validation",
    ],
  });
}

export default function ETLTestingPage() {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed via
  // title.absolute. Title dropped " USA" geo-restriction — was "Cloud
  // ETL Testing Services & Data Integrity USA | Testriq" which hurt
  // global SEO. Description rewritten — was ~226 chars with "2026
  // zettabyte era" time anchor; now 157, action-verb start, drops time
  // anchor, surfaces Snowflake/Databricks. twitter:image unified with
  // og:image (was a separate -Twitter.webp with mixed-case typo
  // "ETL-TesTing-Service-Twitter.webp"). ogImage.type "image/webp"
  // added. "Data Integrity USA" keyword normalized. Keywords lowercased.
  // Breadcrumb already migrated in PR-3 — unchanged.
  return (
    <main className="min-h-screen bg-white">
      <StructuredData data={etlTestingSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb("/etl-testing-services", "ETL Testing")}
      />
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
