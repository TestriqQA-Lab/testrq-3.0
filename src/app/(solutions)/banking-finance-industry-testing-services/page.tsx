import React from "react";
import BankingHeroSection from "@/components/sections/BankingHeroSection";
import BankingChallengesSection from "@/components/sections/BankingChallengesSection";
import BankingTestingServicesSection from "@/components/sections/BankingTestingServicesSection";
import BankingToolsFrameworksSection from "@/components/sections/BankingToolsFrameworksSection";
import BankingComplianceSection from "@/components/sections/BankingComplianceSection";
import BankingCaseStudiesSection from "@/components/sections/BankingCaseStudiesSection";
import BankingROISection from "@/components/sections/BankingROISection";
import BankingFAQSection from "@/components/sections/BankingFAQSection";
import BankingContactSection from "@/components/sections/BankingContactSection";

export const metadata = {
  title: "Banking & Finance Testing Solutions | BFSI QA Services | Testriq",
  description: "Expert banking and finance testing services for financial institutions, FinTech companies, and payment systems. Ensure regulatory compliance, security, and optimal performance across all financial platforms.",
  keywords: "banking testing, finance testing, BFSI testing, financial software QA, payment gateway testing, core banking testing, regulatory compliance testing, FinTech testing, mobile banking QA",
  openGraph: {
    title: "Banking & Finance Testing Solutions | Testriq",
    description: "Comprehensive QA testing services for banking and financial institutions, ensuring secure transactions, regulatory compliance, and exceptional user experiences.",
    type: "website",
  },
};

const BankingFinanceTestingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <BankingHeroSection />
      <BankingChallengesSection />
      <BankingTestingServicesSection />
      <BankingToolsFrameworksSection />
      <BankingComplianceSection />
      <BankingCaseStudiesSection />
      <BankingROISection />
      <BankingFAQSection />
      <BankingContactSection />
    </main>
  );
};

export default BankingFinanceTestingPage;

