import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";

const IoTTestingHeroSection = dynamic(
  () => import("@/components/sections/IoTTestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const IoTProvenTestingProcess = dynamic(
  () => import("@/components/sections/IoTProvenTestingProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const IoTWhyChooseTestriq = dynamic(
  () => import("@/components/sections/IoTWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const IoTROISection = dynamic(
  () => import("@/components/sections/IoTROISection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const IoTCaseStudies = dynamic(
  () => import("@/components/sections/IoTCaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const IoTFAQs = dynamic(() => import("@/components/sections/IoTFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const IoTAnyQuestions = dynamic(
  () => import("@/components/sections/IoTAnyQuestions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const IoTComprehensiveSlider = dynamic(
  () => import("@/components/sections/IoTComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const IoTCardSlider = dynamic(
  () => import("@/components/sections/IoTCardSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const IoTToolsFramework = dynamic(
  () => import("@/components/sections/IoTToolsFramework"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function IoTDeviceTesting() {
  return (
    <div>
      <MainLayout>
        <IoTTestingHeroSection />
        <IoTComprehensiveSlider />
        <IoTCardSlider />
        <IoTProvenTestingProcess />
        <IoTWhyChooseTestriq />
        <IoTToolsFramework />
        <IoTROISection />
        <IoTCaseStudies />
        <IoTFAQs />
        <IoTAnyQuestions />
      </MainLayout>
    </div>
  );
}
