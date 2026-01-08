import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, { organizationSchema, websiteSchema, productServiceSchema } from "@/components/seo/StructuredData";

import HomeHeroSection from "@/components/sections/HomeHeroSection";


const HomeComprehensiveSoftwareTesting = dynamic(
  () => import("@/components/sections/HomeComprehensiveSoftwareTesting"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ClientRatingSection = dynamic(
  () => import("@/components/sections/HomeClientRatingSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const HomeIndustryExpert = dynamic(
  () => import("@/components/sections/HomeIndustryExpert"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const HomeOurImpact = dynamic(
  () => import("@/components/sections/HomeOurImpact"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const HomeReadyToElevate = dynamic(
  () => import("@/components/sections/HomeReadyToElevate"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const HomeTechStack = dynamic(
  () => import("@/components/sections/HomeTechStack"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const HomeChooseTestriq = dynamic(
  () => import("@/components/sections/HomeChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }
)

const HomeInsightSection = dynamic(
  () => import("@/components/sections/HomeInsightSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const HomeTrustedCompanies = dynamic(
  () => import("@/components/sections/HomeTrustedCompanies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const HomeProcesses = dynamic(
  () => import("@/components/sections/HomeProcesses"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <div>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={productServiceSchema} />
      <MainLayout>
        <HomeHeroSection />
        <HomeComprehensiveSoftwareTesting />
        <HomeProcesses />
        <HomeOurImpact />
        <ClientRatingSection />
        <HomeReadyToElevate />
        <HomeIndustryExpert />
        <HomeTechStack />
        <HomeTrustedCompanies />
        <HomeChooseTestriq />
        <HomeInsightSection />
      </MainLayout>
    </div>
  );
}
