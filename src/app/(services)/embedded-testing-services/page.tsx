import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    embeddedTestingSchema,
    createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
    title: "Embedded Testing Services | Software & Hardware QA | Testriq",
    description:
        "Ensure precision & reliability with Testriq’s expert Embedded Testing Services. Comprehensive V&V for automotive, medical, IoT & safety-critical systems. Partner with us!",
    keywords: [
        "Embedded Testing Services",
        "Embedded Software Testing",
        "Automotive Embedded Testing",
        "Medical Device Software Testing",
        "ISO 26262 Compliance",
        "DO-178C Testing",
        "V&V Services",
        "Software-in-the-loop SIL testing",
        "Model-in-the-loop MIL testing",
        "Hardware-in-the-loop HIL testing",
        "RTOS Testing",
        "Firmware Testing",
        "SoC Testing",
        "IoT Device Testing",
    ],
    openGraph: {
        title: "Embedded Testing Services | Software & Hardware QA | Testriq",
        description:
            "Ensure precision & reliability with Testriq’s expert Embedded Testing Services. Comprehensive V&V for automotive, medical, IoT & safety-critical systems.",
        url: "https://www.testriq.com/embedded-testing-services",
        type: "website",
        images: [
            {
                url: "/assets/images/embedded-testing-og.webp",
                width: 1200,
                height: 630,
                alt: "Embedded Testing Services by Testriq",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Embedded Testing Services | Software & Hardware QA | Testriq",
        description:
            "Ensure precision & reliability with Testriq’s expert Embedded Testing Services. Comprehensive V&V for automotive, medical, IoT & safety-critical systems.",
        images: ["/assets/images/embedded-testing-twitter.webp"],
    },
    metadataBase: new URL("https://www.testriq.com/"),
    alternates: {
        canonical: "https://www.testriq.com/embedded-testing-services",
    },
};

const EmbeddedTestingHeroSection = dynamic(
    () => import("@/components/sections/EmbeddedTestingHeroSection"),
    {
        ssr: true,
        loading: () => <div className="h-screen flex items-center justify-center bg-white"><p className="text-gray-500">Loading Hero...</p></div>,
    }
);

const EmbeddedComplexity = dynamic(
    () => import("@/components/sections/EmbeddedComplexity"),
    { ssr: true }
);

const EmbeddedCritically = dynamic(
    () => import("@/components/sections/EmbeddedCritically"),
    { ssr: true }
);

const EmbeddedServiceOfferings = dynamic(
    () => import("@/components/sections/EmbeddedServiceOfferings"),
    { ssr: true }
);

const EmbeddedTestriqAdvantage = dynamic(
    () => import("@/components/sections/EmbeddedTestriqAdvantage"),
    { ssr: true }
);

const EmbeddedFAQs = dynamic(
    () => import("@/components/sections/EmbeddedFAQs"),
    { ssr: true }
);

const EmbeddedAnyQuestions = dynamic(
    () => import("@/components/sections/EmbeddedAnyQuestions"),
    { ssr: true }
);

export default function EmbeddedTestingPage() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        {
            name: "Services",
            url: "https://www.testriq.com/embedded-testing-services",
        },
        {
            name: "Embedded Testing Services",
            url: "https://www.testriq.com/embedded-testing-services",
        },
    ];

    return (
        <div>
            <StructuredData data={embeddedTestingSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <EmbeddedTestingHeroSection />
                <EmbeddedComplexity />
                <EmbeddedCritically />
                <EmbeddedServiceOfferings />
                <EmbeddedTestriqAdvantage />
                <EmbeddedFAQs />
                <EmbeddedAnyQuestions />
            </MainLayout>
        </div>
    );
}
