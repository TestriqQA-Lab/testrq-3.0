import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI Calculator | Testriq QA Lab",
  description: "Calculate your potential Return on Investment with Testriq QA Lab solutions.",
  alternates: {
    canonical: "https://testriq.com/roi-calculator",
  },
};

export default function RoiCalculatorLayout({ children }: { children: React.ReactNode } ) {
  return <>{children}</>;
}