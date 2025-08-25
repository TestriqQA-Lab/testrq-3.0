import React from "react";
import RoboticTestingHeroSection from "@/components/sections/RoboticTestingHeroSection";
import RoboticComprehensiveSlider from "@/components/sections/RoboticComprehensiveSlider";
import RoboticProvenTestingProcess from "@/components/sections/RoboticProvenTestingProcess";
import RoboticWhyChooseTestriq from "@/components/sections/RoboticWhyChooseTestriq";
import RoboticToolsFramework from "@/components/sections/RoboticToolsFramework";
import RoboticFAQs from "@/components/sections/RoboticFAQs";
import RoboticAnyQuestions from "@/components/sections/RoboticAnyQuestions";
import { Metadata } from "next";
import StructuredData, {
  createBreadcrumbSchema,
  roboticTestingSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Robotic Process Automation Testing Services Company",

  description:
    "We are one of the best Robotic Process Automation Testing Services Companies in Mumbai. With expertise in testing Web applications and mobile apps..",
  keywords: [
    "robotic testing services",
    "robot safety testing",
    "industrial robot testing",
    "robot arm validation",
    "autonomous robot QA",
    "performance testing for robots",
    "robot software testing",
    "precision movement testing",
    "robot integration testing",
    "cobot testing",
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
    canonical: "https://www.testriq.com/robotics-testing-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/robotics-testing-services",
    siteName: "Testriq - Robotic Testing Services",
    title:
      "Robotic Testing Services - Safety, Precision & Performance Validation | Testriq",
    description:
      "Get expert-led robotic testing across safety systems, movement accuracy, AI logic, and integration. Trusted by 200+ companies for robotic QA validation.",
    images: [
      {
        url: "/OG/Robotics-Testing-Service-Og.webp",
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
      "Robotic Testing Services - Safety, Precision & Performance Validation | Testriq",
    description:
      "Get expert-led robotic testing across safety systems, movement accuracy, AI logic, and integration. Trusted by 200+ companies for robotic QA validation.",
    images: ["/OG/Robotics-Testing-service-twitter.webp"],
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

export default function RoboticTestingPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "Services", url: "https://www.testriq.com/robotics-testing-services" },
    {
      name: "Robotic Testing Services",
      url: "https://www.testriq.com/robotics-testing-services",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={roboticTestingSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <RoboticTestingHeroSection />
      <RoboticComprehensiveSlider />
      <RoboticProvenTestingProcess />
      <RoboticWhyChooseTestriq />
      <RoboticToolsFramework />
      <RoboticFAQs />
      <RoboticAnyQuestions />
    </div>
  );
}
