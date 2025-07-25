import React from "react";
import LaunchFastQAHeroSection from "@/components/sections/LaunchFastQAHeroSection";
import LaunchFastComprehensiveSlider from "@/components/sections/LaunchFastComprehensiveSlider";
import LaunchFastProvenTestingProcess from "@/components/sections/LaunchFastProvenTestingProcess";
import LaunchFastWhyChooseTestriq from "@/components/sections/LaunchFastWhyChooseTestriq";
import LaunchFastToolsFramework from "@/components/sections/LaunchFastToolsFramework";
import LaunchFastROISection from "@/components/sections/LaunchFastROISection";
import LaunchFastCaseStudies from "@/components/sections/LaunchFastCaseStudies";
import LaunchFastFAQs from "@/components/sections/LaunchFastFAQs";
import LaunchFastAnyQuestions from "@/components/sections/LaunchFastAnyQuestions";

export default function LaunchFastQAPage() {
  return (
    <div className="min-h-screen bg-white">
      <LaunchFastQAHeroSection />
      <LaunchFastComprehensiveSlider />
      <LaunchFastProvenTestingProcess />
      <LaunchFastWhyChooseTestriq />
      <LaunchFastToolsFramework />
      <LaunchFastROISection />
      <LaunchFastCaseStudies />
      <LaunchFastFAQs />
      <LaunchFastAnyQuestions />
    </div>
  );
}
