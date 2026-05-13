import React from "react";
import ExploratoryTestingHeroSection from "@/components/sections/ExploratoryTestingHeroSection";
import ExploratoryChallenges from "@/components/sections/ExploratoryChallenges";
import ExploratoryVsScripted from "@/components/sections/ExploratoryVsScripted";
import ExploratoryProvenTestingProcess from "@/components/sections/ExploratoryProvenTestingProcess";
import ExploratoryCompliance from "@/components/sections/ExploratoryCompliance";
import ExploratoryWhyChooseTestriq from "@/components/sections/ExploratoryWhyChooseTestriq";
import ExploratoryToolsFramework from "@/components/sections/ExploratoryToolsFramework";
import ExploratoryCaseStudies from "@/components/sections/ExploratoryCaseStudies";
import ExploratoryFAQs from "@/components/sections/ExploratoryFAQs";
import { Metadata } from "next";
import StructuredData, {
  exploratoryTestingSchema,
  createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Exploratory Testing Services | Testriq QA Lab",
  description:
    "Uncover critical risks with Testriq's exploratory testing services. We combine ISO 29119-2 standards, ISTQB-certified experts, and human intuition to find defects automated tests miss.",
  keywords: [
    "Exploratory Testing in Software Testing",
    "exploratory testing services",
    "Session-Based Testing Management",
    "ISO 29119-2 Compliance",
    "manual exploratory testing",
    "Human intuition in testing",
    "test design and execution",
    "uncovering deep-seated defects",
    "Agile exploratory testing",
    "Rapid Reporter tools",
  ],
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/exploratory-testing",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/exploratory-testing",
    siteName: "Testriq - Exploratory Testing Services",
    title: "Exploratory Testing Services | Testriq QA Lab",
    description:
      "Uncover critical risks with Testriq's exploratory testing services. We combine ISO 29119-2 standards, ISTQB-certified experts, and human intuition to find defects automated tests miss.",
    images: [
      {
        url: "https://www.testriq.com/OG/Exploratory-Testing-OG.webp",
        width: 1200,
        height: 630,
        alt: "Exploratory Testing Services - Testriq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "Exploratory Testing Services | Testriq QA Lab",
    description:
      "Uncover critical risks with Testriq's exploratory testing services. We combine ISO 29119-2 standards, ISTQB-certified experts, and human intuition to find defects automated tests miss.",
    images: ["https://www.testriq.com/OG/Exploratory-Testing-Twitter.webp"],
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
};

export default function ExploratoryTestingPage() {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node pointing at
  // /services) to 2 canonical items; URL now structurally derived from pathname.
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
