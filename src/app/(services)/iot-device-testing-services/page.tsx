import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema, webAppTestingServiceSchema } from "@/components/seo/StructuredData";


export const metadata: Metadata = {
  title: "IoT Testing Services for Smart Devices",

  description: "Testriq offers end-to-end IoT testing services for connected devices, ensuring secure, scalable, and high-performance applications across ecosystems.",
  keywords: [
    "IoT device testing",
    "IoT testing services",
    "smart device testing",
    "IoT performance testing",
    "IoT security testing",
    "connected device QA",
    "protocol testing",
    "sensor validation",
    "cloud integration testing",
    "industrial IoT testing"
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    metadataBase: new URL('https://testrq-3-0.vercel.app/'),
  alternates: {
    canonical: 'https://testriq.com/iot-appliances-and-apps-testing-services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/iot-device-testing-services',
    siteName: 'Testriq - IoT Device Testing Services',
    title: 'IoT Device Testing Services - Secure & Reliable QA for Connected Devices | Testriq',
    description: 'Ensure your IoT devices deliver seamless connectivity and robust security. Get expert testing across WiFi, Bluetooth, Zigbee, sensors, and cloud integrations.',
    images: [
      {
        url: '/OG/IoT-Testing-Services-og.webp',
        width: 1200,
        height: 630,
        alt: 'IoT Device Testing Services - Testriq',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'IoT Device Testing Services - Secure & Reliable QA for Connected Devices | Testriq',
    description: 'Ensure your IoT devices deliver seamless connectivity and robust security. Get expert testing across WiFi, Bluetooth, Zigbee, sensors, and cloud integrations.',
    images: ['/OG/Iot-Testing_services-twitter.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'LXeSv6xxgAa1jB9JlWwO9ysJ1FNvWzgN3i3GyQs2AD0',
    yandex: 'ff703971283d110e',
    yahoo: '0A67349B8CD11BF71173B38572028507',
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

const IoTROISection = dynamic(
  () => import("@/components/sections/IoTROISection"),
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

export default function IoTDeviceTesting() {
    const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/iot-device-testing-services" },
    { name: "IoT Testing Service", url: "https://testriq.com/iot-device-testing-services" }
  ];
  
  return (
    <div>
           <StructuredData data={webAppTestingServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <IoTTestingHeroSection />
        <IoTComprehensiveSlider />
        <IoTCardSlider />
        <IoTProvenTestingProcess />
        <IoTWhyChooseTestriq />
        <IoTToolsFramework />
        <IoTROISection />
        <IoTCaseStudies />
        <IoTFAQs />
        <IoTAnyQuestions />
      </MainLayout>
    </div>
  );
}
