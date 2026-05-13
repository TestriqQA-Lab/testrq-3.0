import React from "react";
import type { Metadata } from "next";
import StructuredData, {
  exploratoryTestingSchema,
  createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import ExploratoryTestingHeroSection from "@/components/sections/ExploratoryTestingHeroSection";
import ExploratoryChallenges from "@/components/sections/ExploratoryChallenges";
import ExploratoryVsScripted from "@/components/sections/ExploratoryVsScripted";
import ExploratoryProvenTestingProcess from "@/components/sections/ExploratoryProvenTestingProcess";
import ExploratoryCompliance from "@/components/sections/ExploratoryCompliance";
import ExploratoryWhyChooseTestriq from "@/components/sections/ExploratoryWhyChooseTestriq";
import ExploratoryToolsFramework from "@/components/sections/ExploratoryToolsFramework";
import ExploratoryCaseStudies from "@/components/sections/ExploratoryCaseStudies";
import ExploratoryFAQs from "@/components/sections/ExploratoryFAQs";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/exploratory-testing",
    title: "Exploratory Testing Services | ISO 29119-2 & ISTQB-Led | Testriq",
    description:
      "Find defects automated tests miss with Testriq's exploratory testing. ISO 29119-2 standards, ISTQB-certified experts, and session-based test management.",
    ogImage: {
      url: "https://www.testriq.com/OG/Exploratory-Testing-OG.webp",
      width: 1200,
      height: 630,
      alt: "Exploratory Testing Services - Testriq",
      type: "image/webp",
    },
    keywords: [
      "exploratory testing services",
      "exploratory testing in software testing",
      "session-based testing management",
      "iso 29119-2 compliance",
      "manual exploratory testing",
      "human intuition in testing",
      "test design and execution",
      "uncovering deep-seated defects",
      "agile exploratory testing",
      "rapid reporter tools",
    ],
  });
}

export default function ExploratoryTestingPage() {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Triple-brand-ish title fixed
  // via title.absolute. Previous title ended with "| Testriq QA Lab"
  // and root template "%s | Testriq" produced "... | Testriq QA Lab |
  // Testriq". New title surfaces ISO 29119-2 + ISTQB-Led as the
  // differentiators. Description rewritten — was ~191 chars, now 152.
  // og:title and twitter:title now mirror page title. twitter:image
  // unified with og:image (was a separate -Twitter.webp). ogImage.type
  // "image/webp" added. Keywords lowercased. Section components were
  // already direct imports — no dynamic→direct conversion needed.
  // Breadcrumb already migrated in PR-3 — unchanged.
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={exploratoryTestingSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/exploratory-testing",
          "Exploratory Testing"
        )}
      />
      <ExploratoryTestingHeroSection />
      <ExploratoryChallenges />
      <ExploratoryVsScripted />
      <ExploratoryProvenTestingProcess />
      <ExploratoryCompliance />
      <ExploratoryWhyChooseTestriq />
      <ExploratoryToolsFramework />
      <ExploratoryCaseStudies />
      <ExploratoryFAQs />
    </div>
  );
}
