import React from "react";
import IoTHeroSection from "@/components/sections/IoTApplianceHeroSection";
import IoTChallengesSection from "@/components/sections/IoTApplianceChallengesSection";
import IoTTestingServicesSection from "@/components/sections/IoTApplianceTestingServicesSection";
import IoTTestingProcessSection from "@/components/sections/IoTApplianceTestingProcessSection";
import IoTEcosystemSection from "@/components/sections/IoTApplianceEcosystemSection";
import IoTToolsFrameworkSection from "@/components/sections/IoTApplianceToolsFrameworkSection";
import IoTCaseStudiesSection from "@/components/sections/IoTApplianceCaseStudiesSection";
import IoTFAQSection from "@/components/sections/IoTApplianceFAQSection";
import IoTContactSection from "@/components/sections/IoTApplianceContactSection";
import { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema, iotTestingServiceSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "IoT Testing Services for Smart Devices",
  description: "Testriq offers end-to-end IoT testing services for connected devices, ensuring secure, scalable, and high-performance applications across ecosystems.",
  keywords: [
    "IoT testing",
    "smart device testing",
    "connected device QA",
    "IoT QA services",
    "edge computing testing",
    "IoT security testing",
    "IoT protocol validation",
    "IoT cloud integration testing",
    "IoT performance testing",
    "IoT automation testing"
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://testrq-3-0.vercel.app/"),
  alternates: {
    canonical: "https://testriq.com/iot-appliances-and-apps-testing-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://testriq.com/iot-appliances-and-apps-testing-services",
    siteName: "Testriq - Professional Software Testing Services",
    title: "IoT Testing Solutions – Smart Device & Connected App QA | Testriq",
    description: "Ensure flawless performance, connectivity, and security across your IoT ecosystem. Testriq offers specialized IoT testing services for smart devices, edge computing, protocol validation, and cloud integration.",
    images: [
      {
        url: "/OG/IoT-Testing-Service-Og.webp",
        width: 1200,
        height: 630,
        alt: "IoT Testing Solutions by Testriq"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "IoT Testing Solutions – Smart Device & Connected App QA | Testriq",
    description: "Testriq ensures end-to-end QA for IoT systems including devices, edge, cloud, and mobile apps. Reduce latency, improve uptime, and secure your IoT ecosystem.",
    images: ["/OG/IoT-Testing-Service-Twitter.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: 'LXeSv6xxgAa1jB9JlWwO9ysJ1FNvWzgN3i3GyQs2AD0',
    yandex: 'ff703971283d110e',
    yahoo: '0A67349B8CD11BF71173B38572028507', 
  }
};


const IoTTestingPage: React.FC = () => {
   const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/iot-appliances-and-apps-testing-servicess" },
    { name: "iot Testing Service", url: "https://testriq.com/iot-appliances-and-apps-testing-servicess" }
  ];

  return (
    <div>
            <StructuredData data={iotTestingServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
    <main className="min-h-screen bg-white">
      <IoTHeroSection />
      <IoTChallengesSection />
      <IoTTestingServicesSection />
      <IoTTestingProcessSection />
      <IoTEcosystemSection />
      <IoTToolsFrameworkSection />
      <IoTCaseStudiesSection />
      <IoTFAQSection />
      <IoTContactSection />
    </main>
    </div>
  );
};

export default IoTTestingPage;

