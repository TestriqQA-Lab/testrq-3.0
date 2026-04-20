import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import StructuredData, {
    timezoneTestingServiceSchema,
    timezoneFAQSchema,
    createBreadcrumbSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
    title: "Testing in Your Time Zone | Real-Time QA & Follow-the-Sun Testing - Testriq",
    description:
        "Accelerate your development with Testriq's Testing in Your Time Zone services. We offer real-time collaboration, follow-the-sun QA, and localized support for global enterprises.",
    keywords: [
        "Testing in Your Time Zone",
        "Real-Time QA Collaboration",
        "Follow-the-Sun Testing",
        "Nearshore Software Testing",
        "Localized QA Support",
        "Synchronous QA",
        "Global Delivery Model QA",
        "24/7 Software Testing",
        "Agile QA Integration",
        "Localized UAT Services",
    ],
    alternates: {
        canonical: "https://www.testriq.com/timezone-testing-services",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.testriq.com/timezone-testing-services",
        siteName: "Testriq - Time Zone Aligned QA",
        title: "Testing in Your Time Zone | Real-Time QA & Follow-the-Sun Testing - Testriq",
        description:
            "Transform your global delivery model with Testriq's real-time QA services. Achieve synchronous engineering excellence with follow-the-sun cycles.",
        images: [
            {
                url: "/OG/timezone-testing-service-og.webp",
                width: 1200,
                height: 630,
                alt: "Time Zone Aligned QA Services - Testriq",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@testriq",
        title: "Testing in Your Time Zone | Real-Time QA & Follow-the-Sun Testing - Testriq",
        description:
            "Accelerate development with real-time QA collaboration and localized support. Testriq's follow-the-sun model ensures continuous quality.",
        images: ["/OG/timezone-testing-service-twitter.webp"],
    },
};

// Dynamic imports for UI sections
const TimezoneTestingHero = dynamic(() => import("@/components/sections/TimezoneTestingHero"), { ssr: true });
const TimezoneAdvantageSection = dynamic(() => import("@/components/sections/TimezoneAdvantageSection"), { ssr: true });
const TimezoneServicesGrid = dynamic(() => import("@/components/sections/TimezoneServicesGrid"), { ssr: true });
const TimezoneMethodology = dynamic(() => import("@/components/sections/TimezoneMethodology"), { ssr: true });
const TimezoneFAQs = dynamic(() => import("@/components/sections/TimezoneFAQs"), { ssr: true });
const TimezoneCTA = dynamic(() => import("@/components/sections/TimezoneCTA"), { ssr: true });

export default function TimezoneTestingServices() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        { name: "Services", url: "https://www.testriq.com/timezone-testing-services" },
        {
            name: "Testing in Your Time Zone",
            url: "https://www.testriq.com/timezone-testing-services",
        },
    ];

    return (
        <div>
            <StructuredData data={timezoneTestingServiceSchema} />
            <StructuredData data={timezoneFAQSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />

            <MainLayout>
                <TimezoneTestingHero />
                <TimezoneAdvantageSection />
                <TimezoneServicesGrid />
                <TimezoneMethodology />
                <TimezoneFAQs />
                <TimezoneCTA />
            </MainLayout>
        </div>
    );
}
