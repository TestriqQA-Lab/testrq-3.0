import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import StructuredData, {
  createBreadcrumbSchema,
  iotDeviceTestingSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "IoT Testing Services: Firmware, MQTT & Security | Testriq",
  description:
    "Expert IoT testing services for the 2026 connected ecosystem. Specialized in 5G-edge resilience, firmware security (ISO 27404), and protocol compatibility (MQTT/Zigbee) for 21.1B+ devices.",
  keywords: [
    "IoT Testing Services",
    "Firmware Security Testing",
    "MQTT Protocol Testing",
    "5G-Edge IoT Resilience",
    "ISO/IEC 27404 Compliance",
    "ETSI EN 303 645 IoT Security",
    "Smart Device Quality Assurance",
    "Industrial IoT Penetration Testing",
    "FOTA Update Validation",
    "Zettabyte Scale Performance Testing",
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
    canonical: "https://www.testriq.com/iot-device-testing-services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/iot-device-testing-services",
    siteName: "Testriq - Global IoT Testing Services",
    title: "IoT Testing Services: Firmware, MQTT & Security | Testriq",
    description:
      "Ensuring reliability in a 21.1 Billion connected ecosystem. Expert smart device QA, firmware audits, and 5G-edge performance stress testing.",
    images: [
      {
        url: "/OG/IoT-Testing-Services-og.webp",
        width: 1200,
        height: 630,
        alt: "Global IoT Testing Services - Testriq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "IoT Testing Services: Firmware, MQTT & Security | Testriq",
    description:
      "Expert IoT QA for the 2026 landscape. Specialized in Firmware, Protocols, and Cyber Resilience Act compliance.",
    images: ["/OG/Iot-Testing_services-twitter.webp"],
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

const IoTTestingHeroSection = dynamic(
  () => import("@/components/sections/IoTTestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const IoTProvenTestingProcess = dynamic(
  () => import("@/components/sections/IoTProvenTestingProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const IoTWhyChooseTestriq = dynamic(
  () => import("@/components/sections/IoTWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const IoTCaseStudies = dynamic(
  () => import("@/components/sections/IoTCaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const IoTFAQs = dynamic(() => import("@/components/sections/IoTFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const IoTAnyQuestions = dynamic(
  () => import("@/components/sections/IoTAnyQuestions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const IoTComprehensiveSlider = dynamic(
  () => import("@/components/sections/IoTComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const IoTCardSlider = dynamic(
  () => import("@/components/sections/IoTCardSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const IoTToolsFramework = dynamic(
  () => import("@/components/sections/IoTToolsFramework"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const IoTComplianceTable = dynamic(
  () => import("@/components/sections/IoTComplianceTable"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function IoTDeviceTesting() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    {
      name: "Services",
      url: "https://www.testriq.com/iot-device-testing-services",
    },
    {
      name: "IoT Testing Service",
      url: "https://www.testriq.com/iot-device-testing-services",
    },
  ];

  return (
    <div>
      <StructuredData data={iotDeviceTestingSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <IoTTestingHeroSection />
        <IoTComprehensiveSlider />
        <IoTCardSlider />
        <IoTProvenTestingProcess />
        <IoTComplianceTable />
        <IoTWhyChooseTestriq />
        <IoTToolsFramework />
        <IoTCaseStudies />
        <IoTFAQs />
        <IoTAnyQuestions />
      </MainLayout>
    </div>
  );
}
