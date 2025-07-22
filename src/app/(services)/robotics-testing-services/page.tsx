import React from "react";
import RoboticTestingHeroSection from "@/components/sections/RoboticTestingHeroSection";
import RoboticComprehensiveSection from "@/components/sections/RoboticComprehensiveSection";
import RoboticReadyToEnsureQuality from "@/components/sections/RoboticReadyToEnsureQuality";
import RoboticComprehensiveSlider from "@/components/sections/RoboticComprehensiveSlider";
import RoboticProvenTestingProcess from "@/components/sections/RoboticProvenTestingProcess";
import RoboticWhyChooseTestriq from "@/components/sections/RoboticWhyChooseTestriq";
import RoboticToolsFramework from "@/components/sections/RoboticToolsFramework";
import RoboticROISection from "@/components/sections/RoboticROISection";
import RoboticCaseStudies from "@/components/sections/RoboticCaseStudies";
import RoboticFAQs from "@/components/sections/RoboticFAQs";
import RoboticAnyQuestions from "@/components/sections/RoboticAnyQuestions";

export default function RoboticTestingPage() {
  return (
    <div className="min-h-screen bg-white">
      <RoboticTestingHeroSection />
      <RoboticComprehensiveSection />
      <RoboticReadyToEnsureQuality />
      <RoboticComprehensiveSlider />
      <RoboticProvenTestingProcess />
      <RoboticWhyChooseTestriq />
      <RoboticToolsFramework />
      <RoboticROISection />
      <RoboticCaseStudies />
      <RoboticFAQs />
      <RoboticAnyQuestions />
    </div>
  );
}

