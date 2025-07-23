import React from "react";
import IoTHeroSection from "@/components/sections/IoTApplianceHeroSection";
import IoTChallengesSection from "@/components/sections/IoTApplianceChallengesSection";
import IoTTestingServicesSection from "@/components/sections/IoTApplianceTestingServicesSection";
import IoTTestingProcessSection from "@/components/sections/IoTApplianceTestingProcessSection";
import IoTEcosystemSection from "@/components/sections/IoTApplianceEcosystemSection";
import IoTToolsFrameworkSection from "@/components/sections/IoTApplianceToolsFrameworkSection";
import IoTCaseStudiesSection from "@/components/sections/IoTApplianceCaseStudiesSection";
import IoTROISection from "@/components/sections/IoTApplianceROISection";
import IoTFAQSection from "@/components/sections/IoTApplianceFAQSection";
import IoTContactSection from "@/components/sections/IoTApplianceContactSection";

export const metadata = {
  title: "IoT Testing Solutions | Smart Device & Connected App QA Testing | Testriq",
  description: "Expert IoT testing services for connected devices, smart appliances, and IoT applications. Ensure seamless connectivity, security, and performance across edge-to-cloud ecosystems.",
  keywords: "IoT testing services, connected device testing, smart device QA, IoT security testing, edge computing testing, industrial IoT testing, smart home testing, IoT automation testing",
  openGraph: {
    title: "IoT Testing Solutions | Testriq",
    description: "Comprehensive QA testing services for IoT devices and applications, ensuring reliable connectivity, robust security, and optimal performance in connected ecosystems.",
    type: "website",
  },
};

const IoTTestingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <IoTHeroSection />
      <IoTChallengesSection />
      <IoTTestingServicesSection />
      <IoTTestingProcessSection />
      <IoTEcosystemSection />
      <IoTToolsFrameworkSection />
      <IoTCaseStudiesSection />
      <IoTROISection />
      <IoTFAQSection />
      <IoTContactSection />
    </main>
  );
};

export default IoTTestingPage;

