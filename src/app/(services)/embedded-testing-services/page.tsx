import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    embeddedTestingSchema,
    createCanonicalBreadcrumb,
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
                url: "https://www.testriq.com/OG/Embedded-testing-service-og-image.webp",
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
        images: ["https://www.testriq.com/OG/Embedded-testing-service-og-image.webp"],
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
    // TODO(seo phase-3): Pattern D fixed via createCanonicalBreadcrumb helper —
    // breadcrumb reduced from 3 items (intermediate "Services" node with wrong URL)
    // to 2 canonical items; URL now structurally derived from pathname.
    return (
        <div>
            <StructuredData data={embeddedTestingSchema} />
            <StructuredData
                data={createCanonicalBreadcrumb(
                    "/embedded-testing-services",
                    "Embedded Testing Services"
                )}
            />
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
