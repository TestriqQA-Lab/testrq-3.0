import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    managedTestingServiceSchema,
    organizationSchema,
} from "@/components/seo/StructuredData";
import dynamic from "next/dynamic";

const ManagedTestingHeroSection = dynamic(() => import("@/components/sections/ManagedTestingHeroSection"), { ssr: true });
const ManagedTestingWhatAre = dynamic(() => import("@/components/sections/ManagedTestingWhatAre"), { ssr: true });
const ManagedTestingChallenges = dynamic(() => import("@/components/sections/ManagedTestingChallenges"), { ssr: true });
const ManagedTestingBlueprint = dynamic(() => import("@/components/sections/ManagedTestingBlueprint"), { ssr: true });
const ManagedTestingImplementations = dynamic(() => import("@/components/sections/ManagedTestingImplementations"), { ssr: true });
const ManagedTestingScenarios = dynamic(() => import("@/components/sections/ManagedTestingScenarios"), { ssr: true });
const ManagedTestingEngagementModels = dynamic(() => import("@/components/sections/ManagedTestingEngagementModels"), { ssr: true });
const ManagedTestingMetrics = dynamic(() => import("@/components/sections/ManagedTestingMetrics"), { ssr: true });
const ManagedTestingComparison = dynamic(() => import("@/components/sections/ManagedTestingComparison"), { ssr: true });
const ManagedTestingStrategy = dynamic(() => import("@/components/sections/ManagedTestingStrategy"), { ssr: true });
const ManagedTestingFAQs = dynamic(() => import("@/components/sections/ManagedTestingFAQs"), { ssr: true });
const ManagedTestingReadyToStart = dynamic(() => import("@/components/sections/ManagedTestingReadyToStart"), { ssr: true });

export const metadata: Metadata = {
    title:
        "Managed Testing Services | QA Outsourcing & Dedicated Teams | Testriq",
    description:
        "Testriq's managed testing services provide dedicated QA teams, end-to-end testing solutions, and SLA-backed quality assurance for enterprises. Reduce costs, accelerate time-to-market, and scale testing with confidence.",
    keywords: [
        "managed testing services",
        "QA outsourcing",
        "dedicated QA teams",
        "managed QA services",
        "testing center of excellence",
        "managed test automation",
        "SLA-backed QA",
        "enterprise testing services",
        "QA partnership",
        "outcome-based testing",
        "managed security testing",
        "managed performance testing",
        "agile testing services",
        "DevOps testing",
        "compliance testing services",
        "ISTQB certified QA",
        "software testing outsourcing",
        "testing as a service",
        "QA staff augmentation",
        "managed regression testing",
    ],
    openGraph: {
        title:
            "Managed Testing Services | QA Outsourcing & Dedicated Teams | Testriq",
        description:
            "Transfer your entire testing function to a specialized partner. Testriq's managed QA services combine dedicated teams, proven methodologies, and outcome-based accountability.",
        url: "https://www.testriq.com/managed-testing-services",
        siteName: "Testriq QA Lab",
        type: "website",
        images: [
            {
                url: "https://www.testriq.com/assets/images/services/managed-testing-og.jpg",
                width: 1200,
                height: 630,
                alt: "Testriq Managed Testing Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Managed Testing Services | QA Outsourcing & Dedicated Teams | Testriq",
        description:
            "Testriq's managed testing services provide dedicated QA teams, end-to-end testing solutions, and SLA-backed quality assurance for enterprises.",
    },
    alternates: {
        canonical: "https://www.testriq.com/managed-testing-services",
    },
    robots: {
        index: true,
        follow: true,
    },
    verification: {
        google: "google-site-verification-code",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.testriq.com",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.testriq.com/services",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Managed Testing Services",
            item: "https://www.testriq.com/managed-testing-services",
        },
    ],
};

export default function ManagedTestingServicesPage() {
    return (
        <MainLayout>
            <StructuredData data={managedTestingServiceSchema} />
            <StructuredData data={organizationSchema} />
            <StructuredData data={breadcrumbSchema} />

            <ManagedTestingHeroSection />
            <ManagedTestingWhatAre />
            <ManagedTestingChallenges />
            <ManagedTestingBlueprint />
            <ManagedTestingImplementations />
            <ManagedTestingScenarios />
            <ManagedTestingEngagementModels />
            <ManagedTestingMetrics />
            <ManagedTestingComparison />
            <ManagedTestingStrategy />
            <ManagedTestingFAQs />
            <ManagedTestingReadyToStart />
        </MainLayout>
    );
}
