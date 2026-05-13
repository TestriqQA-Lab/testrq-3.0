import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import StructuredData, {
  createCanonicalBreadcrumb,
  dataAnalysisServiceSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Analyze QA Data & Testing Metrics | Testriq",

  description:
    "Testriq drives prescriptive intelligence through advanced data evaluation. We bridge the gap between data silos and business goals with ISO 8000-aligned analytics and diagnostic modeling.",
  keywords: [
    "data analysis services",
    "QA data analytics",
    "prescriptive intelligence",
    "ISO 8000 data quality",
    "testing metrics analysis",
    "predictive modeling for QA",
    "ETL process services",
    "zebabtyte scalability analytics",
    "machine learning integration",
    "diagnostic analytics",
  ],
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/data-analysis-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/data-analysis-services",
    siteName: "Testriq - Professional Software Testing Services",
    title:
      "Professional Data Analysis Services - Analytics, Insights & Reporting | Testriq",
    description:
      "Transform your raw data into actionable business insights with Testriq's professional data analysis services. We deliver descriptive, predictive, and prescriptive analytics using advanced tools and expert data scientists.",
    images: [
      {
        url: "https://www.testriq.com/OG/Data-Analysis-Service-Og.webp",
        width: 1200,
        height: 630,
        alt: "Testriq - Professional Data Analysis Services",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title:
      "Professional Data Analysis Services - Analytics, Insights & Reporting | Testriq",
    description:
      "Transform your raw data into actionable business insights with Testriq's professional data analysis services. We deliver descriptive, predictive, and prescriptive analytics using advanced tools and expert data scientists.",
    images: ["https://www.testriq.com/OG/Data-Analysis-Service-Twitter.webp"],
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

const DataAnalysisHeroSection = dynamic(
  () => import("@/components/sections/DataAnalysisHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DataAnalysisChallenges = dynamic(
  () => import("@/components/sections/DataAnalysisChallenges"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DataAnalysisComprehensiveSlider = dynamic(
  () => import("@/components/sections/DataAnalysisComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DataAnalysisProvenTestingProcess = dynamic(
  () => import("@/components/sections/DataAnalysisProvenTestingProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DataAnalysisWhyChooseTestriq = dynamic(
  () => import("@/components/sections/DataAnalysisWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DataAnalysisToolsFramework = dynamic(
  () => import("@/components/sections/DataAnalysisToolsFramework"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

// import DataAnalysisCaseStudies from "@/components/sections/DataAnalysisCaseStudies";

const DataAnalysisFAQs = dynamic(
  () => import("@/components/sections/DataAnalysisFAQs"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DataAnalysisReadyToEnsureQuality = dynamic(
  () => import("@/components/sections/DataAnalysisReadyToEnsureQuality"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);




const DataAnalysisPage = () => {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL)
  // to 2 canonical items; URL now structurally derived from pathname.
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={dataAnalysisServiceSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/data-analysis-services",
          "Data Analysis Services"
        )}
      />
      <DataAnalysisHeroSection />
      <DataAnalysisChallenges />
      <DataAnalysisComprehensiveSlider />
      <DataAnalysisProvenTestingProcess />
      <DataAnalysisWhyChooseTestriq />
      <DataAnalysisToolsFramework />
      {/* <DataAnalysisCaseStudies /> */}
      <DataAnalysisFAQs />
      <DataAnalysisReadyToEnsureQuality />
    </div>
  );
};

export default DataAnalysisPage;
