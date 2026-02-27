import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    architectureServiceSchema,
    architectureFAQSchema,
    createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
    title: "Application Architecture Inspection | Software Architecture Audit - Testriq",
    description:
        "Optimize your system design with Testriq's Application Architecture Inspection services. We offer microservices reviews, technical debt assessments, and cloud-native audits to ensure high-performance software delivery.",
    keywords: [
        "Application Architecture Inspection",
        "Software Architecture Audit",
        "microservices review",
        "technical debt assessment",
        "cloud-native audit",
        "system design review",
        "scalability inspection",
        "legacy modernization audit",
        "distributed systems review",
        "architecture health check",
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
        canonical: "https://www.testriq.com/application-architecture-inspection-services",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.testriq.com/application-architecture-inspection-services",
        siteName: "Testriq - Architecture Inspection",
        title: "Application Architecture Inspection | Scale, Endure, Evolve",
        description:
            "Engineering resilience into your digital core. Expert architecture reviews, technical debt audits, and cloud-native validation from Testriq.",
        images: [
            {
                url: "/OG/architecture-inspection-services-og.webp",
                width: 1200,
                height: 630,
                alt: "Application Architecture Inspection Services - Testriq",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@testriq",
        creator: "@testriq",
        title: "Application Architecture Inspection | Software Architecture Audit",
        description:
            "Optimize system design with expert microservices reviews and technical debt assessments from Testriq.",
        images: ["/OG/architecture-inspection-services-twitter.webp"],
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

const ArchitectureHeroSection = dynamic(() => import("@/components/sections/ArchitectureHeroSection"), {
    ssr: true,
    loading: () => <div className="h-[600px] animate-pulse bg-gray-50" />,
});

const ArchitectureAdvantageSection = dynamic(() => import("@/components/sections/ArchitectureAdvantageSection"), {
    ssr: true,
    loading: () => <div className="h-[400px] animate-pulse bg-gray-50" />,
});

const ArchitectureServicesSection = dynamic(() => import("@/components/sections/ArchitectureServicesSection"), {
    ssr: true,
    loading: () => <div className="h-[800px] animate-pulse bg-gray-50" />,
});

const ArchitectureMethodologySection = dynamic(() => import("@/components/sections/ArchitectureMethodologySection"), {
    ssr: true,
    loading: () => <div className="h-[600px] animate-pulse bg-gray-50" />,
});

const ArchitectureFAQs = dynamic(() => import("@/components/sections/ArchitectureFAQs"), {
    ssr: true,
    loading: () => <div className="h-[500px] animate-pulse bg-gray-50" />,
});

const ArchitectureCTASection = dynamic(() => import("@/components/sections/ArchitectureCTASection"), {
    ssr: true,
    loading: () => <div className="h-[400px] animate-pulse bg-gray-50" />,
});

export default function ArchitectureInspectionPage() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        {
            name: "Services",
            url: "https://www.testriq.com/application-architecture-inspection-services",
        },
        {
            name: "Architecture Inspection",
            url: "https://www.testriq.com/application-architecture-inspection-services",
        },
    ];

    return (
        <div>
            <StructuredData data={architectureServiceSchema} />
            <StructuredData data={architectureFAQSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <ArchitectureHeroSection />
                <ArchitectureAdvantageSection />
                <ArchitectureServicesSection />
                <ArchitectureMethodologySection />
                <ArchitectureFAQs />
                <ArchitectureCTASection />
            </MainLayout>
        </div>
    );
}
