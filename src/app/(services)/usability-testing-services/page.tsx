import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    usabilityTestingServiceSchema,
    createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "Usability Testing Services | UX Audit & User Testing Company - Testriq",
    description:
        "Boost user satisfaction & conversions with Testriq's expert usability testing services. We offer AI-driven UX audits, mobile app usability testing, and comprehensive user research for optimal digital experiences.",
    keywords: [
        "Usability Testing Services",
        "UX Audit Services",
        "User Testing Company",
        "Mobile App Usability Testing",
        "Website Usability Testing",
        "eCommerce Usability Testing",
        "AI-Driven UX Audit",
        "User Research Services",
        "ISTQB Certified UX Testing",
        "Remote Usability Testing Agency",
    ],
    authors: [{ name: "Testriq QA Lab" }],
    creator: "Testriq QA Lab LLP",
    publisher: "Testriq QA Lab LLP",
    metadataBase: new URL("https://www.testriq.com/"),
    alternates: {
        canonical: "https://www.testriq.com/usability-testing-services",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.testriq.com/usability-testing-services",
        siteName: "Testriq - Global UX QA",
        title: "Usability Testing Services | UX Audit & User Testing Company - Testriq",
        description:
            "Transform your user experience with Testriq's AI-driven usability testing and UX audits. Drive higher engagement and conversion rates.",
        images: [
            {
                url: "/OG/Usability-Testing-Og.webp",
                width: 1200,
                height: 630,
                alt: "Usability Testing Services - Testriq",
                type: "image/webp",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@testriq",
        creator: "@testriq",
        title: "Usability Testing Services | UX Audit & User Testing Company - Testriq",
        description:
            "Expert usability testing and user research for web and mobile apps. Elevate your UX and drive business growth.",
        images: ["/OG/Usability-Testing-Twitter.webp"],
    },
};

import UsabilityTestingHeroSection from "@/components/sections/UsabilityTestingHeroSection";

const UsabilityTestingCrucialSection = dynamic(
    () => import("@/components/sections/UsabilityTestingCrucialSection"),
    {
        ssr: true,
        loading: () => <div className="h-[400px] animate-pulse bg-gray-50 rounded-[3rem] m-8" />
    }
);

const UsabilityTestingAdvantage = dynamic(
    () => import("@/components/sections/UsabilityTestingAdvantage"),
    {
        ssr: true,
        loading: () => <div className="h-[500px] animate-pulse bg-white rounded-[3rem] m-8" />
    }
);

const UsabilityTestingServicesGrid = dynamic(
    () => import("@/components/sections/UsabilityTestingServicesGrid"),
    {
        ssr: true,
        loading: () => <div className="h-[800px] animate-pulse bg-gray-50 rounded-[3rem] m-8" />
    }
);

const UsabilityTestingMethodology = dynamic(
    () => import("@/components/sections/UsabilityTestingMethodology"),
    {
        ssr: true,
        loading: () => <div className="h-[500px] animate-pulse bg-white rounded-[3rem] m-8" />
    }
);

const UsabilityTestingFAQs = dynamic(
    () => import("@/components/sections/UsabilityTestingFAQs"),
    {
        ssr: true,
        loading: () => <div className="h-[600px] animate-pulse bg-gray-50 rounded-[3rem] m-8" />
    }
);

const UsabilityTestingCTASection = dynamic(
    () => import("@/components/sections/UsabilityTestingCTASection"),
    {
        ssr: true,
        loading: () => <div className="h-[400px] animate-pulse bg-white rounded-[3rem] m-8" />
    }
);

export default function UsabilityTestingPage() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com" },
        {
            name: "Services",
            url: "https://www.testriq.com/services",
        },
        {
            name: "Usability Testing",
            url: "https://www.testriq.com/usability-testing-services",
        },
    ];

    return (
        <div className="scroll-smooth">
            <StructuredData data={usabilityTestingServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <UsabilityTestingHeroSection />
                <UsabilityTestingCrucialSection />
                <UsabilityTestingAdvantage />
                <UsabilityTestingServicesGrid />
                <UsabilityTestingMethodology />
                <UsabilityTestingFAQs />
                <UsabilityTestingCTASection />
            </MainLayout>
        </div>
    );
}
