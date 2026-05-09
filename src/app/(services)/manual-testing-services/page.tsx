import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    createBreadcrumbSchema,
    manualTestingServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import ManualTestingHeroSection from "@/components/sections/ManualTestingHeroSection";
import ManualTestingComprehensiveSlider from "@/components/sections/ManualTestingComprehensiveSlider";
import ManualTestingHumanAdvantage from "@/components/sections/ManualTestingHumanAdvantage";
import ManualTestingProvenTestingProcess from "@/components/sections/ManualTestingProvenTestingProcess";
import ManualTestingWhyChooseTestriq from "@/components/sections/ManualTestingWhyChooseTestriq";
import ManualTestingToolsFramework from "@/components/sections/ManualTestingToolsFramework";
import ManualTestingGlobalReach from "@/components/sections/ManualTestingGlobalReach";
import ManualTestingCaseStudies from "@/components/sections/ManualTestingCaseStudies";
import ManualTestingFAQs from "@/components/sections/ManualTestingFAQs";
import ManualTestingReadyToEnsureQuality from "@/components/sections/ManualTestingReadyToEnsureQuality";

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/manual-testing-services",
        title: "Manual Testing Services | ISTQB-Certified QA | Testriq",
        description:
            "Validate complex apps with Testriq's manual testing services. ISTQB-certified QA, ISO 29119 standards, and human exploratory testing across all platforms.",
        ogImage: {
            url: "https://www.testriq.com/OG/Manual-Testing-Service-og.webp",
            width: 1200,
            height: 630,
            alt: "Testriq Manual Testing Services by QA Experts",
            type: "image/webp",
        },
        twitterImage: "https://www.testriq.com/OG/Manual-Testing-Service-Twitter.webp",
        keywords: [
            "manual testing services",
            "ISTQB certified QA",
            "ISO 29119 testing",
            "exploratory testing services",
            "managed UAT",
            "manual regression testing",
            "usability audit",
            "wcag accessibility testing",
            "manual mobile app testing",
            "ad-hoc testing",
        ],
    });
}

export default function ManualTestingPage() {
    // TODO(seo phase-2 audit): Pattern D anti-pattern fixed per-page here.
    // PR-3 will fix at breadcrumb component level cascading to 40 pages.
    //
    // Pre-fix this page also exhibited Pattern B (slug typo: og:url declared
    // /manual-testing instead of /manual-testing-services) and Pattern C
    // (the typo'd URL is itself a 301 redirect source in next.config.ts).
    // Both fixed automatically by buildPageMetadata, which derives og:url
    // from the same pathname as canonical. The breadcrumb leaf URL below
    // is also corrected from /manual-testing → /manual-testing-services.
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        {
            name: "Manual Testing Services",
            url: "https://www.testriq.com/manual-testing-services",
        },
    ];

    return (
        <div>
            <StructuredData data={manualTestingServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <ManualTestingHeroSection />
                <ManualTestingComprehensiveSlider />
                <ManualTestingHumanAdvantage />
                <ManualTestingProvenTestingProcess />
                <ManualTestingWhyChooseTestriq />
                <ManualTestingToolsFramework />
                <ManualTestingGlobalReach />
                <ManualTestingCaseStudies />
                <ManualTestingFAQs />
                <ManualTestingReadyToEnsureQuality />
            </MainLayout>
        </div>
    );
}
