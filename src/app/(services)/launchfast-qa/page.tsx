import LaunchFastQAHeroSection from "@/components/sections/LaunchFastQAHeroSection";
import LaunchFastChallenges from "@/components/sections/LaunchFastChallenges";
import LaunchFastComprehensiveSlider from "@/components/sections/LaunchFastComprehensiveSlider";
import LaunchFastProvenTestingProcess from "@/components/sections/LaunchFastProvenTestingProcess";
import LaunchFastCompliance from "@/components/sections/LaunchFastCompliance";
import LaunchFastWhyChooseTestriq from "@/components/sections/LaunchFastWhyChooseTestriq";
import LaunchFastToolsFramework from "@/components/sections/LaunchFastToolsFramework";
import LaunchFastCaseStudies from "@/components/sections/LaunchFastCaseStudies";
import LaunchFastFAQs from "@/components/sections/LaunchFastFAQs";
import type { Metadata } from "next";
import StructuredData, {
  launchFastQASchema,
  createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Launch-Fast QA Services for Companies",

  description:
    "Testriq provides Launch-Fast QA services for startups and MVPs. Accelerate your software release cycle with agile QA, rapid testing sprints, and 24/7 support. Ensure investor-ready quality and global compliance.",
  keywords: [
    "Launch-Fast QA",
    "rapid QA testing services",
    "startup MVP testing",
    "agile QA practices",
    "CI/CD integration for startups",
    "ISO 29119-6 compliance",
    "on-demand QA",
    "24/7 software testing support",
    "investor-ready QA reporting",
    "automated smoke suite",
    "startup quality assurance",
  ],
  authors: [{ name: "Testriq QA Lab" }],
  creator: "Testriq QA Lab LLP",
  publisher: "Testriq QA Lab LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.testriq.com/"),
  alternates: {
    canonical: "https://www.testriq.com/launchfast-qa",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.testriq.com/launchfast-qa",
    siteName: "Testriq - LaunchFast QA Services",
    title: "Launch-Fast QA Services for Companies | Testriq",
    description:
      "Rapid QA testing designed for startup MVP success. Agile integration, 24/7 support, and investor-ready traceability to accelerate your launch.",
    images: [
      {
        url: "/OG/Launch-Fast-QA-Service-og.webp",
        width: 1200,
        height: 630,
        alt: "LaunchFast QA Services - Testriq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@testriq",
    creator: "@testriq",
    title: "Launch-Fast QA Services for Companies | Testriq",
    description:
      "Rapid QA testing designed for startup MVP success. Agile integration, 24/7 support, and investor-ready traceability to accelerate your launch.",
    images: ["/OG/Launch_Fast_QA-Twitter.webp"],
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
  verification: {
    google: "LXeSv6xxgAa1jB9JlWwO9ysJ1FNvWzgN3i3GyQs2AD0",
    yandex: "ff703971283d110e",
    yahoo: "0A67349B8CD11BF71173B38572028507",
  },
};

export default function LaunchFastQAPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.testriq.com/" },
    { name: "Services", url: "https://www.testriq.com/launchfast-qa" },
    { name: "LaunchFast QA", url: "https://www.testriq.com/launchfast-qa" },
  ];
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={launchFastQASchema} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
      <LaunchFastQAHeroSection />
      <LaunchFastChallenges />
      <LaunchFastComprehensiveSlider />
      <LaunchFastProvenTestingProcess />
      <LaunchFastCompliance />
      <LaunchFastWhyChooseTestriq />
      <LaunchFastToolsFramework />
      <LaunchFastCaseStudies />
      <LaunchFastFAQs />
    </div>
  );
}
