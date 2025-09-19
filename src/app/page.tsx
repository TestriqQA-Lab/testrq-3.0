import dynamic from "next/dynamic";
import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, { organizationSchema, websiteSchema } from "@/components/seo/StructuredData";

const HomeHeroSection = dynamic(
  () => import("@/components/sections/HomeHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const HomeComprehensiveSoftwareTesting = dynamic(
  () => import("@/components/sections/HomeComprehensiveSoftwareTesting"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const ClientRatingSection = dynamic(
  () => import("@/components/sections/HomeClientRatingSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const HomeIndustryExpert = dynamic(
  () => import("@/components/sections/HomeIndustryExpert"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const HomeOurImpact = dynamic(
  () => import("@/components/sections/HomeOurImpact"),
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

const HomeTechStack = dynamic(
  () => import("@/components/sections/HomeTechStack"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const HomeChooseTestriq = dynamic(
  () => import("@/components/sections/HomeChooseTestriq"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }
)

const HomeInsightSection = dynamic(
  () => import("@/components/sections/HomeInsightSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const HomeTrustedCompanies = dynamic(
  () => import("@/components/sections/HomeTrustedCompanies"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const HomeProcesses = dynamic(
  () => import("@/components/sections/HomeProcesses"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

// Enhanced metadata for homepage with target keywords
export const metadata: Metadata = {
  title: "Best Software Testing Company in Mumbai India | Testriq",
  description: "Leading software testing company in India providing comprehensive QA services. Top software testing companies offering web app testing, mobile testing, API testing, and automation testing services. Get expert testing qa solutions from certified professionals.",
  keywords: [
    "software testing company",
    "testing companies in india", 
    "best software testing companies in india",
    "top software testing companies",
    "software testing services india",
    "qa india",
    "testing qa",
    "test company",
    "top 10 software testing companies in india",
    "software testing service india",
    "top testing companies in india",
    "software testing services company"
  ],
  openGraph: {
    title: "Best Software Testing Company in Mumbai India | Testriq",
    description: "Leading software testing company in India providing comprehensive QA services. Top software testing companies offering web app testing, mobile testing, API testing, and automation testing services.",
    url: "https://www.testriq.com/",
    siteName: "Testriq - Professional Software Testing Services",
    images: [
      {
        url: "/OG/testriq-qa-lab-llp-og-img.webp",
        width: 1200,
        height: 630,
        alt: "Testriq - Best Software Testing Company in India",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Software Testing Company in Mumbai India | Testriq",
    description: "Leading software testing company in India providing comprehensive QA services. Top software testing companies offering expert testing qa solutions.",
    images: ["/OG/testriq-qa-lab-llp-twitter-img.webp"],
  },
  alternates: {
    canonical: "https://www.testriq.com/",
  },
};

export default function Home() {
  return (
    <div>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      
      {/* Enhanced Professional Service Schema for homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Testriq QA Lab LLP",
            "description": "Leading software testing company in India providing comprehensive QA services including web application testing, mobile app testing, API testing, and automation testing services.",
            "url": "https://www.testriq.com/",
            "telephone": "+91-9876543210",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "serviceType": [
              "Software Testing",
              "Quality Assurance",
              "Web Application Testing",
              "Mobile App Testing",
              "API Testing",
              "Automation Testing",
              "Performance Testing",
              "Security Testing"
            ],
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "50",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Software Testing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Application Testing Services",
                    "description": "Comprehensive web app testing services to ensure quality and performance"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Testing Services",
                    "description": "Expert mobile application testing for iOS and Android platforms"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "API Testing Services",
                    "description": "Thorough API testing to ensure reliable integrations and data flow"
                  }
                }
              ]
            }
          })
        }}
      />
      
      <MainLayout>
        <HomeHeroSection />
        <HomeComprehensiveSoftwareTesting />
        <HomeProcesses />
        <HomeOurImpact />
        <ClientRatingSection />
        <HomeReadyToElevate />
        <HomeIndustryExpert />
        <HomeTechStack />
        <HomeTrustedCompanies />
        <HomeChooseTestriq />
        <HomeInsightSection />
        
        {/* Internal Links Section for SEO */}
        <section className="bg-gray-50 py-12 px-8 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Explore Our Testing Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <a href="/web-application-testing-services" className="font-bold hover:text-brand-blue">
                    Web Application Testing Services
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive web app testing services to ensure your applications perform flawlessly across all browsers and devices.
                </p>
                <a href="/web-application-testing-services" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <a href="/performance-testing-services" className="font-bold hover:text-brand-blue">
                    Performance Testing Services
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Ensure your applications can handle peak loads with our comprehensive performance testing solutions.
                </p>
                <a href="/performance-testing-services" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <a href="/about-us" className="font-bold hover:text-brand-blue">
                    About Our Testing Company
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Learn about our journey as one of the leading testing companies in Mumbai with 15+ years of experience.
                </p>
                <a href="/about-us" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <a href="/healthcare-testing-services" className="font-bold hover:text-brand-blue">
                    Healthcare Testing Services
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Specialized healthcare testing services ensuring compliance and security for medical applications.
                </p>
                <a href="/healthcare-testing-services" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <a href="/blog/post/what-is-app-testing" className="font-bold hover:text-brand-blue">
                    App Testing Guide
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive guide to app testing methodologies and best practices for mobile applications.
                </p>
                <a href="/blog/post/what-is-app-testing" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Read More →
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <a href="/case-studies" className="font-bold hover:text-brand-blue">
                    Our Success Stories
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Explore our case studies showcasing successful testing projects across various industries.
                </p>
                <a href="/case-studies" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Cases →
                </a>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  );
}
