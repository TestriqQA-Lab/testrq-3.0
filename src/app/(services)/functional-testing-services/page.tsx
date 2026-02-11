import { Metadata } from "next";
import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, { functionalServiceSchema } from "@/components/seo/StructuredData";

// Dynamic imports for optimized loading
const FunctionalHeroSection = dynamic(() => import("@/components/sections/FunctionalHeroSection"));
const FunctionalCriticalitySection = dynamic(() => import("@/components/sections/FunctionalCriticalitySection"));
const FunctionalWhySection = dynamic(() => import("@/components/sections/FunctionalWhySection"));
const FunctionalSolutionsSection = dynamic(() => import("@/components/sections/FunctionalSolutionsSection"));
const FunctionalAdvantageSection = dynamic(() => import("@/components/sections/FunctionalAdvantageSection"));
const FunctionalFAQs = dynamic(() => import("@/components/sections/FunctionalFAQs"));
const FunctionalNextStepsSection = dynamic(() => import("@/components/sections/FunctionalNextStepsSection"));

export const metadata: Metadata = {
    title: "Functional Testing Services | Software QA & Automation | Testriq",
    description: "Ensure flawless software performance with Testriq’s expert Functional Testing Services. Comprehensive QA, automation & validation for web, mobile & enterprise applications. Partner with us!",
    alternates: {
        canonical: "https://www.testriq.com/services/functional-testing-services",
    },
    keywords: [
        "Functional Testing Services",
        "Software Functional Testing",
        "Automated Functional Testing",
        "QA Functional Testing",
        "Functional QA Solutions",
        "Web App Functional Testing",
        "Mobile App Functional Testing",
        "Enterprise Software Testing"
    ],
};

export default function FunctionalTestingPage() {
    return (
        <>
            <StructuredData data={functionalServiceSchema} />
            <MainLayout>
                <FunctionalHeroSection />
                <FunctionalCriticalitySection />
                <FunctionalWhySection />
                <FunctionalSolutionsSection />
                <FunctionalAdvantageSection />
                <FunctionalFAQs />
                <FunctionalNextStepsSection />
            </MainLayout>
        </>
    );
}
