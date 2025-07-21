import React from "react";
import EcommerceHeroSection from "@/components/sections/EcommerceHeroSection";
import EcommerceChallengesSection from "@/components/sections/EcommerceChallengesSection";
import EcommerceTestingServicesSection from "@/components/sections/EcommerceTestingServicesSection";
import EcommerceTestingProcessSection from "@/components/sections/EcommerceTestingProcessSection";
import EcommercePlatformsSection from "@/components/sections/EcommercePlatformsSection";
import EcommerceCaseStudiesSection from "@/components/sections/EcommerceCaseStudiesSection";
import EcommerceROISection from "@/components/sections/EcommerceROISection";
import EcommerceFAQSection from "@/components/sections/EcommerceFAQSection";
import EcommerceContactSection from "@/components/sections/EcommerceContactSection";

export const metadata = {
  title: "E-Commerce Testing Solutions | Comprehensive QA for Online Stores | Testriq",
  description: "Expert e-commerce testing services for online stores, marketplaces, and retail platforms. Ensure seamless shopping experiences, secure payments, and optimal performance across all devices.",
  keywords: "e-commerce testing, online store testing, shopping cart testing, payment gateway testing, retail QA, marketplace testing, conversion optimization",
  openGraph: {
    title: "E-Commerce Testing Solutions | Testriq",
    description: "Comprehensive QA testing services for e-commerce platforms, ensuring secure transactions, optimal performance, and exceptional user experiences.",
    type: "website",
  },
};

const EcommerceTestingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <EcommerceHeroSection />
      <EcommerceChallengesSection />
      <EcommerceTestingServicesSection />
      <EcommerceTestingProcessSection />
      <EcommercePlatformsSection />
      <EcommerceCaseStudiesSection />
      <EcommerceROISection />
      <EcommerceFAQSection />
      <EcommerceContactSection />
    </main>
  );
};

export default EcommerceTestingPage;

