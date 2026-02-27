import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    compatibilityTestingServiceSchema,
    compatibilityFAQSchema,
    createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "Compatibility Testing Services | Cross-Browser & Device QA | Testriq",
    description:
        "Ensure seamless user experiences with Testriq’s expert Compatibility Testing Services. Validate software across all browsers, OS, & devices. Partner for universal performance!",
    keywords: [
        "Compatibility Testing Services",
        "Cross-browser testing services",
        "Device lab testing",
        "Mobile app compatibility testing",
        "Website compatibility testing",
        "Regression and compatibility testing",
        "Automated compatibility testing",
        "User interface consistency",
        "ISO 29119 certified testing",
        "Global QA outsourcing",
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
        canonical: "https://www.testriq.com/compatibility-testing-services",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.testriq.com/compatibility-testing-services",
        siteName: "Testriq - Global Compatibility & QA",
        title: "Compatibility Testing Services | Cross-Browser & Device QA | Testriq",
        description:
            "Global compatibility solutions for web and mobile. We ensure your application performs perfectly across every device, browser, and OS with ISO-certified QA.",
        images: [
            {
                url: "/OG/Compatibility-Testing-Service-Og.webp",
                width: 1200,
                height: 630,
                alt: "Compatibility Testing Services - Testriq",
                type: "image/webp",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@testriq",
        creator: "@testriq",
        title: "Compatibility Testing Services | Cross-Browser & Device QA | Testriq",
        description:
            "Expert cross-device and cross-browser testing for global enterprises. Partner for universal performance and flawless UX.",
        images: ["/OG/Compatibility-Testing-Twitter-Img.webp"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

// Component Imports
import CompatibilityTestingHeroSection from "@/components/sections/CompatibilityTestingHeroSection";

const CompatibilityTestingDigitalDiversity = dynamic(
    () => import("@/components/sections/CompatibilityTestingDigitalDiversity"),
    { ssr: true }
);

const CompatibilityTestingCrucialSection = dynamic(
    () => import("@/components/sections/CompatibilityTestingCrucialSection"),
    { ssr: true }
);

const CompatibilityTestingServicesSection = dynamic(
    () => import("@/components/sections/CompatibilityTestingServicesSection"),
    { ssr: true }
);

const CompatibilityTestingAdvantageSection = dynamic(
    () => import("@/components/sections/CompatibilityTestingAdvantageSection"),
    { ssr: true }
);

const CompatibilityTestingFAQs = dynamic(
    () => import("@/components/sections/CompatibilityTestingFAQs"),
    { ssr: true }
);

const CompatibilityTestingReadyToStart = dynamic(
    () => import("@/components/sections/CompatibilityTestingReadyToStart"),
    { ssr: true }
);

export default function CompatibilityTestingPage() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com" },
        {
            name: "Services",
            url: "https://www.testriq.com/compatibility-testing-services",
        },
        {
            name: "Compatibility Testing",
            url: "https://www.testriq.com/compatibility-testing-services",
        },
    ];

    return (
        <div>
            <StructuredData data={compatibilityTestingServiceSchema} />
            <StructuredData data={compatibilityFAQSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <CompatibilityTestingHeroSection />
                <CompatibilityTestingDigitalDiversity />
                <CompatibilityTestingCrucialSection />
                <CompatibilityTestingServicesSection />
                <CompatibilityTestingAdvantageSection />
                <CompatibilityTestingFAQs />
                <CompatibilityTestingReadyToStart />
            </MainLayout>
        </div>
    );
}
