import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";

const AITestingHeroSection = dynamic(
  () => import("@/components/sections/AITestingHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AIProvenTestingProcess = dynamic(
  () => import("@/components/sections/AIProvenTestingProcess"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AIWhyChooseTestriq = dynamic(
  () => import("@/components/sections/AIWhyChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AIROISection = dynamic(
  () => import("@/components/sections/AIROISection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AICaseStudies = dynamic(
  () => import("@/components/sections/AICaseStudies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AIFAQs = dynamic(() => import("@/components/sections/AIFAQs"), {
  ssr: true,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
      <p className="text-gray-500">Loading...</p>
    </div>
  ),
});

const AIAnyQuestions = dynamic(
  () => import("@/components/sections/AIAnyQuestions"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AIComprehensiveSlider = dynamic(
  () => import("@/components/sections/AIComprehensiveSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AICardSlider = dynamic(
  () => import("@/components/sections/AICardSlider"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AIToolsFramework = dynamic(
  () => import("@/components/sections/AIToolsFramework"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function AIApplicationTesting() {
  return (
    <div>
      <MainLayout>
        <AITestingHeroSection />
        <AIComprehensiveSlider />
        <AICardSlider />
        <AIProvenTestingProcess />
        <AIWhyChooseTestriq />
        <AIToolsFramework />
        <AIROISection />
        <AICaseStudies />
        <AIFAQs />
        <AIAnyQuestions />
      </MainLayout>
    </div>
  );
}
