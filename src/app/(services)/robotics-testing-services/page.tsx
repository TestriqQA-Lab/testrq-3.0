import React from "react";
import RoboticTestingHeroSection from "@/components/sections/RoboticTestingHeroSection";
import RoboticComprehensiveSlider from "@/components/sections/RoboticComprehensiveSlider";
import RoboticProvenTestingProcess from "@/components/sections/RoboticProvenTestingProcess";
import RoboticWhyChooseTestriq from "@/components/sections/RoboticWhyChooseTestriq";
import RoboticToolsFramework from "@/components/sections/RoboticToolsFramework";
import RoboticFAQs from "@/components/sections/RoboticFAQs";
import RoboticAnyQuestions from "@/components/sections/RoboticAnyQuestions";
import RoboticComplianceTable from "@/components/sections/RoboticComplianceTable";
import RoboticRPAServices from "@/components/sections/RoboticRPAServices";
import { Metadata } from "next";
import StructuredData, {
  createCanonicalBreadcrumb,
  roboticTestingSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Enterprise RPA Testing & QA Services USA | Testriq",

  description:
    "Expert robotics and RPA testing for the 2026 automation era. Specialized in ISO 10218 compliance, Sim2Real validation, and AI-driven path planning for autonomous systems.",
  keywords: [
    "Enterprise RPA Testing Services",
    "Robotic Quality Assurance USA",
    "ISO 10218-1:2026 Compliance",
    "RPA Testing Services Company",
    "Physical AI Testing",
    "Sim2Real Robotics Validation",
    "ROS2 Middleware Testing",
    "Autonomous Agent QA",
    "Collaborative Robot Safety Testing",
    "UIPATH & Blue Prism Validation",
  ],
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/robotics-testing-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/robotics-testing-services",
    siteName: "Testriq - Enterprise RPA & Robotics Testing",
    title:
      "Enterprise RPA Testing & QA Services USA | Testriq",
    description:
      "Expert robotics and RPA testing for the 2026 automation era. Specialized in ISO 10218 compliance, Sim2Real validation, and AI path planning.",
    images: [
      {
        url: "https://www.testriq.com/OG/Robotics-Testing-Service-Og.webp",
        width: 1200,
        height: 630,
        alt: "Robotic Testing Services - Testriq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title:
      "Enterprise RPA Testing & QA Services USA | Testriq",
    description:
      "Expert robotics and RPA testing for the 2026 automation era. Specialized in ISO 10218 compliance, Sim2Real validation, and AI path planning.",
    images: ["https://www.testriq.com/OG/Robotics-Testing-service-twitter.webp"],
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

export default function RoboticTestingPage() {
  // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
  // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL)
  // to 2 canonical items; URL now structurally derived from pathname.
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={roboticTestingSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/robotics-testing-services",
          "Robotic Testing Services"
        )}
      />
      <RoboticTestingHeroSection />
      <RoboticComplianceTable />
      <RoboticComprehensiveSlider />
      <RoboticProvenTestingProcess />
      <RoboticRPAServices />
      <RoboticWhyChooseTestriq />
      <RoboticToolsFramework />
      <RoboticFAQs />
      <RoboticAnyQuestions />
    </div>
  );
}
