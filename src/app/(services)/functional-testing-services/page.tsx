import { Metadata } from "next";
import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, { functionalServiceSchema, createBreadcrumbSchema } from "@/components/seo/StructuredData";

import FunctionalHeroSection from "@/components/sections/FunctionalHeroSection";

const FunctionalCriticalitySection = dynamic(
    () => import("@/components/sections/FunctionalCriticalitySection"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const FunctionalWhySection = dynamic(
    () => import("@/components/sections/FunctionalWhySection"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const FunctionalSolutionsSection = dynamic(
    () => import("@/components/sections/FunctionalSolutionsSection"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const FunctionalAdvantageSection = dynamic(
    () => import("@/components/sections/FunctionalAdvantageSection"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const FunctionalFAQs = dynamic(
    () => import("@/components/sections/FunctionalFAQs"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const FunctionalNextStepsSection = dynamic(
    () => import("@/components/sections/FunctionalNextStepsSection"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

export const metadata: Metadata = {
    title: "Functional Testing Services | Software QA & Automation | Testriq",
    description: "Ensure flawless software performance with Testriq's expert Functional Testing Services. Comprehensive QA, automation & validation for web, mobile & enterprise applications. Partner with us!",
    alternates: {
        canonical: "https://www.testriq.com/functional-testing-services",
    },
    keywords: [
        "Functional Testing Services",
        "Software Functional Testing",
        "Automated Functional Testing",
        "QA Functional Testing",
        "Functional QA Solutions",
        "Web App Functional Testing",
        "Mobile App Functional Testing",
        "Enterprise Software Testing"
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
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.testriq.com/functional-testing-services",
        siteName: "Testriq - Professional Software Testing Services",
        title: "Functional Testing Services | Software QA & Automation | Testriq",
        description:
            "Ensure flawless software performance with Testriq's expert Functional Testing Services. Comprehensive QA, automation & validation for web, mobile & enterprise applications.",
        images: [
            {
                url: "/OG/Functional-Testing-Service-Og.webp",
                width: 1200,
                height: 630,
                alt: "Functional Testing Services by Testriq QA Lab",
                type: "image/webp",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@testriq",
        creator: "@testriq",
        title: "Functional Testing Services | Software QA & Automation | Testriq",
        description:
            "Ensure flawless software performance with Testriq's expert Functional Testing Services. Comprehensive QA, automation & validation for web, mobile & enterprise applications.",
        images: ["/OG/Functional-Testing-Service-Twitter.webp"],
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

export default function FunctionalTestingPage() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com" },
        { name: "Services", url: "https://www.testriq.com/functional-testing-services" },
        { name: "Functional Testing", url: "https://www.testriq.com/functional-testing-services" },
    ];

    return (
        <div>
            <StructuredData data={functionalServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <FunctionalHeroSection />
                <FunctionalCriticalitySection />
                <FunctionalWhySection />
                <FunctionalSolutionsSection />
                <FunctionalAdvantageSection />
                <FunctionalFAQs />
                <FunctionalNextStepsSection />
            </MainLayout>
        </div>
    );
}
