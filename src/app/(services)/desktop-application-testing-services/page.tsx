import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";

const DesktopTestingHeroSection = dynamic(
  () => import("@/components/sections/DesktopTestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DesktopComprehensiveSection = dynamic(
  () => import("@/components/sections/DesktopComprehensive"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DesktopReadyToEnsureQuality = dynamic(
  () => import("@/components/sections/DesktopReadyToEnsureQuality"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DesktopWhyChooseTestriq = dynamic(
  () => import("@/components/sections/DesktopWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DesktopROISection = dynamic(
  () => import("@/components/sections/DesktopROISection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DesktopCaseStudies = dynamic(
  () => import("@/components/sections/DesktopCaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DesktopFAQs = dynamic(() => import("@/components/sections/DesktopFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const DesktopAnyQuestions = dynamic(
  () => import("@/components/sections/DesktopAnyQuestions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DesktopComprehensiveSlider = dynamic(
  () => import("@/components/sections/DesktopComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const DesktopCardSlider = dynamic(
  () => import("@/components/sections/DesktopCardSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function DesktopAppTesting() {
  return (
    <div>
      <MainLayout>
        <DesktopTestingHeroSection />
        <DesktopComprehensiveSection />
        <DesktopReadyToEnsureQuality />
        <DesktopComprehensiveSlider />
        <DesktopCardSlider />
        <DesktopWhyChooseTestriq />
        <DesktopROISection />
        <DesktopCaseStudies />
        <DesktopFAQs />
        <DesktopAnyQuestions />
      </MainLayout>
    </div>
  );
}

