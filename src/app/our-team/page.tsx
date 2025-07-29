import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";
import StructuredData, { createBreadcrumbSchema, ourTeamPageSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "estriq QA Leadership Team | Meet Our Software Testing Experts",
  description: "Meet the leadership team at Testriq QA Lab—visionaries driving excellence in software testing, automation, security, and innovation across global projects.",
  keywords: [
    "Testriq team",
    "QA experts",
    "ISTQB certified testers",
    "software testing professionals",
    "automation testing team",
    "performance testing experts",
    "mobile testing engineers",
    "manual testing specialists",
    "AI testing team",
    "cybersecurity testers"
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://testriq.com/'),
  alternates: {
    canonical: 'https://testriq.com/our-team',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://testriq.com/our-team',
    siteName: 'Testriq - Professional Software Testing Services',
    title: 'Meet Our Team - Certified QA Experts | Testriq',
    description: 'Meet Testriq’s team of ISTQB-certified QA professionals with decades of software testing experience. Get to know the leaders and departments behind our testing excellence.',
    images: [
      {
        url: '/OG/Our_Team_og.webp',
        width: 1200,
        height: 630,
        alt: 'Testriq Certified QA Experts Team',
        type: 'image/webp',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@testriq',
    creator: '@testriq',
    title: 'Meet Our Team - Certified QA Experts | Testriq',
    description: 'Meet Testriq’s team of ISTQB-certified QA professionals with decades of software testing experience. Get to know the leaders and departments behind our testing excellence.',
    images: ['/og/testriq-our-team-og-img.webp'],
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


const TeamHeroSection = dynamic(
  () => import("@/components/sections/TeamHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const TeamLeadershipSection = dynamic(
  () => import("@/components/sections/TeamLeadershipSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const TeamMembersSection = dynamic(
  () => import("@/components/sections/TeamMembersSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const TeamCultureSection = dynamic(
  () => import("@/components/sections/TeamCultureSection"),
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

export default function OurTeam() {
   const breadcrumbItems = [
    { name: "Home", url: "https://testriq.com/" },
    { name: "Services", url: "https://testriq.com/our-team" },
    { name: "Our Team", url: "https://testriq.com/our-team" }
  ]
  return (
    <div>
        <StructuredData data={ourTeamPageSchema } />
        <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <MainLayout>
        <TeamHeroSection />
        <TeamLeadershipSection />
        <TeamMembersSection />
        <TeamCultureSection />
        <HomeReadyToElevate />
      </MainLayout>
    </div>
  );
}

