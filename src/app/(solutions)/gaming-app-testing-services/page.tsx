import React from "react";
import GamingHeroSection from "@/components/sections/GamingHeroSection";
import GamingChallengesSection from "@/components/sections/GamingChallengesSection";
import GamingTestingServicesSection from "@/components/sections/GamingTestingServicesSection";
import GamingTestingProcessSection from "@/components/sections/GamingTestingProcessSection";
import GamingPlatformsSection from "@/components/sections/GamingPlatformsSection";
import GamingToolsFrameworkSection from "@/components/sections/GamingToolsFrameworkSection";
import GamingCaseStudiesSection from "@/components/sections/GamingCaseStudiesSection";
import GamingROISection from "@/components/sections/GamingROISection";
import GamingFAQSection from "@/components/sections/GamingFAQSection";
import GamingContactSection from "@/components/sections/GamingContactSection";

export const metadata = {
  title: "Gaming App Testing Solutions | Mobile Game QA & Performance Testing | Testriq",
  description: "Professional gaming app testing services for mobile games, PC games, and console platforms. Ensure flawless gameplay, optimal performance, and cross-platform compatibility with expert QA testing.",
  keywords: "gaming app testing, mobile game QA, game performance testing, multiplayer testing, cross-platform gaming, Unity testing, Unreal Engine testing, console game testing, AR VR game testing",
  openGraph: {
    title: "Gaming App Testing Solutions | Testriq",
    description: "Comprehensive QA testing services for gaming applications, ensuring exceptional player experiences, optimal performance, and bug-free gameplay across all platforms.",
    type: "website",
  },
};

const GamingTestingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <GamingHeroSection />
      <GamingChallengesSection />
      <GamingTestingServicesSection />
      <GamingTestingProcessSection />
      <GamingPlatformsSection />
      <GamingToolsFrameworkSection />
      <GamingCaseStudiesSection />
      <GamingROISection />
      <GamingFAQSection />
      <GamingContactSection />
    </main>
  );
};

export default GamingTestingPage;

