import React from 'react';
import SoftwareTestingGuideHeroSection from '@/components/sections/SoftwareTestingGuideHeroSection';
import SoftwareTestingGuideComprehensiveSection from '@/components/sections/SoftwareTestingGuideComprehensiveSection';
import SoftwareTestingGuideComprehensiveSlider from '@/components/sections/SoftwareTestingGuideComprehensiveSlider';
import SoftwareTestingGuideProvenTestingProcess from '@/components/sections/SoftwareTestingGuideProvenTestingProcess';
import SoftwareTestingGuideWhyChooseTestriq from '@/components/sections/SoftwareTestingGuideWhyChooseTestriq';
import SoftwareTestingGuideToolsFramework from '@/components/sections/SoftwareTestingGuideToolsFramework';
import SoftwareTestingGuideCaseStudies from '@/components/sections/SoftwareTestingGuideCaseStudies';
import SoftwareTestingGuideFAQs from '@/components/sections/SoftwareTestingGuideFAQs';
import SoftwareTestingGuideReadyToEnsureQuality from '@/components/sections/SoftwareTestingGuideReadyToEnsureQuality';

export const metadata = {
  title: 'Complete Software Testing Guide - Best Practices, Types & Methodologies | Testriq',
  description: 'Comprehensive software testing guide covering testing types, methodologies, best practices, tools, and frameworks. Learn manual testing, automation testing, performance testing, and more.',
  keywords: 'software testing guide, testing methodologies, manual testing, automation testing, performance testing, security testing, test planning, quality assurance, software testing best practices, testing tools',
};

const SoftwareTestingGuidePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SoftwareTestingGuideHeroSection />
      <SoftwareTestingGuideComprehensiveSection />
      <SoftwareTestingGuideComprehensiveSlider />
      <SoftwareTestingGuideProvenTestingProcess />
      <SoftwareTestingGuideWhyChooseTestriq />
      <SoftwareTestingGuideToolsFramework />
      <SoftwareTestingGuideCaseStudies />
      <SoftwareTestingGuideFAQs />
      <SoftwareTestingGuideReadyToEnsureQuality />
    </div>
  );
};

export default SoftwareTestingGuidePage;

