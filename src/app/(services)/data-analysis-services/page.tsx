import React from 'react';
import DataAnalysisHeroSection from '@/components/sections/DataAnalysisHeroSection';
import DataAnalysisComprehensiveSection from '@/components/sections/DataAnalysisComprehensiveSection';
import DataAnalysisComprehensiveSlider from '@/components/sections/DataAnalysisComprehensiveSlider';
import DataAnalysisProvenTestingProcess from '@/components/sections/DataAnalysisProvenTestingProcess';
import DataAnalysisWhyChooseTestriq from '@/components/sections/DataAnalysisWhyChooseTestriq';
import DataAnalysisToolsFramework from '@/components/sections/DataAnalysisToolsFramework';
import DataAnalysisCaseStudies from '@/components/sections/DataAnalysisCaseStudies';
import DataAnalysisFAQs from '@/components/sections/DataAnalysisFAQs';
import DataAnalysisReadyToEnsureQuality from '@/components/sections/DataAnalysisReadyToEnsureQuality';

export const metadata = {
  title: 'Professional Data Analysis Services - Analytics, Insights & Reporting | Testriq',
  description: 'Expert data analysis services including descriptive analytics, predictive analytics, data visualization, and business intelligence. Transform your data into actionable insights.',
  keywords: 'data analysis services, data analytics, business intelligence, predictive analytics, descriptive analytics, data visualization, data science, statistical analysis, data insights, reporting services',
};

const DataAnalysisPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <DataAnalysisHeroSection />
      <DataAnalysisComprehensiveSection />
      <DataAnalysisComprehensiveSlider />
      <DataAnalysisProvenTestingProcess />
      <DataAnalysisWhyChooseTestriq />
      <DataAnalysisToolsFramework />
      <DataAnalysisCaseStudies />
      <DataAnalysisFAQs />
      <DataAnalysisReadyToEnsureQuality />
    </div>
  );
};

export default DataAnalysisPage;

