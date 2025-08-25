import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Case Studies & Success Stories | Testriq QA Testing Results",
  description: "Explore our client success stories and case studies showcasing real results from our software testing services. See how we helped businesses achieve 99% bug reduction, 75% faster releases, and improved user satisfaction.",
  keywords: "client case studies, success stories, software testing results, QA case studies, testing testimonials, client testimonials, software quality results, testing ROI, QA success metrics",
  openGraph: {
    title: "Client Case Studies & Success Stories | Testriq QA Testing Results",
    description: "Explore our client success stories and case studies showcasing real results from our software testing services.",
    type: "website",
    url: "https://www.testriq.com/case-studies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Case Studies & Success Stories | Testriq QA Testing Results",
    description: "Explore our client success stories and case studies showcasing real results from our software testing services.",
  },
};

const CaseStudiesHeroSection = dynamic(
  () => import("@/components/sections/CaseStudiesHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudiesOverviewSection = dynamic(
  () => import("@/components/sections/CaseStudiesOverviewSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudiesFeaturedSection = dynamic(
  () => import("@/components/sections/CaseStudiesFeaturedSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudiesIndustrySection = dynamic(
  () => import("@/components/sections/CaseStudiesIndustrySection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudiesResultsSection = dynamic(
  () => import("@/components/sections/CaseStudiesResultsSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudiesTestimonialsSection = dynamic(
  () => import("@/components/sections/CaseStudiesTestimonialsSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudiesProcessSection = dynamic(
  () => import("@/components/sections/CaseStudiesProcessSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudiesReadyToStartSection = dynamic(
  () => import("@/components/sections/CaseStudiesReadyToStartSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function CaseStudiesPage() {
  return (
    <div>
      <MainLayout>
        <CaseStudiesHeroSection />
        <CaseStudiesOverviewSection />
        <CaseStudiesFeaturedSection />
        <CaseStudiesIndustrySection />
        <CaseStudiesResultsSection />
        <CaseStudiesTestimonialsSection />
        <CaseStudiesProcessSection />
        <CaseStudiesReadyToStartSection />
      </MainLayout>
    </div>
  );
}

