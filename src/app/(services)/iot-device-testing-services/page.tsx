import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
  createCanonicalBreadcrumb,
  iotDeviceTestingSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import IoTTestingHeroSection from "@/components/sections/IoTTestingHeroSection";
import IoTComprehensiveSlider from "@/components/sections/IoTComprehensiveSlider";
import IoTCardSlider from "@/components/sections/IoTCardSlider";
import IoTProvenTestingProcess from "@/components/sections/IoTProvenTestingProcess";
import IoTComplianceTable from "@/components/sections/IoTComplianceTable";
import IoTWhyChooseTestriq from "@/components/sections/IoTWhyChooseTestriq";
import IoTToolsFramework from "@/components/sections/IoTToolsFramework";
import IoTCaseStudies from "@/components/sections/IoTCaseStudies";
import IoTFAQs from "@/components/sections/IoTFAQs";
import IoTAnyQuestions from "@/components/sections/IoTAnyQuestions";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/iot-device-testing-services",
    title: "IoT Testing Services | Firmware, MQTT & Smart Device QA | Testriq",
    description:
      "Validate connected devices with Testriq's IoT testing services. Firmware security (ISO 27404), MQTT/Zigbee compatibility, and 5G-edge resilience testing.",
    ogImage: {
      url: "https://www.testriq.com/OG/IoT-Testing-Services-og.webp",
      width: 1200,
      height: 630,
      alt: "Global IoT Testing Services - Testriq",
      type: "image/webp",
    },
    keywords: [
      "iot testing services",
      "firmware security testing",
      "mqtt protocol testing",
      "5g-edge iot resilience",
      "iso/iec 27404 compliance",
      "etsi en 303 645 iot security",
      "smart device quality assurance",
      "industrial iot penetration testing",
      "fota update validation",
      "zettabyte scale performance testing",
    ],
  });
}

export default function IoTDeviceTesting() {
  // TODO(seo phase-4): Migrated from static `export const metadata` to
  // generateMetadata + buildPageMetadata. Double-brand title fixed via
  // title.absolute. Title separator normalized from ":" to "|" for
  // consistency with the rest of the site. Description rewritten — was
  // ~189 chars with "2026 connected ecosystem" + "21.1B+ devices"
  // anchors, now 153, action-verb start, surfaces ISO 27404 +
  // protocols. twitter:image unified with og:image (was a separate
  // Iot-Testing_services-twitter.webp with mixed underscore/casing).
  // ogImage.type "image/webp" added. Keywords lowercased. 10 dynamic()
  // imports converted to direct ES imports. Breadcrumb already migrated
  // in PR-3 — unchanged.
  return (
    <div>
      <StructuredData data={iotDeviceTestingSchema} />
      <StructuredData
        data={createCanonicalBreadcrumb(
          "/iot-device-testing-services",
          "IoT Testing Service"
        )}
      />
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
