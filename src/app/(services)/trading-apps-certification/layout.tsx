import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trading Apps Certification | Secure & Compliant Trading Platform Testing | Testriq",
  description: "Comprehensive trading app certification services ensuring security, regulatory compliance, and performance optimization. Get your fintech platform certified with Testriq's expert testing solutions.",
  keywords: "trading app certification, fintech security testing, stock trading app compliance, mobile trading platform QA, algorithmic trading security, investment app certification, financial app data protection, regulatory compliance for trading apps, low latency trading testing, KYC AML compliance solutions",
  openGraph: {
    title: "Trading Apps Certification | Secure & Compliant Trading Platform Testing | Testriq",
    description: "Comprehensive trading app certification services ensuring security, regulatory compliance, and performance optimization. Get your fintech platform certified with Testriq's expert testing solutions.",
    type: "website",
    url: "https://testriq.com/trading-apps-certification",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trading Apps Certification | Secure & Compliant Trading Platform Testing | Testriq",
    description: "Comprehensive trading app certification services ensuring security, regulatory compliance, and performance optimization. Get your fintech platform certified with Testriq's expert testing solutions.",
  },
};

export default function TradingAppsCertificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

