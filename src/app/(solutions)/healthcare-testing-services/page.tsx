import React from "react";
import HealthcareHeroSection from "@/components/sections/HealthcareHeroSection";
import HealthcareChallengesSection from "@/components/sections/HealthcareChallengesSection";
import HealthcareTestingServicesSection from "@/components/sections/HealthcareTestingServicesSection";
import HealthcareTestingProcessSection from "@/components/sections/HealthcareTestingProcessSection";
import HealthcareComplianceSection from "@/components/sections/HealthcareComplianceSection";
import HealthcareToolsFrameworkSection from "@/components/sections/HealthcareToolsFrameworkSection";
import HealthcareCaseStudiesSection from "@/components/sections/HealthcareCaseStudiesSection";
import HealthcareROISection from "@/components/sections/HealthcareROISection";
import HealthcareFAQSection from "@/components/sections/HealthcareFAQSection";
import HealthcareContactSection from "@/components/sections/HealthcareContactSection";

export const metadata = {
  title: "Healthcare Testing Solutions | Medical Software QA & HIPAA Compliance | Testriq",
  description: "Expert healthcare software testing services for medical applications, EHR systems, and medical devices. Ensure HIPAA compliance, FDA validation, and patient data security with comprehensive QA testing.",
  keywords: "healthcare software testing, medical device testing, HIPAA compliance testing, EHR testing, medical app QA, FDA validation, healthcare cybersecurity, telemedicine testing, clinical software testing",
  openGraph: {
    title: "Healthcare Testing Solutions | Testriq",
    description: "Comprehensive QA testing services for healthcare applications, ensuring regulatory compliance, patient safety, and secure medical data management.",
    type: "website",
  },
};

const HealthcareTestingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <HealthcareHeroSection />
      <HealthcareChallengesSection />
      <HealthcareTestingServicesSection />
      <HealthcareTestingProcessSection />
      <HealthcareComplianceSection />
      <HealthcareToolsFrameworkSection />
      <HealthcareCaseStudiesSection />
      <HealthcareROISection />
      <HealthcareFAQSection />
      <HealthcareContactSection />
    </main>
  );
};

export default HealthcareTestingPage;

