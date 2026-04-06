import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    tdmServiceSchema,
    tdmFAQSchema,
    createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
    title: "Test Data Management Services | TDM QA & Synthetic Data Company - Testriq",
    description:
        "Optimize your QA with Testriq's Test Data Management services. We offer secure data masking, synthetic data generation, and automated TDM solutions to ensure high-quality testing with total compliance.",
    keywords: [
        "Test Data Management Services",
        "TDM QA",
        "Synthetic Data Company",
        "data masking services",
        "synthetic data generation",
        "automated TDM solutions",
        "test data provisioning",
        "GDPR compliance TDM",
        "PII data masking",
        "test data subsetting",
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
        canonical: "https://www.testriq.com/test-data-management-services",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.testriq.com/test-data-management-services",
        siteName: "Testriq - TDM Services",
        title: "Test Data Management Services | Secure & Scalable Data Solutions",
        description:
            "Transform your test data into a competitive advantage with Testriq. AI-powered synthetic data, advanced masking, and compliance-driven TDM.",
        images: [
            {
                url: "/OG/test-data-management-services-og.webp",
                width: 1200,
                height: 630,
                alt: "Test Data Management Services - Testriq",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@testriq",
        creator: "@testriq",
        title: "Test Data Management Services | TDM QA & Synthetic Data",
        description:
            "Optimize QA with secure data masking, synthetic data, and automated TDM solutions from Testriq.",
        images: ["/OG/test-data-management-services-twitter.webp"],
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

const TDMHeroSection = dynamic(() => import("@/components/sections/TDMHeroSection"), {
    ssr: true,
    loading: () => <div className="h-[600px] animate-pulse bg-gray-50" />,
});

const TDMAdvantageSection = dynamic(() => import("@/components/sections/TDMAdvantageSection"), {
    ssr: true,
    loading: () => <div className="h-[400px] animate-pulse bg-gray-50" />,
});

const TDMServicesSection = dynamic(() => import("@/components/sections/TDMServicesSection"), {
    ssr: true,
    loading: () => <div className="h-[800px] animate-pulse bg-gray-50" />,
});

const TDMMethodologySection = dynamic(() => import("@/components/sections/TDMMethodologySection"), {
    ssr: true,
    loading: () => <div className="h-[600px] animate-pulse bg-gray-50" />,
});

const TDMFAQs = dynamic(() => import("@/components/sections/TDMFAQs"), {
    ssr: true,
    loading: () => <div className="h-[500px] animate-pulse bg-gray-50" />,
});

const TDMCTASection = dynamic(() => import("@/components/sections/TDMCTASection"), {
    ssr: true,
    loading: () => <div className="h-[400px] animate-pulse bg-gray-50" />,
});

export default function TestDataManagementPage() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        { name: "Services", url: "https://www.testriq.com/test-data-management-services" },
        {
            name: "Test Data Management",
            url: "https://www.testriq.com/test-data-management-services",
        },
    ];

    return (
        <div>
            <StructuredData data={tdmServiceSchema} />
            <StructuredData data={tdmFAQSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <TDMHeroSection />
                <TDMAdvantageSection />
                <TDMServicesSection />
                <TDMMethodologySection />
                <TDMFAQs />
                <TDMCTASection />
            </MainLayout>
        </div>
    );
}
