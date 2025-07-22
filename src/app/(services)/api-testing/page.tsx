import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";

const ApiTestingHeroSection = dynamic(
  () => import("@/components/sections/ApiTestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ApiComprehensiveSection = dynamic(
  () => import("@/components/sections/ApiComprehensiveSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ApiReadyToEnsureQuality = dynamic(
  () => import("@/components/sections/ApiReadyToEnsureQuality"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ApiProvenTestingProcess = dynamic(
  () => import("@/components/sections/ApiProvenTestingProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ApiWhyChooseTestriq = dynamic(
  () => import("@/components/sections/ApiWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ApiROISection = dynamic(
  () => import("@/components/sections/ApiROISection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ApiCaseStudies = dynamic(
  () => import("@/components/sections/ApiCaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ApiFAQs = dynamic(() => import("@/components/sections/ApiFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const ApiAnyQuestions = dynamic(
  () => import("@/components/sections/ApiAnyQuestions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ApiComprehensiveSlider = dynamic(
  () => import("@/components/sections/ApiComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ApiCardSlider = dynamic(
  () => import("@/components/sections/ApiCardSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ApiToolsFramework = dynamic(
  () => import("@/components/sections/ApiToolsFramework"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function ApiTesting() {
  return (
    <div>
      <MainLayout>
        <ApiTestingHeroSection />
        <ApiComprehensiveSection />
        <ApiReadyToEnsureQuality />
        <ApiComprehensiveSlider />
        <ApiCardSlider />
        <ApiProvenTestingProcess />
        <ApiWhyChooseTestriq />
        <ApiToolsFramework />
        <ApiROISection />
        <ApiCaseStudies />
        <ApiFAQs />
        <ApiAnyQuestions />
      </MainLayout>
    </div>
  );
}

