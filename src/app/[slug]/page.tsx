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
  return { // <-- RETURNS A SINGLE OBJECT
    "@context": "https://schema.org",
    "@type": ["TechArticle", "Product"], // Dual type allows for Review Stars
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.testriq.com/${caseStudy.slug}`
    },
    "headline": caseStudy.metadata.title || caseStudy.title,
    "description": caseStudy.metadata.description || caseStudy.description,
    "image": caseStudy.image
      ? `https://www.testriq.com${caseStudy.image}`
      : "https://www.testriq.com/og-image.png",

    // TRUST SIGNALS (E-E-A-T)
    "author": {
      "@type": "Organization",
      "name": "Testriq QA Lab",
      "url": "https://www.testriq.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Testriq QA Lab",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testriq.com/logo.png"
      }
    },

    // CONTENT SIGNALS
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split("T")[0],
    "proficiencyLevel": "Expert",
    "genre": "Case Study",
    "keywords": caseStudy.metadata?.keywords?.join(", "),

    // KNOWLEDGE GRAPH CONNECTIONS (Simplified mentions)
    "about": {
      "@type": "Thing",
      "name": "Software Testing",
      "sameAs": "https://en.wikipedia.org/wiki/Software_testing"
    },
    "mentions": [ // <-- Replaced undefined variables
      {
        "@type": "Organization",
        "name": caseStudy.client
      },
      {
        "@type": "Thing",
        "name": caseStudy.industry
      }
    ],

    // VISUAL SNIPPETS (The Stars)
    "name": caseStudy.title,
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": caseStudy.testimonial.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": caseStudy.testimonial.author
      },
      "reviewBody": caseStudy.testimonial.quote
    },

  };
}

// Helper function to generate City Page JSON-LD schema
function generateCitySchema(cityData: CityData) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Testriq QA Testing Services in ${cityData.name}`,
    "description": `Professional software testing and QA services in ${cityData.name}, ${cityData.state}. Expert manual testing, automation testing, and quality assurance solutions.`,
    "url": `https://www.testriq.com/${cityData.slug}`,
    "telephone": "+91 915-2929-343",
    "email": "contact@testriq.com",
    "image": "https://www.testriq.com/logo.png", // Adding a default image for LocalBusiness schema
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.testriq.com/logo.png"
    },
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

    "sameAs": [
      "https://www.linkedin.com/company/testriq",
      "https://twitter.com/testriq"
    ]
  };
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;

  // First check if it's a case study
  const caseStudy = getCaseStudyBySlug(resolvedParams.slug);
  if (caseStudy) {
    const metadata = caseStudy.metadata;
    // Fixed: Use unique title for each case study to avoid duplicate title tags
    const pageTitle = metadata?.title || `${caseStudy.title} - Case Study | Testriq QA Lab`;
    const pageDescription = metadata?.description || caseStudy.description;
    const canonicalUrl = `https://www.testriq.com/${caseStudy.slug}`;

    return {
      title: pageTitle,
      description: pageDescription,
      keywords: metadata?.keywords || ["software testing", "QA", "case study", caseStudy.industry.toLowerCase(), caseStudy.client.toLowerCase()],
      authors: metadata?.authors || [{ name: "Testriq QA Lab" }],
      creator: metadata?.creator || "Testriq QA Lab",
      publisher: metadata?.publisher || "Testriq QA Lab",
      formatDetection: { telephone: false, address: false, email: false },
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: canonicalUrl,
        type: "article",
        publishedTime: "2024-01-01", // Replace with actual published date if available
        authors: ["Testriq QA Lab"],
        images: [
          {
            url: `https://www.testriq.com${caseStudy.image}`,
            width: 1200,
            height: 630,
            alt: `${caseStudy.client} Case Study - ${caseStudy.title}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        images: [`https://www.testriq.com${caseStudy.image}`],
      },
      verification: metadata?.verification,
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  // Fall back to city data
  const cityData = getCityData(resolvedParams.slug);

  if (!cityData) {
    return {};
  }

  const pageTitle = cityData.metadata.title;
  const pageDescription = cityData.metadata.description;
  const canonicalUrl = `https://www.testriq.com/${cityData.slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: cityData.metadata.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: "https://www.testriq.com/og-image.png", // Replace with a relevant image for city pages
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["https://www.testriq.com/twitter-image.png"], // Replace with a relevant image for city pages
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
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

