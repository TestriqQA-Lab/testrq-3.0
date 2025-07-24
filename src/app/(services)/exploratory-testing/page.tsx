import React from "react";
import ExploratoryTestingHeroSection from "@/components/sections/ExploratoryTestingHeroSection";
import ExploratoryComprehensiveSlider from "@/components/sections/ExploratoryComprehensiveSlider";
import ExploratoryProvenTestingProcess from "@/components/sections/ExploratoryProvenTestingProcess";
import ExploratoryWhyChooseTestriq from "@/components/sections/ExploratoryWhyChooseTestriq";
import ExploratoryToolsFramework from "@/components/sections/ExploratoryToolsFramework";
import ExploratoryROISection from "@/components/sections/ExploratoryROISection";
import ExploratoryCaseStudies from "@/components/sections/ExploratoryCaseStudies";
import ExploratoryFAQs from "@/components/sections/ExploratoryFAQs";
import ExploratoryAnyQuestions from "@/components/sections/ExploratoryAnyQuestions";

export default function ExploratoryTestingPage() {
  return (
    <div className="min-h-screen bg-white">
      <ExploratoryTestingHeroSection />
      <ExploratoryComprehensiveSlider />
      <ExploratoryProvenTestingProcess />
      <ExploratoryWhyChooseTestriq />
      <ExploratoryToolsFramework />
      <ExploratoryROISection />
      <ExploratoryCaseStudies />
      <ExploratoryFAQs />
      <ExploratoryAnyQuestions />
    </div>
  );
}
