import dynamic from "next/dynamic";
import { Metadata } from "next";
import StructuredData, { caseStudiesSchema, createBreadcrumbSchema } from "@/components/seo/StructuredData";

const MainLayout = dynamic(
  () => import("@/components/layout/MainLayout"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "Software Testing & QA Case Studies | Testriq QA Lab",
  description:
    "Explore our library of software testing case studies. See how Testriq helped Canva, Ragnar, and Fintech startups achieve 99% bug-free releases with our Manual & Automation testing strategies.",
  keywords:
    "client case studies, success stories, software testing results, QA case studies, testing testimonials, client testimonials, software quality results, testing ROI, QA success metrics",
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/case-studies",
  },
  openGraph: {
    title:
      "Client Case Studies & Success Stories | Testriq QA Testing Results",
    description:
      "Explore our client success stories and case studies showcasing real results from our software testing services.",
    type: "website",
    url: "https://www.testriq.com/case-studies",
    images: [
      {
        url: "/OG/case-study-og.webp", // 🔹 your OG image URL
        width: 1200,
        height: 630,
        alt: "Testriq Case Studies & Client Success Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Client Case Studies & Success Stories | Testriq QA Testing Results",
    description:
      "Explore our client success stories and case studies showcasing real results from our software testing services.",
    images: [
      "/OG/case-study-twitter.webp", // 🔹 your Twitter image URL
    ],
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
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "Case Studies", url: "https://www.testriq.com/case-studies" }
  ];

  return (
    <div>
      <StructuredData data={caseStudiesSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
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

