import React from 'react';
import QADocumentationHeroSection from '@/components/sections/QADocumentationHeroSection';
import QADocumentationComprehensiveSlider from '@/components/sections/QADocumentationComprehensiveSlider';
import QADocumentationProvenTestingProcess from '@/components/sections/QADocumentationProvenTestingProcess';
import QADocumentationWhyChooseTestriq from '@/components/sections/QADocumentationWhyChooseTestriq';
import QADocumentationToolsFramework from '@/components/sections/QADocumentationToolsFramework';
import QADocumentationCaseStudies from '@/components/sections/QADocumentationCaseStudies';
import QADocumentationFAQs from '@/components/sections/QADocumentationFAQs';
import QADocumentationReadyToEnsureQuality from '@/components/sections/QADocumentationReadyToEnsureQuality';

export const metadata = {
  title: 'QA Documentation Services - Professional Quality Assurance Documentation | Testriq',
  description: 'Expert QA documentation services including test plans, test cases, requirements documentation, and quality assurance process documentation. Comprehensive QA documentation solutions for software testing projects.',
  keywords: 'QA documentation services, quality assurance documentation, test plan documentation, test case documentation, requirements documentation, QA process documentation, software testing documentation, quality management documentation',
};

const QADocumentationServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <QADocumentationHeroSection />
      <QADocumentationComprehensiveSlider />
      <QADocumentationProvenTestingProcess />
      <QADocumentationWhyChooseTestriq />
      <QADocumentationToolsFramework />
      <QADocumentationCaseStudies />
      <QADocumentationFAQs />
      <QADocumentationReadyToEnsureQuality />
    </div>
  );
};

export default QADocumentationServicesPage;

