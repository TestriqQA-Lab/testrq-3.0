"use client";

import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    createBreadcrumbSchema,
    agileTestingSchema,
    agileFAQSchema,
} from "@/components/seo/StructuredData";

// Loading component for dynamic sections
const SectionLoading = () => (
    <div className="flex items-center justify-center h-96 bg-gray-50">
        <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-sky-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sky-900 font-bold animate-pulse">Synchronizing Sprints...</p>
        </div>
    </div>
);

// Dynamic imports for sections
const AgileTestingHeroSection = dynamic(
    () => import("@/components/sections/AgileTestingHeroSection"),
    { ssr: true, loading: SectionLoading }
);

const AgileTestingWhyChoose = dynamic(
    () => import("@/components/sections/AgileTestingWhyChoose"),
    { ssr: true, loading: SectionLoading }
);

const AgileTestingSolutions = dynamic(
    () => import("@/components/sections/AgileTestingSolutions"),
    { ssr: true, loading: SectionLoading }
);

const AgileTestingMethodology = dynamic(
    () => import("@/components/sections/AgileTestingMethodology"),
    { ssr: true, loading: SectionLoading }
);

const AgileTestingFAQs = dynamic(
    () => import("@/components/sections/AgileTestingFAQs"),
    { ssr: true, loading: SectionLoading }
);

const AgileTestingCTA = dynamic(
    () => import("@/components/sections/AgileTestingCTA"),
    { ssr: true, loading: SectionLoading }
);

export default function AgileTestingServicesPage() {
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        {
            name: "Services",
            url: "https://www.testriq.com/agile-testing-services",
        },
        {
            name: "Agile Testing Services",
            url: "https://www.testriq.com/agile-testing-services",
        },
    ];

    return (
        <>
            <title>Expert Agile Testing Services | Agile QA & Continuous Testing | Testriq</title>
            <meta name="description" content="Accelerate your release cycles with Testriq's Agile testing services. Expert-led continuous testing, shift-left QA, and sprint-ready automation for global teams in 2026." />

            <StructuredData data={agileTestingSchema} />
            <StructuredData data={agileFAQSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />

            <MainLayout>
                <AgileTestingHeroSection />
                <AgileTestingWhyChoose />
                <AgileTestingSolutions />
                <AgileTestingMethodology />
                <AgileTestingFAQs />
                <AgileTestingCTA />
            </MainLayout>
        </>
    );
}
