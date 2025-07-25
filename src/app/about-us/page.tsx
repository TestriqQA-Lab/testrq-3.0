import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";

const AboutHeroSection = dynamic(
  () => import("@/components/sections/AboutHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AboutStorySection = dynamic(
  () => import("@/components/sections/AboutStorySection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AboutMissionSection = dynamic(
  () => import("@/components/sections/AboutMissionSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AboutValuesSection = dynamic(
  () => import("@/components/sections/AboutValuesSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AboutAchievementsSection = dynamic(
  () => import("@/components/sections/AboutAchievementsSection"),
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

const AboutFAQ = dynamic(
  () => import("@/components/sections/AboutFAQ"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function AboutUs() {
  return (
    <div>
      <MainLayout>
        <AboutHeroSection />
        <AboutStorySection />
        <AboutMissionSection />
        <AboutValuesSection />
        <AboutAchievementsSection />
        <HomeReadyToElevate />
        <AboutFAQ />
      </MainLayout>
    </div>
  );
}

