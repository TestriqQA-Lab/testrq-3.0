import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    azureTestingSchema,
    azureFAQSchema,
    createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
    title: "Enterprise Azure Testing Services | Cloud-Native QA & DevOps",
    description:
        "Secure and optimize your cloud ecosystem with Testriq's Azure testing services. From seamless cloud migrations to continuous Azure DevOps QA, our certified experts ensure enterprise-grade excellence.",
    keywords: [
        "Azure testing services",
        "Azure DevOps QA",
        "cloud migration testing",
        "AKS testing",
        "Azure application services testing",
        "Azure security audit",
        "Azure performance testing",
        "Azure SQL testing",
        "cloud-native QA",
        "Microsoft Azure testing",
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
        canonical: "https://www.testriq.com/azure-testing-services",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.testriq.com/azure-testing-services",
        siteName: "Testriq - Azure Testing Services",
        title: "Enterprise Azure Testing Services - Cloud-Native QA & DevOps",
        description:
            "Partner with global Azure testing specialists to secure your digital future. From comprehensive cloud migrations to continuous DevOps QA, Testriq provides the expertise you need.",
        images: [
            {
                url: "/OG/Azure-Testing-Service-og.webp",
                width: 1200,
                height: 630,
                alt: "Azure Testing Services - Testriq",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@testriq",
        creator: "@testriq",
        title: "Enterprise Azure Testing Services - Cloud-Native QA & DevOps",
        description:
            "Partner with global Azure testing specialists to secure your digital future. Comprehensive cloud migrations and continuous DevOps QA.",
        images: ["/OG/Azure-Testing-Service-Twitter.webp"],
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

const AzureTestingHeroSection = dynamic(
    () => import("@/components/sections/AzureTestingHeroSection"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-white">
                <p className="text-gray-500 font-bold">Loading Cloud Environment...</p>
            </div>
        ),
    }
);

const AzureTestingWhyTrust = dynamic(
    () => import("@/components/sections/AzureTestingWhyTrust"),
    { ssr: true }
);

const AzureTestingSolutions = dynamic(
    () => import("@/components/sections/AzureTestingSolutions"),
    { ssr: true }
);

const AzureTestingMethodology = dynamic(
    () => import("@/components/sections/AzureTestingMethodology"),
    { ssr: true }
);

const AzureTestingFAQs = dynamic(
    () => import("@/components/sections/AzureTestingFAQs"),
    { ssr: true }
);

const AzureTestingCTA = dynamic(
    () => import("@/components/sections/AzureTestingCTA"),
    { ssr: true }
);

export default function AzureTestingPage() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        { name: "Services", url: "https://www.testriq.com/services" },
        {
            name: "Azure Testing Services",
            url: "https://www.testriq.com/azure-testing-services",
        },
    ];

    return (
        <div>
            <StructuredData data={azureTestingSchema} />
            <StructuredData data={azureFAQSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <AzureTestingHeroSection />
                <AzureTestingWhyTrust />
                <AzureTestingSolutions />
                <AzureTestingMethodology />
                <AzureTestingFAQs />
                <AzureTestingCTA />
            </MainLayout>
        </div>
    );
}
