import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import StructuredData, { aboutPageSchema, createBreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "About Us - Best Software Testing Company in Mumbai India",

  description: "Discover Testriq QA Lab LLP – 10+ years of expert software testing & QA. Explore our mission, core values, and commitment to testing excellence.",
  keywords: [
    "about Testriq",
    "software testing company",
    "QA company India",
    "ISTQB certified testers",
    "QA team certifications",
    "QA company profile",
    "quality assurance partner",
    "software testing experts",
    "QA journey",
    "Testriq story"
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://testrq-3-0.vercel.app/'),
  alternates: {
    canonical: 'https://testrq-3-0.vercel.app/about-us',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/about-us',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'About Us - Testriq QA Lab | Trusted Software Testing Company',
    description: 'Learn about Testriq QA Lab – a globally trusted software testing company with 14+ years of experience. Discover our mission, values, journey, certifications, and why top companies trust our QA excellence.',
    images: [
      {
        url: '/OG/about-testriq-og.webp',
        width: 1200,
        height: 630,
        alt: 'About Testriq QA Lab - Trusted Software Testing Company',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'About Us - Testriq QA Lab | Trusted Software Testing Company',
    description: 'Learn about Testriq QA Lab – a globally trusted software testing company with 14+ years of experience. Discover our mission, values, journey, certifications, and why top companies trust our QA excellence.',
    images: ['/OG/about-testriq-twitter.webp'],
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
    { name: "Home", url: "https://testriq.com/" },
    { name: "about Page", url: "https://testriq.com/about-us" }
  ];
  return (
    <div>
      <StructuredData data={aboutPageSchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <AboutHeroSection />
        <AboutStorySection />
        <AboutMissionSection />
        <AboutValuesSection />
        <AboutAchievementsSection />
        <HomeReadyToElevate />
        <AboutFAQ />
      </MainLayout>
    </div>
  );
}

