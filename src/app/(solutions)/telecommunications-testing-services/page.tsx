import React from "react";
import TelecomHeroSection from "@/components/sections/TelecomHeroSection";
import TelecomChallengesSection from "@/components/sections/TelecomChallengesSection";
import TelecomTestingServicesSection from "@/components/sections/TelecomTestingServicesSection";
import TelecomToolsFrameworksSection from "@/components/sections/TelecomToolsFrameworksSection";
import TelecomNetworkTestingSection from "@/components/sections/TelecomNetworkTestingSection";
import TelecomCaseStudiesSection from "@/components/sections/TelecomCaseStudiesSection";
import TelecomROISection from "@/components/sections/TelecomROISection";
import TelecomFAQSection from "@/components/sections/TelecomFAQSection";
import TelecomContactSection from "@/components/sections/TelecomContactSection";

export const metadata = {
  title: "Telecommunication Testing Solutions | 5G & Network QA Services | Testriq",
  description: "Expert telecommunication testing services for 5G networks, IoT connectivity, VoIP systems, and telecom applications. Ensure seamless connectivity, optimal performance, and network reliability.",
  keywords: "telecommunication testing, 5G testing, network testing, VoIP testing, IoT connectivity testing, telecom QA, wireless testing, network performance testing, telecom automation",
  openGraph: {
    title: "Telecommunication Testing Solutions | Testriq",
    description: "Comprehensive QA testing services for telecommunications, ensuring reliable networks, seamless connectivity, and optimal performance across all telecom platforms.",
    type: "website",
  },
};

const TelecommunicationTestingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <TelecomHeroSection />
      <TelecomChallengesSection />
      <TelecomTestingServicesSection />
      <TelecomToolsFrameworksSection />
      <TelecomNetworkTestingSection />
      <TelecomCaseStudiesSection />
      <TelecomROISection />
      <TelecomFAQSection />
      <TelecomContactSection />
    </main>
  );
};

export default TelecommunicationTestingPage;

