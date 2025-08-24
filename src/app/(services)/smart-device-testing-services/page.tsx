import React from "react";
import SmartDeviceTestingHeroSection from "@/components/sections/SmartDeviceTestingHeroSection";
import SmartDeviceComprehensiveSlider from "@/components/sections/SmartDeviceComprehensiveSlider";
import SmartDeviceProvenTestingProcess from "@/components/sections/SmartDeviceProvenTestingProcess";
import SmartDeviceWhyChooseTestriq from "@/components/sections/SmartDeviceWhyChooseTestriq";
import SmartDeviceToolsFramework from "@/components/sections/SmartDeviceToolsFramework";
import SmartDeviceCaseStudies from "@/components/sections/SmartDeviceCaseStudies";
import SmartDeviceFAQs from "@/components/sections/SmartDeviceFAQs";
import SmartDeviceAnyQuestions from "@/components/sections/SmartDeviceAnyQuestions";
import { Metadata } from "next";
import StructuredData, {
  createBreadcrumbSchema,
  smartDeviceTestingSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Smart Mobile Device Testing Services Company",

  description:
    "We are one of the best Smart Mobile Device Testing Services Company in Mumbai. With expertise in testing Web applications and mobile apps. Contact Us Now!",
  keywords: [
    "smart device testing",
    "IoT device testing",
    "wearable device testing",
    "smart home QA",
    "connected device testing",
    "smart appliance testing",
    "Bluetooth testing",
    "NFC testing",
    "device performance testing",
    "QA for smart devices",
    "smart device automation testing",
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
    canonical: "https://testriq.com/smart-device-testing-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://testriq.com/smart-device-testing-services",
    siteName: "Testriq - Professional Software Testing Services",
    title:
      "Smart Device Testing Services | IoT, Wearables, Smart Home QA - Testriq",
    description:
      "Comprehensive smart device testing services for wearables, smart home devices, and IoT ecosystems. Validate connectivity, performance, security, and user experience with Testriq's expert QA services.",
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
      "Smart Device Testing Services | IoT, Wearables, Smart Home QA - Testriq",
    description:
      "Comprehensive smart device testing services for wearables, smart home devices, and IoT ecosystems. Validate connectivity, performance, security, and user experience with Testriq's expert QA services.",
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
    { name: "Home", url: "https://testriq.com/" },
    {
      name: "Services",
      url: "https://testriq.com/smart-device-testing-services",
    },
    {
      name: "smart Device Testing Service",
      url: "https://testriq.com/smart-device-testing-services",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={smartDeviceTestingSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <SmartDeviceTestingHeroSection />
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
