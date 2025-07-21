import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";

const WebappTestingHeroSection = dynamic(
  () => import("@/components/sections/WebappTestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const WebappComprehensiveSection = dynamic(
  () => import("@/components/sections/WebappComprehensive"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const WebappReadyToEnsureQuality = dynamic(
  () => import("@/components/sections/WebappReadyToEnsureQuality"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const WebappProvenTestingProcess = dynamic(
  () => import("@/components/sections/WebappProvenTestingProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const WebappWhyChooseTestriq = dynamic(
  () => import("@/components/sections/WebappWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const WebappROISection = dynamic(
  () => import("@/components/sections/WebappROISection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const WebappCaseStudies = dynamic(
  () => import("@/components/sections/WebappCaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const WebappFAQs = dynamic(() => import("@/components/sections/WebappFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const WebappAnyQuestions = dynamic(
  () => import("@/components/sections/WebappAnyQuestions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const WebappComprehensiveSlider = dynamic(
  () => import("@/components/sections/WebappComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CardSlider = dynamic(
  () => import("@/components/sections/WebAppCardSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function WebAppTesting() {
  return (
    <div>
      <MainLayout>
        <WebappTestingHeroSection />
        <WebappComprehensiveSection />
        <WebappReadyToEnsureQuality />
        <WebappComprehensiveSlider />
        <CardSlider />
        <WebappProvenTestingProcess />
        <WebappWhyChooseTestriq />
        <WebappROISection />
        <WebappCaseStudies />
        <WebappFAQs />
        <WebappAnyQuestions />
      </MainLayout>
    </div>
  );
}
