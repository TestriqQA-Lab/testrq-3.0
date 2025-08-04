import { notFound } from 'next/navigation';
import { getCityData, getAllCities, CityData } from '@/app/lib/CityData';
import { getCaseStudyBySlug, getAllCaseStudies, CaseStudy } from '@/app/lib/caseStudies';
import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData from "@/components/seo/StructuredData";
import CityTestingHeroSection from '@/components/sections/CityTestingHeroSection';
import CityTestingServicesSection from '@/components/sections/CityTestingServicesSection';
import CityTestingProcessSection from '@/components/sections/CityTestingProcessSection';
import CityTestingToolsFrameworkSection from '@/components/sections/CityTestingToolsFrameworkSection';
import CityTestingWhyChooseSection from '@/components/sections/CityTestingWhyChooseSection';
import CityTestingCaseStudiesSection from '@/components/sections/CityTestingCaseStudiesSection';
import CityTestingFAQsSection from '@/components/sections/CityTestingFAQsSection';
import CityTestingCTASection from '@/components/sections/CityTestingCTASection';
import CityTestingTrendingServicesSection from '@/components/sections/CityTestingTrendingServicesSection';

// Dynamic imports for case study components
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

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Helper function to generate Case Study JSON-LD schema
function generateCaseStudySchema(caseStudy: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.description,
    "image": caseStudy.image ? `https://testrq-3-0.vercel.app${caseStudy.image}` : undefined,
    "author": {
      "@type": "Organization",
      "name": "Testriq QA Lab",
      "url": "https://testrq-3-0.vercel.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Testriq QA Lab",
      "url": "https://testrq-3-0.vercel.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://testrq-3-0.vercel.app/logo.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://testrq-3-0.vercel.app/${caseStudy.slug}`
    },
    "articleSection": "Case Studies",
    "keywords": caseStudy.metadata?.keywords || ["software testing", "QA", "case study"],
    "about": {
      "@type": "Thing",
      "name": caseStudy.client,
      "description": `Software testing case study for ${caseStudy.client} in ${caseStudy.industry} industry`
    },
    "mentions": [
      {
        "@type": "Organization",
        "name": caseStudy.client
      },
      {
        "@type": "Thing",
        "name": caseStudy.industry
      }
    ]
  };
}

// Helper function to generate City Page JSON-LD schema
function generateCitySchema(cityData: CityData ) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Testriq QA Testing Services in ${cityData.name}`,
    "description": `Professional software testing and QA services in ${cityData.name}, ${cityData.state}. Expert manual testing, automation testing, and quality assurance solutions.`,
    "url": `https://testrq-3-0.vercel.app/${cityData.slug}`,
    "telephone": "+91-XXXXXXXXXX",
    "email": "info@testriq.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityData.name,
      "addressRegion": cityData.state,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "0.0000",
      "longitude": "0.0000"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "City",
      "name": cityData.name
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Software Testing Services in ${cityData.name}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manual Testing",
            "description": `Professional manual testing services in ${cityData.name}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automation Testing",
            "description": `Test automation services in ${cityData.name}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Testing",
            "description": `Performance and load testing services in ${cityData.name}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Security Testing",
            "description": `Security testing and vulnerability assessment in ${cityData.name}`
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.linkedin.com/company/testriq",
      "https://twitter.com/testriq"
    ]
  };
}

export async function generateMetadata({ params }: PageProps ) {
  const resolvedParams = await params;
  console.log("generateMetadata resolvedParams:", resolvedParams);
  
  // First check if it's a case study
  const caseStudy = getCaseStudyBySlug(resolvedParams.slug);
  if (caseStudy) {
    console.log("generateMetadata caseStudy:", caseStudy);
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
  
  // Fall back to city data
  const cityData = getCityData(resolvedParams.slug);
  console.log("generateMetadata cityData:", cityData);

  if (!cityData) {
    return {};
  }

  return {
    title: cityData.metadata.title,
    description: cityData.metadata.description,
    keywords: cityData.metadata.keywords,
  };
}

export default async function SlugPage({ params }: PageProps) {
  const resolvedParams = await params;
  console.log("SlugPage resolvedParams:", resolvedParams);
  
  // First check if it's a case study
  const caseStudy = getCaseStudyBySlug(resolvedParams.slug);
  if (caseStudy) {
    console.log("SlugPage caseStudy:", caseStudy);
    const caseStudySchema = generateCaseStudySchema(caseStudy);
    
    return (
      <div>
        <StructuredData data={caseStudySchema} />
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
  
  // Fall back to city data
  const cityData = getCityData(resolvedParams.slug);
  console.log("SlugPage cityData:", cityData);

  if (!cityData) {
    notFound();
  }

  const citySchema = generateCitySchema(cityData);

  return (
    <div className="city-page">
      <StructuredData data={citySchema} />
      <CityTestingHeroSection cityData={cityData} />
      <CityTestingServicesSection cityData={cityData} />
      <CityTestingProcessSection cityData={cityData} />
      <CityTestingToolsFrameworkSection cityData={cityData} />
      <CityTestingWhyChooseSection cityData={cityData} />
      <CityTestingCaseStudiesSection cityData={cityData} />
      <CityTestingTrendingServicesSection cityData={cityData} />
      <CityTestingFAQsSection cityData={cityData} />
      <CityTestingCTASection cityData={cityData} />
    </div>
  );
}

export async function generateStaticParams() {
  const cities = getAllCities();
  const caseStudies = getAllCaseStudies();
  
  console.log("Generated city slugs:", cities.map((city) => city.slug));
  console.log("Generated case study slugs:", caseStudies.map((caseStudy) => caseStudy.slug));
  
  // Combine both city and case study slugs
  const allSlugs = [
    ...cities.map((city) => ({ slug: city.slug })),
    ...caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }))
  ];
  
  return allSlugs;
}
