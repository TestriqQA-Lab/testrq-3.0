import React from "react";
import SmartDeviceTestingHeroSection from "@/components/sections/SmartDeviceTestingHeroSection";
import SmartDeviceComprehensiveSlider from "@/components/sections/SmartDeviceComprehensiveSlider";
import SmartDeviceProvenTestingProcess from "@/components/sections/SmartDeviceProvenTestingProcess";
import SmartDeviceWhyChooseTestriq from "@/components/sections/SmartDeviceWhyChooseTestriq";
import SmartDeviceToolsFramework from "@/components/sections/SmartDeviceToolsFramework";
import SmartDeviceCaseStudies from "@/components/sections/SmartDeviceCaseStudies";
import SmartDeviceFAQs from "@/components/sections/SmartDeviceFAQs";
import SmartDeviceAnyQuestions from "@/components/sections/SmartDeviceAnyQuestions";
import SmartDeviceComplianceTable from "@/components/sections/SmartDeviceComplianceTable";
import { Metadata } from "next";
import StructuredData, {
  createBreadcrumbSchema,
  smartDeviceTestingSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Enterprise Smart Device & IoT Testing Services USA | Testriq",

  description:
    "Expert-led smart device and IoT testing services for the 2026 connected era. Specialized in ISO 29119-3 compliance, security penetration testing, network stability (5G/Wi-Fi 6), and battery life optimization for wearables and IoT ecosystems.",
  keywords: [
    "Enterprise Smart Device Testing Services",
    "IoT Device Testing USA",
    "ISO 29119-3 Compliance",
    "Wearable Device QA",
    "Smart Home Device Validation",
    "5G & Protocol Testing",
    "IoT Security Penetration Testing",
    "Battery Life Optimization",
    "Digital Twin IoT Simulation",
    "Machine-to-Machine Communication Testing",
    "Zigbee & MQTT Validation",
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
    canonical: "https://www.testriq.com/smart-device-testing-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/smart-device-testing-services",
    siteName: "Testriq - Enterprise Smart Device Testing",
    title:
      "Enterprise Smart Device & IoT Testing Services USA | Testriq",
    description:
      "Expert-led smart device and IoT testing services for the 2026 connected era. Specialized in ISO 29119-3 compliance, security penetration testing, network stability (5G/Wi-Fi 6), and battery life optimization.",
    images: [
      {
        url: "/OG/Smart-Device-Testing-Service-Og.webp",
        width: 1200,
        height: 630,
        alt: "Smart Device Testing Services - Testriq QA Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title:
      "Enterprise Smart Device & IoT Testing Services USA | Testriq",
    description:
      "Expert-led smart device and IoT testing services for the 2026 connected era. Specialized in ISO 29119-3 compliance, security penetration testing, network stability (5G/Wi-Fi 6), and battery life optimization.",
    images: ["/OG/Telecommunication-Testing-Service-Twitter.webp"],
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

export default function SmartDeviceTestingPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    {
      name: "Services",
      url: "https://www.testriq.com/smart-device-testing-services",
    },
    {
      name: "smart Device Testing Service",
      url: "https://www.testriq.com/smart-device-testing-services",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={smartDeviceTestingSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <SmartDeviceTestingHeroSection />
      <SmartDeviceComplianceTable />
      <SmartDeviceComprehensiveSlider />
      <SmartDeviceProvenTestingProcess />
      <SmartDeviceWhyChooseTestriq />
      <SmartDeviceToolsFramework />
      <SmartDeviceCaseStudies />
      <SmartDeviceFAQs />
      <SmartDeviceAnyQuestions />
    </div>
  );
}
