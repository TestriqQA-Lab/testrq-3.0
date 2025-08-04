import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/app/lib/caseStudies";

// Dynamic imports for better performance
const CaseStudyHeroSection = dynamic(
  () => import("@/components/sections/CaseStudyHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyOverviewSection = dynamic(
  () => import("@/components/sections/CaseStudyOverviewSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyChallengeSection = dynamic(
  () => import("@/components/sections/CaseStudyChallengeSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudySolutionSection = dynamic(
  () => import("@/components/sections/CaseStudySolutionSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyResultsSection = dynamic(
  () => import("@/components/sections/CaseStudyResultsSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyTestimonialSection = dynamic(
  () => import("@/components/sections/CaseStudyTestimonialSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyTechnologiesSection = dynamic(
  () => import("@/components/sections/CaseStudyTechnologiesSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyRelatedSection = dynamic(
  () => import("@/components/sections/CaseStudyRelatedSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyCallToActionSection = dynamic(
  () => import("@/components/sections/CaseStudyCallToActionSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyPlatformSection = dynamic(
  () => import("@/components/sections/CaseStudyPlatformSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CaseStudyJourneySection = dynamic(
  () => import("@/components/sections/CaseStudyJourneySection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

// Generate static params for all case studies
export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

// Generate metadata for each case study
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Testriq",
      description: "The requested case study could not be found.",
    };
  }

  const metadata = caseStudy.metadata;

  return {
    title: metadata?.title || `${caseStudy.title} | Case Study | Testriq`,
    description: metadata?.description || caseStudy.description,
    keywords: metadata?.keywords,
    authors: metadata?.authors,
    creator: metadata?.creator,
    publisher: metadata?.publisher,
    formatDetection: metadata?.formatDetection,
    alternates: metadata?.alternates,
    openGraph: metadata?.openGraph,
    twitter: metadata?.twitter,
    verification: metadata?.verification,

    // ✅ Safely include robots with proper type for googleBot fields
    robots: metadata?.robots
      ? {
          index: metadata.robots.index,
          follow: metadata.robots.follow,
          googleBot: metadata.robots.googleBot
            ? {
                index: metadata.robots.googleBot.index,
                follow: metadata.robots.googleBot.follow,
                "max-video-preview":
                  metadata.robots.googleBot["max-video-preview"],
                "max-image-preview": ["none", "standard", "large"].includes(
                  metadata.robots.googleBot["max-image-preview"] as string
                )
                  ? (metadata.robots.googleBot["max-image-preview"] as
                      | "none"
                      | "standard"
                      | "large")
                  : "large",
                "max-snippet": metadata.robots.googleBot["max-snippet"],
              }
            : undefined,
        }
      : undefined,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div>
      <MainLayout>
        <CaseStudyHeroSection caseStudy={caseStudy} />
        <CaseStudyOverviewSection caseStudy={caseStudy} />
        <CaseStudyPlatformSection caseStudy={caseStudy} />
        <CaseStudyChallengeSection caseStudy={caseStudy} />
        <CaseStudySolutionSection caseStudy={caseStudy} />
        <CaseStudyResultsSection caseStudy={caseStudy} />
        <CaseStudyJourneySection caseStudy={caseStudy} />
        <CaseStudyTestimonialSection caseStudy={caseStudy} />
        <CaseStudyTechnologiesSection caseStudy={caseStudy} />
        <CaseStudyRelatedSection currentSlug={caseStudy.slug} />
        <CaseStudyCallToActionSection />
      </MainLayout>
    </div>
  );
}
