import React from "react";
import CareersHeroSection from "@/components/sections/CareersHeroSection";
import CareersValuesSection from "@/components/sections/CareersValuesSection";
import CareersOpenPositions from "@/components/sections/CareersOpenPositions";
import CareersBenefitsSection from "@/components/sections/CareersBenefitsSection";
import CareersTestimonialsSection from "@/components/sections/CareersTestimonialsSection";
import CareersApplicationProcessSection from "@/components/sections/CareersApplicationProcessSection";
import CareersCultureSection from "@/components/sections/CareersCultureSection";

export const metadata = {
  title: "Careers | Join Our QA Testing Team at Testriq",
  description: "Join Testriq's world-class QA testing team. Explore exciting career opportunities in software testing, automation, and quality assurance. Apply today!",
  keywords: "careers, jobs, QA testing jobs, software testing careers, automation testing jobs, quality assurance careers, remote testing jobs",
  openGraph: {
    title: "Careers | Join Our QA Testing Team at Testriq",
    description: "Join Testriq's world-class QA testing team. Explore exciting career opportunities in software testing, automation, and quality assurance.",
    type: "website",
    url: "https://testriq.com/careers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Join Our QA Testing Team at Testriq",
    description: "Join Testriq's world-class QA testing team. Explore exciting career opportunities in software testing, automation, and quality assurance.",
  },
};

const CareersPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <CareersHeroSection />
      <CareersValuesSection />
      <CareersOpenPositions />
      <CareersBenefitsSection />
      <CareersCultureSection />
      <CareersTestimonialsSection />
      <CareersApplicationProcessSection />
    </main>
  );
};

export default CareersPage;

