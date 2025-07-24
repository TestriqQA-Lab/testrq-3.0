import React from "react";
import SmartDeviceTestingHeroSection from "@/components/sections/SmartDeviceTestingHeroSection";
import SmartDeviceComprehensiveSlider from "@/components/sections/SmartDeviceComprehensiveSlider";
import SmartDeviceProvenTestingProcess from "@/components/sections/SmartDeviceProvenTestingProcess";
import SmartDeviceWhyChooseTestriq from "@/components/sections/SmartDeviceWhyChooseTestriq";
import SmartDeviceToolsFramework from "@/components/sections/SmartDeviceToolsFramework";
import SmartDeviceROISection from "@/components/sections/SmartDeviceROISection";
import SmartDeviceCaseStudies from "@/components/sections/SmartDeviceCaseStudies";
import SmartDeviceFAQs from "@/components/sections/SmartDeviceFAQs";
import SmartDeviceAnyQuestions from "@/components/sections/SmartDeviceAnyQuestions";

export default function SmartDeviceTestingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SmartDeviceTestingHeroSection />
      <SmartDeviceComprehensiveSlider />
      <SmartDeviceProvenTestingProcess />
      <SmartDeviceWhyChooseTestriq />
      <SmartDeviceToolsFramework />
      <SmartDeviceROISection />
      <SmartDeviceCaseStudies />
      <SmartDeviceFAQs />
      <SmartDeviceAnyQuestions />
    </div>
  );
}
