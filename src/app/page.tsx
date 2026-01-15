import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, { organizationSchema, websiteSchema, productServiceSchema, homeFAQSchema } from "@/components/seo/StructuredData";

import HomeHeroSection from "@/components/sections/HomeHeroSection";


const HomeComprehensiveSoftwareTesting = dynamic(
  () => import("@/components/sections/HomeComprehensiveSoftwareTesting"),
  {
    ssr: true,
    loading: () => <div className="h-[600px] animate-pulse bg-gray-50" />
  }
);

const ClientRatingSection = dynamic(
  () => import("@/components/sections/HomeClientRatingSection"),
  {
    ssr: true,
    loading: () => <div className="h-[200px] animate-pulse bg-gray-50" />
  }
);

const HomeIndustryExpert = dynamic(
  () => import("@/components/sections/HomeIndustryExpert"),
  {
    ssr: true,
    loading: () => <div className="h-[500px] animate-pulse bg-gray-50" />
  }
);

const HomeOurImpact = dynamic(
  () => import("@/components/sections/HomeOurImpact"),
  {
    ssr: true,
    loading: () => <div className="h-[300px] animate-pulse bg-gray-50" />
  }
);

const HomeReadyToElevate = dynamic(
  () => import("@/components/sections/HomeReadyToElevate"),
  {
    ssr: true,
    loading: () => <div className="h-[400px] animate-pulse bg-gray-50" />
  }
);

const HomeTechStack = dynamic(
  () => import("@/components/sections/HomeTechStack"),
  {
    ssr: true,
    loading: () => <div className="h-[1200px] animate-pulse bg-gray-50 shadow-inner" />
  }
);

const HomeChooseTestriq = dynamic(
  () => import("@/components/sections/HomeChooseTestriq"),
  {
    ssr: true,
    loading: () => <div className="h-[800px] animate-pulse bg-gray-50 rounded-3xl m-8" />
  }
)

const HomeInsightSection = dynamic(
  () => import("@/components/sections/HomeInsightSection"),
  {
    ssr: true,
    loading: () => <div className="h-[400px] animate-pulse bg-gray-50 shadow-sm" />
  }
);

const HomeTrustedCompanies = dynamic(
  () => import("@/components/sections/HomeTrustedCompanies"),
  {
    ssr: true,
    loading: () => <div className="h-[120px] animate-pulse bg-gray-50" />
  }
);

const HomeProcesses = dynamic(
  () => import("@/components/sections/HomeProcesses"),
  {
    ssr: true,
    loading: () => <div className="h-[800px] animate-pulse bg-gray-50 m-12 rounded-2xl" />
  }
);

const HomeComplianceSection = dynamic(
  () => import("@/components/sections/HomeComplianceSection"),
  {
    ssr: true,
    loading: () => <div className="h-[600px] animate-pulse bg-gray-50" />
  }
);

const HomeFAQSection = dynamic(
  () => import("@/components/sections/HomeFAQSection"),
  {
    ssr: true,
    loading: () => <div className="h-[700px] animate-pulse bg-gray-50" />
  }
);

export default function Home() {
  return (
    <div>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={productServiceSchema} />
      <StructuredData data={homeFAQSchema} />
      <MainLayout>
        <HomeHeroSection />
        <HomeComprehensiveSoftwareTesting />
        <HomeComplianceSection />
        <HomeProcesses />
        <HomeOurImpact />
        <ClientRatingSection />
        <HomeReadyToElevate />
        <HomeIndustryExpert />
        <HomeTechStack />
        <HomeTrustedCompanies />
        <HomeChooseTestriq />
        <HomeFAQSection />
        <HomeInsightSection />
      </MainLayout>
    </div>
  );
}
