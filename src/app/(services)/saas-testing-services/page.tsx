import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    saasTestingServiceSchema,
    createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "SaaS Testing Services | Expert Cloud Application QA & Security",
    description:
        "Premium SaaS testing services for cloud-first companies. Multi-tenant testing, GDPR HIPAA compliance, performance testing, and security audits.",
    keywords: [
        "SaaS Testing Services",
        "SaaS Application Testing",
        "Multi-Tenant Testing",
        "Cloud Application QA",
        "SaaS Security Testing",
        "SOC2 Compliance Testing",
        "GDPR HIPAA Compliance",
        "SaaS Performance Testing",
        "SaaS Regression Testing",
        "API Integration Testing SaaS",
        "SaaS Load Testing",
        "Cross-Platform SaaS Testing",
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
        canonical: "https://www.testriq.com/saas-testing-services",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.testriq.com/saas-testing-services",
        siteName: "Testriq - Global QA & Testing",
        title: "SaaS Testing Services | Expert Cloud Application QA & Security",
        description:
            "Premium SaaS testing services for cloud-first companies. Multi-tenant testing, GDPR HIPAA compliance, performance testing, and security audits.",
        images: [
            {
                url: "/OG/Automation-Testing-Service-Og.webp",
                width: 1200,
                height: 630,
                alt: "SaaS Testing Services - Testriq",
                type: "image/webp",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@testriq",
        creator: "@testriq",
        title: "SaaS Testing Services | Expert Cloud Application QA & Security",
        description:
            "Premium SaaS testing services for cloud-first companies. Multi-tenant testing, GDPR HIPAA compliance, performance testing, and security audits.",
        images: ["/OG/Automation-testing-Services-Twitter.webp"],
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

import SaasTestingHeroSection from "@/components/sections/SaasTestingHeroSection";

const SaasTestingWhyDiffers = dynamic(
    () => import("@/components/sections/SaasTestingWhyDiffers"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[500px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingChallenges = dynamic(
    () => import("@/components/sections/SaasTestingChallenges"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[600px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingMethodologies = dynamic(
    () => import("@/components/sections/SaasTestingMethodologies"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[600px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingScenarios = dynamic(
    () => import("@/components/sections/SaasTestingScenarios"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[600px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingToolsTable = dynamic(
    () => import("@/components/sections/SaasTestingToolsTable"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[400px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingCompanyStages = dynamic(
    () => import("@/components/sections/SaasTestingCompanyStages"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[500px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingMetrics = dynamic(
    () => import("@/components/sections/SaasTestingMetrics"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[700px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingCompliance = dynamic(
    () => import("@/components/sections/SaasTestingCompliance"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[400px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingStrategy = dynamic(
    () => import("@/components/sections/SaasTestingStrategy"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[800px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingEngagement = dynamic(
    () => import("@/components/sections/SaasTestingEngagement"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[700px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const SaasTestingReadyToStart = dynamic(
    () => import("@/components/sections/SaasTestingReadyToStart"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-[600px] bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

export default function SaasTestingPage() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com" },
        {
            name: "Services",
            url: "https://www.testriq.com/saas-testing-services",
        },
        {
            name: "SaaS Testing",
            url: "https://www.testriq.com/saas-testing-services",
        },
    ];

    return (
        <div>
            <StructuredData data={saasTestingServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <SaasTestingHeroSection />
                <SaasTestingWhyDiffers />
                <SaasTestingChallenges />
                <SaasTestingMethodologies />
                <SaasTestingScenarios />
                <SaasTestingToolsTable />
                <SaasTestingCompanyStages />
                <SaasTestingMetrics />
                <SaasTestingCompliance />
                <SaasTestingStrategy />
                <SaasTestingEngagement />
                <SaasTestingReadyToStart />
            </MainLayout>
        </div>
    );
}
