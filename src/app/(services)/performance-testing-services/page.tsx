import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    createBreadcrumbSchema,
    performanceTestingServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";

import PerformanceTestingHeroSection from "@/components/sections/PerformanceTestingHeroSection";
import PerformanceTestingChallenges from "@/components/sections/PerformanceTestingChallenges";
import PerformanceTestingComprehensiveSlider from "@/components/sections/PerformanceTestingComprehensiveSlider";
import PerformanceTestingProvenTestingProcess from "@/components/sections/PerformanceTestingProvenTestingProcess";
import PerformanceTestingWhyChooseTestriq from "@/components/sections/PerformanceTestingWhyChooseTestriq";
import PerformanceTestingToolsFramework from "@/components/sections/PerformanceTestingToolsFramework";
import PerformanceTestingFAQs from "@/components/sections/PerformanceTestingFAQs";
import PerformanceTestingReadyToEnsureQuality from "@/components/sections/PerformanceTestingReadyToEnsureQuality";

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/performance-testing-services",
        title: "Performance Testing Services | Load & Stress Testing | Testriq",
        description:
            "Validate application resilience at scale with Testriq's performance testing services. ISO 29119-compliant load, stress, and endurance testing for DevOps teams.",
        ogImage: {
            url: "https://www.testriq.com/OG/performance-testing-og-image.webp",
            width: 1200,
            height: 630,
            alt: "Performance Testing Services by Testriq",
            type: "image/webp",
        },
        keywords: [
            "performance testing services",
            "load testing solutions",
            "stress testing services",
            "scalability testing",
            "endurance testing qa",
            "ci/cd performance testing",
            "iso 29119 performance testing",
            "application performance qa",
            "distributed load testing",
        ],
    });
}

export default function PerformanceTestingPage() {
    // TODO(seo phase-2 audit): Pattern A fixed — og:url was "/services/performance-testing-services"
    // (relative path with /services/ prefix resolving via metadataBase to wrong URL); now derived
    // from pathname via buildPageMetadata. Pattern D fixed — breadcrumb had 3 items where items 2
    // ("Services") and 3 ("Performance Testing") both pointed at /performance-testing-services;
    // reduced to 2 canonical items per PR-2A/2B template. Title fixed — was "Stress Testing
    // Services | Performance Testing Services" (no brand, wrong leading keyword); og:title was a
    // separate better value. 7 dynamic() → direct imports. PR-3 will fix at breadcrumb component
    // level cascading to 40 pages.
    const breadcrumbItems = [
        { name: "Home", url: "https://www.testriq.com/" },
        {
            name: "Performance Testing",
            url: "https://www.testriq.com/performance-testing-services",
        },
    ];

    return (
        <div>
            <StructuredData data={performanceTestingServiceSchema} />
            <StructuredData data={createBreadcrumbSchema(breadcrumbItems)} />
            <MainLayout>
                <PerformanceTestingHeroSection />
                <PerformanceTestingChallenges />
                <PerformanceTestingComprehensiveSlider />
                <PerformanceTestingProvenTestingProcess />
                <PerformanceTestingWhyChooseTestriq />
                <PerformanceTestingToolsFramework />
                <PerformanceTestingFAQs />
                <PerformanceTestingReadyToEnsureQuality />
            </MainLayout>
        </div>
    );
}
