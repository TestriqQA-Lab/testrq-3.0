import React from "react";
import ETLTestingHeroSection from "@/components/sections/ETLTestingHeroSection";
import ETLComprehensiveSection from "@/components/sections/ETLComprehensiveSection";
import ETLReadyToEnsureQuality from "@/components/sections/ETLReadyToEnsureQuality";
import ETLComprehensiveSlider from "@/components/sections/ETLComprehensiveSlider";
import ETLProvenTestingProcess from "@/components/sections/ETLProvenTestingProcess";
import ETLWhyChooseTestriq from "@/components/sections/ETLWhyChooseTestriq";
import ETLToolsFramework from "@/components/sections/ETLToolsFramework";
import ETLROISection from "@/components/sections/ETLROISection";
import ETLCaseStudies from "@/components/sections/ETLCaseStudies";
import ETLFAQs from "@/components/sections/ETLFAQs";
import ETLAnyQuestions from "@/components/sections/ETLAnyQuestions";

export default function ETLTestingPage() {
  return (
    <main className="min-h-screen bg-white">
      <ETLTestingHeroSection />
      <ETLComprehensiveSection />
      <ETLReadyToEnsureQuality />
      <ETLComprehensiveSlider />
      <ETLProvenTestingProcess />
      <ETLWhyChooseTestriq />
      <ETLToolsFramework />
      <ETLROISection />
      <ETLCaseStudies />
      <ETLFAQs />
      <ETLAnyQuestions />
    </main>
  );
}

