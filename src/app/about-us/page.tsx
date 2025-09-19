import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import StructuredData, { aboutPageSchema, createBreadcrumbSchema } from "@/components/seo/StructuredData";
import Link from "next/link";

// Enhanced metadata with target keywords from SEMrush report
export const metadata: Metadata = {
  title: "About Us - Testing Companies in Mumbai | Software Testing Companies in Mumbai",
  description: "Discover Testriq QA Lab LLP – one of the leading testing companies in Mumbai with 15+ years of expert software testing & QA experience. Learn about our mission, core values, and commitment to testing excellence as a top software testing company in Mumbai, India.",
  keywords: [
    "testing companies in mumbai",
    "software testing companies in mumbai", 
    "about Testriq",
    "software testing company",
    "QA company India",
    "ISTQB certified testers",
    "QA team certifications",
    "QA company profile",
    "quality assurance partner",
    "software testing experts",
    "QA journey",
    "Testriq story",
    "testing companies in india",
    "best software testing companies in india"
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.testriq.com/'),
  alternates: {
    canonical: 'https://www.testriq.com/about-us',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.testriq.com/about-us',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'About Us - Testing Companies in Mumbai | Testriq QA Lab',
    description: 'Learn about Testriq QA Lab – one of the leading testing companies in Mumbai with 15+ years of experience. Discover our mission, values, journey, certifications, and why top companies trust our QA excellence.',
    images: [
      {
        url: '/OG/About-Us-og.webp',
        width: 1200,
        height: 630,
        alt: 'About Testriq QA Lab - Leading Testing Company in Mumbai',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'About Us - Testing Companies in Mumbai | Testriq QA Lab',
    description: 'Learn about Testriq QA Lab – one of the leading testing companies in Mumbai with 15+ years of experience. Discover our mission, values, and commitment to testing excellence.',
    images: ['/OG/About-us-twitter.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'LXeSv6xxgAa1jB9JlWwO9ysJ1FNvWzgN3i3GyQs2AD0',
    yandex: 'ff703971283d110e',
    yahoo: '0A67349B8CD11BF71173B38572028507',
  },
};

const AboutHeroSection = dynamic(
  () => import("@/components/sections/AboutHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AboutStorySection = dynamic(
  () => import("@/components/sections/AboutStorySection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AboutMissionSection = dynamic(
  () => import("@/components/sections/AboutMissionSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AboutValuesSection = dynamic(
  () => import("@/components/sections/AboutValuesSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const AboutAchievementsSection = dynamic(
  () => import("@/components/sections/AboutAchievementsSection"),
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

const AboutFAQ = dynamic(
  () => import("@/components/sections/AboutFAQ"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function AboutUs() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "About Page", url: "https://www.testriq.com/about-us" }
  ];

  return (
    <div>
      <StructuredData data={aboutPageSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      
      {/* Enhanced LocalBusiness Schema for Mumbai location */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Testriq QA Lab LLP",
            "description": "Leading testing company in Mumbai providing comprehensive software testing and QA services. One of the top software testing companies in Mumbai with 15+ years of experience.",
            "url": "https://www.testriq.com/about-us",
            "telephone": "+91-9876543210",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Business Address",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra", 
              "postalCode": "400001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "19.0760",
              "longitude": "72.8777"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "sameAs": [
              "https://twitter.com/testriq",
              "https://www.linkedin.com/company/testriq"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "50",
              "bestRating": "5",
              "worstRating": "1"
            },
            "priceRange": "$$",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "19.0760",
                "longitude": "72.8777"
              },
              "geoRadius": "50000"
            }
          })
        }}
      />

      <MainLayout>
        <AboutHeroSection />
        <AboutStorySection />
        <AboutMissionSection />
        <AboutValuesSection />
        <AboutAchievementsSection />
        
        {/* Internal Links Section for SEO */}
        <section className="bg-gray-50 py-12 px-8 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Explore Our Testing Services & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <Link href="/web-application-testing-services" className="font-bold hover:text-brand-blue">
                    Web Application Testing Services
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  As one of the leading testing companies in Mumbai, we provide comprehensive web application testing services.
                </p>
                <Link href="/web-application-testing-services" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <Link href="/performance-testing-services" className="font-bold hover:text-brand-blue">
                    Performance Testing Services
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Our Mumbai-based testing team specializes in performance testing to ensure your applications scale effectively.
                </p>
                <Link href="/performance-testing-services" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <Link href="/healthcare-testing-services" className="font-bold hover:text-brand-blue">
                    Healthcare Testing Services
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Specialized healthcare testing services ensuring compliance and security for medical applications.
                </p>
                <Link href="/healthcare-testing-services" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <Link href="/case-studies" className="font-bold hover:text-brand-blue">
                    Our Success Stories
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Explore case studies showcasing why we're among the top software testing companies in Mumbai.
                </p>
                <Link href="/case-studies" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Cases →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <Link href="/our-team" className="font-bold hover:text-brand-blue">
                    Meet Our Testing Team
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Learn about our ISTQB certified testing professionals who make us a leading testing company in Mumbai.
                </p>
                <Link href="/our-team" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Meet Team →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <Link href="/contact-us" className="font-bold hover:text-brand-blue">
                    Contact Our Mumbai Office
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Get in touch with our Mumbai-based testing team for your software quality assurance needs.
                </p>
                <Link href="/contact-us" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <HomeReadyToElevate />
        <AboutFAQ />
      </MainLayout>
    </div>
  );
}
