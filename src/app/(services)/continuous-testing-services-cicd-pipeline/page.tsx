import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    continuousTestingServiceSchema,
    createCanonicalBreadcrumb,
} from "@/components/seo/StructuredData";

export const revalidate = 3600; // ISR: Revalidate every hour

export const metadata: Metadata = {
    title: "Continuous Testing Services & CI/CD Integration | Testriq",
    description:
        "Eliminate bottlenecks and shift quality left with Testriq's Continuous Testing Services. We integrate automated testing into your CI/CD pipeline for faster releases and elite DevOps performance.",
    keywords: [
        "Continuous Testing Services",
        "CI/CD Pipeline Testing",
        "DevOps Testing Integration",
        "Shift-Left Testing",
        "Automated Regression Testing",
        "Continuous Performance Testing",
        "Continuous Security Testing",
        "Test Data Management",
        "DORA Metrics Optimization",
        "CI/CD Quality Engineering",
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
        canonical:
            "https://www.testriq.com/continuous-testing-services-cicd-pipeline",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.testriq.com/continuous-testing-services-cicd-pipeline",
        siteName: "Testriq - Global QA & Testing",
        title: "Continuous Testing Services & CI/CD Integration | Testriq",
        description:
            "Eliminate bottlenecks and shift quality left with Testriq's Continuous Testing Services. We integrate automated testing into your CI/CD pipeline for faster releases.",
        images: [
            {
                url: "https://www.testriq.com/OG/continues-testing-og-image.webp",
                width: 1200,
                height: 630,
                alt: "Continuous Testing Services - Testriq",
                type: "image/webp",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@testriq",
        creator: "@testriq",
        title: "Continuous Testing Services & CI/CD Integration | Testriq",
        description:
            "Eliminate bottlenecks and shift quality left with Testriq's Continuous Testing Services. We integrate automated testing into your CI/CD pipeline for faster releases.",
        images: ["https://www.testriq.com/OG/continues-testing-og-image.webp"],
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

import ContinuousTestingHeroSection from "@/components/sections/ContinuousTestingHeroSection";

const ContinuousTestingWhyDevOps = dynamic(
    () => import("@/components/sections/ContinuousTestingWhyDevOps"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[500px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const ContinuousTestingBenefits = dynamic(
    () => import("@/components/sections/ContinuousTestingBenefits"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[500px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const ContinuousTestingComprehensiveSlider = dynamic(
    () => import("@/components/sections/ContinuousTestingComprehensiveSlider"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[800px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const ContinuousTestingSpecialized = dynamic(
    () => import("@/components/sections/ContinuousTestingSpecialized"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[600px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const ContinuousTestingFAQs = dynamic(
    () => import("@/components/sections/ContinuousTestingFAQs"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[600px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const ContinuousTestingReadyToAccelerate = dynamic(
    () => import("@/components/sections/ContinuousTestingReadyToAccelerate"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[600px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

export default function ContinuousTestingPage() {
    // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
    // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL)
    // to 2 canonical items; URL now structurally derived from pathname.
    return (
        <div>
            <StructuredData data={continuousTestingServiceSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/continuous-testing-services-cicd-pipeline",
                    "Continuous Testing"
                )}
            />
            <MainLayout>
                <ContinuousTestingHeroSection />
                <ContinuousTestingWhyDevOps />
                <ContinuousTestingBenefits />
                <ContinuousTestingComprehensiveSlider />
                <ContinuousTestingSpecialized />
                <ContinuousTestingFAQs />
                <ContinuousTestingReadyToAccelerate />
            </MainLayout>
        </div>
    );
}
