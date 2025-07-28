import React from "react";
import TradingAppHeroSection from "@/components/sections/TradingAppHeroSection";
import TradingAppCertificationPillars from "@/components/sections/TradingAppCertificationPillars";
import TradingAppCertificationProcess from "@/components/sections/TradingAppCertificationProcess";
import TradingAppSecurityFeatures from "@/components/sections/TradingAppSecurityFeatures";
import TradingAppBenefits from "@/components/sections/TradingAppBenefits";
import TradingAppCompliance from "@/components/sections/TradingAppCompliance";
import TradingAppTestingServices from "@/components/sections/TradingAppTestingServices";
import TradingAppFAQs from "@/components/sections/TradingAppFAQs";
import TradingAppCTA from "@/components/sections/TradingAppCTA";

export default function TradingAppsCertificationPage() {
  return (
    <main className="min-h-screen bg-white">
      <TradingAppHeroSection />
      <TradingAppCertificationPillars />
      <TradingAppCertificationProcess />
      <TradingAppSecurityFeatures />
      <TradingAppBenefits />
      <TradingAppCompliance />
      <TradingAppTestingServices />
      <TradingAppFAQs />
      <TradingAppCTA />
    </main>
  );
}

export const metadata = {
  title: "Trading Apps Certification | Secure & Compliant Trading Platform Testing | Testriq",
  description: "Comprehensive trading app certification services ensuring security, regulatory compliance, and performance optimization. Get your fintech platform certified with Testriq's expert testing solutions.",
  keywords: "trading app certification, fintech security testing, stock trading app compliance, mobile trading platform QA, algorithmic trading security, investment app certification, financial app data protection, regulatory compliance for trading apps, low latency trading testing, KYC AML compliance solutions",
  openGraph: {
    title: "Trading Apps Certification | Secure & Compliant Trading Platform Testing | Testriq",
    description: "Comprehensive trading app certification services ensuring security, regulatory compliance, and performance optimization. Get your fintech platform certified with Testriq's expert testing solutions.",
    type: "website",
    url: "https://testriq.com/trading-apps-certification",
  },
};

