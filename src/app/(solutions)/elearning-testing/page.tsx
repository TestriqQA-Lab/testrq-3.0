import React from "react";
import ElearningHeroSection from "@/components/sections/ElearningHeroSection";
import ElearningChallengesSection from "@/components/sections/ElearningChallengesSection";
import ElearningTestingServicesSection from "@/components/sections/ElearningTestingServicesSection";
import ElearningPlatformsSection from "@/components/sections/ElearningPlatformsSection";
import ElearningAccessibilitySection from "@/components/sections/ElearningAccessibilitySection";
import ElearningPerformanceSection from "@/components/sections/ElearningPerformanceSection";
import ElearningCaseStudiesSection from "@/components/sections/ElearningCaseStudiesSection";
import ElearningROISection from "@/components/sections/ElearningROISection";
import ElearningFAQSection from "@/components/sections/ElearningFAQSection";
import ElearningContactSection from "@/components/sections/ElearningContactSection";

export const metadata = {
  title: "E-Learning Testing Solutions | LMS & Educational Platform QA | Testriq",
  description: "Expert e-learning testing services for LMS platforms, online courses, and educational applications. Ensure seamless learning experiences, accessibility compliance, and optimal performance.",
  keywords: "e-learning testing, LMS testing, online education QA, educational platform testing, accessibility testing, SCORM testing, learning management system",
  openGraph: {
    title: "E-Learning Testing Solutions | Testriq",
    description: "Comprehensive QA testing services for e-learning platforms, ensuring accessible, engaging, and high-performance educational experiences.",
    type: "website",
  },
};

const ElearningTestingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <ElearningHeroSection />
      <ElearningChallengesSection />
      <ElearningTestingServicesSection />
      <ElearningPlatformsSection />
      <ElearningAccessibilitySection />
      <ElearningPerformanceSection />
      <ElearningCaseStudiesSection />
      <ElearningROISection />
      <ElearningFAQSection />
      <ElearningContactSection />
    </main>
  );
};

export default ElearningTestingPage;

