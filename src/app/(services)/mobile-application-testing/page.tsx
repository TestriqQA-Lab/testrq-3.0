import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";

const MobileTestingHeroSection = dynamic(
  () => import("@/components/sections/MobileTestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileComprehensiveSection = dynamic(
  () => import("@/components/sections/MobileComprehensive"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileReadyToEnsureQuality = dynamic(
  () => import("@/components/sections/MobileReadyToEnsureQuality"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileProvenTestingProcess = dynamic(
  () => import("@/components/sections/MobileProvenTestingProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileWhyChooseTestriq = dynamic(
  () => import("@/components/sections/MobileWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileROISection = dynamic(
  () => import("@/components/sections/MobileROISection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileCaseStudies = dynamic(
  () => import("@/components/sections/MobileCaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileFAQs = dynamic(() => import("@/components/sections/MobileFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const MobileAnyQuestions = dynamic(
  () => import("@/components/sections/MobileAnyQuestions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileComprehensiveSlider = dynamic(
  () => import("@/components/sections/MobileComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const MobileCardSlider = dynamic(
  () => import("@/components/sections/MobileCardSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function MobileAppTesting() {
  return (
    <div>
      <MainLayout>
        <MobileTestingHeroSection />
        <MobileComprehensiveSection />
        <MobileReadyToEnsureQuality />
        <MobileComprehensiveSlider />
        <MobileCardSlider />
        <MobileProvenTestingProcess />
        <MobileWhyChooseTestriq />
        <MobileROISection />
        <MobileCaseStudies />
        <MobileFAQs />
        <MobileAnyQuestions />
      </MainLayout>
    </div>
  );
}

